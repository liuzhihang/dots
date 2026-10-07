// Deterministic geometry fitting for approved, fixed-view 2D attachments.
// The module is intentionally pure: it consumes code-owned geometry/policy
// records and never loads assets, infers capabilities from tags, or draws.

export const COMPOSITION_FIT_VERSION = '1.2.0';

const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const finite = value => Number.isFinite(value);
const radians = degrees => degrees * Math.PI / 180;
const degrees = radiansValue => radiansValue * 180 / Math.PI;
const hypot = point => Math.hypot(point.x, point.y);
const distance = (left, right) => Math.hypot(right.x - left.x, right.y - left.y);
const normalizedPoint = point => object(point) && finite(point.x) && finite(point.y) && point.x >= 0 && point.x <= 1 && point.y >= 0 && point.y <= 1;
const normalizedVector = vector => object(vector) && finite(vector.x) && finite(vector.y) && Math.abs(Math.hypot(vector.x, vector.y) - 1) <= .05;
const normalizedRect = rect => object(rect) && [rect.x, rect.y, rect.width, rect.height].every(finite) && rect.x >= 0 && rect.y >= 0 && rect.width > 0 && rect.height > 0 && rect.x + rect.width <= 1 && rect.y + rect.height <= 1;
const normalize = vector => {
  const length = hypot(vector);
  if (!finite(length) || length < 1e-8) throw new Error('零长度方向向量');
  return {x: vector.x / length, y: vector.y / length};
};
const dot = (left, right) => left.x * right.x + left.y * right.y;
const cross = (left, right) => left.x * right.y - left.y * right.x;
const singularValuesFromColumns = (first, second) => {
  const firstSquared = dot(first, first), secondSquared = dot(second, second), mixed = dot(first, second);
  const discriminant = Math.hypot(firstSquared - secondSquared, 2 * mixed);
  const trace = firstSquared + secondSquared;
  return {
    min: Math.sqrt(Math.max(0, (trace - discriminant) / 2)),
    max: Math.sqrt(Math.max(0, (trace + discriminant) / 2))
  };
};
const add = (left, right) => ({x: left.x + right.x, y: left.y + right.y});
const subtract = (left, right) => ({x: left.x - right.x, y: left.y - right.y});
const scalePoint = (point, scalar) => ({x: point.x * scalar, y: point.y * scalar});
const perpendicular = vector => ({x: -vector.y, y: vector.x});
const wrapDegrees = value => ((value + 180) % 360 + 360) % 360 - 180;

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (object(value)) return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
}

// Matches the stable non-security fingerprint used by the composition catalog.
export function getCompositionFitFingerprint(value) {
  const source = canonical(value);
  let first = 0x811c9dc5, second = 0x9e3779b9;
  for (let index = 0; index < source.length; index++) {
    const code = source.charCodeAt(index);
    first = Math.imul(first ^ code, 0x01000193) >>> 0;
    second = Math.imul(second ^ (code + index), 0x85ebca6b) >>> 0;
  }
  return `${first.toString(16).padStart(8, '0')}${second.toString(16).padStart(8, '0')}`;
}

function pointFromAnchor(anchor, rect) {
  return {x: anchor.x * rect.width, y: anchor.y * rect.height};
}

function partRectIsValid(rect, asset) {
  return object(rect) && Number.isInteger(rect.x) && Number.isInteger(rect.y) && Number.isInteger(rect.width) && Number.isInteger(rect.height) &&
    rect.x >= 0 && rect.y >= 0 && rect.width > 0 && rect.height > 0 && rect.x + rect.width <= asset.width && rect.y + rect.height <= asset.height;
}

function localRectIsValid(rect, sourceRect) {
  return object(rect) && ['x', 'y', 'width', 'height'].every(key => Number.isInteger(rect[key])) &&
    rect.x >= 0 && rect.y >= 0 && rect.width > 0 && rect.height > 0 &&
    rect.x + rect.width <= sourceRect.width && rect.y + rect.height <= sourceRect.height;
}

export function isValidNormalizedCutoutPolygon(points) {
  if (!Array.isArray(points) || points.length < 3 || points.some(point => !normalizedPoint(point))) return false;
  let area = 0;
  for (let index = 0; index < points.length; index++) {
    const previous = points[(index + points.length - 1) % points.length];
    const current = points[index], next = points[(index + 1) % points.length];
    if (distance(current, next) < 1e-8) return false;
    if (Math.abs(orientation(previous, current, next)) <= 1e-10) {
      const backtrack = (previous.x - current.x) * (next.x - current.x) + (previous.y - current.y) * (next.y - current.y);
      if (backtrack > 1e-10) return false;
    }
    area += current.x * next.y - next.x * current.y;
  }
  return Math.abs(area) > 1e-8 && !polygonSelfIntersects(points);
}

function polygonIsValid(points) {
  return isValidNormalizedCutoutPolygon(points);
}

function orientation(a, b, c) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
}

function pointOnSegment(point, start, end) {
  return Math.abs(orientation(start, end, point)) <= 1e-10 &&
    point.x >= Math.min(start.x, end.x) - 1e-10 && point.x <= Math.max(start.x, end.x) + 1e-10 &&
    point.y >= Math.min(start.y, end.y) - 1e-10 && point.y <= Math.max(start.y, end.y) + 1e-10;
}

function segmentsIntersect(a, b, c, d) {
  const abC = orientation(a, b, c), abD = orientation(a, b, d);
  const cdA = orientation(c, d, a), cdB = orientation(c, d, b);
  if (abC * abD < -1e-12 && cdA * cdB < -1e-12) return true;
  return pointOnSegment(c, a, b) || pointOnSegment(d, a, b) || pointOnSegment(a, c, d) || pointOnSegment(b, c, d);
}

function polygonSelfIntersects(points) {
  for (let left = 0; left < points.length; left++) {
    const leftNext = (left + 1) % points.length;
    for (let right = left + 1; right < points.length; right++) {
      const rightNext = (right + 1) % points.length;
      if (left === right || leftNext === right || rightNext === left) continue;
      if (segmentsIntersect(points[left], points[leftNext], points[right], points[rightNext])) return true;
    }
  }
  return false;
}

function occlusionCutoutsAreValid(value) {
  if (!object(value) || Object.keys(value).some(id => !['band', 'leftCup', 'rightCup'].includes(id))) return false;
  return Object.values(value).every(polygons => Array.isArray(polygons) && polygons.length > 0 && polygons.every(polygonIsValid));
}

