import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
  ARTWORKS,
  getAsset,
  getArtwork,
  validateArtwork
} from '../dist/studio-artwork-catalog.js?v=111';
import {
  TEMPLATE_REGISTRY,
  getTemplateForArtwork,
  getTemplateOptionFields,
  getTemplateRecipe,
  validateTemplateDefinition,
  validateTemplateOptions
} from '../dist/studio-edit-templates.js?v=111';
import {GALLERY_LOOK_ASSETS} from '../dist/studio-gallery-look-data.js?v=111';
import {
  GALLERY_LOOKS,
  getDefaultLook,
  getGalleryLook,
  getLookAsset,
  getLookOptionFields,
  queryGalleryLooks,
  validateGalleryLook
} from '../dist/studio-gallery-looks.js?v=111';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

function webpInfo(bytes, label) {
  assert(bytes.length >= 30 && bytes.toString('ascii', 0, 4) === 'RIFF'
    && bytes.toString('ascii', 8, 12) === 'WEBP', `Not a WebP cover: ${label}`);
  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const chunk = bytes.toString('ascii', offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    const data = offset + 8;
    assert(data + size <= bytes.length, `Truncated WebP chunk ${chunk}: ${label}`);
    if (chunk === 'VP8X') {
      assert(size >= 10, `Invalid VP8X dimensions: ${label}`);
      const flags = bytes[data];
      return {
        width: 1 + bytes[data + 4] + bytes[data + 5] * 0x100 + bytes[data + 6] * 0x10000,
        height: 1 + bytes[data + 7] + bytes[data + 8] * 0x100 + bytes[data + 9] * 0x10000,
        hasAlpha: Boolean(flags & 0x10)
      };
    }
    offset = data + size + (size % 2);
  }
  assert.fail(`No extended WebP dimensions: ${label}`);
}

assert.equal(ARTWORKS.length, 44, 'GalleryLook must not add or replace approved Artwork records.');
assert.equal(TEMPLATE_REGISTRY.length, 44, 'Each source Artwork retains its original registered Template.');
assert.equal(GALLERY_LOOKS.length, 90, 'There must be one GalleryLook per registered appearance.');
assert.equal(GALLERY_LOOKS.filter(look => look.isDefault).length, 44, 'All 44 original default entries remain.');
assert.equal(GALLERY_LOOKS.filter(look => !look.isDefault).length, 46, 'There are exactly 46 alternate appearance entries.');
assert.equal(GALLERY_LOOK_ASSETS.length, 92, 'Each alternate appearance has one 256px and one 512px cover.');
assert(Object.isFrozen(GALLERY_LOOKS), 'The runtime GalleryLook registry must be immutable.');
assert(Object.isFrozen(GALLERY_LOOK_ASSETS), 'The generated look asset registry must be immutable.');

const originalArtworkSnapshot = JSON.stringify(ARTWORKS);
const registeredIds = new Set();
const registeredAppearances = new Set();
const assignedRecipes = new Set();
const assetByRef = new Map(GALLERY_LOOK_ASSETS.map(asset => [asset.ref, asset]));
assert.equal(assetByRef.size, GALLERY_LOOK_ASSETS.length, 'Derived asset refs must be unique.');

