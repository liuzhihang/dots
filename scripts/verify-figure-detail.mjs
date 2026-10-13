import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {
  GALLERY_FIGURES,
  getFigureFields,
  getFigureInitialState,
  getFigureStates,
  resolveFigureSelection
} from '../dist/studio-gallery-figures.js?v=110';
import {getRequiredTemplateAssets, getTemplateOptionAssetRefs} from '../dist/studio-edit-templates.js?v=110';
import {getArtwork} from '../dist/studio-artwork-catalog.js?v=110';

const output = resolveEvidenceDirectory('.artifacts/figure-detail-browser');
await fs.mkdir(output, {recursive: true});
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const manifest = JSON.parse(await fs.readFile(path.resolve('dist/assets/templates/sources.json'), 'utf8'));
const figure = GALLERY_FIGURES.find(row => row.id === 'dots-cloud');
assert(figure, 'The registered Cloud Figure must exist.');
const initialState = getFigureInitialState(figure);
assert(initialState, 'The Cloud Figure must have a registered initial recipe.');
const fields = getFigureFields(figure);
const stateOptions = state => Object.fromEntries(Object.entries(state.recipe.selections));

function changeFor(state, {requireDifferentSource = true} = {}) {
  for (const field of fields) {
    const current = state.values[field.key];
    for (const option of field.options) {
      if (option.id === current) continue;
      const target = resolveFigureSelection(figure, state.id, {[field.key]: option.id});
      if (target && (!requireDifferentSource || target.look.id !== state.look.id)) return {field, option, target};
    }
  }
  return null;
}

const firstChange = changeFor(initialState);
assert(firstChange, 'The Cloud Figure must have an option that resolves to a different registered source.');
const secondChange = changeFor(firstChange.target);
assert(secondChange && secondChange.target.id !== firstChange.target.id,
  'The Cloud Figure must expose a second source transition for close-while-pending coverage.');
const cloudStates = getFigureStates(figure);
const assetRows = manifest.assets;

function delayedAssetFor(state) {
  const allOptionAssets = new Set();
  for (const field of fields) {
    for (const option of field.options) {
      if (field.key === 'colors' || field.key === 'color') continue;
      const optionState = cloudStates.find(row => row.look.id === option.sourceLookId);
      if (!optionState) continue;
      const refs = getTemplateOptionAssetRefs(optionState.template, field.key, option.sourceOptionId);
      for (const ref of [...refs.thumbnailAssets, ...refs.layerAssets]) allOptionAssets.add(ref.id);
    }
  }
  const required = getRequiredTemplateAssets(state.template, state.recipe.selections, {includeAllOptionThumbnails: false});
  const reference = required.find(ref => !allOptionAssets.has(ref.id)) || required[0];
  const row = assetRows.find(candidate => candidate.id === reference?.id && candidate.version === reference?.version
    && candidate.purpose === reference?.purpose);
  assert(row?.path, `A renderer source asset must resolve for ${state.id}.`);
  return {reference, row};
}

const delayedAsset = delayedAssetFor(secondChange.target);
const sourceSnapshot = JSON.stringify(getArtwork(initialState.artwork.id));

const vite = await createServer({
  configFile: path.resolve('vite.config.mjs'),
  server: {host: '127.0.0.1', port: 0, strictPort: true, hmr: false}
});
await vite.listen();
const origin = `http://127.0.0.1:${vite.httpServer.address().port}`;
const browser = await launchBrowser({headless: true});
const context = await browser.newContext({viewport: {width: 1440, height: 900}, acceptDownloads: true});
const page = await context.newPage();
page.setDefaultTimeout(15000);
const errors = [];
const requestFailures = [];
const checks = [];
page.on('pageerror', error => errors.push(error.message));
page.on('requestfailed', request => requestFailures.push({url:new URL(request.url()).pathname,error:request.failure()?.errorText||'failed'}));

