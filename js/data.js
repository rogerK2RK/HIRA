/* =========================================================================
   HIRA — Base de connaissances
   Tout le contenu "studio" est ici : matériel, plugins, trames de projet,
   cibles dB/LUFS et guides. Tu peux éditer librement ce fichier.
   ========================================================================= */

const HIRA_DATA = {

  /* ----------------------------------------------------------------------
     TON MATÉRIEL
     ---------------------------------------------------------------------- */
  gear: [
    {
      cat: "Ordinateur",
      items: [
        { nom: "MacBook Pro M4", detail: "10 cœurs (4P/6E), 16 Go RAM, macOS 26.5", note: "Parfait pour Luna + FL. Si tu sens des saturations CPU en mix, augmente la taille du buffer (256/512) hors enregistrement." }
      ]
    },
    {
      cat: "Interface audio",
      items: [
        { nom: "UAD Volt 276", detail: "2 préamplis + compresseur 76 intégré + mode Vintage", note: "Le compresseur matériel (bouton 76) sert SURTOUT à l'enregistrement voix pour dompter les pics. À l'enregistrement, compresse léger (2-4 dB max) — tu finiras au mix. Active le mode Vintage pour une couleur préampli plus chaude." }
      ]
    },
    {
      cat: "Écoute",
      items: [
        { nom: "Adam Audio D3V", detail: "Monitors compacts actifs", note: "Référence principale. Grave limité sous ~50 Hz : ne te fie pas aux basses extrêmes dessus, vérifie au casque. Écoute à volume modéré (~75-80 dB SPL)." },
        { nom: "Beyerdynamic DT1990 Pro", detail: "Casque ouvert", note: "Pour le MIX : très détaillé et précis, c'est ta référence casque. Utilise les coussinets 'Analytical' pour le détail, 'Balanced' pour un rendu plus naturel." },
        { nom: "Beyerdynamic DT770 Pro 32Ω", detail: "Casque fermé", note: "Pour l'ENREGISTREMENT : isolation = pas de repisse du casque dans le micro. Idéal au tracking voix." }
      ]
    },
    {
      cat: "Micros",
      items: [
        { nom: "Rode NT1-A", detail: "Statique large membrane", note: "Très sensible et brillant. Idéal voix claires/chant doux, instruments acoustiques. Capte beaucoup la pièce : à utiliser dans un environnement traité/calme. Active le pad/filtre coupe-bas si sources fortes." },
        { nom: "Shure SM7B", detail: "Dynamique cardioïde", note: "Chaud, rejette la pièce et les bruits ambiants. Roi du rap/voix proche, podcast, voix puissantes. Demande beaucoup de gain → d'où le FetHead." },
        { nom: "Triton Audio FetHead", detail: "Préampli inline +20 dB", note: "Branché entre le SM7B et le Volt : ajoute ~20 dB de gain propre pour éviter de pousser le préampli du Volt dans le bruit. Nécessite l'alimentation fantôme +48V (sans danger pour le SM7B via FetHead)." }
      ]
    },
    {
      cat: "Logiciels",
      items: [
        { nom: "FL Studio 2025", detail: "Production / Beatmaking", note: "Là où tu construis l'instru. Exporte tes stems/pistes en WAV 24 bits pour les rapatrier dans Luna." },
        { nom: "UAD LUNA", detail: "Enregistrement / Mix / Master", note: "Ta DAW principale pour rec, mix, master. Bonne nouvelle confirmée : la version GRATUITE offre les MÊMES fonctions que LUNA Pro, à une exception près — les Hardware Inserts (insérer du matériel analo/outboard dans le mixer, réservé au Pro). Surtout : LUNA free charge bien tes plugins tiers AU/VST3 (FabFilter, Waves, Valhalla, Kilohearts…) directement — pas besoin de tout faire dans FL. Profite aussi du moteur Neve Summing et des plugins UAD natifs inclus. (LUNA n'accepte que l'AU et le VST3, pas le VST2.)" }
      ]
    }
  ],

  /* ----------------------------------------------------------------------
     TES PLUGINS (détectés sur ton Mac), classés par usage
     ---------------------------------------------------------------------- */
  plugins: {
    "EQ": [
      "FabFilter Pro-Q 4 / Pro-Q 3 (EQ chirurgical + dynamique — ton EQ n°1)",
      "Waves Scheps 73 / PuigTec / API 550 / SSL E-Channel EQ (EQ couleur)",
      "Waves F6 (EQ dynamique), H-EQ, REQ",
      "UAD Century Channel Strip (EQ+comp tout-en-un)"
    ],
    "Compression": [
      "FabFilter Pro-C 2 (transparent, polyvalent — ton comp n°1)",
      "UAD Teletronix LA-2A (voix, chant — doux, optique)",
      "UAD 1176 / Waves CLA-76 (voix rap, punch, transitoires)",
      "Waves CLA-2A / CLA-3A, API-2500, SSLComp (bus)",
      "Waves Vocal Rider / Bass Rider (automation de niveau)"
    ],
    "De-essing": [
      "FabFilter Pro-DS (ton de-esser n°1)",
      "Waves Sibilance / DeEsser"
    ],
    "Saturation / Couleur": [
      "FabFilter Saturn 2 (multibande, polyvalent)",
      "RC-20 Retro Color (lo-fi, vintage, vibe)",
      "Waves Abbey Road Saturator, J37, Kramer Tape, BB Tubes",
      "Tape Fiasco, Fresh Air (aigus/air)"
    ],
    "Reverb": [
      "Valhalla VintageVerb (le couteau suisse — chant, instruments)",
      "Valhalla Room / Plate (plus naturel / plaques)",
      "Valhalla Supermassive (ambiances XXL, GRATUIT)",
      "FabFilter Pro-R 2 (reverb transparente et modelable)",
      "Waves Abbey Road Chambers, H-Reverb, IR-L (convolution)"
    ],
    "Delay": [
      "Valhalla Delay (modes vintage/analog/tape)",
      "FabFilter Timeless 3 (delay créatif modulable)",
      "Waves H-Delay (slap/dub classique)"
    ],
    "Nettoyage voix": [
      "Waves Clarity Vx / Clarity Vx Pro (débruitage IA — top pour SM7B/NT1-A)",
      "Waves X-Noise, Z-Noise (bruit de fond), DeBreath (respirations)",
      "Waves X-Hum, X-Click (ronflette, clics)"
    ],
    "Tuning voix": [
      "Waves Tune Real-Time (correction temps réel, type Auto-Tune)",
      "Waves Tune (correction graphique précise)",
      "UAD Topline Vocal Tune"
    ],
    "Channel strip (chaîne voix complète)": [
      "Waves Scheps Omni Channel (EQ+comp+de-ess+saturation, excellent pour la voix)",
      "Waves CLA Vocals (rapide, préréglages voix)",
      "UAD Century Channel Strip"
    ],
    "Multibande / Dynamique avancée": [
      "FabFilter Pro-MB (compression multibande chirurgicale)",
      "Waves C6 / C4 (multibande), LinMB (mastering)"
    ],
    "Limiteur / Loudness (master)": [
      "FabFilter Pro-L 2 (limiteur de master n°1 + mesure LUFS/True Peak)",
      "Waves L2 / L3 / L4 Ultramaximizer",
      "Waves WLM Plus (mètre de loudness LUFS de référence)"
    ],
    "Imaging / Stéréo": [
      "Waves S1 Stereo Imager, Center, B360",
      "Kilohearts Stereo, FabFilter Pro-Q (mode M/S)"
    ],
    "Mix sur casque": [
      "Waves CLA Nx / Nx (simule une vraie pièce sur casque — utile avec ton DT1990)"
    ],
    "Synthés / Instruments": [
      "Omnisphere, Kontakt 7 & 8, Arturia Analog Lab V",
      "Xpand!2, Lounge Lizard EP-4, LABS",
      "Afroplug : Amavibe, Percussions, LogDrums"
    ]
  },

  /* ----------------------------------------------------------------------
     CIBLES dB / LUFS — l'aide-mémoire à respecter
     ---------------------------------------------------------------------- */
  targets: [
    { etape: "Enregistrement (voix)", cible: "Pics ≈ -12 à -6 dBFS · Moyenne ≈ -18 dBFS", note: "JAMAIS toucher 0 dBFS (clip). Règle le gain du Volt pour que tes passages les plus forts pointent vers -6 dBFS max. Garde de la marge." },
    { etape: "Gain staging (chaque piste au mix)", cible: "Moyenne ≈ -18 dBFS (≈ 0 VU)", note: "Les plugins qui modélisent de l'analo (1176, LA-2A, SSL…) sont calibrés pour ce niveau. Mets un gain/trim en entrée de piste si besoin." },
    { etape: "Bus master (avant mastering)", cible: "Pics ≤ -6 dBFS", note: "Laisse de la marge sur le bus de mix pour que le master respire. N'écrase pas dès le mix." },
    { etape: "Plancher de bruit", cible: "< -60 dBFS", note: "Idéalement le bruit de fond (souffle, ronflette) reste sous -60 dBFS. Sinon, nettoie avec Clarity Vx / X-Noise." },
    { etape: "Master — Streaming", cible: "-14 LUFS intégré · True Peak ≤ -1 dBTP", note: "Spotify, YouTube, Apple Music normalisent autour de -14 LUFS. Vise -14 LUFS et plafond -1 dBTP pour éviter la distorsion des codecs (MP3/AAC)." },
    { etape: "Master — Apple Music", cible: "-16 LUFS · TP ≤ -1 dBTP", note: "Apple cible un peu plus bas. -14 marche aussi, mais -16 = rendu le plus 'safe'." },
    { etape: "Master — 'Loud' / Club / Trap", cible: "-9 à -7 LUFS · TP ≤ -1 dBTP", note: "Plus fort = plus de compression/limitation. Attention à ne pas tuer la dynamique et les transitoires (kick). Compare toujours au même volume qu'une ref commerciale." }
  ],

  /* ----------------------------------------------------------------------
     TRAMES DE PROJET (les phases + checklists)
     Le champ "icon" prend un NOM d'icône (pas un emoji). Noms dispo :
     lightbulb, piano, mic, scissors, sliders, flag, share, music, target,
     link, grid, home, plus, headphones, laptop, app, edit, copy, notes.
     ---------------------------------------------------------------------- */
  phases: [
    {
      id: "concept",
      nom: "Concept & Préparation",
      icon: "lightbulb",
      pour: ["prod", "full"],
      desc: "Juste les grandes lignes pour partir droit.",
      tips: [
        "Cale BPM + tonalité et 2-3 références avant de te lancer.",
        "Garde tes éléments en MIDI le plus longtemps possible (plus flexible) — ne fige en audio que ce qui est définitif.",
        "Dossier projet propre (prod / recs / stems / mix)."
      ],
      checklist: [
        { t: "BPM, tonalité et intention définis", d: "Note le tempo, la gamme et l'émotion visée — ça cadre tout le reste." },
        { t: "Éléments gardés en MIDI tant que possible", d: "Tu pourras changer un son ou une note tant que ce n'est pas figé en audio." },
        { t: "Dossier projet organisé", d: "Sépare prod / recs / stems / mix. Tu t'y retrouveras dans 6 mois." }
      ],
      plugins: []
    },
    {
      id: "prod",
      nom: "Production (FL Studio)",
      icon: "piano",
      pour: ["prod", "full"],
      desc: "Construire l'instrumentale dans FL Studio.",
      tips: [
        "Compose d'abord, mixe ensuite. Ne passe pas 1h sur le son du kick avant d'avoir la structure.",
        "Garde du headroom : ton master FL devrait pointer autour de -6 dBFS, pas à 0.",
        "Pense arrangement : intro / couplet / refrain / pont / outro. Laisse de la place pour la voix (creuse les médiums 1-4 kHz là où la voix vivra).",
        "Quand l'instru est figée : exporte les pistes/stems en WAV 24 bits pour les importer dans Luna."
      ],
      checklist: [
        { t: "Structure du morceau posée", d: "Intro / couplet / refrain / pont / outro avant les détails — évite de tourner en rond." },
        { t: "Sons cohérents avec la réf", d: "Drums, basse, mélodies qui collent au style visé, pas juste 'jolis' isolément." },
        { t: "De l'espace pour la voix", d: "Creuse les 1-4 kHz et n'encombre pas là où la voix vivra." },
        { t: "Master FL avec headroom", d: "Pics ≈ -6 dBFS, aucun limiteur qui écrase : le volume se gère plus tard." },
        { t: "Stems exportés en WAV 24 bits", d: "Une piste par élément (44.1/48 kHz) pour pouvoir mixer dans Luna." },
        { t: "Projet FL sauvegardé + copie", d: "Garde le projet avec le MIDI intact, plus une sauvegarde de secours." }
      ],
      plugins: ["EQ", "Compression", "Saturation / Couleur", "Synthés / Instruments"]
    },
    {
      id: "rec",
      nom: "Enregistrement (Luna)",
      icon: "mic",
      pour: ["full"],
      desc: "Capter la voix proprement dans Luna.",
      tips: [
        "Choix du micro : SM7B (+ FetHead, +48V) pour voix proches/puissantes, rap, environnement non traité. NT1-A pour chant doux, voix claires, pièce calme.",
        "Niveau d'entrée : règle le gain du Volt pour que tes passages forts pointent à -6 dBFS MAX. Garde de la marge, on ne récupère pas un clip.",
        "Filtre anti-pop obligatoire + distance ~ une paume du micro. Recule un peu sur les 'P' et 'B'.",
        "Casque FERMÉ (DT770) au tracking pour éviter la repisse. Donne-toi une balance confortable (voix bien présente).",
        "Compression légère à la prise via le bouton 76 du Volt (2-4 dB de réduction max), OU rien et tu compresses au mix.",
        "Piège ARM (monitoring temps réel LUNA) : si tu actives l'Accelerated Realtime Monitoring pour t'entendre sans latence, LUNA DÉSACTIVE les plugins tiers AU/VST3 (FabFilter, Waves) sur la piste armée — seuls les UAD natifs restent actifs en monitoring. Pour t'entendre via une chaîne FabFilter/Waves au tracking, laisse l'ARM OFF et baisse le buffer (64/128). Sinon, ARM ON + chaîne UAD native (ex. Century Channel Strip) pour zéro latence.",
        "Enregistre plusieurs prises (3-5) + des doubles pour les refrains et les ad-libs."
      ],
      checklist: [
        { t: "Micro choisi selon la voix", d: "SM7B = rap/voix puissante ; NT1-A = chant doux en pièce calme." },
        { t: "Alim +48V activée", d: "Indispensable pour le FetHead (SM7B) et le NT1-A — sinon pas de signal." },
        { t: "Gain réglé : pics ≤ -6 dBFS", d: "Aucune LED rouge / clip. Un clip ne se rattrape pas au mix." },
        { t: "Anti-pop + bonne distance", d: "Une paume de distance, recule un peu sur les P et les B." },
        { t: "Casque fermé (DT770), balance OK", d: "Fermé = pas de repisse dans le micro ; voix bien présente dans le casque." },
        { t: "Mode de monitoring choisi", d: "ARM ON + chaîne UAD native (zéro latence) OU ARM OFF + buffer bas (64/128) pour t'entendre via FabFilter." },
        { t: "Pièce calme (fond < -60 dBFS)", d: "Coupe les sources de bruit : pas de souffle ni de ronflette anormale." },
        { t: "Lead + doubles + ad-libs enregistrés", d: "Prévois 3-5 prises et des doubles pour avoir de la matière au mix." },
        { t: "Meilleures prises repérées", d: "Marque/nomme les bonnes prises tout de suite : gain de temps à l'édition." }
      ],
      plugins: ["Channel strip (chaîne voix complète)", "Compression"]
    },
    {
      id: "edit",
      nom: "Édition & Tuning",
      icon: "scissors",
      pour: ["full"],
      desc: "Nettoyer, comper et caler la voix avant de mixer.",
      tips: [
        "Comping : assemble la meilleure prise à partir des différentes prises (par phrase si besoin).",
        "Nettoie : enlève les blancs, les bruits de bouche/clics (X-Click), respirations trop fortes (DeBreath ou à la main).",
        "Débruitage si nécessaire : Clarity Vx ou X-Noise sur le souffle/ronflette — léger, pas trop.",
        "Tuning : Waves Tune Real-Time pour un calage temps réel, ou Waves Tune pour un travail graphique précis. Reste naturel sauf effet voulu.",
        "Timing : cale les syllabes off-beat, aligne les doubles avec la prise lead."
      ],
      checklist: [
        { t: "Comp final assemblé", d: "Assemble la meilleure version à partir des prises, phrase par phrase si besoin." },
        { t: "Blancs / bruits / clics nettoyés", d: "Enlève silences, bruits de bouche et clics (X-Click)." },
        { t: "Débruitage léger si besoin", d: "Clarity Vx / X-Noise sur souffle/ronflette, sans créer d'artefacts." },
        { t: "Respirations gérées", d: "Réduis-les, ne les supprime pas : ça doit rester naturel." },
        { t: "Tuning appliqué (naturel)", d: "Cale la justesse sans effet robotique, sauf si c'est l'effet voulu." },
        { t: "Timing calé, doubles alignés", d: "Recale les syllabes off-beat et aligne les doubles sur la prise lead." }
      ],
      plugins: ["Nettoyage voix", "Tuning voix"]
    },
    {
      id: "mix",
      nom: "Mixage",
      icon: "sliders",
      pour: ["full", "prod"],
      desc: "Équilibrer tous les éléments pour un son clair et cohérent.",
      tips: [
        "Gain staging d'abord : amène chaque piste autour de -18 dBFS de moyenne avant tout plugin.",
        "Balance des volumes AVANT les effets : un bon mix est d'abord une bonne balance de faders.",
        "Ordre conseillé sur la voix : Coupe-bas → Nettoyage → EQ correctif (Pro-Q) → Compression (LA-2A doux puis 1176/CLA-76 pour le punch) → De-ess (Pro-DS) → EQ couleur → Saturation → Reverb/Delay en sends.",
        "EQ soustractif : enlève le superflu (boue 200-400 Hz, sifflantes, rumble) avant de booster.",
        "Compresse en série : 2 compresseurs légers (2-3 dB chacun) sonnent mieux qu'un seul qui écrase.",
        "Reverb & Delay en pistes d'envoi (sends), pas en insert, pour garder le contrôle. Coupe les basses de la reverb.",
        "Crée de l'espace : panoramique les éléments secondaires, garde kick/basse/voix lead au centre.",
        "Compression parallèle (New York) : duplique la voix (ou les drums) sur un bus très compressé, remonté discrètement sous l'original → densité sans perte de dynamique.",
        "Automatise le volume des mots/phrases qui décrochent plutôt que de tout écraser au compresseur — l'automation est ton meilleur compresseur.",
        "Choisis 1 à 3 références du même style, importe-les dans ta session et compare A/B au MÊME volume — c'est ta boussole tout le long du mix.",
        "Vérifie sur D3V + DT1990, et en mono pour la compatibilité.",
        "Bus master : laisse les pics ≤ -6 dBFS, pas de limiteur destructif ici."
      ],
      checklist: [
        { t: "Gain staging fait (~-18 dBFS)", d: "Amène chaque piste à ~-18 dBFS avant plugins : tes émulations analo sont calibrées pour ça." },
        { t: "Balance des faders sans effets", d: "Un bon mix est d'abord une bonne balance de volumes, avant tout plugin." },
        { t: "Coupe-bas où le grave est inutile", d: "Nettoie le bas du spectre pour dégager kick et basse." },
        { t: "Voix : EQ + comp série + de-ess", d: "Pro-Q → LA-2A puis 1176 → Pro-DS. Voix devant et stable." },
        { t: "Basse et kick cohabitent", d: "L'un laisse la place à l'autre : sidechain léger ou EQ complémentaire." },
        { t: "Reverb & delay en sends", d: "En sends pour le contrôle ; coupe le bas de la reverb (pas de boue)." },
        { t: "Panoramique : centre dégagé", d: "Élargis les éléments secondaires, garde kick/basse/voix au centre." },
        { t: "Vérifié en mono", d: "Passe en mono : rien ne doit disparaître (problème de phase)." },
        { t: "1 à 3 références comparées A/B", d: "Compare à des morceaux pros du même style, au MÊME volume." },
        { t: "Écoute croisée D3V + DT1990", d: "Décide sur enceintes, peaufine au casque, à volume modéré." },
        { t: "Bus master propre (pics ≤ -6 dBFS)", d: "Garde de la marge sur le bus pour que le master respire." },
        { t: "Bounce WAV 24 bits sans limiteur", d: "Exporte une piste stéréo propre pour le mastering." }
      ],
      plugins: ["EQ", "Compression", "De-essing", "Saturation / Couleur", "Reverb", "Delay", "Imaging / Stéréo", "Mix sur casque"]
    },
    {
      id: "master",
      nom: "Mastering (Luna)",
      icon: "flag",
      pour: ["full", "prod"],
      desc: "Finaliser : cohérence tonale, niveau commercial, format de livraison.",
      tips: [
        "Pars d'un mix qui a du headroom (pics ≤ -6 dBFS). Un bon master ne sauve pas un mauvais mix.",
        "Chaîne type : EQ large (Pro-Q en corrections douces ±1-2 dB) → compression de bus légère (1-2 dB, ratio 1.5:1-2:1) → saturation subtile → EQ de finition → limiteur (Pro-L 2).",
        "Limiteur Pro-L 2 : règle le ceiling (True Peak) à -1 dBTP et monte le gain jusqu'à atteindre ta cible LUFS. 'True Peak Limiting' activé.",
        "Cible de loudness : -14 LUFS intégré pour le streaming. Plus fort (-9/-8) seulement si le style l'exige, en surveillant la dynamique.",
        "Mesure avec WLM Plus ou le mètre de Pro-L 2 (LUFS intégré + True Peak). Ne te fie pas qu'à l'oreille pour le niveau.",
        "Compare A/B avec un morceau commercial du même style, au MÊME volume perçu (sinon 'plus fort = paraît meilleur' te trompe).",
        "Vérifie sur plusieurs écoutes : D3V, DT1990, et idéalement enceintes téléphone/voiture.",
        "Dithering : seulement si tu exportes en 16 bits (vieux CD/plateformes), ajoute un dither en TOUT dernier de la chaîne. En 24 bits = inutile.",
        "Anticipe l'encodage lossy : un MP3/AAC peut faire remonter le True Peak — c'est pour ça qu'on plafonne à -1 dBTP, garde cette marge."
      ],
      checklist: [
        { t: "Mix importé avec headroom", d: "Une seule piste stéréo (pics ≤ -6 dBFS), sans limiteur déjà posé." },
        { t: "EQ de master doux (±1-2 dB)", d: "Pro-Q en retouches larges pour l'équilibre tonal global." },
        { t: "Compression de bus légère", d: "Juste de la colle (SSLComp / Pro-C 2, 1-2 dB), sans pomper." },
        { t: "Saturation subtile si besoin", d: "Une pointe de chaleur/densité (Abbey Road Saturator)." },
        { t: "Pro-L 2 : ceiling -1 dBTP, TP ON", d: "Plafond à -1 dBTP, True Peak activé, monte le gain vers la cible." },
        { t: "Cible LUFS atteinte", d: "-14 LUFS intégré pour le streaming, mesuré (WLM / Pro-L 2), pas à l'oreille." },
        { t: "True Peak ≤ -1 dBTP vérifié", d: "Évite la distorsion après encodage MP3/AAC." },
        { t: "Comparé A/B à une réf pro", d: "Aligne le volume avec un morceau commercial pour juger objectivement." },
        { t: "Vérifié sur plusieurs écoutes", d: "D3V, casque, et idéalement téléphone / voiture." },
        { t: "Dither si export 16 bits", d: "Seulement pour un export 16 bits, ajouté en tout dernier. Inutile en 24 bits." },
        { t: "Aucune distorsion / pompage", d: "Écoute finale : rien ne pompe ni ne sature." }
      ],
      plugins: ["EQ", "Compression", "Multibande / Dynamique avancée", "Saturation / Couleur", "Limiteur / Loudness (master)"]
    },
    {
      id: "export",
      nom: "Export & Livraison",
      icon: "share",
      pour: ["prod", "full"],
      desc: "Sortir les bons fichiers, archiver proprement.",
      tips: [
        "Master final : WAV 24 bits, à la fréquence d'échantillonnage du projet (44.1 ou 48 kHz). C'est le fichier maître.",
        "Pour le streaming/distribution : fournis le WAV 24 bits, la plateforme s'occupe de l'encodage. Évite de livrer un MP3.",
        "Garde une version 'instru' (sans voix) et une version 'clean' (sans gros mots) si pertinent.",
        "Archive : projet Luna + stems + master + notes. Tu te remercieras dans 6 mois.",
        "Note tes réglages clés (BPM, tonalité, LUFS atteint) dans la fiche projet HIRA."
      ],
      checklist: [
        { t: "Master exporté en WAV 24 bits", d: "À la fréquence du projet (44.1/48 kHz) — c'est ton fichier maître." },
        { t: "Version instrumentale exportée", d: "Garde une version sans voix (et 'clean' si pertinent)." },
        { t: "Nom de fichier propre", d: "Format clair « Artiste - Titre » pour la distribution." },
        { t: "Projet + stems + master archivés", d: "Sauvegarde projet Luna + stems + master + notes." },
        { t: "Réglages clés notés", d: "BPM, tonalité, LUFS atteint — note-les dans la fiche projet." }
      ],
      plugins: []
    }
  ],

  /* ----------------------------------------------------------------------
     CHAÎNES TYPES (recettes prêtes à l'emploi)
     ---------------------------------------------------------------------- */
  chains: [
    {
      nom: "Voix Rap / Voix puissante (SM7B)",
      contexte: "SM7B + FetHead + Volt 276 (mode Vintage). Voix proche, présente, qui passe devant l'instru.",
      etapes: [
        "Coupe-bas ~80-100 Hz (Pro-Q 4)",
        "Nettoyage léger si souffle (Clarity Vx)",
        "EQ correctif : enlève la boue 200-400 Hz, dompte les sifflantes",
        "LA-2A : compression douce et constante (3-5 dB)",
        "1176 / CLA-76 : punch et contrôle des pics (réglage 'all-buttons' avec parcimonie)",
        "De-ess : Pro-DS sur les 5-9 kHz",
        "EQ couleur : un peu d'air vers 10-12 kHz (Fresh Air / Pro-Q)",
        "Saturation légère (Saturn 2 / RC-20) pour la présence",
        "Sends : reverb courte (Valhalla Room) + slap delay (H-Delay)"
      ],
      vst: ["Pro-Q 4", "Clarity Vx", "LA-2A + 1176/CLA-76", "Pro-DS", "Saturn 2 / RC-20", "Valhalla Room + H-Delay"],
      cible: "Voix devant l'instru, claire et punchy · -18 dBFS avant plugins"
    },
    {
      nom: "Chant mélodique (NT1-A)",
      contexte: "NT1-A en pièce calme. Voix claire, aérée, plus de nuances.",
      etapes: [
        "Coupe-bas ~70-90 Hz",
        "Tuning naturel (Waves Tune Real-Time)",
        "EQ : adoucis la brillance du NT1-A si trop agressive (léger creux 6-8 kHz)",
        "Compression douce LA-2A (optique) pour la régularité",
        "De-ess Pro-DS",
        "Reverb plaque (Valhalla Plate) + delay 1/4 (Valhalla Delay) en sends",
        "Vocal Rider pour lisser les variations de niveau"
      ],
      vst: ["Pro-Q 4", "Waves Tune Real-Time", "LA-2A", "Pro-DS", "Valhalla Plate + Delay", "Vocal Rider"],
      cible: "Voix douce et régulière, aérée · sans dureté 6-8 kHz"
    },
    {
      nom: "Bus Master streaming",
      contexte: "Sur le mix final avec headroom (-6 dBFS). Objectif -14 LUFS / -1 dBTP.",
      etapes: [
        "Pro-Q 4 : corrections douces ±1-2 dB (équilibre grave/aigu)",
        "Compression de bus légère (SSLComp ou Pro-C 2, ratio 2:1, 1-2 dB)",
        "Saturation subtile (Abbey Road Saturator) pour la cohésion",
        "Pro-L 2 : ceiling -1 dBTP, True Peak ON, monte le gain jusqu'à -14 LUFS",
        "WLM Plus pour vérifier LUFS intégré + True Peak"
      ],
      vst: ["Pro-Q 4", "SSLComp / Pro-C 2", "Abbey Road Saturator", "Pro-L 2", "WLM Plus"],
      cible: "-14 LUFS intégré · True Peak ≤ -1 dBTP"
    },
    {
      nom: "Ad-libs & doublures (voix)",
      contexte: "Les couches autour du lead : doubles, harmonies, ad-libs. Elles doivent ÉPAISSIR sans masquer le lead.",
      etapes: [
        "Doubles : reprends la chaîne du lead mais panoramique L/R (ex. -40 / +40) et baisse ~4-6 dB sous le lead",
        "Coupe-bas plus haut (~120 Hz) et creuse un peu les médiums pour laisser la place au lead",
        "Compression plus marquée (CLA-76) pour 'coller' les doubles derrière le lead",
        "Ad-libs : envoie-les plus loin — throw delay (1/4 pointé, H-Delay) + reverb plus généreuse (Valhalla VintageVerb)",
        "Détune léger sur les doubles (RC-20 ou pitch ±5-8 cents) pour élargir la stéréo",
        "Automation : baisse les couches quand le lead chante, remonte-les dans les trous"
      ],
      vst: ["Pro-Q 4", "CLA-76", "RC-20 (détune)", "Valhalla VintageVerb + H-Delay"],
      cible: "-4 à -6 dB sous le lead · larges sur les côtés"
    },
    {
      nom: "Voix Auto-Tune (effet trap / RnB)",
      contexte: "Pitch verrouillé sur la gamme, du subtil au robotique. SM7B ou NT1-A. Vise une prise déjà juste : l'auto-tune corrige mieux du proche.",
      etapes: [
        "Renseigne la tonalité/gamme du morceau dans Waves Tune Real-Time",
        "Place Tune Real-Time TÔT : après coupe-bas + nettoyage, AVANT la compression",
        "Retune Speed à 0 ms = effet robotique marqué ; plus lent (~20-40 ms) = correction discrète",
        "De-ess (Pro-DS) : l'auto-tune accentue les sifflantes",
        "Compression (1176 / CLA-76) APRÈS le tuning pour densifier",
        "Saturation (Saturn 2 / RC-20) + reverb/delay en sends pour la vibe moderne"
      ],
      vst: ["Waves Tune Real-Time", "Pro-Q 4", "Pro-DS", "1176 / CLA-76", "Saturn 2 / RC-20"],
      cible: "Pitch calé sur la gamme · effet selon le Retune Speed"
    },
    {
      nom: "Bus Drums (cohésion + punch)",
      contexte: "Regroupe kick/snare/hats/perc sur un bus pour les souder. Utile quand tu mixes les drums dans Luna.",
      etapes: [
        "Route toutes les drums dans un bus/groupe dédié",
        "Compression de bus (SSLComp / API-2500) : ratio ~4:1, attack medium, 2-4 dB de réduction pour le punch",
        "Saturation/tape (Abbey Road Saturator, Kramer Tape) pour la chaleur et la colle",
        "EQ de bus (Pro-Q) : un peu d'air vers 10 kHz, contrôle le bas si ça devient boueux",
        "Compression parallèle : un send très compressé remonté discrètement sous le bus = punch sans tuer la dynamique",
        "Garde le kick au centre ; panoramique légèrement hats/perc pour la largeur"
      ],
      vst: ["SSLComp / API-2500", "Abbey Road Saturator / Kramer Tape", "Pro-Q 4"],
      cible: "Batterie soudée qui groove · kick au centre"
    }
  ],

  /* ----------------------------------------------------------------------
     TEMPLATES DE BUS / CANAUX — quoi mettre sur chaque élément
     "icon" = nom d'icône (voir liste plus haut). Garde court et actionnable.
     ---------------------------------------------------------------------- */
  buses: [
    {
      nom: "Basse / 808", icon: "wave",
      tag: "Un sub net et défini, audible aussi sur petites enceintes.",
      prerequis: [
        "Gain staging : piste ~-18 dBFS de moyenne avant plugins.",
        "Une note tenue et propre pour régler (pas de clic parasite).",
        "Décide qui domine le grave : kick OU basse à un instant donné."
      ],
      chaine: [
        "Pro-Q 4 → coupe-bas 25-30 Hz + dompte 80-160 Hz. Cible : grave propre, pas de boue.",
        "Saturn 2 / RC-20 → harmoniques. Cible : audible sur mobile/laptop sans le sub.",
        "Pro-C 2 (ou LA-2A) → compression douce 2-4 dB. Cible : niveau stable, pas de trous.",
        "Pro-MB en sidechain du kick → duck léger. Cible : -2 à -4 dB quand le kick frappe.",
        "Pro-Q en M/S → mono sous ~120 Hz. Cible : grave centré, mono-compatible."
      ],
      vst: ["Pro-Q 4", "Saturn 2 / RC-20", "Pro-C 2 / LA-2A", "Pro-MB"],
      cible: "Mono dans le grave · laisse respirer le kick"
    },
    {
      nom: "Kick", icon: "target",
      tag: "Du poids en bas, du claquant qui traverse le mix.",
      prerequis: [
        "Gain staging ~-18 dBFS avant plugins.",
        "Sample de kick choisi qui colle au style (sub vs claquant)."
      ],
      chaine: [
        "Pro-Q 4 → creuse 300-500 Hz, boost 50-80 Hz + 3-5 kHz. Cible : poids en bas, clic qui passe.",
        "ShaperBox → règle attaque/sustain. Cible : transitoire net.",
        "Saturn 2 → saturation légère. Cible : corps et présence.",
        "UAD 1176 (option) → compression courte. Cible : niveau régulier, punch contrôlé."
      ],
      vst: ["Pro-Q 4", "ShaperBox 3", "Saturn 2", "UAD 1176"],
      cible: "Ancre du grave, complémentaire de la basse"
    },
    {
      nom: "Caisse claire / Clap", icon: "grid",
      tag: "Du corps et de la présence, sans agresser.",
      prerequis: [
        "Gain staging ~-18 dBFS.",
        "Snare/clap cohérent avec le kick (pas de masquage)."
      ],
      chaine: [
        "Pro-Q 4 → coupe-bas ~150 Hz, corps 200 Hz, présence 5 kHz, air 10 kHz. Cible : claque sans dureté.",
        "CLA-76 / 1176 → compression. Cible : punch et transitoires maîtrisés.",
        "Valhalla Room (send) → reverb courte. Cible : profondeur sans noyer.",
        "Saturn 2 → couleur. Cible : présence sur petites enceintes."
      ],
      vst: ["Pro-Q 4", "CLA-76 / 1176", "Valhalla Room", "Saturn 2"],
      cible: "Présente sans masquer la voix (1-4 kHz)"
    },
    {
      nom: "Hi-hats / Percussions", icon: "sliders",
      tag: "De l'air et du mouvement, jamais sifflant.",
      prerequis: [
        "Gain staging ~-18 dBFS.",
        "Groove/quantize calé avant de traiter le son."
      ],
      chaine: [
        "Pro-Q 4 → coupe-bas 300-400 Hz, dompte 8-10 kHz. Cible : air sans sifflement.",
        "Pro-C 2 → compression légère. Cible : éléments collés ensemble.",
        "Waves S1 → largeur. Cible : hats/perc sur les côtés, centre dégagé.",
        "Valhalla Delay (send) 1/8-1/16 → Cible : groove et mouvement."
      ],
      vst: ["Pro-Q 4", "Pro-C 2", "Waves S1", "Valhalla Delay"],
      cible: "Larges sur les côtés, doux dans les aigus"
    },
    {
      nom: "Bus Drums", icon: "sliders",
      tag: "Souder toute la batterie en un bloc qui groove.",
      prerequis: [
        "Toutes les drums routées dans UN bus/groupe.",
        "Balance des éléments déjà faite avant le bus."
      ],
      chaine: [
        "SSLComp / API-2500 → ~4:1, 2-4 dB. Cible : batterie soudée qui groove.",
        "Abbey Road Saturator / Kramer Tape → Cible : colle et chaleur.",
        "Pro-Q 4 → air 10 kHz, contrôle du bas. Cible : équilibre global.",
        "Comp parallèle (bus dupliqué très compressé, remonté) → Cible : punch sans perdre la dynamique."
      ],
      vst: ["SSLComp / API-2500", "Abbey Road Saturator", "Pro-Q 4"],
      cible: "Kick au centre · l'ensemble respire et pousse"
    },
    {
      nom: "Voix lead", icon: "mic",
      tag: "Devant, claire, intelligible sur tous les systèmes.",
      prerequis: [
        "Voix déjà comp/éditée, tunée et nettoyée (respirations, clics).",
        "Gain staging ~-18 dBFS avant plugins.",
        "Coupe-bas posé pour virer le rumble."
      ],
      chaine: [
        "Clarity Vx (si besoin) → débruitage léger. Cible : fond propre (< -60 dBFS).",
        "Pro-Q 4 → EQ soustractif. Cible : enlève boue 200-400 Hz + résonances.",
        "LA-2A → compression douce 3-5 dB. Cible : niveau régulier.",
        "1176 / CLA-76 → 2e comp pour le punch. Cible : transitoires tenus, voix dense.",
        "Pro-DS → de-ess 5-9 kHz. Cible : sifflantes domptées, pas tuées.",
        "EQ couleur + Saturn 2 → air 10-12 kHz. Cible : voix devant, présente.",
        "Reverb + delay (sends) → Cible : profondeur, voix posée dans l'espace."
      ],
      vst: ["Pro-Q 4", "LA-2A + 1176", "Pro-DS", "Scheps Omni Channel"],
      cible: "Au-dessus de l'instru · -18 dBFS avant plugins"
    },
    {
      nom: "Chœurs / Doublures", icon: "mic",
      tag: "Épaissir le lead sans le masquer.",
      prerequis: [
        "Doubles déjà calés/alignés sur le lead.",
        "Même tonalité/tuning que le lead."
      ],
      chaine: [
        "Pro-Q 4 → coupe-bas plus haut (~120 Hz) + creuse les médiums. Cible : place au lead.",
        "CLA-76 → compression marquée. Cible : doubles collés derrière.",
        "Pan L/R + RC-20 (détune léger) → Cible : largeur stéréo.",
        "Reverb/delay généreux (sends) → Cible : profondeur, fond du mix."
      ],
      vst: ["Pro-Q 4", "CLA-76", "RC-20", "Valhalla VintageVerb"],
      cible: "-4 à -6 dB sous le lead · sur les côtés"
    },
    {
      nom: "Synthés / Keys / Mélodies", icon: "piano",
      tag: "De la place pour la voix, du relief stéréo.",
      prerequis: [
        "Gain staging ~-18 dBFS.",
        "Sais où vivra la voix (pour creuser au bon endroit)."
      ],
      chaine: [
        "Pro-Q 4 → coupe-bas + creuse 1-4 kHz. Cible : espace pour la voix.",
        "Pro-C 2 → compression douce. Cible : niveau régulier.",
        "Saturn 2 / RC-20 (+ chorus) → Cible : couleur et relief.",
        "Reverb/delay (sends) → Cible : profondeur stéréo."
      ],
      vst: ["Pro-Q 4", "Pro-C 2", "Saturn 2 / RC-20", "Valhalla VintageVerb"],
      cible: "Creuse là où la voix vit (1-4 kHz)"
    },
    {
      nom: "Bus Master (sur LUNA)", icon: "flag",
      tag: "1 seule piste stéréo. Cohésion + niveau commercial, sans écraser.",
      prerequis: [
        "Mix terminé et bouncé en UNE piste stéréo, WAV 24 bits, avec headroom (pics ≤ -6 dBFS).",
        "Importe ce bounce sur UNE seule piste audio dans LUNA — aucun plugin de mix dessus.",
        "Aucun limiteur/maximizer n'était déjà posé sur le mix.",
        "Importe 1 réf commerciale du même style à côté pour comparer A/B au MÊME volume.",
        "Oreilles fraîches (écoute reposée), volume modéré (~75 dB)."
      ],
      chaine: [
        "Pro-Q 4 (EQ finition) → corrections LARGES ±1-2 dB max. Cible : équilibre grave/médium/aigu proche de la réf.",
        "Pro-C 2 ou SSLComp (glue) → ratio 2:1, attaque lente, 1-2 dB de réduction. Cible : cohésion, zéro pompage.",
        "Abbey Road Saturator / Saturn 2 (couleur) → drive très léger. Cible : densité/chaleur subtile.",
        "Pro-MB (multibande, optionnel) → dompte une bande qui dépasse (souvent bas-médium). Cible : contrôle ciblé.",
        "Pro-L 2 (limiteur) → ceiling -1 dBTP, True Peak ON, monte le gain. Cible : -14 LUFS intégré (streaming).",
        "WLM Plus / Youlean (mesure) → lis pendant que ça joue. Cible : -14 LUFS ±0,5 · True Peak ≤ -1 dBTP."
      ],
      vst: ["Pro-Q 4", "Pro-C 2 / SSLComp", "Abbey Road Saturator / Saturn 2", "Pro-MB", "Pro-L 2", "WLM Plus / Youlean"],
      cible: "-14 LUFS intégré · True Peak ≤ -1 dBTP · dynamique préservée"
    }
  ],

  /* ----------------------------------------------------------------------
     CONSEILS & RÉFLEXES — les bons gestes
     "icon" = nom d'icône. Une ligne contenant " → " s'affiche problème → solution.
     ---------------------------------------------------------------------- */
  guides: [
    {
      nom: "Casque ou enceintes ?", icon: "headphones",
      tag: "Sur quoi écouter à chaque étape.",
      lignes: [
        "Enceintes (Adam D3V) = référence pour la BALANCE, le grave et la largeur stéréo. Volume modéré (~75-80 dB).",
        "Casque ouvert (DT1990 Pro) = détails, réverbes, petits défauts, placement précis. Ton juge pour le mix fin.",
        "Casque fermé (DT770) = UNIQUEMENT au tracking (isolation, pas de repisse). Pas pour mixer.",
        "Méthode → décide la balance sur enceintes, peaufine au casque, puis vérifie sur les deux + en mono + sur ton téléphone.",
        "Grave sous ~50 Hz pas fiable sur les D3V → vérifie au casque ou à l'analyseur (Pro-Q).",
        "Tu mixes beaucoup au casque ? → CLA Nx sur le DT1990 simule une vraie pièce."
      ]
    },
    {
      nom: "Voir les dB / LUFS (mesurer)", icon: "target",
      tag: "Quels outils pour lire tes niveaux.",
      lignes: [
        "Niveau par piste (dBFS) → les mètres de LUNA, ou un VU-mètre (Waves VU). Vise ~-18 dBFS de moyenne avant plugins.",
        "Loudness + True Peak (master) → FabFilter Pro-L 2 (mètre intégré au limiteur) ou Waves WLM Plus. C'est là que tu lis -14 LUFS / -1 dBTP.",
        "Spectre / EQ → l'analyseur temps réel de FabFilter Pro-Q (voir la boue, les bosses, comparer à une réf).",
        "Stéréo / phase → Waves S1 ou un corrélateur pour vérifier la compatibilité mono.",
        "Gratuit et toujours visible → Youlean Loudness Meter (LUFS).",
        "Règle → mesure le LUFS INTÉGRÉ (tout le morceau), pas un instant. Mètres pour les niveaux, oreille pour le son."
      ]
    },
    {
      nom: "Dépannage (problème → solution)", icon: "wrench",
      tag: "Les galères courantes et comment les régler.",
      lignes: [
        "Ça sonne boueux/brouillon → coupe-bas partout où c'est inutile + creuse 200-400 Hz sur plusieurs pistes (Pro-Q).",
        "La voix ne passe pas devant → creuse 1-4 kHz dans l'instru, ajoute présence/air sur la voix, compresse-la un peu plus.",
        "Ça clippe / LED rouge → baisse le gain d'entrée (rec) ou de piste (mix). Garde -6 dBFS de marge, ne touche jamais 0.",
        "Mix plus faible que les refs → c'est NORMAL, le volume vient au master (Pro-L 2 → -14 LUFS). Compare au même volume.",
        "Trop de sibilances (sss) → de-esser (Pro-DS) sur 5-9 kHz, léger. Ne tue pas toutes les sifflantes.",
        "La basse disparaît sur petites enceintes → ajoute des harmoniques (Saturn 2 / RC-20) pour qu'on la 'devine' sans grave.",
        "La stéréo s'annule en mono → garde le grave en mono (<120 Hz), vérifie la phase, calme les effets stéréo extrêmes.",
        "Le mix pompe/respire bizarrement → compresse moins fort (plusieurs comps légers), allonge attaque/relâche, revois le sidechain."
      ]
    },
    {
      nom: "Mixer sur FL ou LUNA ?", icon: "laptop",
      tag: "Où mixer selon le type de projet.",
      lignes: [
        "Prod / instru seule → mixe dans FL : tout y est déjà, MIDI éditable, aucun export inutile.",
        "Morceau complet (avec voix) → mixe dans LUNA : tes voix y sont enregistrées, tu importes les stems de l'instru.",
        "Master → TOUJOURS dans LUNA : une seule piste stéréo, summing Neve, et tu apprends un vrai workflow de master.",
        "LUNA gratuit suffit pour mixer/master → il charge tes FabFilter/Waves (AU/VST3) ; seul le Hardware Inserts (outboard analo) manque, inutile pour toi.",
        "Avantage LUNA → summing/tone Neve, tape, workflow analo. Avantage FL → rapidité et MIDI sous la main.",
        "Dans tous les cas → garde le projet FL avec le MIDI intact, et exporte les stems en WAV 24 bits pour le mix.",
        "Évite de mixer à moitié dans les deux → choisis UN endroit par morceau pour rester cohérent."
      ]
    },
    {
      nom: "Quelle technique, quand ?", icon: "sliders",
      tag: "Les outils du mix et le bon moment pour chacun.",
      lignes: [
        "Compression parallèle → quand tu veux du PUNCH/densité SANS écraser la dynamique. Ex : voix rap (bus très compressé remonté sous la voix claire) ou bus drums. Remonte jusqu'à sentir le corps, puis recule un poil.",
        "Compression en série (2 comps légers) → quand un seul comp devrait trop travailler. Ex voix : LA-2A doux (régularité) puis 1176 (transitoires), 2-3 dB chacun.",
        "Sidechain → quand kick et basse se marchent dessus. Duck léger la basse sur le kick (Pro-MB ou comp en sidechain).",
        "De-essing → seulement s'il reste des sifflantes gênantes après l'EQ couleur. Pas systématique.",
        "Saturation → pour la présence/chaleur, ou faire exister une basse sur petites enceintes. Subtil au mix, encore plus au master.",
        "EQ Mid/Side → élargir (boost aigus sur les côtés) ou recentrer (grave en mono). Pro-Q en mode M/S.",
        "Automation de volume → AVANT de compresser plus fort. Pour un mot/une phrase qui décroche, c'est plus naturel qu'un comp.",
        "Reverb/Delay en sends → toujours, pour garder le contrôle et traiter l'effet (coupe les basses de la reverb)."
      ]
    }
  ]
};
