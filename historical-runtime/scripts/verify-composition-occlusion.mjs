import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {webcrypto} from 'node:crypto';
import {getTrustedModularCatalog} from '../dist/studio-composition-catalog.js';
import {makeProject,setModularProject} from '../dist/studio-creation.js';
import {createLookCharacter} from '../dist/studio-model.js';
import {resolveProjectComposition} from '../dist/studio-composition-resolver.js';
import {drawResolvedDynamicPart,LayeredComposer} from '../dist/studio-composer.js';

if(!globalThis.crypto?.subtle)Object.defineProperty(globalThis,'crypto',{value:webcrypto,configurable:true});

class FakeContext {
  constructor(canvas){this.canvas=canvas;this.events=[];this.clipPaths=[];this.path={rects:[],polygons:[]};this.currentPolygon=null;this.drawCalls=0;this.failAtDraw=0;this.globalAlpha=1;this.transform=[1,0,0,1,0,0];}
  clearRect(...args){this.events.push(['clearRect',...args]);}
  save(){this.events.push(['save']);this.saved={transform:[...this.transform],globalAlpha:this.globalAlpha};}
  restore(){this.events.push(['restore']);if(this.saved){this.transform=this.saved.transform;this.globalAlpha=this.saved.globalAlpha;this.saved=null;}}
  setTransform(...values){this.transform=values;this.events.push(['setTransform',...values]);}
  beginPath(){this.path={rects:[],polygons:[]};this.currentPolygon=null;this.events.push(['beginPath']);}
  rect(...args){this.path.rects.push(args);this.events.push(['rect',...args]);}
  moveTo(...args){this.currentPolygon=[{x:args[0],y:args[1]}];this.path.polygons.push(this.currentPolygon);this.events.push(['moveTo',...args]);}
  lineTo(...args){this.currentPolygon?.push({x:args[0],y:args[1]});this.events.push(['lineTo',...args]);}
  closePath(){this.events.push(['closePath']);}
  clip(...args){this.clipPaths.push({rule:args[0],...structuredClone(this.path)});this.events.push(['clip',...args]);}
  drawImage(...args){
    this.drawCalls++;this.events.push(['drawImage',...args]);
    if(this.failAtDraw&&this.drawCalls===this.failAtDraw)throw new Error('fake canvas draw failure');
  }
}

class FakeCanvas {
  static instances=[];
  static failNextContextAt=0;
  constructor(){
    this.width=300;this.height=150;this.dataset={};this.style={};this.attributes={};this.removed=false;
    this.context=new FakeContext(this);
    if(FakeCanvas.failNextContextAt){this.context.failAtDraw=FakeCanvas.failNextContextAt;FakeCanvas.failNextContextAt=0;}
    FakeCanvas.instances.push(this);
  }
  getContext(kind){return kind==='2d'?this.context:null;}
  setAttribute(name,value){this.attributes[name]=value;}
  append(){}
  remove(){this.removed=true;}
}

const image={naturalWidth:100,naturalHeight:100};
const common={image,width:200,height:100,part:{
  id:'band',assetId:'trusted-headphones',z:20,
  sourceRect:{x:7,y:11,width:30,height:40},
  transform:{a:.5,b:.2,c:-.1,d:.75,e:.25,f:.1},
  occlusion:{mode:'above-base',covers:['base/human'],cutouts:[[
    {x:.2,y:.1},{x:.45,y:.1},{x:.45,y:.4},{x:.2,y:.4}
  ]]}
}};

