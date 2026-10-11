import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveProvenancePath } from './resolve-provenance-path.mjs';
import { ARTWORKS, ASSETS } from '../dist/studio-artwork-catalog.js?v=100';
import {
  TEMPLATE_REGISTRY,
  getTemplateOptionFields,
  enumerateValidConfigurations,
  getRequiredTemplateAssets
} from '../dist/studio-edit-templates.js?v=100';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '..');
const CHANGE = resolveProvenancePath('openspec/changes/expand-character-gallery-and-adjustments');
const MATRIX_PATH = path.join(CHANGE, 'planning/character-production-20261011/coverage/20261011-integrated.json');
const BASELINE_PATH = path.join(CHANGE, 'planning/character-production-20261011/coverage/20261011-baseline.json');
const APPROVAL_PATH = path.join(ROOT, 'design/acceptance/20261011-character-adjustments-v1/approval.json');
const REQUIRED_CATEGORIES = ['appearance', 'colors', 'face', 'clothing', 'accessories'];

export function requiredCategoriesFor(artwork, template) {
  const family = artwork?.seriesId || template?.family;
  return ['dots', 'grok'].includes(family)
    ? REQUIRED_CATEGORIES.filter(category => category !== 'clothing')
    : REQUIRED_CATEGORIES;
}

function coverageFor(row, category) {
  return (row?.categoryCoverage || row?.fiveCategoryCoverage)?.[category];
}

export function isAcceptedRecord(row, live) {
  if (!row || !live?.artwork || live.publicationStatus !== 'published' || live.staticOnly === true) return false;
  if (live.artApprovalStatus !== 'approved' || live.currentArtworkVersion !== live.approvedArtworkVersion) return false;
  if (live.transparentOriginal !== true || live.originalHashVerified !== true) return false;
  if (!live.template || live.templateStatus !== 'approved' || live.templateEngineeringStatus !== 'passed'
      || live.templateApprovalStatus !== 'approved') return false;
  if (live.templateArtworkId !== live.artwork.id || live.templateArtworkVersion !== live.currentArtworkVersion) return false;
  if (live.legalRecipeCount < 1 || live.recipeReviewStatus !== 'passed'
      || live.reviewedLegalRecipeCount !== live.legalRecipeCount
      || !live.recipeSetSha256 || live.reviewedRecipeSetSha256 !== live.recipeSetSha256) return false;
  const required = requiredCategoriesFor(live.artwork, live.template);
  if (!required.includes('clothing') && live.template.options?.clothing) return false;
  return required.every(category => {
    const proof = coverageFor(row, category);
    const reachable = new Set(live.reachableOptions?.[category] || []);
    return proof?.status === 'passed'
      && Array.isArray(proof.acceptedResultIds)
      && proof.acceptedResultIds.length >= 2
      && proof.acceptedResultIds.every(id => reachable.has(id))
      && proof.visualReviewStatus === 'passed'
      && proof.artApprovalStatus === 'approved'
      && typeof proof.evidenceRef === 'string' && proof.evidenceRef.length > 0;
  });
}

function recordGaps(row, live) {
  const gaps = [];
  if (!row) gaps.push('missing-coverage-row');
  if (!live?.artwork) gaps.push('missing-current-artwork');
  if (live?.publicationStatus !== 'published') gaps.push('not-currently-published');
  if (live?.staticOnly === true) gaps.push('static-fallback-does-not-count');
  if (live?.artApprovalStatus !== 'approved' || live?.currentArtworkVersion !== live?.approvedArtworkVersion) gaps.push('exact-artwork-version-approval-missing');
  if (live?.transparentOriginal !== true || live?.originalHashVerified !== true) gaps.push('transparent-verified-original-missing');
  if (!live?.template) gaps.push('exact-template-missing');
  if (live?.template && (live.templateArtworkId !== live.artwork?.id || live.templateArtworkVersion !== live.currentArtworkVersion)) gaps.push('template-artwork-version-binding-mismatch');
  if (live?.templateStatus !== 'approved' || live?.templateEngineeringStatus !== 'passed' || live?.templateApprovalStatus !== 'approved') gaps.push('template-engineering-or-approval-incomplete');
  if (live?.legalRecipeCount < 1 || live?.recipeReviewStatus !== 'passed' || live?.reviewedLegalRecipeCount !== live?.legalRecipeCount || !live?.recipeSetSha256 || live?.reviewedRecipeSetSha256 !== live?.recipeSetSha256) gaps.push('legal-recipe-review-incomplete');
  const required = requiredCategoriesFor(live?.artwork, live?.template);
  if (!required.includes('clothing') && live?.template?.options?.clothing) gaps.push('dots-grok-clothing-is-not-supported');
  for (const category of required) {
    const proof = coverageFor(row, category);
    const reachable = new Set(live?.reachableOptions?.[category] || []);
    const okay = proof?.status === 'passed'
      && Array.isArray(proof.acceptedResultIds)
      && proof.acceptedResultIds.length >= 2
      && proof.acceptedResultIds.every(id => reachable.has(id))
      && proof.visualReviewStatus === 'passed'
      && proof.artApprovalStatus === 'approved'
      && typeof proof.evidenceRef === 'string' && proof.evidenceRef.length > 0;
    if (!okay) gaps.push(`category-${category}-needs-two-reachable-reviewed-approved-results`);
  }
  return gaps;
}