function profileCoreIsValid(profile) {
  if (!object(profile) || typeof profile.id !== 'string' || !profile.id || typeof profile.version !== 'string' || !profile.version ||
      typeof profile.baseId !== 'string' || !profile.baseId || typeof profile.bodyId !== 'string' || !profile.bodyId ||
      typeof profile.view !== 'string' || !profile.view || typeof profile.poseId !== 'string' || !profile.poseId ||
      typeof profile.layoutId !== 'string' || !profile.layoutId || typeof profile.styleId !== 'string' || !profile.styleId ||
      !object(profile.canvas) || !Number.isInteger(profile.canvas.width) || !Number.isInteger(profile.canvas.height) || profile.canvas.width < 1 || profile.canvas.height < 1 ||
      !object(profile.landmarks) || !normalizedRect(profile.landmarks.headBounds)) return false;
  if (profile.faceKeepout !== undefined && !normalizedRect(profile.faceKeepout)) return false;
  return true;
}

function profileIsValid(profile) {
  if (!profileCoreIsValid(profile) || !normalizedRect(profile.faceKeepout) || !normalizedPoint(profile.landmarks.crown) ||
      !object(profile.landmarks.earMounts) || !object(profile.landmarks.earMounts.left) || !object(profile.landmarks.earMounts.right)) return false;
  const {left, right} = profile.landmarks.earMounts;
  const validCupSeat = seat => object(seat) && Object.keys(seat).length === 3 && Object.keys(seat).every(key => ['height', 'minHeadWidthRatio', 'maxHeadWidthRatio'].includes(key)) && finite(seat.height) && seat.height > 0 && seat.height <= 1 &&
    finite(seat.minHeadWidthRatio) && finite(seat.maxHeadWidthRatio) && seat.minHeadWidthRatio > 0 &&
    seat.maxHeadWidthRatio >= seat.minHeadWidthRatio && seat.maxHeadWidthRatio <= 1;
  const bandSeat = profile.bandSeat;
  if (!object(bandSeat) || Object.keys(bandSeat).length !== 4 || Object.keys(bandSeat).some(key => !['leftShoulder', 'rightShoulder', 'crown', 'maxContourErrorPx'].includes(key)) ||
      !normalizedPoint(bandSeat.leftShoulder) || !normalizedPoint(bandSeat.rightShoulder) ||
      !normalizedPoint(bandSeat.crown) || !finite(bandSeat.maxContourErrorPx) || bandSeat.maxContourErrorPx < 0 ||
      !validCupSeat(left.cupSeat) || !validCupSeat(right.cupSeat) ||
      (profile.occlusionCutouts !== undefined && !occlusionCutoutsAreValid(profile.occlusionCutouts))) return false;
  const crownErrorPx = distance(
    {x: profile.landmarks.crown.x * profile.canvas.width, y: profile.landmarks.crown.y * profile.canvas.height},
    {x: bandSeat.crown.x * profile.canvas.width, y: bandSeat.crown.y * profile.canvas.height}
  );
  return crownErrorPx <= 1 && [left, right].every(mount => normalizedPoint(mount) && normalizedVector(mount.normal)) &&
    profile.landmarks.crown.x >= profile.landmarks.headBounds.x && profile.landmarks.crown.x <= profile.landmarks.headBounds.x + profile.landmarks.headBounds.width &&
    profile.landmarks.crown.y >= profile.landmarks.headBounds.y && profile.landmarks.crown.y <= profile.landmarks.headBounds.y + profile.landmarks.headBounds.height;
}

function validatePolicy(policy) {
  if (!object(policy) || policy.kind !== 'headphone-arc-cups-v1' || typeof policy.id !== 'string' || !policy.id || typeof policy.version !== 'string' || !policy.version) throw new Error('耳机 fitPolicy 类型或版本无效');
  const supports = policy.supports;
  if (!object(supports) || !Array.isArray(supports.bodyIds) || !Array.isArray(supports.poseIds) || !Array.isArray(supports.layoutIds) || !Array.isArray(supports.styleIds) || typeof supports.view !== 'string' ||
      [supports.bodyIds, supports.poseIds, supports.layoutIds, supports.styleIds].some(values => !values.length || values.some(value => typeof value !== 'string' || !value))) throw new Error('耳机 fitPolicy 支持范围无效');
  const geometry = policy.headBounds;
  const intervals = ['widthRatio', 'heightRatio', 'aspectRatio', 'mountSpanRatio'];
  if (!object(geometry) || intervals.some(key => !object(geometry[key]) || !finite(geometry[key].min) || !finite(geometry[key].max) || geometry[key].min <= 0 || geometry[key].max < geometry[key].min)) throw new Error('耳机 fitPolicy 缺少头部几何支持区间');
  const cup = policy.cup, band = policy.band;
  if (!object(cup) || Object.hasOwn(cup, 'headWidthRatio') || !finite(cup.minScale) || !finite(cup.maxScale) || cup.minScale <= 0 || cup.maxScale < cup.minScale || !finite(cup.contactTolerancePx) || cup.contactTolerancePx < 0 || !finite(cup.maxRotationDeg) || cup.maxRotationDeg < 0 || cup.maxRotationDeg > 180) throw new Error('耳机 fitPolicy 必须使用基底 cupSeat 目标，不得配置统一 headWidthRatio');
  if (!object(band) || !finite(band.minSpanScale) || !finite(band.maxSpanScale) || band.minSpanScale <= 0 || band.maxSpanScale < band.minSpanScale ||
      !finite(band.minRiseScale) || !finite(band.maxRiseScale) || band.minRiseScale <= 0 || band.maxRiseScale < band.minRiseScale ||
      !finite(band.maxAnisotropy) || band.maxAnisotropy < 1 || Object.hasOwn(band, 'crownTolerancePx') || !finite(band.thicknessPx) || band.thicknessPx < 0) throw new Error('头梁轮廓容差必须由基底 bandSeat 声明');
  if (!finite(policy.faceClearancePx) || policy.faceClearancePx < 0) throw new Error('耳机 fitPolicy 面部安全间距无效');
  return policy;
}

