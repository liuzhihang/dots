import assert from 'node:assert/strict';
import {
  COMPOSITION_FIT_VERSION,
  getCompositionFitFingerprint,
  isValidNormalizedCutoutPolygon,
  resolveAnchorPairFit,
  resolveHeadphoneFit
} from '../dist/studio-composition-fit.js';

const sha = 'a'.repeat(64);
const canvas = {width: 1254, height: 1254};
const headphoneAsset = {id: 'modular/headphones-kit-v4', version: '1.0.0', sha256: '752814b890c50f04d2e2884f5d4c976969bde1667bff18a1e2b6feced4ca7b02', width: 1254, height: 1254};
const headphoneSourceParts = {
  asset: headphoneAsset,
  parts: [
    {
      id: 'band', sourceRect: {x: 85, y: 93, width: 1083, height: 431},
      visibleRect: {x: 5, y: 8, width: 1074, height: 415},
      anchors: {
        leftTerminal: {x: (113 - 85) / 1083, y: (504 - 93) / 431},
        rightTerminal: {x: (1135 - 85) / 1083, y: (504 - 93) / 431},
        crown: {x: (627 - 85) / 1083, y: (108 - 93) / 431},
        leftShoulder: {x: .25, y: .31},
        rightShoulder: {x: .75, y: .31}
      },
      z: 20, occlusion: {mode: 'above-base', covers: ['base/dots-bare', 'base/human-classic']}
    },
    {
      id: 'leftCup', sourceRect: {x: 52, y: 724, width: 282, height: 473},
      visibleRect: {x: 6, y: 10, width: 270, height: 445},
      anchors: {contactAnchor: {x: (320 - 52) / 282, y: (970 - 724) / 473}, bandJointAnchor: {x: (198 - 52) / 282, y: (741 - 724) / 473}},
      contactNormal: {x: 1, y: 0}, z: 21, occlusion: {mode: 'above-base', covers: ['base/dots-bare', 'base/human-classic']}
    },
    {
      id: 'rightCup', sourceRect: {x: 920, y: 724, width: 281, height: 473},
      visibleRect: {x: 4, y: 8, width: 272, height: 450},
      anchors: {contactAnchor: {x: (935 - 920) / 281, y: (970 - 724) / 473}, bandJointAnchor: {x: (1053 - 920) / 281, y: (741 - 724) / 473}},
      contactNormal: {x: -1, y: 0}, z: 22, occlusion: {mode: 'above-base', covers: ['base/dots-bare', 'base/human-classic']}
    }
  ]
};
const headphonePolicy = {
  id: 'fit/headphone-first-pilot', version: '1.0.0', kind: 'headphone-arc-cups-v1',
  supports: {
    bodyIds: ['dots-plush-orb', 'human-chibi'], view: 'front',
    poseIds: ['front-listen-calm', 'front-neutral'], layoutIds: ['dots-orb-front', 'human-chibi-front'],
    styleIds: ['dots-fine-plush', 'refined-chibi']
  },
  headBounds: {
    widthRatio: {min: .5, max: .9}, heightRatio: {min: .45, max: .88}, aspectRatio: {min: .85, max: 1.3}, mountSpanRatio: {min: .68, max: .9}
  },
  cup: {minScale: .28, maxScale: .7, contactTolerancePx: 1, maxRotationDeg: 40},
  band: {minSpanScale: .45, maxSpanScale: 1.3, minRiseScale: .5, maxRiseScale: 1.3, maxAnisotropy: 2.5, thicknessPx: 24},
  faceClearancePx: 8
};

function subtract(left, right) { return {x: left.x - right.x, y: left.y - right.y}; }
function add(left, right) { return {x: left.x + right.x, y: left.y + right.y}; }
function multiply(point, scalar) { return {x: point.x * scalar, y: point.y * scalar}; }
function dot(left, right) { return left.x * right.x + left.y * right.y; }
function length(point) { return Math.hypot(point.x, point.y); }
function unit(point) { return multiply(point, 1 / length(point)); }
function perpendicular(point) { return {x: -point.y, y: point.x}; }
function wrapDegrees(value) { return ((value + 180) % 360 + 360) % 360 - 180; }
function pointFromAnchor(anchor, rect) { return {x: anchor.x * rect.width, y: anchor.y * rect.height}; }

