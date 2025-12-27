const CACHE_NAME = 'coreai-v2.6.2';

// Solo los archivos críticos para que la web funcione
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './logo.png'
];

// Instalación: Guarda los archivos en el almacenamiento local
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('CoreAI: Cacheando archivos maestros');
      return cache.addAll(assets);
    })
  );
  self.skipWaiting();
});

// Activación: Borra versiones viejas para que no den errores de diseño
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

// Estrategia: Intentar red, si falla, usar caché (Network First)
// Esto asegura que si subes algo a GitHub, el usuario vea lo nuevo primero
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