function validateSourceParts(sourceParts) {
  if (!object(sourceParts) || !object(sourceParts.asset) || typeof sourceParts.asset.id !== 'string' || !sourceParts.asset.id ||
      typeof sourceParts.asset.version !== 'string' || !sourceParts.asset.version || typeof sourceParts.asset.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(sourceParts.asset.sha256) ||
      !Number.isInteger(sourceParts.asset.width) || sourceParts.asset.width < 1 || !Number.isInteger(sourceParts.asset.height) || sourceParts.asset.height < 1 ||
      !Array.isArray(sourceParts.parts)) throw new Error('耳机 sourceParts 资产引用无效');
  const requiredIds = ['band', 'leftCup', 'rightCup'];
  if (sourceParts.parts.length !== requiredIds.length || requiredIds.some(id => sourceParts.parts.filter(part => part?.id === id).length !== 1)) throw new Error('耳机 sourceParts 必须恰好包含头梁、左耳罩和右耳罩');
  const byId = Object.fromEntries(sourceParts.parts.map(part => [part.id, part]));
  for (const id of requiredIds) {
    const part = byId[id];
    if (!object(part) || !partRectIsValid(part.sourceRect, sourceParts.asset) || !object(part.anchors) || !Number.isInteger(part.z) || !object(part.occlusion) ||
        part.occlusion.mode !== 'above-base' || !Array.isArray(part.occlusion.covers) || !part.occlusion.covers.length || part.occlusion.covers.some(value => typeof value !== 'string' || !value)) throw new Error(`耳机 sourcePart ${id} 的区域、锚点或遮挡声明无效`);
    if (!localRectIsValid(part.visibleRect, part.sourceRect)) throw new Error(`耳机 sourcePart ${id} 缺少相对 sourceRect 的实际 alpha 可见包络`);
    const anchorNames = id === 'band' ? ['leftTerminal', 'rightTerminal', 'crown', 'leftShoulder', 'rightShoulder'] : ['contactAnchor', 'bandJointAnchor'];
    if (Object.keys(part.anchors).length !== anchorNames.length || anchorNames.some(name => !normalizedPoint(part.anchors[name]))) throw new Error(`耳机 sourcePart ${id} 缺少明确的局部锚点`);
    if (id !== 'band' && !normalizedVector(part.contactNormal)) throw new Error(`耳机 sourcePart ${id} 缺少单位接触法线`);
  }
  const {band, leftCup, rightCup} = byId;
  if (band.z >= leftCup.z || band.z >= rightCup.z || leftCup.z === rightCup.z) throw new Error('耳机图层必须让头梁位于两个耳罩下方，且各部件 z 唯一');
  return {asset: sourceParts.asset, parts: byId};
}

function validateAnchorPairPolicy(policy) {
  if (!object(policy) || policy.kind !== 'anchor-pair-rigid-v1' || typeof policy.id !== 'string' || !policy.id || typeof policy.version !== 'string' || !policy.version ||
      !['eyePupils', 'neckContacts'].includes(policy.anchorKind)) throw new Error('双锚 fitPolicy 类型、版本或目标锚点无效');
  const supports = policy.supports;
  if (!object(supports) || !Array.isArray(supports.bodyIds) || !Array.isArray(supports.poseIds) || !Array.isArray(supports.layoutIds) || !Array.isArray(supports.styleIds) || typeof supports.view !== 'string' ||
      [supports.bodyIds, supports.poseIds, supports.layoutIds, supports.styleIds].some(values => !values.length || values.some(value => typeof value !== 'string' || !value))) throw new Error('双锚 fitPolicy 支持范围无效');
  const intervals = policy.headBounds;
  if (!object(intervals) || ['widthRatio', 'heightRatio', 'aspectRatio'].some(key => !object(intervals[key]) || !finite(intervals[key].min) || !finite(intervals[key].max) || intervals[key].min <= 0 || intervals[key].max < intervals[key].min) ||
      (intervals.mountSpanRatio !== undefined && (!object(intervals.mountSpanRatio) || !finite(intervals.mountSpanRatio.min) || !finite(intervals.mountSpanRatio.max) || intervals.mountSpanRatio.min <= 0 || intervals.mountSpanRatio.max < intervals.mountSpanRatio.min))) throw new Error('双锚 fitPolicy 缺少头部几何支持区间');
  if (!object(policy.scale) || !finite(policy.scale.min) || !finite(policy.scale.max) || policy.scale.min <= 0 || policy.scale.max < policy.scale.min ||
      !finite(policy.maxRotationDeg) || policy.maxRotationDeg < 0 || policy.maxRotationDeg > 180 || !finite(policy.maxAnchorErrorPx) || policy.maxAnchorErrorPx < 0) throw new Error('双锚 fitPolicy 缩放、旋转或接触范围无效');
  return policy;
}

function validateAnchorPairSource(sourceParts) {
  if (!object(sourceParts) || !object(sourceParts.asset) || typeof sourceParts.asset.id !== 'string' || !sourceParts.asset.id ||
      typeof sourceParts.asset.version !== 'string' || !sourceParts.asset.version || typeof sourceParts.asset.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(sourceParts.asset.sha256) ||
      !Number.isInteger(sourceParts.asset.width) || sourceParts.asset.width < 1 || !Number.isInteger(sourceParts.asset.height) || sourceParts.asset.height < 1 ||
      !Array.isArray(sourceParts.parts) || sourceParts.parts.length !== 1 || sourceParts.parts[0]?.id !== 'anchorPair') throw new Error('双锚 sourceParts 资产引用无效');
  const part = sourceParts.parts[0];
  if (!partRectIsValid(part.sourceRect, sourceParts.asset) || !object(part.anchors) || Object.keys(part.anchors).length !== 2 ||
      !normalizedPoint(part.anchors.left) || !normalizedPoint(part.anchors.right) || !Number.isInteger(part.z) || !object(part.occlusion) ||
      part.occlusion.mode !== 'above-base' || !Array.isArray(part.occlusion.covers) || !part.occlusion.covers.length || part.occlusion.covers.some(value => typeof value !== 'string' || !value)) throw new Error('双锚 sourcePart 的区域、左右锚点或遮挡声明无效');
  if (distance(part.anchors.left, part.anchors.right) < 1e-4) throw new Error('双锚 sourcePart 左右锚点不能重合');
  return {asset: sourceParts.asset, part};
}

