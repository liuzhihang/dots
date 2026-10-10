import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const changeRoot = 'openspec/changes/simplify-reveal-cards-and-staging';
const baselinePath = `${changeRoot}/implementation/immersive-home-v98/baseline.json`;
const sourceBeforePrefix = `${changeRoot}/implementation/immersive-home-v98/source-before/`;
const legacyContractPath = `${changeRoot}/implementation/static-experience-v96/version-contract.json`;
const retirementPath = 'historical-runtime/immersive-home-v98/retirement.json';
const expectedBaselineSha256 = 'aef9c46e21b782b4b5c47a884d25c45dcd500124224030c5823ce0fb2bff8b14';
const v96EvidencePrefix = 'design/acceptance/current-20261009-v96/';
const protectedHistoryPrefixes = [
  v96EvidencePrefix,
  `${changeRoot}/implementation/static-experience-v96/`,
  'design/acceptance/current-20261009-v97/',
  `${changeRoot}/implementation/visual-rework-v97/`,
  'historical-runtime/visual-rework-v97/',
  baselinePath,
  sourceBeforePrefix,
];
const protectedOriginalPrefixes = ['dist/assets/characters/', 'dist/assets/looks/'];
const retirableSceneAssets = new Set([
  'dist/assets/terrace/terrace-desktop-v97.webp',
  'dist/assets/terrace/terrace-mobile-v97.webp',
]);
const allowedExactEdits = new Set([
  'AGENTS.md',
  'DESIGN.md',
  'README.md',
  'design-qa.md',
  '.agents/rules/design.md',
  'design/studio-visual-interaction-system.md',
  'design/static-publish-manifest.json',
  `${changeRoot}/proposal.md`,
  `${changeRoot}/design.md`,
  'scripts/build-studio.mjs',
  'scripts/verify-implementation-safety.mjs',
  'scripts/verify-publish-inventory.mjs',
  'scripts/verify-artwork-catalog.mjs',
  'scripts/verify-artwork-query.mjs',
  'scripts/verify-reference-detail.mjs',
  'scripts/verify-transparent-output.mjs',
  'scripts/verify-motion.mjs',
  'scripts/verify-studio-browser.mjs',
  `${changeRoot}/tasks.md`,
]);
const allowedPrefixes = [
  'dist/',
  'design/acceptance/current-20261009-v98/',
  `${changeRoot}/specs/`,
  'historical-runtime/immersive-home-v98/',
];
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

const readJson = async filePath => JSON.parse(await fs.readFile(path.join(root, filePath), 'utf8'));

function isProtected(filePath, legacyContract, frozenEvidencePaths = new Set()) {
  return legacyContract.protectedPaths.includes(filePath)
    || protectedHistoryPrefixes.some(prefix => filePath === prefix || filePath.startsWith(prefix))
    || frozenEvidencePaths.has(filePath)
    || protectedOriginalPrefixes.some(prefix => filePath.startsWith(prefix));
}

function isAllowedEdit(filePath) {
  return allowedExactEdits.has(filePath) || allowedPrefixes.some(prefix => filePath.startsWith(prefix));
}

async function currentHash(filePath) {
  try {
    return hash(await fs.readFile(path.join(root, filePath)));
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

function currentRepositoryPaths() {
  return execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], {
    cwd: root,
    encoding: 'utf8',
  }).split('\0').filter(Boolean);
}

