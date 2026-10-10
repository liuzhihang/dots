import {expectedDisplayKeys, reviewPolicy} from './reveal-test-fixtures.mjs';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {ARTWORKS, createSnapshot, getAsset} from '../dist/studio-artwork-catalog.js?v=95';
import {createDrawEngine, revealFeaturesFor} from '../dist/studio-draw.js?v=95';
import {featureVisualFor} from '../dist/studio-feature-visuals.js?v=95';

// Browser plugin is unavailable in this session. Use the installed Playwright
// and Chrome for real pages at CSS viewports; this is not physical iPhone QA.
const {chromium} = await import(pathToFileURL(process.env.DOTS_PLAYWRIGHT_MODULE || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'));
const base = process.env.DOTS_BASE_URL || 'http://127.0.0.1:5180/';
const output = path.resolve(process.env.DOTS_EVIDENCE_DIR || 'design/acceptance/current-20261008-v95/process');
const temporary = await fs.mkdtemp(path.resolve('.tmp/reveal-recording-'));
await fs.mkdir(output, {recursive:true});
const browser = await chromium.launch({headless:true, executablePath:process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context = await browser.newContext({viewport:{width:390,height:844}, reducedMotion:'no-preference', permissions:['clipboard-read','clipboard-write'], acceptDownloads:true});
const page = await context.newPage();
const errors = [], steps = [], checks = [], downloads = [], recordings = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
const root = '#studioOverlay .fr-view';
let recording = false, capture = null, frames = [], videoName = '';
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

async function record(name) {
  videoName = name; frames = []; recording = true;
  const directory = path.join(temporary, name); await fs.mkdir(directory);
  capture = (async () => {
    while (recording) {
      const start = performance.now();
      const file = path.join(directory, `${String(frames.length).padStart(5,'0')}.jpg`);
      await fs.writeFile(file, await page.screenshot({type:'jpeg',quality:78,animations:'allow'}));
      frames.push({file, time:performance.now()});
      await pause(Math.max(0, 80-(performance.now()-start)));
    }
  })();
}
async function finishRecording() {
  recording = false; if (capture) await capture;
  const concat = path.join(temporary, `${videoName}.txt`);
  await fs.writeFile(concat, frames.flatMap((frame,index) => [`file '${frame.file.replaceAll("'", "'\\''")}'`, `duration ${index+1<frames.length ? (frames[index+1].time-frame.time)/1000 : 0.1}`]).concat(`file '${frames.at(-1).file}'`).join('\n'));
  const video = path.join(output, `${videoName}.mp4`);
  const encoded = spawnSync(process.env.DOTS_FFMPEG_PATH || '/opt/homebrew/bin/ffmpeg', ['-hide_banner','-loglevel','error','-f','concat','-safe','0','-i',concat,'-fps_mode','vfr','-c:v','libx264','-crf','23','-pix_fmt','yuv420p','-movflags','+faststart','-y',video], {encoding:'utf8'});
  assert.equal(encoded.status,0,encoded.stderr);
  recordings.push({file:path.relative(output,video),frames:frames.length,wallDurationMs:Math.round(frames.at(-1).time-frames[0].time),viewport:{width:390,height:844},rawFrames:'temporary ignored directory; removed after encoding'});
  await fs.writeFile(path.join(output,`${videoName}-timeline.json`),JSON.stringify(await page.evaluate(()=>window.__processTimeline||[]),null,2)+'\n');
  capture = null;
}
async function state() {
  return page.locator(root).evaluate(view => {
    const result=view.querySelector('.fr-result-card'), body=view.closest('#overlayBody'), dialog=view.closest('dialog');
    return {time:Math.round(performance.now()),phase:view.dataset.phase,activeSlot:Number(view.dataset.activeSlot),dataDisplayResult:view.dataset.displayResult,
      artworkId:view.dataset.artworkId||null,resultHidden:result.hidden,resultDisplay:getComputedStyle(result).display,
      resultVisible:!result.hidden&&getComputedStyle(result).display!=='none'&&result.getClientRects().length>0,
      overlayBodyScrollTop:body?.scrollTop||0,dialogScrollTop:dialog?.scrollTop||0,viewScrollTop:view.scrollTop,
      reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches,
      feedback:view.dataset.feedback||'',
      preparing:view.querySelector('.fr-reveal')?.classList.contains('is-preparing')||false,
      preparingWindows:view.querySelectorAll('.fr-preparing-window').length,
      stopped:[...view.querySelectorAll('.fr-reel[data-stopped="true"]')].map(card=>Number(card.dataset.index)),
      moving:[...view.querySelectorAll('.fr-reel.is-rolling')].map(card=>Number(card.dataset.index)),
      summaries:[...view.querySelectorAll('.fr-reel')].map(card=>({slot:card.dataset.slot,category:card.querySelector('.fr-reel-label')?.textContent||'',shortName:card.querySelector('.fr-reel-item.is-centered .fr-reel-value')?.textContent||'',value:card.dataset.centerValue||'',artworkId:card.dataset.centerArtwork||'',width:card.getBoundingClientRect().width}))};
  });
}
async function step(name) {
  await page.locator(root).evaluate(async view=>{
    const visible=[...view.querySelectorAll('img')].filter(image=>image.getClientRects().length && getComputedStyle(image).visibility!=='hidden');
    await Promise.all(visible.map(image=>image.decode()));
    await new Promise(resolve=>requestAnimationFrame(resolve));
  });
  const snapshot=await state();
  await page.screenshot({path:path.join(output,`${name}.png`),animations:'allow'});
  steps.push({name,...snapshot}); return snapshot;
}
async function phase(value) { await page.waitForFunction(({root,value})=>document.querySelector(root)?.dataset.phase===value,{root,value},{timeout:30000}); }
async function open(artworkId = null, {delayAssetsMs = 0} = {}) {
  await page.goto(`${base}#home`);
  await page.reload();
  await page.waitForFunction(()=>document.documentElement.dataset.cache==='94'&&document.documentElement.dataset.catalogRevision);
  if (delayAssetsMs) {
    await page.route('**/*', async route => {
      const request=route.request(),url=new URL(request.url());
      if(request.resourceType()==='fetch'&&/\.(?:png|webp|jpe?g|avif)$/i.test(url.pathname)) await pause(delayAssetsMs);
      try { await route.continue(); } catch {}
    });
  }
  await trigger(artworkId);
  if (delayAssetsMs) await phase('preloading');
}
async function trigger(artworkId = null) {
  if (artworkId) await forceArtwork(artworkId);
  await page.evaluate(()=>{window.__processTimeline.length=0;window.__sampleProcess(true);});
  await page.locator('.hero-actions [data-command="random"]').click();
  await page.waitForFunction(root=>{
    const view=document.querySelector(root);
    return view && ['selecting','preloading','revealing','awaiting-reveal','result','empty','error'].includes(view.dataset.phase);
  },root,{timeout:10000});
}
async function close() { await page.locator('#overlayClose').click(); await page.waitForFunction(()=>!document.querySelector('#studioOverlay').open); }
async function openTakeaway() {
  const panel=page.locator(`${root} .fr-takeaway`);
  if(!await panel.isVisible())await page.locator(`${root} [data-fr="takeaway"]`).click();
  await panel.waitFor({state:'visible'});
}
async function closeTakeaway() {
  const panel=page.locator(`${root} .fr-takeaway`);
  if(await panel.isVisible())await page.locator(`${root} [data-fr="close-takeaway"]`).click();
  await page.waitForFunction(root=>{const panel=document.querySelector(`${root} .fr-takeaway`);return !panel||panel.hidden||getComputedStyle(panel).display==='none'||panel.getClientRects().length===0;},root);
}
async function forceArtwork(id) {
  const pool=createDrawEngine({...reviewPolicy,rng:()=>0}).select({}).pool;
  const index=pool.findIndex(artwork=>artwork.id===id); assert(index>=0,`missing draw visual candidate ${id}`);
  await page.evaluate(value=>window.__processDraw.force(value),(index+.2)/pool.length);
}
async function boundResult(label) {
  await phase('result'); const snapshot=await state(); const drawn=createSnapshot(snapshot.artworkId);
  assert.deepEqual(snapshot.stopped,expectedDisplayKeys(snapshot.artworkId).map((_,i)=>i)); assert(snapshot.resultVisible); assert.equal(snapshot.dataDisplayResult,'true');
  for (const summary of snapshot.summaries) assert.equal(summary.artworkId,drawn.artworkId,`${label}: each stopped fact uses frozen artwork`);
  const facts=revealFeaturesFor(drawn.artwork);
  const visuals=await page.locator(`${root} .fr-reel`).evaluateAll(cards=>cards.map(card=>{const v=card.querySelector('.is-centered .fr-reel-visual');return {slot:card.dataset.slot,id:v.dataset.visualId,kind:v.dataset.visualKind,sourceArtwork:v.dataset.sourceArtwork,sourceHash:v.dataset.sourceHash};}));
  for(const visual of visuals){const expected=featureVisualFor(facts,visual.slot,drawn.artwork,reviewPolicy);assert.equal(visual.id,expected.id);assert.equal(visual.kind,expected.kind);if(expected.source){assert.equal(visual.sourceArtwork,drawn.artworkId);assert.equal(visual.sourceHash,expected.source.sha256);}assert.notEqual(visual.kind,'source-crop');}
  const defaultActions=await page.locator(root).evaluate(view=>{const visible=element=>!element.hidden&&getComputedStyle(element).display!=='none'&&getComputedStyle(element).visibility!=='hidden'&&element.getClientRects().length>0;return {actions:[...view.querySelectorAll('[data-fr]')].filter(visible).map(element=>element.dataset.fr),panelHidden:!visible(view.querySelector('.fr-takeaway'))};});
  assert.deepEqual(defaultActions.actions.sort(),['detail','random','takeaway']);assert.equal(defaultActions.panelHidden,true,`${label}: additional operations start in the closed takeaway panel`);
  await openTakeaway();
  await page.locator(`${root} [data-fr="copy"]`).click(); assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),drawn.prompt.text);
  const received=page.waitForEvent('download'); await page.locator(`${root} [data-fr="download"]`).click(); const download=await received;
  const file=path.join(output,`${label}-${drawn.artworkId}.png`);await download.saveAs(file);
  const bytes=await fs.readFile(file);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),drawn.asset.sha256);
  const alpha=await page.evaluate(async data=>{const image=new Image();image.src=`data:image/png;base64,${data}`;await image.decode();const c=document.createElement('canvas');c.width=image.naturalWidth;c.height=image.naturalHeight;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(image,0,0);const pixels=ctx.getImageData(0,0,c.width,c.height).data;let transparent=0,partial=0,opaque=0;for(let i=3;i<pixels.length;i+=4){if(pixels[i]===0)transparent++;else if(pixels[i]===255)opaque++;else partial++;}return{width:c.width,height:c.height,transparent,partial,opaque};},bytes.toString('base64'));
  assert.equal(alpha.width,drawn.asset.width);assert.equal(alpha.height,drawn.asset.height);assert(alpha.transparent>0&&alpha.opaque+alpha.partial>0);
  await closeTakeaway();
  downloads.push({artworkId:drawn.artworkId,assetId:drawn.asset.id,assetVersion:drawn.asset.version,promptVersion:drawn.prompt.version,sha256:drawn.asset.sha256,bytes:bytes.length,file:path.relative(output,file),alpha});
  checks.push({label,frozenArtwork:drawn.artworkId,visuals,clipboardEqualsFrozenPrompt:true,downloadEqualsFrozenOriginal:true});return drawn;
}
function checkTimeline(timeline,{reduce=false}={}) {
  const count=expectedDisplayKeys(timeline.find(s=>s.artworkId)?.artworkId).length;
  const visibleCounts=timeline.filter(s=>s.slotCount>0).map(s=>s.slotCount);
  assert(visibleCounts.every(n=>n===count), 'the card count stays frozen from first card to result');
  const hiddenPhases=['selecting','preloading','revealing','awaiting-reveal'];
  assert(timeline.some(s=>s.phase==='selecting'||s.phase==='preloading'));assert(timeline.some(s=>s.phase==='preloading'));assert(timeline.some(s=>s.phase==='awaiting-reveal'&&s.stopped.length===count&&!s.resultVisible));
  for(const event of timeline){if(hiddenPhases.includes(event.phase)){assert.equal(event.resultVisible,false,`${event.phase} must hide the complete character`);assert.equal(event.dataDisplayResult,'false');assert.equal(event.resultHidden,true);}if(event.resultVisible)assert.equal(event.stopped.length,count);if(reduce)assert.equal(event.moving.length,0,'reduce must never roll a reel');}
  const boundary=timeline.find(s=>s.phase==='awaiting-reveal');
  const completed=timeline.find(s=>s.phase==='result');
  if(!reduce&&completed)assert(completed.time-boundary.time>=850, 'all-stop boundary lasts approximately 900ms');
  if(!reduce){for(let i=0;i<count;i++)assert(timeline.some(s=>s.phase==='revealing'&&s.activeSlot===i),`slot ${i+1} visibly runs`);for(let i=1;i<=count;i++)assert(timeline.some(s=>s.stopped.length===i),`observable stop count ${i}`);}
}

