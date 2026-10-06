#!/usr/bin/env node
import assert from 'node:assert/strict';
import {inflateSync} from 'node:zlib';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {createCharacter, setCharacterValue, validateConfig} from '../dist/studio-model.js';
import {getTemplateAssetStates, resolveProjectComposition, resolveTemplateComposition} from '../dist/studio-composition-resolver.js';
import {TEMPLATE_BACKGROUND_MODES, buildTemplateCoverageCases, validateTransparentOutputAlpha} from '../dist/studio-composition-coverage.js';

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

assert.deepEqual(TEMPLATE_BACKGROUND_MODES,['transparent']);
const fresh=createCharacter();
assert.equal(fresh.background,'transparent','new characters default to transparent output');
assert.throws(()=>setCharacterValue(fresh,'background','solid'),/背景|透明/,'the background setter stays removed');
assert.throws(()=>setCharacterValue(fresh,'colors.background','#FFFFFF'),/背景|透明/,'background color cannot be edited');

const states=getTemplateAssetStates();
const coverage=buildTemplateCoverageCases({states,resolver:resolveTemplateComposition});
assert.equal(coverage.inventory.stateCount,22);
assert.equal(coverage.inventory.backgroundCount,1);
assert.equal(coverage.inventory.outputCount,22);
assert(coverage.cases.every(item=>item.background==='transparent'&&item.config.background==='transparent'));

const templateState=states.find(item=>item.assetRefs.length&&item.config);
assert(templateState,'a registered template state exists');
const legacyColor='#B8A5D8';
const historicalCharacter=validateConfig({...templateState.config,background:'solid',colors:{...templateState.config.colors,background:legacyColor}});
assert.equal(historicalCharacter.background,'solid','strict v10 parsing preserves an existing legal background field as metadata');
assert.equal(historicalCharacter.colors.background,legacyColor,'strict v10 parsing preserves the stored color metadata');
const historicalResolution=resolveTemplateComposition({character:historicalCharacter,artworkId:templateState.artworkId,recipeId:templateState.recipeId});
assert.equal(historicalResolution.availability,'available');
assert.equal(historicalResolution.composition.inputs.background,'solid','existing composition metadata is not silently rewritten');
assert.equal(historicalResolution.composition.inputs.backgroundColor,legacyColor,'existing composition color metadata is not silently rewritten');
assert.equal(historicalResolution.renderPlan.background.mode,'transparent','render plans remain transparent regardless of historical metadata');
const project={format:'dot-studio-project',version:2,character:historicalCharacter,creation:{mode:'composer',artworkId:templateState.artworkId,composition:historicalResolution.composition}};
const restored=resolveProjectComposition(project);
assert.deepEqual(restored.composition,historicalResolution.composition,'a current v2 composition reference round-trips exactly');
assert.equal(restored.renderPlan.background.mode,'transparent','restored role output stays transparent');

const transparentSource=templateState.assets.map(asset=>({asset,stats:readPngAlphaStats(readFileSync(resolve('dist',asset.src.slice(2))),asset.src)})).find(item=>item.stats.transparentPixels>0&&item.stats.opaquePixels+item.stats.partialAlphaPixels>0);
assert(transparentSource,'a real registered PNG contains both visible pixels and transparent alpha');
assert.equal(validateTransparentOutputAlpha(transparentSource.stats).valid,true,'alpha validation accepts pixel counts decoded from actual PNG bytes');
const opaqueBackgroundStats=readPngAlphaStats(readFileSync(resolve('dist/assets/characters/hero-background.png')),'hero background fixture');
const opaqueCheck=validateTransparentOutputAlpha(opaqueBackgroundStats);
assert.equal(opaqueCheck.valid,false,'an actual opaque PNG background is rejected by the same pixel contract');
assert(opaqueCheck.errors.some(message=>message.includes('没有 alpha 为 0')));

console.log(JSON.stringify({result:'pass',templateStates:coverage.inventory.stateCount,transparentTemplateOutputs:coverage.inventory.outputCount,backgroundCount:coverage.inventory.backgroundCount,realPngAlpha:{positiveSource:transparentSource.asset.id,positiveAlpha:transparentSource.stats.transparentPixels,opaqueNegativeAlpha:opaqueBackgroundStats.transparentPixels,opaqueRejected:true},projectMetadataRoundTrip:'pass',backgroundSetterRemoved:true},null,2));
