import assert from 'node:assert/strict';
import { ARTWORKS, PREVIEW_ARTWORKS, SERIES } from '../dist/studio-artwork-catalog.js?v=102';
import * as galleryQuery from '../dist/studio-tags.js?v=102';
import { createNewArtworkFixture } from './fixtures/new-artwork.mjs';

const { TAGS, TAG_DIMENSIONS, normalizeSearch, normalizeGalleryQuery, queryArtworks } = galleryQuery;
const ids = artworks => artworks.map(artwork => artwork.id);

assert.ok(ARTWORKS.length > 0, 'The active approved gallery is not empty.');
assert.equal(queryArtworks({}).length, ARTWORKS.length, 'The unfiltered gallery returns the entire dynamic eligible catalog.');
assert.equal(PREVIEW_ARTWORKS.length, 0, 'This exact release has no pending gallery candidates.');
assert.deepEqual(ids(queryArtworks({text: 'ivory capsule robot'})), ['robot-ivory-capsule-face-v98-candidate'], 'The approved robot enters gallery search under its exact released ID.');
assert.deepEqual(ids(queryArtworks({text: 'white rabbit'})), ['animal-white-rabbit-v98-candidate'], 'The approved rabbit enters gallery search under its exact released ID.');
assert.equal(TAGS.length, new Set(ARTWORKS.flatMap(artwork => artwork.featureIds)).size, 'The typed index follows approved visible facts.');
assert.equal(Object.keys(TAG_DIMENSIONS).length, 15);
assert.deepEqual(SERIES.map(series => series.id), ['dots', 'grok', 'meta-muse', 'animals', 'humans'], 'Gallery family navigation preserves the curated Dots, Grok Bot, Muse, Animals, People order.');
assert.ok(SERIES.every(series => series.labelByLanguage.en && series.labelByLanguage['zh-CN']));
assert.ok(TAGS.every(tag => tag.status === 'published' && tag.sourceScope === 'verified-visible-artwork-feature'));
assert.ok(TAGS.every(tag => tag.label && tag.labelByLanguage.en && tag.labelByLanguage['zh-CN']));
assert.ok(TAGS.every(tag => tag.aliasesByLanguage.en && tag.aliasesByLanguage['zh-CN']));
assert.ok(TAGS.every(tag => ARTWORKS.some(artwork => artwork.featureIds.includes(tag.id))));
for (const artwork of ARTWORKS) {
  for (const id of artwork.featureIds) assert.ok(TAGS.some(tag => tag.id === id), `${artwork.id} fact ${id} is indexed`);
  for (const id of artwork.detailFactIds) assert.ok(artwork.featureIds.includes(id), `${artwork.id} detail facts are actual indexed facts`);
}

const curatedAll = queryArtworks({ sort: 'curated' });
const curatedFamilyOrder = [...new Set(curatedAll.map(artwork => artwork.seriesId))];
assert.deepEqual(curatedFamilyOrder, ['dots', 'grok', 'meta-muse', 'animals', 'humans', 'independent-original'], 'Curated gallery places the five browsable families first and independent originals last.');
for (const series of SERIES) {
  assert.deepEqual(
    ids(queryArtworks({ seriesId: series.id, sort: 'curated' })),
    ids(ARTWORKS.filter(artwork => artwork.seriesId === series.id)),
    `${series.id} preserves registration order within its curated group.`
  );
}
const shuffledFixtureCatalog = [
  'animal-gray-husky', 'dots-pink-heart-shades', 'robot-ivory-capsule-face-v98-candidate',
  'candidate-grok-20261005', 'dots-rose-glasses', 'muse-sage-reading', 'human-bun-yellow'
].map(id => ARTWORKS.find(artwork => artwork.id === id));
assert.ok(shuffledFixtureCatalog.every(Boolean), 'The curated ordering fixture contains known artworks.');
assert.deepEqual(
  ids(galleryQuery.queryArtworks({ sort: 'curated' }, shuffledFixtureCatalog)),
  ['dots-pink-heart-shades', 'dots-rose-glasses', 'candidate-grok-20261005', 'muse-sage-reading', 'animal-gray-husky', 'human-bun-yellow', 'robot-ivory-capsule-face-v98-candidate'],
  'Curated order groups by family and preserves caller order for ties, with independent originals last.'
);
const englishNameSorted = queryArtworks({ sort: 'name', language: 'en' });
assert.deepEqual(
  englishNameSorted.map(artwork => artwork.titleByLanguage.en),
  englishNameSorted.map(artwork => artwork.titleByLanguage.en).slice().sort((a, b) => a.localeCompare(b, 'en')),
  'Name sorting remains independent from curated family order.'
);