function geometryConstraints(profile, policy, constraints) {
  const {headBounds, earMounts} = profile.landmarks;
  const width = headBounds.width, height = headBounds.height;
  const actuals = {widthRatio: width, heightRatio: height, aspectRatio: width / height};
  if (object(earMounts?.left) && object(earMounts?.right)) actuals.mountSpanRatio = distance({x: earMounts.left.x, y: earMounts.left.y}, {x: earMounts.right.x, y: earMounts.right.y}) / width;
  for (const [name, actual] of Object.entries(actuals)) {
    const interval = policy.headBounds[name];
    if (interval === undefined) continue;
    const accepted = actual >= interval.min && actual <= interval.max;
    constraints.push({name: `geometry.${name}`, status: accepted ? 'pass' : 'fail', actual, min: interval.min, max: interval.max});
    if (!accepted) return {available: false, actuals};
  }
  if (policy.headBounds.mountSpanRatio && actuals.mountSpanRatio === undefined) {
    constraints.push({name: 'geometry.mountSpanRatio', status: 'fail', reason: 'profile 没有可用的耳挂跨度标注'});
    return {available: false, actuals};
  }
  return {available: true, actuals};
}

function targetTransformFromPair({sourceLeft, sourceRight, targetLeft, targetRight, sourceWidth, sourceHeight, canvas, policy}) {
  const sourceVector = subtract(sourceRight, sourceLeft), targetVector = subtract(targetRight, targetLeft);
  const sourceSpan = hypot(sourceVector), targetSpan = hypot(targetVector);
  if (sourceSpan < 1e-6 || targetSpan < 1e-6) throw Object.assign(new Error('双锚端点距离无效'), {code: 'anchor-span-invalid'});
  const scale = targetSpan / sourceSpan;
  if (scale < policy.scale.min || scale > policy.scale.max) throw Object.assign(new Error('双锚缩放超出已声明范围'), {code: 'anchor-scale-out-of-range', actual: scale});
  const rotation = wrapDegrees(degrees(Math.atan2(targetVector.y, targetVector.x) - Math.atan2(sourceVector.y, sourceVector.x)));
  if (Math.abs(rotation) > policy.maxRotationDeg) throw Object.assign(new Error('双锚旋转超出已声明范围'), {code: 'anchor-rotation-out-of-range', actual: rotation});
  const turn = radians(rotation), cosine = Math.cos(turn), sine = Math.sin(turn);
  const a = scale * cosine / canvas.width, c = -scale * sine / canvas.width;
  const b = scale * sine / canvas.height, d = scale * cosine / canvas.height;
  const transform = {
    a, b, c, d,
    e: targetLeft.x / canvas.width - a * sourceLeft.x - c * sourceLeft.y,
    f: targetLeft.y / canvas.height - b * sourceLeft.x - d * sourceLeft.y
  };
  const mappedLeft = transformedPoint(transform, sourceLeft), mappedRight = transformedPoint(transform, sourceRight);
  const leftErrorPx = distance({x: mappedLeft.x * canvas.width, y: mappedLeft.y * canvas.height}, targetLeft);
  const rightErrorPx = distance({x: mappedRight.x * canvas.width, y: mappedRight.y * canvas.height}, targetRight);
  if (Math.max(leftErrorPx, rightErrorPx) > policy.maxAnchorErrorPx + 1e-6) throw Object.assign(new Error('双锚点接触误差超出已声明范围'), {code: 'anchor-contact-mismatch', actual: Math.max(leftErrorPx, rightErrorPx)});
  const bounds = boundsOf(rectCorners(transform, sourceWidth, sourceHeight, canvas));
  return {transform, scale, rotation, leftErrorPx, rightErrorPx, bounds, sourceSpan, targetSpan};
}

function transformedPoint(matrix, point) {
  return {x: matrix.a * point.x + matrix.c * point.y + matrix.e, y: matrix.b * point.x + matrix.d * point.y + matrix.f};
}

function matrixForCup({mount, part, canvas, headWidthPx, policy}) {
  const {sourceRect, anchors} = part;
  const sourceContact = pointFromAnchor(anchors.contactAnchor, sourceRect);
  const targetContact = {x: mount.x * canvas.width, y: mount.y * canvas.height};
  const scale = mount.cupSeat.height * canvas.height / part.visibleRect.height;
  if (scale < policy.cup.minScale || scale > policy.cup.maxScale) throw Object.assign(new Error('耳罩缩放超出该基底的支持范围'), {code: 'cup-scale-out-of-range', actual: scale});
  const visibleWidthPx = part.visibleRect.width * scale;
  const headWidthRatio = visibleWidthPx / headWidthPx;
  if (headWidthRatio < mount.cupSeat.minHeadWidthRatio || headWidthRatio > mount.cupSeat.maxHeadWidthRatio) {
    throw Object.assign(new Error('耳罩可见宽度与当前基底头宽不协调'), {code: 'cup-head-width-ratio-out-of-range', actual: headWidthRatio, min: mount.cupSeat.minHeadWidthRatio, max: mount.cupSeat.maxHeadWidthRatio});
  }
  const sourceNormal = normalize(part.contactNormal);
  const targetNormal = normalize({x: -mount.normal.x, y: -mount.normal.y});
  const angle = wrapDegrees(degrees(Math.atan2(targetNormal.y, targetNormal.x) - Math.atan2(sourceNormal.y, sourceNormal.x)));
  if (Math.abs(angle) > policy.cup.maxRotationDeg) throw Object.assign(new Error('耳罩朝向超出该基底的支持范围'), {code: 'cup-rotation-out-of-range', actual: angle});
  const turn = radians(angle), cosine = Math.cos(turn), sine = Math.sin(turn);
  const matrix = {
    a: scale * cosine / canvas.width,
    b: scale * sine / canvas.height,
    c: -scale * sine / canvas.width,
    d: scale * cosine / canvas.height,
    e: 0,
    f: 0
  };
  matrix.e = targetContact.x / canvas.width - matrix.a * sourceContact.x - matrix.c * sourceContact.y;
  matrix.f = targetContact.y / canvas.height - matrix.b * sourceContact.x - matrix.d * sourceContact.y;
  const placedContact = transformedPoint(matrix, sourceContact);
  const contactErrorPx = distance({x: placedContact.x * canvas.width, y: placedContact.y * canvas.height}, targetContact);
  if (contactErrorPx > policy.cup.contactTolerancePx + 1e-6) throw Object.assign(new Error('耳罩接触点无法贴合耳挂标注'), {code: 'cup-contact-mismatch', actual: contactErrorPx});
  return {matrix, scale, angle, contactErrorPx, sourceContact, targetContact, sourceNormal, targetNormal, visibleWidthPx, visibleHeightPx: part.visibleRect.height * scale, headWidthRatio};
}

