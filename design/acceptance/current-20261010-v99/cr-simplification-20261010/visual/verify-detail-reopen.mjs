import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const out=path.resolve('design/acceptance/current-20261010-v99/cr-simplification-20261010/visual');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
try {
 const context=await browser.newContext({viewport:{width:390,height:844}}),page=await context.newPage();page.setDefaultTimeout(10000);
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5182/__dots_review__/#/',{waitUntil:'networkidle'});
 await page.locator('#card-candidate-meta-muse-20261005').waitFor();
 await page.locator('#card-candidate-meta-muse-20261005').click();
 await page.waitForSelector('#studioOverlay[open] .character-studio');
 const first=await page.evaluate(()=>{const b=document.querySelector('#overlayBody'),h=document.querySelector('.overlay-header').getBoundingClientRect(),p=document.querySelector('.studio-preview').getBoundingClientRect(),r=document.querySelector('.studio-related').getBoundingClientRect();return{scrollTop:b.scrollTop,clientHeight:b.clientHeight,scrollHeight:b.scrollHeight,header:h.toJSON(),preview:p.toJSON(),related:r.toJSON(),headerPosition:getComputedStyle(document.querySelector('.overlay-header')).position,previewFits:p.top>=h.bottom-1&&p.bottom<=innerHeight,relatedInScrollport:r.bottom<=b.scrollHeight};});
 await page.locator('#overlayBody').evaluate(e=>e.scrollTop=e.scrollHeight);
 await page.waitForTimeout(80);
 const bottom=await page.locator('#overlayBody').evaluate(e=>({scrollTop:e.scrollTop,scrollHeight:e.scrollHeight,clientHeight:e.clientHeight}));
 await page.screenshot({path:path.join(out,'reopen-before-close-scrolled.png'),fullPage:false});
 await page.locator('#overlayClose').click();await page.waitForFunction(()=>!document.querySelector('#studioOverlay').open);
 await page.locator('#card-candidate-meta-muse-20261005').click();await page.waitForSelector('#studioOverlay[open] .character-studio');await page.waitForTimeout(120);
 const reopened=await page.evaluate(()=>{const b=document.querySelector('#overlayBody'),h=document.querySelector('.overlay-header').getBoundingClientRect(),p=document.querySelector('.studio-preview').getBoundingClientRect(),image=document.querySelector('.artwork-detail__image').getBoundingClientRect(),r=document.querySelector('.studio-related').getBoundingClientRect();return{scrollTop:b.scrollTop,header:h.toJSON(),preview:p.toJSON(),image:image.toJSON(),related:r.toJSON(),headerPosition:getComputedStyle(document.querySelector('.overlay-header')).position,previewFits:p.top>=h.bottom-1&&p.bottom<=innerHeight,imageFits:image.top>=p.top-1&&image.bottom<=p.bottom+1};});
 await page.screenshot({path:path.join(out,'reopen-after-close-first-screen.png'),fullPage:false});
 assert(first.clientHeight>0&&first.scrollHeight>first.clientHeight,JSON.stringify(first));assert(bottom.scrollTop>0,JSON.stringify(bottom));assert.equal(first.headerPosition,'relative');assert.equal(first.previewFits,true,JSON.stringify(first));assert.equal(reopened.scrollTop,0,JSON.stringify(reopened));assert.equal(reopened.previewFits,true,JSON.stringify(reopened));assert.equal(reopened.imageFits,true,JSON.stringify(reopened));assert(errors.length===0,errors.join('\n'));
 await fs.writeFile(path.join(out,'reopen-report.json'),JSON.stringify({viewport:{width:390,height:844},artworkId:'candidate-meta-muse-20261005',first,bottom,reopened,errors,passed:true},null,2));
 await context.close();
}finally{await browser.close();}
