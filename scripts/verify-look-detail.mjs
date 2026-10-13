import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {GALLERY_LOOKS, getLookAsset, validateGalleryLook} from '../dist/studio-gallery-looks.js?v=111';
import {TEMPLATE_REGISTRY} from '../dist/studio-edit-templates.js?v=111';
import {getArtwork,getAsset} from '../dist/studio-artwork-catalog.js?v=111';

const output=resolveEvidenceDirectory('.artifacts/gallery-look-detail-browser');
await fs.mkdir(output,{recursive:true});
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const defaults=GALLERY_LOOKS.filter(look=>look.isDefault&&validateGalleryLook(look));
const alternatives=GALLERY_LOOKS.filter(look=>!look.isDefault&&validateGalleryLook(look));
assert(defaults.length>0,'At least one exact default GalleryLook must validate.');
assert(alternatives.length>0,'At least one exact alternate GalleryLook and its posters must validate.');
const defaultLook=defaults[0],look=alternatives[0];
const source=getArtwork(look.artworkId);
const template=TEMPLATE_REGISTRY.find(row=>row.id===look.templateId&&row.version===look.templateVersion);
const editableFields=Object.keys(look.defaultOptions).filter(key=>key!=='appearance');
const recipe=template.recipes.find(row=>row.selections.appearance===look.appearance
  &&editableFields.filter(key=>row.selections[key]!==look.defaultOptions[key]).length===1);
assert(recipe,'The selected alternate appearance must have a legal one-option change.');
const changedField=editableFields.find(key=>recipe.selections[key]!==look.defaultOptions[key]);
assert(changedField,'A legal alternate-look option must differ from its baseline.');
const changedOption=template.options[changedField].find(option=>option.id===recipe.selections[changedField]);
assert(changedOption,'The changed option must be present in the exact Template version.');
const poster=getLookAsset(look.assetRefs.poster512||look.assetRefs.poster);
assert(poster,'The alternate GalleryLook poster must resolve.');
const sourceBefore=JSON.stringify(source);

const vite=await createServer({configFile:path.resolve('vite.config.mjs'),server:{host:'127.0.0.1',port:0,strictPort:true,hmr:false}});
await vite.listen();
const origin=`http://127.0.0.1:${vite.httpServer.address().port}`;
const browser=await launchBrowser({headless:true});
const context=await browser.newContext({viewport:{width:1440,height:900},acceptDownloads:true});
const page=await context.newPage();
page.setDefaultTimeout(15000);
const errors=[],requests=[],checks=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('request',request=>requests.push(new URL(request.url()).pathname));
const html=`<!doctype html><html lang="en"><head><base href="${origin}/"><link rel="stylesheet" href="/studio.css?v=111"><link rel="stylesheet" href="/studio-detail.css?v=111"></head><body><main id="pageShell"><div id="detail"></div></main><script type="module">
  const [details,previews,catalog,looks,prompts]=await Promise.all([
    import('/studio-detail.js?v=111'),import('/studio-preview-loader.js?v=111'),
    import('/studio-artwork-catalog.js?v=111'),import('/studio-gallery-looks.js?v=111'),import('/studio-prompt.js?v=111')
  ]);
  const detail=details.createDetailController({language:'en',loader:previews.createPreviewLoader()});
  document.querySelector('#detail').append(detail.element);
  window.__lookDetail={detail,catalog,looks,prompts};
</script></body></html>`;

