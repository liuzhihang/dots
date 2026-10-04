import assert from 'node:assert/strict';
import * as THREE from 'three';
import {PRESETS,familyPresets} from '../dist/studio-catalog.js';
import {createPreset,setCharacterValue,resolveCharacter,buildPrompt,validateConfig,exportConfiguration,SHAPES,DOT_CORE_SHAPES,DOT_CORE_EYES,OPAQUE_EYEWEAR} from '../dist/studio-model.js';
import {buildAvatarBody} from '../src/live/avatar-body.js';
import {decorateAvatar} from '../src/live/avatar-props.js';

for(const family of ['dots','grok','muse','pets'])assert.equal(familyPresets(family).length,12);
assert.equal(new Set(PRESETS.map(p=>p.id)).size,48);
for(const preset of PRESETS){
 const c=validateConfig(createPreset(preset.id));
 assert.deepEqual(validateConfig(JSON.parse(exportConfiguration(c))),c);
 for(const lang of ['zh','en']){const prompt=buildPrompt(c,lang);assert(!prompt.includes('undefined'));assert(prompt.includes(c.colors.body));}
 const avatar=buildAvatarBody(resolveCharacter(c).config);decorateAvatar(avatar,c);avatar.root.updateMatrixWorld(true);
 const bounds=new THREE.Box3().setFromObject(avatar.root);assert(!bounds.isEmpty());assert(bounds.min.toArray().concat(bounds.max.toArray()).every(Number.isFinite));
 assert.equal(avatar.eyeGroups.length,2);
 if(c.shape==='human'||c.family==='pets')assert.equal(avatar.arms.filter(a=>a.visible).length,2);
 assert.equal(SHAPES[c.shape].label.length>0,true);
}

let c=createPreset('dots-blue');
c=setCharacterValue(c,'eyes','round');c=setCharacterValue(c,'mouth','smile');c=setCharacterValue(c,'shape','heart');
assert.equal(c.eyes,'round');assert.equal(c.mouth,'smile');
c=setCharacterValue(c,'accessories.head','beret');
c=setCharacterValue(c,'action','listen');assert.equal(c.accessories.head,'beret');assert.equal(resolveCharacter(c).config.accessories.head,'headphones');
c=setCharacterValue(c,'action','idle');assert.equal(resolveCharacter(c).config.accessories.head,'beret');
c=setCharacterValue(c,'accessories.face','sunglasses');c=setCharacterValue(c,'action','sleep');assert.equal(c.accessories.face,'sunglasses');assert.equal(resolveCharacter(c).config.accessories.face,'none');
c=setCharacterValue(c,'action','idle');assert.equal(resolveCharacter(c).config.accessories.face,'sunglasses');
c=setCharacterValue(c,'action','work');c=setCharacterValue(c,'expression','wink');assert.equal(c.action,'idle');assert.equal(resolveCharacter(c).config.expression,'wink');
c=setCharacterValue(c,'background','solid');c=setCharacterValue(c,'output','sticker');assert.equal(resolveCharacter(c).config.background,'transparent');c=setCharacterValue(c,'output','image');assert.equal(resolveCharacter(c).config.background,'solid');

c=createPreset('pet-owl');c=setCharacterValue(c,'action','flowers');
assert.deepEqual(resolveCharacter(c).anatomy,{plan:'bird',hands:0,paws:0,feet:2,wings:2});assert(buildPrompt(c).includes('两只翼尖与胸前共同托住小花束'));
c=createPreset('muse-mu');c=setCharacterValue(c,'colors.body','#A37391');assert.equal(c.colors.clothing,'#A37391');c=setCharacterValue(c,'colors.skin','#503321');assert.equal(c.colors.eyes,'#FFF7E9');

c=createPreset('dots-blue');c.reference.enabled=true;c=setCharacterValue(c,'action','sleep');
assert(buildPrompt(c).includes('普通透明眼镜，保留'));assert(buildPrompt(c).includes('墨镜，本次睡眠动作暂时摘下'));
c=setCharacterValue(c,'accessories.face','sunglasses');c=setCharacterValue(c,'action','sleep');assert(buildPrompt(c).includes('保存的选择；本次动作暂用'));
const original=structuredClone(c);resolveCharacter(c);buildPrompt(c);assert.deepEqual(c,original);
assert.throws(()=>setCharacterValue(c,'__proto__.polluted',true));

// Resting poses must retain the compact sculpted limbs. Prop contact replaces
// one pair as a unit, without introducing four visible front limbs.
for(const id of ['muse-mu','pet-shiba']){
 const rest=resolveCharacter(createPreset(id)).config,avatar=buildAvatarBody(rest),restArms=[...avatar.arms];
 decorateAvatar(avatar,rest);assert.deepEqual(avatar.arms,restArms);assert(restArms.every(a=>a.visible));
 const working=resolveCharacter(setCharacterValue(createPreset(id),'action','work')).config,posed=buildAvatarBody(working),originalArms=[...posed.arms];
 decorateAvatar(posed,working);assert(originalArms.every(a=>!a.visible));assert.equal(posed.arms.filter(a=>a.visible).length,2);
 assert(posed.arms.every(a=>a.name.startsWith('posed-arm-')));
}
assert.equal(createPreset('dots-frog').accessories.neck,'none');
assert.equal(createPreset('dots-triangle').accessories.neck,'none');
// A visible picker selection must survive serialization and reach both the
// actual model and the Prompt; the new App-inspired choices share this path.
for(const [path,values] of [['shape',DOT_CORE_SHAPES],['eyes',DOT_CORE_EYES],['accessories.head',['bowler','topHat','pom','crown']],['accessories.face',['monocle','catEye','roundSun']]]){
 for(const value of values){
  const selected=setCharacterValue(createPreset('dots-blue'),path,value),effective=resolveCharacter(selected).config;
  assert.equal(path.split('.').reduce((o,k)=>o[k],effective),value);
  assert.deepEqual(validateConfig(JSON.parse(exportConfiguration(selected))),selected);
  const avatar=buildAvatarBody(effective);decorateAvatar(avatar,effective);
  const bounds=new THREE.Box3().setFromObject(avatar.root);assert(bounds.min.toArray().concat(bounds.max.toArray()).every(Number.isFinite));
  for(const lang of ['zh','en'])assert(!buildPrompt(selected,lang).includes('undefined'));
 }
}
for(const shade of OPAQUE_EYEWEAR){
 let selected=setCharacterValue(createPreset('dots-blue'),'accessories.face',shade);
 selected=setCharacterValue(selected,'action','sleep');assert.equal(resolveCharacter(selected).config.accessories.face,'none');
 selected=setCharacterValue(selected,'action','idle');assert.equal(resolveCharacter(selected).config.accessories.face,shade);
}
console.log('48 catalog presets and state/Prompt/anatomy regression journeys passed.');
