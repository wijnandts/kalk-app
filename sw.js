/* ================================================================
   Service-Worker – Kalkulations-Meister (Offline-PWA)
   Strategie: Cache-First mit Netzwerk-Fallback und Update-Check
   ================================================================ */
const CACHE_NAME = "kalk-meister-v1";
const DATEIEN = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json"
];

/* Installation: Alle Kern-Dateien vorab cachen */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(DATEIEN))
  );
  self.skipWaiting();
});

/* Aktivierung: Alte Cache-Versionen löschen */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* Fetch: Erst Cache, dann Netzwerk (Offline-Kompatibilität) */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((antwort) => {
      if (antwort) return antwort;
      return fetch(event.request).then((netzAntwort) => {
        // Erfolgreiche Antworten zusätzlich cachen
        if (netzAntwort && netzAntwort.ok && event.request.method === "GET") {
          const kopie = netzAntwort.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, kopie));
        }
        return netzAntwort;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