const html = `<!doctype html><html lang="en"><head><base href="${origin}/"><link rel="stylesheet" href="/studio.css?v=110"><link rel="stylesheet" href="/studio-detail.css?v=110"></head><body><main id="pageShell"><div id="detail"></div></main><script type="module">
  const [details,previews] = await Promise.all([
    import('/studio-detail.js?v=110'),import('/studio-preview-loader.js?v=110')
  ]);
  const baseLoader=previews.createPreviewLoader();
  const gate={enabled:false,assetId:null,started:false,failNext:false,release:null};
  const loader={
    registerAssets(rows){return baseLoader.registerAssets(rows)},
    getRegisteredAsset(ref){return baseLoader.getRegisteredAsset(ref)},
    acquire(asset,options={}){
      if(!gate.enabled||asset?.id!==gate.assetId)return baseLoader.acquire(asset,options);
      gate.started=true;
      return new Promise((resolve,reject)=>{
        let done=false;
        const abort=()=>{if(done)return;done=true;reject(new DOMException('Cancelled','AbortError'));};
        if(options.signal?.aborted){abort();return;}
        options.signal?.addEventListener('abort',abort,{once:true});
        gate.release=()=>{
          if(done)return;
          done=true;
          options.signal?.removeEventListener('abort',abort);
          if(gate.failNext){gate.failNext=false;reject(new Error('Injected renderer failure'));return;}
          baseLoader.acquire(asset,options).then(resolve,reject);
        };
      });
    },
    releaseAll(){return baseLoader.releaseAll()},
    stats(){return baseLoader.stats?.()}
  };
  const detail=details.createDetailController({language:'en',loader});
  document.querySelector('#detail').append(detail.element);
  window.__figureDetail={detail,loader,gate};
</script></body></html>`;

async function waitReady(expectedStateId) {
  try {
    await page.waitForFunction(expected => {
      const detail=window.__figureDetail?.detail;
      const state=detail?.getState();
      const canvas=document.querySelector('.studio-editor-canvas');
      const editor=expected===null?document.querySelector('.character-studio'):document.querySelector('.studio-figure-editor');
      return state?.promptReady&&state?.exportReady&&state?.draft&&canvas&&editor
        &&(expected===null?!state.figureId:state.figureStateId===expected)
        &&Number(canvas.dataset.renderRevision)===state.draft.revision;
    }, expectedStateId, {timeout: 30000});
  } catch (error) {
    const state = await page.evaluate(() => ({
      state: (()=>{const value=window.__figureDetail?.detail.getState();return {figureStateId:value?.figureStateId,sourceArtworkId:value?.id,templateId:value?.templateId,exportReady:value?.exportReady,closed:value?.closed}})(),
      editor: document.querySelector('.studio-editor-status')?.textContent,
      figureError:{code:document.querySelector('.studio-figure-editor')?.dataset.errorCode,assetId:document.querySelector('.studio-figure-editor')?.dataset.errorAssetId},
      figureStatus: document.querySelector('.studio-figure-editor-status')?.textContent,
      tabs: document.querySelectorAll('.studio-editor-tab').length,
      canvas: document.querySelector('.studio-editor-canvas')?.dataset.renderRevision
    }));
    throw Error(`Figure detail did not reach a successful render: ${JSON.stringify(state)}; ${error.message}`);
  }
}

async function canvasHash() {
  return page.evaluate(async () => {
    const canvas=document.querySelector('.studio-editor-canvas');
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
    const digest=await crypto.subtle.digest('SHA-256',await blob.arrayBuffer());
    return [...new Uint8Array(digest)].map(value=>value.toString(16).padStart(2,'0')).join('');
  });
}

async function exportAndCompare(expectedHash, lookId) {
  const pending=page.waitForEvent('download');
  await page.locator('.artwork-detail__export').click();
  const download=await pending;
  const bytes=await fs.readFile(await download.path());
  assert.equal(hash(bytes), expectedHash, 'Downloaded Figure PNG must match the current successful renderer canvas.');
  assert(download.suggestedFilename().startsWith(`${lookId}-`), 'PNG filename must identify the current exact registered source look.');
  return {sha256:hash(bytes),byteSize:bytes.length,filename:download.suggestedFilename()};
}

async function clickOption(fieldKey, optionId) {
  await page.locator('.studio-figure-option').evaluateAll((buttons, requested) => {
    const button=buttons.find(row=>row.dataset.field===requested.field&&row.dataset.optionId===requested.option);
    if(!button)throw new Error(`Figure option not found: ${requested.field}/${requested.option}`);
    if(button.disabled)throw new Error(`Figure option is disabled: ${requested.field}/${requested.option}`);
    button.click();
  }, {field:fieldKey,option:optionId});
}

