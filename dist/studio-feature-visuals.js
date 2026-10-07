import { getAsset } from './studio-artwork-catalog.js?v=90';

// Crops are normalized source rectangles into the exact approved Artwork PNG.
// They are only display windows: source bytes, alpha, and download assets stay intact.
export const FEATURE_VISUAL_REVISION = 'approved-artwork-source-crops-cache90-v1';

export const FEATURE_VISUAL_REGISTRY = Object.freeze({
  'candidate-dots-20261005': {
    appearance: [0.15, 0.27, 0.70, 0.55], 'palette-material': [0.27, 0.34, 0.46, 0.43], accessory: [0.00, 0.10, 1.00, 0.58]
  },
  'candidate-grok-20261005': {
    appearance: [0.12, 0.13, 0.80, 0.76], 'palette-material': [0.22, 0.22, 0.56, 0.58]
  },
  'candidate-meta-muse-20261005': {
    appearance: [0.25, 0.10, 0.52, 0.39], 'palette-material': [0.27, 0.52, 0.46, 0.32]
  },
  'candidate-humans-20261005': {
    appearance: [0.19, 0.02, 0.62, 0.47], 'palette-material': [0.34, 0.54, 0.34, 0.27], clothing: [0.27, 0.48, 0.47, 0.50]
  },
  'candidate-animals-20261005': {
    appearance: [0.18, 0.05, 0.64, 0.49], 'palette-material': [0.27, 0.49, 0.46, 0.34]
  },
  'dots-rose-glasses': {
    appearance: [0.14, 0.26, 0.72, 0.55], 'palette-material': [0.30, 0.46, 0.40, 0.37], accessory: [0.19, 0.33, 0.62, 0.32]
  },
  'dots-lilac-bucket': {
    appearance: [0.13, 0.25, 0.74, 0.55], 'palette-material': [0.30, 0.49, 0.40, 0.34], accessory: [0.06, 0.10, 0.88, 0.39]
  },
  'grok-green-cloud': {
    appearance: [0.04, 0.10, 0.92, 0.78], 'palette-material': [0.14, 0.43, 0.72, 0.45]
  },
  'grok-teal-square': {
    appearance: [0.08, 0.12, 0.84, 0.76], 'palette-material': [0.15, 0.45, 0.70, 0.44]
  },
  'muse-rose-flowers': {
    appearance: [0.18, 0.08, 0.64, 0.43], 'palette-material': [0.22, 0.53, 0.56, 0.32], prop: [0.35, 0.35, 0.31, 0.35]
  },
  'muse-sage-reading': {
    appearance: [0.18, 0.08, 0.64, 0.43], 'palette-material': [0.21, 0.53, 0.58, 0.33], prop: [0.37, 0.45, 0.28, 0.31]
  },
  'human-bun-yellow': {
    appearance: [0.23, 0.02, 0.55, 0.48], 'palette-material': [0.30, 0.47, 0.46, 0.39], clothing: [0.25, 0.47, 0.51, 0.51]
  },
  'human-blond-glasses': {
    appearance: [0.23, 0.02, 0.56, 0.49], 'palette-material': [0.23, 0.08, 0.56, 0.72], clothing: [0.25, 0.53, 0.51, 0.45], accessory: [0.30, 0.28, 0.43, 0.23]
  },
  'animal-white-cat': {
    appearance: [0.14, 0.04, 0.70, 0.49], 'palette-material': [0.30, 0.45, 0.48, 0.35]
  },
  'animal-gray-husky': {
    appearance: [0.14, 0.04, 0.70, 0.49], 'palette-material': [0.28, 0.48, 0.48, 0.36]
  }
});

const freezeVisual = visual => Object.freeze({
  ...visual,
  ...(visual.sourceRect ? { sourceRect: Object.freeze([...visual.sourceRect]) } : {}),
  ...(visual.source ? { source: Object.freeze({ ...visual.source }) } : {})
});

function sourceFor(artwork) {
  const asset = getAsset(artwork?.assetRefs?.original);
  if (!asset || asset.ownerArtworkId !== artwork?.id || asset.publicationStatus !== 'published') return null;
  return {
    asset,
    source: {
      artworkId: artwork.id,
      assetId: asset.id,
      version: asset.version,
      sha256: asset.sha256,
      sourceRef: asset.sourceRef,
      sourceSnapshotRef: asset.sourceSnapshotRef
    }
  };
}

/** Resolve a display-only crop from the same approved Artwork PNG. */
export function featureVisualFor(features, slot, artwork) {
  const feature = Array.isArray(features) ? features.find(item => item?.kind === slot) : null;
  if (!feature) return freezeVisual({ id: `unknown:${artwork?.id || 'artwork'}:${slot}`, kind: 'unknown-value', state: 'unknown', version: FEATURE_VISUAL_REVISION, emptyKind: 'unknown' });
  if (feature.state === 'unknown') return freezeVisual({ id: `unknown:${artwork?.id || 'artwork'}:${slot}`, kind: 'unknown-value', state: 'unknown', version: FEATURE_VISUAL_REVISION, emptyKind: 'unknown' });
  if (feature.state === 'none' || feature.state === 'not-applicable') {
    const emptyKind = feature.state === 'none' ? 'none' : 'notApplicable';
    return freezeVisual({ id: `empty:${artwork.id}:${slot}:${emptyKind}`, kind: 'empty-value', state: feature.state, version: FEATURE_VISUAL_REVISION, emptyKind });
  }

  const resolved = sourceFor(artwork);
  if (!resolved) return freezeVisual({ id: `unknown:${artwork?.id || 'artwork'}:${slot}`, kind: 'unknown-value', state: 'unknown', version: FEATURE_VISUAL_REVISION, emptyKind: 'unknown' });
  const { asset, source } = resolved;
  if (slot === 'style') {
    return freezeVisual({ id: `artwork-preview:${artwork.id}`, kind: 'artwork-preview', state: 'known', version: FEATURE_VISUAL_REVISION, assetRef: asset.id, sourceRect: [0, 0, 1, 1], source });
  }
  const sourceRect = FEATURE_VISUAL_REGISTRY[artwork.id]?.[slot];
  if (!Array.isArray(sourceRect) || sourceRect.length !== 4 || sourceRect.some(value => !Number.isFinite(value) || value < 0 || value > 1)
    || sourceRect[2] <= 0 || sourceRect[3] <= 0 || sourceRect[0] + sourceRect[2] > 1 || sourceRect[1] + sourceRect[3] > 1) {
    return freezeVisual({ id: `unknown:${artwork.id}:${slot}`, kind: 'unknown-value', state: 'unknown', version: FEATURE_VISUAL_REVISION, emptyKind: 'unknown' });
  }
  return freezeVisual({ id: `source-crop:${artwork.id}:${slot}`, kind: 'source-crop', state: 'known', version: FEATURE_VISUAL_REVISION, assetRef: asset.id, sourceRect, source });
}
