// Funciona sin conexión: la página y los datos se piden primero a la red y, si no hay red, se usa la última copia
const CACHE = 'pib-mvofgfds';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'vendor/xlsx.full.min.js', 'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== location.origin) return;
  const fresh = req.mode === 'navigate' || /\/(index\.html)?$/.test(u.pathname) || /datos\.(xlsx|xls|ods)$/.test(u.pathname);
  if (fresh) {
    e.respondWith(fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(req, c)); } return r; }).catch(() => caches.match(req, { ignoreSearch: true })));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
