import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {randomRecipe, describeRecipe} from '../dist/studio-random.js';
import {createCharacter, createPreset, setCharacterValue, resolveCharacter, validateConfig, inheritsReference} from '../dist/studio-model.js';

const visible = config => resolveCharacter(config).config;
const fields = (config, keys) => Object.fromEntries(keys.map(key => [key, config[key]]));
let passed = 0;
function check(name, run) {
  run();
  passed++;
  console.log(`PASS ${name}`);
}

check('type and look locks preserve custom proportions, colors and materials', () => {
  const input = createPreset('grok-pebble');
  Object.assign(input, {shape:'pebble', headScale:1.08, bodyWidth:1.1, limbs:'both', material:'clay'});
  input.colors.body = '#809090';
  const before = structuredClone(input);
  const result = randomRecipe(input, 'locked-type-look', {type:true, look:true});
  const keys = ['family','shape','headScale','bodyWidth','limbs','colors','palette','material','skinMaterial','hairMaterial','clothMaterial'];
  assert.deepEqual(fields(result, keys), fields(input, keys));
  assert.deepEqual(input, before, 'randomRecipe must not mutate its input');
});

check('component lock preserves the visible work prop and consistent reel labels', () => {
  const input = setCharacterValue(createCharacter('dots'), 'action', 'work');
  const result = randomRecipe(input, 'check-0', {type:true, accessories:true});
  assert.equal(visible(input).accessories.prop, 'macbook');
  assert.deepEqual(visible(result).accessories, visible(input).accessories);
  assert.deepEqual(describeRecipe(input), describeRecipe(visible(input)));
  assert.match(describeRecipe(input).accessories, /MacBook/);
  assert.deepEqual(result, randomRecipe(input, 'check-0', {type:true, accessories:true}));
});

check('reference-preserved neck accessory survives action prop cleanup', () => {
  const input = createCharacter('humans');
  input.reference.enabled = true;
  input.reference.preserve = ['accessories'];
  input.accessories = {head:'beret', face:'round', neck:'scarf', prop:'none'};
  const result = randomRecipe(input, 'ref-0');
  assert.equal(result.accessories.neck, 'scarf');
  assert.equal(visible(result).accessories.neck, 'scarf');
  assert.equal(inheritsReference(result, 'accessories.neck'), true);
  assert.deepEqual(result.reference, input.reference);
  assert.equal(result.family, input.family);
});

check('action lock retains motion speed when type is randomized', () => {
  const input = createCharacter('grok');
  Object.assign(input, {action:'thinking', motionStyle:'liquid', motionSpeed:1.7});
  const result = randomRecipe(input, 'action-0', {action:true});
  const keys = ['action','pose','motionStyle','motionSpeed'];
  assert.deepEqual(fields(result, keys), fields(input, keys));
});

check('random type retains the chosen framing and camera', () => {
  const input = createCharacter('grok');
  Object.assign(input, {framing:'portrait', camera:'side'});
  const result = randomRecipe(input, 'framing');
  assert.equal(result.framing, 'portrait');
  assert.equal(result.camera, 'side');
});

check('look lock preserves the selected material and colors across random types', () => {
  for(const family of ['dots','grok','meta-muse','humans','animals']){
    const input=createCharacter(family);
    for(let i=0;i<20;i++){
      const result=randomRecipe(input,'locked-look-'+family+'-'+i,{look:true});
      assert.equal(result.material,input.material);
      assert.deepEqual(result.colors,input.colors);
      assert.equal(result.palette,input.palette);
      assert.equal(result.catalogTier,'baseline');
    }
  }
  const legacy=setCharacterValue(createPreset('grok-pebble'),'material','clay');
  const result=randomRecipe(legacy,'legacy-look',{look:true});
  assert.equal(result.material,'clay');
  assert.equal(result.family,legacy.family);
  assert.equal(result.shape,legacy.shape);
});

check('frozen v9 configurations default missing motion fields in each historical family', () => {
  for (const id of ['app-blue','grok-arch','muse-mu','pet-shiba']) {
    const input = JSON.parse(readFileSync(new URL(`../openspec/changes/rebuild-character-system/baseline/schema-9-${id}.json`,import.meta.url),'utf8'));
    delete input.motionStyle;
    delete input.motionSpeed;
    const before = structuredClone(input);
    const result = validateConfig(input);
    assert.equal(result.version, 10);
    assert.equal(result.motionStyle, 'auto', id);
    assert.equal(result.motionSpeed, 1, id);
    assert.deepEqual(input, before, 'validation must not mutate the old configuration');
  }
});

console.log(`Atelier verification passed: ${passed} checks.`);
