# HIRA — Finir le Push « app fermée » (Phase B)

> Objectif : recevoir les notifications de rappel **même quand l'app est fermée**.
> Le code (client + Edge Function) est déjà poussé. Il reste 4 étapes serveur, à faire **une seule fois**.
> Les clés sont dans **`.secrets.local.md`** (non poussé).

**✅ Étape 0 — CLI Supabase installé** (`supabase 2.109.0`, via Homebrew).

---

## 1) Se connecter + lier le projet
Ouvre un terminal dans le dossier du projet :

```bash
cd ~/Documents/HIRA
supabase login                     # ouvre le navigateur (OAuth) → autorise
supabase link --project-ref ajynukcwfhxgsertpwtx
```

## 2) Créer les tables + le cron (SQL)
Dans **Supabase → SQL Editor**, colle ce script en remplaçant `<SERVICE_ROLE_KEY>`
par la clé `service_role` de `.secrets.local.md`, puis exécute :

```sql
create extension if not exists pg_cron;
create extension if not exists pg_net;

create table if not exists push_subs (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users on delete cascade,
  subscription jsonb not null,
  created bigint default 0
);
alter table push_subs enable row level security;
create policy "own subs" on push_subs for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table if not exists push_log (
  id bigint generated always as identity primary key,
  user_id uuid, project_id text, reminder_ts bigint,
  sent_at timestamptz default now()
);
alter table push_log enable row level security;

select cron.schedule('hira-reminders', '* * * * *', $$
  select net.http_post(
    url := 'https://ajynukcwfhxgsertpwtx.supabase.co/functions/v1/send-reminders',
    headers := jsonb_build_object(
      'Content-Type','application/json',
      'Authorization','Bearer <SERVICE_ROLE_KEY>'
    )
  );
$$);
```

## 3) Déployer la fonction
```bash
supabase functions deploy send-reminders
```

## 4) Renseigner les secrets de la fonction
Reprends les valeurs depuis `.secrets.local.md` :

```bash
supabase secrets set \
  VAPID_PUBLIC='…' \
  VAPID_PRIVATE='…' \
  VAPID_SUBJECT='mailto:kitsolaire.autoconso@gmail.com'
```

> `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` sont injectés automatiquement dans les Edge Functions — pas besoin de les définir.

---

## Test final
1. iPhone → ouvrir HIRA **depuis l'icône** (PWA), pas Safari.
2. Onglet **Synchro** → se connecter (lien magique email).
3. Ouvrir un projet → mettre un **Rappel** dans ~2 min.
4. **Fermer complètement l'app.**
5. La notification doit tomber à l'heure. ✅

## Dépannage
- Rien ne tombe → **Supabase → Edge Functions → send-reminders → Logs** (erreurs d'envoi ?).
- Le cron tourne-t-il ? `select * from cron.job;` puis `select * from cron.job_run_details order by start_time desc limit 5;`
- Abonnement push enregistré ? `select count(*) from push_subs;` (doit être ≥ 1 après connexion sur l'iPhone).
- 401 dans les logs du cron → la `<SERVICE_ROLE_KEY>` du header (étape 2) est fausse.