function testCupMatrix(mount, part, canvas) {
  const source = pointFromAnchor(part.anchors.contactAnchor, part.sourceRect);
  const target = {x: mount.x * canvas.width, y: mount.y * canvas.height};
  const scale = mount.cupSeat.height * canvas.height / part.visibleRect.height;
  const sourceAngle = Math.atan2(part.contactNormal.y, part.contactNormal.x);
  const targetAngle = Math.atan2(-mount.normal.y, -mount.normal.x);
  const angle = wrapDegrees((targetAngle - sourceAngle) * 180 / Math.PI) * Math.PI / 180;
  const cosine = Math.cos(angle), sine = Math.sin(angle);
  const matrix = {
    a: scale * cosine / canvas.width, b: scale * sine / canvas.height,
    c: -scale * sine / canvas.width, d: scale * cosine / canvas.height,
    e: 0, f: 0
  };
  matrix.e = target.x / canvas.width - matrix.a * source.x - matrix.c * source.y;
  matrix.f = target.y / canvas.height - matrix.b * source.x - matrix.d * source.y;
  return matrix;
}

function fittedBandShoulders(profile, sourceParts) {
  const canvas = profile.canvas, parts = Object.fromEntries(sourceParts.parts.map(part => [part.id, part]));
  const leftMount = profile.landmarks.earMounts.left, rightMount = profile.landmarks.earMounts.right;
  const leftCupMatrix = testCupMatrix(leftMount, parts.leftCup, canvas);
  const rightCupMatrix = testCupMatrix(rightMount, parts.rightCup, canvas);
  const mapped = (matrix, point) => transformPoint(matrix, point);
  const leftJoint = mapped(leftCupMatrix, pointFromAnchor(parts.leftCup.anchors.bandJointAnchor, parts.leftCup.sourceRect));
  const rightJoint = mapped(rightCupMatrix, pointFromAnchor(parts.rightCup.anchors.bandJointAnchor, parts.rightCup.sourceRect));
  const left = {x: leftJoint.x * canvas.width, y: leftJoint.y * canvas.height};
  const right = {x: rightJoint.x * canvas.width, y: rightJoint.y * canvas.height};
  const crown = {x: profile.landmarks.crown.x * canvas.width, y: profile.landmarks.crown.y * canvas.height};
  const sourceLeft = pointFromAnchor(parts.band.anchors.leftTerminal, parts.band.sourceRect);
  const sourceRight = pointFromAnchor(parts.band.anchors.rightTerminal, parts.band.sourceRect);
  const sourceCrown = pointFromAnchor(parts.band.anchors.crown, parts.band.sourceRect);
  const sourceVector = subtract(sourceRight, sourceLeft), sourceSpan = length(sourceVector), sourceU = unit(sourceVector);
  let sourceV = perpendicular(sourceU);
  if (dot(subtract(sourceCrown, sourceLeft), sourceV) < 0) sourceV = multiply(sourceV, -1);
  const sourceRise = dot(subtract(sourceCrown, sourceLeft), sourceV);
  const targetVector = subtract(right, left), targetSpan = length(targetVector), targetU = unit(targetVector);
  let targetV = perpendicular(targetU);
  if (dot(subtract(crown, left), targetV) < 0) targetV = multiply(targetV, -1);
  const targetRise = dot(subtract(crown, left), targetV);
  const spanScale = targetSpan / sourceSpan, riseScale = targetRise / sourceRise;
  const aPx = spanScale * targetU.x * sourceU.x + riseScale * targetV.x * sourceV.x;
  const cPx = spanScale * targetU.x * sourceU.y + riseScale * targetV.x * sourceV.y;
  const bPx = spanScale * targetU.y * sourceU.x + riseScale * targetV.y * sourceV.x;
  const dPx = spanScale * targetU.y * sourceU.y + riseScale * targetV.y * sourceV.y;
  const matrix = {
    a: aPx / canvas.width, b: bPx / canvas.height, c: cPx / canvas.width, d: dPx / canvas.height,
    e: left.x / canvas.width - (aPx / canvas.width) * sourceLeft.x - (cPx / canvas.width) * sourceLeft.y,
    f: left.y / canvas.height - (bPx / canvas.height) * sourceLeft.x - (dPx / canvas.height) * sourceLeft.y
  };
  const project = name => {
    const source = pointFromAnchor(parts.band.anchors[name], parts.band.sourceRect);
    const target = mapped(matrix, source);
    return {x: target.x, y: target.y};
  };
  return {leftShoulder: project('leftShoulder'), rightShoulder: project('rightShoulder')};
}

function addBandSeat(profile, sourceParts = headphoneSourceParts) {
  return {...profile, bandSeat: {
    ...fittedBandShoulders(profile, sourceParts),
    crown: {...profile.landmarks.crown},
    maxContourErrorPx: 8
  }};
}