const clipContext=new FakeContext({width:200,height:100});
clipContext.globalAlpha=.73;
drawResolvedDynamicPart(clipContext,common);
const events=clipContext.events;
assert.deepEqual(events.map(item=>item[0]),[
  'save','setTransform','beginPath','rect','moveTo','lineTo','lineTo','lineTo','closePath','clip','setTransform','drawImage','restore'
],'the full-canvas evenodd clip is built before switching to the part transform and drawing');
assert.deepEqual(events[1],['setTransform',1,0,0,1,0,0],'the clip path is authored in default canvas pixel coordinates');
assert.deepEqual(events[3],['rect',0,0,200,100],'the evenodd path starts with the whole canvas as its outside contour');
assert.deepEqual(events[4],['moveTo',40,10],'normalized cutout coordinates scale to canvas pixels');
assert.deepEqual(events[9],['clip','evenodd'],'cutouts are excluded using the evenodd fill rule');
assert.deepEqual(events[10],['setTransform',100,20,-20,75,50,10],'the resolver affine matrix is applied only after clipping');
assert.deepEqual(events[11].slice(1),[image,7,11,30,40,0,0,30,40],'the original source rectangle is drawn with its affine transform');
assert.equal(clipContext.globalAlpha,.73,'occlusion clipping preserves the caller alpha');
assert(!events.some(item=>item[0]==='fillRect'||item[0]==='clearRect'),'cutout rendering does not fill a background or erase the base');

const overlapCutouts=[
  [{x:.2,y:.1},{x:.5,y:.1},{x:.5,y:.5},{x:.2,y:.5}],
  [{x:.35,y:.2},{x:.65,y:.2},{x:.65,y:.6},{x:.35,y:.6}]
];
const overlapContext=new FakeContext({width:200,height:100});
drawResolvedDynamicPart(overlapContext,{...common,part:{...common.part,occlusion:{...common.part.occlusion,cutouts:overlapCutouts}}});
assert.deepEqual(overlapContext.events.map(item=>item[0]),[
  'save','setTransform','beginPath','rect','moveTo','lineTo','lineTo','lineTo','closePath','clip',
  'setTransform','beginPath','rect','moveTo','lineTo','lineTo','lineTo','closePath','clip',
  'setTransform','drawImage','restore'
],'overlapping cutouts are applied as two independent full-canvas clip intersections before the affine draw');
assert.deepEqual(overlapContext.clipPaths.map(({rule,rects,polygons})=>({rule,rects,polygons})),[
  {rule:'evenodd',rects:[[0,0,200,100]],polygons:[[{x:40,y:10},{x:100,y:10},{x:100,y:50},{x:40,y:50}]]},
  {rule:'evenodd',rects:[[0,0,200,100]],polygons:[[{x:70,y:20},{x:130,y:20},{x:130,y:60},{x:70,y:60}]]}
],'each clip has one hole, so overlapping masks combine through clip intersection');
const pointInPolygon=(point,polygon)=>{
  let inside=false;
  for(let index=0,previous=polygon.length-1;index<polygon.length;previous=index++){
    const a=polygon[index],b=polygon[previous];
    if((a.y>point.y)!==(b.y>point.y)&&point.x<(b.x-a.x)*(point.y-a.y)/(b.y-a.y)+a.x)inside=!inside;
  }
  return inside;
};
const pointInsideCanvas=point=>point.x>=0&&point.x<=200&&point.y>=0&&point.y<=100;
const includedBySequentialClips=point=>pointInsideCanvas(point)&&overlapContext.clipPaths.every(clip=>!clip.polygons.some(polygon=>pointInPolygon(point,polygon)));
const overlapCutoutsPx=overlapCutouts.map(polygon=>polygon.map(item=>({x:item.x*200,y:item.y*100})));
const includedBySingleCombinedEvenodd=point=>pointInsideCanvas(point)&&((1+overlapCutoutsPx.filter(polygon=>pointInPolygon(point,polygon)).length)%2===1);
const overlapPoint={x:80,y:30};
assert.equal(includedBySingleCombinedEvenodd(overlapPoint),true,'one evenodd path would incorrectly reveal the area covered by both masks');
assert.equal(includedBySequentialClips(overlapPoint),false,'sequential clips exclude the intersection of overlapping masks');
assert.equal(includedBySequentialClips({x:50,y:15}),false,'the first mask still excludes its non-overlapping area');
assert.equal(includedBySequentialClips({x:120,y:55}),false,'the second mask still excludes its non-overlapping area');
assert.equal(includedBySequentialClips({x:170,y:80}),true,'pixels outside every mask remain drawable');

const plainContext=new FakeContext({width:200,height:100});
drawResolvedDynamicPart(plainContext,{...common,part:{...common.part,occlusion:{mode:'above-base',covers:['base/human']}}});
assert.deepEqual(plainContext.events.map(item=>item[0]),['save','setTransform','drawImage','restore'],'parts without registered cutouts preserve the existing draw path');