for (const artwork of ARTWORKS) {
  assert(validateArtwork(artwork), `Source Artwork must remain valid: ${artwork.id}`);
  assert.equal(getArtwork(artwork.id), artwork, `Source lookup must preserve exact Artwork identity: ${artwork.id}`);
  const template = getTemplateForArtwork(artwork);
  assert(template && validateTemplateDefinition(template).valid, `Source Template must remain valid: ${artwork.id}`);
  assert.equal(template.artworkBinding?.artworkId, artwork.id, `Template source Artwork ID must remain exact: ${artwork.id}`);
  assert.equal(template.artworkBinding?.artworkVersion, artwork.version, `Template source Artwork version must remain exact: ${artwork.id}`);

  const appearances = template.options?.appearance ?? [];
  const sourceDefault = getDefaultLook(artwork);
  assert(sourceDefault, `Source Artwork must resolve its default GalleryLook: ${artwork.id}`);
  assert.equal(sourceDefault.id, artwork.id, `Default GalleryLook must preserve the source ID: ${artwork.id}`);
  assert.equal(sourceDefault.appearance, template.defaultOptions.appearance, `Default GalleryLook appearance: ${artwork.id}`);
  assert.deepEqual(sourceDefault.defaultOptions, template.defaultOptions, `Default GalleryLook options: ${artwork.id}`);
  assert.equal(sourceDefault.assetRefs.poster, artwork.assetRefs.poster, `Default GalleryLook poster reuse: ${artwork.id}`);
  assert.equal(Object.hasOwn(sourceDefault.assetRefs, 'poster512'), Boolean(artwork.assetRefs.poster512), `Default poster512 presence must mirror the source registration: ${artwork.id}`);
  if (artwork.assetRefs.poster512) assert.equal(sourceDefault.assetRefs.poster512, artwork.assetRefs.poster512);

  for (const appearance of appearances) {
    const matching = GALLERY_LOOKS.filter(look => look.artworkId === artwork.id
      && look.artworkVersion === artwork.version && look.templateId === template.id
      && look.templateVersion === template.version && look.appearance === appearance.id);
    assert.equal(matching.length, 1, `Every registered appearance has exactly one GalleryLook: ${artwork.id} ${appearance.id}`);
    const look = matching[0];
    const isDefault = appearance.id === template.defaultOptions.appearance;
    assert.equal(look.isDefault, isDefault, `Only the original appearance is default: ${look.id}`);
    assert.equal(look.id, isDefault ? artwork.id : `${artwork.id}--${appearance.id}`, `Stable GalleryLook ID: ${look.id}`);
    assert.equal(look.version, `${artwork.version}-${template.version}`, `Exact source/template GalleryLook version: ${look.id}`);
    assert.equal(getGalleryLook(look.id), look, `GalleryLook ID lookup: ${look.id}`);
    assert.equal(getGalleryLook(look.id, look.version), look, `GalleryLook exact-version lookup: ${look.id}`);
    assert.equal(getGalleryLook(look.id, `${look.version}-unknown`), null, `Unknown GalleryLook version must fail closed: ${look.id}`);
    assert(validateGalleryLook(look), `GalleryLook validates against exact source approvals: ${look.id}`);
    assert(registeredIds.add(look.id) && registeredIds.has(look.id), `GalleryLook ID uniqueness: ${look.id}`);
    const appearanceKey = `${template.id}\u0000${template.version}\u0000${appearance.id}`;
    assert(!registeredAppearances.has(appearanceKey), `Duplicate appearance entry: ${look.id}`);
    registeredAppearances.add(appearanceKey);

    const optionResult = validateTemplateOptions(template, look.defaultOptions);
    assert(optionResult.valid, `Default look options must remain legal: ${look.id}`);
    assert.equal(optionResult.options.appearance, look.appearance, `Look default must stay on its fixed appearance: ${look.id}`);
    const defaultRecipe = getTemplateRecipe(template, look.defaultOptions);
    assert(defaultRecipe && defaultRecipe.id === look.defaultRecipeId, `Default look must name an exact legal recipe: ${look.id}`);

    const appearanceRecipes = template.recipes.filter(recipe => recipe.selections.appearance === look.appearance);
    assert(appearanceRecipes.length > 0, `Every GalleryLook appearance has legal recipes: ${look.id}`);
    for (const recipe of appearanceRecipes) {
      const recipeKey = `${template.id}\u0000${template.version}\u0000${recipe.id}`;
      assert(!assignedRecipes.has(recipeKey), `Recipe cannot belong to multiple GalleryLooks: ${recipe.id}`);
      assignedRecipes.add(recipeKey);
    }

    const fields = getLookOptionFields(template, look);
    assert(fields.every(field => field.key !== 'appearance' && field.options.length >= 2), `Only variable non-appearance fields are exposed: ${look.id}`);
    const rawFields = getTemplateOptionFields(template).filter(field => field.key !== 'appearance');
    const expectedFields = rawFields.flatMap(field => {
      const reachable = new Set(appearanceRecipes.map(recipe => recipe.selections[field.key]).filter(value => value !== undefined));
      if (reachable.size < 2) return [];
      return [{key: field.key, options: field.options.filter(option => reachable.has(option.id)).map(option => option.id)}];
    });
    assert.deepEqual(fields.map(field => ({key: field.key, options: field.options.map(option => option.id)})), expectedFields,
      `Fixed-appearance controls expose every and only variable legal field value: ${look.id}`);

    const altered = {...look, appearance: '__unregistered_appearance__'};
    assert.equal(validateGalleryLook(altered), false, `Unknown appearance must be rejected: ${look.id}`);
    assert.deepEqual(getLookOptionFields(template, altered), [], `Unknown appearance must not expose controls: ${look.id}`);

    if (isDefault) {
      assert.equal(getLookAsset(look.assetRefs.poster), getAsset(artwork.assetRefs.poster), `Default look delegates source poster: ${look.id}`);
      if (artwork.assetRefs.poster512) assert.equal(getLookAsset(look.assetRefs.poster512), getAsset(artwork.assetRefs.poster512));
    } else {
      const candidates = template.recipes.filter(recipe => recipe.selections.appearance === look.appearance);
      const fieldsForScore = getTemplateOptionFields(template).map(field => field.key).filter(key => key !== 'appearance');
      const expectedDefault = candidates.slice().sort((left, right) => {
        const score = recipe => fieldsForScore.reduce((count, key) => count + (recipe.selections[key] === template.defaultOptions[key] ? 1 : 0), 0);
        return score(right) - score(left) || left.id.localeCompare(right.id, 'en');
      })[0];
      assert.equal(look.defaultRecipeId, expectedDefault.id, `Alternate default preserves the most source defaults with a stable tie-break: ${look.id}`);
      for (const [key, size] of [['poster', 256], ['poster512', 512]]) {
        const asset = assetByRef.get(look.assetRefs[key]);
        assert(asset, `Derived ${key} is registered: ${look.id}`);
        assert.equal(asset.lookId, look.id);
        assert.equal(asset.lookVersion, look.version);
        assert.equal(asset.recipeId, look.defaultRecipeId);
        assert.equal(asset.width, size);
        assert.equal(asset.height, size);
        assert.equal(asset.alpha?.hasAlpha, true);
        assert.equal(asset.alpha?.hasTransparency, true);
        assert.equal(getLookAsset(asset.ref), asset, `Derived asset lookup: ${asset.ref}`);
        const filePath = path.resolve(root, 'dist', asset.path.replace(/^\.\//, ''));
        assert(filePath.startsWith(path.resolve(root, 'dist/assets/gallery-looks') + path.sep), `Derived asset stays in its dedicated directory: ${asset.path}`);
        const bytes = await fs.readFile(filePath);
        assert.equal(bytes.length, asset.byteSize, `Derived asset byte length: ${asset.ref}`);
        assert.equal(hash(bytes), asset.sha256, `Derived asset content hash: ${asset.ref}`);
        const info = webpInfo(bytes, asset.ref);
        assert.deepEqual({width: info.width, height: info.height}, {width: size, height: size});
        assert.equal(info.hasAlpha, true, `Derived WebP includes alpha: ${asset.ref}`);
      }
    }
  }
}

assert.equal(registeredIds.size, 90);
assert.equal(registeredAppearances.size, 90);
assert.equal(assignedRecipes.size, 540, 'All and only the 540 current legal recipes must be represented once.');
assert.equal(JSON.stringify(ARTWORKS), originalArtworkSnapshot, 'Source Artwork records remain byte-for-byte unchanged in memory.');
assert.equal(getGalleryLook('__unknown__'), null);
assert.equal(getDefaultLook({id: ARTWORKS[0].id, version: '__unknown__'}), null);
assert.deepEqual(getLookOptionFields(getTemplateForArtwork(ARTWORKS[0]), {...getDefaultLook(ARTWORKS[0]), extra: true}), [], 'Noncanonical extra fields are rejected.');
assert.equal(getLookAsset('look:unknown@v1:poster256'), null);

const cloudLookId = 'candidate-dots-20261005--cloud';
assert(queryGalleryLooks({text: 'cloud'}).some(look => look.id === cloudLookId), 'English Cloud search finds the independent cloud look.');
assert(queryGalleryLooks({text: '云团'}).some(look => look.id === cloudLookId), 'Registered Chinese cloud name search finds the independent cloud look.');
assert(queryGalleryLooks({text: '云朵'}).some(look => look.id === cloudLookId), 'Common Chinese cloud alias search finds the independent cloud look.');
assert.equal(queryGalleryLooks({text: 'cloud', seriesId: 'animals'}).length, 0, 'Series and text filters combine.');
assert.equal(queryGalleryLooks({seriesId: '__proto__'}).length, 0, 'Invalid series fails closed.');
const nameSorted = queryGalleryLooks({sort: 'name', language: 'zh-CN'}).map(look => look.titleByLanguage['zh-CN']);
assert.deepEqual(nameSorted, nameSorted.slice().sort((left, right) => left.localeCompare(right, 'zh-CN')), 'Name sorting uses the selected language.');

console.log('GalleryLook core verification passed: 90 fixed appearances; 540 legal recipes assigned once; 44 source Artwork records unchanged; 92 transparent derived covers hash-verified.');