function cupSeatForOldDotsScale(widthRatio, sourcePart) {
  const oldScale = widthRatio * canvas.width * .135 / sourcePart.sourceRect.width;
  return {
    height: oldScale * sourcePart.visibleRect.height / canvas.height,
    minHeadWidthRatio: .1,
    maxHeadWidthRatio: .16
  };
}

function dotsProfile({width = .824, height = .81, earLeft = .175, earRight = .825, earY = .53, crownY = .123, poseId = 'front-neutral'} = {}) {
  const x = (1 - width) / 2, y = .08;
  return addBandSeat({
    id: 'geometry/dots-bare-front-v1', version: '1.0.0', baseId: 'base/dots-bare',
    baseAssetRefs: [{id: 'base/dots-bare/png', version: '1.0.0', sha256: sha}],
    bodyId: 'dots-plush-orb', view: 'front', poseId, layoutId: 'dots-orb-front', styleId: 'dots-fine-plush', canvas,
    landmarks: {
      headBounds: {x, y, width, height}, crown: {x: .5, y: crownY},
      earMounts: {
        left: {x: earLeft, y: earY, normal: {x: -1, y: 0}, cupSeat: cupSeatForOldDotsScale(width, headphoneSourceParts.parts[1])},
        right: {x: earRight, y: earY, normal: {x: 1, y: 0}, cupSeat: cupSeatForOldDotsScale(width, headphoneSourceParts.parts[2])}
      }
    },
    faceKeepout: {x: .35, y: .29, width: .3, height: .34}
  });
}

function humanProfile() {
  return addBandSeat({
    id: 'geometry/human-classic-front-v1', version: '1.0.0', baseId: 'base/human-classic',
    baseAssetRefs: [{id: 'base/human-classic/png', version: '1.0.0', sha256: 'b'.repeat(64)}],
    bodyId: 'human-chibi', view: 'front', poseId: 'front-neutral', layoutId: 'human-chibi-front', styleId: 'refined-chibi', canvas,
    landmarks: {
      headBounds: {x: .2245, y: .038, width: .551, height: .508}, crown: {x: .492, y: .038},
      earMounts: {
        left: {x: .308, y: .442, normal: {x: -.97, y: .243}, cupSeat: {height: .145, minHeadWidthRatio: .1, maxHeadWidthRatio: .16}},
        right: {x: .728, y: .4, normal: {x: .97, y: .243}, cupSeat: {height: .145, minHeadWidthRatio: .1, maxHeadWidthRatio: .16}}
      }
    },
    faceKeepout: {x: .38, y: .275, width: .25, height: .23}
  });
}

function transformPoint(matrix, point) {
  return {x: matrix.a * point.x + matrix.c * point.y + matrix.e, y: matrix.b * point.x + matrix.d * point.y + matrix.f};
}
function near(left, right, tolerance = 1.1) { assert.ok(Math.hypot(left.x - right.x, left.y - right.y) <= tolerance, `${JSON.stringify(left)} != ${JSON.stringify(right)}`); }

