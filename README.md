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

### Ton setup détecté
- MacBook Pro M4 · macOS 26.5 · 16 Go
- UAD Volt 276 · Adam Audio D3V · Rode NT1-A · Shure SM7B (+ FetHead) · DT1990 Pro · DT770 Pro
- FL Studio 2025 (prod) · UAD LUNA (rec/mix/master)
- FabFilter (suite) · Waves (grosse banque) · UAD natifs · Valhalla · Kilohearts · Omnisphere/Kontakt…