assert.deepEqual(ids(queryArtworks({ text: 'headphones blue' })), ['candidate-dots-20261005'], 'English fact/name tokens combine with AND.');
assert.deepEqual(ids(queryArtworks({ text: '耳机 蓝色' })), ['candidate-dots-20261005'], 'Chinese fact/name tokens combine with AND.');
assert.deepEqual(ids(queryArtworks({ text: 'yellow bucket hat', seriesId: 'dots' })), ['dots-lilac-bucket'], 'Aliases and a selected series combine with AND.');
assert.deepEqual(ids(queryArtworks({ text: '渔夫帽', seriesId: 'dots' })), ['dots-lilac-bucket']);
assert.deepEqual(ids(queryArtworks({ text: 'sage closed book', seriesId: 'meta-muse' })), ['muse-sage-reading']);
assert.deepEqual(ids(queryArtworks({ text: 'gray mask', seriesId: 'animals' })), ['animal-gray-husky']);
assert.deepEqual(ids(queryArtworks({ text: '柴犬', seriesId: 'animals' })), ['candidate-animals-20261005']);
assert.deepEqual(ids(queryArtworks({ text: 'pink Dots' })), ['dots-rose-glasses', 'dots-pink-heart-shades'], 'Short titles and aliases support quick English search across the approved catalog.');
assert.deepEqual(ids(queryArtworks({ text: '蓝色 胡须' })), ['animal-white-cat'], 'Localized descriptions and real facts are indexed in Chinese.');
assert.deepEqual(ids(queryArtworks({ text: 'Grok capsule eyes', seriesId: 'grok' })), [
  'candidate-grok-20261005', 'grok-green-cloud', 'grok-teal-square', 'grok-coral-drop',
  'grok-white-arch', 'grok-horizontal-capsule', 'grok-soft-triangle', 'grok-soft-diamond',
  'grok-half-dome', 'grok-cylinder', 'grok-egg', 'grok-rounded-cube'
], 'All approved Grok geometries retain their indexed capsule-eye fact.');
assert.deepEqual(queryArtworks({ text: 'not-a-real-character' }), [], 'No-match search returns an empty list.');
assert.equal(queryArtworks({ seriesId: 'unregistered-series' }).length, 0, 'Unknown series fails closed.');
assert.equal(queryArtworks({ seriesId: ['dots'] }).length, 0, 'Malformed series input fails closed.');

assert.deepEqual(normalizeGalleryQuery({ text: '  Dots　Bot  ', seriesId: ' dots ' }), {
  text: 'dots bot', seriesId: 'dots', sort: 'curated', language: 'en', valid: true
});
assert.equal(normalizeSearch('  Dots　Bot  '), 'dots bot');
assert.equal(normalizeGalleryQuery({ text: 3, seriesId: '' }).valid, false);
assert.equal(normalizeGalleryQuery([]).valid, false);
assert.equal(normalizeGalleryQuery({ text: 'dots', seriesId: '__proto__' }).valid, false);
assert.deepEqual(queryArtworks(normalizeGalleryQuery({ text: 'dots', seriesId: '__proto__' })), []);
assert.equal('normalizeTagQuery' in galleryQuery, false, 'The retired multi-dimensional reveal query API is not active.');
assert.equal('queryForTopic' in galleryQuery, false, 'Topic-linked old tag browsing is no longer active.');

const fixture = createNewArtworkFixture();
assert.deepEqual(fixture.queryArtworks({ text: 'fixture only', seriesId: 'animals' }).map(artwork => artwork.id), [fixture.artwork.id], 'A new Character is found through the same data-driven query API.');
const fixtureNameSorted = fixture.queryArtworks({ seriesId: 'animals', sort: 'name', language: 'en' });
assert.deepEqual(fixtureNameSorted.map(artwork => artwork.titleByLanguage.en), fixtureNameSorted.map(artwork => artwork.titleByLanguage.en).slice().sort((a,b)=>a.localeCompare(b,'en')), 'Injected Artwork honors localized name sorting.');
assert.equal(fixture.queryArtworks({ text: fixture.artwork.titleByLanguage.en }).some(item => item.id === fixture.artwork.id), true);
assert.deepEqual(fixture.queryArtworks({ text: 'not-a-real-character' }), []);

console.log(`Artwork query: bilingual text and ${TAGS.length} approved typed facts indexed; query sorting, series and fixture discovery use the shared path.`);
