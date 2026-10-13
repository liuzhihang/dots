import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {TEMPLATE_REGISTRY} from '../dist/studio-edit-templates.js?v=102';

const evidenceDir=resolveEvidenceDirectory('.artifacts/studio-history');
await fs.mkdir(evidenceDir,{recursive:true});

const artworkId='candidate-dots-20261005';
const template=TEMPLATE_REGISTRY.find(item=>item.artworkBinding.artworkId===artworkId&&item.artworkBinding.artworkVersion==='v2');
assert(template,'The history test Artwork has its approved editable Template.');
const vite=await createServer({
  configFile:new URL('../vite.config.mjs',import.meta.url).pathname,
  server:{host:'127.0.0.1',port:0,strictPort:true,hmr:false}
});
await vite.listen();
const origin=`http://127.0.0.1:${vite.httpServer.address().port}`;
const browser=await launchBrowser({headless:true});

async function newPage({dirty=true,forwardOnBack=false}={}){
  const page=await browser.newPage({viewport:{width:1280,height:800}});
  await page.addInitScript(({triggerForward})=>{
    window.dotsFastForwardOnBack=triggerForward;
    window.dotsForwardTriggered=false;
    window.dotsPopstateEvents=[];
    window.addEventListener('popstate',()=>{
      window.dotsPopstateEvents.push({hash:location.hash,index:history.state?.dotsIndex});
      if(window.dotsFastForwardOnBack&&location.hash==='#/'){
        window.dotsFastForwardOnBack=false;
        window.dotsForwardTriggered=true;
        history.forward();
      }
    });
  },{triggerForward:forwardOnBack});
  await page.goto(`${origin}/#/`,{waitUntil:'networkidle'});
  await page.locator(`#card-${artworkId}`).click();
  await page.waitForFunction(()=>location.hash.startsWith('#/artwork/')
    &&document.querySelector('#studioOverlay')?.open
    &&history.state?.dotsIndex===1);
  if(dirty)await page.locator('.artwork-detail__additional-direction').fill('Keep this Draft: 松果 🍂');
  return page;
}

async function newPageWithGalleryFuture(){
  const page=await newPage({dirty:false});
  await page.evaluate(()=>{location.hash='#/?series=grok';});
  await page.waitForFunction(()=>location.hash==='#/?series=grok'
    &&document.body.dataset.screen==='gallery'
    &&history.state?.dotsIndex===2);
  await page.evaluate(()=>history.back());
  await page.waitForFunction(()=>location.hash.startsWith('#/artwork/')
    &&document.querySelector('#studioOverlay')?.open
    &&history.state?.dotsIndex===1);
  await page.locator('.artwork-detail__additional-direction').fill('Keep this future-entry Draft: 蕨类 🌿');
  return page;
}

function observeDialogs(page){
  const types=[];
  const handler=dialog=>{types.push(dialog.type());void dialog.dismiss();};
  page.on('dialog',handler);
  return{types,stop:()=>page.off('dialog',handler)};
}

async function assertGallery(page,{hash='#/',index=0}={}){
  await page.waitForFunction(({expectedHash,expectedIndex})=>location.hash===expectedHash
    &&document.body.dataset.screen==='gallery'
    &&!document.querySelector('#studioOverlay')?.open
    &&history.state?.dotsIndex===expectedIndex,{expectedHash:hash,expectedIndex:index});
}

async function assertCleanDetail(page,{index=1}={}){
  await page.waitForFunction(expectedIndex=>location.hash.startsWith('#/artwork/')
    &&document.querySelector('#studioOverlay')?.open
    &&history.state?.dotsIndex===expectedIndex, index);
  assert.equal(await page.locator('.artwork-detail__additional-direction').inputValue(),'','A history reopen starts without discarded external instructions.');
  const selected=await page.evaluate(()=>Object.fromEntries([...document.querySelectorAll('.studio-editor-option[aria-pressed="true"]')].map(button=>[button.dataset.field,button.dataset.optionId])));
  assert.deepEqual(Object.fromEntries(Object.keys(template.defaultOptions).map(field=>[field,selected[field]])),template.defaultOptions,'A history reopen starts with registered family-supported Template defaults.');
  if(['dots','grok'].includes(template.family))assert.equal(selected.clothing,'none','A history reopen keeps fixed hidden clothing for a limb-free family.');
}