async function waitReady(){
  try{await page.waitForFunction(()=>{
    const state=window.__lookDetail?.detail.getState(),canvas=document.querySelector('.studio-editor-canvas');
    return state?.promptReady&&state?.exportReady&&state?.draft&&canvas
      &&Number(canvas.dataset.renderRevision)===state.draft.revision;
  },null,{timeout:30000});}catch(error){
    const state=await page.evaluate(()=>({state:window.__lookDetail?.detail.getState(),editor:document.querySelector('.studio-editor-status')?.textContent,editorState:document.querySelector('.character-studio')?.dataset.editor,preview:document.querySelector('.character-studio')?.dataset.preview,canvas:document.querySelector('.studio-editor-canvas')?.dataset.renderRevision}));
    throw Error(`Detail did not reach a successful render: ${JSON.stringify(state)}; ${error.message}`);
  }
}
async function canvasHash(){
  return page.evaluate(async()=>{
    const canvas=document.querySelector('.studio-editor-canvas');
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
    const digest=await crypto.subtle.digest('SHA-256',await blob.arrayBuffer());
    return [...new Uint8Array(digest)].map(value=>value.toString(16).padStart(2,'0')).join('');
  });
}
async function exportAndCompare(expectedHash,filenamePrefix){
  const pending=page.waitForEvent('download');
  await page.locator('.artwork-detail__export').click();
  const download=await pending;
  const bytes=await fs.readFile(await download.path());
  assert.equal(hash(bytes),expectedHash,'Downloaded bytes must match the current registered look canvas.');
  assert(download.suggestedFilename().startsWith(filenamePrefix),`PNG filename must identify ${filenamePrefix}.`);
  return {sha256:hash(bytes),byteSize:bytes.length,filename:download.suggestedFilename()};
}

