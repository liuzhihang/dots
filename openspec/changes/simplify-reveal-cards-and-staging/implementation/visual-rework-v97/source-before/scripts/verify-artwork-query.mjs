import assert from 'node:assert/strict';
import { ARTWORKS, SERIES } from '../dist/studio-artwork-catalog.js?v=96';
import * as galleryQuery from '../dist/studio-tags.js?v=96';

const { TAGS, TAG_DIMENSIONS, normalizeSearch, normalizeGalleryQuery, queryArtworks } = galleryQuery;
const ids = artworks => artworks.map(artwork => artwork.id);

assert.equal(ARTWORKS.length, 15);
assert.equal(queryArtworks({}).length, 15, 'The unfiltered gallery returns all 15 eligible works.');
assert.equal(TAGS.length, 89, 'The internal typed index covers all 89 source-verified facts.');
assert.equal(Object.keys(TAG_DIMENSIONS).length, 15);
assert.deepEqual(SERIES.map(series => series.id).sort(), ['animals', 'dots', 'grok', 'humans', 'meta-muse']);
assert.ok(SERIES.every(series => series.labelByLanguage.en && series.labelByLanguage['zh-CN']));
assert.ok(TAGS.every(tag => tag.status === 'published' && tag.sourceScope === 'verified-visible-artwork-feature'));
assert.ok(TAGS.every(tag => tag.label && tag.labelByLanguage.en && tag.labelByLanguage['zh-CN']));
assert.ok(TAGS.every(tag => tag.aliasesByLanguage.en && tag.aliasesByLanguage['zh-CN']));
assert.ok(TAGS.every(tag => ARTWORKS.some(artwork => artwork.featureIds.includes(tag.id))));
for (const artwork of ARTWORKS) {
  for (const id of artwork.featureIds) assert.ok(TAGS.some(tag => tag.id === id), `${artwork.id} fact ${id} is indexed`);
  for (const id of artwork.detailFactIds) assert.ok(artwork.featureIds.includes(id), `${artwork.id} detail facts are actual indexed facts`);
}

assert.deepEqual(ids(queryArtworks({ text: 'headphones blue' })), ['candidate-dots-20261005'], 'English fact/name tokens combine with AND.');
assert.deepEqual(ids(queryArtworks({ text: '耳机 蓝色' })), ['candidate-dots-20261005'], 'Chinese fact/name tokens combine with AND.');
assert.deepEqual(ids(queryArtworks({ text: 'yellow bucket hat', seriesId: 'dots' })), ['dots-lilac-bucket'], 'Aliases and a selected series combine with AND.');
assert.deepEqual(ids(queryArtworks({ text: '渔夫帽', seriesId: 'dots' })), ['dots-lilac-bucket']);
assert.deepEqual(ids(queryArtworks({ text: 'sage closed book', seriesId: 'meta-muse' })), ['muse-sage-reading']);
assert.deepEqual(ids(queryArtworks({ text: 'gray mask', seriesId: 'animals' })), ['animal-gray-husky']);
assert.deepEqual(ids(queryArtworks({ text: '柴犬', seriesId: 'animals' })), ['candidate-animals-20261005']);
assert.deepEqual(ids(queryArtworks({ text: 'pink Dots' })), ['dots-rose-glasses'], 'Short titles and aliases support quick English search.');
assert.deepEqual(ids(queryArtworks({ text: '蓝色 胡须' })), ['animal-white-cat'], 'Localized descriptions and real facts are indexed in Chinese.');
assert.deepEqual(ids(queryArtworks({ text: 'Grok capsule eyes', seriesId: 'grok' })), ['candidate-grok-20261005', 'grok-green-cloud', 'grok-teal-square']);
assert.deepEqual(queryArtworks({ text: 'not-a-real-character' }), [], 'No-match search returns an empty list.');
assert.equal(queryArtworks({ seriesId: 'unregistered-series' }).length, 0, 'Unknown series fails closed.');
assert.equal(queryArtworks({ seriesId: ['dots'] }).length, 0, 'Malformed series input fails closed.');

assert.deepEqual(normalizeGalleryQuery({ text: '  Dots　Bot  ', seriesId: ' dots ' }), {
  text: 'dots bot', seriesId: 'dots', valid: true
});
assert.equal(normalizeSearch('  Dots　Bot  '), 'dots bot');
assert.equal(normalizeGalleryQuery({ text: 3, seriesId: '' }).valid, false);
assert.equal(normalizeGalleryQuery([]).valid, false);
assert.equal(normalizeGalleryQuery({ text: 'dots', seriesId: '__proto__' }).valid, false);
assert.deepEqual(queryArtworks(normalizeGalleryQuery({ text: 'dots', seriesId: '__proto__' })), []);
assert.equal('normalizeTagQuery' in galleryQuery, false, 'The retired multi-dimensional reveal query API is not active.');
assert.equal('queryForTopic' in galleryQuery, false, 'Topic-linked old tag browsing is no longer active.');

console.log(`Artwork query: bilingual text and ${TAGS.length} typed facts indexed; tokens and series combine with AND.`);