const normal = resolveHeadphoneFit({baseGeometryProfile: dotsProfile(), fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(normal.availability, 'available', normal.reason);
assert.equal(normal.fitVersion, COMPOSITION_FIT_VERSION);
assert.deepEqual(normal.layers.map(layer => layer.id), ['band', 'leftCup', 'rightCup']);
assert(normal.layers.every(layer => layer.assetId === headphoneAsset.id && layer.sourceRect && layer.transform && layer.placement));
assert(normal.layers.every(layer => layer.occlusion.covers.includes('base/dots-bare')));
assert.equal(new Set(normal.layers.map(layer => layer.z)).size, 3, 'all three layers retain deterministic z order');
assert(normal.constraints.every(item => item.status === 'pass'), 'resolved geometry reports every tested constraint');
assert.equal(normal.fitVersion, '1.2.0', 'seat, contour, and exact three-anchor affine semantics are versioned');

const dots = dotsProfile();
const cupLayer = id => normal.layers.find(layer => layer.id === id);
for (const [side, id, sourcePart] of [['left', 'leftCup', headphoneSourceParts.parts[1]], ['right', 'rightCup', headphoneSourceParts.parts[2]]]) {
  const seat = dots.landmarks.earMounts[side].cupSeat;
  const expectedScale = seat.height * canvas.height / sourcePart.visibleRect.height;
  const expectedLegacyScale = dots.landmarks.headBounds.width * canvas.width * .135 / sourcePart.sourceRect.width;
  assert.ok(Math.abs(normal.debug.cupScale[side] - expectedScale) < 1e-12, `${side} cup size is derived from its registered seat height and actual alpha envelope`);
  assert.ok(Math.abs(normal.debug.cupScale[side] - expectedLegacyScale) < 1e-12, `${side} Dots fit preserves its prior scale`);
  assert.ok(Math.abs(normal.debug.cupVisibleSizePx[side].height - seat.height * canvas.height) < 1e-8, `${side} visible cup height matches its profile seat`);
  assert.ok(Math.abs(cupLayer(id).placement.height - seat.height) < 1e-12, `${side} reported placement uses the alpha-visible envelope rather than padded sourceRect`);
  assert.ok(Math.abs(cupLayer(id).placement.width - normal.debug.cupVisibleSizePx[side].width / canvas.width) < 1e-12);
}
assert.ok(normal.debug.cupScale.left !== normal.debug.cupScale.right, 'left and right source envelopes resolve independent scales');
assert.ok(normal.debug.bandShoulderErrorPx.leftShoulder <= dots.bandSeat.maxContourErrorPx && normal.debug.bandShoulderErrorPx.rightShoulder <= dots.bandSeat.maxContourErrorPx);
const sourcePoint = (part, name) => ({x: part.anchors[name].x * part.sourceRect.width, y: part.anchors[name].y * part.sourceRect.height});
const leftContact = transformPoint(cupLayer('leftCup').transform, sourcePoint(headphoneSourceParts.parts[1], 'contactAnchor'));
const rightContact = transformPoint(cupLayer('rightCup').transform, sourcePoint(headphoneSourceParts.parts[2], 'contactAnchor'));
near({x: leftContact.x * canvas.width, y: leftContact.y * canvas.height}, {x: dots.landmarks.earMounts.left.x * canvas.width, y: dots.landmarks.earMounts.left.y * canvas.height});
near({x: rightContact.x * canvas.width, y: rightContact.y * canvas.height}, {x: dots.landmarks.earMounts.right.x * canvas.width, y: dots.landmarks.earMounts.right.y * canvas.height});
const bandLayer = cupLayer('band');
const leftJoint = transformPoint(cupLayer('leftCup').transform, sourcePoint(headphoneSourceParts.parts[1], 'bandJointAnchor'));
const rightJoint = transformPoint(cupLayer('rightCup').transform, sourcePoint(headphoneSourceParts.parts[2], 'bandJointAnchor'));
const bandLeft = transformPoint(bandLayer.transform, sourcePoint(headphoneSourceParts.parts[0], 'leftTerminal'));
const bandRight = transformPoint(bandLayer.transform, sourcePoint(headphoneSourceParts.parts[0], 'rightTerminal'));
near({x: bandLeft.x * canvas.width, y: bandLeft.y * canvas.height}, {x: leftJoint.x * canvas.width, y: leftJoint.y * canvas.height});
near({x: bandRight.x * canvas.width, y: bandRight.y * canvas.height}, {x: rightJoint.x * canvas.width, y: rightJoint.y * canvas.height});
const bandCrown = transformPoint(bandLayer.transform, sourcePoint(headphoneSourceParts.parts[0], 'crown'));
near({x: bandCrown.x * canvas.width, y: bandCrown.y * canvas.height}, {x: dots.landmarks.crown.x * canvas.width, y: dots.landmarks.crown.y * canvas.height}, 1e-5);
for (const name of ['leftShoulder', 'rightShoulder']) {
  const shoulder = transformPoint(bandLayer.transform, sourcePoint(headphoneSourceParts.parts[0], name));
  near({x: shoulder.x * canvas.width, y: shoulder.y * canvas.height}, {x: dots.bandSeat[name].x * canvas.width, y: dots.bandSeat[name].y * canvas.height}, dots.bandSeat.maxContourErrorPx);
}

const repeated = resolveHeadphoneFit({baseGeometryProfile: dotsProfile(), fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.deepEqual(repeated, normal, 'same geometry and parts resolve byte-for-byte deterministically');
assert.match(normal.fitFingerprint, /^[a-f0-9]{16}$/);
assert.notEqual(normal.fitFingerprint, resolveHeadphoneFit({baseGeometryProfile: dotsProfile({width: .86, height: .83, earLeft: .12, earRight: .88}), fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts}).fitFingerprint, 'different profile geometry changes the fit fingerprint');

const bigger = resolveHeadphoneFit({baseGeometryProfile: dotsProfile({width: .86, height: .83, earLeft: .12, earRight: .88}), fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(bigger.availability, 'available', bigger.reason);
assert(Math.abs(bigger.debug.bandScale.span - normal.debug.bandScale.span) > .1, 'wider head geometry changes resolved headband span');
const flatter = resolveHeadphoneFit({baseGeometryProfile: dotsProfile({height: .70, earY: .48, crownY: .18}), fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(flatter.availability, 'available', flatter.reason);
assert(Math.abs(flatter.debug.bandScale.rise - normal.debug.bandScale.rise) > .2, 'flatter head geometry changes resolved headband rise');
const human = resolveHeadphoneFit({baseGeometryProfile: humanProfile(), fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(human.availability, 'available', human.reason);
assert.notDeepEqual(human.layers.map(layer => layer.transform), normal.layers.map(layer => layer.transform), 'tilted human ear mounts produce a distinct geometry fit');
assert.notDeepEqual(human.debug.cupVisibleSizePx, normal.debug.cupVisibleSizePx, 'human ear-seat dimensions produce a different visible headset size from Dots');

const humanProfileBase = humanProfile();
const asymmetricProfile = addBandSeat({
  ...humanProfileBase,
  landmarks: {
    ...humanProfileBase.landmarks,
    earMounts: {
      ...humanProfileBase.landmarks.earMounts,
      right: {...humanProfileBase.landmarks.earMounts.right, cupSeat: {...humanProfileBase.landmarks.earMounts.right.cupSeat, height: .13}}
    }
  }
});
const asymmetric = resolveHeadphoneFit({baseGeometryProfile: asymmetricProfile, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(asymmetric.availability, 'available', asymmetric.reason);
assert.notEqual(asymmetric.debug.cupScale.left, asymmetric.debug.cupScale.right, 'each ear cup derives scale from its own profile seat and visible source height');
assert.notEqual(asymmetric.fitFingerprint, human.fitFingerprint, 'changing a profile seat invalidates the prior fit fingerprint');
assert.deepEqual(asymmetric.layers.find(layer => layer.id === 'leftCup').transform, human.layers.find(layer => layer.id === 'leftCup').transform, 'changing one ear seat does not move or rescale the opposite cup');
assert.notDeepEqual(asymmetric.layers.find(layer => layer.id === 'rightCup').transform, human.layers.find(layer => layer.id === 'rightCup').transform, 'profile-specific seat edits change that side without changing the opposite cup fit');

const tooWideSeatBase = humanProfile();
const tooWideSeat = addBandSeat({
  ...tooWideSeatBase,
  landmarks: {
    ...tooWideSeatBase.landmarks,
    earMounts: {
      ...tooWideSeatBase.landmarks.earMounts,
      left: {...tooWideSeatBase.landmarks.earMounts.left, cupSeat: {...tooWideSeatBase.landmarks.earMounts.left.cupSeat, height: .18}}
    }
  }
});
assert.equal(resolveHeadphoneFit({baseGeometryProfile: tooWideSeat, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts}).code, 'cup-head-width-ratio-out-of-range', 'seat width incompatible with head geometry is a hard failure');

const missingCupSeat = humanProfile();
delete missingCupSeat.landmarks.earMounts.left.cupSeat;
assert.equal(resolveHeadphoneFit({baseGeometryProfile: missingCupSeat, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts}).code, 'invalid-geometry-profile', 'profiles without explicit ear-seat geometry cannot silently use a generic ratio');
const missingVisibleRect = structuredClone(headphoneSourceParts);
delete missingVisibleRect.parts[1].visibleRect;
assert.equal(resolveHeadphoneFit({baseGeometryProfile: dotsProfile(), fitPolicy: headphonePolicy, sourceParts: missingVisibleRect}).code, 'invalid-fit-input', 'source parts without alpha envelope metadata are rejected');
const invalidVisibleRect = structuredClone(headphoneSourceParts);
invalidVisibleRect.parts[1].visibleRect = {x: 20, y: 10, width: 400, height: 445};
assert.equal(resolveHeadphoneFit({baseGeometryProfile: dotsProfile(), fitPolicy: headphonePolicy, sourceParts: invalidVisibleRect}).code, 'invalid-fit-input', 'alpha envelopes outside their source crop are rejected');
assert.equal(resolveHeadphoneFit({baseGeometryProfile: dotsProfile(), fitPolicy: {...headphonePolicy, cup: {...headphonePolicy.cup, headWidthRatio: .135}}, sourceParts: headphoneSourceParts}).code, 'invalid-fit-input', 'the deprecated global cup ratio cannot re-enter the solver');

const shoulderMismatch = dotsProfile();
shoulderMismatch.bandSeat = {...shoulderMismatch.bandSeat, leftShoulder: {x: shoulderMismatch.bandSeat.leftShoulder.x + .05, y: shoulderMismatch.bandSeat.leftShoulder.y}};
assert.equal(resolveHeadphoneFit({baseGeometryProfile: shoulderMismatch, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts}).code, 'band-contour-mismatch', 'a headband whose shoulder shape misses the marked hair contour is rejected');
const asymmetricHeadBase = dotsProfile();
const smallShearProfile = addBandSeat({
  ...asymmetricHeadBase,
  landmarks: {
    ...asymmetricHeadBase.landmarks,
    crown: {x: .515, y: .123},
    earMounts: {
      left: {...asymmetricHeadBase.landmarks.earMounts.left, x: .16, y: .515},
      right: {...asymmetricHeadBase.landmarks.earMounts.right, x: .84, y: .54}
    }
  }
});
const smallShear = resolveHeadphoneFit({baseGeometryProfile: smallShearProfile, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(smallShear.availability, 'available', smallShear.reason);
assert(Math.abs(smallShear.debug.bandScale.shear) > .005, 'the asymmetric head geometry produces a real horizontal shear component');
assert(smallShear.debug.bandScale.anisotropy < headphonePolicy.band.maxAnisotropy, 'the small non-symmetric fit remains within the singular-value ratio limit');
const smallShearBand = smallShear.layers.find(layer => layer.id === 'band');
const smallShearCrown = transformPoint(smallShearBand.transform, sourcePoint(headphoneSourceParts.parts[0], 'crown'));
near({x: smallShearCrown.x * canvas.width, y: smallShearCrown.y * canvas.height}, {x: smallShearProfile.bandSeat.crown.x * canvas.width, y: smallShearProfile.bandSeat.crown.y * canvas.height}, 1e-5);
assert.equal(smallShear.constraints.find(item => item.name === 'band.crown-anchor')?.status, 'pass', 'three-point affine maps the authored crown exactly instead of projecting it onto the ear-joint axis');
const excessiveShear = resolveHeadphoneFit({
  baseGeometryProfile: smallShearProfile,
  fitPolicy: {...headphonePolicy, band: {...headphonePolicy.band, maxAnisotropy: 1.01}},
  sourceParts: headphoneSourceParts
});
assert.equal(excessiveShear.code, 'band-scale-out-of-range', 'the same real shear is rejected when it exceeds the singular-value ratio limit');
assert.equal(excessiveShear.constraints.find(item => item.name === 'band.anisotropy')?.status, 'fail', 'over-limit shear reports the true two-axis anisotropy gate');

const cutout = [{x: .25, y: .1}, {x: .45, y: .1}, {x: .43, y: .18}, {x: .27, y: .18}];
assert.equal(isValidNormalizedCutoutPolygon(cutout), true, 'a simple normalized polygon is valid for cutout registration');
assert.equal(isValidNormalizedCutoutPolygon([{x: .1, y: .1}, {x: .9, y: .9}, {x: .1, y: .9}, {x: .9, y: .1}]), false, 'self-intersecting polygons are rejected at registration');
assert.equal(isValidNormalizedCutoutPolygon([{x: .1, y: .1}, {x: .8, y: .1}, {x: .4, y: .1}, {x: .8, y: .8}, {x: .1, y: .8}]), false, 'adjacent collinear edges cannot backtrack over the same segment');
assert.equal(isValidNormalizedCutoutPolygon([{x: .1, y: .1}, {x: .1, y: .1}, {x: .8, y: .8}]), false, 'zero-length adjacent edges are rejected');
assert.equal(isValidNormalizedCutoutPolygon([{x: .1, y: .1}, {x: 1.1, y: .1}, {x: .1, y: .8}]), false, 'cutout points must remain normalized to the canvas');
const cutoutProfile = {...dotsProfile(), occlusionCutouts: {band: [cutout]}};
const maskedFit = resolveHeadphoneFit({baseGeometryProfile: cutoutProfile, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(maskedFit.availability, 'available', maskedFit.reason);
assert.deepEqual(maskedFit.layers.find(layer => layer.id === 'band').occlusion.cutouts, [cutout], 'profile cutouts are attached to the part-level overlay contract');
assert.equal(maskedFit.layers.find(layer => layer.id === 'leftCup').occlusion.cutouts, undefined, 'one part mask is not copied to other parts');
const selfIntersectingCutout = {...dotsProfile(), occlusionCutouts: {band: [[{x: .1, y: .1}, {x: .9, y: .9}, {x: .1, y: .9}, {x: .9, y: .1}]]}};
assert.equal(resolveHeadphoneFit({baseGeometryProfile: selfIntersectingCutout, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts}).code, 'invalid-geometry-profile', 'self-intersecting component masks are rejected');
const overlappingCutout = {...dotsProfile(), occlusionCutouts: {band: [[{x: .1, y: .1}, {x: .8, y: .1}, {x: .4, y: .1}, {x: .8, y: .8}, {x: .1, y: .8}]]}};
assert.equal(resolveHeadphoneFit({baseGeometryProfile: overlappingCutout, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts}).code, 'invalid-geometry-profile', 'overlapping adjacent component mask edges are rejected');

const wrongBody = resolveHeadphoneFit({baseGeometryProfile: {...dotsProfile(), bodyId: 'animal-shiba'}, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(wrongBody.code, 'unsupported-body-or-view');
const wrongPose = resolveHeadphoneFit({baseGeometryProfile: dotsProfile({poseId: 'front-wave'}), fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(wrongPose.code, 'unsupported-pose');
const wrongView = resolveHeadphoneFit({baseGeometryProfile: {...dotsProfile(), view: 'side'}, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(wrongView.code, 'unsupported-body-or-view');
const tooWide = resolveHeadphoneFit({baseGeometryProfile: dotsProfile({width: .96, earLeft: .08, earRight: .92}), fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(tooWide.code, 'geometry-out-of-range');
const scaleBlocked = resolveHeadphoneFit({baseGeometryProfile: dotsProfile(), fitPolicy: {...headphonePolicy, cup: {...headphonePolicy.cup, minScale: .6}}, sourceParts: headphoneSourceParts});
assert.equal(scaleBlocked.code, 'cup-scale-out-of-range');
const collision = resolveHeadphoneFit({baseGeometryProfile: {...dotsProfile(), faceKeepout: {x: .28, y: .1, width: .44, height: .65}}, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(collision.code, 'face-keepout-collision');
const wrongBaseOcclusion = resolveHeadphoneFit({baseGeometryProfile: {...dotsProfile(), baseId: 'base/other'}, fitPolicy: headphonePolicy, sourceParts: headphoneSourceParts});
assert.equal(wrongBaseOcclusion.code, 'base-occlusion-mismatch');
const incompleteKit = resolveHeadphoneFit({baseGeometryProfile: dotsProfile(), fitPolicy: headphonePolicy, sourceParts: {...headphoneSourceParts, parts: headphoneSourceParts.parts.slice(0, 2)}});
assert.equal(incompleteKit.code, 'invalid-fit-input');

const eyeAnchors = {
  left: {x: .405, y: .399},
  right: {x: .597, y: .370}
};
const humanEyes = {
  ...humanProfile(),
  landmarks: {...humanProfile().landmarks, anchorPairs: {eyePupils: eyeAnchors}}
};
const glassesSourceParts = {
  asset: {id: 'modular/glasses-round', version: '1.0.0', sha256: 'c'.repeat(64), width: 1716, height: 917},
  parts: [{
    id: 'anchorPair', sourceRect: {x: 0, y: 0, width: 1716, height: 917},
    anchors: {left: {x: .2836391025, y: .5052276630}, right: {x: .7153852839, y: .5053554479}},
    z: 30, occlusion: {mode: 'above-base', covers: ['base/human-classic']}
  }]
};
const pairPolicy = {
  id: 'fit/glasses-human-pupils', version: '1.0.0', kind: 'anchor-pair-rigid-v1', anchorKind: 'eyePupils',
  supports: {bodyIds: ['human-chibi'], view: 'front', poseIds: ['front-neutral'], layoutIds: ['human-chibi-front'], styleIds: ['refined-chibi']},
  headBounds: {widthRatio: {min: .5, max: .6}, heightRatio: {min: .45, max: .56}, aspectRatio: {min: .9, max: 1.3}},
  scale: {min: .2, max: .5}, maxRotationDeg: 25, maxAnchorErrorPx: 1
};
const glasses = resolveAnchorPairFit({baseGeometryProfile: humanEyes, fitPolicy: pairPolicy, sourceParts: glassesSourceParts});
assert.equal(glasses.availability, 'available', glasses.reason);
assert.equal(glasses.layers.length, 1);
assert.equal(glasses.layers[0].id, 'anchorPair');
assert.equal(glasses.layers[0].assetId, 'modular/glasses-round');
const glassesSourceLeft = {x: glassesSourceParts.parts[0].anchors.left.x * 1716, y: glassesSourceParts.parts[0].anchors.left.y * 917};
const glassesSourceRight = {x: glassesSourceParts.parts[0].anchors.right.x * 1716, y: glassesSourceParts.parts[0].anchors.right.y * 917};
const glassesLeft = transformPoint(glasses.layers[0].transform, glassesSourceLeft);
const glassesRight = transformPoint(glasses.layers[0].transform, glassesSourceRight);
near({x: glassesLeft.x * canvas.width, y: glassesLeft.y * canvas.height}, {x: eyeAnchors.left.x * canvas.width, y: eyeAnchors.left.y * canvas.height});
near({x: glassesRight.x * canvas.width, y: glassesRight.y * canvas.height}, {x: eyeAnchors.right.x * canvas.width, y: eyeAnchors.right.y * canvas.height});
assert.deepEqual(resolveAnchorPairFit({baseGeometryProfile: humanEyes, fitPolicy: pairPolicy, sourceParts: glassesSourceParts}), glasses);
assert.notEqual(glasses.fitFingerprint, resolveAnchorPairFit({baseGeometryProfile: {...humanEyes, version: '1.0.1'}, fitPolicy: pairPolicy, sourceParts: glassesSourceParts}).fitFingerprint, 'profile version is bound into pair fit fingerprint');
assert.match(getCompositionFitFingerprint({version: 1}), /^[a-f0-9]{16}$/);

const shibaProfile = {
  id: 'geometry/shiba-neck-front-v1', version: '1.0.0', baseId: 'base/shiba-front',
  baseAssetRefs: [{id: 'base/shiba-front/png', version: '1.0.0', sha256: 'd'.repeat(64)}],
  bodyId: 'animal-shiba', view: 'front', poseId: 'front-seated-neutral', layoutId: 'species-animal-front', styleId: 'species-specific-plush', canvas,
  landmarks: {headBounds: {x: .2, y: .1, width: .6, height: .55}, anchorPairs: {neckContacts: {left: {x: .322, y: .555}, right: {x: .673, y: .555}}}}
};
const scarfSourceParts = {
  asset: {id: 'modular/scarf-knit', version: '1.0.0', sha256: 'e'.repeat(64), width: 1536, height: 1024},
  parts: [{id: 'anchorPair', sourceRect: {x: 0, y: 0, width: 1536, height: 1024}, anchors: {left: {x: .2, y: .15}, right: {x: .8, y: .15}}, z: 18, occlusion: {mode: 'above-base', covers: ['base/shiba-front']}}]
};
const scarfPolicy = {
  ...pairPolicy, id: 'fit/scarf-shiba-neck', anchorKind: 'neckContacts',
  supports: {bodyIds: ['animal-shiba'], view: 'front', poseIds: ['front-seated-neutral'], layoutIds: ['species-animal-front'], styleIds: ['species-specific-plush']},
  headBounds: {widthRatio: {min: .5, max: .7}, heightRatio: {min: .45, max: .65}, aspectRatio: {min: .8, max: 1.3}},
  scale: {min: .2, max: .7}
};
const scarf = resolveAnchorPairFit({baseGeometryProfile: shibaProfile, fitPolicy: scarfPolicy, sourceParts: scarfSourceParts});
assert.equal(scarf.availability, 'available', scarf.reason);
assert.equal(scarf.layers[0].assetId, 'modular/scarf-knit');
const unsupportedScarfPose = resolveAnchorPairFit({baseGeometryProfile: {...shibaProfile, poseId: 'front-wave'}, fitPolicy: scarfPolicy, sourceParts: scarfSourceParts});
assert.equal(unsupportedScarfPose.code, 'unsupported-pose');
const noPupilProfile = {...humanProfile(), landmarks: humanProfile().landmarks};
assert.equal(resolveAnchorPairFit({baseGeometryProfile: noPupilProfile, fitPolicy: pairPolicy, sourceParts: glassesSourceParts}).code, 'missing-target-anchor-pair');

console.log(`Composition fit checks passed: fit ${COMPOSITION_FIT_VERSION}; Dots legacy cup scale preserved, per-ear alpha-envelope seats, independent human geometry, face/contact gates, exact three-anchor headband affine and singular-value shear bounds, profile cutouts, and exact glasses/scarf anchor fits verified.`);