try{
  await page.route(`${origin}/test-detail`,route=>route.fulfill({contentType:'text/html',body:html}));
  await page.goto(`${origin}/test-detail`);
  await page.waitForFunction(()=>Boolean(window.__lookDetail),null,{timeout:15000}).catch(async error=>{
    const visible=await page.locator('body').innerText().catch(()=>'<no body>');
    throw Error(`Detail fixture did not initialize: ${errors.join(' | ')}; ${visible}; ${error.message}`);
  });

  // The legacy Artwork URL resolves to that exact source version's default Look.
  const defaultArtwork=getArtwork(defaultLook.artworkId);
  const defaultOpened=await page.evaluate(({id,version})=>window.__lookDetail.detail.open({id,version}),{id:defaultArtwork.id,version:defaultArtwork.version});
  assert.equal(defaultOpened.ok,true);
  await waitReady();
  const defaultState=await page.evaluate(()=>window.__lookDetail.detail.getState());
  assert.equal(defaultState.id,defaultLook.artworkId);
  assert.equal(defaultState.lookId,defaultLook.id);
  assert.equal(defaultState.lookVersion,defaultLook.version);
  assert.equal(defaultState.appearance,defaultLook.appearance);
  for(const [field,value] of Object.entries(defaultLook.defaultOptions))assert.equal(defaultState.draft.options[field],value);
  const originalAsset=getAsset(defaultArtwork.assetRefs.original);
  assert(originalAsset?.sha256,'The legacy Artwork baseline must retain its exact registered PNG.');
  const defaultExport=await exportAndCompare(originalAsset.sha256,defaultLook.id);
  checks.push('Legacy Artwork open binds the exact default GalleryLook while preserving source Artwork identity.');

  // An explicit alternate route keeps its own cover until the successful renderer is ready.
  requests.length=0;
  const beforeRender=await page.evaluate(({lookId,version})=>{
    const opened=window.__lookDetail.detail.open({lookId,version});
    const image=document.querySelector('.artwork-detail__image');
    return {opened,state:window.__lookDetail.detail.getState(),src:image.src,alt:image.alt};
  },{lookId:look.id,version:look.version});
  assert.equal(beforeRender.opened.ok,true);
  assert.equal(beforeRender.state.id,look.artworkId);
  assert.equal(beforeRender.state.lookId,look.id);
  assert.equal(beforeRender.state.appearance,look.appearance);
  assert.equal(new URL(beforeRender.src).pathname,poster.path.replace(/^\./,''));
  assert(beforeRender.alt.includes('Registered look'));
  assert.equal(beforeRender.state.draft,null,'The registered poster remains visible before the editor Draft arrives.');
  await waitReady();
  const initial=await page.evaluate(()=>window.__lookDetail.detail.getState());
  assert.equal(initial.draft.lookId,look.id);
  for(const [field,value] of Object.entries(look.defaultOptions))assert.equal(initial.draft.options[field],value);
  assert.equal(initial.draft.options.appearance,look.appearance);
  assert.equal(await page.locator('.artwork-detail__title').textContent(),look.titleByLanguage.en);
  assert.equal(await page.locator('.artwork-detail__description').textContent(),source.descriptionByLanguage.en,'The read-only source description remains attached to the original Artwork.');
  const sourceDetailAssets=[source.assetRefs.detail512,source.assetRefs.detail1024].filter(Boolean)
    .map(ref=>getAsset(ref)?.path).filter(Boolean).map(assetPath=>assetPath.replace(/^\./,''));
  assert(!requests.some(request=>sourceDetailAssets.includes(request)),'Alternate look opening must not fetch or flash the source Artwork high-resolution preview.');
  const expectedAppearance=template.options.appearance.find(option=>option.id===look.appearance)?.semanticByLanguage?.en;
  assert(expectedAppearance&&initial.modifiedPrompt.includes(expectedAppearance),'The successful Prompt must describe the fixed registered appearance.');
  assert.equal(JSON.stringify(source),sourceBefore,'Opening a derived Look must not mutate the registered source Artwork.');
  checks.push('Exact alternate Look opens on its own poster, title, fixed appearance, and source-bound snapshot without loading the source hi-res preview.');

  const initialCanvasHash=await canvasHash();
  const defaultLookExport=await exportAndCompare(initialCanvasHash,`${look.id}-`);
  checks.push('A default-options alternate Look exports the successful renderer PNG rather than the source original.');

  // Change one legal field while leaving the appearance fixed; Prompt and PNG must follow that successful revision.
  await page.locator(`.studio-editor-tab[data-editor-tab="${changedField}"]`).click();
  await page.locator(`.studio-editor-option[data-field="${changedField}"][data-option-id="${recipe.selections[changedField]}"]`).click();
  await waitReady();
  const changed=await page.evaluate(()=>window.__lookDetail.detail.getState());
  assert.equal(changed.draft.options.appearance,look.appearance);
  for(const [field,value] of Object.entries(recipe.selections))assert.equal(changed.draft.options[field],value);
  const semantic=changedOption.semanticByLanguage?.en||changedOption.labelByLanguage?.en;
  assert(semantic&&changed.modifiedPrompt.includes(semantic),'Prompt must describe the changed selected option from the successful render.');
  const changedCanvasHash=await canvasHash();
  assert.notEqual(changedCanvasHash,initialCanvasHash,'The selected option must produce new renderer pixels.');
  const changedExport=await exportAndCompare(changedCanvasHash,`${look.id}-`);
  assert.equal(JSON.stringify(source),sourceBefore,'Editing a GalleryLook must leave source Artwork facts and Prompt unchanged.');
  checks.push('One legal option edit preserves the fixed appearance and exports pixels matching the revised preview and Prompt.');

  // Registered series can have related looks even when they are absent from public filter chips.
  const independent=defaults.find(row=>row.seriesId==='independent-original');
  assert(independent,'The independent original has a registered default Look.');
  await page.evaluate(({lookId,version})=>window.__lookDetail.detail.open({lookId,version}),{lookId:independent.id,version:independent.version});
  await waitReady();
  const related=GALLERY_LOOKS.filter(row=>row.seriesId===independent.seriesId&&row.id!==independent.id);
  assert(related.length>0);
  assert.deepEqual(await page.locator('.related-character').allTextContents(),related.slice(0,3).map(row=>row.titleByLanguage.en));
  checks.push('Independent original looks expose related appearances without adding unsupported public filter chips.');

  await page.evaluate(({lookId})=>window.__lookDetail.detail.open({lookId,version:'wrong-version'}),{lookId:look.id});
  assert.equal(await page.evaluate(()=>window.__lookDetail.detail.getState().closed),true,'A stale GalleryLook version must not open as a current Look.');
  checks.push('A stale GalleryLook version is rejected without falling back to a different look.');
  assert.deepEqual(errors,[]);
  const report={lookCount:GALLERY_LOOKS.length,defaultLookId:defaultLook.id,alternateLookId:look.id,sourceArtworkId:look.artworkId,checks,defaultExport,defaultLookExport,changedExport,errors,physicalDevice:false};
  await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
  console.log(`GalleryLook detail: ${checks.length} checks passed for ${look.id}.`);
}finally{
  await browser.close();
  await vite.close();
}
