if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,o)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=o(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-6f211870"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/style.css",revision:"d971e8b8b8ebf309356a74402f4e9f90"},{url:"icons/pause-button.svg",revision:"9e93978788606242152f76cc05e498ce"},{url:"icons/play-button.svg",revision:"9376ac6d150612330ba969df32405b7c"},{url:"icons/reset-button.svg",revision:"a527fe44fc7a48cc054a021d572ec79f"},{url:"index.html",revision:"9ed53d9ebc13a6d831c4e2e29e2545a1"},{url:"js/app.js",revision:"048de3a557130ea0908b9929eec895d7"},{url:"js/script.js",revision:"a4c478bd684deb99e7d876399bc61a92"},{url:"manifest.json",revision:"094c53200928030f194abd5ec88e9e1b"},{url:"pictures/Tea-logo-512.png",revision:"dd8fa7de83e68eb1ff94e2d3a5194a7e"},{url:"pictures/tea-logo.png",revision:"bf3d11d12c4a1addec5c1d155f447aec"}],{})}));
//# sourceMappingURL=sw.js.map