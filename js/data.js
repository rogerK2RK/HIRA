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
      "UAD Century Channel Strip (EQ+comp tout-en-un)",
      "UAD Little Labs VOG (Voice Of God — ajoute/recale le grave : voix, kick, basse, 808)"
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
      "Tape Fiasco, Fresh Air (aigus/air)",
      "UAD Verve Analog Machines (tape/color analo — colle et chaleur sur voix, drums, bus)",
      "UAD 610 (préampli tube — chaleur/drive à l'entrée d'une voix ou d'un instrument)"
    ],
    "Reverb": [
      "Valhalla VintageVerb (le couteau suisse — chant, instruments)",
      "Valhalla Room / Plate (plus naturel / plaques)",
      "Valhalla Supermassive (ambiances XXL, GRATUIT)",
      "FabFilter Pro-R 2 (reverb transparente et modelable)",
      "Waves Abbey Road Chambers, H-Reverb, IR-L (convolution)",
      "UAD Pure Plate (réverb plaque studio — superbe sur voix RnB/soul et caisse claire)"
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
      "UAD Century Channel Strip",
      "UAD Hemisphere Mic Collection (modélise d'autres micros à partir de ton SM7B/NT1-A — change le caractère de la voix)"
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
      "Afroplug : Amavibe, Percussions, LogDrums",
      "UAD Electra 88 (piano électrique Rhodes), UAD PolyMAX (synthé poly analo)",
      "UAD Enigmatic '82 & Showtime (amplis guitare)"
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
        { t: "Test référence (A/B)", d: "Importe 1-3 morceaux pros du même style, égalise le volume et compare. Outil : Pro-Q (analyseur) ; gratuits : Youlean (caler le volume) + Voxengo SPAN (spectre)." },
        { t: "Test balance / tonalité", d: "Aucun élément ne domine ; spectre équilibré (ni trop de bas ni d'aigus). Outil : FabFilter Pro-Q (analyseur) ; gratuit : Voxengo SPAN." },
        { t: "Test mono (phase)", d: "Somme le mix en mono : rien ne doit disparaître. Outil : Waves S1 (ou le bouton mono du monitoring) ; gratuit : Voxengo SPAN (corrélateur proche de +1)." },
        { t: "Test casque + enceintes", d: "Écoute sur D3V puis DT1990 : grave, sifflantes, réverbes. Option : Waves CLA Nx sur le casque pour simuler une pièce." },
        { t: "Test petites enceintes / téléphone", d: "Bounce puis écoute sur téléphone, laptop, voiture : voix et kick doivent rester audibles. Aucun plugin requis." },
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
        { t: "Cible LUFS atteinte", d: "-14 LUFS intégré (streaming), mesuré — pas à l'oreille. Outil : Pro-L 2 / WLM Plus ; gratuit : Youlean Loudness Meter." },
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
      nom: "🎤 RAP DUR — Voix lead (SM7B)",
      contexte: "Drill / trap dur / boom bap moderne. SM7B + FetHead + Volt (mode Vintage). Voix proche, agressive, qui claque DEVANT l'instru. Prise serrée, sans repisse.",
      etapes: [
        "Option couleur à l'entrée : UA 610 (préampli tube) pour épaissir/driver la voix dès le départ",
        "Coupe-bas franc ~90-110 Hz (Pro-Q 4) — la voix rap n'a pas besoin de grave",
        "Nettoyage (Clarity Vx) si souffle/clim, et dompte la boue 250-450 Hz",
        "EQ correctif : creuse 400-600 Hz si nasillard, présence vers 3-5 kHz",
        "LA-2A : compression douce et constante (4-6 dB) pour poser le niveau",
        "1176 / CLA-76 EN SÉRIE après : attaque rapide, 4-6 dB de punch (ratio 4:1, voire all-buttons par touches)",
        "De-ess agressif (Pro-DS) sur 5-9 kHz — la chaîne dure accentue les sifflantes",
        "Saturation marquée (Saturn 2 / RC-20) : dents + grain pour que ça morde",
        "EQ couleur : air 10-12 kHz (Fresh Air) + petit boost 2-3 kHz pour l'intelligibilité",
        "Sends : slap delay court (H-Delay ~80-120 ms) + reverb TRÈS courte (Valhalla Room) — garde la voix sèche et frontale"
      ],
      vst: ["UA 610 (option)", "Pro-Q 4", "Clarity Vx", "LA-2A → 1176/CLA-76 (série)", "Pro-DS", "Saturn 2 / RC-20", "Valhalla Room + H-Delay"],
      cible: "Voix sèche, frontale et qui mord · -18 dBFS avant plugins"
    },
    {
      nom: "🥁 AFROBEAT — Chant lead (NT1-A)",
      contexte: "Afrobeats / afropop. NT1-A en pièce calme (ou SM7B si pièce vive). Voix douce, chaude, légèrement tunée, qui flotte SUR le groove sans l'écraser. Beaucoup d'espace/réverb.",
      etapes: [
        "Coupe-bas ~75-90 Hz (Pro-Q 4)",
        "Tuning naturel-discret (Waves Tune Real-Time, Retune ~20-30 ms) — la vibe afro garde le naturel",
        "EQ : adoucis la brillance NT1-A (léger creux 6-8 kHz), chaleur en bas-médium",
        "Compression optique douce LA-2A (3-4 dB) pour la régularité, le chant respire",
        "De-ess léger (Pro-DS)",
        "Saturation chaude et subtile (Kramer Tape / RC-20) — couleur sans agressivité",
        "Air discret 10-12 kHz (Fresh Air)",
        "Sends GÉNÉREUX : reverb plaque/hall (UAD Pure Plate, Valhalla Plate ou VintageVerb) + delay 1/4 pointé (Valhalla Delay) — l'espace fait partie du genre",
        "Vocal Rider pour lisser les nuances de chant"
      ],
      vst: ["Pro-Q 4", "Waves Tune Real-Time", "LA-2A", "Pro-DS", "Kramer Tape / RC-20", "UAD Pure Plate / Valhalla Plate + Delay", "Vocal Rider"],
      cible: "Voix chaude et aérée qui flotte sur le groove · sends généreux"
    },
    {
      nom: "💜 RnB — Lead (chant principal)",
      contexte: "RnB moderne / smooth. NT1-A (chant doux) ou SM7B (voix proche, intime). Lead riche, soyeux, contrôlé. Auto-tune souvent présent mais musical. Dynamique maîtrisée pour les nuances.",
      etapes: [
        "Coupe-bas ~80 Hz (Pro-Q 4)",
        "Tuning (Waves Tune Real-Time) placé TÔT — RnB = pitch propre, du discret au signé",
        "EQ correctif doux : dégage 200-400 Hz, présence soyeuse vers 3-4 kHz",
        "LA-2A : compression optique lisse (4-6 dB) pour le velouté",
        "Pro-C 2 ou CLA-76 derrière : 2-3 dB pour tenir les pics sans tuer la nuance",
        "De-ess (Pro-DS) — le RnB met la voix très en avant, sifflantes à surveiller",
        "Saturation soyeuse (Saturn 2 doux / Abbey Road Saturator) pour la richesse harmonique",
        "Air généreux 10-14 kHz (Fresh Air) = ce côté brillant 'studio'",
        "Sends : reverb plaque luxueuse (UAD Pure Plate ou Valhalla Plate) + delay 1/8 ou 1/4 (Valhalla Delay) en touches"
      ],
      vst: ["Pro-Q 4", "Waves Tune Real-Time", "LA-2A → Pro-C 2/CLA-76", "Pro-DS", "Saturn 2 / Abbey Road Saturator", "UAD Pure Plate / Valhalla Plate + Delay"],
      cible: "Lead soyeux, brillant et contrôlé · très en avant"
    },
    {
      nom: "💜 RnB — Backs / harmonies (stack)",
      contexte: "Les empilements RnB (stacks d'harmonies, doubles, ad-libs chantés). Doivent ENROBER le lead façon nappe vocale, larges et fondus, JAMAIS devant le lead.",
      etapes: [
        "Reprends une chaîne plus simple que le lead — pas besoin de tout le détail",
        "Coupe-bas plus haut (~120-150 Hz) + creuse les médiums (300 Hz-2 kHz) pour laisser le lead respirer",
        "Tuning plus marqué (Retune rapide) — les stacks doivent être PARFAITEMENT calés pour fondre ensemble",
        "Compression plus serrée (CLA-76) pour 'coller' toutes les couches en un bloc homogène",
        "Panoramique large : doubles -50/+50, harmonies réparties L/R pour une nappe stéréo",
        "Détune léger (RC-20 ±5-10 cents) entre les couches = largeur et épaisseur",
        "Reverb plus longue/diffuse (Valhalla VintageVerb) que le lead pour reculer les backs",
        "Bus harmonies dédié : EQ + comp de bus pour traiter tout le stack d'un coup",
        "Automation : remonte les backs dans les trous, baisse-les quand le lead chante"
      ],
      vst: ["Pro-Q 4", "Waves Tune Real-Time", "CLA-76", "RC-20 (détune)", "Valhalla VintageVerb"],
      cible: "Nappe vocale large et fondue · -4 à -8 dB sous le lead"
    },
    {
      nom: "🔥 DRILL MÉLODIQUE — Voix lead (SM7B)",
      contexte: "Drill UK/NY mélodique (mélodie + flow). SM7B + FetHead. Auto-tune marqué mais musical, voix sombre et présente qui colle aux glides 808. Entre le rap dur et le chant.",
      etapes: [
        "Coupe-bas ~90 Hz (Pro-Q 4)",
        "Auto-tune marqué TÔT (Waves Tune Real-Time, Retune ~8-15 ms) — signature drill mélo",
        "EQ : dompte la boue 250-450 Hz, présence 3-4 kHz, garde un côté sombre (pas trop d'aigus)",
        "LA-2A doux (3-4 dB) puis 1176/CLA-76 (3-4 dB) en série pour densifier",
        "De-ess (Pro-DS) — l'auto-tune accentue les sifflantes",
        "Saturation modérée (Saturn 2 / RC-20) pour la présence sans agresser",
        "Sends : reverb courte/moyenne (Valhalla Room) + throw delay 1/4 pointé (H-Delay) sur les fins de phrase"
      ],
      vst: ["Pro-Q 4", "Waves Tune Real-Time", "LA-2A → 1176/CLA-76 (série)", "Pro-DS", "Saturn 2 / RC-20", "Valhalla Room + H-Delay"],
      cible: "Voix sombre, tunée et présente · collée aux 808"
    },
    {
      nom: "🎙️ POP — Voix lead (NT1-A)",
      contexte: "Pop moderne / variété. NT1-A en pièce calme. Voix propre, brillante, parfaitement lisse et régulière, très en avant. Le moins de défauts possible.",
      etapes: [
        "Coupe-bas ~80 Hz (Pro-Q 4)",
        "Tuning propre mais naturel (Waves Tune Real-Time, Retune ~15-25 ms)",
        "EQ correctif précis : enlève résonances/boue, présence 3-5 kHz, brillance contrôlée",
        "LA-2A (3-5 dB) → Pro-C 2 (2-3 dB) en série : voix ultra-régulière et dense",
        "Vocal Rider pour aplanir les dernières variations de niveau",
        "De-ess (Pro-DS) soigné — la pop met la voix très en avant",
        "Saturation discrète (Saturn 2 doux) + air généreux 10-14 kHz (Fresh Air)",
        "Sends : reverb plaque courte (UAD Pure Plate / Valhalla Plate) + delay subtil (Valhalla Delay)"
      ],
      vst: ["Pro-Q 4", "Waves Tune Real-Time", "LA-2A → Pro-C 2", "Vocal Rider", "Pro-DS", "Saturn 2 / Fresh Air", "UAD Pure Plate / Valhalla Plate"],
      cible: "Voix lisse, brillante et très en avant · zéro défaut"
    },
    {
      nom: "🌴 DANCEHALL / AFRO-DANCEHALL — Voix lead (SM7B)",
      contexte: "Dancehall / afro-dancehall. SM7B (voix proche, énergique) ou NT1-A. Voix punchy et rythmique, légèrement tunée, avec des effets délais/throws qui groovent. Énergie et présence.",
      etapes: [
        "Coupe-bas ~90 Hz (Pro-Q 4)",
        "Tuning léger-naturel (Waves Tune Real-Time, Retune ~20-30 ms)",
        "EQ : dompte la boue, présence marquée 3-5 kHz pour que ça percute",
        "LA-2A (3-4 dB) → 1176/CLA-76 (4-5 dB) : voix punchy et énergique",
        "De-ess (Pro-DS)",
        "Saturation chaude (RC-20 / Kramer Tape) pour le grain",
        "Sends RYTHMIQUES : delay 1/4 ou 1/8 synchro (Valhalla Delay / H-Delay) + reverb courte — les throws font partie du flow",
        "Automation des throws sur les fins de phrases pour le mouvement"
      ],
      vst: ["Pro-Q 4", "Waves Tune Real-Time", "LA-2A → 1176/CLA-76", "Pro-DS", "RC-20 / Kramer Tape", "Valhalla Delay + H-Delay"],
      cible: "Voix punchy et rythmique · throws qui groovent"
    },
    {
      nom: "Bus Drums (cohésion + punch)",
      contexte: "Regroupe kick/snare/hats/perc sur un bus pour les souder. Utile quand tu mixes les drums dans Luna.",
      etapes: [
        "Route toutes les drums dans un bus/groupe dédié",
        "Compression de bus (SSLComp / API-2500) : ratio ~4:1, attack medium, 2-4 dB de réduction pour le punch",
        "Saturation/tape (UAD Verve Analog Machines, Abbey Road Saturator ou Kramer Tape) pour la chaleur et la colle",
        "EQ de bus (Pro-Q) : un peu d'air vers 10 kHz, contrôle le bas si ça devient boueux",
        "Compression parallèle : un send très compressé remonté discrètement sous le bus = punch sans tuer la dynamique",
        "Garde le kick au centre ; panoramique légèrement hats/perc pour la largeur"
      ],
      vst: ["SSLComp / API-2500", "UAD Verve / Abbey Road Saturator / Kramer Tape", "Pro-Q 4"],
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
        "UAD Little Labs VOG (option) → ajoute/recale un sub propre si la 808 manque de bas. Cible : grave qui se sent sur grosses enceintes.",
        "Pro-Q en M/S → mono sous ~120 Hz. Cible : grave centré, mono-compatible."
      ],
      vst: ["Pro-Q 4", "Saturn 2 / RC-20", "Pro-C 2 / LA-2A", "Pro-MB", "UAD Little Labs VOG (option)"],
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
        "UAD Little Labs VOG (option) → renforce le poids 40-80 Hz si le kick manque de bas. Cible : kick qui pousse en bas.",
        "UAD 1176 (option) → compression courte. Cible : niveau régulier, punch contrôlé."
      ],
      vst: ["Pro-Q 4", "ShaperBox 3", "Saturn 2", "UAD Little Labs VOG (option)", "UAD 1176"],
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
        "UAD Pure Plate ou Valhalla Room (send) → reverb courte. Cible : profondeur sans noyer.",
        "Saturn 2 → couleur. Cible : présence sur petites enceintes."
      ],
      vst: ["Pro-Q 4", "CLA-76 / 1176", "UAD Pure Plate / Valhalla Room", "Saturn 2"],
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
        "UAD Verve / Abbey Road Saturator / Kramer Tape → Cible : colle et chaleur.",
        "Pro-Q 4 → air 10 kHz, contrôle du bas. Cible : équilibre global.",
        "Comp parallèle (bus dupliqué très compressé, remonté) → Cible : punch sans perdre la dynamique."
      ],
      vst: ["SSLComp / API-2500", "UAD Verve / Abbey Road Saturator", "Pro-Q 4"],
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
        "UAD Hemisphere (option, au tracking) → change le caractère du micro (SM7B/NT1-A). Cible : couleur de voix qui colle au style.",
        "Clarity Vx (si besoin) → débruitage léger. Cible : fond propre (< -60 dBFS).",
        "UA 610 (option) → couleur/drive tube à l'entrée. Cible : voix plus épaisse et présente.",
        "Pro-Q 4 → EQ soustractif. Cible : enlève boue 200-400 Hz + résonances.",
        "LA-2A → compression douce 3-5 dB. Cible : niveau régulier.",
        "1176 / CLA-76 → 2e comp pour le punch. Cible : transitoires tenus, voix dense.",
        "Pro-DS → de-ess 5-9 kHz. Cible : sifflantes domptées, pas tuées.",
        "EQ couleur + Saturn 2 → air 10-12 kHz. Cible : voix devant, présente.",
        "Reverb (UAD Pure Plate / Valhalla) + delay (sends) → Cible : profondeur, voix posée dans l'espace."
      ],
      vst: ["UAD Hemisphere (option)", "UA 610 (option)", "Pro-Q 4", "LA-2A + 1176", "Pro-DS", "UAD Pure Plate", "Scheps Omni Channel"],
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
      nom: "Voix — réglages par genre", icon: "mic",
      tag: "Aide-mémoire : ce qui change d'un style à l'autre sur le lead.",
      prerequis: [
        "Pars de la chaîne « Voix lead » comme base commune.",
        "Le micro et le coupe-bas s'adaptent au style (voir ci-dessous).",
        "Le détail complet est dans l'onglet Chaînes types (une chaîne par genre)."
      ],
      chaine: [
        "RAP DUR (SM7B) → coupe-bas haut ~90-110 Hz, comp série marquée, satu qui mord, peu de réverb. Cible : voix sèche et frontale.",
        "DRILL MÉLO (SM7B) → auto-tune marqué (Retune 8-15 ms), voix sombre, reverb courte + throws. Cible : collée aux 808.",
        "AFROBEAT (NT1-A) → tuning naturel (20-30 ms), satu chaude, sends GÉNÉREUX (Pure Plate + delay). Cible : voix aérée qui flotte.",
        "RnB LEAD (NT1-A/SM7B) → tuning tôt, comp optique lisse, air généreux, Pure Plate luxueuse. Cible : lead soyeux et brillant.",
        "POP (NT1-A) → tuning propre, LA-2A → Pro-C 2 + Vocal Rider, air 10-14 kHz. Cible : voix lisse, zéro défaut.",
        "DANCEHALL (SM7B) → présence 3-5 kHz, comp punchy, delays rythmiques (throws). Cible : voix énergique qui groove."
      ],
      vst: ["Pro-Q 4", "Waves Tune Real-Time", "LA-2A + 1176/CLA-76", "Pro-DS", "Saturn 2 / RC-20", "UAD Pure Plate / Valhalla", "Vocal Rider"],
      cible: "Même base · réglages adaptés au style"
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
     MONTER LE STUDIO — ce qu'il reste à acquérir (Madagascar)
     Chaque poste : option "entree" et "milieu" (entrée / milieu de gamme).
     flag = étiquette contextuelle ("Madagascar", "Climat") ou "" si aucune.
     ---------------------------------------------------------------------- */
  studio: {
    have: [
      "MacBook Pro M4 · 16 Go", "Interface UAD Volt 276", "Monitors Adam D3V",
      "Casque mix DT1990 Pro", "Casque rec DT770 Pro", "Micro Rode NT1-A",
      "Micro Shure SM7B + FetHead", "FL Studio · LUNA", "FabFilter · Waves · Valhalla · UAD",
      "Omnisphere · Kontakt"
    ],
    tiers: [
      {
        id: "p1",
        nom: "Priorité 1 — Les indispensables",
        tag: "À acheter en premier. Sans ces postes, pas de studio fiable — ou le son de la pièce sabotera tout ton matériel.",
        items: [
          {
            n: "01", nom: "Alimentation électrique protégée", flag: "Madagascar",
            why: "Coupures JIRAMA fréquentes + surtensions qui grillent le matériel et polluent l'audio. Le poste n°1 à sécuriser avant tout achat coûteux.",
            entree: { opts: ["Onduleur line-interactive 650-850 VA (APC Back-UPS)", "Multiprise parafoudre de qualité"], prix: "≈ 110-150 €" },
            milieu: { opts: ["Onduleur 1500 VA pure sine wave (APC / Eaton)", "Régulateur de tension AVR dédié", "Conditionneur secteur rackable (Furman)"], prix: "≈ 400-650 €" }
          },
          {
            n: "02", nom: "Traitement acoustique de la pièce", flag: "",
            why: "Le poste le plus décisif pour le SON — plus qu'un micro cher. Vise d'abord les angles (bass traps) et le point de première réflexion autour du micro et des monitors.",
            entree: { opts: ["Panneaux DIY laine de roche (Rockwool) encadrés", "Bass traps mousse dans les angles"], prix: "≈ 100-200 €" },
            milieu: { opts: ["Panneaux fabriqués (GIK, EQ Acoustics)", "Bass traps épais + nuage plafond", "Quelques diffuseurs à l'arrière"], prix: "≈ 300-700 €" }
          },
          {
            n: "03", nom: "Pied de micro, suspension & anti-pop", flag: "",
            why: "Pour tenir le SM7B / NT1-A proprement, éviter les vibrations (shock mount) et les plosives (filtre anti-pop) au tracking.",
            entree: { opts: ["Pied perche (K&M / Hercules)", "Shock mount + filtre anti-pop tissu"], prix: "≈ 40-70 €" },
            milieu: { opts: ["Bras articulé de bureau (Rode PSA1+)", "Shock mount dédié + anti-pop métal"], prix: "≈ 100-140 €" }
          },
          {
            n: "04", nom: "Câblage XLR / jack", flag: "",
            why: "Des câbles fiables et blindés évitent parasites et faux-contacts. Prévois-en plus que nécessaire (ça lâche toujours au mauvais moment).",
            entree: { opts: ["XLR Cordial / Stagg 3-6 m (x3-4)", "Quelques jacks TRS"], prix: "≈ 40-70 €" },
            milieu: { opts: ["Câbles Mogami / Sommer", "Petite patchbay si multi-sources"], prix: "≈ 100-150 €" }
          },
          {
            n: "05", nom: "Retour casque artistes (distribution)", flag: "",
            why: "Un studio enregistre des invités : il leur faut un ampli casque de distribution + des casques fermés en plus des tiens.",
            entree: { opts: ["Ampli casque 4 canaux (Behringer HA400)", "1-2 casques fermés (ATH-M20x / M40x)"], prix: "≈ 90-160 €" },
            milieu: { opts: ["Ampli casque (PreSonus HP4 / HP60)", "Casques AKG K92 / ATH-M50x (x2)"], prix: "≈ 250-400 €" }
          },
          {
            n: "06", nom: "Clavier maître MIDI", flag: "",
            why: "Pour jouer tes lignes dans FL / Omnisphere / Kontakt — indispensable pour la prod afro/RnB (accords, mélodies, basses).",
            entree: { opts: ["Akai MPK Mini / Arturia MiniLab 3", "25 touches + pads"], prix: "≈ 80-110 €" },
            milieu: { opts: ["Arturia KeyLab Essential 49/61", "ou Native KOMPLETE Kontrol A49"], prix: "≈ 150-250 €" }
          },
          {
            n: "07", nom: "Stockage & sauvegarde", flag: "Climat",
            why: "Sessions lourdes + chaleur/humidité = risque de perte. Règle 3-2-1 : 2 copies locales + 1 hors site (cloud).",
            entree: { opts: ["SSD externe 1 To USB-C (Crucial X6)", "Disque de backup séparé"], prix: "≈ 90-140 €" },
            milieu: { opts: ["SSD 2 To rapide (Samsung T7 / T9)", "HDD 4 To archives + backup cloud"], prix: "≈ 200-350 €" }
          }
        ]
      },
      {
        id: "p2",
        nom: "Priorité 2 — Fortement recommandé",
        tag: "Pas bloquants, mais ils font franchir un vrai palier de qualité et de fiabilité — surtout dans le climat malgache.",
        items: [
          {
            n: "08", nom: "Filtre de réflexion / coin voix", flag: "",
            why: "Tant que la pièce n'est pas traitée à 100 %, il isole le micro des réflexions — précieux avec le NT1-A très sensible à la pièce.",
            entree: { opts: ["Réflexion filter (sE RF-X / Monoprice)"], prix: "≈ 60-90 €" },
            milieu: { opts: ["Cabine portable (Isovox) ou coin traité sur mesure"], prix: "≈ 300 € +" }
          },
          {
            n: "09", nom: "Caisson de basse (sub)", flag: "",
            why: "Tes Adam D3V décrochent sous ~50 Hz. Un sub calé = tu entends enfin les 808 / sub, crucial pour l'afro, la trap et le RnB.",
            entree: { opts: ["Adam Audio T10S (s'accorde avec les D3V)"], prix: "≈ 250 €" },
            milieu: { opts: ["Sub 8-10\" mieux défini (KRK / PreSonus / Adam)"], prix: "≈ 300-450 €" }
          },
          {
            n: "10", nom: "Micro polyvalent supplémentaire", flag: "",
            why: "Un 3e micro élargit tes options : autre couleur de voix, chœurs simultanés, instruments (guitare, percussions).",
            entree: { opts: ["Statique AT2020 / AT2035", "ou dynamique SM57 (instruments)"], prix: "≈ 100-150 €" },
            milieu: { opts: ["Statique large membrane (AKG C214 / Rode NT1 5e)", "+ SM57 pour amplis/percus"], prix: "≈ 300-400 €" }
          },
          {
            n: "11", nom: "Mobilier & positionnement", flag: "",
            why: "Bureau studio, chaise confortable et stands/isolateurs de monitors à hauteur d'oreille : ça change l'écoute et le confort des longues sessions.",
            entree: { opts: ["Bureau simple + chaise correcte", "Isolateurs monitors génériques"], prix: "≈ 100-200 €" },
            milieu: { opts: ["Bureau studio + chaise ergonomique", "IsoAcoustics ISO-155 (paire)"], prix: "≈ 400 € +" }
          },
          {
            n: "12", nom: "Second écran", flag: "",
            why: "Mixer/produire sur deux écrans = mixer, plugins et arrangement visibles d'un coup. Gros gain de vitesse.",
            entree: { opts: ["Moniteur 24-27\" 1080p"], prix: "≈ 120-180 €" },
            milieu: { opts: ["27\" 1440p (plus d'espace de travail)"], prix: "≈ 250-350 €" }
          },
          {
            n: "13", nom: "Protection contre l'humidité", flag: "Madagascar",
            why: "Sur les côtes, l'humidité attaque les micros à condensateur (NT1-A) et l'électronique. Range-les au sec entre les sessions.",
            entree: { opts: ["Boîte étanche + silica gel + hygromètre"], prix: "≈ 20-40 €" },
            milieu: { opts: ["Armoire déshumidifiante (dry cabinet)"], prix: "≈ 100-200 €" }
          }
        ]
      },
      {
        id: "p3",
        nom: "Priorité 3 — Optionnel / évolution",
        tag: "À envisager quand le studio tourne, selon la direction que tu veux lui donner (groupes live, contenu vidéo…).",
        items: [
          {
            n: "14", nom: "Interface audio multi-entrées", flag: "",
            why: "Ton Volt 276 (2 entrées) suffit pour la voix. Passe à plus d'entrées seulement si tu enregistres batterie / groupe live.",
            entree: { opts: ["Focusrite Scarlett 18i8 / 18i20"], prix: "≈ 300-450 €" },
            milieu: { opts: ["UAD Apollo x4 / x8 (reste dans l'écosystème UAD + DSP)"], prix: "≈ 900-1500 €" }
          },
          {
            n: "15", nom: "Micros d'instruments", flag: "",
            why: "Si tu ouvres aux instruments acoustiques / groupes : kit batterie ou paire matched pour prises stéréo.",
            entree: { opts: ["Kit micros batterie d'entrée + SM57"], prix: "≈ 200-300 €" },
            milieu: { opts: ["Paire matched (Rode NT5 / M5) + dynamiques"], prix: "≈ 300-500 €" }
          },
          {
            n: "16", nom: "Captation vidéo des sessions", flag: "",
            why: "Filmer les sessions (YouTube / réseaux) est un énorme levier de visibilité pour un studio qui démarre.",
            entree: { opts: ["Smartphone + trépied + LED softbox"], prix: "≈ 80-150 €" },
            milieu: { opts: ["Hybride (Sony ZV-E10) + objectif + éclairage"], prix: "≈ 800 € +" }
          },
          {
            n: "17", nom: "Éclairage d'ambiance", flag: "",
            why: "Identité visuelle du studio + meilleures vidéos. Petit budget, gros effet sur l'image de marque.",
            entree: { opts: ["Bandes / barres LED RGB"], prix: "≈ 40-80 €" },
            milieu: { opts: ["Panneaux LED pro + variateurs"], prix: "≈ 200 € +" }
          }
        ]
      }
    ],
    budget: [
      { palier: "P1 — Indispensables", entree: "≈ 600-900 €", milieu: "≈ 1 600-2 600 €", debloque: "Studio fiable qui enregistre des invités" },
      { palier: "+ P2 — Recommandé", entree: "≈ 1 300-1 900 €", milieu: "≈ 3 300-4 700 €", debloque: "Vraie qualité d'écoute + confort + durabilité" },
      { palier: "+ P3 — Optionnel", entree: "selon projet", milieu: "selon projet", debloque: "Groupes live, contenu vidéo, image de marque" }
    ],
    notes: [
      { t: "Électricité", d: "Réseau 220 V / 50 Hz, prises type C/E (européennes). Priorise onduleur + régulateur AVANT tout : c'est ce qui protège des coupures et surtensions qui grillent le matériel importé." },
      { t: "Climat & humidité", d: "Chaleur et humidité (surtout côtières) attaquent micros à condensateur et disques. Range au sec (silica / dry box), aère, évite la condensation." },
      { t: "Import & douane", d: "Beaucoup de matériel s'importe : prévois délais, frais de douane et TVA dans ton budget. Groupe tes commandes et privilégie un SAV accessible." },
      { t: "Ordre d'achat", d: "Suis la numérotation 01→17 : sécurise l'électricité et l'acoustique d'abord — un micro cher dans une pièce non traitée sonnera moins bien qu'un micro simple bien placé." }
    ]
  },

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
        "Spectre / EQ → l'analyseur temps réel de FabFilter Pro-Q (voir la boue, les bosses, comparer à une réf). Gratuit : Voxengo SPAN.",
        "Stéréo / phase → Waves S1 ou un corrélateur pour vérifier la compatibilité mono. Gratuit : Voxengo SPAN (corrélateur de phase).",
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
  ],

  /* ----------------------------------------------------------------------
     CALCULATEUR — reverb & compression par source (temps calés au BPM)
     predelay = note (calculée en ms) · decayBeats = durée de queue en temps (noires)
     releaseNote = note pour le release (calculée en ms) ou "auto"
     ---------------------------------------------------------------------- */
  reverb: [
    { source:"Voix lead",      type:"Plate — Valhalla VintageVerb",   predelay:"1/32", decayBeats:2, plugin:"VintageVerb / Pro-R 2",     note:"Pré-delay court = diction claire ; plaque brillante." },
    { source:"Chant doux",     type:"Hall — VintageVerb",             predelay:"1/16", decayBeats:3, plugin:"VintageVerb",               note:"Plus enveloppant, queue plus longue." },
    { source:"Ad-libs",        type:"Hall/Plate (send généreux)",     predelay:"1/16", decayBeats:4, plugin:"VintageVerb + delay",        note:"Envoie-les loin, derrière le lead." },
    { source:"Snare / Clap",   type:"Room ou Plate courte",           predelay:"1/64", decayBeats:1, plugin:"Valhalla Room",             note:"La queue s'arrête avant le prochain coup." },
    { source:"Piano / Keys",   type:"Hall / Room naturelle",          predelay:"1/32", decayBeats:2, plugin:"VintageVerb / Pro-R 2",     note:"Naturel, pas trop long pour rester clair." },
    { source:"Synthé / Pad",   type:"Hall long",                      predelay:"1/16", decayBeats:6, plugin:"Valhalla Supermassive",     note:"Nappes : longues queues OK." },
    { source:"Drums (room)",   type:"Room courte",                    predelay:"1/64", decayBeats:0.5, plugin:"Valhalla Room",           note:"Colle la batterie sans la noyer." }
  ],
  comp: [
    { source:"Kick",          ratio:"4:1",          attack:"10-30 ms",            releaseNote:"1/16", gr:"2-4 dB",     plugin:"UAD 1176 / Pro-C 2", note:"Attaque assez lente pour garder le clic." },
    { source:"Basse / 808",   ratio:"3-4:1",        attack:"10-20 ms",            releaseNote:"1/8",  gr:"3-5 dB",     plugin:"LA-2A / Pro-C 2",    note:"Niveau stable ; release qui respire avec le groove." },
    { source:"Snare / Clap",  ratio:"4:1",          attack:"5-15 ms",             releaseNote:"1/8",  gr:"3-5 dB",     plugin:"1176 / CLA-76",      note:"Punch + corps ; release avant le prochain coup." },
    { source:"Voix lead",     ratio:"3-4:1 (série)",attack:"15-30 ms puis rapide",releaseNote:"1/8",  gr:"3-5 dB (×2)",plugin:"LA-2A puis 1176",    note:"Comp douce pour la régularité, puis rapide pour les pics." },
    { source:"Bus Drums",     ratio:"4:1",          attack:"10-30 ms",            releaseNote:"1/8",  gr:"2-4 dB",     plugin:"SSLComp / API-2500", note:"Colle l'ensemble ; release calé au tempo." },
    { source:"Bus Master",    ratio:"2:1",          attack:"30 ms +",             releaseNote:"auto", gr:"1-2 dB",     plugin:"SSLComp / Pro-C 2",  note:"Juste de la colle, sans pomper." },
    { source:"Synthé / Keys", ratio:"2-3:1",        attack:"20-30 ms",            releaseNote:"1/8",  gr:"2-3 dB",     plugin:"Pro-C 2",            note:"Régularité sans tuer la dynamique." }
  ]
};
