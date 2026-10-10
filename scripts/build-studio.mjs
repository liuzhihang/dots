import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {verifySafety} from './verify-implementation-safety.mjs';

const root = path.resolve(import.meta.dirname, '..');
const revision = 98;
const cacheQuery = `?v=${revision}`;
const catalogRevision = `artwork-catalog-20261009-v${revision}`;
const evidenceDirectory = `design/acceptance/current-20261009-v${revision}`;
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

export function checkInventory(actual, expected) {
  assert(Array.isArray(expected), 'Publish manifest files must be an array');
  assert.equal(new Set(expected).size, expected.length, 'Duplicate publish path');
  for (const filePath of expected) {
    assert(isSafePublishPath(filePath), `Unsafe published path: ${filePath}`);
  }
  assert.deepEqual(actual.slice().sort(), expected.slice().sort(), 'Publish tree differs from explicit manifest (missing or orphan file)');
}

function isSafePublishPath(filePath) {
  return typeof filePath === 'string' && /^dist\/(?!.*(?:\.\.|\\)).+/.test(filePath);
}

export function checkPreviewOnlyFiles(files, previewOnlyFiles) {
  assert(Array.isArray(files), 'Publish manifest files must be an array');
  assert(Array.isArray(previewOnlyFiles), 'Publish manifest previewOnlyFiles must be an array');
  assert.equal(new Set(previewOnlyFiles).size, previewOnlyFiles.length, 'Duplicate preview-only path');
  const published = new Set(files);
  for (const filePath of previewOnlyFiles) {
    assert(isSafePublishPath(filePath), `Unsafe preview-only path: ${filePath}`);
    assert(published.has(filePath), `Preview-only file is outside the published dist tree: ${filePath}`);
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
  assert.equal(hash(await fs.readFile(path.join(root, filePath))), asset.sha256, `Asset hash ${asset.id ?? filePath}`);
}

async function verifySceneAsset(resource, viewport, actual, expectedAssets) {
  const filePath = assetPathFromReference(resource?.src);
  expectedAssets.add(filePath);
  assert(actual.includes(filePath), `Scene ${viewport} asset missing: ${filePath}`);
  assert.match(resource.sha256 ?? '', /^[a-f0-9]{64}$/, `Scene ${viewport} asset has no SHA-256`);
  assert.equal(hash(await fs.readFile(path.join(root, filePath))), resource.sha256, `Scene ${viewport} asset hash`);
}

function readModuleDependencies(source, filePath) {
  const dependencies = [...source.matchAll(/(?:from\s*|import\s*\()(['"])(\.\/[^'"]+\.js(?:\?[^'"]*)?)\1/g)]
    .map(match => match[2]);
  if (filePath.endsWith('.html')) {
    dependencies.push(...[...source.matchAll(/(?:src|href)="\.\/(studio[^"?]+)(?:\?([^"]*))?"/g)]
      .map(match => `./${match[1]}${match[2] === undefined ? '' : `?${match[2]}`}`));
  }
  return dependencies;
}

function collectHtmlAssets(source, expectedAssets) {
  for (const match of source.matchAll(/(?:src|href)="\.\/(assets\/[^"?#]+)"/g)) {
    expectedAssets.add(`dist/${match[1]}`);
  }
}

function collectCssAssets(source, expectedAssets) {
  for (const match of source.matchAll(/url\(\s*(['"]?)(\.\/assets\/[^'")?#]+)\1(?:\?[^'")]+)?\s*\)/g)) {
    expectedAssets.add(assetPathFromReference(match[2]));
  }
}

function placementIsValid(placement) {
  if (!placement || typeof placement !== 'object') return false;
  const geometryValid = ['x', 'y', 'w', 'h'].every(key => {
    const value = placement[key];
    return Number.isFinite(value) || (typeof value === 'string' && /^\d+(?:\.\d+)?%$/.test(value));
  });
  const contour = placement.contour;
  return geometryValid && Array.isArray(contour) && contour.length >= 6
    && contour.every(point => Array.isArray(point) && point.length === 2
      && point.every(value => Number.isFinite(value) && value >= 0 && value <= 100));
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

  const catalog = await import('../dist/studio-artwork-catalog.js');
  assert.equal(catalog.CATALOG_REVISION, catalogRevision);
  const expectedAssets = new Set();

  assert(Array.isArray(catalog.PREVIEW_ARTWORKS), 'PREVIEW_ARTWORKS must be an explicit array');
  assert(Array.isArray(catalog.PREVIEW_ASSETS), 'PREVIEW_ASSETS must be an explicit array');
  assert(Array.isArray(catalog.PREVIEW_PROMPTS), 'PREVIEW_PROMPTS must be an explicit array');
  assert.equal(catalog.ARTWORKS.length, 15, 'The approved artwork set must remain the original 15 items');
  const previewFiles = new Set();
  const approvedArtworks = catalog.ARTWORKS.filter(catalog.isEligible);
  assert.equal(approvedArtworks.length, 15, 'All 15 existing artworks must retain their approved eligibility');
  for (const artwork of approvedArtworks) {
    assert(!catalog.isPreviewArtwork(artwork), `Pending Artwork leaked into ARTWORKS: ${artwork.id}`);
    assert(catalog.canOpenArtwork(artwork.id, artwork.version), `Approved Artwork cannot open ${artwork.id}`);
    const original = catalog.getAsset(artwork.assetRefs?.original);
    assert(original, `Artwork ${artwork.id} has no registered original asset`);
    assert.equal(artwork.version, original.version, `Artwork/source version mismatch ${artwork.id}`);
    await verifyRegisteredAsset(original, actual, expectedAssets);
  }

  for (const artwork of catalog.PREVIEW_ARTWORKS) {
    assert(catalog.isPreviewArtwork(artwork), `Preview Artwork status is invalid: ${artwork.id}`);
    assert(!catalog.isEligible(artwork), `Preview Artwork is eligible for publication: ${artwork.id}`);
    assert(catalog.canOpenArtwork(artwork.id, artwork.version), `Registered preview Artwork cannot open ${artwork.id}`);
    const snapshot = catalog.createSnapshot(artwork.id, {allowPreview: true});
    assert(snapshot?.artwork && snapshot.asset && snapshot.prompt, `Preview Artwork snapshot is incomplete: ${artwork.id}`);
    assert.equal(snapshot.artwork.version, artwork.version, `Preview snapshot version mismatch: ${artwork.id}`);
    assert.equal(snapshot.asset.ownerArtworkId, artwork.id, `Preview source binding mismatch: ${artwork.id}`);
  }

  const {BRAND_ASSETS} = await import('../dist/studio-content.js');
  for (const asset of [...catalog.ASSETS, ...catalog.PREVIEW_ASSETS, ...BRAND_ASSETS].filter(item => item.path)) {
    await verifyRegisteredAsset(asset, actual, expectedAssets);
  }
  for (const asset of catalog.PREVIEW_ASSETS.filter(item => item.path)) {
    assert.equal(asset.publicationStatus, 'preview-only', `Preview asset status is invalid: ${asset.id}`);
    previewFiles.add(assetPathFromReference(asset.path));
  }

  const scenes = await import('../dist/studio-scenes.js');
  const hero = catalog.getArtwork(scenes.HERO_ARTWORK?.id);
  assert(hero, 'Hero prompt must reference a registered Artwork');
  assert.equal(hero.version, scenes.HERO_ARTWORK.version, 'Hero Prompt binding');

  const requiredViewports = ['desktop', 'tablet', 'mobile'];
  for (const viewport of requiredViewports) assert(scenes.SCENE_ART?.[viewport], `Scene art must provide ${viewport} composition`);
  const sceneViewports = Object.keys(scenes.SCENE_ART).sort();
  assert.deepEqual(sceneViewports, requiredViewports.slice().sort(), 'Scene art must contain only desktop, tablet, and mobile compositions');
  for (const viewport of requiredViewports) {
    const resource = scenes.SCENE_ART[viewport];
    assert(Number.isInteger(resource.width) && resource.width > 0 && Number.isInteger(resource.height) && resource.height > 0, `Scene ${viewport} dimensions are invalid`);
    assert(resource.artApproval, `Scene ${viewport} must record its art approval status`);
    await verifySceneAsset(resource, viewport, actual, expectedAssets);
    const approval = typeof resource.artApproval === 'string' ? resource.artApproval : resource.artApproval.status;
    if (!['approved', 'approved-for-declared-scope'].includes(approval)) previewFiles.add(assetPathFromReference(resource.src));
  }

  assert(Array.isArray(scenes.SCENE_CHARACTERS), 'SCENE_CHARACTERS must be an array');
  assert(scenes.SCENE_CHARACTERS.length > 0, 'Scene must contain at least one registered character');
  const sceneArtworkIds = new Set();
  const visibleByViewport = Object.fromEntries(requiredViewports.map(viewport => [viewport, 0]));
  for (const character of scenes.SCENE_CHARACTERS) {
    assert(character?.artworkId && character?.artworkVersion, 'Every scene character requires an Artwork ID and version');
    assert(!sceneArtworkIds.has(character.artworkId), `Duplicate scene character ${character.artworkId}`);
    sceneArtworkIds.add(character.artworkId);

    const artwork = catalog.getArtwork(character.artworkId);
    assert(artwork, `Scene character is not registered: ${character.artworkId}`);
    assert(catalog.canOpenArtwork(character.artworkId, character.artworkVersion), `Scene character is not valid for shared detail: ${character.artworkId}`);
    if (catalog.isPreviewArtwork(artwork)) assert(!catalog.isEligible(artwork), `Preview scene character is publication-eligible: ${character.artworkId}`);
    else assert(catalog.isEligible(artwork), `Scene character is neither approved nor a valid preview: ${character.artworkId}`);
    assert.equal(artwork.version, character.artworkVersion, `Scene version ${character.artworkId}`);
    for (const viewport of requiredViewports) {
      assert(Object.hasOwn(character, viewport), `Missing ${viewport} placement for ${character.artworkId}`);
      const placement = character[viewport];
      assert(placement === null || placementIsValid(placement), `Invalid ${viewport} placement or contour for ${character.artworkId}`);
      if (placement) visibleByViewport[viewport]++;
    }
  }
  for (const viewport of requiredViewports) assert(visibleByViewport[viewport] > 0, `Scene ${viewport} has no interactive characters`);

  for (const filePath of modules) {
    const source = await fs.readFile(path.join(root, filePath), 'utf8');
    if (filePath.endsWith('.html')) collectHtmlAssets(source, expectedAssets);
    if (filePath.endsWith('.css')) collectCssAssets(source, expectedAssets);
  }
  checkInventory(actual.filter(filePath => filePath.startsWith('dist/assets/')), [...expectedAssets]);
  assert.deepEqual(manifestPreviewFiles, [...previewFiles].sort(), 'previewOnlyFiles must exactly match registered pending Artwork and Scene assets');

  const safety = await verifySafety();
  const files = [];
  for (const filePath of actual) {
    const bytes = await fs.readFile(path.join(root, filePath));
    files.push({path: filePath, bytes: bytes.length, sha256: hash(bytes)});
  }

  const report = {
    revision,
    evidenceDirectory,
    scope: 'v98 static engineering validation only; it does not establish visual approval or deployment authorization. Pending resources remain inside the complete dist/Sites static.directory tree.',
    deploymentReady: false,
    deploymentBlockers: ['pending-preview-and-scene-resources', 'no-deployment-authorization'],
    approvedArtworkCount: approvedArtworks.length,
    previewArtworkCount: catalog.PREVIEW_ARTWORKS.length,
    fileCount: files.length,
    files,
    safety,
  };
  await fs.mkdir(path.join(root, evidenceDirectory), {recursive: true});
  await fs.writeFile(path.join(root, `${evidenceDirectory}/build-report.json`), `${JSON.stringify(report, null, 2)}\n`);
  return report;
}

if (process.argv[1] === import.meta.filename) {
  const report = await build();
  console.log(`Static v${revision} build: ${report.fileCount} files; ${report.safety.protectedCount} baseline hashes preserved.`);
}
