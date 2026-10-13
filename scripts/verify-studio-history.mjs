import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {ARTWORKS} from '../dist/studio-artwork-catalog.js?v=110';
import {getDefaultLook,getGalleryLook} from '../dist/studio-gallery-looks.js?v=110';
import {GALLERY_FIGURES,getFigureForLook,getFigureInitialState} from '../dist/studio-gallery-figures.js?v=110';
import {TEMPLATE_REGISTRY} from '../dist/studio-edit-templates.js?v=110';

const evidenceDir=resolveEvidenceDirectory('.artifacts/shape-merge-20261013/history');
await fs.mkdir(evidenceDir,{recursive:true});

const figureCases=GALLERY_FIGURES.map(figure=>{
  assert(figure.memberLookIds.includes(figure.defaultLookId),`${figure.id} registers its default look as a member.`);
  assert.equal(getFigureForLook(figure.defaultLookId)?.id,figure.id,`${figure.id} resolves from its default look.`);
  const look=getGalleryLook(figure.defaultLookId);
  const artwork=ARTWORKS.find(item=>item.id===look?.artworkId&&item.version===look?.artworkVersion);
  const template=TEMPLATE_REGISTRY.find(item=>item.artworkBinding.artworkId===artwork?.id&&item.artworkBinding.artworkVersion===artwork?.version);
  return{figure,look,artwork,template};
}).filter(item=>item.look&&item.artwork&&item.template?.family==='dots');
const firstCase=figureCases[0];
assert(firstCase,'The Figure gallery has a default Dots figure with an approved editable Template.');
const {figure,look,artwork,template}=firstCase;
const cloudCase=figureCases.find(item=>item.figure.id==='dots-cloud');
const orbCase=figureCases.find(item=>item.figure.id==='dots-orb');
assert(cloudCase&&orbCase,'Focused related-navigation fixtures include the merged Cloud and Orb figures.');
const artworkId=artwork.id;
const figureRoute=`#/figure/${encodeURIComponent(figure.id)}?v=${encodeURIComponent(figure.version)}`;
const routeForFigure=item=>`#/figure/${encodeURIComponent(item.id)}?v=${encodeURIComponent(item.version)}`;
const vite=await createServer({
  configFile:new URL('../vite.config.mjs',import.meta.url).pathname,
  server:{host:'127.0.0.1',port:0,strictPort:true,hmr:false}
});
await vite.listen();
const origin=`http://127.0.0.1:${vite.httpServer.address().port}`;
const browser=await launchBrowser({headless:true});
const appHtml=(await fs.readFile('dist/index.html','utf8')).replace('data-cache="110"','data-cache="110" data-studio-boot="manual"').replace('<script type="module" src="./studio.js?v=110"></script>','<script type="module">import {bootStudio} from "/studio.js?v=110";window.__dotsQAApp=bootStudio();</script>');

async function newPage({dirty=true,forwardOnBack=false,entry='figure',figureTarget=firstCase}={}){
  const page=await browser.newPage({viewport:{width:1280,height:800}});
  await page.route(`${origin}/`,route=>route.fulfill({contentType:'text/html',body:appHtml}));
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
  if(entry==='figure')await page.locator(`#card-${figureTarget.figure.id}`).click();
  else if(entry==='artwork')await page.evaluate(({id,version})=>window.__dotsQAApp.openArtwork(id,version),{id:artwork.id,version:artwork.version});
  else if(entry==='look')await page.evaluate(({id,version})=>window.__dotsQAApp.openLook(id,version),{id:look.id,version:look.version});
  else throw new Error(`Unknown history entry kind: ${entry}`);
  const expectedPrefix=entry==='figure'?'#/figure/':entry==='look'?'#/look/':'#/artwork/';
  await page.waitForFunction(prefix=>location.hash.startsWith(prefix)
    &&document.querySelector('#studioOverlay')?.open
    &&history.state?.dotsIndex===1,expectedPrefix);
  if(entry==='figure')await page.waitForFunction(expected=>location.hash===expected,routeForFigure(figureTarget.figure));
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
  await page.waitForFunction(expected=>location.hash===expected
    &&document.querySelector('#studioOverlay')?.open
    &&history.state?.dotsIndex===1,figureRoute);
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
  await page.waitForFunction(({expectedIndex,expectedRoute})=>location.hash===expectedRoute
    &&document.querySelector('#studioOverlay')?.open
    &&history.state?.dotsIndex===expectedIndex,{expectedIndex:index,expectedRoute:figureRoute});
  assert.equal(await page.locator('.artwork-detail__additional-direction').inputValue(),'','A history reopen starts without discarded external instructions.');
  await page.waitForFunction(()=>window.__dotsQAApp?.detail?.getState().exportReady);
  const selected=await page.evaluate(()=>window.__dotsQAApp.detail.getState().draft.options);
  assert.deepEqual(Object.fromEntries(Object.keys(template.defaultOptions).map(field=>[field,selected[field]])),template.defaultOptions,'A history reopen starts with registered family-supported Template defaults.');
  if(['dots','grok'].includes(template.family))assert.equal(selected.clothing,'none','A history reopen keeps fixed hidden clothing for a limb-free family.');
}