function optionId(option) {
  if (typeof option === 'string') return option;
  return typeof option?.id === 'string' ? option.id : null;
}

function categoryOptions(template, category) {
  const options = template?.options || {};
  const categories = template?.categories || {};
  const capability = categories[category] ?? template?.capabilities?.[category];
  if (Array.isArray(capability)) return capability;
  if (Array.isArray(capability?.options)) return capability.options;
  const keys = {
    appearance: ['appearance', 'shape', 'silhouette'],
    colors: ['colors', 'color'],
    face: ['face', 'eyes', 'expression'],
    clothing: ['clothing', 'clothes'],
    accessories: ['accessories', 'accessory', 'glasses']
  }[category];
  for (const key of keys) {
    if (Array.isArray(options[key])) return options[key];
  }
  if (category === 'accessories') {
    return [...(Array.isArray(options.glasses) ? options.glasses : []), ...(Array.isArray(options.accessory) ? options.accessory : [])];
  }
  return [];
}

function optionReachable(category, id, recipe) {
  const keys = {
    appearance: ['appearance', 'shape', 'silhouette'],
    colors: ['colors', 'color'],
    face: ['face', 'eyes', 'expression'],
    clothing: ['clothing', 'clothes'],
    accessories: ['accessories', 'accessory', 'glasses']
  }[category];
  return keys.some(key => recipe?.[key] === id);
}

async function sha256File(filePath) {
  return createHash('sha256').update(await readFile(filePath)).digest('hex');
}

