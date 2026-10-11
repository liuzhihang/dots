import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';

const root = path.resolve(import.meta.dirname, '..');
const revision = 100;
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
  for (const filePath of modules) assert(seen.has(filePath), `Orphan runtime module: ${filePath}`);

  const html = await fs.readFile(path.join(root, 'dist/index.html'), 'utf8');
  assert(html.includes(`data-cache="${revision}"`), `HTML cache ${revision}`);
  const catalog = await import('../dist/studio-artwork-catalog.js?v=100');
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

  const content = await import('../dist/studio-content.js?v=100');
  const pendingUIAssets = (content.BRAND_ASSETS ?? []).filter(asset => asset.publicationStatus === 'preview-only');
  const registered = [...catalog.ASSETS, ...catalog.PREVIEW_ASSETS, ...(content.BRAND_ASSETS ?? [])].filter(asset => asset?.path);
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

  const templates = await import('../dist/studio-edit-templates.js?v=100');
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
    scope: 'v100 local static build and registered content readiness; this report does not claim that deployment has run or succeeded.',
    deploymentReady: deploymentBlockers.length === 0,
    deploymentBlockers,
    approvedArtworkCount: approvedArtworks.length,
    previewArtworkCount: previewIds.size,
    pendingUIAssetCount: pendingUIAssets.length,
    templateCount: templates.TEMPLATE_REGISTRY.length,
    pendingTemplateCount: pendingTemplateIds.size,
    templateSourceAssetCount: templateAssets.length,
    pendingTemplateSourceAssetCount: templateAssets.filter(asset => asset.status === 'pending').length,
    templateSourceManifest: templateSourcesPath,
    fileCount: files.length,
    files,
  };
  await fs.mkdir(evidenceDirectory, {recursive: true});
  await fs.writeFile(path.join(evidenceDirectory, 'build-report.json'), `${JSON.stringify(report, null, 2)}\n`);
  return report;
}

if (process.argv[1] === import.meta.filename) {
  const report = await build();
  console.log(`Static v${revision} build: ${report.fileCount} files; ${report.approvedArtworkCount} approved, ${report.previewArtworkCount} pending Artwork; deployment ${report.deploymentReady ? 'ready' : 'blocked'}.`);
}
