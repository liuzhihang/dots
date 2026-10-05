import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {makeProject,resolveCreation,setCreationMode} from '../dist/studio-creation.js';
import {createPreset} from '../dist/studio-model.js';

// Exercise the production event helpers with delayed I/O and modal focus semantics.
// No artwork acceptance is inferred from these isolated lifecycle checks.
const source=await readFile(new URL('../dist/studio.js',import.meta.url),'utf8');
const section=(start,end)=>{const a=source.indexOf(start),b=source.indexOf(end,a);assert(a>=0&&b>a);return source.slice(a,b);};
const prepareSource=section('async function preparePreview(', 'async function showExpanded(');
const copySource=section('async function copyText(', 'async function copyAndOpen(');
const original=new Blob(['immutable original PNG bytes'],{type:'image/png'});
const baseline=makeProject(createPreset('baseline-dots'));
const deferred=()=>{let resolve;const promise=new Promise(r=>{resolve=r;});return {promise,resolve};};
function outputContext(extra={}){
 const context=vm.createContext({project:baseline,previewRevision:1,stageView:'creation',resolveCreation,structuredClone,artworkStatus:'ready',livePreview:null,composer:null,compositionReady:false,filename:()=> 'selected-character',fetch:async()=>({ok:true,blob:async()=>original}),...extra});
 vm.runInContext(prepareSource+'\nglobalThis.prepare=preparePreview;',context);return context;
}
let context=outputContext();
let result=await context.prepare(1600);
assert.equal(result.blob,original,'artwork output must be the original fetched file');
assert.equal(result.name,'historical-dots-plush-headphones-v2-original.png');
const response=deferred();context=outputContext({fetch:()=>response.promise});
let pending=context.prepare(1600);context.previewRevision++;
response.resolve({ok:true,blob:async()=>original});
await assert.rejects(pending,/旧预览导出已取消/,'mode/config changes must reject the old artwork download');
context=outputContext({fetch:async()=>({ok:false})});
await assert.rejects(context.prepare(1600),/下载失败/,'missing artwork cannot fall back to a diagnostic capture');
context=outputContext({project:setCreationMode(baseline,'composer'),composer:{capture:()=>{throw Error('must not run');}},compositionReady:true});
await assert.rejects(context.prepare(1600),/没有可导出的组合结果/,'empty registry must never capture diagnostic or stale canvas as a composition');
const frame=deferred();context=outputContext({stageView:'live',livePreview:{capture:()=>frame.promise},previewFailure:''});
pending=context.prepare(1400);context.stageView='creation';frame.resolve(original);
await assert.rejects(pending,/旧预览导出已取消/,'leaving diagnostics while capturing must cancel its result');
context=outputContext({stageView:'live',livePreview:{capture:async()=>original},previewFailure:''});
result=await context.prepare(1400);assert.match(result.name,/-diagnostic\.png$/);assert.match(result.description,/未通过美术验收/);

function clipboardContext({allowFocus=true,open=true}={}){
 const previous={isConnected:true,focus(){document.activeElement=this;}};
 let selected='',copied='',attached='';
 const modal={append(t){attached='modal';t.host='modal';}};
 const body={append(t){attached='body';t.host='body';}};
 const document={activeElement:previous,body,querySelector:()=>open?modal:null,createElement:()=>({style:{},setAttribute(){},focus(){if(allowFocus&&(!open||this.host==='modal'))document.activeElement=this;},select(){if(document.activeElement===this)selected=this.value;},remove(){}}),execCommand(command){assert.equal(command,'copy');copied=selected;return Boolean(copied);}};
 const context=vm.createContext({navigator:{clipboard:{writeText:async()=>{throw Error('permission denied');}}},document});
 vm.runInContext(copySource+'\nglobalThis.copy=copyText;',context);
 return {context,read:()=>({copied,attached,restored:document.activeElement===previous})};
}
let clipboard=clipboardContext();assert.equal(await clipboard.context.copy('exact prompt\nwith line breaks'),true);
assert.deepEqual(clipboard.read(),{copied:'exact prompt\nwith line breaks',attached:'modal',restored:true});
clipboard=clipboardContext({allowFocus:false});assert.equal(await clipboard.context.copy('must not report success'),false);
clipboard=clipboardContext({open:false});assert.equal(await clipboard.context.copy('main page prompt'),true);assert.equal(clipboard.read().attached,'body');
console.log('Production preview exports reject stale/missing outputs; modal clipboard fallback preserves exact text and rejects failed focus.');
