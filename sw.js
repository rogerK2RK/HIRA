/* HIRA — Service Worker (offline-first) */
const CACHE = "hira-v18";
const ASSETS = [
  "./", "./index.html", "./css/styles.css",
  "./js/data.js", "./js/app.js", "./manifest.json",
  "./icon-192.png", "./icon-512.png", "./icon-180.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data ? e.data.text() : "" }; }
  e.waitUntil(
    self.registration.showNotification(d.title || "HIRA — Rappel", {
      body: d.body || "",
      icon: "icon-192.png",
      badge: "icon-192.png",
      tag: d.projectId ? ("hira-" + d.projectId) : "hira",
      data: { projectId: d.projectId || null }
    })
  );
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const id = e.notification.data && e.notification.data.projectId;
  const url = id ? ("./?p=" + id) : "./";
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ("focus" in c) { c.postMessage({ type: "open-project", id: id || null }); return c.focus(); }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Supabase (auth + données) : jamais en cache, on laisse passer
  if (url.hostname.endsWith("supabase.co")) return;

  // CDN supabase-js : cache-first (librairie stable)
  if (url.hostname.endsWith("jsdelivr.net")) {
    e.respondWith(
      caches.match(req).then((r) =>
        r || fetch(req).then((res) => {
          const cp = res.clone();
          caches.open(CACHE).then((c) => c.put(req, cp));
          return res;
        }).catch(() => r)
      )
    );
    return;
  }

  // Même origine : network-first (toujours le code à jour), fallback cache si hors ligne
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req).then((res) => {
        const cp = res.clone();
        caches.open(CACHE).then((c) => c.put(req, cp));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
  }
});
