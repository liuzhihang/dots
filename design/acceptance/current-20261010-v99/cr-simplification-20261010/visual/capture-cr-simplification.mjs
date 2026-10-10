import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const out=path.resolve('design/acceptance/current-20261010-v99/cr-simplification-20261010/visual');
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const rows=[];
try {
 for(const viewport of [{width:1440,height:900,name:'desktop'},{width:768,height:1024,name:'tablet'},{width:390,height:844,name:'mobile-390'},{width:320,height:700,name:'mobile-320'}]) {
  const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},acceptDownloads:true});
  const page=await context.newPage(); page.setDefaultTimeout(12000);
  const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  const languageRows=[];
  for(const language of ['en','zh-CN']) {
   await page.goto('http://127.0.0.1:5182/__dots_review__/#/',{waitUntil:'networkidle'});
   await page.waitForSelector('.artwork-select');
   if(language==='zh-CN') await page.locator('#languagePreference').click();
   await page.waitForTimeout(120);
   await page.screenshot({path:path.join(out,`after-home-${viewport.name}-${language}.png`),fullPage:false});
   const initial=await page.evaluate(()=>({title:document.querySelector('#galleryTitle')?.textContent,nav:[...document.querySelectorAll('.studio-nav a')].map(a=>a.textContent.trim()),guide:!!document.querySelector('#guidePortal'),detailLanguage:!!document.querySelector('#detailLanguage'),intro:document.querySelector('.gallery-intro')?.getBoundingClientRect().toJSON(),art:[...document.querySelectorAll('.gallery-intro-art img')].map(i=>({src:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0,rect:i.getBoundingClientRect().toJSON()})),series:[...document.querySelectorAll('#gallerySeries .gallery-series-filter__button')].map(b=>({label:b.textContent.trim(),pressed:b.getAttribute('aria-pressed'),rect:b.getBoundingClientRect().toJSON()})),search:document.querySelector('.search-field')?.getBoundingClientRect().toJSON(),sort:document.querySelector('.sort-field select')?.getBoundingClientRect().toJSON(),sortSameRow:Math.abs(document.querySelector('.search-field').getBoundingClientRect().top-document.querySelector('.sort-field').getBoundingClientRect().top)<1,grid:document.querySelector('#artworkGrid')?.getBoundingClientRect().toJSON()}));
   await page.goto('http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-dots-20261005?v=v2',{waitUntil:'networkidle'});
   await page.waitForSelector('#studioOverlay[open] .character-studio');
   await page.waitForFunction(()=>{const canvas=document.querySelector('.studio-draft-host canvas');return !canvas||canvas.width>0&&canvas.height>0;});
   await page.waitForTimeout(300);
   await page.screenshot({path:path.join(out,`after-detail-${viewport.name}-${language}.png`),fullPage:false});
   const modal=await page.evaluate(()=>{const r=s=>document.querySelector(s)?.getBoundingClientRect().toJSON()||null;const header=document.querySelector('.overlay-header')?.getBoundingClientRect(),related=document.querySelector('.studio-related')?.getBoundingClientRect(),preview=document.querySelector('.studio-preview')?.getBoundingClientRect(),title=document.querySelector('#overlayTitle')?.getBoundingClientRect(),dialog=document.querySelector('#studioOverlay')?.getBoundingClientRect(),actions=document.querySelector('.studio-actions');return{dialog:r('#studioOverlay'),header:r('.overlay-header'),title:r('#overlayTitle'),titleCenterDelta:dialog&&title?Math.round((title.left+title.width/2-(dialog.left+dialog.width/2))*100)/100:null,back:r('#overlayBack'),close:r('#overlayClose'),shell:r('.overlay-shell'),body:r('#overlayBody'),studio:r('.character-studio'),media:r('.studio-media-column'),preview:r('.studio-preview'),content:r('.studio-content'),related:r('.studio-related'),headerPosition:getComputedStyle(document.querySelector('.overlay-header')).position,bodyOverflow:getComputedStyle(document.querySelector('#overlayBody')).overflowY,tabPosition:document.querySelector('.studio-editor-tabs')?getComputedStyle(document.querySelector('.studio-editor-tabs')).position:null,headerOverlap:Boolean(header&&related&&related.top<header.bottom&&related.bottom>header.top),previewVisible:Boolean(preview&&preview.width>0&&preview.height>0&&preview.top>=header.bottom-1&&preview.bottom<=innerHeight),actions:actions?{rect:actions.getBoundingClientRect().toJSON(),buttons:[...actions.querySelectorAll('button')].map(b=>({action:b.dataset.action,text:b.textContent.trim(),rect:b.getBoundingClientRect().toJSON(),height:b.getBoundingClientRect().height,textAlign:getComputedStyle(b).textAlign,justifyContent:getComputedStyle(b).justifyContent}))}:null};});
   languageRows.push({language,initial,modal});
  }
  rows.push({viewport,languageRows,errors});
  await context.close();
 }
 await fs.writeFile(path.join(out,'after-report.json'),JSON.stringify({url:'127.0.0.1:5182/__dots_review__',browser:browser.version(),rows},null,2));
} finally {await browser.close();}
