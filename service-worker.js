// eslint-disable-next-line no-restricted-globals
const ignored = self.__WB_MANIFEST;

const CACHE_VERSION = "0.0.1";
const CACHE_NAME = "PINO-CACHE";
const CURRENT_CACHE = CACHE_NAME + ".v" + CACHE_VERSION;

const OFFLINE_URL = "offline.html";
const FAVICON_URL = "favicon.ico";
const FILES = [OFFLINE_URL, FAVICON_URL];

const regex = /(.*).(js|css|scss|eot|ttf|woff|woff2|svg|png|jpg|gif|bmp)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async function () {
      const cache = await caches.open(CURRENT_CACHE);
      await cache.addAll(FILES);
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (CURRENT_CACHE !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  const requestURL = new URL(event.request.url);
  const canFallToOffline =
    event.request.mode === "navigate" ||
    (event.request.method === "GET" &&
      event.request.headers.get("accept").includes("text/html"));
  const isLocalHost =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";

  if (event.request.method !== "GET") return;
  if (requestURL.origin !== location.origin) return;

  if (canFallToOffline) {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch {
          return caches.match(OFFLINE_URL);
        }
      })()
    );
    return;
  }

  if (regex.test(requestURL.pathname)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CURRENT_CACHE);
        if (!isLocalHost) {
          const cachedResponse = await cache.match(event.request);
          if (cachedResponse) return cachedResponse;
        }
        try {
          const networkResponse = await fetch(event.request);
          event.waitUntil(cache.put(event.request, networkResponse.clone()));
          return networkResponse;
        } catch {}
      })()
    );
    return;
  }
});
