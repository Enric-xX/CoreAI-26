const CACHE_NAME = 'coreai-v2.6.0'; // CAMBIA ESTO CUANDO SUBAS CAMBIOS
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './logo.png',
  './manifest.json'
];

// Instalar y guardar archivos en el PC
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cacheando archivos maestros...');
      return cache.addAll(assets);
    })
  );
  self.skipWaiting(); 
});

// Activar y borrar versiones antiguas automáticamente
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Servir archivos desde caché para velocidad máxima
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
