import assert from 'node:assert/strict';
import * as THREE from 'three';
import {PRESETS} from '../dist/studio-catalog.js';
import * as m from '../dist/studio-model.js';
import {schematicSVG,schematicSupport} from '../dist/shared-2d.js';
import {buildAvatarBody} from '../src/live/avatar-body.js';
import {decorateAvatar} from '../src/live/avatar-props.js';
const official=PRESETS.filter(p=>p.isLegacy&&p.provenance==='official-recreation');
assert.equal(official.length,9);assert.equal(m.APP_PALETTES.length,9);assert.equal(new Set(m.APP_PALETTES.map(p=>p.body)).size,9);
let assertions=0;const eq=(a,b)=>{assert.deepEqual(a,b);assertions++;};
const expected={
 'app-blue':['sphere','softOval','headphones','none','none','calm'],
 'app-petal':['puff','softOval','beret','none','none','calm'],
 'app-triangle':['triangle','softOval','none','round','bow','closed'],
 'app-heart':['heart','softOval','none','roundSun','none','calm'],
 'app-frog':['frog','softOval','none','none','bow','calm'],
 'app-scallop':['scallop','glossy','none','monocle','none','calm'],
 'app-diamond':['diamond','softOval','pom','sunglasses','none','calm'],
 'app-pebble':['pebble','side','tuft','round','none','calm'],
 'app-twin':['twin','softOval','headphones','none','none','closed']
};
for(const p of official){
 let c=m.validateConfig(m.createPreset(p.id));eq([c.shape,c.eyes,c.accessories.head,c.accessories.face,c.accessories.neck,c.expression],expected[p.id]);eq(c.provenance.modified,false);eq(m.sourceLabel(c),'历史兼容 · 原版身份复刻');
 const exported=m.exportConfiguration(c);eq(m.exportConfiguration(JSON.parse(exported)),exported);eq(m.validateConfig(c),c);
 const copy=structuredClone(c);schematicSVG(c);eq(c,copy);assert(schematicSVG(c).includes('<svg'));assert(!schematicSupport(c).unavailable);
 const body=buildAvatarBody(m.resolveCharacter(c).config);decorateAvatar(body,c);body.root.updateMatrixWorld(true);assert(new THREE.Box3().setFromObject(body.root).min.toArray().every(Number.isFinite));
 if(c.accessories.neck==='bow')assert(body.root.getObjectByName('neck-bow'));
 if(c.accessories.head==='tuft')assert(body.root.getObjectByName('tuft-lobe'));
 const changed=m.setCharacterValue(c,'colors.body','#123456');eq(changed.provenance.modified,true);eq(m.sourceLabel(changed),'历史兼容 · 已修改的身份复刻');eq(changed.provenance.basePresetId,p.id);eq(m.sourceLabel(m.createPreset(p.id)),'历史兼容 · 原版身份复刻');
 const restored=m.setCharacterValue(changed,'colors.body',c.colors.body);assert(restored.colors.eyes!==c.colors.eyes||restored.provenance.modified===false);
}
for(const f of ['dots','grok','meta-muse','humans','animals']){const c=m.createCharacter(f);eq(c.provenance,m.deriveProvenance(c));}
for(const id of ['dots-cloud','dots-triangle','dots-heart','pet-shiba']){const c=m.createPreset(id);eq(m.sourceLabel(c),'历史兼容 · 原创扩展');eq(m.sourceLabel(m.setCharacterValue(c,'name','my version')),'历史兼容 · 我的组合');}
for(const old of [6,7,8]){const c=m.createPreset('dots-blue');c.version=old;delete c.provenance;delete c.expressionAccents;delete c.colors.headAccessory;const migrated=m.validateConfig(c);eq(migrated.version,10);eq(migrated.shape,c.shape);eq(migrated.colors.body,c.colors.body);eq(migrated.colors.headAccessory,c.colors.accessory);eq(m.validateConfig(migrated),migrated);assert(migrated.provenance.source!=='official-recreation');}
let c=m.createPreset('app-petal');c=m.setCharacterValue(c,'eyes','star');c=m.setCharacterValue(c,'expression','tearful');c=m.setCharacterValue(c,'action','work');eq(m.resolveCharacter(c).config.expression,'tearful');eq(c.eyes,'star');c=m.setCharacterValue(c,'expression','expectant');eq(c.action,'work');
c=m.setCharacterValue(c,'action','sleep');eq(c.expression,'expectant');eq(m.resolveCharacter(c).config.expression,'closed');c=m.setCharacterValue(c,'action','idle');eq(m.resolveCharacter(c).config.expression,'expectant');
c=m.setCharacterValue(c,'action','listen');eq(c.accessories.head,'beret');eq(m.resolveCharacter(c).config.accessories.head,'headphones');eq(m.validateConfig(JSON.parse(m.exportConfiguration(c))),c);
c.reference.enabled=true;c=m.setCharacterValue(c,'colors.accessory','#654321');assert(c.reference.overrides.includes('colors.headAccessory'));eq(c.colors.headAccessory,'#654321');c=m.applyPalette(c,'app-yellow');assert(c.reference.overrides.includes('colors.headAccessory'));
for(const expression of Object.keys(m.EXPRESSIONS))for(const eyes of m.DOT_CORE_EYES){let c=m.createPreset('app-blue');c=m.setCharacterValue(c,'eyes',eyes);c=m.setCharacterValue(c,'expression',expression);c=m.setCharacterValue(c,'expressionAccents',true);let avatar=buildAvatarBody(c);eq(avatar.eyeGroups.length,2);for(const lang of ['zh','en'])assert(!m.buildPrompt(c,lang).includes('undefined'));eq(m.validateConfig(JSON.parse(m.exportConfiguration(c))),c);}
for(const id of ['muse-mu','pet-shiba']){const c=m.createPreset(id),snapshot=structuredClone(c);eq(schematicSVG(c),null);assert(schematicSupport(c).unavailable);eq(c,snapshot);}
assert.throws(()=>m.validateConfig({...m.createPreset('app-blue'),expressionAccents:'yes'}));
assert.throws(()=>m.validateConfig({...m.createPreset('app-blue'),presetId:'official-forged'}));
console.log(`${assertions} recreation, provenance, migration, eye/expression and shared-schema assertions passed`);
