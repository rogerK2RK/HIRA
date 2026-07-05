# HIRA — Studio Companion 🎵

Ton copilote de création musicale. HIRA t'accompagne sur chaque projet — de l'idée
jusqu'au master — avec une trame claire, les cibles en dB/LUFS à respecter, et les
plugins adaptés à TON matériel.

## Comment l'ouvrir

Double-clique simplement sur **`index.html`** : le site s'ouvre dans ton navigateur.
Aucune installation, ça marche hors ligne. Tes projets sont sauvegardés directement
sur ton Mac (dans le navigateur).

Pensé **mobile** aussi (iPhone) : sur petit écran, le menu se replie derrière le
bouton ☰ en haut à gauche, et la création de projet se fait en **étapes guidées**.

> Astuce : garde-le ouvert dans un onglet pendant que tu bosses sur FL / Luna, et
> coche les étapes au fur et à mesure.

## Ce que tu peux faire

- **Mes projets** — crée un projet (instru seule ou morceau complet). Chaque projet
  génère sa trame : Concept → Prod → Enregistrement → Édition → Mix → Master → Export.
  Coche les étapes, suis ta progression (%).
- **Cibles dB / LUFS** — l'aide-mémoire des niveaux à respecter à chaque étape.
- **Chaînes types** — des recettes prêtes à l'emploi (voix SM7B, voix NT1-A, bus master)
  avec tes plugins dans le bon ordre.
- **Templates de bus** — quoi mettre sur chaque élément (basse, kick, voix, drums,
  synthés, master…) : la chaîne dans l'ordre, les plugins conseillés et la cible.
- **Conseils & réflexes** — sur quoi écouter (casque/enceintes), comment mesurer
  les dB/LUFS, dépannage problème→solution, et quand utiliser chaque technique
  (compression parallèle, sidechain, M/S…).
- **Mon matériel** — tes machines + conseils d'utilisation (Volt 276, micros, casques…).
- **Mes plugins** — tes plugins détectés, classés par usage, avec le « quand l'utiliser ».

## Synchro multi-appareils (optionnel)

Onglet **Synchro** : connecte-toi par email (code à 6 chiffres) pour retrouver
tes projets sur tous tes appareils (iPhone ↔ Mac). L'app reste **hors ligne**
(localStorage = cache) et se synchronise dès que tu es connecté. Stockage via
Supabase ; chaque utilisateur ne voit que ses données.

## Sauvegarde

En bas de la barre latérale : **Backup** (télécharge un fichier de tes projets) et
**Restaurer** (recharge un backup). Fais un backup de temps en temps, ou avant de
changer/réinitialiser ton navigateur.

## Personnaliser

Tout le contenu studio (trames, conseils, cibles, plugins) est dans
**`js/data.js`** — un fichier lisible que tu peux modifier toi-même quand tu veux
ajouter un plugin, une étape ou un conseil.

---

## 🚧 État d'avancement — REPRENDRE ICI

**Fait et déployé** (Vercel auto depuis `main`) :
- App complète (projets en slides, checklists + sous-desc, cibles, chaînes & bus en accordéons, conseils, tests de mix).
- **Chaînes voix par genre** (onglet Chaînes types) : Rap dur, Drill mélodique, Afrobeat, RnB Lead, RnB Backs, Pop, Dancehall — chacune avec sa chaîne ordonnée + plugins + cible.
- **Plugins à jour (rescan complet)** : UAD natifs + iZotope (RX 12/11, Nectar 4, Neutron 4/5, Ozone 12/11, Insight 2, VocalSynth 2), Native Instruments (Massive X, Battery 4, Guitar Rig 7, Raum, Replika XT), Brainworx (bx_glue, bx_enhancer), suite Kilohearts complète… Rangés dans « Mes plugins » (16 catégories, dont « Effets voix créatifs » et « Mesure / Analyse »).
- **Process REC sur prod** (achetée / YouTube) : onglet dédié, sélecteur de genre, channels REC + MIX (lead/ad-libs/backs) et simulateur d'effets (BPM → autotune/reverb/delay).
- **Onglet « Monter le studio »** : plan d'équipement Madagascar, options entrée/milieu de gamme + liens de recherche produits.
- **Bus « Voix — réglages par genre »** (onglet Templates de bus) : aide-mémoire compact des différences par style.
- **Affichage sans scroll de page** : la page est verrouillée (`html,body overflow:hidden`, `#app` en `100dvh`), seul le **contenu** scrolle en interne et le **tiroir burger** garde son scroll. Header stable, plus de rebond/double-scroll.
- **PWA installable + hors ligne** (manifest, service worker `hira-v10`, icônes).
- **Synchro multi-appareils** Supabase (lien magique email) — ✅ fonctionne.
- **Rappels (phase A)** : notif quand l'app est ouverte. ✅
- **Push (phase B)** : code client + Edge Function `supabase/functions/send-reminders/` + SW push — **CODE POUSSÉ, reste la config serveur ci-dessous.**

**À FAIRE pour finir le push « app fermée » (phase B)** — voir le runbook **[`PHASE-B.md`](PHASE-B.md)** (étapes copier-coller).
- ✅ **CLI Supabase installé** (`supabase 2.109.0`, via Homebrew).
- Reste (interactif, à faire par toi) : `supabase login` + `link`, le **SQL** (tables + cron), `functions deploy send-reminders`, `secrets set` (clés dans `.secrets.local.md`).
- ⚠️ Ces étapes exigent le navigateur (OAuth) ou un personal access token `sbp_…` : non automatisables sans ça.

**Test final** : iPhone → ouvrir HIRA **depuis l'icône** (PWA) → onglet **Synchro** se connecter → projet → **Rappel** dans ~2 min → **fermer l'app** → la notif doit tomber.

> SQL du cron à exécuter (remplace `<SERVICE_ROLE_KEY>`) :
> ```sql
> create extension if not exists pg_cron;  create extension if not exists pg_net;
> create table if not exists push_subs (id bigint generated always as identity primary key,
>   user_id uuid references auth.users on delete cascade, subscription jsonb not null, created bigint default 0);
> alter table push_subs enable row level security;
> create policy "own subs" on push_subs for all to authenticated using (auth.uid()=user_id) with check (auth.uid()=user_id);
> create table if not exists push_log (id bigint generated always as identity primary key,
>   user_id uuid, project_id text, reminder_ts bigint, sent_at timestamptz default now());
> alter table push_log enable row level security;
> select cron.schedule('hira-reminders','* * * * *', $$
>   select net.http_post(url:='https://ajynukcwfhxgsertpwtx.supabase.co/functions/v1/send-reminders',
>     headers:=jsonb_build_object('Content-Type','application/json','Authorization','Bearer <SERVICE_ROLE_KEY>')); $$);
> ```

---

### Ton setup détecté
- MacBook Pro M4 · macOS 26.5 · 16 Go
- UAD Volt 276 · Adam Audio D3V · Rode NT1-A · Shure SM7B (+ FetHead) · DT1990 Pro · DT770 Pro
- FL Studio 2025 (prod) · UAD LUNA (rec/mix/master)
- FabFilter (suite) · Waves (grosse banque) · UAD natifs · Valhalla · Kilohearts · Omnisphere/Kontakt…
