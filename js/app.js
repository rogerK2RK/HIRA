/* =========================================================================
   HIRA — logique de l'application (vanilla JS + localStorage)
   ========================================================================= */

const STORE_KEY = "hira.projects.v1";
const TOMB_KEY  = "hira.tomb.v1";   // suppressions (id -> timestamp) pour la synchro
const content = document.getElementById("content");

/* ---------- Persistance ---------- */
function loadProjects(){
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch(e){ return []; }
}
function saveProjects(list, skipSync){
  localStorage.setItem(STORE_KEY, JSON.stringify(list));
  if(!skipSync && typeof schedulePush === "function") schedulePush();
}
function loadTomb(){ try { return JSON.parse(localStorage.getItem(TOMB_KEY)) || {}; } catch(e){ return {}; } }
function saveTomb(t){ localStorage.setItem(TOMB_KEY, JSON.stringify(t)); }
function getProject(id){ return loadProjects().find(p => p.id === id); }
function upsertProject(proj){
  const list = loadProjects();
  const i = list.findIndex(p => p.id === proj.id);
  if(i >= 0) list[i] = proj; else list.push(proj);
  saveProjects(list);
}
function deleteProject(id){
  const t = loadTomb(); t[id] = Date.now(); saveTomb(t);
  saveProjects(loadProjects().filter(p => p.id !== id));
}

