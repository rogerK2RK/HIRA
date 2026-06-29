// HIRA — Widget Scriptable (écran de verrouillage + écran d'accueil)
// Affiche l'étape en cours du projet le plus récemment modifié.
// 1) Installe l'app "Scriptable" (gratuite).
// 2) Crée un nouveau script, colle TOUT ce fichier.
// 3) Ajoute un widget Scriptable sur l'écran de verrouillage/accueil,
//    et choisis ce script. (Verrouillage : iOS 16+)

// ⚠️ Colle ICI ta clé secrète widget (voir .secrets.local.md — NE LA PUBLIE JAMAIS).
const WIDGET_KEY = "COLLE_TON_SECRET_ICI";
const ENDPOINT =
  "https://ajynukcwfhxgsertpwtx.supabase.co/functions/v1/widget-status?key=" +
  WIDGET_KEY;

const ACCENT = new Color("#8a7cff");
const WHITE = new Color("#ffffff");
const MUTED = new Color("#9aa0aa");

async function getData() {
  try {
    const req = new Request(ENDPOINT);
    req.timeoutInterval = 12;
    const j = await req.loadJSON();
    return j || null;
  } catch (e) {
    return null;
  }
}

// Anneau de progression (image) pour les familles circulaires
function ringImage(pct, size) {
  const ctx = new DrawContext();
  ctx.size = new Size(size, size);
  ctx.opaque = false;
  ctx.respectScreenScale = true;
  const c = size / 2;
  const lineW = size * 0.13;
  const radius = c - lineW;
  drawArc(ctx, c, radius, lineW, 100, new Color("#ffffff", 0.22));
  drawArc(ctx, c, radius, lineW, pct, WHITE);
  ctx.setTextAlignedCenter();
  ctx.setTextColor(WHITE);
  ctx.setFont(Font.boldSystemFont(size * 0.27));
  ctx.drawTextInRect(`${pct}%`, new Rect(0, c - size * 0.2, size, size * 0.4));
  return ctx.getImage();
}
function drawArc(ctx, c, radius, dot, pct, color) {
  const total = 120;
  const steps = Math.max(0, Math.round((pct / 100) * total));
  ctx.setFillColor(color);
  for (let i = 0; i <= steps; i++) {
    const ang = (i / total) * 2 * Math.PI - Math.PI / 2;
    const x = c + radius * Math.cos(ang) - dot / 2;
    const y = c + radius * Math.sin(ang) - dot / 2;
    ctx.fillEllipse(new Rect(x, y, dot, dot));
  }
}

// Barre de progression simple
function progressBar(stack, pct, w, h, color) {
  const bar = stack.addStack();
  bar.size = new Size(w, h);
  bar.cornerRadius = h / 2;
  bar.backgroundColor = new Color("#ffffff", 0.18);
  const fill = bar.addStack();
  fill.size = new Size(Math.max(h, (w * Math.min(100, pct)) / 100), h);
  fill.cornerRadius = h / 2;
  fill.backgroundColor = color || WHITE;
}

function fmtStep(d) {
  if (!d || !d.phaseTotal) return "Aucun projet";
  if (d.complete) return "Terminé ✓";
  return `${d.phase} · ${d.doneInPhase}/${d.stepTotal}`;
}

const data = await getData();
const fam = config.widgetFamily || "medium";
const w = new ListWidget();

// ---- Familles écran de verrouillage (tintées en monochrome par iOS) ----
if (fam === "accessoryInline") {
  w.addText(data ? `HIRA · ${fmtStep(data)}` : "HIRA · hors ligne");
} else if (fam === "accessoryCircular") {
  w.addAccessoryWidgetBackground = true;
  const img = ringImage(data ? data.percent || 0 : 0, 130);
  const i = w.addImage(img);
  i.centerAlignImage();
} else if (fam === "accessoryRectangular") {
  w.addAccessoryWidgetBackground = true;
  const title = w.addText("HIRA");
  title.font = Font.boldSystemFont(13);
  if (data) {
    const name = w.addText(data.name || "Projet");
    name.font = Font.semiboldSystemFont(13);
    name.lineLimit = 1;
    const step = w.addText(fmtStep(data));
    step.font = Font.systemFont(12);
    w.addSpacer(3);
    progressBar(w, data.percent || 0, 110, 5);
  } else {
    w.addText("hors ligne").font = Font.systemFont(12);
  }
} else {
  // ---- Écran d'accueil (small / medium / large) ----
  w.backgroundColor = new Color("#14151b");
  w.setPadding(14, 16, 14, 16);

  const head = w.addStack();
  head.centerAlignContent();
  const logo = head.addText("HIRA");
  logo.font = Font.heavySystemFont(13);
  logo.textColor = ACCENT;
  head.addSpacer();
  if (data && data.percent != null) {
    const pc = head.addText(`${data.percent}%`);
    pc.font = Font.boldSystemFont(13);
    pc.textColor = MUTED;
  }
  w.addSpacer(8);

  if (data && data.phaseTotal) {
    const name = w.addText(data.name || "Projet");
    name.font = Font.boldSystemFont(fam === "small" ? 16 : 19);
    name.textColor = WHITE;
    name.lineLimit = fam === "small" ? 2 : 1;
    w.addSpacer(4);

    const phase = w.addText(
      data.complete ? "Terminé ✓" : `${data.phase}`
    );
    phase.font = Font.semiboldSystemFont(fam === "small" ? 12 : 14);
    phase.textColor = ACCENT;
    phase.lineLimit = 1;

    const sub = w.addText(
      data.complete
        ? "Bravo, projet bouclé"
        : `Étape ${data.phaseIndex}/${data.phaseTotal} · ${data.doneInPhase}/${data.stepTotal} faits`
    );
    sub.font = Font.systemFont(11);
    sub.textColor = MUTED;

    w.addSpacer(10);
    progressBar(w, data.percent || 0, fam === "small" ? 130 : 300, 7, ACCENT);

    if (data.reminder) {
      w.addSpacer(8);
      const d = new Date(data.reminder);
      const r = w.addText(`⏰ ${d.toLocaleString()}`);
      r.font = Font.systemFont(10);
      r.textColor = MUTED;
      r.lineLimit = 1;
    }
  } else {
    w.addSpacer();
    const m = w.addText(data ? "Aucun projet" : "Hors ligne");
    m.font = Font.semiboldSystemFont(15);
    m.textColor = MUTED;
    w.addSpacer();
  }
}

// Rafraîchissement ~15 min
w.refreshAfterDate = new Date(Date.now() + 15 * 60 * 1000);

Script.setWidget(w);
if (config.runsInApp) {
  if (fam === "accessoryRectangular" || fam === "accessoryCircular" || fam === "accessoryInline") {
    w.presentAccessoryRectangular ? w.presentAccessoryRectangular() : w.presentSmall();
  } else if (fam === "small") {
    w.presentSmall();
  } else if (fam === "large") {
    w.presentLarge();
  } else {
    w.presentMedium();
  }
}
Script.complete();