function rectCorners(matrix, width, height, canvas) {
  return [[0, 0], [width, 0], [width, height], [0, height]].map(([x, y]) => {
    const point = transformedPoint(matrix, {x, y});
    return {x: point.x * canvas.width, y: point.y * canvas.height};
  });
}

function sourceRectCorners(matrix, rect, canvas) {
  return [[rect.x, rect.y], [rect.x + rect.width, rect.y], [rect.x + rect.width, rect.y + rect.height], [rect.x, rect.y + rect.height]].map(([x, y]) => {
    const point = transformedPoint(matrix, {x, y});
    return {x: point.x * canvas.width, y: point.y * canvas.height};
  });
}

function boundsOf(points) {
  const xs = points.map(point => point.x), ys = points.map(point => point.y);
  return {x: Math.min(...xs), y: Math.min(...ys), width: Math.max(...xs) - Math.min(...xs), height: Math.max(...ys) - Math.min(...ys)};
}

function projectLayer(id, assetId, part, transform, canvas, rotation, profile = null) {
  const visibleRect = part.visibleRect ?? {x: 0, y: 0, width: part.sourceRect.width, height: part.sourceRect.height};
  const bounds = boundsOf(sourceRectCorners(transform, visibleRect, canvas));
  const occlusion = structuredClone(part.occlusion);
  const cutouts = profile?.occlusionCutouts?.[id];
  if (cutouts) occlusion.cutouts = structuredClone(cutouts);
  return {
    id,
    assetId,
    sourceRect: {...part.sourceRect},
    transform: {...transform},
    placement: {
      x: bounds.x / canvas.width,
      y: bounds.y / canvas.height,
      width: bounds.width / canvas.width,
      height: bounds.height / canvas.height,
      rotation
    },
    z: part.z,
    occlusion
  };
}

function layerFitsCanvas(layer, tolerance = 1e-8) {
  const {x, y, width, height} = layer.placement;
  return x >= -tolerance && y >= -tolerance && x + width <= 1 + tolerance && y + height <= 1 + tolerance;
}

function polygonsIntersect(left, right) {
  const axes = [{x: 1, y: 0}, {x: 0, y: 1}];
  for (const polygon of [left, right]) {
    for (let index = 0; index < polygon.length; index++) {
      const edge = subtract(polygon[(index + 1) % polygon.length], polygon[index]);
      const length = hypot(edge);
      if (length > 1e-8) axes.push({x: -edge.y / length, y: edge.x / length});
    }
  }
  return axes.every(axis => {
    const projection = polygon => polygon.map(point => dot(point, axis));
    const a = projection(left), b = projection(right);
    return Math.max(...a) >= Math.min(...b) && Math.max(...b) >= Math.min(...a);
  });
}

function expandedKeepout(profile, canvas, clearancePx) {
  const rect = profile.faceKeepout;
  const x = rect.x * canvas.width - clearancePx, y = rect.y * canvas.height - clearancePx;
  const width = rect.width * canvas.width + 2 * clearancePx, height = rect.height * canvas.height + 2 * clearancePx;
  return [{x, y}, {x: x + width, y}, {x: x + width, y: y + height}, {x, y: y + height}];
}

function pointRectDistance(point, rect) {
  const dx = Math.max(rect.x - point.x, 0, point.x - (rect.x + rect.width));
  const dy = Math.max(rect.y - point.y, 0, point.y - (rect.y + rect.height));
  return Math.hypot(dx, dy);
}

function bandPathHitsKeepout(left, crown, right, keepout, radiusPx) {
  // A quadratic Bezier through the registered crown at t=.5; sample densely
  // enough for the narrow face-exclusion test without introducing randomness.
  const control = {x: 2 * crown.x - .5 * (left.x + right.x), y: 2 * crown.y - .5 * (left.y + right.y)};
  const rect = {x: keepout[0].x, y: keepout[0].y, width: keepout[2].x - keepout[0].x, height: keepout[2].y - keepout[0].y};
  for (let index = 0; index <= 64; index++) {
    const t = index / 64, inverse = 1 - t;
    const point = {
      x: inverse * inverse * left.x + 2 * inverse * t * control.x + t * t * right.x,
      y: inverse * inverse * left.y + 2 * inverse * t * control.y + t * t * right.y
    };
    if (pointRectDistance(point, rect) <= radiusPx) return true;
  }
  return false;
}

function failure(code, reason, constraints = [], debug = {}) {
  return {availability: 'unsupported', code, reason, fitVersion: COMPOSITION_FIT_VERSION, layers: [], constraints, debug};
}

/**
 * Resolve an independently authored headphone sprite kit onto one exact,
 * manually annotated base geometry profile. No family/tag inference or
 * capability fallback is performed.
 *
 * `transform` maps sourceRect-local pixel coordinates to normalized canvas
 * coordinates. A renderer applies it as setTransform(a*W,b*H,c*W,d*H,e*W,f*H)
 * before drawing the sourceRect crop at local (0,0) with its pixel dimensions.
 */
