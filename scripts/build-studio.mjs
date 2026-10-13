import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {getPublishFiles, verifyDeliveryAssets} from './lossless-delivery.mjs';

const root = path.resolve(import.meta.dirname, '..');
const revision = 111;
const cacheQuery = `?v=${revision}`;
const catalogRevision = 'artwork-catalog-20261011-v100';
const evidenceDirectory = resolveEvidenceDirectory('.artifacts/build');
const templateSourcesPath = 'dist/assets/templates/sources.json';
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

export async function listTree(dir) {
  const result = [];
  for (const entry of await fs.readdir(dir, {withFileTypes: true})) {
    const filePath = path.join(dir, entry.name);
    assert(!entry.isSymbolicLink(), `Symlink is not a publish file: ${filePath}`);
    result.push(...entry.isDirectory() ? await listTree(filePath) : [filePath]);
  }
  return result.sort();
}

function isSafePublishPath(filePath) {
  return typeof filePath === 'string' && /^dist\/(?!.*(?:\.\.|\\)).+/.test(filePath);
}

export function checkInventory(actual, expected) {
  assert(Array.isArray(actual), 'Actual publish inventory must be an array');
  assert(Array.isArray(expected), 'Publish manifest files must be an array');
  assert.equal(new Set(actual).size, actual.length, 'Duplicate file in actual publish inventory');
  assert.equal(new Set(expected).size, expected.length, 'Duplicate publish path');
  for (const filePath of [...actual, ...expected]) assert(isSafePublishPath(filePath), `Unsafe published path: ${filePath}`);
  assert.deepEqual(actual.slice().sort(), expected.slice().sort(), 'Publish tree differs from explicit manifest (missing or orphan file)');
}

export function checkPreviewOnlyFiles(files, previewOnlyFiles, expectedPreviewOnlyFiles = null) {
  assert(Array.isArray(files), 'Publish manifest files must be an array');
  assert(Array.isArray(previewOnlyFiles), 'Publish manifest previewOnlyFiles must be an array');
  assert.equal(new Set(files).size, files.length, 'Duplicate publish path');
  assert.equal(new Set(previewOnlyFiles).size, previewOnlyFiles.length, 'Duplicate preview-only path');
  const published = new Set(files);
  for (const filePath of previewOnlyFiles) {
    assert(isSafePublishPath(filePath), `Unsafe preview-only path: ${filePath}`);
    assert(published.has(filePath), `Preview-only file is outside the published dist tree: ${filePath}`);
  }
  if (expectedPreviewOnlyFiles !== null) {
    assert(Array.isArray(expectedPreviewOnlyFiles), 'Expected pending inventory must be an array');
    assert.equal(new Set(expectedPreviewOnlyFiles).size, expectedPreviewOnlyFiles.length, 'Duplicate expected pending path');
    assert.deepEqual(previewOnlyFiles.slice().sort(), expectedPreviewOnlyFiles.slice().sort(), 'previewOnlyFiles differs from registered pending resources');
  }
  return previewOnlyFiles.slice().sort();
}

function assetPathFromReference(reference) {
  assert.equal(typeof reference, 'string', 'Asset reference must be a string');
  assert(reference.startsWith('./assets/'), `Asset must be a local published resource: ${reference}`);
  const relativePath = path.posix.normalize(reference.slice(2));
  assert(relativePath.startsWith('assets/'), `Asset path escapes the published asset directory: ${reference}`);
  assert(!relativePath.startsWith('../') && !path.posix.isAbsolute(relativePath), `Unsafe asset path: ${reference}`);
  return `dist/${relativePath}`;
}

async function verifyRegisteredAsset(asset, actual, expectedAssets) {
  const filePath = assetPathFromReference(asset?.path);
  expectedAssets.add(filePath);
  assert(actual.includes(filePath), `Registered asset missing ${asset.id ?? filePath}`);
  assert.match(asset.sha256 ?? '', /^[a-f0-9]{64}$/, `Registered asset ${asset.id ?? filePath} has no SHA-256`);
  const bytes = await fs.readFile(path.join(root, filePath));
  assert.equal(bytes.length, asset.byteSize, `Asset byte count ${asset.id ?? filePath}`);
  assert.equal(hash(bytes), asset.sha256, `Asset hash ${asset.id ?? filePath}`);
}

