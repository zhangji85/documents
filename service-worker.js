/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6c60fca8335ee7796ebf3a1550b67026"
  },
  {
    "url": "about/index.html",
    "revision": "d44a967cbaa9ed98f28f25015414890a"
  },
  {
    "url": "about/test.html",
    "revision": "7c4bb1ba2e4ee281c453f5a0bd850b06"
  },
  {
    "url": "assets/css/0.styles.42d3f967.css",
    "revision": "c1386fd0099c5dbd01d0afe260900716"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.70cf8450.js",
    "revision": "58321a03175fcc4f3d8ade5e0820504f"
  },
  {
    "url": "assets/js/11.f9289e1d.js",
    "revision": "530779c4c491cc9ef8fb4c1677e89fb0"
  },
  {
    "url": "assets/js/12.5836cb48.js",
    "revision": "8b8697321cc66d9d79e4015fbf7831fc"
  },
  {
    "url": "assets/js/13.3e284a70.js",
    "revision": "8f2cf39f25a183e80f56ab3ae2a4843b"
  },
  {
    "url": "assets/js/14.df72de15.js",
    "revision": "14acb2770591f92a1f28cfd879802fcc"
  },
  {
    "url": "assets/js/15.a7ffabb7.js",
    "revision": "0d3d03ab4781e3a0a5e8f01590f514ce"
  },
  {
    "url": "assets/js/16.6c466344.js",
    "revision": "75a21d78a74a83358d7e2a30dc5cebe4"
  },
  {
    "url": "assets/js/17.7af8f57c.js",
    "revision": "21bbd536b5fd9d69ba0e2a085404bb9a"
  },
  {
    "url": "assets/js/2.470f27d1.js",
    "revision": "a552ad404dd24f8414e8cd05c985228c"
  },
  {
    "url": "assets/js/3.54099cc2.js",
    "revision": "d61dc401b33fc4306df4a93baf7b09af"
  },
  {
    "url": "assets/js/4.cb2be50b.js",
    "revision": "ab142d9709c7b6e4a73a8f498a9d47f1"
  },
  {
    "url": "assets/js/5.207d02cb.js",
    "revision": "931cf0281ca7501426c67c9c6f881fde"
  },
  {
    "url": "assets/js/6.a10a6a63.js",
    "revision": "e2663fd81996d3594a94685e7fd573e6"
  },
  {
    "url": "assets/js/7.3eb553c7.js",
    "revision": "18213da9a1eaee22fcc01edc43d09795"
  },
  {
    "url": "assets/js/8.ddb3efa7.js",
    "revision": "3b4f535ee5901f606fa5047114e45097"
  },
  {
    "url": "assets/js/9.e8f0f083.js",
    "revision": "ee6f8fe29775551e0496b7c1bece1c1a"
  },
  {
    "url": "assets/js/app.096dc150.js",
    "revision": "e28975de78c4b8b8ff02a31e70699008"
  },
  {
    "url": "css/css1.html",
    "revision": "3ae3ed7447994d0b7ebb96b0d6558baa"
  },
  {
    "url": "css/css2.html",
    "revision": "ee3cc6fd485a602f516daed970856623"
  },
  {
    "url": "css/index.html",
    "revision": "5644a49270632522ddd1b4270d258e00"
  },
  {
    "url": "index.html",
    "revision": "11399cf5c98f2f9eacc5092769955557"
  },
  {
    "url": "javascript/index.html",
    "revision": "66abae2fdae425463a8b32344983fd6b"
  },
  {
    "url": "javascript/javascript1.html",
    "revision": "8e9af40b6342e37e74350b6edfd20d67"
  },
  {
    "url": "javascript/javascript2.html",
    "revision": "a0264c554c63ec8376663ea6310ce2d1"
  },
  {
    "url": "zj.jpg",
    "revision": "ae2c54d8c769dc49adf9da0b25c48f0b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