export function resolveHeadphoneFit({baseGeometryProfile, fitPolicy, sourceParts} = {}) {
  const constraints = [];
  let policy, validatedParts;
  try {
    if (!profileIsValid(baseGeometryProfile)) return failure('invalid-geometry-profile', '基底几何 profile 不完整或坐标越界');
    policy = validatePolicy(fitPolicy);
    validatedParts = validateSourceParts(sourceParts);
  } catch (error) {
    return failure('invalid-fit-input', error?.message || '耳机适配输入无效');
  }

  const profile = baseGeometryProfile;
  const {canvas, landmarks} = profile;
  const {headBounds, earMounts} = landmarks;
  if (profile.view !== policy.supports.view || !policy.supports.bodyIds.includes(profile.bodyId)) return failure('unsupported-body-or-view', '此耳机适配未声明支持该身体结构或视角', [{name: 'body-view', status: 'fail', bodyId: profile.bodyId, view: profile.view}]);
  if (!policy.supports.poseIds.includes(profile.poseId)) return failure('unsupported-pose', '此耳机适配未声明支持当前姿态', [{name: 'pose', status: 'fail', poseId: profile.poseId}]);
  if (!policy.supports.layoutIds.includes(profile.layoutId) || !policy.supports.styleIds.includes(profile.styleId)) return failure('unsupported-layout-or-style', '此耳机适配未声明支持当前布局或美术风格', [{name: 'layout-style', status: 'fail', layoutId: profile.layoutId, styleId: profile.styleId}]);

  const headWidth = headBounds.width, headHeight = headBounds.height;
  const mountSpan = distance({x: earMounts.left.x, y: earMounts.left.y}, {x: earMounts.right.x, y: earMounts.right.y});
  const geometryActual = {
    widthRatio: headWidth,
    heightRatio: headHeight,
    aspectRatio: headWidth / headHeight,
    mountSpanRatio: mountSpan / headWidth
  };
  for (const [name, actual] of Object.entries(geometryActual)) {
    const interval = policy.headBounds[name];
    const accepted = actual >= interval.min && actual <= interval.max;
    constraints.push({name: `geometry.${name}`, status: accepted ? 'pass' : 'fail', actual, min: interval.min, max: interval.max});
    if (!accepted) return failure('geometry-out-of-range', `基底头部几何 ${name}=${actual.toFixed(3)} 超出已声明范围`, constraints);
  }

  for (const part of Object.values(validatedParts.parts)) {
    if (!part.occlusion.covers.includes(profile.baseId)) return failure('base-occlusion-mismatch', `sourcePart ${part.id} 未声明覆盖当前基底 ${profile.baseId}`, constraints);
  }

  const headWidthPx = headWidth * canvas.width;
  const cupResults = {};
  try {
    for (const side of ['left', 'right']) {
      const id = side === 'left' ? 'leftCup' : 'rightCup';
      const part = validatedParts.parts[id];
      const result = matrixForCup({mount: earMounts[side], part, canvas, headWidthPx, policy});
      const normalAngle = Math.abs(wrapDegrees(degrees(Math.atan2(result.targetNormal.y, result.targetNormal.x) - (Math.atan2(result.sourceNormal.y, result.sourceNormal.x) + result.angle * Math.PI / 180))));
      constraints.push({name: `${id}.contact`, status: result.contactErrorPx <= policy.cup.contactTolerancePx + 1e-6 ? 'pass' : 'fail', errorPx: result.contactErrorPx});
      constraints.push({name: `${id}.normal`, status: normalAngle <= .01 ? 'pass' : 'fail', errorDeg: normalAngle});
      cupResults[id] = {...result, layer: projectLayer(id, validatedParts.asset.id, part, result.matrix, canvas, result.angle, profile)};
    }
  } catch (error) {
    return failure(error?.code || 'cup-fit-failed', error?.message || '耳罩几何解算失败', constraints, {actual: error?.actual});
  }

  const band = validatedParts.parts.band;
  const leftJointSource = pointFromAnchor(validatedParts.parts.leftCup.anchors.bandJointAnchor, validatedParts.parts.leftCup.sourceRect);
  const rightJointSource = pointFromAnchor(validatedParts.parts.rightCup.anchors.bandJointAnchor, validatedParts.parts.rightCup.sourceRect);
  const targetLeft = transformedPoint(cupResults.leftCup.matrix, leftJointSource);
  const targetRight = transformedPoint(cupResults.rightCup.matrix, rightJointSource);
  const targetLeftPx = {x: targetLeft.x * canvas.width, y: targetLeft.y * canvas.height};
  const targetRightPx = {x: targetRight.x * canvas.width, y: targetRight.y * canvas.height};
  const targetSpan = distance(targetLeftPx, targetRightPx);
  if (targetSpan < 1e-6) return failure('band-joint-span-invalid', '左右耳罩连接点重合，无法连接头梁', constraints);

  const sourceLeft = pointFromAnchor(band.anchors.leftTerminal, band.sourceRect);
  const sourceRight = pointFromAnchor(band.anchors.rightTerminal, band.sourceRect);
  const sourceCrown = pointFromAnchor(band.anchors.crown, band.sourceRect);
  const sourceVector = subtract(sourceRight, sourceLeft), sourceSpan = hypot(sourceVector);
  if (sourceSpan < 1e-6) return failure('band-source-span-invalid', '头梁源端点间距无效', constraints);
  const sourceU = normalize(sourceVector);
  let sourceV = perpendicular(sourceU);
  if (dot(subtract(sourceCrown, sourceLeft), sourceV) < 0) sourceV = scalePoint(sourceV, -1);
  const sourceRise = dot(subtract(sourceCrown, sourceLeft), sourceV);
  if (sourceRise <= 1e-6) return failure('band-source-crown-invalid', '头梁 crown 锚点未位于两端点弧线一侧', constraints);

  const targetVector = subtract(targetRightPx, targetLeftPx), targetU = normalize(targetVector);
  let targetV = perpendicular(targetU);
  const targetCrown = {x: profile.bandSeat.crown.x * canvas.width, y: profile.bandSeat.crown.y * canvas.height};
  if (dot(subtract(targetCrown, targetLeftPx), targetV) < 0) targetV = scalePoint(targetV, -1);
  const targetRise = dot(subtract(targetCrown, targetLeftPx), targetV);
  if (targetRise <= 1e-6) return failure('profile-crown-invalid', '基底 crown 必须位于耳罩头梁连接线一侧', constraints);

  const spanScale = targetSpan / sourceSpan, riseScale = targetRise / sourceRise;
  const crownAlong = dot(subtract(sourceCrown, sourceLeft), sourceU);
  const targetCrownOffset = subtract(targetCrown, targetLeftPx);
  const mappedSourceV = scalePoint(
    subtract(targetCrownOffset, scalePoint(targetU, crownAlong * spanScale)),
    1 / sourceRise
  );
  const mappedSourceU = scalePoint(targetU, spanScale);
  if (cross(mappedSourceU, mappedSourceV) * cross(sourceU, sourceV) <= 1e-8) return failure('profile-crown-invalid', '三锚映射会翻转或压扁头梁平面', constraints);
  const singularValues = singularValuesFromColumns(mappedSourceU, mappedSourceV);
  const anisotropy = singularValues.min > 1e-8 ? singularValues.max / singularValues.min : Infinity;
  const shearScale = dot(mappedSourceV, targetU);
  const scaleChecks = [
    {name: 'band.span-scale', actual: spanScale, min: policy.band.minSpanScale, max: policy.band.maxSpanScale},
    {name: 'band.rise-scale', actual: riseScale, min: policy.band.minRiseScale, max: policy.band.maxRiseScale},
    {name: 'band.anisotropy', actual: anisotropy, min: 1, max: policy.band.maxAnisotropy}
  ];
  for (const check of scaleChecks) {
    const accepted = check.actual >= check.min && check.actual <= check.max;
    constraints.push({name: check.name, status: accepted ? 'pass' : 'fail', actual: check.actual, min: check.min, max: check.max});
    if (!accepted) return failure('band-scale-out-of-range', `${check.name} 超出头梁支持范围`, constraints);
  }

  const predictedCrown = add(add(targetLeftPx, scalePoint(targetU, crownAlong * spanScale)), scalePoint(mappedSourceV, sourceRise));
  const crownErrorPx = distance(predictedCrown, targetCrown);
  constraints.push({name: 'band.crown-anchor', status: crownErrorPx <= 1e-6 ? 'pass' : 'fail', errorPx: crownErrorPx, tolerancePx: 1e-6});
  if (crownErrorPx > 1e-6) return failure('band-affine-crown-mismatch', '头梁三锚仿射没有精确落在基底登记的 crown', constraints, {predictedCrown, targetCrown});

  // Map both terminals and crown exactly. The source vertical basis can shear
  // along the terminal axis so an asymmetric target crown is not projected.
  // The matrix is row-normalized by canvas size.
  const aPx = mappedSourceU.x * sourceU.x + mappedSourceV.x * sourceV.x;
  const cPx = mappedSourceU.x * sourceU.y + mappedSourceV.x * sourceV.y;
  const bPx = mappedSourceU.y * sourceU.x + mappedSourceV.y * sourceV.x;
  const dPx = mappedSourceU.y * sourceU.y + mappedSourceV.y * sourceV.y;
  const transform = {
    a: aPx / canvas.width,
    b: bPx / canvas.height,
    c: cPx / canvas.width,
    d: dPx / canvas.height,
    e: targetLeftPx.x / canvas.width - (aPx / canvas.width) * sourceLeft.x - (cPx / canvas.width) * sourceLeft.y,
    f: targetLeftPx.y / canvas.height - (bPx / canvas.height) * sourceLeft.x - (dPx / canvas.height) * sourceLeft.y
  };
  const mappedLeft = transformedPoint(transform, sourceLeft), mappedRight = transformedPoint(transform, sourceRight), mappedCrown = transformedPoint(transform, sourceCrown);
  const leftErrorPx = distance({x: mappedLeft.x * canvas.width, y: mappedLeft.y * canvas.height}, targetLeftPx);
  const rightErrorPx = distance({x: mappedRight.x * canvas.width, y: mappedRight.y * canvas.height}, targetRightPx);
  constraints.push({name: 'band.left-joint', status: leftErrorPx <= policy.cup.contactTolerancePx + 1e-6 ? 'pass' : 'fail', errorPx: leftErrorPx});
  constraints.push({name: 'band.right-joint', status: rightErrorPx <= policy.cup.contactTolerancePx + 1e-6 ? 'pass' : 'fail', errorPx: rightErrorPx});
  if (leftErrorPx > policy.cup.contactTolerancePx || rightErrorPx > policy.cup.contactTolerancePx) return failure('band-joint-mismatch', '头梁端点没有与耳罩 bandJointAnchor 接触', constraints);

  const shoulderChecks = ['leftShoulder', 'rightShoulder'].map(side => {
    const source = pointFromAnchor(band.anchors[side], band.sourceRect);
    const mapped = transformedPoint(transform, source);
    const target = profile.bandSeat[side];
    const mappedPx = {x: mapped.x * canvas.width, y: mapped.y * canvas.height};
    const targetPx = {x: target.x * canvas.width, y: target.y * canvas.height};
    const errorPx = distance(mappedPx, targetPx);
    const accepted = errorPx <= profile.bandSeat.maxContourErrorPx;
    constraints.push({name: `band.${side}-contour`, status: accepted ? 'pass' : 'fail', errorPx, tolerancePx: profile.bandSeat.maxContourErrorPx});
    return {side, errorPx, mappedPx, targetPx, accepted};
  });
  const failedShoulder = shoulderChecks.find(item => !item.accepted);
  if (failedShoulder) return failure('band-contour-mismatch', `头梁 ${failedShoulder.side} 肩点偏离基底头部轮廓`, constraints, failedShoulder);

  const mappedCrownPx = {x: mappedCrown.x * canvas.width, y: mappedCrown.y * canvas.height};
  const keepout = expandedKeepout(profile, canvas, policy.faceClearancePx);
  for (const id of ['leftCup', 'rightCup']) {
    const corners = sourceRectCorners(cupResults[id].matrix, validatedParts.parts[id].visibleRect, canvas);
    if (polygonsIntersect(corners, keepout)) return failure('face-keepout-collision', `${id} 会侵入五官保护区`, constraints, {part: id});
  }
  const bandPathHits = bandPathHitsKeepout(targetLeftPx, mappedCrownPx, targetRightPx, keepout, policy.band.thicknessPx / 2);
  constraints.push({name: 'face-keepout', status: bandPathHits ? 'fail' : 'pass', clearancePx: policy.faceClearancePx});
  if (bandPathHits) return failure('face-keepout-collision', '头梁弧线会侵入五官保护区', constraints, {part: 'band'});

  const bandAngle = degrees(Math.atan2(bPx, aPx));
  const layers = [
    projectLayer('band', validatedParts.asset.id, band, transform, canvas, bandAngle, profile),
    cupResults.leftCup.layer,
    cupResults.rightCup.layer
  ].sort((left, right) => left.z - right.z);
  const clippedLayer = layers.find(layer => !layerFitsCanvas(layer));
  if (clippedLayer) return failure('layer-out-of-canvas', `${clippedLayer.id} 变换后超出输出画布范围`, constraints, {placement: clippedLayer.placement});
  const debug = {
    headWidthPx,
    headHeightPx: headHeight * canvas.height,
    cupScale: {left: cupResults.leftCup.scale, right: cupResults.rightCup.scale},
    cupVisibleSizePx: {
      left: {width: cupResults.leftCup.visibleWidthPx, height: cupResults.leftCup.visibleHeightPx, headWidthRatio: cupResults.leftCup.headWidthRatio},
      right: {width: cupResults.rightCup.visibleWidthPx, height: cupResults.rightCup.visibleHeightPx, headWidthRatio: cupResults.rightCup.headWidthRatio}
    },
    cupRotationDeg: {left: cupResults.leftCup.angle, right: cupResults.rightCup.angle},
    bandScale: {span: spanScale, rise: riseScale, shear: shearScale, anisotropy, singularValues},
    bandShoulderErrorPx: Object.fromEntries(shoulderChecks.map(item => [item.side, item.errorPx])),
    contacts: {
      leftEar: cupResults.leftCup.targetContact,
      rightEar: cupResults.rightCup.targetContact,
      leftBand: targetLeftPx,
      rightBand: targetRightPx,
      crown: targetCrown,
      resolvedCrown: mappedCrownPx
    }
  };
  const result = {
    availability: 'available',
    code: 'resolved',
    fitVersion: COMPOSITION_FIT_VERSION,
    profileId: profile.id,
    profileVersion: profile.version,
    layers,
    constraints,
    debug
  };
  result.fitFingerprint = getCompositionFitFingerprint({
    fitVersion: COMPOSITION_FIT_VERSION,
    profile,
    fitPolicy: policy,
    sourceParts: validatedParts,
    output: {layers, constraints, debug}
  });
  return result;
}

