import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {GALLERY_FIGURES,getFigureStates,getFigureInitialState,getFigureFields,resolveFigureSelection} from '../dist/studio-gallery-figures.js?v=111';

const output=resolveEvidenceDirectory('.artifacts/gallery-figure-browser');
await fs.mkdir(output,{recursive:true});
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const optionKey=options=>JSON.stringify(Object.entries(options).filter(([key])=>key!=='clothing'||options.clothing!=='none').sort(([a],[b])=>a.localeCompare(b)));
const valuesKey=values=>JSON.stringify(Object.entries(values).sort(([a],[b])=>a.localeCompare(b)));
const baseline=new Map();
if(process.env.DOTS_LOOK_BASELINE){
 const prior=JSON.parse(await fs.readFile(process.env.DOTS_LOOK_BASELINE,'utf8'));
 for(const template of prior.templates)for(const row of template.configurations)baseline.set(`${template.templateId}|${optionKey(row.options)}`,row.outputSha256);
}
const vite=await createServer({configFile:path.resolve('vite.config.mjs'),server:{host:'127.0.0.1',port:0,strictPort:true,hmr:false}});
await vite.listen();const origin=`http://127.0.0.1:${vite.httpServer.address().port}`;
const browser=await launchBrowser({headless:true});
const context=await browser.newContext({viewport:{width:1440,height:900},acceptDownloads:true});
const html=(await fs.readFile('dist/index.html','utf8')).replace('data-cache="111"','data-cache="111" data-studio-boot="manual"').replace('<script type="module" src="./studio.js?v=111"></script>','<script type="module">import {bootStudio} from "/studio.js?v=111";window.__dotsFigureQA=bootStudio();</script>');
await context.route(`${origin}/`,route=>route.fulfill({contentType:'text/html',body:html}));
const page=await context.newPage(),errors=[],rows=[],exports=[],figures=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('dialog',dialog=>{errors.push(`Unexpected ${dialog.type()} dialog`);void dialog.dismiss();});
const ready=()=>page.waitForFunction(()=>{
 const state=window.__dotsFigureQA.detail.getState(),canvas=document.querySelector('.studio-editor-canvas');
 return state.figureId&&state.exportReady&&state.promptReady&&state.draft&&canvas&&Number(canvas.dataset.renderRevision)===state.draft.revision;
},null,{timeout:45000});
async function pixels(){return page.evaluate(async()=>{
 const canvas=document.querySelector('.studio-editor-canvas'),state=window.__dotsFigureQA.detail.getState();
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
 const digest=await crypto.subtle.digest('SHA-256',await blob.arrayBuffer());
 const rgba=canvas.getContext('2d',{willReadFrequently:true}).getImageData(0,0,canvas.width,canvas.height).data;
 let transparent=0,visible=0;for(let i=3;i<rgba.length;i+=4){if(rgba[i]===0)transparent++;if(rgba[i]>0)visible++;}
 return {sha256:[...new Uint8Array(digest)].map(n=>n.toString(16).padStart(2,'0')).join(''),transparent,visible,width:canvas.width,height:canvas.height,options:state.draft.options,prompt:state.modifiedPrompt,figureId:state.figureId,stateId:state.figureStateId,values:state.figureValues,artworkId:state.id,lookId:state.lookId,templateId:state.templateId,session:state.sessionId};
});}
function pathTo(figure,from,to){
 const key=valuesKey(to),fields=getFigureFields(figure),queue=[{state:from,steps:[]}],seen=new Set([valuesKey(from.values)]);
 while(queue.length){const item=queue.shift();if(valuesKey(item.state.values)===key)return item.steps;
  for(const field of fields)for(const option of field.options){
   const next=resolveFigureSelection(figure,item.state.id,{[field.key]:option.id});
   if(!next||seen.has(valuesKey(next.values)))continue;
   seen.add(valuesKey(next.values));queue.push({state:next,steps:[...item.steps,[field.key,option.id]]});
  }
 }throw Error(`Unreachable semantic configuration: ${figure.id}/${key}`);
}
async function download(figure,pixel,kind){
 const promise=page.waitForEvent('download');await page.locator('.artwork-detail__export').click();
 const result=await promise,bytes=await fs.readFile(await result.path());assert.equal(hash(bytes),pixel.sha256,`${figure.id}/${kind}: actual PNG equals the current canvas`);
 exports.push({figureId:figure.id,stateId:pixel.stateId,kind,sha256:hash(bytes),byteSize:bytes.length,filename:result.suggestedFilename()});
}
function verifyPixels(figure,pixel){
 assert.equal(pixel.figureId,figure.id);assert(pixel.transparent>0&&pixel.visible>0);
 const actual=getFigureStates(figure).find(row=>row.id===pixel.stateId);assert(actual,`${figure.id}: UI has a real source state`);
 assert.equal(actual.artwork.id,pixel.artworkId);assert.equal(actual.look.id,pixel.lookId);assert.equal(actual.template.id,pixel.templateId);
 for(const [field,value]of Object.entries(actual.selections))assert.equal(pixel.options[field],value);
 assert.equal(valuesKey(actual.values),valuesKey(pixel.values));
 const prior=baseline.get(`${actual.template.id}|${optionKey(pixel.options)}`);
 if(baseline.size){assert(prior,`Missing frozen baseline ${actual.template.id}/${actual.recipe.id}`);assert.equal(pixel.sha256,prior,`${figure.id}: original registered recipe pixels remain exact`);}
 return {figureId:figure.id,stateId:actual.id,lookId:actual.look.id,templateId:actual.template.id,recipeId:actual.recipe.id,options:pixel.options,values:actual.values,sha256:pixel.sha256,transparent:pixel.transparent,baselineMatched:Boolean(prior)};
}
try{
 await page.goto(`${origin}/#/`);assert.equal(await page.locator('.artwork-card').count(),83);
 assert.equal(await page.locator('[data-figure-id="dots-cloud"]').count(),1);
 for(const figure of GALLERY_FIGURES){
  await page.locator(`.artwork-select[data-figure-id="${figure.id}"]`).click();await ready();
  assert.equal(new URL(page.url()).hash,`#/figure/${encodeURIComponent(figure.id)}?v=${encodeURIComponent(figure.version)}`);
  const states=getFigureStates(figure),initial=getFigureInitialState(figure),fields=getFigureFields(figure);
  const first=await pixels();assert.equal(first.stateId,initial.id);verifyPixels(figure,first);await download(figure,first,'default');
  const initialSession=first.session;
  assert.equal(await page.locator('[data-editor-tab="appearance"],[data-field="appearance"]').count(),0);
  assert.equal(await page.locator('.studio-figure-editor .studio-editor-tab').count(),fields.length);
  assert.equal(await page.locator('.studio-figure-editor .studio-editor-tabs:not([hidden])').count(),Number(fields.length>1));
  const remaining=[...new Map(states.map(state=>[valuesKey(state.values),state.values])).values()];
  let current=initial,last=first;const startCount=rows.length;
  while(remaining.length){
   const candidates=remaining.map((values,index)=>({values,index,steps:pathTo(figure,current,values)})).sort((a,b)=>a.steps.length-b.steps.length);
   const target=candidates[0];remaining.splice(target.index,1);
   for(const[field,value]of target.steps){
    if(fields.length>1)await page.locator(`.studio-figure-editor .studio-editor-tab[data-figure-field="${field}"]`).click();
    const button=page.locator(`.studio-figure-option[data-field="${field}"][data-option-id="${value}"]`);
    assert.equal(await button.isEnabled(),true);await button.click();await ready();
   }
   last=await pixels();assert.equal(last.session,initialSession,`${figure.id}: member changes retain the Figure session`);
   assert.equal(valuesKey(last.values),valuesKey(target.values));rows.push(verifyPixels(figure,last));
   current=states.find(state=>state.id===last.stateId);assert(current);
  }
  if(last.stateId!==first.stateId)await download(figure,last,'modified');
  figures.push({figureId:figure.id,memberLookCount:figure.memberLookIds.length,sourceRecipes:states.length,semanticConfigurations:rows.length-startCount});
  await fs.writeFile(path.join(output,'progress.json'),JSON.stringify({complete:false,figures,rows,exports,errors},null,2)+'\n');
  await page.locator('#overlayClose').click();await page.waitForFunction(()=>!document.querySelector('#studioOverlay')?.open);
  console.log(`${figures.length}/${GALLERY_FIGURES.length}: ${figure.id}, ${rows.length} semantic configurations, ${exports.length} PNG downloads`);
 }
 const expected=GALLERY_FIGURES.reduce((count,figure)=>count+new Set(getFigureStates(figure).map(state=>valuesKey(state.values))).size,0);
 assert.equal(rows.length,expected);assert.equal(figures.length,83);assert.deepEqual(errors,[]);
 const report={figureCount:83,sourceLookCount:90,sourceRecipeCount:540,semanticConfigurationCount:rows.length,actualPNGDownloads:exports.length,frozenBaselineAvailable:baseline.size,baselineMatches:rows.filter(row=>row.baselineMatched).length,figures,rows,exports,errors,browser:'Installed Chrome via project Playwright; in-app Browser proof is recorded separately.',physicalDevice:false};
 await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
 await fs.writeFile(path.join(output,'progress.json'),JSON.stringify({complete:true,figureCount:figures.length,semanticConfigurationCount:rows.length,actualPNGDownloads:exports.length},null,2)+'\n');
 console.log(`Public Figures: 83 entries, ${rows.length} real semantic configurations and ${exports.length} transparent PNG downloads passed.`);
}finally{await browser.close();await vite.close();}
