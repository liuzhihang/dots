import assert from 'node:assert/strict';
import { ARTWORKS } from '../dist/studio-artwork-catalog.js';
import { buildReferencePrompt, promptFor } from '../dist/studio-prompt.js';
import { FEATURE_CATEGORIES } from '../dist/studio-draw.js';
import {
  TAGS, TAG_DIMENSIONS, normalizeTagQuery, normalizeSearch, queryArtworks,
  publishedTags, queryForTopic, queryLabel, toggleTag
} from '../dist/studio-tags.js';

assert.equal(ARTWORKS.length, 15);
assert.equal(queryArtworks({}).length, 15, 'Gallery query returns all 15 eligible works before filters.');
assert.deepEqual(Object.keys(TAG_DIMENSIONS).sort(), [
  'accessory', 'action', 'background', 'body-accessory', 'clothing', 'color', 'content', 'expression', 'facial-features', 'head-accessory', 'material', 'object-type', 'prop', 'series', 'shape', 'style', 'theme', 'usage'
].sort());
assert.equal(FEATURE_CATEGORIES.length, 8, 'Searchable visual facts are grouped into eight extensible categories.');
assert.ok(TAGS.length >= 50, 'Typed tags are derived from distinct visible features, not fixed family tabs.');
assert.deepEqual(publishedTags().map(tag => tag.id), TAGS.map(tag => tag.id));
assert.ok(TAGS.every(tag => tag.status === 'published' && tag.sourceScope === 'verified-visible-artwork-feature'));
assert.ok(promptFor(ARTWORKS[0], { language: 'en' }).startsWith('A blue short-pile'));
const englishReference = buildReferencePrompt({ styleId: 'dots', language: 'en', description: '保留圆眼' });
assert.match(englishReference, /Preserve the approved rounded body/);
assert.match(englishReference, /保留圆眼/);
assert.doesNotMatch(englishReference, /按已批准|圆润主体/);
for (const artwork of ARTWORKS) {
  for (const id of artwork.featureIds) assert.ok(TAGS.some(tag => tag.id === id), `${id} is a searchable typed tag`);
  for (const [dimension, feature] of Object.entries(artwork.features)) {
    for (const id of feature.ids || []) {
      const tag = TAGS.find(item => item.id === id);
      assert.ok(tag, `${artwork.id}.${dimension}.${id} is discoverable`);
      assert.equal(typeof feature.labelsById[id], 'string');
      assert.ok(feature.labelsById[id].trim(), `${artwork.id}.${dimension}.${id} retains its atomic visible-fact label`);
      assert.equal(typeof tag.label, 'string');
      assert.ok(tag.label.trim(), `${id} has a searchable canonical label`);
    }
  }
}

const dotsOrGrok = queryArtworks({ tagsByDimension: { style: ['style:dots', 'style:grok'] } });
assert.equal(dotsOrGrok.length, ARTWORKS.filter(artwork => ['dots', 'grok'].includes(artwork.styleIdentity)).length, 'OR within style dimension');
const dotsAndHat = queryArtworks({ tagsByDimension: { style: ['style:dots'], accessory: ['accessory:bucket-hat'] } });
assert.deepEqual(dotsAndHat.map(artwork => artwork.id), ['dots-lilac-bucket'], 'AND across dimensions');
const textAndTag = queryArtworks({ text: '浅紫', tagsByDimension: { accessory: ['accessory:bucket-hat'] } });
assert.deepEqual(textAndTag.map(artwork => artwork.id), ['dots-lilac-bucket']);
assert.deepEqual(queryArtworks({ text: 'does-not-exist' }), []);
assert.equal(queryArtworks({ tagsByDimension: { accessory: ['accessory:headphones'], prop: ['prop:flowers'] } }).length, 0, 'A feature query cannot invent cross-artwork combinations.');
assert.deepEqual(queryArtworks(queryForTopic('dots')).map(artwork => artwork.styleIdentity).filter((id, index, all) => all.indexOf(id) === index), ['dots']);
assert.equal(normalizeSearch('  Dots　Bot  '), 'dots bot');
assert.match(queryLabel({ tagsByDimension: { accessory: ['accessory:headphones'] } }), /耳机/);

const toggled = toggleTag({}, 'accessory:round-glasses');
assert.deepEqual(toggled.tagsByDimension.accessory, ['accessory:round-glasses']);
assert.deepEqual(toggleTag(toggled, 'accessory:round-glasses').tagsByDimension, {});

for (const malformed of [
  { tagsByDimension: { mystery: ['mystery:one'] } },
  { tagsByDimension: { style: ['style:not-registered'] } },
  { tagsByDimension: { style: { not: 'an array' } } },
  { tagsByDimension: [] }
]) {
  const normalized = normalizeTagQuery(malformed);
  assert.equal(normalized.valid, false);
  assert.equal(normalizeTagQuery(normalized).valid, false, 'Invalid input stays invalid across repeated normalization.');
  assert.deepEqual(queryArtworks(normalized), [], 'Unknown dimensions and tag IDs fail closed.');
}
const prototypeDimension = Object.fromEntries([['__proto__', ['dangerous:tag']]]);
const prototypeQuery = normalizeTagQuery({ tagsByDimension: prototypeDimension });
assert.equal(prototypeQuery.valid, false);
assert.equal(normalizeTagQuery(prototypeQuery).valid, false);
assert.deepEqual(queryArtworks(prototypeQuery), []);

const wrongDimension = normalizeTagQuery({ tagsByDimension: { accessory: ['shape:sphere'] } });
assert.equal(wrongDimension.valid, false);
assert.deepEqual(queryArtworks(wrongDimension), []);
assert.ok(Object.isFrozen(toggled.tagsByDimension.accessory));

console.log(`Artwork query: ${ARTWORKS.length} works indexed with ${TAGS.length} typed visible-fact tags.`);
