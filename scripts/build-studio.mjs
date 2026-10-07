import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { ARTWORKS, ASSETS, getAsset, isEligible } from '../dist/studio-artwork-catalog.js';
import { HERO_SCENES, FAMILY_SCENES } from '../dist/studio-scenes.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const snapshotRelativePath = 'openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json';
const retirementRelativePath = 'design/acceptance/current-20261007-v87/asset-retirement.json';
const allowedModules = new Set([
  'index.html', 'studio.js', 'studio.css', 'studio-home.js', 'studio-scenes.js',
  'studio-tags.js', 'studio-tag-browser.js', 'studio-overlay.js', 'studio-artwork-catalog.js',
  'studio-prompt.js', 'studio-asset-loader.js', 'studio-draw.js', 'studio-actions.js',
  'studio-detail.js', 'studio-detail.css', 'studio-reference.js',
  'studio-fullscreen-random.js', 'studio-fullscreen-random.css', 'studio-feature-visuals.js'
]);
const seenModules = new Set();
const moduleHashes = [];
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

async function visitModule(name) {
  assert(allowedModules.has(name), `Unapproved production module: ${name}`);
  if (seenModules.has(name)) return;
  seenModules.add(name);
  const absolute = path.join(root, 'dist', name);
  const bytes = await fs.readFile(absolute);
  moduleHashes.push({ path: `dist/${name}`, sha256: hash(bytes), bytes: bytes.length });
  const source = bytes.toString();
  if (name.endsWith('.js')) {
    execFileSync(process.execPath, ['--check', absolute]);
    assert(!/\b(?:CharacterRecipe|FitProfile|makeProject|Three|buildCreationPrompt)\b/.test(source), `Retired dependency in ${name}`);
    const references = [...source.matchAll(/(?:from\s*|import\s*\()(['"])(\.\/[^'"]+)\1/g)].map(match => match[2]);
    for (const reference of references) {
      assert(reference.endsWith('?v=90'), `Mixed module cache: ${name} -> ${reference}`);
      await visitModule(reference.slice(2).split('?')[0]);
    }
  }
  if (name === 'index.html') {
    for (const match of source.matchAll(/(?:src|href)="(?:\.\/)?(studio[^"?]+)\?v=90"/g)) await visitModule(match[1]);
  }
}

async function filesBelow(relativeDirectory) {
  const absoluteDirectory = path.join(root, relativeDirectory);
  const result = [];
  async function walk(absolute, relative) {
    for (const entry of await fs.readdir(absolute, { withFileTypes: true })) {
      const childAbsolute = path.join(absolute, entry.name);
      const childRelative = path.posix.join(relative, entry.name);
      if (entry.isDirectory()) await walk(childAbsolute, childRelative);
      else {
        assert(entry.isFile(), `Unexpected non-file static resource: ${childRelative}`);
        result.push(childRelative);
      }
    }
  }
  await walk(absoluteDirectory, relativeDirectory);
  return result.sort();
}

function addPublishedPath(target, candidate, label) {
  assert.equal(typeof candidate, 'string', `${label} must have a published path`);
  assert(candidate.startsWith('dist/assets/'), `${label} must resolve inside dist/assets: ${candidate}`);
  const segments = candidate.split('/');
  assert(!segments.some(segment => !segment || segment === '.' || segment === '..'), `${label} contains an unsafe path: ${candidate}`);
  target.add(candidate);
}

await visitModule('index.html');

const expectedAssetPaths = new Set();
const html = await fs.readFile(path.join(root, 'dist/index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)=["'](?:\.\/)?(assets\/[^"'?#]+)["']/g)) {
  addPublishedPath(expectedAssetPaths, `dist/${match[1]}`, `HTML asset ${match[1]}`);
}

const eligibleArtworks = ARTWORKS.filter(isEligible);
assert(eligibleArtworks.length > 0, 'The published Artwork catalog cannot be empty.');
const usedArtworkAssetIds = new Set();
for (const artwork of eligibleArtworks) {
  const asset = getAsset(artwork.assetRefs?.original);
  assert(asset, `${artwork.id} must reference a registered original asset.`);
  assert.equal(asset.publicationStatus, 'published', `${artwork.id} original must be published.`);
  assert.equal(typeof asset.path, 'string', `${artwork.id} original must have a runtime path.`);
  usedArtworkAssetIds.add(asset.id);
  addPublishedPath(expectedAssetPaths, `dist/${asset.path.slice(2)}`, `Artwork ${artwork.id}`);
}

const activeScenes = [...HERO_SCENES, ...Object.values(FAMILY_SCENES)];
for (const scene of activeScenes) {
  assert.equal(typeof scene.src, 'string');
  assert(scene.src.startsWith('assets/'), `Scene ${scene.id} must reference a local asset.`);
  addPublishedPath(expectedAssetPaths, `dist/${scene.src}`, `Scene ${scene.id}`);
}

for (const asset of ASSETS) {
  if (asset.publicationStatus === 'published') {
    assert.equal(typeof asset.path, 'string', `${asset.id} is published but has no runtime path.`);
    assert(usedArtworkAssetIds.has(asset.id), `${asset.id} is marked published but is not used by an eligible Artwork.`);
  } else {
    assert.equal(asset.path, null, `${asset.id} is not published and must not resolve from the runtime tree.`);
    assert.equal(asset.publicationStatus, 'pending-individual-approval', `${asset.id} has an unknown publication status.`);
  }
}

const snapshot = JSON.parse(await fs.readFile(path.join(root, snapshotRelativePath), 'utf8'));
const snapshotFiles = new Map(snapshot.files.map(file => [file.path, file]));
assert(snapshot.frozen === true, 'The source snapshot must remain frozen.');

for (const asset of ASSETS) {
  assert.equal(asset.sourceSnapshotMatch, true, `${asset.id} is missing source snapshot verification.`);
  assert.equal(typeof asset.sourcePath, 'string');
  assert(!path.posix.isAbsolute(asset.sourcePath) && !asset.sourcePath.split('/').includes('..'), `${asset.id} has an unsafe source path.`);
  const snapshotPath = asset.sourceSnapshotRef?.split('#')[1];
  const frozen = snapshotFiles.get(snapshotPath);
  assert(frozen, `${asset.id} source snapshot reference is missing: ${snapshotPath}`);
  const sourceBytes = await fs.readFile(path.join(root, asset.sourcePath));
  assert.equal(sourceBytes.length, asset.byteSize, `${asset.id} source byte size`);
  assert.equal(hash(sourceBytes), asset.sha256, `${asset.id} source SHA-256`);
  assert.equal(frozen.bytes, asset.byteSize, `${asset.id} frozen source byte size`);
  assert.equal(frozen.sha256, asset.sha256, `${asset.id} frozen source SHA-256`);
}

const retirement = JSON.parse(await fs.readFile(path.join(root, retirementRelativePath), 'utf8'));
assert.equal(retirement.sourceSnapshot, snapshotRelativePath);
assert.equal(retirement.sourceSnapshotEdited, false);
assert.equal(retirement.retainedCount, retirement.retained.length);
assert.equal(retirement.retiredCount, retirement.moved.length);
const retainedByPath = new Map(retirement.retained.map(item => [item.path, item]));
const movedByOriginalPath = new Map(retirement.moved.map(item => [item.originalPath, item]));
assert.deepEqual([...retainedByPath.keys()].sort(), [...expectedAssetPaths].sort(), 'Retained asset evidence must match the live Artwork, current scenes, and HTML asset references exactly.');
for (const [relativePath, item] of retainedByPath) {
  const bytes = await fs.readFile(path.join(root, relativePath));
  assert.equal(bytes.length, item.byteSize, `${relativePath} retained byte size`);
  assert.equal(hash(bytes), item.sha256, `${relativePath} retained SHA-256`);
}
for (const [originalPath, item] of movedByOriginalPath) {
  assert(item.sourcePath.startsWith('historical-runtime/retired-assets/'), `${originalPath} is not archived outside publication.`);
  const frozen = snapshotFiles.get(originalPath);
  assert(frozen, `${originalPath} is absent from the frozen source snapshot.`);
  assert.equal(item.sourceSnapshotMatch, true, `${originalPath} archival source match`);
  const bytes = await fs.readFile(path.join(root, item.sourcePath));
  assert.equal(bytes.length, item.byteSize, `${originalPath} archived byte size`);
  assert.equal(hash(bytes), item.sha256, `${originalPath} archived SHA-256`);
  assert.equal(frozen.bytes, item.byteSize, `${originalPath} frozen byte size`);
  assert.equal(frozen.sha256, item.sha256, `${originalPath} frozen SHA-256`);
}

const expectedDistFiles = new Set([...seenModules].map(name => `dist/${name}`));
for (const assetPath of expectedAssetPaths) expectedDistFiles.add(assetPath);
const actualDistFiles = await filesBelow('dist');
assert.deepEqual(actualDistFiles, [...expectedDistFiles].sort(), 'dist must contain only current modules and assets required by the Artwork catalog, scenes, and static HTML.');

for (const artwork of eligibleArtworks) {
  const asset = getAsset(artwork.assetRefs.original);
  const bytes = await fs.readFile(path.join(root, 'dist', asset.path.slice(2)));
  assert.equal(hash(bytes), asset.sha256, `${asset.path} published Artwork SHA-256`);
  assert.equal(bytes.length, asset.byteSize, `${asset.path} published Artwork byte size`);
  assert.equal(bytes.toString('hex', 0, 8), '89504e470d0a1a0a', `${asset.path} PNG signature`);
  assert.equal(bytes.readUInt32BE(16), asset.width, `${asset.path} PNG width`);
  assert.equal(bytes.readUInt32BE(20), asset.height, `${asset.path} PNG height`);
}

const packageData = JSON.parse(await fs.readFile(path.join(root, 'package.json'), 'utf8'));
assert(!packageData.dependencies?.three);
assert(!packageData.devDependencies?.esbuild);
const report = {
  schema: 2,
  cache: 90,
  modules: moduleHashes.sort((a, b) => a.path.localeCompare(b.path)),
  publishedArtworks: eligibleArtworks.map(artwork => artwork.id),
  publishedAssetPaths: [...expectedAssetPaths].sort(),
  retainedAssetCount: expectedAssetPaths.size,
  retiredAssetCount: retirement.moved.length,
  staticDirectory: 'dist',
  destructiveBuild: false
};
const reportPath = process.env.DOTS_BUILD_REPORT;
if (reportPath) await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Static production source validated: ${seenModules.size} entry/module/style files, ${eligibleArtworks.length} Artwork originals, ${expectedAssetPaths.size} published assets, ${retirement.moved.length} byte-verified historical assets. No source directory is emptied.`);