function readModuleDependencies(source, filePath) {
  const dependencies = [...source.matchAll(/(?:from\s*|import\s*\()(['"])(\.\/[^'"]+\.js(?:\?[^'"]*)?)\1/g)]
    .map(match => match[2]);
  if (filePath.endsWith('.html')) {
    dependencies.push(...[...source.matchAll(/(?:src|href)="\.\/(studio[^"?]+)(?:\?([^"\s]*))?"/g)]
      .map(match => `./${match[1]}${match[2] === undefined ? '' : `?${match[2]}`}`));
  }
  return dependencies;
}

function collectHtmlAssets(source, expectedAssets) {
  for (const match of source.matchAll(/(?:src|href)="(?:\.\/|\/)(assets\/[^"?#]+)"/g)) {
    expectedAssets.add(`dist/${match[1]}`);
  }
}

function collectCssAssets(source, expectedAssets) {
  for (const match of source.matchAll(/url\(\s*(['"]?)(\.\/assets\/[^'")?#]+)\1(?:\?[^'")]+)?\s*\)/g)) {
    expectedAssets.add(assetPathFromReference(match[2]));
  }
}

function dimOf(dim) {
  if (Array.isArray(dim) && dim.length === 2) return {width: dim[0], height: dim[1]};
  return dim && typeof dim === 'object' ? {width: dim.width, height: dim.height} : null;
}

function pngDimensions(bytes, filePath) {
  const signature = [137, 80, 78, 71, 13, 10, 26, 10];
  assert(bytes.length >= 24 && signature.every((value, index) => bytes[index] === value), `Template asset is not a PNG: ${filePath}`);
  assert.equal(bytes.toString('ascii', 12, 16), 'IHDR', `Template PNG has no IHDR: ${filePath}`);
  return {width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20)};
}

function webpDimensions(bytes, filePath) {
  assert(bytes.length >= 30 && bytes.toString('ascii', 0, 4) === 'RIFF'
    && bytes.toString('ascii', 8, 12) === 'WEBP', `Gallery look cover is not a WebP: ${filePath}`);
  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const chunk = bytes.toString('ascii', offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;
    assert(dataOffset + size <= bytes.length, `Truncated WebP chunk ${chunk}: ${filePath}`);
    if (chunk === 'VP8X') {
      assert(size >= 10, `Invalid extended WebP dimensions: ${filePath}`);
      const flags = bytes[dataOffset];
      return {
        width: 1 + bytes[dataOffset + 4] + bytes[dataOffset + 5] * 0x100 + bytes[dataOffset + 6] * 0x10000,
        height: 1 + bytes[dataOffset + 7] + bytes[dataOffset + 8] * 0x100 + bytes[dataOffset + 9] * 0x10000,
        hasAlpha: Boolean(flags & 0x10)
      };
    }
    offset = dataOffset + size + (size % 2);
  }
  assert.fail(`Gallery look cover has no extended WebP dimensions: ${filePath}`);
}

