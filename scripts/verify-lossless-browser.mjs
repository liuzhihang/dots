import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {DELIVERY_ASSETS} from '../dist/studio-delivery-assets.js?v=111';

const output=resolveEvidenceDirectory('.artifacts/lossless-browser');
await fs.mkdir(output,{recursive:true});
const server=await createServer({configFile:path.resolve('vite.config.mjs'),server:{host:'127.0.0.1',port:0,strictPort:true,hmr:false}});
await server.listen();
const browser=await launchBrowser({headless:true});
const page=await browser.newPage();
const checks=[];
try {
  const origin=`http://127.0.0.1:${server.httpServer.address().port}`;
  await page.goto(origin);
  const unique=[...new Map(DELIVERY_ASSETS.map(row=>[row.source.sha256,row])).values()];
  for (const row of unique) {
    const result=await page.evaluate(async row=>{
      const pixels=async resource=>{
        const response=await fetch(resource.path);
        if(!response.ok)throw Error(`Missing comparison input: ${resource.path}`);
        const bitmap=await createImageBitmap(await response.blob(), {premultiplyAlpha: 'none'});
        const canvas=document.createElement('canvas');canvas.width=bitmap.width;canvas.height=bitmap.height;
        const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(bitmap,0,0);bitmap.close();
        const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;
        const hash=[...new Uint8Array(await crypto.subtle.digest('SHA-256',data))].map(v=>v.toString(16).padStart(2,'0')).join('');
        canvas.width=canvas.height=0;
        return hash;
      };
      const sourceHash=await pixels(row.source),deliveryHash=await pixels(row);
      return {sourcePath:row.source.path,deliveryPath:row.path,sourceHash,deliveryHash,equal:sourceHash===deliveryHash};
    },row);
    checks.push(result);
    assert(result.equal,`Browser Canvas pixels differ: ${row.source.path}`);
    if(checks.length%40===0)console.log(`Browser lossless equivalence: ${checks.length}/${unique.length}`);
  }
  await fs.writeFile(path.join(output,'report.json'),JSON.stringify({status:'passed',browser:browser.version(),physicalDevice:false,
    sourcePathCount:DELIVERY_ASSETS.length,uniqueImageCount:checks.length,comparison:'Browser createImageBitmap (premultiplyAlpha:none) plus Canvas 2D RGBA SHA-256',checks},null,2)+'\n');
  console.log(`Browser lossless equivalence: ${checks.length} unique image pairs (${DELIVERY_ASSETS.length} source paths) are pixel-identical.`);
} finally {await browser.close();await server.close();}
