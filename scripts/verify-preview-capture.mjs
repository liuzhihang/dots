import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import vm from 'node:vm';
import {createCharacter} from '../dist/studio-model.js';
import {Scene,OrthographicCamera,Mesh,PlaneGeometry,MeshBasicMaterial} from 'three';
import {SoftwareRenderer} from '../src/live/software-renderer.js';
import {Shared2DPreview} from '../dist/shared-2d.js';

// Deterministic I/O gates exercise the production preview class. These are
// lifecycle checks, not a substitute for rendered WebGL/CPU or art acceptance.
const baseline=process.argv.includes('--baseline');
const liveSource=baseline?execFileSync('git',['show','HEAD:src/live/live-preview.js'],{encoding:'utf8'}):await readFile(new URL('../src/live/live-preview.js',import.meta.url),'utf8');
const classSource=liveSource.slice(liveSource.indexOf('export class CharacterPreview{'),liveSource.indexOf('\nexport function characterThumbnail'));
assert(classSource.includes('capture('));
const deferred=()=>{let resolve;const promise=new Promise(r=>resolve=r);return {promise,resolve};};
const turn=()=>new Promise(r=>setImmediate(r));
let flushGate=null,blobGate=null,nullBlob=false;
const worlds=[],encodes=[],frames=new Map();let rafId=0;
class FakeWorld{
 constructor(canvas){this.canvas=canvas;this.disposals=0;this.renderedTime=0;this.renderedAssembly=1;this.renderer={isSoftwareRenderer:true,setPixelRatio(){},flush:()=>flushGate?.promise||Promise.resolve()};worlds.push(this);}
 update(config){this.config=structuredClone(config);this.render(0);}
 fit(){}
 render(time,assembly=1){this.lastTime=time;this.renderedTime=time;this.renderedAssembly=assembly;this.lastRender={time,assembly};}
 dispose(){this.disposals++;}
}
function canvas(){return {style:{},dataset:{},getContext:()=>({drawImage(){}}),setAttribute(){},addEventListener(){},remove(){},toBlob(callback){encodes.push(this);if(blobGate)blobGate.promise.then(()=>callback(nullBlob?null:new Blob(['frame'],{type:'image/png'})));else callback(nullBlob?null:new Blob(['frame'],{type:'image/png'}));}};}
const context=vm.createContext({RenderWorld:FakeWorld,structuredClone,Error,Number,Promise,performance:{now:()=>0},matchMedia:()=>({matches:false}),document:{createElement:canvas,hidden:false},ResizeObserver:class{observe(){}disconnect(){}},IntersectionObserver:class{observe(){}disconnect(){}},requestAnimationFrame:fn=>{const id=++rafId;frames.set(id,fn);return id;},cancelAnimationFrame:id=>frames.delete(id),visualKey:config=>JSON.stringify(config),stillTime:()=>0,clamp:(v,a,b)=>Math.min(b,Math.max(a,v)),console});
vm.runInContext(classSource.replace('export class','class')+'\nglobalThis.Preview=CharacterPreview;',context);
function preview(){const instance=new context.Preview({append(){},getBoundingClientRect:()=>({width:100,height:100})});instance.world.update(createCharacter('grok'));instance.pending=structuredClone(instance.world.config);instance.updateKey=JSON.stringify(instance.pending);instance.canvas.dataset.previewStatus='ready';return instance;}
let p=preview();p.elapsed=9;p.world.lastTime=2;p.world.renderedTime=.35;p.world.renderedAssembly=.6;
assert.equal((await p.capture(64)).type,'image/png');
assert.equal(worlds.at(-1).lastRender.time,.35,'capture uses the last painted CPU time, not elapsed/requested time');
assert.equal(worlds.at(-1).lastRender.assembly,.6,'capture preserves the painted assembly state');
assert.equal(worlds.at(-1).disposals,1);
p.dispose();await assert.rejects(p.capture(64),/关闭/,'capture cannot start after dispose');
const beforeQueued=worlds.length;p=preview();let pending=p.capture(64);p.dispose();await assert.rejects(pending,/更新|关闭/,'dispose invalidates a queued request before allocating its export world');assert.equal(worlds.length,beforeQueued+1);

p=preview();flushGate=deferred();pending=p.capture(64);await turn();const beforeEncode=encodes.length;
const edited=structuredClone(p.pending);edited.colors.body='#AA22BB';p.update(edited);
flushGate.resolve();await assert.rejects(pending,/更新|关闭/,'an update invalidates capture immediately, before the next RAF');assert.equal(encodes.length,beforeEncode,'a stale flushed frame never enters PNG encoding');flushGate=null;p.dispose();

