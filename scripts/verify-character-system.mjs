import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import * as THREE from 'three';
import {FAMILIES,createCharacter,createPreset,validateConfig,exportConfiguration,resolveCharacter,setCharacterValue,buildPrompt} from '../dist/studio-model.js';
import {PRESETS,familyPresets} from '../dist/studio-catalog.js';
import {randomRecipe} from '../dist/studio-random.js';
import {buildAvatarBody} from '../src/live/avatar-body.js';
import {decorateAvatar} from '../src/live/avatar-props.js';

const families=['dots','grok','meta-muse','humans','animals'];
assert.deepEqual(Object.keys(FAMILIES),families);
assert.equal(PRESETS.filter(p=>!p.isLegacy).length,5);
const baselineDir=new URL('../openspec/changes/rebuild-character-system/baseline/',import.meta.url);
const manifest=JSON.parse(fs.readFileSync(new URL('manifest.json',baselineDir)));
const defaultBytes=fs.readFileSync(new URL(manifest.legacyPresetDefaults.file,baselineDir));
assert.equal(crypto.createHash('sha256').update(defaultBytes).digest('hex'),manifest.legacyPresetDefaults.sha256);
const frozenDefaults=JSON.parse(defaultBytes);
assert.equal(frozenDefaults.presets.length,57);
for(const {id,config:old}of frozenDefaults.presets){
 const current=createPreset(id);
 for(const field of Object.keys(old))if(!['version','family'].includes(field))assert.deepEqual(current[field],old[field],id+' preserves historical '+field);
 assert.equal(current.catalogTier,'legacy');
 assert.equal(current.family,old.family==='muse'?'humans':old.family==='pets'?'animals':old.family);
}
for(const entry of manifest.samples){
 const bytes=fs.readFileSync(new URL(entry.file,baselineDir));
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),entry.sha256);
 const raw=JSON.parse(bytes),before=structuredClone(raw),c=validateConfig(raw);
 assert.deepEqual(raw,before,'migration must not mutate the imported JSON');
 assert.equal(c.family,raw.family==='muse'?'humans':raw.family==='pets'?'animals':raw.family);
 for(const field of ['shape','colors','action','accessories','expression']){
  if(field==='colors')for(const [key,value]of Object.entries(raw.colors))assert.equal(c.colors[key],value);
  else assert.deepEqual(c[field],raw[field],entry.file+' '+field);
 }
 assert.equal(c.catalogTier,'legacy');
 assert.deepEqual(c.legacy.originalConfig,raw,'the original JSON remains recoverable');
 assert.deepEqual(validateConfig(JSON.parse(exportConfiguration(c))),c);
 const edited=setCharacterValue(c,'colors.accessory','#56789A');
 assert.deepEqual(edited.legacy.originalConfig,raw);
 assert.deepEqual(validateConfig(c),c,'undo snapshot restores the migrated state');
}
for(const family of families){
 assert.equal(familyPresets(family).length,1);
 const saved=createCharacter(family),c=resolveCharacter(saved).config;
 assert.equal(saved.presetId,'baseline-'+family);assert.equal(saved.catalogTier,'baseline');
 assert.deepEqual(validateConfig(JSON.parse(exportConfiguration(saved))),saved);
 for(const lang of ['zh','en'])assert(!buildPrompt(saved,lang).includes('undefined'));
 for(const camera of ['front','threeQuarter','side'])for(const headScale of [.85,1.12]){
  const config={...c,camera,headScale};
  const avatar=buildAvatarBody(config);decorateAvatar(avatar,config);avatar.root.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(avatar.root);
  assert(!bounds.isEmpty());assert(bounds.min.toArray().concat(bounds.max.toArray()).every(Number.isFinite));
  assert.equal(avatar.eyeGroups.length,2);
  // A valid bounding box does not catch out-of-range WebGL drawElements
  // indices. Validate the actual attributes, including scarf side caps.
  avatar.root.traverse(mesh=>{
   const geometry=mesh.geometry;if(!geometry)return;
   const positions=geometry.getAttribute('position');
   for(const attribute of ['position','normal']){
    const values=geometry.getAttribute(attribute)?.array;
    if(values)assert(Array.from(values).every(Number.isFinite),family+' '+mesh.name+' finite '+attribute);
   }
   if(geometry.index)for(const index of geometry.index.array)assert(index>=0&&index<positions.count,family+' '+mesh.name+' valid index '+index);
  });
 }
 for(let i=0;i<40;i++){
  const random=randomRecipe(saved,'single-baseline-'+family+'-'+i);
  assert.equal(random.catalogTier,'baseline');assert.equal(random.presetId,'baseline-'+random.family);
  assert.equal(random.shape,createCharacter(random.family).shape);
  assert.equal(random.hair,createCharacter(random.family).hair);
 }
 const held=setCharacterValue(saved,'accessories.prop','closedBook');
 assert.equal(held.action,'holdClosedBook','choosing a closed book must select its distinct action');
 const requested={...saved,action:'holdClosedBook',accessories:{...saved.accessories,prop:'none'}},beforeRequested=structuredClone(requested);
 const resolvedHeld=resolveCharacter(requested).config,heldAvatar=buildAvatarBody(resolvedHeld),heldProps=decorateAvatar(heldAvatar,resolvedHeld);
 assert.deepEqual(requested,beforeRequested,'temporary action props never overwrite saved intent');
 assert.equal(heldProps.prop,'closedBook');assert(heldAvatar.root.getObjectByName('prop-closed-book'),'a declared closed-book action must render an actual book');
 assert.equal(heldAvatar.root.children.filter(part=>part.name.startsWith('posed-arm-')&&part.visible).length,2,'held book uses a single visible pair of arms/paws');
 const bucketConfig=resolveCharacter({...saved,action:'idle',accessories:{...saved.accessories,head:'bucket',prop:'none'}}).config;
 const bucketAvatar=buildAvatarBody(bucketConfig);decorateAvatar(bucketAvatar,bucketConfig);bucketAvatar.root.updateMatrixWorld(true);
 const bucket=bucketAvatar.root.getObjectByName('head-bucket');
 assert(bucket,'a supported bucket hat must create its accessory group');
 const bucketBounds=new THREE.Box3().setFromObject(bucket);
 assert(!bucketBounds.isEmpty(),family+' bucket hat must contain visible geometry, not an empty group');
 assert(bucket.getObjectByName('bucket-soft-crown')&&bucket.getObjectByName('bucket-soft-brim'),family+' bucket hat must render both crown and brim');
}
const meta=buildAvatarBody(resolveCharacter(createCharacter('meta-muse')).config);
assert.equal(meta.root.userData.anatomy,'human');
assert(!meta.root.getObjectByName('hair-foundation'),'Meta must not reuse human hair');
console.log('57 frozen preset defaults, 24 frozen migrations, five independent baseline identities, contact bounds and 200 single-baseline random results passed. Page art acceptance remains separate.');
