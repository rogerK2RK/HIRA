// HIRA — Edge Function : renvoie le résumé "étape en cours" pour le widget iOS (Scriptable).
// Protégée par un secret partagé (?key=...) — pas d'auth utilisateur côté widget.
import { createClient } from "npm:@supabase/supabase-js@2";

const SECRET = Deno.env.get("WIDGET_SECRET")!;
const supa = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const FALLBACK = {
  name: "—", phase: "Aucun projet", phaseIndex: 0, phaseTotal: 0,
  doneInPhase: 0, stepTotal: 0, percent: 0, complete: false, reminder: null
};

Deno.serve(async (req) => {
  const key = new URL(req.url).searchParams.get("key") || "";
  if (key !== SECRET) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401, headers: { "content-type": "application/json" }
    });
  }
  // Mono-utilisateur : on prend la ligne la plus récemment synchronisée.
  const { data, error } = await supa
    .from("hira_data").select("data,updated")
    .order("updated", { ascending: false }).limit(1).maybeSingle();
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { "content-type": "application/json" }
    });
  }
  const w = (data && data.data && data.data.widget) || FALLBACK;
  return new Response(JSON.stringify(w), {
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
});
