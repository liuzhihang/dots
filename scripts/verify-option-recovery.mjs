import assert from 'node:assert/strict';
import { TEMPLATE_REGISTRY, describeTemplateSelection, enumerateValidConfigurations, validateTemplateOptions } from '../dist/studio-edit-templates.js?v=102';

const husky = TEMPLATE_REGISTRY.find(row => row.id === 'animal-gray-husky-adjustments-v1');
assert(husky);
const original = { ...husky.defaultOptions, appearance: 'broad' };
const unchanged = JSON.stringify(original);
const blocked = describeTemplateSelection(husky, original, 'clothing', 'vest');
assert.equal(blocked.kind, 'missing-combination');
assert.deepEqual(blocked.restore, [{ field: 'appearance', value: husky.defaultOptions.appearance }]);
assert.equal(JSON.stringify(original), unchanged, 'Explaining does not mutate the Draft.');
assert.equal(enumerateValidConfigurations(husky).length, 6);
assert.equal(describeTemplateSelection(husky, husky.defaultOptions, 'clothing', 'vest').kind, 'available');
assert.equal(describeTemplateSelection(husky, original, 'clothing', 'made-up').kind, 'incompatible');
const physicalConflict = { ...husky, conflicts: [{ when: { appearance: 'broad', clothing: 'vest' }, code: 'physical-overlap', messageByLanguage: { en: 'Overlapping layers.', 'zh-CN': '图层重叠。' } }] };
assert.equal(describeTemplateSelection(physicalConflict, original, 'clothing', 'vest').kind, 'incompatible');
assert.equal(describeTemplateSelection(physicalConflict, original, 'clothing', 'vest').error.messageByLanguage['zh-CN'], '图层重叠。');
const dots = TEMPLATE_REGISTRY.find(row => row.id === 'dots-orb-core-adjustments-v6-four-tabs-candidate');
const cloud = describeTemplateSelection(dots, dots.defaultOptions, 'appearance', 'cloud');
assert.equal(cloud.kind, 'incompatible');
assert(cloud.restore.some(row => ['accessory', 'accessories'].includes(row.field) && row.value === 'none'), 'A default headphone can be manually removed before choosing Cloud.');
let recipes = 0;
let checked = 0;
for (const template of TEMPLATE_REGISTRY) {
  const configurations = enumerateValidConfigurations(template);
  recipes += configurations.length;
  for (const options of configurations) for (const [field, values] of Object.entries(template.options)) for (const value of values) {
    const result = describeTemplateSelection(template, options, field, value.id);
    const target = { ...options, [field]: value.id };
    if (result.kind === 'available') assert(validateTemplateOptions(template, target).valid);
    else if (result.restore.length) {
      const intermediate = { ...options };
      for (const restore of result.restore) {
        assert.notEqual(restore.field, field);
        assert(template.options[restore.field].some(option => option.id === restore.value), 'Recovery only suggests registered option values.');
        target[restore.field] = restore.value;
        intermediate[restore.field] = restore.value;
        assert(validateTemplateOptions(template, intermediate).valid, 'Every manual restoration step is clickable.');
      }
      assert(validateTemplateOptions(template, target).valid, 'Every suggested restoration reaches a registered recipe.');
    }
    checked++;
  }
}
assert.equal(recipes, 540);
console.log(`Option recovery verified: ${TEMPLATE_REGISTRY.length} templates, ${recipes} unchanged recipes, ${checked} selection explanations.`);
