import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {verifySafety} from './verify-implementation-safety.mjs';
const root=path.resolve(import.meta.dirname,'..');
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
export async function listTree(dir){let result=[];for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);assert(!e.isSymbolicLink(),`Symlink is not a publish file: ${p}`);result.push(...e.isDirectory()?await listTree(p):[p])}return result.sort()}
export function checkInventory(actual,expected){assert.equal(new Set(expected).size,expected.length,'Duplicate publish path');for(const p of expected)assert(/^dist\/(?!.*(?:\.\.|\\)).+/.test(p),`Unsafe published path: ${p}`);assert.deepEqual(actual.slice().sort(),expected.slice().sort(),'Publish tree differs from explicit manifest (missing or orphan file)')}
export async function build(){
 const manifest=JSON.parse(await fs.readFile(path.join(root,'design/static-publish-manifest.json')));
 const actual=(await listTree(path.join(root,'dist'))).map(p=>path.relative(root,p));checkInventory(actual,manifest.files);
 const modules=actual.filter(p=>/\.(?:js|css|html)$/.test(p));const seen=new Set();const refs=new Map();
 for(const p of modules){const source=await fs.readFile(path.join(root,p),'utf8');if(p.endsWith('.js'))execFileSync(process.execPath,['--check',path.join(root,p)]);
  const dependencies=[...source.matchAll(/(?:from\s*|import\s*\()(['"])(\.\/[^'"]+\.js\?v=\d+)\1/g)].map(x=>x[2]);
  if(p.endsWith('.html'))dependencies.push(...[...source.matchAll(/(?:src|href)="\.\/(studio[^"?]+)\?v=(\d+)"/g)].map(x=>`./${x[1]}?v=${x[2]}`));
  for(const ref of dependencies){assert(ref.endsWith('?v=96'),`Mixed module cache: ${p} ${ref}`);const dest=path.posix.join(path.posix.dirname(p),ref.split('?')[0]);assert(actual.includes(dest),`Missing import ${dest}`)}
  refs.set(p,dependencies.map(ref=>path.posix.join(path.posix.dirname(p),ref.split('?')[0])));
 }
 const visit=p=>{if(seen.has(p))return;seen.add(p);for(const d of refs.get(p)||[])visit(d)};visit('dist/index.html');for(const p of modules)assert(seen.has(p),`Orphan runtime module: ${p}`);
 const html=await fs.readFile(path.join(root,'dist/index.html'),'utf8');assert(html.includes('data-cache="96"'),'HTML cache96');
 const catalog=await import('../dist/studio-artwork-catalog.js');assert.equal(catalog.CATALOG_REVISION,'artwork-catalog-20261009-v96');
 for(const artwork of catalog.ARTWORKS.filter(catalog.isEligible)){const asset=catalog.getAsset(artwork.assetRefs.original);assert(asset);const bytes=await fs.readFile(path.join(root,'dist',asset.path.slice(2)));assert.equal(hash(bytes),asset.sha256,`Original ${artwork.id}`)}
 const {BRAND_ASSETS}=await import('../dist/studio-content.js');const expectedAssets=new Set();for(const asset of [...catalog.ASSETS,...BRAND_ASSETS].filter(a=>a.path)){const p=`dist/${asset.path.replace(/^\.\//,'')}`;expectedAssets.add(p);assert(actual.includes(p),`Registered asset missing ${asset.id}`);assert.equal(hash(await fs.readFile(path.join(root,p))),asset.sha256,`Asset hash ${asset.id}`)}
 const scenes=await import('../dist/studio-scenes.js');assert.equal(catalog.getArtwork(scenes.HERO_ARTWORK.id)?.version,scenes.HERO_ARTWORK.version,'Hero Prompt binding');for(const unit of scenes.SCENE_UNITS)for(const spot of unit.characters)assert.equal(catalog.getArtwork(spot.artworkId)?.version,spot.artworkVersion,`Scene version ${spot.artworkId}`);for(const resource of [scenes.SCENE_BACKGROUND,...scenes.SCENE_UNITS]){const p=`dist/${resource.src.replace(/^\.\//,'')}`;expectedAssets.add(p);assert(actual.includes(p),`Scene resource missing ${p}`);if(resource.sha256)assert.equal(hash(await fs.readFile(path.join(root,p))),resource.sha256,`Scene hash ${p}`)}
 for(const match of html.matchAll(/(?:src|href)="\.\/(assets\/[^"?#]+)"/g))expectedAssets.add(`dist/${match[1]}`);
 checkInventory(actual.filter(p=>p.startsWith('dist/assets/')),[...expectedAssets]);
 const safety=await verifySafety();const files=[];for(const p of actual){const b=await fs.readFile(path.join(root,p));files.push({path:p,bytes:b.length,sha256:hash(b)})}
 const report={revision:96,evidenceDirectory:'design/acceptance/current-20261009-v96',scope:'local static engineering validation, not art approval or deployment',fileCount:files.length,files,safety};
 await fs.writeFile(path.join(root,'design/acceptance/current-20261009-v96/build-report.json'),JSON.stringify(report,null,2)+'\n');return report;
}
if(process.argv[1]===import.meta.filename){const r=await build();console.log(`Static v96 build: ${r.fileCount} files; historical ${r.safety.protectedCount} hashes preserved.`)}