try {
  await page.addInitScript(()=>{
    const random=Math.random.bind(Math);let next=null;window.__processDraw={force:v=>{next=v;}};
    Math.random=()=>{if(next!==null){const value=next;next=null;return value;}return random();};
    const events=[];let previous='';const sample=()=>{const view=document.querySelector('#studioOverlay[open] .fr-view');if(!view)return;const result=view.querySelector('.fr-result-card');const event={time:Math.round(performance.now()),phase:view.dataset.phase,activeSlot:Number(view.dataset.activeSlot),artworkId:view.dataset.artworkId||'',slotCount:view.querySelectorAll('.fr-reel').length,dataDisplayResult:view.dataset.displayResult,resultHidden:result.hidden,resultDisplay:getComputedStyle(result).display,resultVisible:!result.hidden&&getComputedStyle(result).display!=='none'&&result.getClientRects().length>0,stopped:[...view.querySelectorAll('.fr-reel[data-stopped="true"]')].map(r=>Number(r.dataset.index)),moving:[...view.querySelectorAll('.fr-reel.is-rolling')].map(r=>Number(r.dataset.index)),overlayBodyScrollTop:view.closest('#overlayBody')?.scrollTop||0,dialogScrollTop:view.closest('dialog')?.scrollTop||0,reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches};const signature=JSON.stringify({...event,time:0});if(signature!==previous){events.push(event);previous=signature;}};
    window.__processTimeline=events;window.__sampleProcess=(force=false)=>{if(force)previous='';sample();};
    document.addEventListener('DOMContentLoaded',()=>{new MutationObserver(sample).observe(document.documentElement,{subtree:true,attributes:true,childList:true});setInterval(sample,16);});
  });
  await open('human-blond-glasses',{delayAssetsMs:900}); await record('normal-390');
  const a=await step('A-home-click-waiting-cards');assert.equal(a.phase,'preloading');assert.equal(a.feedback,'shuffling');assert.equal(a.preparing,true);assert.equal(a.preparingWindows,4);assert.equal(a.resultVisible,false);await page.unroute('**/*');
  // Clothing is present on this Artwork, so C captures a real third-slot roll
  // rather than racing the deliberately quick stop of an empty category.
  await page.waitForFunction(root=>document.querySelector(root)?.dataset.phase==='revealing'&&document.querySelector(root)?.dataset.activeSlot==='0',root);
  const b=await step('B-first-revealing');assert.equal(b.phase,'revealing');assert.equal(b.activeSlot,0);
  await page.waitForFunction(root=>document.querySelector(root)?.dataset.activeSlot==='2'&&document.querySelector(root)?.querySelectorAll('.fr-reel[data-stopped="true"]').length===2,root,{timeout:30000});
  const c=await step('C-two-stopped-third-revealing');assert.equal(c.activeSlot,2);assert.equal(c.stopped.length,2);
  await phase('awaiting-reveal');const d=await step('D-four-stopped-result-hidden');assert.equal(d.resultVisible,false);assert.equal(d.stopped.length,4);
  await phase('result');await step('E-partner-revealed');await boundResult('normal');
  checkTimeline(await page.evaluate(()=>window.__processTimeline));
  // Deliberately scroll the actual dialog body, then reroll from the real button.
  await page.locator(root).evaluate(view=>{for(const el of [view.closest('#overlayBody'),view.closest('dialog'),view])if(el)el.scrollTop=el.scrollHeight;});
  const beforeReroll=await state();assert(beforeReroll.overlayBodyScrollTop>0||beforeReroll.dialogScrollTop>0||beforeReroll.viewScrollTop>0,'reroll regression must begin from a scrolled dialog');
  await page.locator(`${root} [data-fr="random"]`).click();await phase('revealing');const g=await step('G-reroll-stage');assert.equal(g.overlayBodyScrollTop,0);assert.equal(g.dialogScrollTop,0);assert.equal(g.viewScrollTop,0);assert.equal(g.resultVisible,false);
  await page.locator(`${root} [data-fr="skip"]`).click();await phase('awaiting-reveal');await phase('result');await close();await finishRecording();

  await page.emulateMedia({reducedMotion:'reduce'});await open('muse-rose-flowers');await record('reduced-motion-390');
  await phase('awaiting-reveal');
  const f=await step('F-reduced-motion-static-three');assert.equal(f.reducedMotion,true);assert.equal(f.resultVisible,false);assert.equal(f.stopped.length,3);assert.equal(f.moving.length,0);
  await page.waitForTimeout(1100);assert.equal((await state()).resultVisible,false,'reduced motion stays in static three-card confirmation, not an automatic final reveal');
  checkTimeline(await page.evaluate(()=>window.__processTimeline),{reduce:true});
  await page.locator(`${root} [data-fr="reveal-partner"]`).click();await boundResult('reduced');await step('F2-reduced-confirmed-result');await close();await finishRecording();

  await page.emulateMedia({reducedMotion:'no-preference'});await open('animal-white-cat');await record('skip-390');
  await phase('revealing');const frozen=(await state()).artworkId;
  await page.locator(`${root} [data-fr="skip"]`).click();await phase('awaiting-reveal');const skipped=await step('skip-two-static-before-result');assert.equal(skipped.artworkId,frozen);assert.equal(skipped.resultVisible,false);assert.equal(skipped.stopped.length,2);
  const result=await boundResult('skip');assert.equal(result.artworkId,frozen);await close();await finishRecording();

  // Cancel a real rolling session and immediately reopen. Old callbacks cannot
  // mutate the new ready view; then repeat with a fresh frozen Artwork.
  await open('grok-teal-square');await phase('revealing');const oldId=(await state()).artworkId;await close();
  await trigger('grok-teal-square');await page.waitForTimeout(1100);const fresh=await state();assert(['selecting','preloading','revealing','awaiting-reveal','result'].includes(fresh.phase));assert.equal(fresh.resultVisible,false,'reopening starts a fresh discovery without a stale completed result');
  if(fresh.phase==='revealing')await page.locator(`${root} [data-fr="skip"]`).click();await phase('result');const newId=(await state()).artworkId;assert(newId && newId!==oldId,'a fresh draw follows the active repeat policy; force RNG never bypasses that policy');await page.waitForTimeout(1200);assert.equal((await state()).artworkId,newId);checks.push({closeReopen:{cancelled:oldId,newArtwork:newId,noLateMutation:true}});await close();
  assert.deepEqual(errors,[],'normal paths have no browser or console errors');
  await fs.writeFile(path.join(output,'steps.json'),JSON.stringify({cache:94,viewport:{width:390,height:844},kind:'simulated CSS viewport',steps,checks,downloads,recordings,errors,physicalIPhoneSafari:'not executed; user review pending',visualApproval:'pending'},null,2)+'\n');
  console.log(`390px reveal process passed; A–G, normal/reduce/skip recordings: ${output}`);
} finally {
  if(recording)await finishRecording().catch(()=>{});
  await fs.writeFile(path.join(output,'last-timeline.json'),JSON.stringify(await page.evaluate(()=>window.__processTimeline||[]).catch(()=>[]),null,2)+'\n');
  await context.close();await browser.close();await fs.rm(temporary,{recursive:true,force:true});
}
