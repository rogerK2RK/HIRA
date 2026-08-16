# 🔖 Reprise — où on s'est arrêté

_Dernière session : 17 août 2026 · version app : **hira-v35** · branche : `main`_

> Après un `git pull`, **recharge le site 2× (Ctrl+Shift+R)** pour charger la dernière version (le service worker cache l'ancienne).

---

## 📍 On reprend ICI demain

**Refonte UI/UX — reste à faire (optionnel, §6 « durée » du plan) :**
- [ ] **Rituel de fin de session** — à la fermeture d'un projet : récap « cette session : +1 étape, chaîne posée, master à −14.2 LUFS ».
- [ ] **Rotation de conseils contextuelle** — micro-variation d'un conseil selon l'étape courante (anti-lassitude).

**Document de refonte (design system complet) :**
https://claude.ai/code/artifact/bcd7a260-3807-482b-a750-aa4fab937bd4

---

## ✅ Déjà fait (appliqué dans le code)

**Refonte — Semaine 1 (quick wins)** — commit `c8b6914`
- Tokens Signal Path (`--concept` violet / `--mix` bleu / `--master` teal) + helper `[data-phase]`
- Accueil « Reprendre » (projet en cours, étape colorée, prochaine action, bouton)
- Bottom-nav mobile (< 768 px)
- Hover/focus des cartes cliquables

**Refonte — structurel** — commit `a94cf0f`
- Fiche projet **colorée par étape** + bloc **Contexte** (chaîne de plugins + cibles dB/LUFS de l'étape, sous les yeux)
- Cibles dB/LUFS en **lignes-mètres** colorées par étape (valeurs en mono)
- Chaînes types en **signal chain** (nœuds reliés dans l'ordre)
- Cartes projet (accueil + liste) : bordure = couleur de l'étape
- Rail tablette 768–1024 (sidebar compacte, se déploie au survol)

**Contenu YouTube** — commit `cee94ff`
- Tutos → **cook-ups rapides** (« comment je fais une prod / mélodie / drums »), voix IA optionnelle

**Plus tôt dans la session**
- Onglet Objectif 1M (plan, semaine adaptée bureau/TT/libre, calendrier mois/trimestre/année, **compteur d'abonnés en direct**)
- Onglet Outils YouTube (OBS installé ; **BlackHole à finir** : voir ci-dessous)
- Références d'écoute (+ Grammy), Raccourcis FL, rescan plugins, sidebar en accordéons, emojis → icônes SVG, « monkitsolaire » → « boulot »

---

## ⚠️ À vérifier / finir côté toi

- [ ] **BlackHole** (son de FL dans OBS) — à finir dans TON Terminal (demande ton mot de passe) :
  `brew install --cask blackhole-2ch` puis **redémarrer le Mac**.
- [ ] **Compteur d'abonnés** (onglet Objectif 1M) — affiche-t-il ton nombre ? (2 services testés : socialcounts + mixerno). Si « indispo », me le dire.
- [ ] **Rendu v35** — ouvrir un projet : la fiche se colore par étape ? Le bloc « Contexte » (chaîne + cibles) s'affiche ?
- [ ] **Détail** : un ancien format « Cook-up faceless » traîne à côté des 4 nouveaux cook-ups (redondant) — à fusionner si tu veux.
- [ ] **Support overhead téléphone** (~15-30 €) pour filmer les mains d'en haut (cook-ups).

---

## 🗺️ Repères

- Contenu / données : `js/data.js` — Vue / logique : `js/app.js` — Styles : `css/styles.css`
- Le n° de cache est dans `sw.js` (`const CACHE = "hira-vXX"`) — **à incrémenter à chaque déploiement** sinon l'ancienne version reste en cache.
- Déploiement : push sur `main` → Vercel auto (https://hira-pi.vercel.app/).
