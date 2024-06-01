'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dfed629f1b27a0f370521ee94f3ccdf8",
"assets/AssetManifest.bin.json": "2854c05a1b127f872584e031af930ede",
"assets/AssetManifest.json": "0b4f7c1b891eb03adcc8beafcac00019",
"assets/assets/fonts/yekan/YekanBakh-Black.ttf": "b27918e6bf4aafa39da864154ef679b0",
"assets/assets/fonts/yekan/YekanBakh-Bold.ttf": "d4730af83331a090f1a1b1128c9e2002",
"assets/assets/fonts/yekan/YekanBakh-ExtraBold.ttf": "e3703ae2ee84a05087b3c4f2f2ec6ba4",
"assets/assets/fonts/yekan/YekanBakh-Light.ttf": "bfa8fcb976cb9a665a9bd55873dddc8b",
"assets/assets/fonts/yekan/YekanBakh-Regular.ttf": "0f9cd065804a5b162a755a2b79c4ecc8",
"assets/assets/fonts/yekan/YekanBakh-SemiBold.ttf": "75a15708455365eea617ead233f20940",
"assets/assets/fonts/yekan/YekanBakh-Thin.ttf": "655c7190905a7f8ae5feb760e785b26a",
"assets/assets/images/bg.jpg": "d88c555e850681d713b3bd7d34f77a82",
"assets/assets/images/create.svg": "d2bb8a1d73db0fb0c5d26922db22ac49",
"assets/assets/images/dc.svg": "4062a1d46876f556d73f68be9f11776e",
"assets/assets/images/done.svg": "c76d4538b250e22809e3d3359ef92d98",
"assets/assets/images/empty.svg": "345e0b72e89549249edbf924d9c86996",
"assets/assets/images/loading.gif": "63c6d324376778e8d72b0c385a1f384c",
"assets/assets/images/login.jpg": "dfbf6e2603d43a1e5c7ed6f99800034f",
"assets/assets/images/menu.svg": "6fbf82af3b6a6d397cf1664daa8f5aa2",
"assets/assets/images/mirka.svg": "8f56a5bd57c75f9327e0e3ad14f8faf7",
"assets/assets/images/pack-add.svg": "481f6fd43881e49e9d34a41e8a9ff8fb",
"assets/assets/images/pack-check.svg": "c8868e10e3276f502ab715e0b11e4096",
"assets/assets/images/pack-close.svg": "59ada03287f0edd9fd7058d3dc754cc0",
"assets/assets/images/pack-remove.svg": "dc5d739ba303a00694bcad0be135a095",
"assets/assets/images/pack-search.svg": "ed76348445f5b2f421d86ae44cf2923a",
"assets/assets/images/pack.svg": "446562e502e971da7a7edb3017f560a3",
"assets/assets/images/splash.gif": "68ec03e57327b94c094e86ceecc16052",
"assets/assets/images/start.svg": "e8bb3d862af9977b490e2aae4a8e9e22",
"assets/assets/images/stop.svg": "04463f054801266653385b4ef1a7eef0",
"assets/assets/images/update.svg": "b7cb2cb462f0f4058d24a1030b7d835f",
"assets/assets/images/user.svg": "d7958d5c4cc7950881224d2892c91f95",
"assets/FontManifest.json": "ae4164a835dbf70ed3591b2997237e9c",
"assets/fonts/MaterialIcons-Regular.otf": "647ad196faf376108e8738f4fced5e60",
"assets/NOTICES": "d7825ebe8f5c37d6f19fe129be44a559",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "fca5035d147bf081a24fc4c130364bb4",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "da3006cce9ca090218fc5962002a1a2a",
"icons/Icon-512.png": "2162433af8ecdb137cac990259d3e89f",
"icons/Icon-maskable-192.png": "da3006cce9ca090218fc5962002a1a2a",
"icons/Icon-maskable-512.png": "2162433af8ecdb137cac990259d3e89f",
"index.html": "a3607038e91fbfe41b270715e709ff51",
"/": "a3607038e91fbfe41b270715e709ff51",
"main.dart.js": "2f6ce16fccd760a675c46cbb3c485863",
"manifest.json": "25ac7e682a3fd51f722dc763beb7a73a",
"version.json": "48056d6312fc9be4d18f325688ee0770"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
