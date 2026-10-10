import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {chromium} from '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root='design/acceptance/current-20261010-v99';
const manifest=JSON.parse(await fs.readFile('dist/assets/templates/sources.json','utf8'));
const manifestHash=createHash('sha256').update(await fs.readFile('dist/assets/templates/sources.json')).digest('hex');
const run=process.argv[2];assert(run?.startsWith('run-')&&!run.includes('/'),'Pass the final full editing run directory name.');
const dir=path.join(root,'editor',run),report=JSON.parse(await fs.readFile(path.join(dir,'report.json'),'utf8'));
assert.equal(report.sourceManifestSha256,manifestHash,'Review packet must use the current exact asset manifest.');
assert.equal(report.engineeringReport.templates.length,2);
const png=async p=>'data:image/png;base64,'+(await fs.readFile(p)).toString('base64');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const buildBytes=await fs.readFile(path.join(root,'build-report.json'));
const buildReport=JSON.parse(buildBytes);
for(const file of buildReport.files)assert.equal(createHash('sha256').update(await fs.readFile(file.path)).digest('hex'),file.sha256,`Rebuild before freezing approval scope: ${file.path}`);
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage({viewport:{width:1424,height:700},deviceScaleFactor:1});
const scope={revision:99,status:'pending-user-art-approval',newArtworks:JSON.parse(await fs.readFile(path.join(root,'visual/new-artworks-review.json'),'utf8')),templateSourceManifestSha256:manifestHash,templates:[],page:{revision:99,status:'pending',sourceHashFile:'build-report.json',buildReportSha256:createHash('sha256').update(buildBytes).digest('hex'),files:buildReport.files},engineeringRun:'editor/'+run+'/report.json',historicalArtworkApprovalDoesNotExtend:true,publicEditable:false,deploymentAuthorized:false};
try{
 for(const template of report.engineeringReport.templates){
  const source=manifest.templates.find(t=>t.templateId===template.templateId||t.id===template.templateId);assert(source);
  const rows=await Promise.all(template.configurations.map(async config=>{
   const file=`${template.templateId}-${String(config.index).padStart(2,'0')}.png`;const filePath=path.join(dir,'composites',file);const bytes=await fs.readFile(filePath);assert.equal(createHash('sha256').update(bytes).digest('hex'),config.outputSha256);
   return {config,file,image:await png(filePath)};
  }));
  const defaultRow=rows.find(({config})=>Object.entries(source.defaults).every(([key,value])=>config.options[key]===value));assert(defaultRow);
  const originalImage=await png(source.artworkBinding.path);
  const html=`<!doctype html><html><head><meta charset="utf-8"><style>*{box-sizing:border-box}body{margin:0;padding:24px;background:#0b0d12;color:#f4f6fb;font:15px/1.5 Arial,sans-serif}h1{font-size:28px;margin:0 0 8px}.note{color:#b5bfd0;margin:0 0 22px}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}figure{margin:0;border:1px solid #586071;border-radius:12px;overflow:hidden;background:#141821}.pair{display:grid;grid-template-columns:1fr 1fr}.pair img{width:100%;display:block;object-fit:contain;padding:6px}.pair img:last-child{background:#f5f5f5}figcaption{padding:10px;font-size:13px;min-height:96px;overflow-wrap:anywhere}.comparison{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:0 0 24px}.comparison figure img{width:100%;height:260px;object-fit:contain}.comparison figure:nth-child(even) img{background:#f5f5f5}.comparison figcaption{min-height:0}.hash{color:#9da9bc;font:11px monospace}</style></head><body><h1>${escape(template.templateId)} · ${rows.length} 个真实 Draft 配方</h1><p class="note">全部待用户艺术确认。每格为同一透明 PNG 的深/浅底浏览器显示；背景不在导出像素中。真实 renderer 输出与导出 hash 一致。Shape 固定；编号对应精确配方记录。<br>素材 manifest ${manifestHash.slice(0,16)} · ${escape(run)}</p><div class="comparison"><figure><img src="${originalImage}"><figcaption>原 Artwork · 深底 · 原字节保持</figcaption></figure><figure><img src="${originalImage}"><figcaption>原 Artwork · 浅底 · 原字节保持</figcaption></figure><figure><img src="${defaultRow.image}"><figcaption>默认 Draft #${defaultRow.config.index} · 深底 · 待确认</figcaption></figure><figure><img src="${defaultRow.image}"><figcaption>默认 Draft #${defaultRow.config.index} · 浅底 · 待确认</figcaption></figure></div><div class="grid">${rows.map(({config,image})=>`<figure><div class="pair"><img src="${image}"><img src="${image}"></div><figcaption><b>#${String(config.index).padStart(2,'0')} · ${escape(config.options.color)}</b><br>${escape(config.options.eyes)} · ${escape(config.options.glasses)} · ${escape(config.options.accessory)}<br><span class="hash">r${config.revision} · ${config.outputSha256.slice(0,18)}</span></figcaption></figure>`).join('')}</div></body></html>`;
  const stem=`${template.templateId}-all-configurations`;await page.setContent(html);await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(img=>img.decode())));await page.screenshot({path:path.join(root,'visual',stem+'.png'),fullPage:true});await fs.writeFile(path.join(root,'visual',stem+'.html'),html);
  scope.templates.push({id:template.templateId,status:'pending',artworkId:template.artworkId,artworkVersion:template.artworkVersion,legalCount:template.legalCount,defaultReconstruction:{status:'pending',configurationIndex:defaultRow.config.index,outputSha256:defaultRow.config.outputSha256,originalSha256:source.artworkBinding.sha256},reviewSheet:'visual/'+stem+'.png',configurations:rows.map(({config,file})=>({...config,loader:undefined,png:'editor/'+run+'/composites/'+file}))});
 }
 await fs.writeFile(path.join(root,'approval-scope.json'),JSON.stringify(scope,null,2)+'\n');console.log('Exact approval scope and both full-template review sheets written. No approval granted.');
}finally{await browser.close();}
