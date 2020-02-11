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
    "revision": "a1a9d26be6153095daa7bd2a6110bd37"
  },
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/css/0.styles.819783d5.css",
    "revision": "778def17f2559d3dfaa4e318f93777b8"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.d86a3ef2.js",
    "revision": "2c67d215dc0c417f0dd54540a9e44183"
  },
  {
    "url": "assets/js/11.d746bd80.js",
    "revision": "d0b1b613a9e3baee5404716d090854fa"
  },
  {
    "url": "assets/js/12.0020e5dc.js",
    "revision": "142cb7e0aa23801dc9ce6dae3c038075"
  },
  {
    "url": "assets/js/13.0af12da5.js",
    "revision": "690adad3471085a519e4171a9ebf5a0c"
  },
  {
    "url": "assets/js/14.9a304de7.js",
    "revision": "9375bc27bd9dedc1bd741659f2237a7e"
  },
  {
    "url": "assets/js/15.d2009d46.js",
    "revision": "b945a5d5629b6c05310f933860a7e7d0"
  },
  {
    "url": "assets/js/16.ca2469c5.js",
    "revision": "b60f3beb85526e1e541c0b755afea871"
  },
  {
    "url": "assets/js/17.72ef2c35.js",
    "revision": "ef55237b73c8c34c7ce71424c0e1e82f"
  },
  {
    "url": "assets/js/18.11a7b0d8.js",
    "revision": "0339a20f7d010d86fc43b1ed95fc3cef"
  },
  {
    "url": "assets/js/19.0fa36ba7.js",
    "revision": "26c49e3ba79ba778110ccafa81aba619"
  },
  {
    "url": "assets/js/2.693ca05a.js",
    "revision": "481ae91f0bd080bcab112c99e8a78e57"
  },
  {
    "url": "assets/js/20.c31d479b.js",
    "revision": "a28b466129ffe508a068b52bcac73cad"
  },
  {
    "url": "assets/js/21.e2b8e18b.js",
    "revision": "54137cd17b860cdce94077167d2b5e12"
  },
  {
    "url": "assets/js/22.2b623b55.js",
    "revision": "f24abc41d34deb3b3d61b2a2e19ebdd9"
  },
  {
    "url": "assets/js/23.17e9f8ce.js",
    "revision": "b2ef1262f9004ff72ea9bb66a04540ba"
  },
  {
    "url": "assets/js/24.f099f4eb.js",
    "revision": "a04d7b110374d2985cfa628528152253"
  },
  {
    "url": "assets/js/25.395d0d0f.js",
    "revision": "1b7884efa3d6f23dcfb23c10435c6962"
  },
  {
    "url": "assets/js/26.e26b0def.js",
    "revision": "a680d9e19d72254a903ab4919f7662c9"
  },
  {
    "url": "assets/js/27.0f3b71b3.js",
    "revision": "e1ad61d48e310fa4dfeaf2ce3dae6fba"
  },
  {
    "url": "assets/js/28.6dee2d2f.js",
    "revision": "2186f04e5e057fa725c7d536630bc849"
  },
  {
    "url": "assets/js/29.0733e6ae.js",
    "revision": "8ddc5a68b1c110fc9fc51a7028987052"
  },
  {
    "url": "assets/js/3.61706d91.js",
    "revision": "f77b0b0a7524a73fbc5bb71844c31dda"
  },
  {
    "url": "assets/js/30.b9d324f2.js",
    "revision": "d68ef958c98ef5dfbb23521978ab2496"
  },
  {
    "url": "assets/js/31.904f9ced.js",
    "revision": "192a63df1774149a9cb7054cfc60af9c"
  },
  {
    "url": "assets/js/32.9be20df9.js",
    "revision": "8e1390b57c76b827cb97204dc0b0d993"
  },
  {
    "url": "assets/js/33.4f6ba2e7.js",
    "revision": "f441861bbfc142f29c3480658bb64dfc"
  },
  {
    "url": "assets/js/34.9a541778.js",
    "revision": "cce25ac1896ee21dde4bf246e4b3a7d4"
  },
  {
    "url": "assets/js/35.5df03bd3.js",
    "revision": "00cfa83405fd4fece3a5df7fa66c559e"
  },
  {
    "url": "assets/js/36.86a100a0.js",
    "revision": "bd7e9c9e55aba2a54d76f2d1c30b60bb"
  },
  {
    "url": "assets/js/37.0627b115.js",
    "revision": "f74327906bc980448f841bdd6e5c0bf9"
  },
  {
    "url": "assets/js/38.bcb38f54.js",
    "revision": "001bd11e9efdb6cdce791c28ad51e062"
  },
  {
    "url": "assets/js/39.a0004c10.js",
    "revision": "c6c4e22959c4c0f547484047783b15ff"
  },
  {
    "url": "assets/js/4.318389ea.js",
    "revision": "2c5da1bc0b00d1616d825e8308085e88"
  },
  {
    "url": "assets/js/40.8da86c7c.js",
    "revision": "2b04417a92323081b34b7b470e801a68"
  },
  {
    "url": "assets/js/5.7576060f.js",
    "revision": "3e03032b59ad1ef12b05bfba21996749"
  },
  {
    "url": "assets/js/6.0c5175e5.js",
    "revision": "1e5631333e3f5c84d9fd39483f1020d1"
  },
  {
    "url": "assets/js/7.023684e2.js",
    "revision": "8f650d942f8855b5144188cc63bba4d9"
  },
  {
    "url": "assets/js/8.f5883afc.js",
    "revision": "330e381385862187bbb2dab66d106027"
  },
  {
    "url": "assets/js/9.100dde95.js",
    "revision": "ee461d6669f6be00da86fb73dbcc1671"
  },
  {
    "url": "assets/js/app.028e1da5.js",
    "revision": "3ad29b0669b8fb98e072402e25aead5c"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "9eda18947898c806fb95f1db9ecb0dc9"
  },
  {
    "url": "complie/codegen.html",
    "revision": "7004bc6f609102839a58c94cb99aed46"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "a82409d8ad4de9cb2e580669ae0320a4"
  },
  {
    "url": "complie/index.html",
    "revision": "1dfdd6a86a3ca13f47877e91c25ce048"
  },
  {
    "url": "complie/optimize.html",
    "revision": "bfb8a9dc388b258bffd379ce6e526fae"
  },
  {
    "url": "complie/parse.html",
    "revision": "d6433f699d1467f6e7965bb4faad40b4"
  },
  {
    "url": "complie/summary.html",
    "revision": "2f66b4094cdf97f3e4aadf0938983f4a"
  },
  {
    "url": "complie/textParse.html",
    "revision": "8f270aa9951e79f869deae9e1e8fe76e"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "fcb471d01eec5372f399f14acae01fe6"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "08cfe1a95c80a6f9ddc2b118d5b5d3f2"
  },
  {
    "url": "filter/index.html",
    "revision": "df8b558d717f71ecb2c90c265aa665c0"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "85d24eca06760a3ff03ab160f5bcbf06"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "8b8dcd52b9554545ebd67581856a4558"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "210650fd66bfda5581509fc1f3294d83"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "946cc05a30e7e6b69fd8bde9460458de"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "cf7728b384faed45da12297c987b596f"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "45940a38527d91ab3e4bf8c1d8bc2f95"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "bb2d923e02f3fbc420bef54ada41462e"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "c98d1138d158d799b6501a0bb8423f09"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "4ade64c9f6ad4f8023521f4f491c63af"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "36eacbd8e7357f8b526dc47c626490a9"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "577eebae5d5c1d63384cbe7dbb7c94b7"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "6358bd1203212acfe35321a64c72333b"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "27689f21f4c5cf3945f9e16c25c96634"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "f01a64d994c289a47959fe4c77995e49"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "496be31a594fa9a512952d3beaf96fb5"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "f960bc5eacba8027b05a20e32f3666ee"
  },
  {
    "url": "reactive/index.html",
    "revision": "b084972d6d44d5a0dec4bd29d91fc89f"
  },
  {
    "url": "reactive/object.html",
    "revision": "ed4e1cd2a7653d4f7b7151c1bbe480f8"
  },
  {
    "url": "start/index.html",
    "revision": "44de98d3e16eb7fbbde4ee52f818a72b"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "a13c5e44d121ae062e5fcef27fe92441"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "e720f69fe63779ea21a89f2382563306"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "5455dc338584f6572b325eca5f208b1a"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "e953b1f6e985d22d0ee5b7b24ece94a6"
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