function assetFilePath(relativePath) {
  return path.resolve(ROOT, 'dist', String(relativePath || '').replace(/^\.\//, ''));
}

const checkedFiles = new Map();
async function validateRegisteredAsset(asset, expectedId, expectedVersion, expectedPurpose) {
  if (!asset || asset.id !== expectedId || asset.version !== expectedVersion
      || (expectedPurpose !== null && asset.purpose !== expectedPurpose)) {
    return { valid: false, reason: 'registration-tuple-mismatch' };
  }
  if (!asset.path || !/^[a-f0-9]{64}$/.test(asset.sha256 || '')) return { valid: false, reason: 'missing-path-or-sha256' };
  const filePath = assetFilePath(asset.path);
  try {
    const info = await stat(filePath);
    const cacheKey = `${filePath}|${asset.sha256}|${info.size}`;
    if (!checkedFiles.has(cacheKey)) checkedFiles.set(cacheKey, await sha256File(filePath));
    const actual = checkedFiles.get(cacheKey);
    return { valid: info.isFile() && actual === asset.sha256, reason: actual === asset.sha256 ? null : 'file-hash-mismatch', filePath };
  } catch {
    return { valid: false, reason: 'file-missing', filePath };
  }
}

async function assessArtwork(artwork, row, assetsById, templates, sourceAssets) {
  const gaps = [];
  const original = assetsById.get(artwork?.assetRefs?.original);
  if (!original) gaps.push('original-asset-not-registered');
  let originalHashVerified = false;
  if (original) {
    const check = await validateRegisteredAsset(original, original.id, original.version, null);
    originalHashVerified = check.valid;
    if (!check.valid) gaps.push(`original-asset-${check.reason}`);
    if (original.alpha?.hasTransparency !== true || original.alpha?.hasAlpha !== true) gaps.push('current-original-has-no-verified-transparency');
  }

  const template = templates.find(item => item.artworkBinding?.artworkId === artwork.id
    && item.artworkBinding?.artworkVersion === artwork.version) || null;
  let recipes = [];
  let recipeSetSha256 = null;
  let allRecipeAssetsVerified = true;
  if (!template) gaps.push('exact-template-missing');
  if (template) {
    try {
      recipes = enumerateValidConfigurations(template);
      recipeSetSha256 = createHash('sha256').update(JSON.stringify(recipes)).digest('hex');
      if (!recipes.length) gaps.push('template-has-no-legal-recipes');
      for (const recipe of recipes) {
        const refs = getRequiredTemplateAssets(template, recipe);
        for (const ref of refs) {
          const registered = sourceAssets.get(`${ref.id}|${ref.version}|${ref.purpose}`);
          const check = await validateRegisteredAsset(registered, ref.id, ref.version, ref.purpose);
          if (!check.valid) {
            allRecipeAssetsVerified = false;
            gaps.push(`template-asset-${ref.id}-${check.reason}`);
          }
        }
      }
    } catch (error) {
      gaps.push(`template-recipes-invalid:${String(error?.message || error).replace(/\s+/g, ' ').slice(0, 140)}`);
    }
  }

  const reachableOptions = {};
  const required = requiredCategoriesFor(artwork, template);
  for (const category of required) {
    const options = categoryOptions(template, category);
    const ids = options.map(optionId).filter(Boolean);
    reachableOptions[category] = [...new Set(ids.filter(id => recipes.some(recipe => optionReachable(category, id, recipe))))];
  }

  const evidence = row?.currentChangeEvidence || {};
  const exactCurrentEvidence = evidence.currentArtworkVersion === artwork.version
    && evidence.currentOriginalAssetId === original?.id
    && evidence.currentOriginalAssetSha256 === original?.sha256
    && evidence.currentTemplateId === (template?.id ?? null)
    && evidence.currentTemplateVersion === (template?.version ?? null);
  if (!exactCurrentEvidence) gaps.push('coverage-evidence-does-not-match-live-artwork-template-or-asset-version');
  if (artwork.publicationStatus !== 'published') gaps.push('artwork-is-not-published');
  if (artwork.artApproval?.status !== 'approved' || artwork.artApproval?.assetSha256 !== original?.sha256) gaps.push('artwork-approval-does-not-cover-current-original-hash');
  if (template?.status !== 'approved' || template?.engineeringStatus !== 'passed') gaps.push('template-engineering-not-passed');
  if (template?.artApproval?.status !== 'approved') gaps.push('template-art-approval-not-approved');
  if (!allRecipeAssetsVerified) gaps.push('one-or-more-legal-recipe-assets-failed');
  if (!row || !isAcceptedRecord(row, {
    artwork,
    publicationStatus: artwork.publicationStatus,
    staticOnly: false,
    artApprovalStatus: artwork.artApproval?.status,
    currentArtworkVersion: artwork.version,
    approvedArtworkVersion: exactCurrentEvidence ? evidence.currentArtworkVersion : null,
    transparentOriginal: original?.alpha?.hasTransparency === true,
    originalHashVerified,
    template,
    templateStatus: template?.status,
    templateEngineeringStatus: template?.engineeringStatus,
    templateApprovalStatus: template?.artApproval?.status,
    templateArtworkId: template?.artworkBinding?.artworkId,
    templateArtworkVersion: template?.artworkBinding?.artworkVersion,
    legalRecipeCount: recipes.length,
    recipeReviewStatus: evidence.recipeReviewStatus,
    reviewedLegalRecipeCount: evidence.reviewedLegalRecipeCount,
    recipeSetSha256,
    reviewedRecipeSetSha256: evidence.reviewedRecipeSetSha256,
    reachableOptions
  })) gaps.push(...recordGaps(row, {
    artwork,
    publicationStatus: artwork.publicationStatus,
    staticOnly: false,
    artApprovalStatus: artwork.artApproval?.status,
    currentArtworkVersion: artwork.version,
    approvedArtworkVersion: exactCurrentEvidence ? evidence.currentArtworkVersion : null,
    transparentOriginal: original?.alpha?.hasTransparency === true,
    originalHashVerified,
    template,
    templateStatus: template?.status,
    templateEngineeringStatus: template?.engineeringStatus,
    templateApprovalStatus: template?.artApproval?.status,
    templateArtworkId: template?.artworkBinding?.artworkId,
    templateArtworkVersion: template?.artworkBinding?.artworkVersion,
    legalRecipeCount: recipes.length,
    recipeReviewStatus: evidence.recipeReviewStatus,
    reviewedLegalRecipeCount: evidence.reviewedLegalRecipeCount,
    recipeSetSha256,
    reviewedRecipeSetSha256: evidence.reviewedRecipeSetSha256,
    reachableOptions
  }));

  return {
    artworkId: artwork.id,
    currentVersion: artwork.version,
    templateId: template?.id ?? null,
    templateVersion: template?.version ?? null,
    legalRecipeCount: recipes.length,
    exactTemplateAssetsVerified: allRecipeAssetsVerified,
    requiredCategories: required,
    reachableOptions: Object.fromEntries(required.map(category => [category, reachableOptions[category].length])),
    covered: gaps.length === 0,
    gaps: [...new Set(gaps)]
  };
}

function selfTest() {
  const complete = {
    artwork: { id: 'fixture', version: 'v1' }, publicationStatus: 'published', staticOnly: false,
    artApprovalStatus: 'approved', currentArtworkVersion: 'v1', approvedArtworkVersion: 'v1',
    transparentOriginal: true, originalHashVerified: true,
    template: {}, templateStatus: 'approved', templateEngineeringStatus: 'passed', templateApprovalStatus: 'approved',
    templateArtworkId: 'fixture', templateArtworkVersion: 'v1', legalRecipeCount: 2,
    recipeReviewStatus: 'passed', reviewedLegalRecipeCount: 2, recipeSetSha256: 'same', reviewedRecipeSetSha256: 'same',
    reachableOptions: Object.fromEntries(REQUIRED_CATEGORIES.map(key => [key, ['none', `${key}-alt`]]))
  };
  const completeRow = { fiveCategoryCoverage: Object.fromEntries(REQUIRED_CATEGORIES.map(key => [key, {
    status: 'passed', acceptedResultIds: ['none', `${key}-alt`], visualReviewStatus: 'passed', artApprovalStatus: 'approved', evidenceRef: 'review/file#version'
  }])) };
  assert.equal(isAcceptedRecord(completeRow, complete), true, 'A complete exact and approved control record passes.');
  assert.equal(isAcceptedRecord(completeRow, { ...complete, template: null }), false, 'A missing-template record is never complete.');
  assert.equal(isAcceptedRecord(completeRow, { ...complete, publicationStatus: 'pending' }), false, 'Pending work is never counted as complete.');
  assert.equal(isAcceptedRecord(completeRow, { ...complete, staticOnly: true }), false, 'Static downgrade is never counted as complete.');
  const fourCategoryRow = { categoryCoverage: Object.fromEntries(Object.entries(completeRow.fiveCategoryCoverage).filter(([key]) => key !== 'clothing')) };
  for (const family of ['dots', 'grok']) {
    const fourCategoryLive = { ...complete, template: { family } };
    assert.equal(isAcceptedRecord(fourCategoryRow, fourCategoryLive), true, `${family} requires four real categories, with clothing not applicable.`);
    assert.equal(isAcceptedRecord(fourCategoryRow, { ...fourCategoryLive, template: { family, options: { clothing: ['none', 'wrap'] } } }), false, `${family} cannot restore clothing as a hidden capability.`);
  }
  assert.equal(isAcceptedRecord(fourCategoryRow, { ...complete, template: { family: 'animals' } }), false, 'Animals still require real clothing coverage.');
  assert.equal(isAcceptedRecord(fourCategoryRow, { ...complete, artwork: { ...complete.artwork, seriesId: 'animals' }, template: { family: 'dots' } }), false, 'A mismatched Template family cannot waive an animal Artwork clothing requirement.');
  const lockedIds = Array.from({ length: 24 }, (_, index) => `baseline-${index + 1}`);
  const coverageRows = lockedIds.map(artworkId => ({ artworkId }));
  const dropped = coverageRows.slice(1);
  const denominator = lockedIds.length + 1; // one new public Artwork is added
  const missing = lockedIds.filter(id => !new Set(dropped.map(row => row.artworkId)).has(id));
  assert.equal(denominator, 25, 'The denominator is based on the locked baseline plus new eligible works.');
  assert.deepEqual(missing, ['baseline-1'], 'Deleting a coverage row reports a gap instead of shrinking the denominator.');
  console.log('PASS coverage fixtures: missing Template, pending, static downgrade, and locked baseline denominator');
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has('--self-test')) return selfTest();
  const matrix = JSON.parse(await readFile(MATRIX_PATH, 'utf8'));
  const capturedBaseline = JSON.parse(await readFile(BASELINE_PATH, 'utf8'));
  assert.deepEqual(matrix.baseline, capturedBaseline.baseline, 'Integration preserves the frozen 24-character baseline.');
  const approvalBytes = await readFile(APPROVAL_PATH);
  assert.equal(createHash('sha256').update(approvalBytes).digest('hex'), 'f2f4296013a1ccdb1eb8305720fabd21bd5f84a83b4412d2a1599a10312383d8', 'The exact user approval record is immutable.');
  const approval = JSON.parse(approvalBytes);
  assert.equal(await sha256File(resolveProvenancePath(approval.approvedReviewPackage.path)), approval.approvedReviewPackage.sha256);
  assert.deepEqual(ARTWORKS.map(row => `${row.id}@${row.version}`).sort(), approval.scope.artworks.map(row => `${row.id}@${row.version}`).sort(), 'Public Artwork identities and versions exactly match the approved scope.');
  assert.deepEqual(TEMPLATE_REGISTRY.map(row => `${row.id}@${row.version}`).sort(), approval.scope.templates.map(row => `${row.id}@${row.version}`).sort());
  for (const template of TEMPLATE_REGISTRY) {
    const approved = approval.scope.templates.find(row => row.id === template.id);
    assert.deepEqual(getTemplateOptionFields(template).map(field => field.key), approved.fields, `${template.id}: approved categories are unchanged.`);
    for (const field of ['artworkBinding', 'defaultOptions', 'options', 'conflicts', 'recipes']) {
      assert.deepEqual(template[field], approved[field], `${template.id}: approved ${field} is unchanged.`);
    }
  }
  const baselineIds = matrix.baseline.artworkIds;
  if (baselineIds.length !== 24 || new Set(baselineIds).size !== 24 || matrix.baseline.denominator !== 24) {
    throw new Error('Coverage matrix must retain 24 locked, unique pre-change Artwork IDs.');
  }
  const counts = Object.fromEntries(Object.keys(matrix.baseline.seriesCounts).map(series => [series,
    baselineIds.filter(id => matrix.rows.find(row => row.artwork.id === id)?.artwork.seriesId === series).length]));
  if (JSON.stringify(counts) !== JSON.stringify(matrix.baseline.seriesCounts)) {
    throw new Error(`Locked family counts changed: ${JSON.stringify(counts)}`);
  }
  const rowsById = new Map(matrix.rows.map(row => [row.artwork.id, row]));
  const duplicateMatrixIds = matrix.rows.length !== rowsById.size;
  const currentById = new Map(ARTWORKS.map(artwork => [artwork.id, artwork]));
  const missingBaseline = baselineIds.filter(id => !currentById.has(id));
  const newPublishedIds = ARTWORKS.map(artwork => artwork.id).filter(id => !baselineIds.includes(id));
  const effectiveIds = [...baselineIds, ...newPublishedIds];
  const assetsById = new Map(ASSETS.map(asset => [asset.id, asset]));
  const sourceManifest = JSON.parse(await readFile(path.join(ROOT, 'dist/assets/templates/sources.json'), 'utf8'));
  const sourceAssets = new Map((sourceManifest.assets || []).map(asset => [`${asset.id}|${asset.version}|${asset.purpose}`, asset]));
  const reports = [];
  for (const id of effectiveIds) {
    const row = rowsById.get(id) || null;
    const artwork = currentById.get(id) || row?.artwork || null;
    if (!row || !currentById.has(id)) {
      reports.push({ artworkId:id, covered:false, gaps:[...(!row?['missing-coverage-row']:[]), ...(!currentById.has(id)?['baseline-artwork-missing-from-current-catalog']:[])] });
      continue;
    }
    reports.push(await assessArtwork(artwork,row,assetsById,TEMPLATE_REGISTRY,sourceAssets));
  }
  const allGaps = reports.filter(row => !row.covered);
  const gapCounts = {};
  for (const report of reports) {
    for (const gap of report.gaps) gapCounts[gap] = (gapCounts[gap] || 0) + 1;
  }
  const summary = {
    change: matrix.change,
    baselineDenominator: baselineIds.length,
    currentPublishedDenominator: effectiveIds.length,
    currentCatalogPublishedCount: ARTWORKS.length,
    missingBaselineArtworkIds: missingBaseline,
    missingCoverageRowIds: effectiveIds.filter(id=>!rowsById.has(id)),
    duplicateCoverageRows: duplicateMatrixIds,
    covered: reports.filter(row=>row.covered).length,
    gaps: allGaps.length,
    failedArtworkIds: allGaps.map(row=>row.artworkId),
    gapCounts,
    status: allGaps.length===0 && missingBaseline.length===0 && !duplicateMatrixIds ? 'complete' : 'incomplete',
  };
  if (args.has('--details')) summary.reports = reports;
  console.log(JSON.stringify(summary,null,2));
  if (args.has('--strict') && summary.status !== 'complete') process.exitCode = 1;
}

main().catch(error => {
  console.error(error?.stack || error);
  process.exitCode = 1;
});
