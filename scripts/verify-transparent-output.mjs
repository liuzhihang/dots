import assert from 'node:assert/strict';
import {inflateSync} from 'node:zlib';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import {ARTWORKS,PREVIEW_ARTWORKS,getAsset} from '../dist/studio-artwork-catalog.js?v=98';
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
  return {width:header.width,height:header.height,colorType:header.colorType,transparentPixels,opaquePixels,partialAlphaPixels,alphaBounds:maxX<0?null:{x:minX,y:minY,width:maxX-minX+1,height:maxY-minY+1}};
}

const folder=process.env.DOTS_EVIDENCE_DIR||'design/acceptance/current-20261009-v98/browser';
const report=JSON.parse(await fs.readFile(folder+'/report.json'));
const expectedArtworks=[...ARTWORKS,...PREVIEW_ARTWORKS];
assert.equal(PREVIEW_ARTWORKS.length,2,'The two new local candidates remain separately classified.');
assert.equal(report.downloads.length,expectedArtworks.length,'Every approved and pending detail URL must have an actual browser download');
assert.equal(new Set(report.downloads.map(item=>item.artworkId)).size,expectedArtworks.length,'Every actual browser download belongs to a unique registered identity.');
const approvedRecords=[];
for(const artwork of ARTWORKS){
 const download=report.downloads.find(d=>d.artworkId===artwork.id);assert(download);
 const bytes=await fs.readFile(download.file),asset=getAsset(artwork.assetRefs.original),stats=readPngAlphaStats(bytes,artwork.id);
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),asset.sha256);
 assert.equal(stats.width,asset.width);assert.equal(stats.height,asset.height);
 assert(stats.transparentPixels>0&&stats.partialAlphaPixels>0&&stats.opaquePixels+stats.partialAlphaPixels>0);
 assert.equal(stats.transparentPixels,asset.alpha.transparentPixels);assert.equal(stats.partialAlphaPixels,asset.alpha.partialAlphaPixels);
 approvedRecords.push({artworkId:artwork.id,status:'approved',sha256:asset.sha256,...stats});
}
const previewRecords=[];
for(const artwork of PREVIEW_ARTWORKS){
 const download=report.downloads.find(d=>d.artworkId===artwork.id);assert(download,`${artwork.id}: actual preview download`);
 const asset=getAsset(artwork.assetRefs.original),bytes=await fs.readFile(download.file),stats=readPngAlphaStats(bytes,artwork.id);
 assert.equal(artwork.artApproval.status,'pending',`${artwork.id}: remains pending art review`);
 assert.equal(asset.artApproval.status,'pending',`${artwork.id}: its source remains pending art review`);
 assert.equal(download.sha256,asset.sha256,`${artwork.id}: browser report names its registered local source hash`);
 assert.equal(download.byteSize,asset.byteSize,`${artwork.id}: browser report names its exact byte count`);
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),asset.sha256,`${artwork.id}: actual downloaded bytes match its candidate hash`);
 assert.equal(stats.width,asset.width,`${artwork.id}: PNG width`);assert.equal(stats.height,asset.height,`${artwork.id}: PNG height`);
 const isTransparent=asset.resourceKind==='transparent-character-still';
 assert.equal(asset.resourceKind,isTransparent?'transparent-character-still':'opaque-character-still',`${artwork.id}: pending resource kind is explicit`);
 assert.equal(stats.colorType,isTransparent?6:2,`${artwork.id}: PNG encoding matches its pending resource kind`);
 assert.equal(asset.alpha.hasAlpha,isTransparent,`${artwork.id}: alpha-channel metadata matches its PNG encoding`);
 assert.equal(asset.alpha.hasTransparency,isTransparent,`${artwork.id}: transparency metadata matches its PNG encoding`);
 if(isTransparent){
  assert(stats.transparentPixels>0&&stats.partialAlphaPixels>0&&stats.opaquePixels>0,`${artwork.id}: actual transparent PNG includes transparent, partial-alpha, and opaque pixels`);
  assert.equal(stats.transparentPixels,asset.alpha.transparentPixels,`${artwork.id}: actual transparent pixel count`);
  assert.equal(stats.partialAlphaPixels,asset.alpha.partialAlphaPixels,`${artwork.id}: actual partial-alpha pixel count`);
 }else{
  assert.equal(stats.transparentPixels,0,`${artwork.id}: opaque character still has no transparent pixels`);
  assert.equal(stats.partialAlphaPixels,0,`${artwork.id}: opaque character still has no partial-alpha pixels`);
  assert.equal(stats.opaquePixels,stats.width*stats.height,`${artwork.id}: every pixel in the opaque source is opaque`);
 }
 previewRecords.push({artworkId:artwork.id,status:'pending-user-art-approval',resourceKind:asset.resourceKind,alphaMetadata:asset.alpha,sha256:asset.sha256,...stats});
}
const opaque=readPngAlphaStats(await fs.readFile('historical-runtime/retired-assets/dist/assets/characters/hero-background.png'),'opaque source negative');assert.equal(opaque.transparentPixels,0);
await fs.writeFile(folder+'/download-alpha.json',JSON.stringify({approvedRecords,previewRecords,approvedCount:approvedRecords.length,pendingPreviewCount:previewRecords.length,opaqueNegativeAllPixelsOpaque:true,visualReview:'separate contrast contact-sheet review required; alpha alone does not prove no shadow'},null,2)+'\n');
console.log(`Actual browser PNG downloads verified: ${approvedRecords.length} approved transparent originals; ${previewRecords.length} pending previews with their registered RGB/RGBA encoding, dimensions and exact bytes; opaque negative excluded from approved Artwork.`);