async function clickRelatedFigure(page,targetFigure){
  const locale=await page.locator('html').getAttribute('lang');
  const label=targetFigure.titleByLanguage[locale]||targetFigure.titleByLanguage.en;
  const target=page.locator('.studio-related .related-character').filter({hasText:label});
  assert.equal(await target.count(),1,`The related-character list exposes ${label} exactly once.`);
  await target.click();
}

const outcomes=[];
try{
  // Figure entry is the public history path; the Artwork and Look routes remain valid compatibility entries.
  for(const [entry,expectedRoute] of [
    ['artwork',`#/artwork/${encodeURIComponent(artwork.id)}?v=${encodeURIComponent(artwork.version)}`],
    ['look',`#/look/${encodeURIComponent(look.id)}?v=${encodeURIComponent(look.version)}`]
  ]){
    const legacy=await newPage({dirty:false,entry});
    assert.equal(legacy.url().split('#')[1]||'',expectedRoute.slice(1),`${entry} route remains addressable.`);
    await legacy.waitForFunction(()=>window.__dotsQAApp?.detail?.getState().exportReady);
    const state=await legacy.evaluate(()=>window.__dotsQAApp.detail.getState());
    assert.equal(state.id,artwork.id,`${entry} route opens the original Artwork identity.`);
    assert.equal(state.templateId,template.id,`${entry} route retains its original Template binding.`);
    await legacy.close();
  }
  outcomes.push('Legacy Artwork and Look routes still open the same approved source Artwork and Template.');

  // A clean Figure can switch to a related Figure, then language, editor category, close, and Gallery filters remain interactive.
  const cleanRelated=await newPage({dirty:false,figureTarget:cloudCase});
  const cleanRelatedDialogs=observeDialogs(cleanRelated);
  await cleanRelated.waitForFunction(()=>window.__dotsQAApp?.detail?.getState().exportReady);
  assert.equal(await cleanRelated.evaluate(()=>window.__dotsQAApp.detail.getState().figureId),cloudCase.figure.id);
  await clickRelatedFigure(cleanRelated,orbCase.figure);
  await cleanRelated.waitForFunction(({id,route})=>location.hash===route
    &&window.__dotsQAApp?.detail?.getState().figureId===id
    &&window.__dotsQAApp.detail.getState().exportReady,{id:orbCase.figure.id,route:routeForFigure(orbCase.figure)});
  assert.equal(await cleanRelated.evaluate(()=>window.__dotsQAApp.detail.getState().figureStateId),getFigureInitialState(orbCase.figure).id,'Related navigation opens the target Figure default state.');
  assert.deepEqual(cleanRelatedDialogs.types,[],'Clean related navigation does not raise a JavaScript dialog.');
  await cleanRelated.locator('#languagePreference').selectOption('zh-CN');
  await cleanRelated.waitForFunction(()=>document.documentElement.lang==='zh-CN'
    &&window.__dotsQAApp?.detail?.getState().language==='zh-CN');
  const accessoriesTab=cleanRelated.locator('.studio-editor-tab[data-editor-tab="accessories"]');
  await accessoriesTab.click();
  await cleanRelated.waitForFunction(()=>document.querySelector('.studio-editor-tab[data-editor-tab="accessories"]')?.getAttribute('aria-selected')==='true');
  await cleanRelated.locator('#overlayClose').click();
  await assertGallery(cleanRelated);
  await cleanRelated.locator('#gallerySeries .gallery-series-filter__button[data-series-id="grok"]').click();
  await cleanRelated.waitForFunction(()=>location.hash==='#/?series=grok'
    &&document.querySelector('#gallerySeries .gallery-series-filter__button[data-series-id="grok"]')?.getAttribute('aria-pressed')==='true');
  assert.deepEqual(cleanRelatedDialogs.types,[],'Language, editor category, close, and Gallery series navigation remain usable without JavaScript dialogs.');
  cleanRelatedDialogs.stop();
  outcomes.push('Clean Cloud→Orb related navigation opens Orb at its default state; language, editor category, close, and Gallery series filtering remain interactive without JavaScript dialogs.');
  await cleanRelated.close();

  // A modified color plus additional instructions is discarded only after the user explicitly selects another related Figure.
  const dirtyRelated=await newPage({dirty:false,figureTarget:cloudCase});
  const dirtyRelatedDialogs=observeDialogs(dirtyRelated);
  await dirtyRelated.waitForFunction(()=>window.__dotsQAApp?.detail?.getState().editorReady);
  const lilacOption=dirtyRelated.locator('.studio-figure-option[data-field="colors"][data-option-id="colors:lilac"]');
  await dirtyRelated.waitForFunction(()=>{
    const option=document.querySelector('.studio-figure-option[data-field="colors"][data-option-id="colors:lilac"]');
    return option&&!option.disabled;
  });
  await dirtyRelated.locator('.studio-editor-tab[data-editor-tab="colors"]').click();
  await lilacOption.click();
  await dirtyRelated.waitForFunction(()=>window.__dotsQAApp?.detail?.getState().figureValues?.colors==='colors:lilac');
  await dirtyRelated.locator('.artwork-detail__additional-direction').fill('Keep this related-switch Draft: 松果 🍂');
  assert.equal(await dirtyRelated.evaluate(()=>window.__dotsQAApp.detail.getState().figureDirty),true,'The color edit marks the Figure draft dirty.');
  assert.equal(await dirtyRelated.locator('.artwork-detail__additional-direction').inputValue(),'Keep this related-switch Draft: 松果 🍂');
  await clickRelatedFigure(dirtyRelated,orbCase.figure);
  await dirtyRelated.waitForFunction(({id,route})=>location.hash===route
    &&window.__dotsQAApp?.detail?.getState().figureId===id
    &&window.__dotsQAApp.detail.getState().exportReady,{id:orbCase.figure.id,route:routeForFigure(orbCase.figure)});
  const switchedState=await dirtyRelated.evaluate(()=>window.__dotsQAApp.detail.getState());
  assert.equal(switchedState.figureStateId,getFigureInitialState(orbCase.figure).id,'Dirty related navigation replaces the temporary session with the target Figure default state.');
  assert.equal(switchedState.additionalDirection,'','Additional instructions from the replaced session do not leak into the target Figure.');
  assert.deepEqual(dirtyRelatedDialogs.types,[],'A modified color and additional instruction do not trigger a confirmation dialog on explicit related navigation.');
  dirtyRelatedDialogs.stop();
  outcomes.push('After changing Cloud to Lilac and entering additional instructions, explicit Cloud→Orb navigation loads Orb defaults without a dialog or stale instructions.');
  await dirtyRelated.close();

  // Dirty Back goes to the prior Gallery entry without a dialog; Forward creates a clean editor.
  const singleBack=await newPage();
  const singleBackDialogs=observeDialogs(singleBack);
  await singleBack.evaluate(()=>history.back());
  await assertGallery(singleBack);
  assert.deepEqual(singleBackDialogs.types,[],'Dirty Back to Gallery does not request confirmation.');
  await singleBack.evaluate(()=>history.forward());
  await assertCleanDetail(singleBack);
  singleBackDialogs.stop();
  outcomes.push('Dirty browser Back returns to Gallery without prompting; Forward reopens the Figure at history index 1 with default state.');
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
  outcomes.push('Forward queued from the dirty Back popstate converges to the same Figure entry at index 1 with a clean Draft.');
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

  const report={revision:110,browser:browser.version(),scenarios:outcomes.length,outcomes,route:figureRoute,figureId:figure.id,defaultLookId:figure.defaultLookId,legacyRoutes:['artwork','look'],physicalDevice:false};
  await fs.writeFile(path.join(evidenceDir,'history.json'),JSON.stringify(report,null,2)+'\n');
  console.log(`Studio history: ${outcomes.length} focused browser scenarios passed.`);
  for(const outcome of outcomes)console.log(`- ${outcome}`);
}finally{
  await browser.close();
  await vite.close();
}
