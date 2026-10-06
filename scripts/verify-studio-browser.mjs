#!/usr/bin/env node
import assert from 'node:assert/strict';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {createHash} from 'node:crypto';

// Use an installed Playwright, or the workspace runtime supplied by Codex.
// This script operates the actual app UI; no screenshots become approved baselines.
const {chromium}=await import(process.env.DOTS_PLAYWRIGHT_MODULE||'playwright');
const url=process.env.DOTS_PREVIEW_URL||'http://127.0.0.1:5173/';
const out=resolve(process.argv[2]||'/tmp/dots-browser-'+Date.now());
await mkdir(out,{recursive:false});
const browser=await chromium.launch({headless:true,...(process.env.DOTS_CHROME_PATH?{executablePath:process.env.DOTS_CHROME_PATH}:{})});
const report={url,browser:await browser.version(),deviceAcceptance:false,method:'Playwright controlling real Chrome; Browser plugin unavailable',results:[],errors:[]};
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const project=page=>page.evaluate(()=>JSON.parse(sessionStorage.getItem('dot-studio-project-v2')));
const settled=page=>page.waitForFunction(()=>document.querySelector('#compositeStage canvas')?.dataset.previewStatus==='ready');
const noOverflow=async page=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow');
const canvasScreenshot=async(page,path)=>{
 const stage=page.locator('#compositeStage');
 // Freeze the capture scroll position explicitly. The app's smooth scrolling
 // otherwise keeps Playwright's element screenshot scroll-to-center in motion.
 await stage.evaluate(node=>node.scrollIntoView({behavior:'instant',block:'center'}));
 await page.waitForFunction(()=>{const rect=document.querySelector('#compositeStage').getBoundingClientRect();return rect.top>=0&&rect.bottom<=innerHeight;});
 await stage.screenshot({path,animations:'disabled'});
};
const importJSON=async(page,value)=>{await page.locator('#configFile').setInputFiles({name:'fixture.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(value))});await page.waitForFunction(()=>document.querySelector('#configFile').value==='');};
try{
 for(const width of [1440,320,390,768]){
  const context=await browser.newContext({viewport:{width,height:1000},permissions:['clipboard-read','clipboard-write']});
  const page=await context.newPage();page.on('pageerror',e=>report.errors.push({width,message:e.message}));
  await page.goto(url);await settled(page);const initial=await project(page);
  await noOverflow(page);
  assert.equal(await page.locator('#familyCards [data-family-gallery]').count(),5);
  assert.equal(await page.locator('#homePortal [data-more-tags]').count(),0);
  await page.locator('[data-family-gallery="dots"]').click();
  assert.equal(await page.locator('[data-look-card]').count(),3);
  assert.deepEqual(await project(page),initial,'home card browsing changes active project');
  await page.locator('#lookFilters [data-clear-tags]').click();
  assert.equal(await page.locator('[data-look-card]').count(),15);
  await page.locator('#lookFilters [data-tag="dots"]').click();
  await page.locator('#lookFilters [data-tag="grok"]').click();
  assert.equal(await page.locator('[data-look-card]').count(),6,'same dimension OR');
  await page.locator('#lookFilters [data-more-tags]').click();
  const dialog=page.locator('.tag-dialog[open]');assert(await dialog.isVisible());
  await dialog.locator('input').fill('people');
  assert.equal(await dialog.locator('[data-tag="humans"]').count(),1,'alias search');
  await dialog.locator('[data-tag="humans"]').click();
  assert.equal(await page.locator('[data-look-card]').count(),0,'cross dimension AND');
  assert(await page.locator('#lookEmpty').isVisible());
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.tag-dialog[open]').count(),0);
  await page.waitForFunction(()=>document.activeElement===document.querySelector('#lookFilters [data-more-tags]'));
  assert.deepEqual(await project(page),initial,'tags must not commit');
  await page.locator('#lookFilters [data-clear-tags]').click();
  await page.locator('#familySearch').fill('zz-no-result');
  assert.equal(await page.locator('[data-look-card]').count(),0);
  await page.locator('#clearSearch').click();
  assert.equal(await page.locator('[data-look-card]').count(),15);
  await page.locator('[data-start-look="candidate-dots-20261005"]').first().click();await settled(page);
  await page.locator('#workbenchTagBrowse summary').click();
  const beforeBrowse=await project(page);
  await page.locator('#workbenchTags [data-tag="animals"]').click();
  assert.equal(await page.locator('[data-tag-look]').count(),3);
  assert.deepEqual(await project(page),beforeBrowse,'workbench browse must not commit');
  await page.locator('#workbenchTags [data-clear-tags]').click();
  await page.locator('#workbenchTagBrowse summary').click();
  const adaptations=[],drafts={};
  for(const family of ['dots','humans','animals']){
   await page.locator('#families [data-family="'+family+'"]').click();await settled(page);
   const recipeIds=await page.locator('[data-modular-recipe]').evaluateAll(nodes=>nodes.map(node=>node.dataset.modularRecipe));
   assert(recipeIds.length>0,'registered pilot adaptations must be selectable');
   for(const recipeId of recipeIds){
   const baseline=await project(page);await page.locator('[data-modular-recipe="'+recipeId+'"]').click();await settled(page);
   const modular=await project(page);assert.equal(modular.creation.composition?.kind,'modular',`recipe ${recipeId} did not produce a resolved modular project; toast=${await page.locator('#toast').textContent()}; project=${JSON.stringify(modular)}`);
   const cardTitle=(await page.locator('[data-modular-recipe="'+recipeId+'"] .look-template-name').textContent()).trim();
   if(recipeId.includes('and-round-glasses'))assert.equal(cardTitle,'耳机 + 眼镜 · 经典','the multi-component card identifies both modules and its base pose');
   else if(recipeId.includes('candidate-humans-20261005-wave'))assert.equal(cardTitle,'耳机 · 挥手','the chestnut wave card is distinguishable from Classic');
   else if(recipeId.includes('pilot-headphones-v1-on-candidate-humans-20261005-classic'))assert.equal(cardTitle,'耳机 · 经典','the chestnut Classic headphone card is explicitly labeled');
   assert.equal(await page.locator('#workbenchControls [data-dot-recipe],#workbenchControls [data-baseline-pose]').count(),0,'module recipes must not show unrelated complete-template controls');
   assert.equal(modular.character.family,family);assert.match(await page.locator('#previewBadge').textContent(),/待美术确认/);
   await page.locator('#undo').click();await settled(page);assert.deepEqual(await project(page),baseline,'module undo must restore exact template');
   await page.locator('#redo').click();await settled(page);assert.deepEqual(await project(page),modular,'module redo must restore exact refs');
   await noOverflow(page);const path='module-'+recipeId+'-'+width+'.png';await page.screenshot({path:join(out,path)});
   const canvasPath='module-'+recipeId+'-'+width+'-canvas.png';await canvasScreenshot(page,join(out,canvasPath));
   const resolved=await page.evaluate(async()=>{const src=document.querySelector('script[src*="studio.js"]').src;const {resolveProjectComposition}=await import(src.replace('studio.js','studio-composition-resolver.js'));const result=resolveProjectComposition(JSON.parse(sessionStorage.getItem('dot-studio-project-v2')));return {availability:result.availability,modules:result.renderPlan?.modules,recipe:result.renderPlan?.recipe,composition:result.composition};});
   assert.equal(resolved.availability,'available');assert.deepEqual(resolved.composition,modular.creation.composition);
   drafts[family]=modular;adaptations.push({family,recipeId,composition:modular.creation.composition,resolved,screenshot:path,canvasScreenshot:canvasPath});
   }
  }
  const humanStateCases=[
   {artworkId:'candidate-humans-20261005',baseId:'candidate-humans-20261005::classic',expectedTitle:'耳机 · 经典'},
   {artworkId:'candidate-humans-20261005',baseId:'candidate-humans-20261005::wave',expectedTitle:'耳机 · 挥手'},
   {artworkId:'human-bun-yellow',baseId:'human-bun-yellow::fixed'},
   {artworkId:'human-blond-glasses',baseId:'human-blond-glasses::fixed'}
  ];
  const humanFitResults=[];
  for(const target of humanStateCases){
   await page.locator('#families [data-family="humans"]').click();await settled(page);
   if((await project(page)).creation.artworkId!==target.artworkId){await page.locator('[data-look-template="'+target.artworkId+'"]').click();await settled(page);}
   const recipe=await page.evaluate(async baseId=>{
    const studioUrl=document.querySelector('script[src*="studio.js"]').src;
    const {getTrustedModularCatalog}=await import(studioUrl.replace('studio.js','studio-composition-catalog.js'));
    const catalog=getTrustedModularCatalog(),base=catalog.baseStates.find(item=>item.id===baseId);
    const item=catalog.recipes.find(value=>value.baseId===baseId&&value.assetIds.includes('pilot-headphones-v1')&&value.assetIds.length===1);
    return item&&base?{id:item.id,baseId:base.id,artworkId:base.artworkId,poseId:item.poseId,assetIds:item.assetIds,fitProfileRef:item.fitProfileRef}:null;
   },target.baseId);
   assert(recipe,`real registered headphone recipe for ${target.baseId}`);
   assert.equal(recipe.artworkId,target.artworkId,'the recipe belongs to the selected built-in human look');
   const selector='[data-modular-recipe="'+recipe.id+'"]';assert.equal(await page.locator(selector).count(),1,`${target.baseId} is selectable from its actual workbench`);
   const cardTitle=(await page.locator(selector+' .look-template-name').textContent()).trim();
   if(target.expectedTitle)assert.equal(cardTitle,target.expectedTitle,`${target.baseId} has the accurate card title`);
   else assert.match(cardTitle,/^耳机 · (?:经典|挥手)$/,'the fixed human look card names its static base pose');
   const baseline=await project(page);await page.locator(selector).click();await settled(page);
   const modular=await project(page);assert.equal(modular.creation.composition?.kind,'modular',`human recipe ${recipe.id} did not resolve; toast=${await page.locator('#toast').textContent()}`);
   assert.equal(modular.creation.composition.inputs.baseId,target.baseId,'the applied project keeps the exact state profile');
   assert.equal(modular.creation.composition.recipeId,recipe.id);
   assert(modular.creation.composition.assetRefs.some(ref=>ref.id==='pilot-headphones-v1'),'all human states use the same registered headphone kit');
   assert.equal(modular.creation.composition.inputs.fitProfileRef.id,recipe.fitProfileRef.id);
   assert.equal(await page.locator('#previewBadge').textContent().then(value=>/待美术确认/.test(value)),true,'the profile-specific result remains pending art approval');
   await page.locator('#undo').click();await settled(page);assert.deepEqual(await project(page),baseline,'human module undo restores the exact preceding project');
   await page.locator('#redo').click();await settled(page);assert.deepEqual(await project(page),modular,'human module redo restores exact refs and profile');
   await importJSON(page,modular);await settled(page);assert.deepEqual(await project(page),modular,'human-state v2 import re-resolves the exact profile');
   await noOverflow(page);const slug=target.baseId.replaceAll(':','-');
   const path='human-state-'+slug+'-'+width+'.png';await page.screenshot({path:join(out,path)});
   const canvasPath='human-state-'+slug+'-'+width+'-canvas.png';await canvasScreenshot(page,join(out,canvasPath));
   const resolved=await page.evaluate(async()=>{const src=document.querySelector('script[src*="studio.js"]').src;const {resolveProjectComposition}=await import(src.replace('studio.js','studio-composition-resolver.js'));return resolveProjectComposition(JSON.parse(sessionStorage.getItem('dot-studio-project-v2')));});
   assert.equal(resolved.availability,'available');assert.equal(resolved.composition.inputs.baseId,target.baseId);assert.deepEqual(resolved.composition,modular.creation.composition);
   humanFitResults.push({viewportWidth:width,baseId:target.baseId,artworkId:target.artworkId,recipeId:recipe.id,poseId:recipe.poseId,profileRef:recipe.fitProfileRef,composition:modular.creation.composition,resolved,screenshot:path,canvasScreenshot:canvasPath});
   adaptations.push({family:'humans',recipeId:recipe.id,baseId:target.baseId,composition:modular.creation.composition,resolved,screenshot:path,canvasScreenshot:canvasPath});
   drafts.humans=modular;
   if(width===768){await page.reload();await settled(page);assert.deepEqual(await project(page),modular,'human-state v2 reload preserves the exact registered recipe and fit refs');}
  }
  assert.equal(humanFitResults.length,4,'all three human looks and four exact human states are covered in the real workbench');
  report.humanStateWorkbench??=[];report.humanStateWorkbench.push(...humanFitResults);
  if(width===1440){
   const fitFixture=await page.evaluate(async()=>{
    const version=new URL(document.querySelector('script[src*="studio.js"]').src).search;
    const [{getTrustedModularCatalog},{resolveModularComposition},{LayeredComposer}]=await Promise.all(['studio-composition-catalog','studio-composition-resolver','studio-composer'].map(name=>import('/'+name+'.js'+version)));
    const trusted=getTrustedModularCatalog(),humanBaseIds=['candidate-humans-20261005::classic','candidate-humans-20261005::wave','human-bun-yellow::fixed','human-blond-glasses::fixed'];
    const host=document.createElement('div');document.body.append(host);const composer=new LayeredComposer(host),outputs=[];
    const digest=async value=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',value))].map(x=>x.toString(16).padStart(2,'0')).join('');
    const fileDataUrl=blob=>new Promise(resolve=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.readAsDataURL(blob);});
    let firstResolution=null;
    try{
     for(const baseId of [...humanBaseIds,humanBaseIds[0]]){
      const base=trusted.baseStates.find(item=>item.id===baseId);
      const recipe=trusted.recipes.find(item=>item.baseId===baseId&&item.assetIds.includes('pilot-headphones-v1')&&item.assetIds.length===1);
      if(!base||!recipe?.fitProfileRef)throw new Error(`真实人形耳机适配或独立 profile 缺失：${baseId}`);
      const resolution=resolveModularComposition({character:base.config,baseId:recipe.baseId,recipeId:recipe.id,assetIds:recipe.assetIds,poseId:recipe.poseId},{catalog:trusted});
      if(resolution.availability!=='available'||!resolution.composition)throw new Error(`${baseId}: ${resolution.reason||'没有可解算的真实 recipe'}`);
      if(resolution.approvalStatus==='approved')throw new Error(`${baseId}: 自动化工程 fixture 不得把待审人形适配标记为已获用户批准`);
      await composer.updateResolved(resolution,{catalog:trusted});
      const width=resolution.renderPlan.width,height=resolution.renderPlan.height,pixels=composer.context.getImageData(0,0,width,height).data;
      let clearPixels=0,paintedPixels=0;for(let index=3;index<pixels.length;index+=4){if(pixels[index]===0)clearPixels++;if(pixels[index]>0)paintedPixels++;}
      const pixelSha256=await digest(pixels),blob=await composer.capture(1254,{transparent:true});
      const bitmap=await createImageBitmap(blob),pngWidth=bitmap.width,pngHeight=bitmap.height,probe=document.createElement('canvas');probe.width=pngWidth;probe.height=pngHeight;
      const probeContext=probe.getContext('2d',{willReadFrequently:true});probeContext.drawImage(bitmap,0,0);const pngPixels=probeContext.getImageData(0,0,pngWidth,pngHeight).data;
      let pngClearPixels=0,pngPaintedPixels=0;for(let index=3;index<pngPixels.length;index+=4){if(pngPixels[index]===0)pngClearPixels++;if(pngPixels[index]>0)pngPaintedPixels++;}bitmap.close();
      const bytes=new Uint8Array(await blob.arrayBuffer()),fitRef=resolution.composition.inputs.fitRefs?.find(item=>item.assetId==='pilot-headphones-v1');
      if(!fitRef)throw new Error(`${baseId}: resolver 未返回耳机 fitRef`);
      const module=resolution.renderPlan.modules.find(item=>item.id==='pilot-headphones-v1');
      if(!module?.parts?.length)throw new Error(`${baseId}: Canvas plan 未包含动态耳机部件`);
      const dataUrl=await fileDataUrl(blob);
      outputs.push({baseId,artworkId:base.artworkId,recipeId:recipe.id,poseId:recipe.poseId,profileRef:fitRef.fitProfileRef,
       baseAssetRefs:base.assetRefs,headphoneAssetRef:resolution.composition.assetRefs.find(item=>item.id==='pilot-headphones-v1'),fitFingerprint:fitRef.fitFingerprint,
       parts:module.parts,transformKey:JSON.stringify(module.parts.map(part=>part.transform)),pixelSha256,pngSha256:await digest(bytes),pngBytes:bytes.length,pngType:blob.type,
       width:pngWidth,height:pngHeight,canvasClearPixels:clearPixels,canvasPaintedPixels:paintedPixels,pngClearPixels,pngPaintedPixels,approvalStatus:resolution.approvalStatus,dataUrl});
      if(baseId===humanBaseIds[0]&&!firstResolution)firstResolution=resolution;
     }
     const classic=trusted.baseStates.find(item=>item.id===humanBaseIds[0]),classicRecipe=trusted.recipes.find(item=>item.baseId===humanBaseIds[0]&&item.assetIds.includes('pilot-headphones-v1')&&item.assetIds.length===1);
     const unsupported=resolveModularComposition({character:classic.config,baseId:classicRecipe.baseId,recipeId:classicRecipe.id,assetIds:classicRecipe.assetIds,poseId:'front-unregistered-fit-fixture'},{catalog:trusted});
     const tampered=structuredClone(firstResolution);tampered.renderPlan.modules.find(item=>item.id==='pilot-headphones-v1').parts[0].transform.e+=.1;
     let tamperedRenderPlan='accepted';try{await composer.updateResolved(tampered);}catch{tamperedRenderPlan='rejected';}
     if(tamperedRenderPlan!=='rejected')throw new Error('altered part matrix with unchanged fingerprints was accepted');
     if(unsupported.availability!=='unsupported'||unsupported.composition!==null||unsupported.renderPlan!==null)throw new Error('unregistered pose did not remain unsupported');
     return {sameTrustedHeadphoneKit:true,baseStateScope:humanBaseIds,unsupportedFixture:{availability:unsupported.availability,reason:unsupported.reason},tamperedRenderPlan,outputs};
    }finally{composer.dispose();host.remove();}
   });
   assert.equal(fitFixture.outputs.length,5,'four real human states plus one identical-input repeat are captured');
   const realOutputs=fitFixture.outputs.slice(0,4),repeat=fitFixture.outputs[4];
   assert.deepEqual(realOutputs.map(output=>output.baseId),fitFixture.baseStateScope);
   assert.equal(new Set(realOutputs.map(output=>output.profileRef.id)).size,4,'each real human state resolves through its own geometry profile');
   assert.equal(new Set(realOutputs.map(output=>output.fitFingerprint)).size,4,'the same kit receives a distinct fit fingerprint for each real human profile');
   assert.equal(new Set(realOutputs.map(output=>output.transformKey)).size,4,'actual per-state headphone parts use distinct geometry transforms');
   assert(realOutputs.every(output=>JSON.stringify(output.headphoneAssetRef)===JSON.stringify(realOutputs[0].headphoneAssetRef)),'all four states use the exact same versioned headphone PNG kit');
   assert(realOutputs.every(output=>output.pngType==='image/png'&&output.pngBytes>0&&output.width===1254&&output.height===1254),'each state exports a real 1254px PNG');
   assert(realOutputs.every(output=>output.canvasClearPixels>0&&output.canvasPaintedPixels>0&&output.pngClearPixels>0&&output.pngPaintedPixels>0),'the Canvas and actual PNG both retain transparent and painted pixels');
   assert.equal(repeat.baseId,realOutputs[0].baseId);assert.equal(repeat.fitFingerprint,realOutputs[0].fitFingerprint);
   assert.equal(repeat.pixelSha256,realOutputs[0].pixelSha256,'same human geometry/profile input yields identical Canvas pixels');
   assert.equal(repeat.pngSha256,realOutputs[0].pngSha256,'same human geometry/profile input yields identical transparent PNG bytes');
   assert.equal(fitFixture.unsupportedFixture.availability,'unsupported');assert.equal(fitFixture.tamperedRenderPlan,'rejected');
   for(const output of fitFixture.outputs){
    const path='dynamic-fit-'+output.baseId.replaceAll(':','-')+(output===repeat?'-repeat':'')+'.png';await writeFile(join(out,path),Buffer.from(output.dataUrl.split(',')[1],'base64'));output.png=path;delete output.dataUrl;
   }
   report.dynamicFitFixture=fitFixture;
   await page.locator('#families [data-family="dots"]').click();await settled(page);assert.deepEqual(await project(page),drafts.dots);
   await page.locator('#families [data-family="meta-muse"]').click();await settled(page);assert.equal(await page.locator('#workbenchControls [data-path="background"], [data-setting="colors.background"]').count(),0);await page.locator('#advancedPromptSettings').evaluate(node=>node.open=true);await page.locator('#shape-advanced').evaluate(node=>node.open=true);await page.locator('[data-setting="name"]').fill('Muse draft');await page.locator('[data-setting="name"]').blur();const museDraft=await project(page);
   await page.locator('#families [data-family="dots"]').click();await settled(page);assert.deepEqual(await project(page),drafts.dots,'Dots draft stays separate from Muse');
   await page.locator('#families [data-family="meta-muse"]').click();await settled(page);assert.deepEqual(await project(page),museDraft,'Muse draft restores exact v2 project');
   await page.locator('#families [data-family="animals"]').click();await settled(page);assert.deepEqual(await project(page),drafts.animals);report.familyDraftIsolation='pass';
   report.tintFixture=await page.evaluate(async()=>{
    const version=new URL(document.querySelector('script[src*="studio.js"]').src).search;
    const [{getCompositionPack},{createLookCharacter},{resolveCompositionConfig,inspectCompositionPack},{LayeredComposer}]=await Promise.all(['studio-creation-assets','studio-model','studio-creation','studio-composer'].map(name=>import('/'+name+'.js'+version)));
    const config=createLookCharacter('candidate-dots-20261005'),pack=structuredClone(getCompositionPack('dots','candidate-dots-20261005',config));
    pack.editablePaths.push('colors.body');for(const layer of pack.layers)layer.tintPath='colors.body';
    const host=document.createElement('div');document.body.append(host);const composer=new LayeredComposer(host);
    await composer.update(pack,config);const before=[...composer.context.getImageData(620,620,1,1).data];
    config.colors.body='#FF0000';const parsed=resolveCompositionConfig(pack,config);await composer.update(pack,config);
    const after=[...composer.context.getImageData(620,620,1,1).data],blob=await composer.capture(1254,{transparent:true});
    const digest=await crypto.subtle.digest('SHA-256',await blob.arrayBuffer());const sha256=[...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,'0')).join('');
    const missingMask=structuredClone(pack);for(const layer of missingMask.layers)layer.src='./assets/qa/missing-mask.png';
    const mismatch=structuredClone(pack);mismatch.editablePaths=mismatch.editablePaths.filter(path=>path!=='colors.body');
    let missingMaskResult='available';try{await composer.update(missingMask,config);}catch{missingMaskResult='unsupported';}composer.dispose();host.remove();
    return {resolvedBody:parsed.colors.body,before,after,exportBytes:blob.size,sha256,width:1254,height:1254,fixtureNotRegistered:true,missingMask:missingMaskResult,pathMismatch:inspectCompositionPack(mismatch,config).availability};
   });
   assert.equal(report.tintFixture.resolvedBody,'#FF0000');assert.notDeepEqual(report.tintFixture.before,report.tintFixture.after);assert(report.tintFixture.exportBytes>0);assert.equal(report.tintFixture.pathMismatch,'unsupported');assert.equal(report.tintFixture.missingMask,'unsupported');
   const modular=await project(page);await page.locator('.project-menu summary').click();
   assert.equal(await page.locator('[data-command="save-character"]').count(),0);
   const dl=page.waitForEvent('download');await page.locator('[data-command="save-config"]').click();
   const download=await dl;const path=join(out,'modular-project.json');await download.saveAs(path);
   const saved=JSON.parse(await readFile(path,'utf8'));assert.deepEqual(saved,modular);assert.equal(saved.version,2);assert.equal(saved.character.version,10);
   await page.locator('[data-look-template="candidate-animals-20261005"]').click();await settled(page);
   const template=await project(page);assert.equal(template.creation.composition.kind,'template');
   if(!await page.locator('.project-menu').evaluate(node=>node.open))await page.locator('.project-menu summary').click();
   const templateDownload=page.waitForEvent('download');await page.locator('[data-command="save-config"]').click();
   await (await templateDownload).saveAs(join(out,'template-project.json'));
   assert.deepEqual(JSON.parse(await readFile(join(out,'template-project.json'),'utf8')),template);
   await page.locator('#undo').click();await settled(page);assert.deepEqual(await project(page),saved);
   await page.locator('#redo').click();await settled(page);assert.deepEqual(await project(page),template);
   await page.reload();await settled(page);assert.deepEqual(await project(page),template);
   await importJSON(page,template);await settled(page);assert.deepEqual(await project(page),template);
   report.templateRoundtrip='pass';
   await importJSON(page,saved);await settled(page);assert.deepEqual(await project(page),saved);
   await page.reload();await settled(page);assert.deepEqual(await project(page),saved,'autosave recovery');
   for(const bad of [{...saved,version:1},saved.character,...[6,7,8,9].map(version=>({...saved,character:{...saved.character,version}})),...['muse','pets'].map(family=>({...saved,character:{...saved.character,family}})),{...saved,creation:{...saved.creation,url:'https://example.invalid/image.png'}},{...saved,creation:{...saved.creation,composition:{...saved.creation.composition,layers:[]}}}]){
    await importJSON(page,bad);await page.waitForFunction(()=>document.querySelector('#toast')?.classList.contains('visible'));
    assert.deepEqual(await project(page),saved,'unsupported input changed current project');
   }
   const nullProject=structuredClone(saved);nullProject.character.notes='Prompt-only persistence fixture';nullProject.creation.composition=null;
   await importJSON(page,nullProject);assert.deepEqual(await project(page),nullProject);assert(await page.locator('#exportImage').isDisabled());
   await page.locator('#undo').click();await settled(page);assert.deepEqual(await project(page),saved);
   await page.locator('#redo').click();assert.deepEqual(await project(page),nullProject);assert(await page.locator('#exportImage').isDisabled());
   await page.reload();assert.deepEqual(await project(page),nullProject);assert(await page.locator('#exportImage').isDisabled());
   report.nullRoundtrip='pass';
   await importJSON(page,saved);await settled(page);
   const promptDownload=page.waitForEvent('download');await page.locator('[data-command="export-prompt"]').click();const txt=await promptDownload;await txt.saveAs(join(out,'prompt-export.txt'));
   // Prompt download is independently bound to the same live project state.
   await page.locator('[data-command="copy"]').first().click();
   const copied=await page.evaluate(()=>navigator.clipboard.readText());
   const expected=await page.evaluate(async()=>{const m=await import(document.querySelector('script[src*="studio.js"]').src.replace('studio.js','studio-creation.js'));return m.buildCreationPrompt(JSON.parse(sessionStorage.getItem('dot-studio-project-v2')));});
   assert.equal(copied,expected);assert.equal(await readFile(join(out,'prompt-export.txt'),'utf8'),expected);await writeFile(join(out,'prompt-readback.txt'),copied);
   report.prompt={bytes:Buffer.byteLength(copied),sha256:hash(Buffer.from(copied)),method:'real browser clipboard readback'};
  }
  report.results.push({width,tagSemantics:'pass',browseIsolation:'pass',focusRestoration:'pass',overflow:'pass',adaptations});
  await context.close();
 }
 assert.equal(report.errors.length,0,'page errors');report.status='pass';
}catch(error){report.status='fail';report.failure=error.stack;process.exitCode=1;}
finally{await browser.close();await writeFile(join(out,'report.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:report.status,out,results:report.results.length,failure:report.failure}));}
