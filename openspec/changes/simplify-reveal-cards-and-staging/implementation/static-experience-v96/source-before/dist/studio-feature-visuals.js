import { getAsset } from './studio-artwork-catalog.js?v=95';

export const FEATURE_VISUAL_REVISION = 'independent-reveal-visuals-v2';
const slotKeys = { 'palette-material': 'paletteMaterial' };
const slotDimensions = {
  style: ['style'],
  appearance: ['shape', 'facial-features'],
  'palette-material': ['color', 'material'],
  clothing: ['clothing'],
  accessory: ['head-accessory', 'body-accessory'],
  prop: ['prop']
};
const freezeVisual = visual => Object.freeze({ ...visual,
  ...(visual.source ? { source: Object.freeze({ ...visual.source }) } : {}) });
const unknown = (artwork, slot) => freezeVisual({
  id: `unknown:${artwork?.id || 'artwork'}:${slot}`, kind: 'unknown-value', state: 'unknown',
  version: FEATURE_VISUAL_REVISION, emptyKind: 'unknown'
});

function factIdsFor(artwork, slot) {
  const dimensions = slotDimensions[slot];
  if (!dimensions || !artwork?.features || !Array.isArray(artwork.featureIds)) return null;
  const ids = [];
  for (const dimension of dimensions) {
    const feature = artwork.features[dimension];
    if (!feature || !['known', 'none', 'not-applicable'].includes(feature.state)) return null;
    if (feature.state !== 'known') continue;
    const values = Array.isArray(feature.ids) ? feature.ids
      : typeof feature.id === 'string' ? [feature.id] : [];
    if (!values.length || values.some(id => typeof id !== 'string' || !artwork.featureIds.includes(id))) return null;
    ids.push(...values);
  }
  return [...new Set(ids)];
}

function approvalState(asset) {
  return typeof asset?.artApproval === 'string' ? asset.artApproval : asset?.artApproval?.status;
}

function publicationAllowed(asset, resourcePolicy) {
  const status = asset?.publicationStatus;
  const approval = asset?.artApproval;
  if (status === 'published' && approval?.status === 'approved'
    && approval.assetSha256 === asset.sha256
    && approval.assetVersion === asset.version
    && approval.purpose === 'reveal-only-display'
    && typeof approval.record === 'string' && approval.record.trim()) return true;
  return resourcePolicy === 'candidate-preview' && status === 'candidate-preview' && approvalState(asset) === 'pending';
}

function matchingFacts(asset, artwork, feature, slot) {
  const expected = factIdsFor(artwork, slot);
  if (!expected?.length || !Array.isArray(feature.value) || !feature.value.length) return false;
  const registered = asset.factIds;
  if (!Array.isArray(registered) || !registered.length) return false;
  const expectedSet = new Set(expected);
  const visualSet = new Set(registered);
  return visualSet.size === registered.length && visualSet.size === expectedSet.size
    && registered.every(id => expectedSet.has(id))
    && feature.value.length === expected.length
    && feature.value.every(id => expectedSet.has(id));
}

/** Resolve an explicitly registered, semantically complete display resource.
 * The default exposes only published, approved art. Candidate assets require
 * an explicit internal review policy and never receive approval by resolving.
 */
export function featureVisualFor(features, slot, artwork, { resourcePolicy = 'published', assetResolver = getAsset } = {}) {
  if (!['published', 'candidate-preview'].includes(resourcePolicy)) return unknown(artwork, slot);
  if (typeof assetResolver !== 'function') return unknown(artwork, slot);
  const feature = Array.isArray(features) ? features.find(item => item?.kind === slot) : null;
  if (!feature || feature.state === 'unknown') return unknown(artwork, slot);
  if (feature.state === 'none' || feature.state === 'not-applicable') {
    const emptyKind = feature.state === 'none' ? 'none' : 'notApplicable';
    return freezeVisual({ id: `empty:${artwork.id}:${slot}:${emptyKind}`, kind: 'empty-value',
      state: feature.state, version: FEATURE_VISUAL_REVISION, emptyKind,
      shortName: feature.shortName || (emptyKind === 'none' ? '无' : '不适用') });
  }
  const key = slotKeys[slot] || slot;
  const record = artwork?.revealVisuals?.[key];
  const asset = assetResolver(record?.assetRef);
  if (!asset || asset.id !== record.assetRef || record.assetVersion !== asset.version || record.assetSha256 !== asset.sha256
    || !asset.path || !record.shortName || record.status !== asset.publicationStatus
    || record.sourceRef !== asset.sourceRef || record.artApproval?.status !== approvalState(asset)
    || !asset.displayOnly || asset.resourceKind !== 'reveal-illustration'
    || asset.purpose !== 'reveal-only-display' || asset.slot !== key
    || !['verified-source', 'verified-in-browser'].includes(asset.resourceStatus)
    || typeof asset.sourceRef !== 'string' || !asset.sourceRef.trim()
    || typeof asset.sourceKind !== 'string' || !asset.sourceKind.trim()
    || !/^[a-f0-9]{64}$/i.test(asset.sha256 || '')
    || !Number.isInteger(asset.byteSize) || asset.byteSize <= 0
    || !Number.isInteger(asset.width) || asset.width <= 0
    || !Number.isInteger(asset.height) || asset.height <= 0
    || !publicationAllowed(asset, resourcePolicy)) return unknown(artwork, slot);
  if (slot === 'style') {
    if (record.kind !== 'dedicated-asset' || asset.identityId !== artwork.styleIdentity
      || feature.value.length !== 1 || feature.value[0] !== `style:${artwork.styleIdentity}`
      || !asset.applicableArtworkIds?.includes(artwork.id)) return unknown(artwork, slot);
  } else if (record.kind !== 'dedicated-asset'
    || !asset.applicableArtworkIds?.includes(artwork.id)) return unknown(artwork, slot);
  if (!matchingFacts(asset, artwork, feature, slot)) return unknown(artwork, slot);
  return freezeVisual({ id: `reveal-visual:${artwork.id}:${slot}:${asset.id}`,
    kind: 'dedicated-asset', state: 'known',
    version: FEATURE_VISUAL_REVISION, assetRef: asset.id, shortName: record.shortName,
    description: record.description, visualStatus: record.status, artApproval: record.artApproval,
    purpose: record.purpose, sourceRef: record.sourceRef,
    source: { artworkId: artwork.id, sourceArtworkId: asset.ownerArtworkId,
      assetId: asset.id, version: asset.version, sha256: asset.sha256, sourceRef: asset.sourceRef }
  });
}
