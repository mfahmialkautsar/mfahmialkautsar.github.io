if(!self.define){let e,s={};const r=(r,o)=>(r=new URL(r+".js",o).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const n=e=>r(e,a),d={module:{uri:a},exports:c,require:n};s[a]=Promise.all(o.map((e=>d[e]||n(e)))).then((e=>(i(...e),c)))}}define(["./workbox-6bd822e5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"179.799623672f8b5d43a705.css",revision:null},{url:"179.799623672f8b5d43a705.js",revision:null},{url:"favicon.ico",revision:"e0e94da226a2a0a4aafb182e98d3e598"},{url:"images/works/designs/animal_related_page.jpg",revision:"cf149c1af2c8d99898a72d490a9d04c1"},{url:"images/works/designs/course_page.jpg",revision:"d461e3aee2a2920204d2f290551ab78a"},{url:"images/works/designs/game_explore_page.jpg",revision:"018ab98a80a264859278f254a865757c"},{url:"images/works/designs/smart_home_page.jpg",revision:"9d48574bdf636d277e91af0801bdc005"},{url:"images/works/designs/waiting_for_order_page.jpg",revision:"22b0b644a25ce616ed468f76f81a8717"},{url:"images/works/open-source-projects/android_themoviecatalogue.jpg",revision:"6341835e7713130aeac6de012b3e38c6"},{url:"images/works/open-source-projects/career_fund.png",revision:"4cb2bb3376a4ab18674a24f56549f051"},{url:"images/works/open-source-projects/crops_diseases_detection.jpg",revision:"c3a462d91b07feed2dde10bbdaf76abc"},{url:"images/works/open-source-projects/ios_foodify.jpg",revision:"ef4148dfdeea45f14f01b437efc1d631"},{url:"images/works/open-source-projects/ios_gamecatalogue.jpg",revision:"5a937e6f0e94972387004af545a86e26"},{url:"images/works/open-source-projects/liff_moviecatalogue.jpg",revision:"6eaa6d7fc7469e39024638b448f73fb8"},{url:"images/works/open-source-projects/linebot_rememberme.jpg",revision:"880d7940c7877c336c5c0574e61ebbcf"},{url:"images/works/open-source-projects/sureback.jpg",revision:"286a44dd1a02418736c0aa057e1c5775"},{url:"images/works/open-source-projects/web_decod.jpg",revision:"3c078de990f45e291816620bae2cd780"},{url:"images/works/projects/antares.jpg",revision:"efcbc1691cdab58c020eee17b0f140f9"},{url:"images/works/projects/lexplay.jpg",revision:"5c0e6d332531cfb7b7ddb22a1db5bae9"},{url:"index.html",revision:"0cb93df108fcce083b6750c9e5160d1f"},{url:"manifest.json",revision:"544cf0aee853163c39af923ea69acd9a"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{})}));
