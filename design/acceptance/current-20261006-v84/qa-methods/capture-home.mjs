import {chromium} from '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {writeFileSync} from 'node:fs';
const out='/private/tmp/dots-atlas-v84-dynamic-final-b25';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--no-sandbox']});
const results=[];
for(const item of [
 {label:'before',url:'http://127.0.0.1:5180/index.html',sourceId:'git:4d952b907ef4823db7b5e9792726c80a4226eeb8'},
 {label:'after',url:'http://127.0.0.1:5173/index.html?v=84',sourceId:'sha256:b25be9f918395b4113d1ab11a3a3b84e60306d72352812ddca894612a4843f9f'}
]){
 const context=await browser.newContext({viewport:{width:1920,height:872},deviceScaleFactor:1,reducedMotion:'reduce'});
 const page=await context.newPage();const errors=[];
 page.on('pageerror',e=>errors.push({type:'pageerror',message:e.message}));
 const response=await page.goto(item.url,{waitUntil:'domcontentloaded',timeout:30000});
 if(!response||response.status()>=400)throw new Error(`${item.label} homepage nav failed ${response?.status()}`);
 await page.locator('#homeTitle').waitFor({state:'visible',timeout:30000});
 await page.waitForFunction(()=>document.querySelectorAll('#familyCards .family-entry').length===5,{timeout:30000});
 await page.addStyleTag({content:'*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}'});
 const bounded=await page.evaluate(async()=>{
   const candidates=[...document.querySelectorAll('#heroScene img,#familyCards img')];
   const visible=candidates.filter(img=>{const r=img.getBoundingClientRect(),s=getComputedStyle(img);return r.width>0&&r.height>0&&r.bottom>0&&r.right>0&&r.top<innerHeight&&r.left<innerWidth&&s.visibility!=='hidden'&&s.display!=='none';});
   const images=visible.map(img=>({src:img.currentSrc,complete:img.complete,naturalWidth:img.naturalWidth}));
   const imageWait=await Promise.race([Promise.all(visible.map(img=>new Promise(resolve=>{if(img.complete){resolve(img.naturalWidth>0);return;}img.addEventListener('load',()=>resolve(img.naturalWidth>0),{once:true});img.addEventListener('error',()=>resolve(false),{once:true});}))),new Promise(resolve=>setTimeout(()=>resolve('timeout'),5000))]);
   const fontWait=await Promise.race([document.fonts?.ready?.then(()=>true)??Promise.resolve(true),new Promise(resolve=>setTimeout(()=>resolve('timeout'),2500))]);
   return {visibleImageCount:visible.length,images,imageWait,fontWait};
 });
 await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(300);
 await page.screenshot({path:`${out}/homepage-${item.label}-b25-1920x872.png`,animations:'disabled'});
 const pageState=await page.evaluate(()=>({title:document.title,heroTitle:document.querySelector('#homeTitle')?.innerText,primaryNav:[...document.querySelectorAll('.studio-nav button')].map(n=>n.innerText),cardCount:document.querySelectorAll('#familyCards .family-entry').length,cardNames:[...document.querySelectorAll('#familyCards .family-entry b')].map(n=>n.innerText),familySearch:document.querySelector('#familySearch')?.getAttribute('placeholder'),randomButton:document.querySelector('.hero-random')?.innerText}));
 results.push({...item,status:response.status(),captureMethod:'playwright-local-chrome',browser:await page.evaluate(()=>navigator.userAgent),viewport:{width:1920,height:872},bounded, pageState,errors});
 await context.close();
}
await browser.close();writeFileSync(`${out}/homepage-comparison.json`,JSON.stringify({schema:'dot-studio-homepage-visual-comparison/v1',results},null,2));console.log(JSON.stringify(results.map(x=>({label:x.label,status:x.status,cards:x.pageState.cardCount,bounded:x.bounded,errors:x.errors})),null,2));
