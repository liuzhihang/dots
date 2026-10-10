import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const changeRoot = 'openspec/changes/simplify-reveal-cards-and-staging';
const baselinePath = `${changeRoot}/implementation/visual-rework-v97/baseline.json`;
const sourceBeforePrefix = `${changeRoot}/implementation/visual-rework-v97/source-before/`;
const legacyContractPath = `${changeRoot}/implementation/static-experience-v96/version-contract.json`;
const retirementPath = 'historical-runtime/visual-rework-v97/retirement.json';
const expectedBaselineSha256 = '04642b0f49ad54b25c2debd3b3ecf1426b0ce44487e72e0f715c8650f3f2c7c5';
const v96EvidencePrefix = 'design/acceptance/current-20261009-v96/';
const v96ImplementationPrefix = `${changeRoot}/implementation/static-experience-v96/`;
const protectedOriginalPrefixes = ['dist/assets/characters/', 'dist/assets/looks/'];
const retirableSceneAssetPrefixes = ['dist/assets/terrace/', 'dist/assets/scenes/'];
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

const readJson = async filePath => JSON.parse(await fs.readFile(path.join(root, filePath), 'utf8'));

function isProtected(filePath, legacyContract) {
  return legacyContract.protectedPaths.includes(filePath)
    || filePath.startsWith(v96EvidencePrefix)
    || filePath.startsWith(v96ImplementationPrefix)
    || protectedOriginalPrefixes.some(prefix => filePath.startsWith(prefix));
}

function allowedEditRoots(legacyContract) {
  const exactPaths = new Set([
    ...legacyContract.allowedExistingPaths,
    `${changeRoot}/proposal.md`,
    `${changeRoot}/design.md`,
    legacyContract.taskTrackingPath,
    'design/static-publish-manifest.json',
  ]);
  const prefixes = [
    'dist/',
    'scripts/',
    'historical-runtime/visual-rework-v97/',
    'design/acceptance/current-20261009-v97/',
    `${changeRoot}/specs/`,
    `${changeRoot}/implementation/visual-rework-v97/`,
  ];
  return {exactPaths, prefixes};
}

function isAllowedEdit(filePath, allowed) {
  return allowed.exactPaths.has(filePath) || allowed.prefixes.some(prefix => filePath.startsWith(prefix));
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
  assert.equal(hash(baselineBytes), expectedBaselineSha256, 'Frozen v97 baseline was modified');
  const baseline = JSON.parse(baselineBytes.toString('utf8'));
  assert.equal(baseline.head, 'b22c3f0df8b010da74b99caf9a80c417157857d7', 'v97 baseline HEAD changed');

  const legacyContract = await readJson(legacyContractPath);
  const allowed = allowedEditRoots(legacyContract);
  let retirement;
  try {
    retirement = await readJson(retirementPath);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    retirement = {revision: 97, files: []};
  }
  assert.equal(retirement.revision, 97, 'Retirement inventory must be revision 97');
  assert(Array.isArray(retirement.files), 'Retirement inventory must contain a files array');

  const baselineByPath = new Map(baseline.files.map(record => [record.path, record]));
  const moved = new Map();
  const retirementTargets = new Set();
  for (const record of retirement.files) {
    assert(record?.from && record?.to && /^[a-f0-9]{64}$/.test(record.sha256 ?? ''), 'Retirement record requires from, to, and SHA-256');
    assert(!moved.has(record.from), `Duplicate retirement source: ${record.from}`);
    assert(!retirementTargets.has(record.to), `Duplicate retirement destination: ${record.to}`);
    assert(record.to.startsWith('historical-runtime/visual-rework-v97/'), `Retirement destination is outside v97 history: ${record.to}`);
    assert(!record.to.split('/').includes('..'), `Unsafe retirement destination: ${record.to}`);
    assert(!baseline.files.some(item => item.path === record.to), `Retirement destination overwrites a frozen baseline path: ${record.to}`);
    assert(retirableSceneAssetPrefixes.some(prefix => record.from.startsWith(prefix)), `Only frozen scene assets may be retired: ${record.from}`);
    assert(!isProtected(record.from, legacyContract), `Protected path cannot be retired: ${record.from}`);
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

    assert(!isProtected(record.path, legacyContract), `Protected baseline path changed: ${record.path}`);
    const retirementRecord = moved.get(record.path);
    if (retirableSceneAssetPrefixes.some(prefix => record.path.startsWith(prefix))) {
      assert(retirementRecord, `Changed v96 scene asset must be preserved under v97 history: ${record.path}`);
    }
    if (retirementRecord) {
      assert.equal(actualHash, null, `Retired source still exists: ${record.path}`);
      assert.equal(retirementRecord.sha256, record.sha256, `Retirement hash differs from baseline: ${record.path}`);
      assert.equal(await currentHash(retirementRecord.to), record.sha256, `Retired file hash mismatch: ${retirementRecord.to}`);
      retired.push({from: record.path, to: retirementRecord.to, sha256: record.sha256});
      continue;
    }

    assert.notEqual(actualHash, null, `Deleted baseline path lacks an exact retirement mapping: ${record.path}`);
    assert(isAllowedEdit(record.path, allowed), `Unrelated baseline path changed: ${record.path}`);
    changed.push({path: record.path, before: record.sha256, after: actualHash});
  }

  for (const record of retirement.files) {
    const baselineRecord = baselineByPath.get(record.from);
    assert(baselineRecord?.sha256, `Retirement source is not a present v97 baseline file: ${record.from}`);
    assert(retired.some(item => item.from === record.from), `Retirement source was not verified as removed: ${record.from}`);
  }

  const baselinePaths = new Set(baselineByPath.keys());
  const added = [...new Set(currentRepositoryPaths())].filter(filePath => !baselinePaths.has(filePath));
  for (const filePath of added) {
    assert(!isProtected(filePath, legacyContract), `New file uses a protected path: ${filePath}`);
    assert(isAllowedEdit(filePath, allowed), `New file is outside the v97 edit scope: ${filePath}`);
  }

  const sourceBeforePaths = currentRepositoryPaths().filter(filePath => filePath.startsWith(sourceBeforePrefix));
  assert(sourceBeforePaths.length > 0, 'Frozen v97 source-before snapshot is missing');
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
    protectedV96Evidence: true,
    protectedApprovedArtworkPrefixes: protectedOriginalPrefixes,
  };
}

if (process.argv[1] === import.meta.filename) {
  console.log(JSON.stringify(await verifySafety(), null, 2));
}
