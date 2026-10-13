import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {GALLERY_LOOKS,getLookOptionFields} from '../dist/studio-gallery-looks.js?v=111';
import {GALLERY_FIGURES} from '../dist/studio-gallery-figures.js?v=111';
import {TEMPLATE_REGISTRY,enumerateValidConfigurations} from '../dist/studio-edit-templates.js?v=111';

const output=resolveEvidenceDirectory('.artifacts/gallery-look-browser');
await fs.mkdir(output,{recursive:true});
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const optionKey=options=>JSON.stringify(Object.entries(options).filter(([key])=>key!=='clothing'||options.clothing!=='none').sort(([a],[b])=>a.localeCompare(b)));
const baseline=new Map();
if(process.env.DOTS_LOOK_BASELINE){
 const prior=JSON.parse(await fs.readFile(process.env.DOTS_LOOK_BASELINE,'utf8'));
 for(const template of prior.templates)for(const row of template.configurations)baseline.set(`${template.templateId}|${optionKey(row.options)}`,row.outputSha256);
}
const vite=await createServer({configFile:path.resolve('vite.config.mjs'),server:{host:'127.0.0.1',port:0,strictPort:true,hmr:false}});
await vite.listen();const origin=`http://127.0.0.1:${vite.httpServer.address().port}`;
const browser=await launchBrowser({headless:true});
const context=await browser.newContext({viewport:{width:1440,height:900},acceptDownloads:true});
const html=(await fs.readFile('dist/index.html','utf8')).replace('data-cache="111"','data-cache="111" data-studio-boot="manual"').replace('<script type="module" src="./studio.js?v=111"></script>','<script type="module">import {bootStudio} from "/studio.js?v=111";window.__dotsLookQA=bootStudio();</script>');
await context.route(`${origin}/`,route=>route.fulfill({contentType:'text/html',body:html}));
const page=await context.newPage(),errors=[],rows=[],exports=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('dialog',dialog=>{errors.push(`Unexpected ${dialog.type()} dialog`);void dialog.dismiss();});
const ready=()=>page.waitForFunction(()=>{
 const state=window.__dotsLookQA.detail.getState(),canvas=document.querySelector('.studio-editor-canvas');
 return state.exportReady&&state.promptReady&&state.draft&&canvas&&Number(canvas.dataset.renderRevision)===state.draft.revision;
},null,{timeout:45000});
async function pixels(){return page.evaluate(async()=>{
 const canvas=document.querySelector('.studio-editor-canvas'),state=window.__dotsLookQA.detail.getState();
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
 const digest=await crypto.subtle.digest('SHA-256',await blob.arrayBuffer());
 const rgba=canvas.getContext('2d',{willReadFrequently:true}).getImageData(0,0,canvas.width,canvas.height).data;
 let transparent=0,visible=0;for(let i=3;i<rgba.length;i+=4){if(rgba[i]===0)transparent++;if(rgba[i]>0)visible++;}
 return {sha256:[...new Uint8Array(digest)].map(n=>n.toString(16).padStart(2,'0')).join(''),transparent,visible,width:canvas.width,height:canvas.height,options:state.draft.options,prompt:state.modifiedPrompt};
});}
function pathTo(template,from,to,look){
 const fields=getLookOptionFields(template,look).map(row=>row.key);
 const configs=enumerateValidConfigurations(template).filter(row=>row.appearance===look.appearance);
 const key=row=>JSON.stringify(fields.map(field=>row[field]));
 const queue=[{options:from,steps:[]}],seen=new Set([key(from)]);
 while(queue.length){const item=queue.shift();if(key(item.options)===key(to))return item.steps;
  for(const candidate of configs){const changes=fields.filter(field=>candidate[field]!==item.options[field]);if(changes.length!==1||seen.has(key(candidate)))continue;seen.add(key(candidate));queue.push({options:candidate,steps:[...item.steps,[changes[0],candidate[changes[0]]]]});}
 }throw Error(`Unreachable recipe: ${template.id}/${look.appearance}`);
}
try{
 await page.goto(`${origin}/#/`);assert.equal(await page.locator('.artwork-card').count(),GALLERY_FIGURES.length);
 for(const look of GALLERY_LOOKS){
  const template=TEMPLATE_REGISTRY.find(row=>row.id===look.templateId&&row.version===look.templateVersion);
  await page.evaluate(({id,version})=>window.__dotsLookQA.openLook(id,version),look);await ready();
  const initial=await page.evaluate(()=>window.__dotsLookQA.detail.getState());
  assert.equal(initial.lookId,look.id);assert.equal(initial.draft.options.appearance,look.appearance);
  assert.equal(await page.locator('[data-editor-tab="appearance"],[data-field="appearance"]').count(),0);
  const fields=getLookOptionFields(template,look);
  assert.equal(await page.locator('.studio-editor-tab').count(),fields.length);
  assert.equal(await page.locator('[role="tablist"]').count(),Number(fields.length>0));
  assert.deepEqual(initial.draft.defaultOptions,initial.draft.options);
  const remaining=enumerateValidConfigurations(template).filter(row=>row.appearance===look.appearance);
  let current=look.defaultOptions,last;
  while(remaining.length){
   const candidates=remaining.map((options,index)=>({options,index,steps:pathTo(template,current,options,look)})).sort((a,b)=>a.steps.length-b.steps.length);
   const target=candidates[0];remaining.splice(target.index,1);
   for(const [field,value] of target.steps){
    await page.locator(`.studio-editor-tab[data-editor-tab="${field}"]`).click();
    const button=page.locator(`.studio-editor-option[data-field="${field}"][data-option-id="${value}"]`);
    assert.equal(await button.isEnabled(),true);await button.click();await ready();
   }
   current=target.options;last=await pixels();
   assert.equal(last.options.appearance,look.appearance);assert(last.transparent>0&&last.visible>0);
   for(const [field,value] of Object.entries(current))assert.equal(last.options[field],value);
   const prior=baseline.get(`${template.id}|${optionKey(current)}`);if(baseline.size){assert(prior,`Missing baseline ${template.id}`);assert.equal(last.sha256,prior,`${look.id}: prior approved recipe pixels remain exact`);}
   rows.push({lookId:look.id,templateId:template.id,options:last.options,sha256:last.sha256,transparent:last.transparent,baselineMatched:Boolean(prior)});
  }
  const downloadPromise=page.waitForEvent('download');await page.locator('.artwork-detail__export').click();
  const download=await downloadPromise,bytes=await fs.readFile(await download.path());assert.equal(hash(bytes),last.sha256,`${look.id}: real PNG download equals current canvas`);
  exports.push({lookId:look.id,sha256:hash(bytes),byteSize:bytes.length,filename:download.suggestedFilename()});
  await page.locator('#overlayClose').click();await page.waitForFunction(()=>!document.querySelector('#studioOverlay')?.open);
  console.log(`${exports.length}/${GALLERY_LOOKS.length}: ${look.id}, ${rows.length} recipes`);
 }
 assert.equal(rows.length,540);assert.equal(exports.length,90);assert.deepEqual(errors,[]);
 await fs.writeFile(path.join(output,'report.json'),JSON.stringify({lookCount:90,recipeCount:540,actualPNGDownloads:90,baselineCompared:baseline.size,rows,exports,errors,physicalDevice:false},null,2)+'\n');
 console.log('Internal source looks: 90 entries, 540 real UI recipes, 90 transparent PNG downloads passed; public gallery uses deduplicated Figures.');
}finally{await browser.close();await vite.close();}
