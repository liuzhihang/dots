import assert from 'node:assert/strict';
import {inflateSync} from 'node:zlib';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import {ARTWORKS,getAsset} from '../dist/studio-artwork-catalog.js';
function paeth(a,b,c) {
  const p=a+b-c, pa=Math.abs(p-a), pb=Math.abs(p-b), pc=Math.abs(p-c);
  return pa<=pb&&pa<=pc?a:pb<=pc?b:c;
}

/** Decode real 8-bit RGB/RGBA PNG scanlines so this check never substitutes a fake canvas. */
function readPngAlphaStats(bytes, label) {
  assert(bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),`${label}: PNG signature`);
  let offset=8,header=null;
  const imageData=[];
  while(offset+12<=bytes.length){
    const length=bytes.readUInt32BE(offset),type=bytes.toString('ascii',offset+4,offset+8),start=offset+8,end=start+length;
    assert(end+4<=bytes.length,`${label}: PNG chunk is truncated`);
    const data=bytes.subarray(start,end);
    if(type==='IHDR')header={width:data.readUInt32BE(0),height:data.readUInt32BE(4),bitDepth:data[8],colorType:data[9],interlace:data[12]};
    if(type==='IDAT')imageData.push(data);
    offset=end+4;
    if(type==='IEND')break;
  }
  assert(header,`${label}: PNG has no IHDR`);
  assert.equal(header.bitDepth,8,`${label}: expected 8-bit PNG`);
  assert.equal(header.interlace,0,`${label}: interlaced PNG is not supported by this verifier`);
  assert([2,6].includes(header.colorType),`${label}: expected RGB or RGBA PNG`);
  const channels=header.colorType===6?4:3, rowBytes=header.width*channels;
  const compressed=inflateSync(Buffer.concat(imageData));
  assert.equal(compressed.length,(rowBytes+1)*header.height,`${label}: decoded scanline byte count`);
  const pixels=Buffer.alloc(rowBytes*header.height);
  let inputOffset=0;
  for(let y=0;y<header.height;y++){
    const filter=compressed[inputOffset++],rowOffset=y*rowBytes,priorOffset=rowOffset-rowBytes;
    assert(filter<=4,`${label}: unsupported PNG filter ${filter}`);
    for(let x=0;x<rowBytes;x++){
      const raw=compressed[inputOffset++],left=x>=channels?pixels[rowOffset+x-channels]:0,up=y?pixels[priorOffset+x]:0,upperLeft=y&&x>=channels?pixels[priorOffset+x-channels]:0;
      const predictor=filter===0?0:filter===1?left:filter===2?up:filter===3?Math.floor((left+up)/2):paeth(left,up,upperLeft);
      pixels[rowOffset+x]=(raw+predictor)&255;
    }
  }
  let transparentPixels=0,opaquePixels=0,partialAlphaPixels=0,minX=header.width,minY=header.height,maxX=-1,maxY=-1;
  for(let y=0;y<header.height;y++)for(let x=0;x<header.width;x++){
    const alpha=header.colorType===6?pixels[y*rowBytes+x*channels+3]:255;
    if(alpha===0)transparentPixels++;
    else{
      if(alpha===255)opaquePixels++;else partialAlphaPixels++;
      minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);
    }
  }
  return {width:header.width,height:header.height,transparentPixels,opaquePixels,partialAlphaPixels,alphaBounds:maxX<0?null:{x:minX,y:minY,width:maxX-minX+1,height:maxY-minY+1}};
}

const folder=process.env.DOTS_EVIDENCE_DIR||'design/acceptance/current-20261007-v92/browser';
const report=JSON.parse(await fs.readFile(folder+'/report.json'));
assert.equal(report.downloads.length,ARTWORKS.length,'Every published original must have an actual browser download');
const records=[];
for(const artwork of ARTWORKS){
 const download=report.downloads.find(d=>d.artworkId===artwork.id);assert(download);
 const bytes=await fs.readFile(download.file),asset=getAsset(artwork.assetRefs.original),stats=readPngAlphaStats(bytes,artwork.id);
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),asset.sha256);
 assert.equal(stats.width,asset.width);assert.equal(stats.height,asset.height);
 assert(stats.transparentPixels>0&&stats.partialAlphaPixels>0&&stats.opaquePixels+stats.partialAlphaPixels>0);
 assert.equal(stats.transparentPixels,asset.alpha.transparentPixels);assert.equal(stats.partialAlphaPixels,asset.alpha.partialAlphaPixels);
 records.push({artworkId:artwork.id,sha256:asset.sha256,...stats});
}
const opaque=readPngAlphaStats(await fs.readFile('historical-runtime/retired-assets/dist/assets/characters/hero-background.png'),'opaque source negative');assert.equal(opaque.transparentPixels,0);
await fs.writeFile(folder+'/download-alpha.json',JSON.stringify({records,opaqueNegativeRejectedByCharacterContract:true,visualReview:'separate contrast contact-sheet review required; alpha alone does not prove no shadow'},null,2)+'\n');
console.log(`Actual browser PNG alpha verified: ${records.length}; opaque source remains outside Artwork pool.`);