function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stable(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function compareSourceAssets(left, right) {
  return tupleKey(left).localeCompare(tupleKey(right), 'en');
}

function collectLayerReferences(value, output = []) {
  if (!value || typeof value !== 'object') return output;
  if (typeof value.id === 'string' && typeof value.version === 'string' && typeof value.purpose === 'string') {
    output.push({id: value.id, version: value.version, purpose: value.purpose});
    return output;
  }
  for (const child of Object.values(value)) collectLayerReferences(child, output);
  return output;
}

// Include every finite recipe, tint/clipping mask, and real option thumbnail.
// Limiting the traversal to asset-bearing declarations avoids treating identity
// metadata as assets while retaining the legacy fixed-layer contract.
export function collectTemplateAssetReferences(template) {
  const declarations = template.schemaVersion === 2
    ? [template.recipes, Object.values(template.options ?? {}).flatMap(options => options.map(option => option.thumbnailAssets ?? []))]
    : template.layers;
  const unique = new Map(collectLayerReferences(declarations).map(reference => [tupleKey(reference), reference]));
  return [...unique.values()];
}

function tupleKey(asset) {
  return `${asset.id}\u0000${asset.version}\u0000${asset.purpose}`;
}

function templateIds(value) {
  if (Array.isArray(value)) return value.map(item => typeof item === 'string' ? item : item?.id).filter(Boolean).sort();
  if (value && typeof value === 'object') return Object.keys(value).sort();
  return [];
}

async function verifyTemplateSources({actual, expectedAssets, previewFiles, registry}) {
  assert(actual.includes(templateSourcesPath), `Missing ${templateSourcesPath}`);
  const sourcesFile = `./${templateSourcesPath.slice('dist/'.length)}`;
  const sourcesPath = assetPathFromReference(sourcesFile);
  expectedAssets.add(sourcesPath);
  const sourceManifest = JSON.parse(await fs.readFile(path.join(root, templateSourcesPath), 'utf8'));
  assert.equal(sourceManifest.schemaVersion, 1, 'Template source manifest schemaVersion');
  for (const template of registry) {
    const canvas = dimOf(template.canvas);
    assert(canvas && Number.isInteger(canvas.width) && canvas.width > 0 && Number.isInteger(canvas.height) && canvas.height > 0, `Template canvas dimensions: ${template.id}`);
  }
  assert(Array.isArray(sourceManifest.assets), 'Template source manifest assets must be an array');
  const sourceRows = sourceManifest.assets;
  const sourceByTuple = new Map();
  for (const asset of sourceRows) {
    assert.equal(typeof asset.id, 'string', 'Template source asset id');
    assert.equal(typeof asset.version, 'string', `Template source asset version ${asset.id}`);
    assert.equal(typeof asset.purpose, 'string', `Template source asset purpose ${asset.id}`);
    assert(['pending', 'approved', 'approved-for-declared-scope'].includes(asset.status), `Template source asset review status ${asset.id}`);
    assert.match(asset.sha256 ?? '', /^[a-f0-9]{64}$/, `Template source asset hash ${asset.id}`);
    assert(Number.isSafeInteger(asset.byteSize) && asset.byteSize > 0, `Template source asset byte size ${asset.id}`);
    assert.equal(asset.mime, 'image/png', `Template source asset MIME ${asset.id}`);
    const dim = dimOf({width: asset.width, height: asset.height});
    assert(dim && Number.isInteger(dim.width) && dim.width > 0 && Number.isInteger(dim.height) && dim.height > 0, `Template source asset dimensions ${asset.id}`);
    const key = tupleKey(asset);
    assert(!sourceByTuple.has(key), `Duplicate template source asset tuple ${key}`);
    sourceByTuple.set(key, asset);
    const filePath = assetPathFromReference(asset.path);
    assert(filePath.startsWith('dist/assets/templates/'), `Template layer escaped the template asset directory: ${asset.path}`);
    expectedAssets.add(filePath);
    assert(actual.includes(filePath), `Template source asset missing: ${asset.id}`);
    const bytes = await fs.readFile(path.join(root, filePath));
    assert.equal(bytes.length, asset.byteSize, `Template source byte size ${asset.id}`);
    assert.equal(hash(bytes), asset.sha256, `Template source hash ${asset.id}`);
    assert.deepEqual(pngDimensions(bytes, filePath), dim, `Template source dimensions ${asset.id}`);
    const template = registry.find(item => collectTemplateAssetReferences(item).some(reference => tupleKey(reference) === key));
    assert(template, `Template source asset is not referenced by a registered layer: ${asset.id}`);
    const sourcePending = asset.status === 'pending';
    if (sourcePending) previewFiles.add(filePath);
    const productionReady = template.status === 'approved'
      && template.engineeringStatus === 'passed'
      && ['approved', 'approved-for-declared-scope'].includes(template.artApproval?.status);
    assert.equal(sourcePending, !productionReady, `Template source status differs from template approval: ${asset.id}`);
    assert.equal(asset.publicEditable, productionReady, `Template layer editability must exactly match its approved Template binding: ${asset.id}`);
  }

  const refs = new Map();
  for (const template of registry) {
    for (const reference of collectTemplateAssetReferences(template)) refs.set(tupleKey(reference), reference);
  }
  assert.deepEqual(templateIds(sourceManifest.templates), registry.map(item => item.id).sort(), 'Template source manifest template IDs differ from the runtime registry');
  const sourceTemplateRows = Array.isArray(sourceManifest.templates)
    ? new Map(sourceManifest.templates.map(row => [typeof row === 'string' ? row : row?.id, row]).filter(([id]) => id))
    : new Map(Object.entries(sourceManifest.templates || {}));
  for (const template of registry) {
    const sourceTemplate = sourceTemplateRows.get(template.id);
    if (typeof sourceTemplate === 'object') {
      assert.equal(sourceTemplate.version, template.version, `Template manifest version ${template.id}`);
      assert.equal(sourceTemplate.status, template.status, `Template manifest status ${template.id}`);
      assert.equal(sourceTemplate.engineeringStatus, template.engineeringStatus, `Template manifest engineering status ${template.id}`);
      assert.equal(sourceTemplate.artworkBinding?.id, template.artworkBinding?.artworkId, `Template binding artwork ID ${template.id}`);
      assert.equal(sourceTemplate.artworkBinding?.version, template.artworkBinding?.artworkVersion, `Template binding artwork version ${template.id}`);
      const productionReady = template.status === 'approved'
        && template.engineeringStatus === 'passed'
        && ['approved', 'approved-for-declared-scope'].includes(template.artApproval?.status);
      assert.equal(sourceTemplate.publicEditable, productionReady, `Template public editability differs from its exact approval state: ${template.id}`);
    }
  }
  assert.deepEqual([...sourceByTuple.keys()].sort(), [...refs.keys()].sort(), 'Template layer references and source registrations must match exactly');
  for (const reference of refs.values()) {
    const source = sourceByTuple.get(tupleKey(reference));
    assert(source, `Template layer ref has no exact source registration: ${reference.id}`);
    assert.equal(source.version, reference.version, `Template source version mismatch ${reference.id}`);
    assert.equal(source.purpose, reference.purpose, `Template source purpose mismatch ${reference.id}`);
    const template = registry.find(item => collectTemplateAssetReferences(item).some(candidate => tupleKey(candidate) === tupleKey(reference)));
    if (template.status !== 'approved') assert.equal(source.status, 'pending', `Pending template ${template.id} has an unmarked source layer ${reference.id}`);
  }

  return {sourceManifest, sourceRows};
}

async function verifyGalleryLookAssets({actual, expectedAssets, artworks, templateRegistry, templateSourceRows}) {
  const gallery = await import('../dist/studio-gallery-looks.js?v=111');
  const galleryData = await import('../dist/studio-gallery-look-data.js?v=111');
  const renderer = await import('../dist/studio-renderer.js?v=111');
  const templateApi = await import('../dist/studio-edit-templates.js?v=111');
  const looks = gallery.GALLERY_LOOKS;
  const assets = galleryData.GALLERY_LOOK_ASSETS;
  assert.equal(looks.length, 90, 'GalleryLook registry must have exactly 90 fixed appearances');
  assert.equal(looks.filter(look => look.isDefault).length, 44, 'Every approved source Artwork must retain one default look');
  assert.equal(looks.filter(look => !look.isDefault).length, 46, 'Exactly 46 alternate looks need derived covers');
  assert.equal(assets.length, 92, 'Every alternate look needs 256px and 512px derived covers');
  assert.equal(new Set(looks.map(look => look.id)).size, looks.length, 'GalleryLook IDs must be unique');
  assert.equal(new Set(assets.map(asset => asset.ref)).size, assets.length, 'Gallery look asset refs must be unique');

  const artworkByBinding = new Map(artworks.map(artwork => [`${artwork.id}\u0000${artwork.version}`, artwork]));
  const templateByBinding = new Map(templateRegistry.map(template => [`${template.id}\u0000${template.version}`, template]));
  const sourceByTuple = new Map(templateSourceRows.map(asset => [tupleKey(asset), asset]));
  const assignedRecipes = new Map();
  const coverPaths = new Set();
  let recipeCount = 0;

  for (const look of looks) {
    assert(gallery.validateGalleryLook(look), `GalleryLook failed exact registered validation: ${look.id}`);
    const artwork = artworkByBinding.get(`${look.artworkId}\u0000${look.artworkVersion}`);
    const template = templateByBinding.get(`${look.templateId}\u0000${look.templateVersion}`);
    assert(artwork, `GalleryLook has no exact current Artwork: ${look.id}`);
    assert(template, `GalleryLook has no exact current Template: ${look.id}`);
    assert.equal(template.artworkBinding?.artworkId, artwork.id, `GalleryLook Template Artwork ID binding: ${look.id}`);
    assert.equal(template.artworkBinding?.artworkVersion, artwork.version, `GalleryLook Template Artwork version binding: ${look.id}`);
    const recipe = templateApi.getTemplateRecipe(template, look.defaultOptions);
    assert(recipe && recipe.id === look.defaultRecipeId, `GalleryLook default is not an exact legal recipe: ${look.id}`);
    assert.equal(recipe.selections.appearance, look.appearance, `GalleryLook default recipe appearance: ${look.id}`);

    const recipesForAppearance = template.recipes.filter(row => row.selections.appearance === look.appearance);
    assert(recipesForAppearance.length > 0, `GalleryLook appearance has no recipes: ${look.id}`);
    for (const registeredRecipe of recipesForAppearance) {
      const recipeKey = `${template.id}\u0000${template.version}\u0000${registeredRecipe.id}`;
      assert(!assignedRecipes.has(recipeKey), `Recipe is assigned to multiple GalleryLooks: ${registeredRecipe.id}`);
      assignedRecipes.set(recipeKey, look.id);
      recipeCount += 1;
    }

    if (look.isDefault) {
      assert.equal(look.id, artwork.id, `Default GalleryLook must retain its Artwork ID: ${look.id}`);
      assert.deepEqual(look.defaultOptions, template.defaultOptions, `Default GalleryLook must retain exact Template default: ${look.id}`);
      assert.equal(look.assetRefs.poster, artwork.assetRefs.poster, `Default GalleryLook must reuse the source poster: ${look.id}`);
      assert.equal(Object.hasOwn(look.assetRefs, 'poster512'), Boolean(artwork.assetRefs.poster512), `Default poster512 must be present only when the source registers one: ${look.id}`);
      if (artwork.assetRefs.poster512) assert.equal(look.assetRefs.poster512, artwork.assetRefs.poster512, `Default GalleryLook poster512 source ref: ${look.id}`);
      continue;
    }

    const sourceAssets = templateApi.getRequiredTemplateAssets(template, look.defaultOptions, {includeAllOptionThumbnails: false})
      .map(reference => {
        const source = sourceByTuple.get(tupleKey(reference));
        assert(source, `GalleryLook source layer is not registered: ${look.id} ${reference.id}`);
        assert.equal(source.status, 'approved', `GalleryLook source layer is not approved: ${look.id} ${reference.id}`);
        assert.equal(source.publicEditable, true, `GalleryLook source layer is not public-editable: ${look.id} ${reference.id}`);
        return {id: source.id, version: source.version, purpose: source.purpose, path: source.path, sha256: source.sha256};
      })
      .sort(compareSourceAssets);
    const sourceRecipeSha256 = hash(Buffer.from(stable(recipe)));
    for (const [key, size] of [['poster', 256], ['poster512', 512]]) {
      const ref = look.assetRefs[key];
      const asset = gallery.getLookAsset(ref);
      assert(asset, `GalleryLook is missing its registered ${key} cover: ${look.id}`);
      assert.equal(asset.lookId, look.id, `GalleryLook cover owner: ${look.id} ${key}`);
      assert.equal(asset.lookVersion, look.version, `GalleryLook cover version: ${look.id} ${key}`);
      assert.equal(asset.artworkId, artwork.id, `GalleryLook cover Artwork binding: ${look.id} ${key}`);
      assert.equal(asset.templateId, template.id, `GalleryLook cover Template binding: ${look.id} ${key}`);
      assert.equal(asset.appearance, look.appearance, `GalleryLook cover appearance binding: ${look.id} ${key}`);
      assert.equal(asset.recipeId, recipe.id, `GalleryLook cover recipe binding: ${look.id} ${key}`);
      assert.equal(asset.sourceRecipeSha256, sourceRecipeSha256, `GalleryLook cover source recipe hash: ${look.id} ${key}`);
      assert.deepEqual(asset.sourceAssets, sourceAssets, `GalleryLook cover source layer hashes: ${look.id} ${key}`);
      assert.equal(asset.rendererRevision, renderer.STUDIO_RENDERER_REVISION, `GalleryLook cover renderer revision: ${look.id} ${key}`);
      assert.equal(asset.purpose, size === 256 ? 'poster256' : 'poster512', `GalleryLook cover purpose: ${look.id} ${key}`);
      assert.equal(asset.mime, 'image/webp', `GalleryLook cover MIME: ${look.id} ${key}`);
      assert.equal(asset.publicationStatus, 'published-derivative', `GalleryLook cover publication status: ${look.id} ${key}`);
      assert.equal(asset.resourceKind, 'gallery-look-poster', `GalleryLook cover resource kind: ${look.id} ${key}`);
      assert.equal(asset.alpha?.hasAlpha, true, `GalleryLook cover must preserve alpha: ${look.id} ${key}`);
      assert.equal(asset.alpha?.hasTransparency, true, `GalleryLook cover must include transparent pixels: ${look.id} ${key}`);
      assert.equal(asset.width, size, `GalleryLook cover metadata width: ${look.id} ${key}`);
      assert.equal(asset.height, size, `GalleryLook cover metadata height: ${look.id} ${key}`);
      const filePath = assetPathFromReference(asset.path);
      assert(filePath.startsWith('dist/assets/gallery-looks/'), `GalleryLook cover escaped its dedicated directory: ${asset.path}`);
      assert(actual.includes(filePath), `GalleryLook cover file is missing: ${asset.path}`);
      assert(!coverPaths.has(filePath), `GalleryLook cover path is duplicated: ${filePath}`);
      coverPaths.add(filePath);
      expectedAssets.add(filePath);
      const bytes = await fs.readFile(path.join(root, filePath));
      assert.equal(bytes.length, asset.byteSize, `GalleryLook cover byte count: ${look.id} ${key}`);
      assert.equal(hash(bytes), asset.sha256, `GalleryLook cover hash: ${look.id} ${key}`);
      const dimensions = webpDimensions(bytes, filePath);
      assert.deepEqual({width: dimensions.width, height: dimensions.height}, {width: size, height: size}, `GalleryLook WebP dimensions: ${look.id} ${key}`);
      assert.equal(dimensions.hasAlpha, true, `GalleryLook WebP bitstream must mark alpha: ${look.id} ${key}`);
    }
  }

  assert.equal(recipeCount, 540, 'All 540 registered legal recipes must be assigned to exactly one fixed appearance');
  const expectedRecipes = templateRegistry.flatMap(template => template.recipes.map(recipe => `${template.id}\u0000${template.version}\u0000${recipe.id}`)).sort();
  assert.deepEqual([...assignedRecipes.keys()].sort(), expectedRecipes, 'GalleryLook appearances must cover all and only current Template recipes');
  const publishedGalleryCoverPaths = actual.filter(filePath => filePath.startsWith('dist/assets/gallery-looks/'));
  assert.deepEqual(publishedGalleryCoverPaths, [...coverPaths].sort(), 'Gallery look cover directory must have no unregistered or missing file');
  return {lookCount: looks.length, defaultLookCount: looks.filter(look => look.isDefault).length,
    alternateLookCount: looks.filter(look => !look.isDefault).length, recipeCount, derivedCoverCount: assets.length};
}

async function verifyGalleryFigures() {
  const {GALLERY_FIGURES,getGalleryFigure,getFigureStates,getFigureInitialState} = await import('../dist/studio-gallery-figures.js?v=111');
  const {GALLERY_LOOKS} = await import('../dist/studio-gallery-looks.js?v=111');
  assert.equal(GALLERY_FIGURES.length,83,'Public gallery must deduplicate the confirmed three basic silhouettes');
  const members=GALLERY_FIGURES.flatMap(figure=>figure.memberLookIds);
  assert.equal(new Set(members).size,members.length,'A source look must belong to exactly one Figure');
  assert.deepEqual(members.slice().sort(),GALLERY_LOOKS.map(look=>look.id).sort(),'Figure membership must preserve all 90 exact source looks');
  const recipes=new Set();let semanticConfigurationCount=0;
  for(const figure of GALLERY_FIGURES){
    assert.equal(getGalleryFigure(figure.id,figure.version),figure,'Figure must be canonical and versioned');
    const initial=getFigureInitialState(figure);
    assert(initial&&initial.look.id===figure.defaultLookId,'Figure must have its registered default state');
    assert.deepEqual(figure.assetRefs,initial.look.assetRefs,'Figure must use its complete registered default cover');
    const states=getFigureStates(figure);assert(states.length,'Figure must have real source recipes');
    semanticConfigurationCount+=new Set(states.map(state=>stable(state.values))).size;
    for(const state of states){
      const key=`${state.template.id}\u0000${state.template.version}\u0000${state.recipe.id}`;
      assert(!recipes.has(key),'Source recipe cannot appear in multiple Figures');recipes.add(key);
      assert.equal(state.figureId,figure.id);assert(figure.memberLookIds.includes(state.look.id));
      assert.equal(state.look.artworkId,state.artwork.id);assert.equal(state.look.templateId,state.template.id);
      assert.deepEqual(state.selections,state.recipe.selections,'Figure state must retain the exact registered selections');
    }
  }
  assert.equal(recipes.size,540,'Figure states must preserve all 540 source recipes');
  return {figureCount:GALLERY_FIGURES.length,figureSourceLookCount:members.length,figureSourceRecipeCount:recipes.size,figureSemanticConfigurationCount:semanticConfigurationCount};
}

export async function build() {
  const manifest = JSON.parse(await fs.readFile(path.join(root, 'design/static-publish-manifest.json'), 'utf8'));
  assert.equal(manifest.revision, revision, `Publish manifest must use revision ${revision}`);

  const actual = (await listTree(path.join(root, 'dist'))).map(filePath => path.relative(root, filePath));
  checkInventory(actual, manifest.files);
  const manifestPreviewFiles = checkPreviewOnlyFiles(manifest.files, manifest.previewOnlyFiles);

  const modules = actual.filter(filePath => /\.(?:js|css|html)$/.test(filePath));
  const seen = new Set();
  const references = new Map();
  for (const filePath of modules) {
    const source = await fs.readFile(path.join(root, filePath), 'utf8');
    if (filePath.endsWith('.js')) execFileSync(process.execPath, ['--check', path.join(root, filePath)]);
    const dependencies = readModuleDependencies(source, filePath);
    for (const reference of dependencies) {
      assert(reference.endsWith(cacheQuery), `Mixed module cache: ${filePath} ${reference}`);
      const destination = path.posix.join(path.posix.dirname(filePath), reference.split('?')[0]);
      assert(actual.includes(destination), `Missing import ${destination}`);
    }
    references.set(filePath, dependencies.map(reference => path.posix.join(path.posix.dirname(filePath), reference.split('?')[0])));
  }
  const visit = filePath => {
    if (seen.has(filePath)) return;
    seen.add(filePath);
    for (const dependency of references.get(filePath) ?? []) visit(dependency);
  };
  visit('dist/index.html');
  // Keep the independently navigable look registry in the publish graph while
  // its UI entry point is wired into the page shell.
  visit('dist/studio-gallery-looks.js');
  for (const filePath of modules) assert(seen.has(filePath), `Orphan runtime module: ${filePath}`);

  const html = await fs.readFile(path.join(root, 'dist/index.html'), 'utf8');
  assert(html.includes(`data-cache="${revision}"`), `HTML cache ${revision}`);
  const catalog = await import('../dist/studio-artwork-catalog.js?v=111');
  assert.equal(catalog.CATALOG_REVISION, catalogRevision);
  assert(Array.isArray(catalog.ARTWORKS) && catalog.ARTWORKS.length > 0, 'Approved Artwork catalog must not be empty');
  assert(Array.isArray(catalog.PREVIEW_ARTWORKS), 'PREVIEW_ARTWORKS must be an explicit array');
  assert(Array.isArray(catalog.PREVIEW_ASSETS), 'PREVIEW_ASSETS must be an explicit array');
  assert(Array.isArray(catalog.PREVIEW_PROMPTS), 'PREVIEW_PROMPTS must be an explicit array');

  const expectedAssets = new Set();
  const previewFiles = new Set();
  const approvedIds = new Set(catalog.ARTWORKS.map(artwork => artwork.id));
  assert.equal(approvedIds.size, catalog.ARTWORKS.length, 'Duplicate approved Artwork ID');
  const approvedArtworks = catalog.ARTWORKS.filter(catalog.isEligible);
  assert.equal(approvedArtworks.length, catalog.ARTWORKS.length, 'Every default-catalog Artwork must be currently eligible');
  for (const artwork of approvedArtworks) {
    assert(!catalog.isPreviewArtwork(artwork), `Pending Artwork leaked into ARTWORKS: ${artwork.id}`);
    assert(catalog.canOpenArtwork(artwork.id, artwork.version), `Approved Artwork cannot open ${artwork.id}`);
    const snapshot = catalog.createSnapshot(artwork.id);
    assert(snapshot?.artwork && snapshot.asset && snapshot.prompt, `Approved Artwork snapshot is incomplete: ${artwork.id}`);
    assert.equal(snapshot.artwork.version, artwork.version, `Approved snapshot version mismatch: ${artwork.id}`);
  }

  const previewIds = new Set();
  for (const artwork of catalog.PREVIEW_ARTWORKS) {
    assert(!previewIds.has(artwork.id), `Duplicate preview Artwork ID: ${artwork.id}`);
    previewIds.add(artwork.id);
    assert(!approvedIds.has(artwork.id), `Pending Artwork entered default catalog: ${artwork.id}`);
    assert(catalog.isPreviewArtwork(artwork), `Preview Artwork status is invalid: ${artwork.id}`);
    assert(!catalog.isEligible(artwork), `Preview Artwork is eligible for publication: ${artwork.id}`);
    assert(catalog.canOpenArtwork(artwork.id, artwork.version), `Registered preview Artwork cannot open ${artwork.id}`);
    assert.equal(artwork.artApproval?.status, 'pending', `Preview art approval must remain pending: ${artwork.id}`);
    const snapshot = catalog.createSnapshot(artwork.id, {allowPreview: true});
    assert(snapshot?.artwork && snapshot.asset && snapshot.prompt, `Preview Artwork snapshot is incomplete: ${artwork.id}`);
    assert.equal(snapshot.artwork.version, artwork.version, `Preview snapshot version mismatch: ${artwork.id}`);
    assert.equal(snapshot.asset.ownerArtworkId, artwork.id, `Preview source binding mismatch: ${artwork.id}`);
  }
  assert.equal(catalog.PREVIEW_PROMPTS.length, catalog.PREVIEW_ARTWORKS.length * 2, 'Pending artworks must have separate bilingual Prompts');

  const content = await import('../dist/studio-content.js?v=111');
  const pendingUIAssets = (content.BRAND_ASSETS ?? []).filter(asset => asset.publicationStatus === 'preview-only');
  const galleryData = await import('../dist/studio-gallery-look-data.js?v=111');
  const registered = [...catalog.ASSETS, ...catalog.PREVIEW_ASSETS, ...(content.BRAND_ASSETS ?? []),
    ...galleryData.GALLERY_LOOK_ASSETS].filter(asset => asset?.path);
  const registeredPaths = new Set();
  for (const asset of registered) {
    const filePath = assetPathFromReference(asset.path);
    assert(!registeredPaths.has(filePath), `Duplicate registered asset path: ${filePath}`);
    registeredPaths.add(filePath);
    await verifyRegisteredAsset(asset, actual, expectedAssets);
    if (asset.publicationStatus === 'preview-only') {
      assert.equal(asset.artApproval?.status, 'pending', `Preview resource has non-pending approval ${asset.id}`);
      previewFiles.add(filePath);
    }
  }
  for (const artwork of catalog.PREVIEW_ARTWORKS) {
    const original = catalog.getAsset(artwork.assetRefs?.original);
    assert(original && original.publicationStatus === 'preview-only', `Pending original is not registered as preview-only: ${artwork.id}`);
    previewFiles.add(assetPathFromReference(original.path));
  }

  const templates = await import('../dist/studio-edit-templates.js?v=111');
  assert.equal(templates.EDIT_TEMPLATE_REVISION, 'edit-templates-20261011-v100');
  assert(Array.isArray(templates.TEMPLATE_REGISTRY), 'Runtime template registry must be explicit');
  for (const artwork of approvedArtworks) {
    const matches = templates.TEMPLATE_REGISTRY.filter(item => item.artworkBinding?.artworkId === artwork.id && item.artworkBinding?.artworkVersion === artwork.version);
    assert.equal(matches.length, 1, `Every current Artwork needs one exact Template: ${artwork.id}@${artwork.version}`);
    assert(templates.getTemplateForArtwork(artwork), `The current Artwork Template must be publicly eligible: ${artwork.id}`);
  }
  const {sourceManifest: templateSources, sourceRows: templateAssets} = await verifyTemplateSources({
    actual, expectedAssets, previewFiles, registry: templates.TEMPLATE_REGISTRY
  });
  const galleryLooks = await verifyGalleryLookAssets({actual, expectedAssets, artworks: approvedArtworks,
    templateRegistry: templates.TEMPLATE_REGISTRY, templateSourceRows: templateAssets});
  const galleryFigures = await verifyGalleryFigures();
  const pendingTemplateIds = new Set(templates.TEMPLATE_REGISTRY.filter(item => item.status !== 'approved'
    || item.engineeringStatus !== 'passed'
    || !['approved', 'approved-for-declared-scope'].includes(item.artApproval?.status)).map(item => item.id));
  assert.equal(templateAssets.some(asset => asset.status === 'pending'), pendingTemplateIds.size > 0, 'Template pending state must match registered layer status');

  for (const filePath of modules) {
    const source = await fs.readFile(path.join(root, filePath), 'utf8');
    if (filePath.endsWith('.html')) collectHtmlAssets(source, expectedAssets);
    if (filePath.endsWith('.css')) collectCssAssets(source, expectedAssets);
  }
  const retained = manifest.retainedHistoricalAssets || [];
  assert.equal(new Set(retained.map(row => row.path)).size, retained.length, 'Retained historical asset paths are unique');
  for (const asset of retained) {
    assert(isSafePublishPath(asset.path) && asset.path.startsWith('dist/assets/'), `Invalid retained historical asset path: ${asset.path}`);
    assert(!expectedAssets.has(asset.path), `A retained-only historical asset is still registered as current: ${asset.path}`);
    assert.equal(typeof asset.sourceRecord, 'string', `Retained asset needs its historical source record: ${asset.path}`);
    const bytes = await fs.readFile(path.join(root, asset.path));
    assert.equal(bytes.length, asset.byteSize, `Retained asset byte size: ${asset.path}`);
    assert.equal(hash(bytes), asset.sha256, `Retained asset hash: ${asset.path}`);
    expectedAssets.add(asset.path);
  }
  const {DELIVERY_ASSETS} = await import('../dist/studio-delivery-assets.js?v=111');
  const delivery = await verifyDeliveryAssets({root, rows: DELIVERY_ASSETS, actual,
    sourceOnlyFiles: manifest.sourceOnlyFiles, expectedAssets});
  const publishPaths = new Set(getPublishFiles(actual, manifest.sourceOnlyFiles));
  checkInventory(actual.filter(filePath => filePath.startsWith('dist/assets/')), [...expectedAssets]);
  const expectedPendingFiles = [...previewFiles].sort();
  assert.deepEqual(manifestPreviewFiles, expectedPendingFiles, 'previewOnlyFiles must exactly match pending Artwork and template source resources');

  const deploymentBlockers = [
    ...(previewIds.size ? ['pending-preview-artwork'] : []),
    ...(pendingTemplateIds.size ? ['pending-template-artwork-and-engineering-review'] : []),
    ...(pendingUIAssets.length ? ['pending-ui-illustration-art-approval'] : [])
  ];
  const files = [];
  for (const filePath of actual) {
    const bytes = await fs.readFile(path.join(root, filePath));
    files.push({path: filePath, bytes: bytes.length, sha256: hash(bytes)});
  }
  const report = {
    revision,
    catalogRevision,
    evidenceDirectory: path.relative(root, evidenceDirectory),
    scope: 'v111 repository source, deduplicated Figures and explicit lossless delivery closure; deployment is verified separately.',
    deploymentReady: deploymentBlockers.length === 0,
    deploymentBlockers,
    approvedArtworkCount: approvedArtworks.length,
    previewArtworkCount: previewIds.size,
    pendingUIAssetCount: pendingUIAssets.length,
    templateCount: templates.TEMPLATE_REGISTRY.length,
    pendingTemplateCount: pendingTemplateIds.size,
    templateSourceAssetCount: templateAssets.length,
    pendingTemplateSourceAssetCount: templateAssets.filter(asset => asset.status === 'pending').length,
    ...galleryLooks,
    ...galleryFigures,
    templateSourceManifest: templateSourcesPath,
    fileCount: files.length,
    files,
    delivery,
    sourceOnlyFiles: manifest.sourceOnlyFiles,
    publishFileCount: publishPaths.size,
    publishFiles: files.filter(file => publishPaths.has(file.path)),
  };
  await fs.mkdir(evidenceDirectory, {recursive: true});
  await fs.writeFile(path.join(evidenceDirectory, 'build-report.json'), `${JSON.stringify(report, null, 2)}\n`);
  return report;
}

if (process.argv[1] === import.meta.filename) {
  const report = await build();
  console.log(`Static v${revision} build: ${report.fileCount} files; ${report.approvedArtworkCount} approved, ${report.previewArtworkCount} pending Artwork; deployment ${report.deploymentReady ? 'ready' : 'blocked'}.`);
}