const invalidCutouts=[
  {label:'missing polygon points',cutouts:[[null,{x:.2,y:.2},{x:.3,y:.2}]]},
  {label:'too few points',cutouts:[[{x:.2,y:.2},{x:.3,y:.2}]]},
  {label:'non-finite point',cutouts:[[{x:.2,y:.2},{x:NaN,y:.3},{x:.3,y:.4}]]},
  {label:'out-of-bounds point',cutouts:[[{x:.2,y:.2},{x:1.01,y:.3},{x:.3,y:.4}]]},
  {label:'zero-area polygon',cutouts:[[{x:.1,y:.2},{x:.4,y:.2},{x:.8,y:.2}]]},
  {label:'self-intersection',cutouts:[[{x:.1,y:.1},{x:.9,y:.8},{x:.1,y:.8},{x:.8,y:.1}]]},
  {label:'overlapping adjacent edges',cutouts:[[{x:.1,y:.1},{x:.9,y:.1},{x:.4,y:.1},{x:.5,y:.8}]]},
  {label:'non-array cutouts',cutouts:{points:[]}}
];
for(const test of invalidCutouts){
  const invalidContext=new FakeContext({width:200,height:100});
  assert.throws(()=>drawResolvedDynamicPart(invalidContext,{...common,part:{...common.part,occlusion:{...common.part.occlusion,cutouts:test.cutouts}}}),/遮挡裁切|可信多边形/,`${test.label} is rejected`);
  assert.deepEqual(invalidContext.events,[],`${test.label} is rejected before touching canvas state`);
}

const catalog=getTrustedModularCatalog();
const recipe=catalog.recipes.find(item=>item.baseId.includes('candidate-humans-20261005')&&item.assetIds.includes('pilot-headphones-v1'));
assert(recipe,'the real registered Human headphone recipe exists');
const base=catalog.baseStates.find(item=>item.id===recipe.baseId);
const project=setModularProject(makeProject(createLookCharacter(base.artworkId),{mode:'composer',artworkId:base.artworkId}),recipe.id);
const resolution=resolveProjectComposition(project);
assert.equal(resolution.availability,'available',resolution.reason);
assert.equal(resolution.composition.kind,'modular');
const resolvedHeadphoneParts=resolution.renderPlan.modules.find(module=>module.id==='pilot-headphones-v1')?.parts??[];
assert.equal(resolvedHeadphoneParts.length,3,'the trusted Human headphone recipe resolves its three independent parts');
assert(resolvedHeadphoneParts.every(part=>Array.isArray(part.occlusion.cutouts)&&part.occlusion.cutouts.length>0),'the trusted geometry profile supplies code-owned hair/ear cutouts for each part');
const assetsBySrc=new Map(resolution.stageMetadata.map(stage=>[stage.asset.src,stage.asset]));

globalThis.document={createElement(kind){assert.equal(kind,'canvas');return new FakeCanvas();}};
globalThis.Image=class FakeImage {
  set src(value){
    this._src=value;
    const asset=assetsBySrc.get(value);
    this.naturalWidth=asset?.width??0;this.naturalHeight=asset?.height??0;
  }
  get src(){return this._src;}
  decode(){return Promise.resolve();}
};
globalThis.fetch=async source=>{
  const asset=assetsBySrc.get(source);
  if(!asset)return {ok:false,arrayBuffer:async()=>new ArrayBuffer(0)};
  const relative=source.startsWith('./')?source.slice(2):source.replace(/^\//,'');
  const bytes=await readFile(path.resolve('dist',relative));
  return {ok:true,arrayBuffer:async()=>bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength)};
};

