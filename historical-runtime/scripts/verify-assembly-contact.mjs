import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from 'three';
import {createCharacter,resolveCharacter} from '../dist/studio-model.js';
import {buildAvatarBody} from '../src/live/avatar-body.js';
import {decorateAvatar} from '../src/live/avatar-props.js';
import {createActivitySystem} from '../src/live/activity-system.js';

// Exercise the production render method with real geometry. A null renderer
// only skips pixels: actual articulated/prop transforms must stay connected.
const source=await readFile(new URL('../src/live/live-preview.js',import.meta.url),'utf8');
const context=vm.createContext({THREE,Math,matchMedia:()=>({matches:false}),clamp:THREE.MathUtils.clamp,stillTime:()=>0});
vm.runInContext(source.slice(source.indexOf('function setPose('),source.indexOf('export class CharacterPreview'))+'\nglobalThis.World=RenderWorld;globalThis.pose=setPose;',context);
let count=0;
for(const family of ['dots','grok','meta-muse','humans','animals'])for(const action of ['work','read','holdClosedBook','wave','thinking','processing']){
 const config=resolveCharacter({...createCharacter(family),action}).config;
 const avatar=buildAvatarBody(config),props=decorateAvatar(avatar,config);context.pose(avatar,config);
 const turn=new THREE.Group(),scene=new THREE.Scene();scene.add(turn);turn.add(avatar.root);
 const activity=createActivitySystem(avatar,config);if(activity)turn.add(activity.group);
 const parts=[avatar.torso,avatar.head,...avatar.legs,...avatar.arms,...props.parts].filter((p,i,a)=>p&&a.indexOf(p)===i).map((object,i)=>({object,position:object.position.clone(),scale:object.scale.clone(),delay:Math.min(.38,i*.048)}));
 const world=Object.assign(Object.create(context.World.prototype),{turn,scene,avatar,props,activity,config,assemblyParts:parts,renderer:{render(){},isSoftwareRenderer:false}});
 const snapshot=()=>{turn.updateMatrixWorld(true);const inverse=turn.matrixWorld.clone().invert(),out=new Map();turn.traverseVisible(object=>{if(object.isMesh)out.set(object.uuid,new THREE.Matrix4().multiplyMatrices(inverse,object.matrixWorld).elements.slice());});return out;};
 world.render(.4,1);const reference=snapshot();
 for(const assembly of [.2,.5,1]){world.render(.4,assembly);const actual=snapshot();for(const [id,matrix]of reference){assert(actual.has(id));for(let n=0;n<16;n++)assert(Math.abs(actual.get(id)[n]-matrix[n])<1e-8,`${family}/${action}: assembly must preserve mesh contacts and proportions`);}count++;}
 activity?.dispose();
}
console.log(`Production assembly geometry passed: ${count} five-family held/gesture/activity frames preserve relative transforms. Pixels and art acceptance remain separate.`);