/* ---------- Utilitaires ---------- */
function uid(){ return "p" + Math.random().toString(36).slice(2,9) + Date.now().toString(36); }
function esc(s){ return (s||"").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function phasesFor(type){ return HIRA_DATA.phases.filter(ph => ph.pour.includes(type)); }

/* ---------- Icônes (SVG inline, style Lucide — aucune dépendance, hors ligne) ----------
   Tracé en "currentColor" → l'icône prend la couleur du texte autour.
   Noms dispo : home, music, plus, target, link, sliders, grid, download, upload,
   lightbulb, piano, mic, scissors, flag, share, headphones, laptop, app,
   edit, copy, notes, search, check, expand. */
const ICONS = {
  home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
  target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  sliders:'<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  grid:'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
  lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  piano:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v9M12 4v9M17 4v9"/>',
  mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
  scissors:'<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>',
  headphones:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-7a9 9 0 0 1 18 0v7a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  laptop:'<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
  app:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8h20"/><path d="M6 4v4"/><path d="M10 4v4"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  notes:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><line x1="9" x2="15" y1="13" y2="13"/><line x1="9" x2="13" y1="17" y2="17"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  expand:'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
  wave:'<path d="M2 12h2l2-7 4 18 4-14 2 7h6"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  menu:'<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>'
};
function icon(name, size){
  const s = size || 18;
  return `<svg class="ic" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||""}</svg>`;
}
const GEAR_ICONS = { "Ordinateur":"laptop", "Interface audio":"sliders", "Écoute":"headphones", "Micros":"mic", "Logiciels":"app" };

function projectProgress(proj){
  const phases = phasesFor(proj.type);
  let total = 0, done = 0;
  phases.forEach(ph => {
    ph.checklist.forEach((_, idx) => {
      total++;
      if(proj.checks && proj.checks[ph.id] && proj.checks[ph.id][idx]) done++;
    });
  });
  return total ? Math.round(done/total*100) : 0;
}
function currentPhaseLabel(proj){
  const phases = phasesFor(proj.type);
  for(const ph of phases){
    const done = (proj.checks && proj.checks[ph.id]) || [];
    const allDone = ph.checklist.every((_, i) => done[i]);
    if(!allDone) return icon(ph.icon, 14) + " " + esc(ph.nom);
  }
  return icon("check", 14) + " Terminé";
}

function toast(msg){
  let t = document.querySelector(".toast");
  if(!t){ t = document.createElement("div"); t.className="toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 2200);
}

/* ---------- Routeur ---------- */
const views = {};
let currentView = "dashboard";
let currentParam = null;

function navigate(view, param){
  currentView = view;
  currentParam = param;
  document.querySelectorAll(".nav-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.view === view));
  content.scrollTo(0,0);
  window.scrollTo(0,0);
  (views[view] || views.dashboard)(param);
  closeDrawer();
}

/* ---- Tiroir de navigation (mobile) ---- */
function openDrawer(){
  document.querySelector(".sidebar")?.classList.add("open");
  document.getElementById("backdrop")?.classList.add("show");
}
function closeDrawer(){
  document.querySelector(".sidebar")?.classList.remove("open");
  document.getElementById("backdrop")?.classList.remove("show");
}

document.querySelectorAll(".nav-btn").forEach(btn =>
  btn.addEventListener("click", () => navigate(btn.dataset.view)));

/* =========================================================================
   VUES
   ========================================================================= */

/* ---- Accueil ---- */
views.dashboard = function(){
  const projects = loadProjects();
  const active = projects.filter(p => projectProgress(p) < 100).length;
  const done = projects.filter(p => projectProgress(p) === 100).length;

  let recent = "";
  if(projects.length){
    recent = projects.slice().sort((a,b)=>b.updated-a.updated).slice(0,3).map(p => `
      <div class="card proj-card" onclick="navigate('project','${p.id}')">
        <div>
          <h3>${esc(p.name)}</h3>
          <div class="proj-meta"><span>${currentPhaseLabel(p)}</span></div>
        </div>
        <div class="pct">${projectProgress(p)}%</div>
      </div>`).join("");
  } else {
    recent = `<div class="empty"><div class="big">${icon("music",46)}</div>
      Aucun projet pour l'instant.<br>Crée ton premier projet pour suivre la trame.</div>`;
  }

  content.innerHTML = `
    <div class="page-head">
      <h1>Bienvenue dans HIRA</h1>
      <p>Ton copilote de création musicale. Suis une trame claire pour chaque projet —
      de l'idée jusqu'au master — avec les bons gestes, les cibles en dB/LUFS et les
      plugins adaptés à ton matériel (Volt 276, SM7B/NT1-A, FabFilter, Waves, UAD…).</p>
    </div>
    <div class="stat-row">
      <div class="stat"><div class="label">Projets</div><div class="val">${projects.length}</div></div>
      <div class="stat"><div class="label">En cours</div><div class="val">${active}</div></div>
      <div class="stat"><div class="label">Terminés</div><div class="val">${done}</div></div>
    </div>
    <div style="display:flex;gap:12px;margin-bottom:28px;flex-wrap:wrap">
      <button class="btn" onclick="navigate('newproject')">${icon("plus")} Nouveau projet</button>
      <button class="btn secondary" onclick="navigate('targets')">${icon("target")} Voir les cibles dB/LUFS</button>
    </div>
    <h3 style="margin-bottom:14px;font-size:15px;color:var(--muted)">Projets récents</h3>
    <div class="grid">${recent}</div>
  `;
};

/* ---- Liste des projets ---- */
views.projects = function(){
  const projects = loadProjects().slice().sort((a,b)=>b.updated-a.updated);
  let body;
  if(!projects.length){
    body = `<div class="empty"><div class="big">${icon("music",46)}</div>Aucun projet.<br>
      <button class="btn" style="margin-top:16px" onclick="navigate('newproject')">Créer un projet</button></div>`;
  } else {
    body = `<div class="grid">` + projects.map(p => `
      <div class="card proj-card" data-name="${esc(p.name.toLowerCase())}" onclick="navigate('project','${p.id}')">
        <div style="flex:1">
          <h3>${esc(p.name)}</h3>
          <div class="proj-meta">
            <span>${p.type === "full" ? icon("mic",13)+" Morceau complet" : icon("piano",13)+" Prod / Instru"}</span>
            ${p.bpm ? `<span>${esc(p.bpm)} BPM</span>` : ""}
            ${p.key ? `<span>${esc(p.key)}</span>` : ""}
            <span>${currentPhaseLabel(p)}</span>
          </div>
          <div class="progress"><span style="width:${projectProgress(p)}%"></span></div>
        </div>
        <div class="pct">${projectProgress(p)}%</div>
      </div>`).join("") + `</div>`;
  }
  content.innerHTML = `
    <div class="page-head"><h1>Mes projets</h1>
      <p>Tous tes projets musicaux et leur avancement.</p></div>
    <div style="display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap">
      <button class="btn" onclick="navigate('newproject')">${icon("plus")} Nouveau projet</button>
      ${projects.length ? `<div class="searchbox">${icon("search",16)}<input type="text" placeholder="Rechercher un projet…" oninput="filterProjects(this.value)"></div>` : ""}
    </div>
    ${body}`;
};

/* ---- Nouveau projet (assistant étape par étape) ---- */
let wiz;
const WIZ_STEPS = ["Type", "Bases", "Objectif", "Créer"];

views.newproject = function(){
  wiz = { step:1, type:"full", name:"", bpm:"", key:"", lufs:"-14 LUFS (streaming)", ref:"" };
  renderWiz();
};

function wizCapture(){
  const v = id => { const e = document.getElementById(id); return e ? e.value : undefined; };
  if(wiz.step===2){
    const n=v("wz-name"); if(n!==undefined) wiz.name=n;
    const b=v("wz-bpm");  if(b!==undefined) wiz.bpm=b;
    const k=v("wz-key");  if(k!==undefined) wiz.key=k;
  }
  if(wiz.step===3){
    const l=v("wz-lufs"); if(l!==undefined) wiz.lufs=l;
    const r=v("wz-ref");  if(r!==undefined) wiz.ref=r;
  }
}

function renderWiz(){
  const stepper = WIZ_STEPS.map((s,i)=>{
    const n=i+1, st = n<wiz.step ? "done" : (n===wiz.step ? "cur" : "");
    return `<div class="wstep ${st}"><span class="wdot">${n<wiz.step?icon("check",13):n}</span><span class="wlbl">${s}</span></div>`;
  }).join('<span class="wsep"></span>');

  let body = "";
  if(wiz.step===1){
    body = `
      <h2 class="wq">Quel type de projet ?</h2>
      <div class="type-cards">
        <div class="type-card ${wiz.type==='full'?'sel':''}" onclick="wizType('full')">
          <h4>${icon("mic",16)} Morceau complet</h4>
          <p>Prod + voix + mix + master. Toute la trame.</p>
        </div>
        <div class="type-card ${wiz.type==='prod'?'sel':''}" onclick="wizType('prod')">
          <h4>${icon("piano",16)} Prod / Instru</h4>
          <p>Beatmaking seul, jusqu'à l'export.</p>
        </div>
      </div>`;
  } else if(wiz.step===2){
    body = `
      <h2 class="wq">Les bases</h2>
      <div class="form-row">
        <label>Nom du projet</label>
        <input type="text" id="wz-name" value="${esc(wiz.name)}" placeholder="ex. Nuit blanche" />
      </div>
      <div class="field-inline">
        <div class="form-row"><label>BPM</label><input type="number" id="wz-bpm" value="${esc(wiz.bpm)}" placeholder="ex. 140" /></div>
        <div class="form-row"><label>Tonalité</label><input type="text" id="wz-key" value="${esc(wiz.key)}" placeholder="ex. A min" /></div>
      </div>`;
  } else if(wiz.step===3){
    body = `
      <h2 class="wq">Objectif & références</h2>
      <div class="form-row">
        <label>Cible de loudness (master)</label>
        <select id="wz-lufs">
          <option value="-14 LUFS (streaming)">-14 LUFS — Streaming</option>
          <option value="-16 LUFS (Apple Music)">-16 LUFS — Apple Music</option>
          <option value="-9 LUFS (loud/club)">-9 LUFS — Loud / Club / Trap</option>
        </select>
      </div>
      <div class="form-row">
        <label>Références (optionnel)</label>
        <input type="text" id="wz-ref" value="${esc(wiz.ref)}" placeholder="Artiste - Titre, …" />
      </div>`;
  } else {
    body = `
      <h2 class="wq">Prêt à lancer</h2>
      <div class="recap">
        <div><span>Type</span><strong>${wiz.type==='full'?'Morceau complet':'Prod / Instru'}</strong></div>
        <div><span>Nom</span><strong>${esc(wiz.name||'—')}</strong></div>
        <div><span>BPM</span><strong>${esc(wiz.bpm||'—')}</strong></div>
        <div><span>Tonalité</span><strong>${esc(wiz.key||'—')}</strong></div>
        <div><span>Cible</span><strong>${esc(wiz.lufs)}</strong></div>
        ${wiz.ref?`<div><span>Réf</span><strong>${esc(wiz.ref)}</strong></div>`:''}
      </div>`;
  }

  const isLast = wiz.step===4;
  content.innerHTML = `
    <button class="back" onclick="navigate('projects')">${icon("arrow",14)} Annuler</button>
    <div class="wizard">
      <div class="wsteps">${stepper}</div>
      <div class="card wcard">${body}</div>
      <div class="wnav">
        ${wiz.step>1 ? `<button class="btn secondary" onclick="wizGo(-1)">Retour</button>` : `<span></span>`}
        ${isLast
          ? `<button class="btn" onclick="wizCreate()">${icon("check",16)} Créer le projet</button>`
          : `<button class="btn" onclick="wizGo(1)">Continuer ${icon("arrow",16)}</button>`}
      </div>
    </div>`;

  const nameEl = document.getElementById("wz-name");
  if(nameEl) nameEl.focus();
}

window.wizType = function(t){ wiz.type = t; renderWiz(); };
window.wizGo = function(dir){
  wizCapture();
  if(dir>0 && wiz.step===2 && !wiz.name.trim()){ toast("Donne un nom à ton projet"); return; }
  wiz.step = Math.min(4, Math.max(1, wiz.step + dir));
  renderWiz();
};
window.wizCreate = function(){
  wizCapture();
  if(!wiz.name.trim()){ wiz.step=2; renderWiz(); toast("Donne un nom à ton projet"); return; }
  const proj = {
    id: uid(), name: wiz.name.trim(), type: wiz.type,
    bpm: wiz.bpm.trim(), key: wiz.key.trim(), lufs: wiz.lufs, ref: wiz.ref.trim(),
    notes: "", checks: {}, created: Date.now(), updated: Date.now()
  };
  upsertProject(proj);
  toast("Projet créé");
  navigate("project", proj.id);
};

/* ---- Modifier projet ---- */
let editType = "full";
views.editproject = function(id){
  const proj = getProject(id);
  if(!proj){ navigate("projects"); return; }
  editType = proj.type;

  function render(){
    content.innerHTML = `
      <button class="back" onclick="navigate('project','${proj.id}')">← Retour au projet</button>
      <div class="page-head"><h1>Modifier le projet</h1>
        <p>Mets à jour les infos. La trame s'adapte si tu changes le type
        (tes coches déjà faites sont conservées).</p></div>
      <div class="card" style="max-width:640px">
        <div class="form-row">
          <label>Type de projet</label>
          <div class="type-cards">
            <div class="type-card ${editType==='full'?'sel':''}" data-type="full">
              <h4>${icon("mic",16)} Morceau complet</h4>
              <p>Prod + enregistrement + mix + master. Toute la trame.</p>
            </div>
            <div class="type-card ${editType==='prod'?'sel':''}" data-type="prod">
              <h4>${icon("piano",16)} Prod / Instru</h4>
              <p>Beatmaking seul, jusqu'à l'export. Sans enregistrement voix.</p>
            </div>
          </div>
        </div>
        <div class="form-row">
          <label>Nom du projet</label>
          <input type="text" id="ep-name" value="${esc(proj.name)}" />
        </div>
        <div class="field-inline">
          <div class="form-row"><label>BPM</label><input type="number" id="ep-bpm" value="${esc(proj.bpm)}" /></div>
          <div class="form-row"><label>Tonalité</label><input type="text" id="ep-key" value="${esc(proj.key)}" /></div>
        </div>
        <div class="form-row">
          <label>Cible de loudness (master)</label>
          <select id="ep-lufs">
            <option value="-14 LUFS (streaming)">-14 LUFS — Streaming (Spotify/YouTube)</option>
            <option value="-16 LUFS (Apple Music)">-16 LUFS — Apple Music</option>
            <option value="-9 LUFS (loud/club)">-9 LUFS — Loud / Club / Trap</option>
          </select>
        </div>
        <div class="form-row">
          <label>Références (morceaux modèles)</label>
          <input type="text" id="ep-ref" value="${esc(proj.ref)}" />
        </div>
        <div style="display:flex;gap:12px">
          <button class="btn" id="ep-save">Enregistrer les modifications</button>
          <button class="btn secondary" onclick="navigate('project','${proj.id}')">Annuler</button>
        </div>
      </div>`;

    document.getElementById("ep-lufs").value = proj.lufs || "-14 LUFS (streaming)";

    document.querySelectorAll(".type-card").forEach(c =>
      c.addEventListener("click", () => { editType = c.dataset.type; render(); }));

    document.getElementById("ep-save").addEventListener("click", () => {
      const name = document.getElementById("ep-name").value.trim();
      if(!name){ toast("Donne un nom à ton projet"); return; }
      proj.name = name;
      proj.type = editType;
      proj.bpm  = document.getElementById("ep-bpm").value.trim();
      proj.key  = document.getElementById("ep-key").value.trim();
      proj.lufs = document.getElementById("ep-lufs").value;
      proj.ref  = document.getElementById("ep-ref").value.trim();
      proj.updated = Date.now();
      upsertProject(proj);
      toast("Projet mis à jour");
      navigate("project", proj.id);
    });
  }

  render();
};

/* ---- Détail projet ---- */
let projPhaseIdx = 0;
let projPhaseProjId = null;

views.project = function(id){
  const proj = getProject(id);
  if(!proj){ navigate("projects"); return; }
  const phases = phasesFor(proj.type);
  const pct = projectProgress(proj);
  const phaseDone = p => { const c=(proj.checks&&proj.checks[p.id])||[]; return p.checklist.every((_,k)=>c[k]); };

  // À l'entrée d'un NOUVEAU projet : se placer sur la 1ère phase non terminée
  if(projPhaseProjId !== id){
    projPhaseProjId = id;
    projPhaseIdx = phases.length - 1;
    for(let i=0;i<phases.length;i++){ if(!phaseDone(phases[i])){ projPhaseIdx = i; break; } }
  }
  projPhaseIdx = Math.max(0, Math.min(projPhaseIdx, phases.length-1));

  const ph = phases[projPhaseIdx];
  const checks = (proj.checks && proj.checks[ph.id]) || [];
  const doneCount = ph.checklist.filter((_,i)=>checks[i]).length;
  const allDone = doneCount === ph.checklist.length;
  const isFirst = projPhaseIdx === 0;
  const isLast = projPhaseIdx === phases.length - 1;

  const stepper = phases.map((p,i) => {
    const cls = i===projPhaseIdx ? "cur" : (phaseDone(p) ? "done" : "");
    const ic = (phaseDone(p) && i!==projPhaseIdx) ? icon("check",15) : icon(p.icon,15);
    return `<button class="pstep ${cls}" title="${esc(p.nom)}" onclick="projPhase(${i})">${ic}</button>`;
  }).join("");

  const checklist = ph.checklist.map((item, idx) => {
    const t = (typeof item === "string") ? item : item.t;
    const d = (typeof item === "object" && item.d) ? item.d : "";
    return `
      <div class="check ${checks[idx]?'done':''}">
        <input type="checkbox" ${checks[idx]?'checked':''}
          onchange="toggleCheck('${proj.id}','${ph.id}',${idx},this.checked)" id="${ph.id}-${idx}">
        <label for="${ph.id}-${idx}">
          <span class="ck-t">${esc(t)}</span>
          ${d?`<span class="ck-d">${esc(d)}</span>`:""}
        </label>
      </div>`;
  }).join("");

  const tips = ph.tips.length ? `
    <details class="tips-acc">
      <summary>${icon("lightbulb",14)} Conseils${ph.plugins.length?" & plugins":""}</summary>
      <ul class="tips">${ph.tips.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>
      ${ph.plugins.length?`<div class="plug-tags">${ph.plugins.map(p=>`<span class="tag">${esc(p)}</span>`).join("")}</div>
      <p style="font-size:11px;color:var(--muted);margin-top:8px">→ détail dans l'onglet « Mes plugins »</p>`:""}
    </details>` : "";

  const nav = `
    <div class="wnav" style="margin-top:18px">
      ${!isFirst ? `<button class="btn secondary" onclick="projPhase(${projPhaseIdx-1})">${icon("arrow",15)} Précédent</button>` : `<span></span>`}
      ${!isLast
        ? `<button class="btn ${allDone?'':'secondary'}" onclick="projPhase(${projPhaseIdx+1})">Suivant ${icon("arrow",15)}</button>`
        : `<span class="done-badge">${icon("check",16)} Dernière étape</span>`}
    </div>`;

  content.innerHTML = `
    <button class="back" onclick="navigate('projects')">${icon("arrow",14)} Mes projets</button>
    <div class="page-head" style="display:flex;justify-content:space-between;align-items:flex-start;gap:20px">
      <div>
        <h1>${esc(proj.name)}</h1>
        <div class="proj-meta" style="margin-top:8px">
          <span>${proj.type==="full"?icon("mic",13)+" Morceau complet":icon("piano",13)+" Prod / Instru"}</span>
          ${proj.bpm?`<span>${esc(proj.bpm)} BPM</span>`:""}
          ${proj.key?`<span>${esc(proj.key)}</span>`:""}
          <span>${icon("target",13)} ${esc(proj.lufs||"-14 LUFS")}</span>
        </div>
      </div>
      <div style="text-align:right">
        <div class="pct" style="font-size:30px">${pct}%</div>
        <div class="progress" style="width:120px"><span style="width:${pct}%"></span></div>
      </div>
    </div>

    <div class="psteps">${stepper}</div>

    <div class="card phase-slide">
      <div class="slide-head">
        <span class="phase-icon">${icon(ph.icon,22)}</span>
        <div style="flex:1"><h2>${esc(ph.nom)}</h2><div class="pdesc">${esc(ph.desc)}</div></div>
        <span class="phase-mini">${doneCount}/${ph.checklist.length}${allDone?" "+icon("check",14):""}</span>
      </div>
      <div class="checklist">${checklist}</div>
      ${tips}
    </div>
    ${nav}

    <div class="card" style="margin:18px 0">
      <h3>${icon("notes")} Notes du projet</h3>
      <textarea id="proj-notes" placeholder="Idées, réglages clés, LUFS atteint…">${esc(proj.notes)}</textarea>
      <div style="display:flex;align-items:center;gap:12px;margin-top:10px">
        <button class="btn small" onclick="saveNotes('${proj.id}')">Enregistrer les notes</button>
        <span id="notes-status" style="font-size:12px;color:var(--muted);display:inline-flex;align-items:center;gap:5px">${icon("check",13)} Sauvegarde auto</span>
      </div>
    </div>

    <div class="row-actions">
      <button class="btn secondary small" onclick="navigate('editproject','${proj.id}')">${icon("edit",15)} Modifier</button>
      <button class="btn secondary small" onclick="duplicateProject('${proj.id}')">${icon("copy",15)} Dupliquer</button>
      <button class="btn secondary small" onclick="exportProject('${proj.id}')">${icon("download",15)} Exporter</button>
      <button class="btn danger small" onclick="confirmDelete('${proj.id}')">Supprimer</button>
    </div>`;

  // Auto-save des notes (debounce) — plus besoin de cliquer pour ne rien perdre
  const notesEl = document.getElementById("proj-notes");
  if(notesEl){
    let timer;
    notesEl.addEventListener("input", () => {
      clearTimeout(timer);
      const status = document.getElementById("notes-status");
      if(status) status.innerHTML = icon("edit",13) + " Modification…";
      timer = setTimeout(() => {
        const p = getProject(id);
        if(!p) return;
        p.notes = notesEl.value;
        p.updated = Date.now();
        upsertProject(p);
        if(status) status.innerHTML = icon("check",13) + " Enregistré";
      }, 600);
    });
  }
};

window.projPhase = function(i){
  projPhaseIdx = i;
  views.project(projPhaseProjId);
  window.scrollTo(0,0);
  content.scrollTo(0,0);
};

/* ---- Cibles dB/LUFS ---- */
views.targets = function(){
  const cards = HIRA_DATA.targets.map(t => `
    <div class="card target-card">
      <div class="t-top">
        <strong>${esc(t.etape)}</strong>
        <span class="cible">${esc(t.cible)}</span>
      </div>
      <p>${esc(t.note)}</p>
    </div>`).join("");
  content.innerHTML = `
    <div class="page-head"><h1>${icon("target",22)} Cibles dB / LUFS</h1>
      <p>L'aide-mémoire à garder sous les yeux. Respecte ces niveaux pour un son propre,
      sans clip, et un master au niveau commercial.</p></div>
    <div class="grid">${cards}</div>
    <div class="card" style="margin-top:18px">
      <h3>${icon("lightbulb")} À retenir</h3>
      <p><strong>dBFS</strong> = niveau numérique (0 = clip, à ne jamais toucher).
      <strong>LUFS</strong> = volume perçu (ce que normalisent Spotify & co).
      <strong>dBTP / True Peak</strong> = pic réel après conversion : garde-le ≤ -1 pour éviter
      la distorsion sur les MP3/AAC. Règle d'or : <strong>garde toujours du headroom</strong>
      à chaque étape, on rajoute du volume à la fin, jamais l'inverse.</p>
    </div>`;
};

/* ---- Chaînes types ---- */
views.chains = function(){
  const cards = HIRA_DATA.chains.map(c => `
    <div class="card">
      <h3>${icon("link")} ${esc(c.nom)}</h3>
      <p style="margin-bottom:12px">${esc(c.contexte)}</p>
      <ol class="bus-steps">${c.etapes.map(e=>`<li>${esc(e)}</li>`).join("")}</ol>
      ${c.vst?`<div class="plug-tags">${c.vst.map(v=>`<span class="tag">${esc(v)}</span>`).join("")}</div>`:""}
      ${c.cible?`<div class="bus-cible">${icon("target",13)} ${esc(c.cible)}</div>`:""}
    </div>`).join("");
  content.innerHTML = `
    <div class="page-head"><h1>${icon("link",22)} Chaînes types</h1>
      <p>Des recettes prêtes à l'emploi avec tes plugins, dans le bon ordre.
      Adapte toujours à l'oreille et au morceau.</p></div>
    <div class="grid">${cards}</div>`;
};

/* ---- Templates de bus (par instrument / canal) ---- */
views.buses = function(){
  const items = HIRA_DATA.buses.map(b => `
    <div class="phase">
      <div class="phase-head" onclick="this.nextElementSibling.classList.toggle('open')">
        <span class="phase-icon">${icon(b.icon,20)}</span>
        <div class="phase-title"><h3>${esc(b.nom)}</h3><div class="pdesc">${esc(b.tag)}</div></div>
        <span class="phase-mini">${icon("expand",16)}</span>
      </div>
      <div class="phase-body">
        ${b.prerequis ? `<div class="bus-sub">Prérequis</div>
        <ul class="guide-list">${b.prerequis.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>
        <div class="bus-sub">Chaîne</div>` : ""}
        <ol class="bus-steps">${b.chaine.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>
        <div class="plug-tags">${b.vst.map(v=>`<span class="tag">${esc(v)}</span>`).join("")}</div>
        <div class="bus-cible">${icon("target",13)} ${esc(b.cible)}</div>
      </div>
    </div>`).join("");
  content.innerHTML = `
    <div class="page-head"><h1>${icon("wave",22)} Templates de bus</h1>
      <p>Quoi mettre sur chaque élément : basse, kick, voix… La chaîne dans l'ordre,
      les plugins conseillés et la cible. Touche un bus pour l'ouvrir.</p></div>
    <div>${items}</div>`;
};

/* ---- Conseils & réflexes ---- */
views.guide = function(){
  const items = HIRA_DATA.guides.map(g => `
    <div class="phase">
      <div class="phase-head" onclick="this.nextElementSibling.classList.toggle('open')">
        <span class="phase-icon">${icon(g.icon,20)}</span>
        <div class="phase-title"><h3>${esc(g.nom)}</h3><div class="pdesc">${esc(g.tag)}</div></div>
        <span class="phase-mini">${icon("expand",16)}</span>
      </div>
      <div class="phase-body">
        <ul class="guide-list">${g.lignes.map(l => {
          const i = l.indexOf(" → ");
          return i >= 0
            ? `<li><strong>${esc(l.slice(0,i))}</strong> <span class="g-arrow">→</span> ${esc(l.slice(i+3))}</li>`
            : `<li>${esc(l)}</li>`;
        }).join("")}</ul>
      </div>
    </div>`).join("");
  content.innerHTML = `
    <div class="page-head"><h1>${icon("book",22)} Conseils & réflexes</h1>
      <p>Les bons gestes : sur quoi écouter, comment mesurer, régler les problèmes
      courants et quand utiliser chaque technique.</p></div>
    <div>${items}</div>`;
};

/* ---- Matériel ---- */
views.gear = function(){
  const cards = HIRA_DATA.gear.map(g => `
    <div class="card">
      <h3>${icon(GEAR_ICONS[g.cat]||"sliders")} ${esc(g.cat)}</h3>
      ${g.items.map(it => `
        <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--line)">
          <strong>${esc(it.nom)}</strong>
          <div style="font-size:12px;color:var(--accent2);margin:2px 0">${esc(it.detail)}</div>
          <p>${esc(it.note)}</p>
        </div>`).join("")}
    </div>`).join("");
  content.innerHTML = `
    <div class="page-head"><h1>${icon("sliders",22)} Mon matériel</h1>
      <p>Ton setup et les conseils pour en tirer le meilleur.</p></div>
    <div class="grid grid-2">${cards}</div>`;
};

/* ---- Plugins ---- */
views.plugins = function(){
  const groups = Object.entries(HIRA_DATA.plugins).map(([cat, list]) => `
    <div class="card plug-group">
      <h4>${esc(cat)}</h4>
      <ul>${list.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>
    </div>`).join("");
  content.innerHTML = `
    <div class="page-head"><h1>${icon("grid",22)} Mes plugins</h1>
      <p>Tes plugins détectés, classés par usage avec le « pourquoi/quand ».
      Le n°1 de chaque catégorie est ton réflexe par défaut.</p></div>
    <div class="grid grid-2">${groups}</div>`;
};

/* =========================================================================
   ACTIONS (exposées au HTML inline)
   ========================================================================= */
window.navigate = navigate;
window.toggleCheck = function(projId, phaseId, idx, val){
  const proj = getProject(projId);
  if(!proj) return;
  proj.checks = proj.checks || {};
  proj.checks[phaseId] = proj.checks[phaseId] || [];
  proj.checks[phaseId][idx] = val;
  proj.updated = Date.now();
  upsertProject(proj);

  // Re-render de la slide (MAJ stepper, compteur, bouton Suivant) en gardant le scroll
  const y = window.scrollY;
  views.project(projId);
  window.scrollTo(0, y);
};
window.saveNotes = function(projId){
  const proj = getProject(projId);
  if(!proj) return;
  proj.notes = document.getElementById("proj-notes").value;
  proj.updated = Date.now();
  upsertProject(proj);
  toast("Notes enregistrées");
};
window.confirmDelete = function(projId){
  if(confirm("Supprimer définitivement ce projet ?")){
    deleteProject(projId);
    toast("Projet supprimé");
    navigate("projects");
  }
};
window.duplicateProject = function(projId){
  const proj = getProject(projId);
  if(!proj) return;
  const copy = JSON.parse(JSON.stringify(proj));
  copy.id = uid();
  copy.name = proj.name + " (copie)";
  copy.checks = {};            // on repart d'une trame vierge (coches remises à zéro)
  copy.created = Date.now();
  copy.updated = Date.now();
  upsertProject(copy);
  toast("Projet dupliqué — coches remises à zéro");
  navigate("project", copy.id);
};
window.exportProject = function(projId){
  const proj = getProject(projId);
  if(!proj) return;
  const blob = new Blob([JSON.stringify([proj], null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  const slug = (proj.name || "projet").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
  a.download = "hira-" + (slug || "projet") + ".json";
  a.click();
  toast("Projet exporté");
};
window.filterProjects = function(q){
  q = (q || "").trim().toLowerCase();
  content.querySelectorAll(".proj-card").forEach(card => {
    const n = card.getAttribute("data-name") || "";
    card.style.display = (!q || n.includes(q)) ? "" : "none";
  });
};

/* ---- Backup / restore ---- */
document.getElementById("exportData").addEventListener("click", () => {
  const data = JSON.stringify(loadProjects(), null, 2);
  const blob = new Blob([data], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "hira-backup.json";
  a.click();
  toast("Backup téléchargé");
});
document.getElementById("importData").addEventListener("click", () =>
  document.getElementById("importFile").click());
document.getElementById("importFile").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if(!Array.isArray(data)){ toast("Fichier invalide"); return; }
      const existing = loadProjects();
      if(existing.length === 0){
        saveProjects(data); toast("Projets restaurés"); navigate("projects"); return;
      }
      const replace = confirm(
        `Tu as déjà ${existing.length} projet(s) sur cet appareil.\n\n` +
        `• OK = REMPLACER tout par le backup (${data.length} projet(s)).\n` +
        `• Annuler = FUSIONNER (garder les deux ; même projet = version du backup).`
      );
      if(replace){
        saveProjects(data);
        toast("Projets remplacés");
      } else {
        const byId = {};
        existing.forEach(p => { byId[p.id] = p; });
        data.forEach(p => { if(p && p.id) byId[p.id] = p; });
        saveProjects(Object.values(byId));
        toast("Projets fusionnés");
      }
      navigate("projects");
    } catch(err){ toast("Fichier illisible"); }
  };
  reader.readAsText(file);
  e.target.value = ""; // permet de ré-importer le même fichier
});

/* =========================================================================
   SYNCHRO CLOUD (Supabase) — offline-first
   L'app marche sans réseau (localStorage = cache). Connecté, tes projets se
   synchronisent entre appareils (fusion par date, suppressions propagées).
   ========================================================================= */
const SUPA_URL = "https://ajynukcwfhxgsertpwtx.supabase.co";
const SUPA_KEY = "sb_publishable_jYmJd78oiEbHOZ4Y4s7VYA_bLhe55BU";

let supa = null;
try { if(window.supabase && SUPA_URL && SUPA_KEY) supa = window.supabase.createClient(SUPA_URL, SUPA_KEY); }
catch(e){ supa = null; }

let syncUser = null;
let syncState = "off";   // off | ok | sync | err
let linkSent = false;

function setSyncState(s){ syncState = s; if(currentView === "sync") views.sync(); }

function mergeData(localP, localT, remoteP, remoteT){
  const tomb = {};
  [remoteT||{}, localT||{}].forEach(src => Object.keys(src).forEach(id => {
    tomb[id] = Math.max(tomb[id]||0, src[id]||0);
  }));
  const map = {};
  [...(remoteP||[]), ...(localP||[])].forEach(p => {
    if(!p || !p.id) return;
    const ex = map[p.id];
    if(!ex || (p.updated||0) > (ex.updated||0)) map[p.id] = p;
  });
  const projects = Object.values(map).filter(p => !(tomb[p.id] && tomb[p.id] >= (p.updated||0)));
  return { projects, tomb };
}

async function pushRemoteNow(){
  if(!supa || !syncUser) return;
  const payload = { projects: loadProjects(), tomb: loadTomb() };
  const { error } = await supa.from("hira_data")
    .upsert({ user_id: syncUser.id, data: payload, updated: Date.now() });
  if(error) throw error;
}
let pushTimer;
function schedulePush(){
  if(!supa || !syncUser) return;
  setSyncState("sync");
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    pushRemoteNow().then(()=>setSyncState("ok")).catch(()=>setSyncState("err"));
  }, 900);
}

async function pullMergePush(){
  if(!supa || !syncUser) return;
  setSyncState("sync");
  try {
    const { data, error } = await supa.from("hira_data")
      .select("data").eq("user_id", syncUser.id).maybeSingle();
    if(error) throw error;
    const remote = (data && data.data) || {};
    const merged = mergeData(loadProjects(), loadTomb(), remote.projects||[], remote.tomb||{});
    saveProjects(merged.projects, true);   // skip push (on pousse juste après)
    saveTomb(merged.tomb);
    await pushRemoteNow();
    setSyncState("ok");
    navigate(currentView, currentParam);   // rafraîchit l'écran courant
  } catch(e){ setSyncState("err"); }
}

/* ---- Vue Synchro (lien magique par email) ---- */
views.sync = function(){
  const labels = { off:"Non connecté", ok:"À jour ✓", sync:"Synchronisation…", err:"Erreur réseau" };
  if(!supa){
    content.innerHTML = `
      <div class="page-head"><h1>${icon("cloud",22)} Synchro</h1>
        <p>Synchro indisponible (pas de réseau au chargement). Reconnecte-toi à internet puis recharge la page.</p></div>`;
    return;
  }
  let body;
  if(syncUser){
    body = `
      <div class="card" style="max-width:560px">
        <p style="margin-bottom:10px">Connecté : <strong>${esc(syncUser.email||"")}</strong></p>
        <p style="margin-bottom:16px;color:var(--muted)">État : ${esc(labels[syncState]||"")}</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <button class="btn" onclick="syncNow()">${icon("refresh",16)} Synchroniser maintenant</button>
          <button class="btn secondary" onclick="syncLogout()">Se déconnecter</button>
        </div>
      </div>`;
  } else if(linkSent){
    body = `
      <div class="card" style="max-width:560px">
        <p style="margin-bottom:8px">Lien de connexion envoyé par email.</p>
        <p style="margin-bottom:16px;color:var(--muted)">Ouvre ton email <strong>sur cet appareil</strong> et clique sur « Sign in » : tu reviendras connecté automatiquement.</p>
        <button class="btn secondary" onclick="syncResetLogin()">Renvoyer / changer d'email</button>
      </div>`;
  } else {
    body = `
      <div class="card" style="max-width:560px">
        <p style="margin-bottom:14px">Connecte-toi par email pour retrouver tes projets sur tous tes appareils. Tu recevras un lien de connexion.</p>
        <div class="form-row"><label>Email</label><input type="email" id="sync-email" placeholder="toi@email.com" /></div>
        <button class="btn" onclick="syncSendLink()">${icon("arrow",16)} Recevoir le lien</button>
      </div>`;
  }
  content.innerHTML = `
    <div class="page-head"><h1>${icon("cloud",22)} Synchro</h1>
      <p>Tes projets, partout. L'app marche hors ligne ; la synchro se fait dès que tu es connecté.</p></div>
    ${body}`;
};

window.syncSendLink = async function(){
  const email = (document.getElementById("sync-email")?.value || "").trim();
  if(!email){ toast("Entre ton email"); return; }
  try {
    const { error } = await supa.auth.signInWithOtp({ email, options:{ shouldCreateUser:true } });
    if(error) throw error;
    linkSent = true; views.sync(); toast("Lien envoyé par email");
  } catch(e){ toast("Échec de l'envoi"); }
};
window.syncResetLogin = function(){ linkSent = false; views.sync(); };
window.syncLogout = async function(){
  try { await supa.auth.signOut(); } catch(e){}
  syncUser = null; linkSent = false; setSyncState("off"); toast("Déconnecté"); navigate("sync");
};
window.syncNow = function(){ pullMergePush(); };

/* ---- Icônes de la sidebar (injectées au démarrage) ---- */
const NAV_ICONS = { dashboard:"home", projects:"music", newproject:"plus", targets:"target", chains:"link", buses:"wave", guide:"book", gear:"sliders", plugins:"grid", sync:"cloud" };
document.querySelectorAll(".nav-btn").forEach(b => {
  const label = b.textContent.trim().replace(/^\S+\s+/, "");
  b.innerHTML = icon(NAV_ICONS[b.dataset.view] || "plus", 17) + "<span>" + esc(label) + "</span>";
});
(function(){
  const set = (id, name) => {
    const el = document.getElementById(id);
    if(!el) return;
    const label = el.textContent.trim().replace(/^\S+\s+/, "");
    el.innerHTML = icon(name, 14) + "<span>" + esc(label) + "</span>";
  };
  set("exportData", "download");
  set("importData", "upload");
})();
(function(){
  const mb = document.getElementById("menuBtn");
  if(mb){ mb.innerHTML = icon("menu",22); mb.addEventListener("click", openDrawer); }
  document.getElementById("backdrop")?.addEventListener("click", closeDrawer);
})();

/* ---- Démarrage ---- */
navigate("dashboard");

/* Auth : reprend la session, capte le retour du lien magique, puis synchronise */
if(supa){
  supa.auth.onAuthStateChange((event, session) => {
    syncUser = session ? session.user : null;
    if(session){ linkSent = false; setTimeout(() => pullMergePush(), 0); }
    else if(currentView === "sync"){ views.sync(); }
  });
}