const outcomes=[];
try{
  // Dirty Back goes to the prior Gallery entry without a dialog; Forward creates a clean editor.
  const singleBack=await newPage();
  const singleBackDialogs=observeDialogs(singleBack);
  await singleBack.evaluate(()=>history.back());
  await assertGallery(singleBack);
  assert.deepEqual(singleBackDialogs.types,[],'Dirty Back to Gallery does not request confirmation.');
  await singleBack.evaluate(()=>history.forward());
  await assertCleanDetail(singleBack);
  singleBackDialogs.stop();
  outcomes.push('Dirty browser Back returns to Gallery without prompting; Forward reopens the Artwork at history index 1 with default state.');
  await singleBack.close();

  // Preserve the popstate race where Forward is queued as Back lands on Gallery.
  const backForwardRace=await newPage({forwardOnBack:true});
  const raceDialogs=observeDialogs(backForwardRace);
  await backForwardRace.evaluate(()=>history.back());
  await backForwardRace.waitForFunction(()=>window.dotsForwardTriggered);
  await assertCleanDetail(backForwardRace);
  assert.deepEqual(raceDialogs.types,[],'A Back/Forward race does not raise a dirty-exit dialog.');
  assert.equal(await backForwardRace.evaluate(()=>history.state?.dotsIndex),1);
  raceDialogs.stop();
  outcomes.push('Forward queued from the dirty Back popstate converges to the same Artwork entry at index 1 with a clean Draft.');
  await backForwardRace.close();

  // Dirty Forward to a Gallery future entry exits immediately; Back opens a fresh default Draft.
  const dirtyForward=await newPageWithGalleryFuture();
  const forwardDialogs=observeDialogs(dirtyForward);
  await dirtyForward.evaluate(()=>history.forward());
  await assertGallery(dirtyForward,{hash:'#/?series=grok',index:2});
  assert.deepEqual(forwardDialogs.types,[],'Dirty Forward to a Gallery route does not request confirmation.');
  await dirtyForward.evaluate(()=>history.back());
  await assertCleanDetail(dirtyForward);
  assert.equal(await dirtyForward.evaluate(()=>history.state?.dotsIndex),1);
  assert.equal(await dirtyForward.locator('.studio-nav a[data-page="guide"],#guidePortal').count(),0,'The public shell has no Guide navigation or portal.');
  forwardDialogs.stop();
  outcomes.push('Dirty Forward from detail index 1 to filtered Gallery index 2 exits without prompting; Back reopens a default Draft at index 1.');
  await dirtyForward.close();

  // The overlay close button performs one traversal to the original Gallery, even while dirty.
  const closeDirty=await newPage();
  const closeDialogs=observeDialogs(closeDirty);
  await closeDirty.evaluate(()=>{
    window.dotsClosePopstates=0;
    window.addEventListener('popstate',()=>window.dotsClosePopstates++);
    const button=document.querySelector('#overlayClose');
    button.click();
    button.click();
  });
  await assertGallery(closeDirty);
  await closeDirty.waitForTimeout(100);
  assert.deepEqual(closeDialogs.types,[],'Dirty double close does not request confirmation.');
  assert.equal(await closeDirty.evaluate(()=>window.dotsClosePopstates),1,'Double close performs exactly one history traversal.');
  assert.equal(await closeDirty.evaluate(()=>history.state?.dotsIndex),0);
  closeDialogs.stop();
  outcomes.push('Dirty double close returns to Gallery without prompting and produces exactly one popstate/history traversal at index 0.');
  await closeDirty.close();

  const report={revision:100,browser:browser.version(),scenarios:outcomes.length,outcomes,route:'#/?series=grok',physicalDevice:false};
  await fs.writeFile(path.join(evidenceDir,'history.json'),JSON.stringify(report,null,2)+'\n');
  console.log(`Studio history: ${outcomes.length} focused browser scenarios passed.`);
  for(const outcome of outcomes)console.log(`- ${outcome}`);
}finally{
  await browser.close();
  await vite.close();
}
