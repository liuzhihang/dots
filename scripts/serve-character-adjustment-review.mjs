import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { resolveProvenancePath } from './resolve-provenance-path.mjs';
import { createServer } from 'vite';

// Local-only candidate review: exact manifest assets remain outside dist.
export async function startAdjustmentReview({ manifestPath, manifestPaths = [], port = 0 } = {}) {
  const paths = manifestPaths.length ? manifestPaths : [manifestPath];
  const manifests = await Promise.all(paths.map(async file => JSON.parse(await fs.readFile(resolveProvenancePath(file), 'utf8'))));
  const manifest = manifests[0];
  const byTemplate = new Map(manifests.map(item => [item.template.id, item]));
  if (byTemplate.size !== manifests.length) throw new Error('Review template IDs must be unique.');
  const assets = new Map();
  for (const item of manifests) for (const asset of item.assets) {
    const key = '/' + asset.path.replace(/^\.\//, '');
    if (assets.has(key) && assets.get(key).sha256 !== asset.sha256) throw new Error(`Conflicting review asset: ${key}`);
    assets.set(key, asset);
  }
  const server = await createServer({ configFile: path.resolve('vite.config.mjs'), server: { host: '127.0.0.1', port, strictPort: true, hmr: false }, plugins: [{
    name: 'candidate-adjustment-review', configureServer(vite) {
      vite.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url, 'http://localhost');
        const pathname = url.pathname;
        if (request.method !== 'GET') return next();
        try {
          if (assets.has(pathname)) {
            const asset = assets.get(pathname);
            response.setHeader('Content-Type', 'image/png'); response.setHeader('Cache-Control', 'no-store');
            response.end(await fs.readFile(resolveProvenancePath(asset.sourcePath))); return;
          }
          if (pathname === '/__character_adjustments__/manifest.json') {
            const selected = url.searchParams.has('candidate') ? byTemplate.get(url.searchParams.get('candidate')) : manifest;
            if (!selected) { response.statusCode = 404; response.end('Unknown review candidate'); return; }
            response.setHeader('Content-Type', 'application/json'); response.end(JSON.stringify(selected)); return;
          }
          if (pathname === '/__character_adjustments__/recipes/' || pathname === '/__character_adjustments__/recipe.png') {
            const selected = byTemplate.get(url.searchParams.get('candidate'));
            if (!selected) { response.statusCode = 404; response.end('Unknown review candidate'); return; }
            const report = JSON.parse(await fs.readFile(path.resolve('.artifacts/character-adjustments', selected.template.id, 'report.json'), 'utf8'));
            if (report.status !== 'engineering-passed' || report.templateId !== selected.template.id
              || report.combinations.length !== selected.template.recipes.length) throw new Error('Recipe evidence does not match this candidate.');
            if (pathname.endsWith('recipe.png')) {
              const recipe = selected.template.recipes.find(item => item.id === url.searchParams.get('recipe'));
              const row = recipe && report.combinations.find(item => item.recipeId === recipe.id);
              if (!row) { response.statusCode = 404; response.end('Unknown reviewed recipe'); return; }
              const bytes = await fs.readFile(row.file);
              if (crypto.createHash('sha256').update(bytes).digest('hex') !== row.sha256) throw new Error('Reviewed recipe PNG hash mismatch.');
              response.setHeader('Content-Type', 'image/png'); response.setHeader('Cache-Control', 'no-store'); response.end(bytes); return;
            }
            const data = JSON.stringify({ id: selected.template.id, title: selected.artwork.titleByLanguage['zh-CN'], fields: selected.template.options, rows: report.combinations.map(row => ({ id: row.recipeId, options: row.options, sha256: row.sha256 })) }).replaceAll('<', '\\u003c');
            response.setHeader('Content-Type', 'text/html; charset=utf-8'); response.setHeader('Cache-Control', 'no-store');
            response.end(`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>全部组合对照 · 待审</title><style>body{font:15px system-ui;background:#141725;color:#f7f5ff;margin:0;padding:24px}main{max-width:1200px;margin:auto}a{color:#c8b8ff;display:inline-flex;align-items:center;min-height:44px}p{line-height:1.6;color:#bdc4d7}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}article{border:1px solid #3b435a;border-radius:14px;padding:14px;min-width:0}.pair{display:grid;grid-template-columns:1fr 1fr;gap:8px}.pair img{width:100%;aspect-ratio:1;object-fit:contain;background:#111521;border-radius:10px}.pair img+img{background:#dfe4eb}h2{font-size:15px;overflow-wrap:anywhere}small{display:block;color:#acb5cd;overflow-wrap:anywhere} @media(max-width:360px){body{padding:12px}.grid{grid-template-columns:1fr}}</style></head><body><main><a id="back">← 返回角色调整</a><h1 id="title"></h1><p>每个合法组合显示深、浅两种检查底。底色仅用于核对轮廓、绒毛和穿戴边缘，PNG 本身透明；这些候选仍待用户美术确认。</p><div id="grid" class="grid"></div></main><script type="module">const data=${data};document.querySelector('#title').textContent=data.title+' · '+data.rows.length+' 个组合';document.querySelector('#back').href='/__character_adjustments__/?candidate='+encodeURIComponent(data.id);document.querySelector('#grid').replaceChildren(...data.rows.map(row=>{const card=document.createElement('article'),h=document.createElement('h2'),pair=document.createElement('div'),p=document.createElement('p'),small=document.createElement('small');h.textContent=row.id;pair.className='pair';for(const suffix of ['深底','浅底']){const image=document.createElement('img');image.src='/__character_adjustments__/recipe.png?candidate='+encodeURIComponent(data.id)+'&recipe='+encodeURIComponent(row.id);image.alt=data.title+' '+suffix;image.loading='lazy';pair.append(image)}p.textContent=Object.entries(row.options).map(([field,id])=>data.fields[field]?.find(option=>option.id===id)?.labelByLanguage?.['zh-CN']).filter(Boolean).join(' · ');small.textContent='PNG SHA-256: '+row.sha256;card.append(h,pair,p,small);return card}));</script></body></html>`); return;
          }
          if (pathname.startsWith('/__character_adjustments__/original/')) {
            const selected = byTemplate.get(decodeURIComponent(pathname.slice('/__character_adjustments__/original/'.length)).replace(/\.png$/, ''));
            if (!selected) { response.statusCode = 404; response.end('Unknown review candidate'); return; }
            response.setHeader('Content-Type', 'image/png'); response.setHeader('Cache-Control', 'no-store');
            response.end(await fs.readFile(resolveProvenancePath(selected.artwork.sourcePath))); return;
          }
          if (pathname === '/__character_adjustments__/gallery/') {
            const items = manifests.map(item => ({ id: item.template.id, version: item.template.version, artwork: item.artwork.id, artworkVersion: item.artwork.version, title: item.artwork.titleByLanguage, family: item.template.family, recipes: item.template.recipes.length }));
            const json = JSON.stringify(items).replaceAll('<', '\\u003c');
            response.setHeader('Content-Type', 'text/html; charset=utf-8'); response.setHeader('Cache-Control', 'no-store');
            response.end(`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>角色候选审核</title><style>body{font:16px system-ui;margin:0;background:#141725;color:#f7f5ff;padding:24px}main{max-width:1160px;margin:auto}p{line-height:1.7;color:#bbc1d4}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}a{color:inherit;text-decoration:none;background:#222739;border:1px solid #394058;border-radius:18px;padding:16px;display:block}a:focus-visible{outline:3px solid #b8a1ff}img{display:block;width:100%;aspect-ratio:1;object-fit:contain}small{display:block;overflow-wrap:anywhere;color:#bbc1d4;line-height:1.6}h2{font-size:18px}select{font:inherit;min-height:44px;margin:8px 0 24px;padding:8px;border-radius:8px}</style></head><body><main><h1>角色候选审核</h1><p>逐件查看角色调整与透明导出。这里是本地待审材料；所有新素材、模板及组合的用户批准仍为 pending。卡片底色只用于展示，不进入 PNG。</p><label>家族 <select id="family"><option value="all">全部</option><option value="dots">Dots</option><option value="grok">Grok Bot</option><option value="muse">Muse</option><option value="animals">动物</option><option value="humans">人物</option><option value="original">独立角色</option></select></label><p id="count"></p><div id="grid" class="grid"></div></main><script type="module">const items=${json};const order=['dots','grok','muse','animals','humans','original'];items.sort((a,b)=>(order.indexOf(a.family)<0?5:order.indexOf(a.family))-(order.indexOf(b.family)<0?5:order.indexOf(b.family)));const render=()=>{const filter=document.querySelector('#family').value;const shown=items.filter(x=>filter==='all'||x.family===filter||(filter==='original'&&!order.slice(0,5).includes(x.family)));document.querySelector('#count').textContent=shown.length+' 件候选 · '+shown.reduce((n,x)=>n+x.recipes,0)+' 个合法组合';document.querySelector('#grid').replaceChildren(...shown.map(x=>{const a=document.createElement('a');a.href='/__character_adjustments__/?candidate='+encodeURIComponent(x.id);const img=document.createElement('img');img.src='/__character_adjustments__/original/'+encodeURIComponent(x.id)+'.png';img.alt=x.title['zh-CN'];img.loading='lazy';const h=document.createElement('h2');h.textContent=x.title['zh-CN'];const s=document.createElement('small');s.textContent=x.artwork+' @ '+x.artworkVersion+' · '+x.recipes+' 个组合';a.append(img,h,s);return a}));};document.querySelector('#family').onchange=render;render();</script></body></html>`); return;
          }
          if (pathname !== '/__character_adjustments__/') return next();
          response.setHeader('Content-Type', 'text/html; charset=utf-8'); response.setHeader('Cache-Control', 'no-store');
          response.end(`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="/"><title>角色调整 · 待审</title><link rel="stylesheet" href="/studio.css?v=110"><link rel="stylesheet" href="/studio-detail.css?v=110"><style>body{margin:0;padding:24px;background:#121521;color:#fafaff}main{max-width:1160px;margin:auto}.review-columns{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px}.review-preview{min-height:320px;aspect-ratio:1}.review-preview canvas{max-width:100%;height:auto}.review-controls{min-width:0}button{min-height:44px}#prompt{white-space:pre-wrap;overflow-wrap:anywhere} @media(max-width:700px){body{padding:16px}.review-columns{grid-template-columns:1fr}.review-preview{min-height:240px}}</style></head><body><main><p>本地制作审阅 · Artwork / Template / 组合均待用户确认</p><h1 id="title"></h1><div class="review-columns"><div id="preview" class="review-preview"></div><div><div id="controls" class="review-controls"></div><button id="export" disabled>导出当前透明 Draft</button><button id="locale">English</button><pre id="prompt"></pre></div></div></main><script type="module">
import {createEditor} from '/studio-editor.js?v=110';
import {createPreviewLoader} from '/studio-preview-loader.js?v=110';
import {validateTemplateDefinition} from '/studio-edit-templates.js?v=110';
import {buildConfigurationPrompt,buildArtworkEditPrompt} from '/studio-prompt.js?v=110';
const data=await(await fetch('/__character_adjustments__/manifest.json'+location.search)).json();
if(location.search){const back=document.createElement('a');back.href='/__character_adjustments__/gallery/';back.textContent='← 返回候选目录';back.style.cssText='display:inline-flex;min-height:44px;align-items:center;color:#c8b8ff';document.querySelector('main').prepend(back);}
const checked=validateTemplateDefinition(data.template,{assetRegistry:data.assets});if(!checked.valid)throw Error(JSON.stringify(checked.errors));
document.querySelector('#title').textContent=data.artwork.titleByLanguage['zh-CN'];
const proofLink=document.createElement('a');proofLink.href='/__character_adjustments__/recipes/?candidate='+encodeURIComponent(data.template.id);proofLink.textContent='查看全部合法组合的深浅底对照';proofLink.style.cssText='display:inline-flex;min-height:44px;align-items:center;color:#c8b8ff';document.querySelector('#title').after(proofLink);
let editor,language='zh-CN';const loader=createPreviewLoader({assetRegistry:data.assets,verifyHash:true,baseURL:location.origin+'/'});
const button=document.querySelector('#export');
editor=createEditor({root:document.querySelector('#controls'),artwork:data.artwork,template:data.template,registry:[data.template],assetRegistry:data.assets,loader,reviewHarness:true,language,onStatus:status=>{button.disabled=!status.canExport;const copy=document.querySelector('#copy-prompt');if(copy)copy.disabled=!status.canExport;if(status.snapshot){document.querySelector('#prompt').textContent=buildArtworkEditPrompt({basePrompt:buildConfigurationPrompt({artwork:data.artwork,template:data.template,snapshot:status.snapshot,language}),artwork:data.artwork,language});}}});
document.querySelector('#preview').append(editor.previewElement);button.textContent='导出透明 PNG';button.onclick=()=>editor.exportPNG();
const copyButton=document.createElement('button');copyButton.id='copy-prompt';copyButton.disabled=button.disabled;copyButton.textContent='复制 Prompt';button.after(copyButton);copyButton.onclick=async()=>{await navigator.clipboard.writeText(document.querySelector('#prompt').textContent);copyButton.textContent=language==='en'?'Copied':'已复制';};
document.querySelector('#locale').onclick=()=>{language=language==='en'?'zh-CN':'en';editor.setLanguage(language);document.querySelector('#locale').textContent=language==='en'?'中文':'English';button.textContent=language==='en'?'Export transparent PNG':'导出透明 PNG';copyButton.textContent=language==='en'?'Copy Prompt':'复制 Prompt';};
window.__adjustmentReview={editor,data,loader};
</script></body></html>`);
        } catch (error) { next(error); }
      });
    }
  }] });
  await server.listen();
  return { server, manifest, origin: `http://127.0.0.1:${server.httpServer.address().port}` };
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  const manifestPath = process.argv[2] || 'openspec/changes/expand-character-gallery-and-adjustments/planning/character-production-20261011/templates/dots-blue-cloud-review.json';
  const { server, origin } = await startAdjustmentReview({ manifestPath, port: Number(process.env.DOTS_ADJUSTMENT_REVIEW_PORT || 5183) });
  console.log(`Candidate review: ${origin}/__character_adjustments__/`);
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, async () => { await server.close(); process.exit(0); });
}
