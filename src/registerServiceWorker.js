/* eslint-disable no-console */
// 참조 https://serviceworke.rs/

import { register } from "register-service-worker";

// add this to fool it into thinking its offline ready
// self.addEventListener('fetch', function(event) {
//     event.respondWith(async function() {
//         try {
//             var res = await fetch(event.request);
//             var cache = await caches.open('cache');
//             cache.put(event.request.url, res.clone());
//             return res;
//         } catch (error) {
//             return caches.match(event.request);
//         }
//     }());
// });

if (process.env.NODE_ENV === "production") {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log(
                "App is being served from cache by a service worker.\n" +
                    "For more details, visit https://goo.gl/AFskqB"
            );
        },
        registered() {
            console.log("Service worker has been registered.");
        },
        cached() {
            console.log("Content has been cached for offline use.");
        },
        updatefound() {
            console.log("New content is downloading.");
        },
        updated() {
            console.log("New content is available; please refresh.");
        },
        offline() {
            console.log(
                "No internet connection found. App is running in offline mode."
            );
        },
        error(error) {
            console.error("Error during service worker registration:", error);
        },
    });
}

// const urls = [
//     "./",
//     "./index.html",
//     "./index.js",
//     "./manifest.json",
//     "./precache-manifest.cce3d048ce27cc5190a2a2e50da28738.js",
//     "./robots.txt",
//     "./service-worker.js",
//     "./favicon.ico",
//     "./js/app.1692c7bb.js",
//     "./js/app.1692c7bb.js.map",
//     "./js/chunk-vendors.5722cfa3.js",
//     "./js/chunk-vendors.5722cfa3.js.map",
//     "./img/icons/android-chrome-512x512.png",
//     "./img/icons/android-chrome-192x192.png",
//     "./img/icons/android-chrome-maskable-192x192.png",
//     "./img/icons/android-chrome-maskable-512x512.png",
//     "./img/icons/apple-touch-icon-120x120.png",
//     "./img/icons/apple-touch-icon-152x152.png",
//     "./img/icons/apple-touch-icon-180x180.png",
//     "./img/icons/apple-touch-icon-60x60.png",
//     "./img/icons/apple-touch-icon-76x76.png",
//     "./img/icons/apple-touch-icon.png",
//     "./img/icons/favicon-16x16.png",
//     "./img/icons/favicon-32x32.png",
//     "./img/icons/msapplication-icon-144x144.png",
//     "./img/icons/mstile-150x150.png",
//     "./img/icons/safari-pinned-tab.svg",
//     "./img/food3.91b6d3b7.jpg",
//     "./img/image1.91fd5a98.jpg",
//     "./img/image2.36b6ef36.jpg",
//     "./img/image3.5cdbf94d.png",
//     "./img/logo2_b.ff1bd6b2.png",
//     "./img/logo2_w.36a5582a.png",
//     "./icons/icon-192x192.png",
//     "./icons/icon-256x256.png",
//     "./icons/icon-384x384.png",
//     "./icons/icon-512x512.png",
//     "./css/chunk-vendors.b87f4a32.css",
// ];

// const cacheName = "web";

// self.addEventListener("install", (e) => {
//     e.waitUntil(
//         caches.open(cacheName).then((cache) => {
//             return cache.addAll(urls);
//         })
//     );
// });