FakeCanvas.instances=[];
const resolvedComposer=new LayeredComposer({append(){}});
assert.equal(await resolvedComposer.updateResolved(resolution),true,'the trusted Human recipe renders through the shared composer');
assert.equal(resolvedComposer.canvas.dataset.previewStatus,'ready');
const resolvedFrame=FakeCanvas.instances.find(canvas=>canvas!==resolvedComposer.canvas);
assert(resolvedFrame,'a complete resolver result is assembled in an offscreen frame');
const resolvedEvents=resolvedFrame.context.events;
const clipIndexes=resolvedEvents.flatMap((event,index)=>event[0]==='clip'?[index]:[]);
assert.equal(clipIndexes.length,resolvedHeadphoneParts.reduce((count,part)=>count+part.occlusion.cutouts.length,0),'each registered cutout polygon is applied as its own clip');
assert(clipIndexes.every(index=>resolvedEvents[index][1]==='evenodd'),'the actual Human profile uses evenodd clipping');
let previousDraw=resolvedEvents.findIndex(event=>event[0]==='drawImage');
for(const part of [...resolvedHeadphoneParts].sort((left,right)=>left.z-right.z)){
  const nextDraw=resolvedEvents.findIndex((event,index)=>index>previousDraw&&event[0]==='drawImage');
  assert(nextDraw>previousDraw,'each dynamic part is drawn after the preceding base/part layer');
  const partClips=clipIndexes.filter(index=>index>previousDraw&&index<nextDraw);
  assert.equal(partClips.length,part.occlusion.cutouts.length,`${part.id} applies one independent clip per trusted cutout`);
  for(const clipIndex of partClips){
    const beginPath=resolvedEvents.map((event,index)=>event[0]==='beginPath'?index:-1).filter(index=>index>=0&&index<clipIndex).at(-1);
    assert(beginPath>previousDraw,'each component cutout starts a new clipping path after the previous layer');
    assert.deepEqual(resolvedEvents.slice(beginPath,clipIndex).filter(event=>event[0]==='rect').map(event=>event.slice(1)),[[0,0,resolution.renderPlan.width,resolution.renderPlan.height]],'each resolver-issued mask clips against the full canvas');
  }
  previousDraw=nextDraw;
}
assert.equal(resolvedComposer.canvas.context.events.filter(event=>event[0]==='drawImage').length,1,'only the completed offscreen frame is committed to the visible canvas');

FakeCanvas.instances=[];
const host={append(){}},composer=new LayeredComposer(host);
const visibleCanvas=composer.canvas;
const forged=structuredClone(resolution);
const forgedPart=forged.renderPlan.modules.find(module=>module.parts)?.parts?.[0];
assert(forgedPart,'the resolver issues dynamic part transforms for the Human headphone recipe');
forgedPart.occlusion.cutouts=[[{x:.2,y:.2},{x:.8,y:.2},{x:.5,y:.8}]];
await assert.rejects(composer.updateResolved(forged),/render plan|可信目录解算结果/,'caller supplied cutouts are rejected unless the trusted resolver issued them');
assert.equal(visibleCanvas.dataset.previewStatus,'failed');
assert(!visibleCanvas.context.events.some(item=>item[0]==='drawImage'),'a forged cutout plan is rejected before visible drawing');

FakeCanvas.instances=[];
const atomicComposer=new LayeredComposer({append(){}});
const atomicVisible=atomicComposer.canvas;
FakeCanvas.failNextContextAt=3;
await assert.rejects(atomicComposer.updateResolved(resolution),/fake canvas draw failure/,'a later part draw failure aborts the whole composition');
const partialFrame=FakeCanvas.instances.find(canvas=>canvas!==atomicVisible);
assert(partialFrame,'the renderer builds into a separate offscreen frame');
assert(partialFrame.context.events.filter(item=>item[0]==='drawImage').length>=2,'the failure occurs after the base and an earlier dynamic part were drawn offscreen');
assert.equal(atomicVisible.dataset.previewStatus,'failed');
assert.equal(atomicComposer.ready,false);
assert.equal(atomicComposer.frame,null);
assert(!atomicVisible.context.events.some(item=>item[0]==='drawImage'),'an incomplete offscreen frame is never applied to the visible canvas');
await assert.rejects(atomicComposer.captureBlob(512),/当前组合没有通过加载/,'a failed partial frame cannot be captured or exported');

console.log('Composition occlusion verification passed: normalized cutouts, overlap-safe evenodd clip intersections, affine drawing, hostile geometry rejection, resolver ownership, and atomic failure.');
