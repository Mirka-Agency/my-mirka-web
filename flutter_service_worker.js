'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c2e3eeafbb690f9d8298f7da79a9d273",
"assets/AssetManifest.bin.json": "0ad17aae465369b47d96f4dc1ce621d2",
"assets/AssetManifest.json": "ed0a00dcb1e41d78eed973d17fea4a8f",
"assets/assets/fonts/abar/AbarMidFaNum-Black.ttf": "871acfb63cf1cd38da42244c5b7aaced",
"assets/assets/fonts/abar/AbarMidFaNum-Bold.ttf": "692bfc4cc8e20939a019264b285433d9",
"assets/assets/fonts/abar/AbarMidFaNum-ExtraBold.ttf": "5336df28e9990c812c400a504732c866",
"assets/assets/fonts/abar/AbarMidFaNum-Regular.ttf": "4959abde14a99524bce9087390cd04a2",
"assets/assets/fonts/abar/AbarMidFaNum-SemiBold.ttf": "0455796fcd8ccafc6caeca986691a905",
"assets/assets/images/bg.jpg": "d88c555e850681d713b3bd7d34f77a82",
"assets/assets/images/create.svg": "d2bb8a1d73db0fb0c5d26922db22ac49",
"assets/assets/images/dc.svg": "4062a1d46876f556d73f68be9f11776e",
"assets/assets/images/done.svg": "c76d4538b250e22809e3d3359ef92d98",
"assets/assets/images/empty.svg": "345e0b72e89549249edbf924d9c86996",
"assets/assets/images/login.jpg": "dfbf6e2603d43a1e5c7ed6f99800034f",
"assets/assets/images/menu.svg": "6fbf82af3b6a6d397cf1664daa8f5aa2",
"assets/assets/images/mirka-1.svg": "c80141efa919b774941a595879989891",
"assets/assets/images/mirka-blue.gif": "283e7a9b3cccd25a2b4d7c0d970ad054",
"assets/assets/images/mirka-sign.svg": "5cfed324e6238c5f78159e5a4034f7e4",
"assets/assets/images/mirka.svg": "42e2df0b30d940d143cb9e8e58e33537",
"assets/assets/images/pack-add.svg": "481f6fd43881e49e9d34a41e8a9ff8fb",
"assets/assets/images/pack-check.svg": "c8868e10e3276f502ab715e0b11e4096",
"assets/assets/images/pack-close.svg": "59ada03287f0edd9fd7058d3dc754cc0",
"assets/assets/images/pack-remove.svg": "dc5d739ba303a00694bcad0be135a095",
"assets/assets/images/pack-search.svg": "ed76348445f5b2f421d86ae44cf2923a",
"assets/assets/images/pack.svg": "446562e502e971da7a7edb3017f560a3",
"assets/assets/images/start.svg": "e8bb3d862af9977b490e2aae4a8e9e22",
"assets/assets/images/stop.svg": "04463f054801266653385b4ef1a7eef0",
"assets/assets/images/update.svg": "b7cb2cb462f0f4058d24a1030b7d835f",
"assets/assets/images/user.svg": "d7958d5c4cc7950881224d2892c91f95",
"assets/FontManifest.json": "98f8557dfc9ed32d3936c6f3f4e73fac",
"assets/fonts/MaterialIcons-Regular.otf": "3d703befe8f540bceab11a7a5ddc56b1",
"assets/NOTICES": "8cb3851a0d7af64e159d4136b0abef62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "90cdb95e4546919dc08885eb99e1c272",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8e47bba253aec7075ee2ddb7e186ff88",
"icons/Icon-192.png": "a1bb7520810d601f000321ee4314c15a",
"icons/Icon-512.png": "9cfff1586b9323fb4df066caac5bc3c8",
"icons/Icon-maskable-192.png": "a1bb7520810d601f000321ee4314c15a",
"icons/Icon-maskable-512.png": "9cfff1586b9323fb4df066caac5bc3c8",
"index.html": "23aca0933dcd1b0c98d207a98e3f6b0f",
"/": "23aca0933dcd1b0c98d207a98e3f6b0f",
"main.dart.js": "82169a545a700072ae405d6e21bcc649",
"manifest.json": "affd757a65289c4821944e3f7f5b420e",
"version.json": "71191c9f1dbec17ad39f320b6aeaac2a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