try {
  await page.route(`${origin}/test-figure-detail`, route => route.fulfill({contentType:'text/html',body:html}));
  await page.goto(`${origin}/test-figure-detail`);
  await page.waitForFunction(() => Boolean(window.__figureDetail), null, {timeout:15000});

  const opened=await page.evaluate(({figureId,version})=>window.__figureDetail.detail.open({figureId,version}),{figureId:figure.id,version:figure.version});
  assert.equal(opened.ok,true);
  await waitReady(initialState.id);
  const initial=await page.evaluate(()=>({
    state:window.__figureDetail.detail.getState(),
    detailState:window.__figureDetail.detail.getFigureState(),
    source:window.__figureDetail.detail.getSnapshot()?.artwork,
    sessionId:window.__figureDetail.detail.getState().sessionId
  }));
  assert.equal(initial.state.figureId,figure.id);
  assert.equal(initial.state.figureVersion,figure.version);
  assert.equal(initial.state.figureStateId,initialState.id);
  assert.equal(initial.state.lookId,initialState.look.id);
  assert.equal(initial.detailState.recipe.id,initialState.recipe.id);
  assert.equal(initial.state.templateId,initialState.template.id);
  assert.equal(initial.source.id,initialState.artwork.id);
  for(const [field,value] of Object.entries(stateOptions(initialState)))assert.equal(initial.state.draft.options[field],value);
  const initialHash=await canvasHash();
  const initialExport=await exportAndCompare(initialHash,initialState.look.id);
  checks.push('Canonical Figure opens on its exact registered state and exports the renderer PNG.');

  const fieldTabs=await page.locator('.studio-editor-tab').evaluateAll(buttons=>buttons.map(button=>({field:button.dataset.editorTab,label:button.textContent.trim()})));
  assert(fieldTabs.length>0,'Figure adjustment tabs must be rendered.');
  assert(fieldTabs.every(tab=>tab.field&&tab.field!=='appearance'),'Appearance remains a gallery Figure, not an editor tab.');
  const thumbnailAudit=[];
  for(const fieldKey of ['colors','face','accessories']){
    if(!fieldTabs.some(tab=>tab.field===fieldKey))continue;
    await page.locator(`.studio-editor-tab[data-editor-tab="${fieldKey}"]`).click();
    await page.waitForFunction(key=>[...document.querySelectorAll(`.studio-figure-option[data-field="${key}"] .studio-figure-option-visual`)]
      .every(visual=>['ready','empty','error'].includes(visual.dataset.thumbnailState)),fieldKey,{timeout:30000});
    thumbnailAudit.push(...await page.locator(`.studio-figure-option[data-field="${fieldKey}"]`).evaluateAll(buttons=>buttons.map(button=>({
      field:button.dataset.field,
      state:button.querySelector('.studio-figure-option-visual')?.dataset.thumbnailState,
      canvases:button.querySelectorAll('.studio-editor-option-thumbnail').length,
      none:button.querySelector('.studio-editor-option-none-mark')!==null
    }))));
  }
  assert(thumbnailAudit.some(item=>item.field==='face'&&item.canvases>0),'Face options must show registered source thumbnails.');
  assert(thumbnailAudit.some(item=>item.field==='accessories'&&item.canvases>0),'Accessory options must show registered source thumbnails.');
  assert(thumbnailAudit.every(item=>item.state!=='ready'||item.field==='colors'||item.canvases>0||item.none),
    'No non-color Figure option may appear as a blank tile.');
  assert(thumbnailAudit.filter(item=>item.none).length>0,'None must use the explicit no-accessory mark.');
  assert.equal(await page.locator('.studio-figure-editor').innerText().then(value=>value.includes('These over-ear cups')),false,
    'Figure options must not include the old long compatibility explanation.');
  checks.push('Figure tabs are initialized, options use exact registered source thumbnails, and None has an explicit icon.');

  const incompatible=fields.flatMap(field=>field.options.map(option=>({field,option})))
    .find(({field,option})=>option.id!==initialState.values[field.key]
      &&resolveFigureSelection(figure,initialState.id,{[field.key]:option.id})===null);
  if(incompatible){
    const button=page.locator(`.studio-figure-option[data-field="${incompatible.field.key}"][data-option-id="${incompatible.option.id}"]`);
    assert.equal(await button.isDisabled(),true,'An unregistered incompatible state remains unavailable.');
    assert.equal(await page.evaluate(()=>window.__figureDetail.detail.getFigureState().id),initialState.id,
      'An unavailable option must leave the current source state unchanged.');
    checks.push('Unavailable semantic combinations remain disabled without silently removing another field.');
  }

  const direction='Keep the cloud silhouette unchanged.';
  await page.locator('.artwork-detail__additional-direction').fill(direction);
  assert.equal((await page.evaluate(()=>window.__figureDetail.detail.getState())).additionalDirection,direction);
  await page.locator(`.studio-editor-tab[data-editor-tab="${firstChange.field.key}"]`).click();
  await clickOption(firstChange.field.key,firstChange.option.id);
  await waitReady(firstChange.target.id);
  const changed=await page.evaluate(()=>({
    state:window.__figureDetail.detail.getState(),
    figureState:window.__figureDetail.detail.getFigureState(),
    source:window.__figureDetail.detail.getSnapshot()?.artwork
  }));
  assert.equal(changed.state.figureId,figure.id);
  assert.equal(changed.state.figureVersion,figure.version);
  assert.equal(changed.state.figureStateId,firstChange.target.id);
  assert.equal(changed.state.sessionId,initial.sessionId,'Figure session identity must survive exact source changes.');
  assert.equal(changed.state.lookId,firstChange.target.look.id);
  assert.equal(changed.state.templateId,firstChange.target.template.id);
  assert.equal(changed.source.id,firstChange.target.artwork.id);
  for(const [key,value] of Object.entries(stateOptions(firstChange.target)))assert.equal(changed.state.draft.options[key],value,
    `The new child Draft must retain registered recipe field ${key}.`);
  for(const key of Object.keys(changed.state.draft.options).filter(key=>!(key in stateOptions(firstChange.target)))) {
    assert.equal(changed.state.draft.options[key],changed.state.draft.defaultOptions[key],
      `Additional child Draft field ${key} must remain its exact Look default.`);
  }
  assert.equal(changed.state.additionalDirection,direction,'Supplemental Prompt text must survive a source transition.');
  assert(changed.state.modifiedPrompt.includes(direction),'The current Prompt must retain supplemental direction.');
  assert.equal(await page.locator('.artwork-detail__title').textContent(),figure.titleByLanguage.en,'The Figure title must stay stable across member Artwork changes.');
  const changedHash=await canvasHash();
  assert.notEqual(changedHash,initialHash,'The selected source recipe must produce new renderer pixels.');
  const changedExport=await exportAndCompare(changedHash,firstChange.target.look.id);
  assert.equal(JSON.stringify(getArtwork(initialState.artwork.id)),sourceSnapshot,'Figure editing must not mutate source Artwork records.');
  checks.push('Cross-source selection preserves Figure identity, session, Prompt direction, and exact recipe binding.');

  await page.evaluate(()=>window.__figureDetail.detail.setLanguage('zh-CN'));
  await page.waitForFunction(expected=>window.__figureDetail.detail.getState().language==='zh-CN'
    &&window.__figureDetail.detail.getState().promptReady
    &&window.__figureDetail.detail.getState().figureStateId===expected,firstChange.target.id);
  assert.equal(await page.locator('.artwork-detail__title').textContent(),figure.titleByLanguage['zh-CN']);
  assert.equal((await page.locator('.artwork-detail__additional-direction').inputValue()),direction);
  assert((await page.locator('.studio-figure-editor').innerText()).includes('角色调整'));
  assert.equal((await page.evaluate(()=>window.__figureDetail.detail.getState())).sessionId,initial.sessionId);
  await page.evaluate(()=>window.__figureDetail.detail.setLanguage('en'));
  await waitReady(firstChange.target.id);
  checks.push('Language changes relabel Figure controls without resetting selected source or supplemental direction.');

  const gated=delayedAssetFor(secondChange.target);
  await page.evaluate(({assetId,field,option})=>{
    const gate=window.__figureDetail.gate;
    gate.assetId=assetId;gate.enabled=true;gate.failNext=true;
  },{assetId:gated.reference.id,field:secondChange.field.key,option:secondChange.option.id});
  await page.locator(`.studio-editor-tab[data-editor-tab="${secondChange.field.key}"]`).click();
  await clickOption(secondChange.field.key,secondChange.option.id);
  await page.waitForFunction(()=>window.__figureDetail.gate.started===true,null,{timeout:15000});
  await page.evaluate(()=>window.__figureDetail.gate.release?.());
  await page.waitForFunction(expected=>{
    const detail=window.__figureDetail.detail;
    return detail.getState().figureStateId===expected
      &&detail.getState().exportReady===false
      &&detail.getState().promptReady===false
      &&document.querySelector('.studio-figure-editor-status')?.textContent.includes('The new settings were not applied');
  },firstChange.target.id,{timeout:15000});
  const failedState=await page.evaluate(()=>({
    state:window.__figureDetail.detail.getState(),
    status:document.querySelector('.studio-figure-editor-status')?.textContent,
    canvas:document.querySelector('.studio-editor-canvas')?.dataset.renderRevision,
    retryHidden:document.querySelector('.studio-figure-editor .studio-editor-retry')?.hidden
  }));
  assert.equal(failedState.state.figureStateId,firstChange.target.id,'A failed new state must not replace the last successful Figure state.');
  assert.equal(failedState.state.exportReady,false,'PNG must stay disabled after the latest state fails.');
  assert.equal(failedState.state.promptReady,false,'Configuration Prompt must stay disabled after the latest state fails.');
  assert.equal(failedState.retryHidden,false,'A failed Figure state must offer explicit retry.');
  assert(failedState.status.includes('The new settings were not applied'),'Failure copy must explain that the new settings were not applied.');
  await page.evaluate(()=>{const gate=window.__figureDetail.gate;gate.enabled=false;gate.assetId=null;});
  const previousValue=firstChange.target.values[secondChange.field.key];
  await clickOption(secondChange.field.key,previousValue);
  await waitReady(firstChange.target.id);
  checks.push('Latest render failure keeps the previous canvas but disables Prompt/PNG; explicit re-selection restores the known successful state.');

  await page.evaluate(assetId=>{
    const gate=window.__figureDetail.gate;
    gate.assetId=assetId;
    gate.enabled=true;
    gate.started=false;
    gate.release=null;
    gate.failNext=false;
  },gated.reference.id);
  await page.locator(`.studio-editor-tab[data-editor-tab="${secondChange.field.key}"]`).click();
  await clickOption(secondChange.field.key,secondChange.option.id);
  await page.waitForFunction(()=>window.__figureDetail.gate.started===true,null,{timeout:15000});
  const pendingState=await page.evaluate(()=>({
    state:window.__figureDetail.detail.getState(),
    pending:document.querySelector('.studio-figure-editor')?.dataset.pending,
    exportDisabled:document.querySelector('.artwork-detail__export')?.disabled,
    copyDisabled:document.querySelector('.artwork-detail__copy')?.disabled,
    chatDisabled:document.querySelector('.artwork-detail__open-chatgpt')?.disabled
  }));
  assert.equal(pendingState.pending,'true');
  assert.equal(pendingState.exportDisabled,true,'PNG export must be disabled until the selected Figure state renders.');
  assert.equal(pendingState.copyDisabled,true,'Prompt actions must wait for the newly selected state.');
  assert.equal(pendingState.chatDisabled,true,'ChatGPT handoff must wait for the newly selected state.');
  assert.equal(pendingState.state.figureStateId,firstChange.target.id,'The prior successful state remains active during a pending transition.');
  await page.evaluate(()=>window.__figureDetail.detail.close());
  await page.waitForFunction(()=>window.__figureDetail.detail.getState().closed===true,null,{timeout:5000});
  await page.evaluate(()=>{
    const gate=window.__figureDetail.gate;
    gate.enabled=false;
    gate.release?.();
  });
  await page.waitForTimeout(250);
  assert.equal((await page.evaluate(()=>window.__figureDetail.detail.getState())).figureStateId,undefined,
    'Closing a pending Figure cancels its transition without a late state update.');
  assert.equal(await page.locator('.studio-editor-canvas').count(),0);
  checks.push('Export and Prompt actions are disabled while a new source renders; closing cancels pending callbacks.');

  const legacyOpen=await page.evaluate(({lookId,version})=>window.__figureDetail.detail.open({lookId,version}),
    {lookId:initialState.look.id,version:initialState.look.version});
  assert.equal(legacyOpen.ok,true);
  await waitReady(null);
  const legacy=await page.evaluate(()=>window.__figureDetail.detail.getState());
  assert.equal(legacy.figureId,undefined,'Legacy Look routes must remain exact Look detail sessions.');
  assert.equal(legacy.lookId,initialState.look.id);
  assert.equal(legacy.id,initialState.artwork.id);
  checks.push('Legacy Look detail still opens its exact registered source outside the Figure route.');

  assert.deepEqual(errors,[],'The Figure detail page must not raise browser errors.');
  await page.screenshot({path:path.join(output,'figure-detail.png'),fullPage:true});
  const report={figureId:figure.id,figureVersion:figure.version,stateCount:cloudStates.length,initialStateId:initialState.id,
    crossSourceStateId:firstChange.target.id,pendingStateId:secondChange.target.id,checks,thumbnailAudit,
    initialExport,changedExport,errors,requestFailures,physicalDevice:false};
  await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
  console.log(`GalleryFigure detail: ${checks.length} checks passed for ${figure.id}.`);
} finally {
  await browser.close();
  await vite.close();
}