p=preview();blobGate=deferred();pending=p.capture(64);await turn();p.dispose();blobGate.resolve();await assert.rejects(pending,/更新|关闭/,'dispose during encoding rejects the stale blob');blobGate=null;
p=preview();nullBlob=true;await assert.rejects(p.capture(64),/PNG 导出失败/);nullBlob=false;assert.equal((await p.capture(64)).type,'image/png','a failed request does not poison the capture queue');
flushGate=deferred();const a=p.capture(64),b=p.capture(64);await turn();const exportWorld=worlds.at(-1),count=worlds.length;assert.equal(exportWorld.disposals,0);flushGate.resolve();await Promise.all([a,b]);assert.equal(worlds.length,count+1,'simultaneous captures run serially');assert.equal(p.capturing,false);flushGate=null;p.dispose();

if(!baseline){
 p=preview();p.elapsed=4;const located=await p.seek(.45,.5);assert.equal(located.time,.45);assert.equal(located.assembly,.5);assert.equal(p.playing,false);assert.equal(p.assemblyStart,null);
 await p.capture(64);assert.equal(worlds.at(-1).lastRender.time,.45);assert.equal(worlds.at(-1).lastRender.assembly,.5,'explicit inspection frame uses the production capture path');
 await assert.rejects(p.seek(-1),/帧位置/);await assert.rejects(p.seek(0,1.1),/帧位置/);
 flushGate=deferred();const locating=p.seek(1.2);p.dispose();flushGate.resolve();await assert.rejects(locating,/更新|关闭/);flushGate=null;
}

const saved={document:globalThis.document,Image:globalThis.Image};
const imageGates=[];
globalThis.Image=class{set src(value){this.url=value;}decode(){const gate=deferred();imageGates.push(gate);return gate.promise;}};
globalThis.document={createElement:canvas};
try{
 const host={innerHTML:'',replaceChildren(){this.innerHTML='';}};
 let schematic=new Shared2DPreview(host);schematic.update(createCharacter('dots'));
 let png=schematic.capture(64);schematic.update(createCharacter('grok'));imageGates.shift().resolve();await assert.rejects(png,/更新|关闭/,'2D update during decode invalidates its snapshot');
 png=schematic.capture(64);schematic.dispose();imageGates.shift().resolve();await assert.rejects(png,/更新|关闭/,'2D dispose during decode rejects its output');await assert.rejects(schematic.capture(64),/关闭/);
 schematic=new Shared2DPreview(host);const config=createCharacter('dots');schematic.update(config);png=schematic.capture(80,config);config.aspect='9:16';imageGates.shift().resolve();await png;assert.equal(encodes.at(-1).width,80);assert.equal(encodes.at(-1).height,80,'2D freezes aspect before async decode');
 blobGate=deferred();png=schematic.capture(64);imageGates.shift().resolve();await turn();schematic.update(createCharacter('grok'));blobGate.resolve();await assert.rejects(png,/更新|关闭/,'2D update during PNG encoding rejects the blob');blobGate=null;
 nullBlob=true;png=schematic.capture(64);imageGates.shift().resolve();await assert.rejects(png,/PNG 导出失败/);nullBlob=false;schematic.dispose();
}finally{for(const [key,value]of Object.entries(saved))if(value===undefined)delete globalThis[key];else globalThis[key]=value;}
// Verify frame metadata crosses the actual CPU raster/paint path, not merely
// the preview mock. A newer pending frame must not be called painted early.
const savedImageData=globalThis.ImageData;
globalThis.ImageData=class{constructor(data,width,height){this.data=data;this.width=width;this.height=height;}};
try{
 const target={width:8,height:8,dataset:{},getContext:()=>({putImageData(){}})};
 const renderer=new SoftwareRenderer(target);renderer.frameInterval=0;
 const scene=new Scene(),camera=new OrthographicCamera(-1,1,1,-1,.1,10);camera.position.z=2;camera.updateMatrixWorld();
 scene.add(new Mesh(new PlaneGeometry(1,1),new MeshBasicMaterial({color:'#8844CC'})));
 const painted=[];renderer.onFramePainted=result=>painted.push([result.animationTime,result.assembly]);
 renderer.render(scene,camera,{animationTime:.35,assembly:.6});
 assert.equal(painted.length,0,'an in-flight CPU request is not a painted frame');
 await renderer.flush();assert.deepEqual(painted,[[.35,.6]]);
 renderer.render(scene,camera,{animationTime:1.25,assembly:1});
 assert.deepEqual(painted.at(-1),[.35,.6]);await renderer.flush();assert.deepEqual(painted.at(-1),[1.25,1]);renderer.dispose();
}finally{if(savedImageData===undefined)delete globalThis.ImageData;else globalThis.ImageData=savedImageData;}
console.log('Preview capture lifecycle passed: painted frame/time, assembly, queue, update/dispose, PNG encoding and 2D snapshot guards.');
