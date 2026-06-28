// HIRA — Edge Function : envoie les notifications push des rappels échus.
// Déclenchée par un cron Supabase (toutes les minutes).
import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";

const VAPID_PUBLIC = Deno.env.get("VAPID_PUBLIC")!;
const VAPID_PRIVATE = Deno.env.get("VAPID_PRIVATE")!;
const VAPID_SUBJECT = Deno.env.get("VAPID_SUBJECT") || "mailto:kitsolaire.autoconso@gmail.com";

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, VAPID_PRIVATE);

const supa = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

Deno.serve(async () => {
  const now = Date.now();
  const { data: rows, error } = await supa.from("hira_data").select("user_id,data");
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  let sent = 0;
  for (const row of rows ?? []) {
    const projects = (row.data && row.data.projects) || [];
    const due = projects.filter((p: any) => p.reminder && p.reminder <= now);
    if (!due.length) continue;

    const { data: subs } = await supa
      .from("push_subs").select("subscription").eq("user_id", row.user_id);
    if (!subs || !subs.length) continue;

    for (const p of due) {
      // anti-doublon : on n'envoie qu'une fois par (user, projet, échéance)
      const { data: already } = await supa.from("push_log")
        .select("id")
        .eq("user_id", row.user_id).eq("project_id", p.id).eq("reminder_ts", p.reminder)
        .maybeSingle();
      if (already) continue;

      const payload = JSON.stringify({ title: "HIRA — Rappel", body: p.name || "Projet", projectId: p.id });
      for (const s of subs) {
        try { await webpush.sendNotification(s.subscription, payload); }
        catch (_) { /* abonnement expiré : on ignore */ }
      }
      await supa.from("push_log").insert({ user_id: row.user_id, project_id: p.id, reminder_ts: p.reminder });
      sent++;
    }
  }
  return new Response(JSON.stringify({ ok: true, sent }), { headers: { "content-type": "application/json" } });
});