export async function verifySafety() {
  const baselineBytes = await fs.readFile(path.join(root, baselinePath));
  assert.equal(hash(baselineBytes), expectedBaselineSha256, 'Frozen v98 baseline was modified');
  const baseline = JSON.parse(baselineBytes.toString('utf8'));
  assert.equal(baseline.head, 'b22c3f0df8b010da74b99caf9a80c417157857d7', 'v98 baseline HEAD changed');

  const legacyContract = await readJson(legacyContractPath);
  const frozenEvidencePaths = new Set(baseline.files
    .filter(record => record.path.startsWith('design/acceptance/current-20261009-v98/'))
    .map(record => record.path));
  let retirement;
  try {
    retirement = await readJson(retirementPath);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    retirement = {revision: 98, files: []};
  }
  assert.equal(retirement.revision, 98, 'Retirement inventory must be revision 98');
  assert(Array.isArray(retirement.files), 'Retirement inventory must contain a files array');

  const baselineByPath = new Map(baseline.files.map(record => [record.path, record]));
  const moved = new Map();
  const retirementTargets = new Set();
  for (const record of retirement.files) {
    assert(record?.from && record?.to && /^[a-f0-9]{64}$/.test(record.sha256 ?? ''), 'Retirement record requires from, to, and SHA-256');
    assert(!moved.has(record.from), `Duplicate retirement source: ${record.from}`);
    assert(!retirementTargets.has(record.to), `Duplicate retirement destination: ${record.to}`);
    assert(record.to.startsWith('historical-runtime/immersive-home-v98/'), `Retirement destination is outside v98 history: ${record.to}`);
    assert(!record.to.split('/').includes('..'), `Unsafe retirement destination: ${record.to}`);
    assert(!baseline.files.some(item => item.path === record.to), `Retirement destination overwrites a frozen baseline path: ${record.to}`);
    assert(retirableSceneAssets.has(record.from), `Only the two v97 terrace scene files may be retired: ${record.from}`);
    assert(!isProtected(record.from, legacyContract, frozenEvidencePaths), `Protected path cannot be retired: ${record.from}`);
    moved.set(record.from, record);
    retirementTargets.add(record.to);
  }

  let protectedCount = 0;
  const changed = [];
  const retired = [];
  for (const record of baseline.files) {
    const actualHash = await currentHash(record.path);
    if (record.sha256 === null) {
      assert.equal(actualHash, null, `Previously absent path unexpectedly restored: ${record.path}`);
      protectedCount++;
      continue;
    }
    if (actualHash === record.sha256) {
      protectedCount++;
      continue;
    }

    assert(!isProtected(record.path, legacyContract, frozenEvidencePaths), `Protected baseline path changed: ${record.path}`);
    const retirementRecord = moved.get(record.path);
    if (retirableSceneAssets.has(record.path)) {
      assert(retirementRecord, `Changed v97 scene asset must be preserved under v98 history: ${record.path}`);
    }
    if (retirementRecord) {
      assert.equal(actualHash, null, `Retired source still exists: ${record.path}`);
      assert.equal(retirementRecord.sha256, record.sha256, `Retirement hash differs from baseline: ${record.path}`);
      assert.equal(await currentHash(retirementRecord.to), record.sha256, `Retired file hash mismatch: ${retirementRecord.to}`);
      retired.push({from: record.path, to: retirementRecord.to, sha256: record.sha256});
      continue;
    }

    assert.notEqual(actualHash, null, `Deleted baseline path lacks an exact retirement mapping: ${record.path}`);
    assert(isAllowedEdit(record.path), `Unrelated baseline path changed: ${record.path}`);
    changed.push({path: record.path, before: record.sha256, after: actualHash});
  }

  for (const record of retirement.files) {
    const baselineRecord = baselineByPath.get(record.from);
    assert(baselineRecord?.sha256, `Retirement source is not a present v98 baseline file: ${record.from}`);
    assert(retired.some(item => item.from === record.from), `Retirement source was not verified as removed: ${record.from}`);
  }

  const baselinePaths = new Set(baselineByPath.keys());
  const added = [...new Set(currentRepositoryPaths())].filter(filePath => !baselinePaths.has(filePath));
  for (const filePath of added) {
    // The immutable baseline and its source-before snapshot are created after the baseline path inventory.
    // Their contents are checked below, so they are expected additions under otherwise protected paths.
    if (filePath === baselinePath || filePath.startsWith(sourceBeforePrefix)) continue;
    assert(!isProtected(filePath, legacyContract, frozenEvidencePaths), `New file uses a protected path: ${filePath}`);
    assert(isAllowedEdit(filePath), `New file is outside the v98 edit scope: ${filePath}`);
  }

  const sourceBeforePaths = currentRepositoryPaths().filter(filePath => filePath.startsWith(sourceBeforePrefix));
  assert(sourceBeforePaths.length > 0, 'Frozen v98 source-before snapshot is missing');
  for (const filePath of sourceBeforePaths) {
    const originalPath = filePath.slice(sourceBeforePrefix.length);
    const original = baselineByPath.get(originalPath);
    assert(original?.sha256, `Source-before file has no frozen baseline source: ${originalPath}`);
    assert.equal(await currentHash(filePath), original.sha256, `Source-before snapshot changed: ${filePath}`);
  }

  return {
    baselineHead: baseline.head,
    protectedCount,
    changed,
    retired,
    added,
    protectedHistoricalEvidence: ['v96', 'v97', 'v98-baseline'],
    protectedApprovedArtworkPrefixes: protectedOriginalPrefixes,
  };
}

if (process.argv[1] === import.meta.filename) {
  console.log(JSON.stringify(await verifySafety(), null, 2));
}
