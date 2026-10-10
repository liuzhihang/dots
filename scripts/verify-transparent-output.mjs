import assert from 'node:assert/strict';
import {inflateSync} from 'node:zlib';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import {ARTWORKS,PREVIEW_ARTWORKS,getAsset} from '../dist/studio-artwork-catalog.js?v=99';
import {getTemplateForArtwork} from '../dist/studio-edit-templates.js?v=99';
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

const folder=process.env.DOTS_EVIDENCE_DIR||'design/acceptance/current-20261010-v99/cr-polish-20261011/browser';
const report=JSON.parse(await fs.readFile(folder+'/report.json'));
assert.equal(PREVIEW_ARTWORKS.length,0,'There are no preview-only Artworks in the published catalog.');
assert.equal(report.downloads.length,ARTWORKS.length,'Every public Artwork journey has an actual browser download.');
assert.equal(new Set(report.downloads.map(item=>item.artworkId)).size,ARTWORKS.length,'Every actual browser download belongs to a unique registered identity.');
const approvedRecords=[],templateRecords=[];
for(const artwork of ARTWORKS){
 const download=report.downloads.find(d=>d.artworkId===artwork.id);assert(download,`${artwork.id}: actual browser download`);
 const bytes=await fs.readFile(download.file),digest=crypto.createHash('sha256').update(bytes).digest('hex'),stats=readPngAlphaStats(bytes,artwork.id),asset=getAsset(artwork.assetRefs.original),template=getTemplateForArtwork(artwork);
 assert.equal(digest,download.sha256,`${artwork.id}: actual downloaded bytes match the browser report.`);
 assert.equal(bytes.length,download.byteSize,`${artwork.id}: byte count matches the browser report.`);
 if(template){
  assert.equal(download.exportKind,'successful-template-revision',`${artwork.id}: approved Template export kind.`);
  assert.equal(download.templateId,template.id,`${artwork.id}: browser report identifies the exact approved Template.`);
  assert.equal(download.canvasSha256,digest,`${artwork.id}: downloaded bytes match the successful preview Canvas.`);
  assert(Number.isInteger(download.revision)&&download.revision>=0,`${artwork.id}: exported revision is recorded.`);
  assert.equal(stats.width,template.canvas.width,`${artwork.id}: edited PNG width.`);assert.equal(stats.height,template.canvas.height,`${artwork.id}: edited PNG height.`);
  assert.equal(stats.colorType,6,`${artwork.id}: edited export retains an RGBA alpha channel.`);
  assert(stats.transparentPixels>0&&stats.partialAlphaPixels>0&&stats.opaquePixels>0,`${artwork.id}: edited PNG contains transparent, partial-alpha, and opaque pixels.`);
  templateRecords.push({artworkId:artwork.id,templateId:template.id,revision:download.revision,sha256:digest,byteSize:bytes.length,...stats});
 }else{
  assert.equal(download.exportKind,'registered-original',`${artwork.id}: static Export kind.`);
  assert.equal(digest,asset.sha256,`${artwork.id}: static Export is byte-identical to the registered original.`);
  assert.equal(stats.width,asset.width,`${artwork.id}: source PNG width.`);assert.equal(stats.height,asset.height,`${artwork.id}: source PNG height.`);
  if(asset.resourceKind==='transparent-character-still'){
   assert.equal(stats.colorType,6,`${artwork.id}: registered transparent source has RGBA encoding.`);
   assert(stats.transparentPixels>0&&stats.partialAlphaPixels>0&&stats.opaquePixels>0,`${artwork.id}: source contains transparent, partial-alpha, and opaque pixels.`);
   assert.equal(stats.transparentPixels,asset.alpha.transparentPixels,`${artwork.id}: original transparent pixel count.`);
   assert.equal(stats.partialAlphaPixels,asset.alpha.partialAlphaPixels,`${artwork.id}: original partial-alpha pixel count.`);
  }else{
   assert.equal(asset.resourceKind,'opaque-character-still',`${artwork.id}: static source kind is explicit.`);
   assert.equal(stats.colorType,2,`${artwork.id}: registered opaque source has RGB encoding.`);
   assert.equal(stats.transparentPixels,0,`${artwork.id}: original has no transparent pixels.`);
   assert.equal(stats.partialAlphaPixels,0,`${artwork.id}: original has no partial-alpha pixels.`);
   assert.equal(stats.opaquePixels,stats.width*stats.height,`${artwork.id}: every pixel in the opaque source is opaque.`);
  }
  approvedRecords.push({artworkId:artwork.id,status:'approved-static-original',resourceKind:asset.resourceKind,sha256:digest,byteSize:bytes.length,...stats});
 }
}
assert.equal(templateRecords.length,2,'Both publicly approved editable Templates have a real exported PNG.');
const opaque=readPngAlphaStats(await fs.readFile('historical-runtime/retired-assets/dist/assets/characters/hero-background.png'),'opaque source negative');assert.equal(opaque.transparentPixels,0);
await fs.writeFile(folder+'/download-alpha.json',JSON.stringify({approvedRecords,templateRecords,approvedStaticCount:approvedRecords.length,approvedTemplateCount:templateRecords.length,previewOnlyCount:PREVIEW_ARTWORKS.length,opaqueNegativeAllPixelsOpaque:true,visualReview:'alpha and exact-byte checks complement rendered dark/light browser review; alpha alone does not prove no shadow'},null,2)+'\n');
console.log(`Actual browser PNG downloads verified: ${approvedRecords.length} static originals and ${templateRecords.length} approved-template revisions with PNG alpha; no preview-only artworks; opaque negative excluded from approved Artwork.`);
