import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { startAdjustmentReview } from './serve-character-adjustment-review.mjs';
import { launchBrowser } from './browser-runtime.mjs';
import { getTemplateOptionFields, validateTemplateDefinition } from '../dist/studio-edit-templates.js';

const manifestPath=process.argv[2] || 'openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-blue-cloud-review.json';
const {server,origin,manifest}=await startAdjustmentReview({manifestPath});
const definition=validateTemplateDefinition(manifest.template,{assetRegistry:manifest.assets});
if(!definition.valid){await server.close();throw new Error(JSON.stringify(definition.errors));}
const fields=getTemplateOptionFields(manifest.template).map(field=>field.key);
assert.deepEqual(fields, ['dots','grok'].includes(manifest.template.family)
  ? ['appearance','colors','face','accessories']
  : ['appearance','colors','face','clothing','accessories'], 'Tabs match the exact adjustment fields for this family.');
const recipeFields=fields;
const reachable=new Set(manifest.template.recipes.filter(recipe=>recipeFields.every(field=>recipe.selections[field]===manifest.template.defaultOptions[field])).map(recipe=>recipe.id));
for(let changed=true;changed;){changed=false;for(const recipe of manifest.template.recipes){if(reachable.has(recipe.id))continue;if(manifest.template.recipes.some(source=>reachable.has(source.id)&&recipeFields.filter(field=>source.selections[field]!==recipe.selections[field]).length===1)){reachable.add(recipe.id);changed=true;}}}
if(reachable.size!==manifest.template.recipes.length){await server.close();throw new Error('Recipes unreachable by legal one-option UI changes: '+manifest.template.recipes.filter(recipe=>!reachable.has(recipe.id)).map(recipe=>recipe.id).join(', '));}
const out=path.resolve('.artifacts/character-adjustments',manifest.template.id);await fs.mkdir(out,{recursive:true});
const browser=await launchBrowser({headless:true});const errors=[];const results=[];const captures=[];
try {
 const page=await browser.newPage({viewport:{width:1440,height:900},acceptDownloads:true});
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(origin+'/__character_adjustments__/');
 await page.waitForFunction(()=>window.__adjustmentReview?.editor.getSnapshot(),null,{timeout:45000});
 assert.equal(await page.title(),'角色调整 · 待审');assert.equal(await page.locator('vite-error-overlay').count(),0);
 assert.deepEqual(await page.locator('[role=tab]').evaluateAll(rows=>rows.map(r=>r.dataset.editorTab)),fields);
 for(const field of fields){
   await page.locator(`[role=tab][data-editor-tab="${field}"]`).click();
   const group=page.locator(`[role=tabpanel][data-editor-tab="${field}"]`);assert(await group.isVisible());
   assert((await group.locator('button[data-option-id]').count())>=2);
 }
 await page.locator('[role=tab]').first().focus();await page.keyboard.press('End');
 assert.equal(await page.locator('[role=tab][aria-selected=true]').getAttribute('data-editor-tab'),'accessories');
 await page.keyboard.press('Home');assert.equal(await page.locator('[role=tab][aria-selected=true]').getAttribute('data-editor-tab'),'appearance');
 for(const recipe of manifest.template.recipes){
   await page.evaluate(async selections=>{
     const {updateDraft}=await import('/studio-draft.js?v=100');const {editor,data}=window.__adjustmentReview;
     editor.setDraft(updateDraft(editor.getDraft(),selections,{template:data.template}));
   },recipe.selections);
   await page.waitForFunction(expected=>Object.entries(expected).every(([field,value])=>window.__adjustmentReview.editor.getSnapshot()?.options[field]===value),recipe.selections,{timeout:45000});
   const before=await page.evaluate(()=>{const{editor}=window.__adjustmentReview;return{snapshot:editor.getSnapshot(),png:editor.previewElement.querySelector('canvas').toDataURL(),prompt:document.querySelector('#prompt').textContent};});
   assert.equal(Object.hasOwn(before.snapshot.semantics.en, 'clothing'), fields.includes('clothing'), 'Preview semantics include clothing only for families with a real clothing tab.');
   const pending=page.waitForEvent('download');await page.locator('#export').click();const download=await pending;
   const filename=path.join(out,recipe.id+'.png');await download.saveAs(filename);const bytes=await fs.readFile(filename);
   assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),crypto.createHash('sha256').update(Buffer.from(before.png.split(',')[1],'base64')).digest('hex'),'Download must use the exact successful canvas pixels.');
   const pixels=await page.evaluate(()=>{const c=window.__adjustmentReview.editor.previewElement.querySelector('canvas');const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;let clear=0,visible=0;for(let i=3;i<d.length;i+=4){if(d[i]===0)clear++;else visible++;}return{clear,visible,width:c.width,height:c.height};});
   assert(pixels.clear>0&&pixels.visible>0);assert.equal(before.snapshot.templateId,manifest.template.id);
   assert(!before.prompt.includes(manifest.template.id));assert(before.prompt.includes('透明'));
   results.push({recipeId:recipe.id,options:recipe.selections,snapshot:before.snapshot,file:filename,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),pixels});
 }
 // Every declared option has both a real UI path and a pixel-changing witness.
 const optionChecks=[];
 const selectRecipe=async selections=>{
   await page.evaluate(async options=>{const{updateDraft}=await import('/studio-draft.js?v=100');const{editor,data}=window.__adjustmentReview;editor.setDraft(updateDraft(editor.getDraft(),options,{template:data.template}));},selections);
   await page.waitForFunction(expected=>Object.entries(expected).every(([field,value])=>window.__adjustmentReview.editor.getSnapshot()?.options[field]===value),selections);
 };
 for(const field of fields){
   const rows=manifest.template.options[field];
   const witnesses=results.flatMap((a,i)=>results.slice(i+1).filter(b=>fields.every(other=>other===field||a.options[other]===b.options[other])).map(b=>[a,b]));
   assert(witnesses.some(([a,b])=>a.sha256!==b.sha256),`${field} must independently change actual exported pixels.`);
   for(const option of rows){
     const targets=manifest.template.recipes.filter(recipe=>recipe.selections[field]===option.id);
     assert(targets.length,`${field}/${option.id} must be reachable.`);
     let pathPair=null;
     for(const target of targets){
       const source=manifest.template.recipes.find(recipe=>recipe.selections[field]!==option.id&&fields.every(other=>other===field||recipe.selections[other]===target.selections[other]));
       if(source){pathPair={source,target};break;}
     }
     assert(pathPair,`${field}/${option.id} needs a direct legal UI path.`);
     const {source,target}=pathPair;
     await selectRecipe(source.selections);
     await page.locator(`[role=tab][data-editor-tab="${field}"]`).click();
     const button=page.locator(`[data-field="${field}"][data-option-id="${option.id}"]`);
     await expectEnabled(button,`${field}/${option.id}`);
     const box=await button.boundingBox();assert(box.width>=44&&box.height>=44,'Option hit area must be at least 44px.');
     await button.click();
     await page.waitForFunction(({field,id})=>window.__adjustmentReview.editor.getSnapshot()?.options[field]===id,{field,id:option.id});
     optionChecks.push({field,optionId:option.id,sourceRecipe:source.id,targetRecipe:target.id});
   }
 }
 await selectRecipe(manifest.template.defaultOptions);
 // Disabled conflicts retain the current selections and explain why.
 const conflictChecks=[];
 for(const recipe of manifest.template.recipes){
   await selectRecipe(recipe.selections);
   for(const field of fields){
     await page.locator(`[role=tab][data-editor-tab="${field}"]`).click();
     for(const option of manifest.template.options[field]){
       const legal=manifest.template.recipes.some(row=>fields.every(key=>row.selections[key]===(key===field?option.id:recipe.selections[key])));
       const button=page.locator(`[data-field="${field}"][data-option-id="${option.id}"]`);
       assert.equal(await button.isEnabled(),legal,`${recipe.id}: ${field}/${option.id} availability`);
       if(!legal){assert((await button.getAttribute('title'))?.length>0);conflictChecks.push({recipeId:recipe.id,field,optionId:option.id});}
     }
   }
 }
 await selectRecipe(manifest.template.defaultOptions);
 await page.locator('#locale').click();
 assert((await page.locator('#controls').innerText()).includes('Character adjustments'));
 assert((await page.locator('#prompt').innerText()).includes('transparent'));
 for(const field of fields){await page.locator(`[role=tab][data-editor-tab="${field}"]`).click();assert(await page.locator(`[role=tabpanel][data-editor-tab="${field}"]`).isVisible());}
 await page.locator('#locale').click();
 for(const [width,height]of[[1440,900],[390,844],[320,700],[768,1024]]){
   await page.setViewportSize({width,height});await page.locator('[role=tab][data-editor-tab=appearance]').click();
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'No horizontal page overflow.');
   const file=path.join(out,`review-${width}x${height}.png`);await page.screenshot({path:file,fullPage:true});captures.push({width,height,file});
 }
 assert.deepEqual(errors,[]);
 const report={status:'engineering-passed',artApproval:'pending',browser:'Chromium / Playwright; project automated regression, separate from in-app manual review',scope:'Only this exact candidate Template; no public-gallery coverage claim',templateId:manifest.template.id,version:manifest.template.version,sourceManifest:manifestPath,combinations:results,optionChecks,conflictChecks,captures,errors};
 await fs.writeFile(path.join(out,'report.json'),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({status:report.status,templateId:report.templateId,combinations:results.length,viewports:captures.length,report:path.join(out,'report.json')}));
}finally{await browser.close();await server.close();}

async function expectEnabled(locator,label){assert(await locator.isEnabled(),`${label} must be enabled on its legal path.`);}
