import assert from 'node:assert/strict';
import {inflateSync} from 'node:zlib';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {ARTWORKS,PREVIEW_ARTWORKS,getAsset} from '../dist/studio-artwork-catalog.js?v=100';
import {getTemplateForArtwork} from '../dist/studio-edit-templates.js?v=100';
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

const folder=resolveEvidenceDirectory('.artifacts/browser-acceptance');
const report=JSON.parse(await fs.readFile(folder+'/report.json'));
assert.equal(PREVIEW_ARTWORKS.length,0,'There are no preview-only Artworks in the published catalog.');
const originalDownloads=report.downloads.filter(item=>item.exportKind==='unchanged-default-original'||item.exportKind==='registered-original');
const editedDownloads=report.downloads.filter(item=>item.exportKind==='changed-successful-snapshot');
assert.equal(originalDownloads.length,ARTWORKS.length,'Every public Artwork journey has one actual original-byte browser download.');
assert.equal(editedDownloads.length,ARTWORKS.length,'Every public Artwork journey has one actual changed-Draft browser download.');
assert.equal(report.downloads.length,originalDownloads.length+editedDownloads.length,'Every download has an explicit supported export kind.');
for(const downloads of [originalDownloads,editedDownloads])assert.equal(new Set(downloads.map(item=>item.artworkId)).size,ARTWORKS.length,'Each export kind covers every registered identity once.');
const approvedRecords=[],templateRecords=[],editedRecords=[];
for(const artwork of ARTWORKS){
 const download=originalDownloads.find(d=>d.artworkId===artwork.id);assert(download,`${artwork.id}: actual browser download`);
 const bytes=await fs.readFile(download.file),digest=crypto.createHash('sha256').update(bytes).digest('hex'),stats=readPngAlphaStats(bytes,artwork.id),asset=getAsset(artwork.assetRefs.original),template=getTemplateForArtwork(artwork);
 assert.equal(digest,download.sha256,`${artwork.id}: actual downloaded bytes match the browser report.`);
 assert.equal(bytes.length,download.byteSize,`${artwork.id}: byte count matches the browser report.`);
 if(template){
  assert.equal(download.exportKind,'unchanged-default-original',`${artwork.id}: unchanged Template uses original bytes.`);
  assert.equal(download.templateId,template.id,`${artwork.id}: exact approved Template.`);
  assert(Number.isInteger(download.revision)&&download.revision>=0,`${artwork.id}: successful preview revision is recorded.`);
  templateRecords.push({artworkId:artwork.id,templateId:template.id,revision:download.revision,exportKind:download.exportKind,sha256:digest,byteSize:bytes.length,...stats});
 }else assert.equal(download.exportKind,'registered-original',`${artwork.id}: static Export kind.`);
 assert.equal(digest,asset.sha256,`${artwork.id}: unmodified Export is byte-identical to the registered original.`);
 assert.equal(stats.width,asset.width,`${artwork.id}: original PNG width.`);assert.equal(stats.height,asset.height,`${artwork.id}: original PNG height.`);
 if(asset.resourceKind==='transparent-character-still'){
  assert.equal(stats.colorType,6,`${artwork.id}: registered transparent original has RGBA encoding.`);
  assert(stats.transparentPixels>0&&stats.partialAlphaPixels+stats.opaquePixels>0,`${artwork.id}: original has transparent exterior and visible character pixels.`);
  assert.equal(stats.transparentPixels,asset.alpha.transparentPixels,`${artwork.id}: original transparent pixel count.`);
  assert.equal(stats.partialAlphaPixels,asset.alpha.partialAlphaPixels,`${artwork.id}: original partial-alpha pixel count.`);
 }else{
  assert.equal(asset.resourceKind,'opaque-character-still',`${artwork.id}: historical source kind is explicit.`);
  assert.equal(stats.colorType,2,`${artwork.id}: historical RGB encoding.`);
  assert.equal(stats.transparentPixels,0);assert.equal(stats.partialAlphaPixels,0);
  assert.equal(stats.opaquePixels,stats.width*stats.height,`${artwork.id}: historical opaque original.`);
 }
 approvedRecords.push({artworkId:artwork.id,status:asset.alpha?.hasTransparency?'approved-transparent-original':'historical-opaque-original',resourceKind:asset.resourceKind,sha256:digest,byteSize:bytes.length,...stats});
 const edited=editedDownloads.find(item=>item.artworkId===artwork.id);assert(edited,`${artwork.id}: actual changed-Draft download`);
 const editedBytes=await fs.readFile(edited.file),editedDigest=crypto.createHash('sha256').update(editedBytes).digest('hex'),editedStats=readPngAlphaStats(editedBytes,`${artwork.id}: changed Draft`);
 assert.equal(editedDigest,edited.sha256);assert.equal(editedDigest,edited.canvasSha256,`${artwork.id}: export matches the successful preview snapshot.`);assert.notEqual(editedDigest,asset.sha256);
 assert.equal(editedBytes.length,edited.byteSize);assert.equal(edited.templateId,template.id);assert(Number.isInteger(edited.revision)&&edited.revision>download.revision);assert(edited.changedFields.length>0);
 assert.equal(editedStats.colorType,6);assert.equal(editedStats.width,template.canvas.width);assert.equal(editedStats.height,template.canvas.height);
 // Compositing registered soft masks can leave interior alpha at 254; actual
 // transparent exterior and visible character pixels are the export contract.
 assert(editedStats.transparentPixels>0&&editedStats.partialAlphaPixels+editedStats.opaquePixels>0,`${artwork.id}: changed PNG has actual transparent exterior and visible character pixels.`);
 editedRecords.push({artworkId:artwork.id,templateId:template.id,revision:edited.revision,exportKind:edited.exportKind,sha256:editedDigest,byteSize:editedBytes.length,...editedStats});
}
assert.equal(templateRecords.length,ARTWORKS.filter(artwork=>getTemplateForArtwork(artwork)).length,'Each eligible template baseline has an actual original-byte download.');
const opaque=readPngAlphaStats(await fs.readFile('historical-runtime/retired-assets/dist/assets/characters/hero-background.png'),'opaque source negative');assert.equal(opaque.transparentPixels,0);
await fs.writeFile(folder+'/download-alpha.json',JSON.stringify({approvedRecords,templateRecords,editedRecords,approvedOriginalCount:approvedRecords.length,approvedTemplateCount:templateRecords.length,changedDraftCount:editedRecords.length,previewOnlyCount:PREVIEW_ARTWORKS.length,opaqueNegativeAllPixelsOpaque:true,visualReview:'alpha and exact-byte checks complement rendered dark/light browser review; alpha alone does not prove no shadow'},null,2)+'\n');
console.log(`Actual browser PNG downloads verified: ${approvedRecords.length} registered originals and ${editedRecords.length} changed Drafts; exact source/snapshot hashes and real PNG alpha verified for every identity; no preview-only artworks.`);