/**
 * Fit one independently authored part to two exact profile anchors using only
 * uniform scale, rotation and translation. `anchorKind` selects maintained
 * geometry such as eye pupils or neck contacts; tags never supply these points.
 */
export function resolveAnchorPairFit({baseGeometryProfile, fitPolicy, sourceParts} = {}) {
  const constraints = [];
  let policy, validated;
  try {
    if (!profileCoreIsValid(baseGeometryProfile)) return failure('invalid-geometry-profile', '基底几何 profile 缺少稳定身份、画布或头部边界');
    policy = validateAnchorPairPolicy(fitPolicy);
    validated = validateAnchorPairSource(sourceParts);
  } catch (error) {
    return failure('invalid-fit-input', error?.message || '双锚适配输入无效');
  }

  const profile = baseGeometryProfile, {canvas, landmarks} = profile;
  if (profile.view !== policy.supports.view || !policy.supports.bodyIds.includes(profile.bodyId)) return failure('unsupported-body-or-view', '此双锚适配未声明支持该身体结构或视角', [{name: 'body-view', status: 'fail', bodyId: profile.bodyId, view: profile.view}]);
  if (!policy.supports.poseIds.includes(profile.poseId)) return failure('unsupported-pose', '此双锚适配未声明支持当前姿态', [{name: 'pose', status: 'fail', poseId: profile.poseId}]);
  if (!policy.supports.layoutIds.includes(profile.layoutId) || !policy.supports.styleIds.includes(profile.styleId)) return failure('unsupported-layout-or-style', '此双锚适配未声明支持当前布局或美术风格', [{name: 'layout-style', status: 'fail', layoutId: profile.layoutId, styleId: profile.styleId}]);
  const anchorPair = landmarks.anchorPairs?.[policy.anchorKind];
  if (!object(anchorPair) || !normalizedPoint(anchorPair.left) || !normalizedPoint(anchorPair.right)) return failure('missing-target-anchor-pair', `profile 没有维护者标注的 ${policy.anchorKind} 左右锚点`);
  const rangeCheck = geometryConstraints(profile, policy, constraints);
  if (!rangeCheck.available) return failure('geometry-out-of-range', '基底几何超出双锚适配的已声明区间', constraints);
  if (!validated.part.occlusion.covers.includes(profile.baseId)) return failure('base-occlusion-mismatch', `sourcePart 未声明覆盖当前基底 ${profile.baseId}`, constraints);

  const part = validated.part, sourceRect = part.sourceRect;
  const sourceLeft = pointFromAnchor(part.anchors.left, sourceRect);
  const sourceRight = pointFromAnchor(part.anchors.right, sourceRect);
  const targetLeft = {x: anchorPair.left.x * canvas.width, y: anchorPair.left.y * canvas.height};
  const targetRight = {x: anchorPair.right.x * canvas.width, y: anchorPair.right.y * canvas.height};
  let fit;
  try {
    fit = targetTransformFromPair({
      sourceLeft,
      sourceRight,
      targetLeft,
      targetRight,
      sourceWidth: sourceRect.width,
      sourceHeight: sourceRect.height,
      canvas,
      policy
    });
  } catch (error) {
    return failure(error?.code || 'anchor-pair-fit-failed', error?.message || '双锚几何解算失败', constraints, {actual: error?.actual});
  }
  constraints.push({name: 'anchor-pair.scale', status: 'pass', actual: fit.scale, min: policy.scale.min, max: policy.scale.max});
  constraints.push({name: 'anchor-pair.rotation', status: 'pass', actual: fit.rotation, maxAbs: policy.maxRotationDeg});
  constraints.push({name: 'anchor-pair.left-contact', status: 'pass', errorPx: fit.leftErrorPx});
  constraints.push({name: 'anchor-pair.right-contact', status: 'pass', errorPx: fit.rightErrorPx});

  const layer = projectLayer(part.id, validated.asset.id, part, fit.transform, canvas, fit.rotation);
  if (!layerFitsCanvas(layer)) return failure('layer-out-of-canvas', '双锚素材变换后超出输出画布范围', constraints, {placement: layer.placement});
  const debug = {
    anchorKind: policy.anchorKind,
    sourceSpanPx: fit.sourceSpan,
    targetSpanPx: fit.targetSpan,
    scale: fit.scale,
    rotationDeg: fit.rotation,
    targetAnchors: {left: targetLeft, right: targetRight}
  };
  const result = {
    availability: 'available',
    code: 'resolved',
    fitVersion: COMPOSITION_FIT_VERSION,
    profileId: profile.id,
    profileVersion: profile.version,
    layers: [layer],
    constraints,
    debug
  };
  result.fitFingerprint = getCompositionFitFingerprint({
    fitVersion: COMPOSITION_FIT_VERSION,
    profile,
    fitPolicy: policy,
    sourceParts: validated,
    output: {layers: result.layers, constraints, debug}
  });
  return result;
}
