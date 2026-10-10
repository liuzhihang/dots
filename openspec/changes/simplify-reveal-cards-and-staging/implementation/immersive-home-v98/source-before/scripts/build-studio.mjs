import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {verifySafety} from './verify-implementation-safety.mjs';

const root = path.resolve(import.meta.dirname, '..');
const revision = 97;
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
  assert.equal(new Set(expected).size, expected.length, 'Duplicate publish path');
  for (const filePath of expected) {
    assert(/^dist\/(?!.*(?:\.\.|\\)).+/.test(filePath), `Unsafe published path: ${filePath}`);
  }
  assert.deepEqual(actual.slice().sort(), expected.slice().sort(), 'Publish tree differs from explicit manifest (missing or orphan file)');
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
  return ['x', 'y', 'w', 'h'].every(key => {
    const value = placement[key];
    return Number.isFinite(value) || (typeof value === 'string' && /^\d+(?:\.\d+)?%$/.test(value));
  });
}

export async function build() {
  const manifest = JSON.parse(await fs.readFile(path.join(root, 'design/static-publish-manifest.json'), 'utf8'));
  assert.equal(manifest.revision, revision, `Publish manifest must use revision ${revision}`);

  const actual = (await listTree(path.join(root, 'dist'))).map(filePath => path.relative(root, filePath));
  checkInventory(actual, manifest.files);

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

  for (const artwork of catalog.ARTWORKS.filter(catalog.isEligible)) {
    const original = catalog.getAsset(artwork.assetRefs?.original);
    assert(original, `Artwork ${artwork.id} has no registered original asset`);
    assert.equal(artwork.version, original.version, `Artwork/source version mismatch ${artwork.id}`);
    await verifyRegisteredAsset(original, actual, expectedAssets);
  }

  const {BRAND_ASSETS} = await import('../dist/studio-content.js');
  for (const asset of [...catalog.ASSETS, ...BRAND_ASSETS].filter(item => item.path)) {
    await verifyRegisteredAsset(asset, actual, expectedAssets);
  }

  const scenes = await import('../dist/studio-scenes.js');
  const hero = catalog.getArtwork(scenes.HERO_ARTWORK?.id);
  assert(hero, 'Hero prompt must reference a registered Artwork');
  assert.equal(hero.version, scenes.HERO_ARTWORK.version, 'Hero Prompt binding');

  assert(scenes.SCENE_ART?.desktop && scenes.SCENE_ART?.mobile, 'Scene art must provide desktop and mobile resources');
  for (const viewport of ['desktop', 'mobile']) {
    const resource = scenes.SCENE_ART[viewport];
    await verifySceneAsset(resource, viewport, actual, expectedAssets);
  }

  assert(Array.isArray(scenes.SCENE_CHARACTERS), 'SCENE_CHARACTERS must be an array');
  assert(scenes.SCENE_CHARACTERS.length > 0, 'Scene must contain at least one published character');
  const sceneArtworkIds = new Set();
  for (const character of scenes.SCENE_CHARACTERS) {
    assert(character?.artworkId && character?.artworkVersion, 'Every scene character requires an Artwork ID and version');
    assert(!sceneArtworkIds.has(character.artworkId), `Duplicate scene character ${character.artworkId}`);
    sceneArtworkIds.add(character.artworkId);

    const artwork = catalog.getArtwork(character.artworkId);
    assert(artwork && catalog.isEligible(artwork), `Scene character is not a published Artwork: ${character.artworkId}`);
    assert.equal(artwork.version, character.artworkVersion, `Scene version ${character.artworkId}`);
    assert(placementIsValid(character.desktop), `Invalid desktop placement for ${character.artworkId}`);
    assert(character.mobile === null || placementIsValid(character.mobile), `Invalid mobile placement for ${character.artworkId}`);
  }

  for (const filePath of modules) {
    const source = await fs.readFile(path.join(root, filePath), 'utf8');
    if (filePath.endsWith('.html')) collectHtmlAssets(source, expectedAssets);
    if (filePath.endsWith('.css')) collectCssAssets(source, expectedAssets);
  }
  checkInventory(actual.filter(filePath => filePath.startsWith('dist/assets/')), [...expectedAssets]);

  const safety = await verifySafety();
  const files = [];
  for (const filePath of actual) {
    const bytes = await fs.readFile(path.join(root, filePath));
    files.push({path: filePath, bytes: bytes.length, sha256: hash(bytes)});
  }

  const report = {
    revision,
    evidenceDirectory,
    scope: 'v97 local static engineering validation only; it does not establish visual approval. v96 visual review was rejected by the user.',
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
