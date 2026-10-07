import { getAsset } from './studio-artwork-catalog.js?v=92';

export const FEATURE_VISUAL_REVISION = 'independent-reveal-visuals-cache91-v1';
const slotKeys = { 'palette-material': 'paletteMaterial' };
const freezeVisual = visual => Object.freeze({ ...visual,
  ...(visual.source ? { source: Object.freeze({ ...visual.source }) } : {}) });
const unknown = (artwork, slot) => freezeVisual({
  id: `unknown:${artwork?.id || 'artwork'}:${slot}`, kind: 'unknown-value', state: 'unknown',
  version: FEATURE_VISUAL_REVISION, emptyKind: 'unknown'
});

/** Resolve only explicit display resources. Crops and whole-image fallbacks are forbidden. */
export function featureVisualFor(features, slot, artwork) {
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
  const asset = getAsset(record?.assetRef);
  if (!asset || record.assetVersion !== asset.version || record.assetSha256 !== asset.sha256
    || !asset.path || !record.shortName || record.status !== asset.publicationStatus
    || record.sourceRef !== asset.sourceRef || record.artApproval?.status !== asset.artApproval?.status) return unknown(artwork, slot);
  if (slot === 'style') {
    if (record.kind !== 'original' || asset.id !== artwork.assetRefs?.original
      || asset.ownerArtworkId !== artwork.id || asset.publicationStatus !== 'published') return unknown(artwork, slot);
  } else if (record.kind !== 'dedicated-asset' || !asset.displayOnly
    || asset.resourceKind !== 'reveal-illustration' || asset.slot !== key
    || !asset.applicableArtworkIds?.includes(artwork.id)
    || !['candidate-preview', 'published'].includes(asset.publicationStatus)
    || !Array.isArray(asset.factIds) || !asset.factIds.length
    || !asset.factIds.every(id => artwork.featureIds.includes(id))
    || !asset.factIds.some(id => Array.isArray(feature.value) && feature.value.includes(id))) return unknown(artwork, slot);
  return freezeVisual({ id: `reveal-visual:${artwork.id}:${slot}:${asset.id}`,
    kind: slot === 'style' ? 'original' : 'dedicated-asset', state: 'known',
    version: FEATURE_VISUAL_REVISION, assetRef: asset.id, shortName: record.shortName,
    description: record.description, visualStatus: record.status, artApproval: record.artApproval,
    purpose: record.purpose, sourceRef: record.sourceRef,
    source: { artworkId: artwork.id, sourceArtworkId: asset.ownerArtworkId,
      assetId: asset.id, version: asset.version, sha256: asset.sha256, sourceRef: asset.sourceRef }
  });
}
