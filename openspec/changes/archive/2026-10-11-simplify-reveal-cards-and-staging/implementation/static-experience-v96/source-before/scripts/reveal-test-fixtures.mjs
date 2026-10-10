// Independent expectations for the current approved Artwork facts, not derived
// from displaySlotsFor(). Identity remains in the Artwork facts but is shown
// outside the reel. The isolated five-card sample is test-only and never catalogued.
const base = ['appearance', 'palette-material'];
const extras = {
  'candidate-dots-20261005': ['accessory'],
  'candidate-grok-20261005': [],
  'candidate-meta-muse-20261005': [],
  'candidate-humans-20261005': ['clothing'],
  'candidate-animals-20261005': [],
  'dots-rose-glasses': ['accessory'],
  'dots-lilac-bucket': ['accessory'],
  'grok-green-cloud': [],
  'grok-teal-square': [],
  'muse-rose-flowers': ['prop'],
  'muse-sage-reading': ['prop'],
  'human-bun-yellow': ['clothing'],
  'human-blond-glasses': ['clothing', 'accessory'],
  'animal-white-cat': [],
  'animal-gray-husky': [],
  'fixture-five-cards': ['clothing', 'accessory', 'prop']
};
export function expectedDisplayKeys(id) {
  if (!Object.hasOwn(extras, id)) throw new Error(`Missing independent card expectations: ${id}`);
  return [...base, ...extras[id]];
}
export const reviewPolicy = Object.freeze({resourcePolicy: 'candidate-preview'});
