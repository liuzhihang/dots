// Browser-test-only assets and Template for exercising the shared schema-v2
// editing engine. These geometric samples are not production art or approval.
const TEMPLATE_ID = 'fixture-cloud-v2';
const ARTWORK_ID = 'fixture-cloud-artwork';
const ARTWORK_VERSION = 'fixture-v1';
const CANVAS = Object.freeze([128, 128]);
const freeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) freeze(child);
  return Object.freeze(value);
};
const ref = (name, purpose) => Object.freeze({ id: `template:${TEMPLATE_ID}:${name}`, version: 'fixture-v1', purpose });

const refs = Object.freeze({
  cloud: ref('body:cloud', 'body-layer'),
  diamond: ref('body:diamond', 'body-layer'),
  bodyMask: ref('mask:body', 'color-zone-mask'),
  eyesOpen: ref('face:oval', 'face-layer'),
  eyesClosed: ref('face:closed', 'face-layer'),
  collar: ref('clothing:collar', 'clothing-layer'),
  glassesRear: ref('accessories:glasses-rear', 'accessory-rear-layer'),
  glassesFront: ref('accessories:glasses-front', 'accessory-front-layer')
});

const option = (id, labelEn, labelZh, semanticEn, semanticZh, extra = {}) => ({
  id,
  labelByLanguage: { en: labelEn, 'zh-CN': labelZh },
  semanticByLanguage: { en: semanticEn, 'zh-CN': semanticZh },
  ...extra
});

const recipe = (id, selections, body, face, additions = []) => ({
  id,
  selections,
  layers: [
    { slot: 'body', asset: body, mask: { asset: refs.bodyMask, operation: 'destination-in' }, tint: { optionField: 'colors', zone: 'body', mask: refs.bodyMask, mode: 'preserve-lightness' } },
    { slot: 'face', asset: face },
    ...additions
  ]
});

export const FIXTURE_ARTWORK = freeze({
  id: ARTWORK_ID,
  version: ARTWORK_VERSION,
  publicationStatus: 'preview-only',
  status: 'fixture',
  titleByLanguage: { en: 'Fixture cloud', 'zh-CN': '测试云团' }
});

const defaults = { appearance: 'cloud', colors: 'blue', face: 'oval', clothing: 'none', accessories: 'none' };
const base = (overrides = {}) => ({ ...defaults, ...overrides });

export const FIXTURE_TEMPLATE = freeze({
  schemaVersion: 2,
  id: TEMPLATE_ID,
  version: 'fixture-v1',
  family: 'muse',
  status: 'pending',
  engineeringStatus: 'fixture',
  artApproval: { status: 'pending', record: null, scope: 'test fixture only' },
  artworkBinding: { artworkId: ARTWORK_ID, artworkVersion: ARTWORK_VERSION },
  canvas: { width: CANVAS[0], height: CANVAS[1] },
  anchors: {
    'face.center': { point: [64, 61] },
    'body.base': { point: [64, 96] }
  },
  identitySemanticsByLanguage: {
    en: 'A single limbless Dots cloud companion with a soft plush surface and two simple face marks.',
    'zh-CN': '单体无手脚 Dots 云团伙伴，具有柔软绒面和简洁的双眼。'
  },
  defaultOptions: defaults,
  options: {
    appearance: [
      option('cloud', 'Cloud silhouette', '云团轮廓', 'a softly scalloped cloud silhouette', '柔和波浪边的云团轮廓', { thumbnailAssets: [refs.cloud] }),
      option('diamond', 'Diamond silhouette', '菱形轮廓', 'a compact diamond silhouette with rounded corners', '带圆角的紧凑菱形轮廓', { thumbnailAssets: [refs.diamond] })
    ],
    colors: [
      option('blue', 'Sky blue', '晴空蓝', 'a sky-blue body with the registered plush shading', '晴空蓝身体并保留已登记的绒面明暗', { zoneColors: { body: '#3789e8' }, swatches: ['#3789e8'] }),
      option('coral', 'Warm coral', '暖珊瑚色', 'a warm coral body with the same registered plush shading', '暖珊瑚色身体并保留已登记的绒面明暗', { zoneColors: { body: '#e96b77' }, swatches: ['#e96b77'] })
    ],
    face: [
      option('oval', 'Open oval eyes', '睁开的椭圆眼', 'two simple upright oval eyes', '两只简洁直立椭圆眼', { thumbnailAssets: [refs.eyesOpen] }),
      option('closed', 'Closed eyes', '闭眼', 'two gently curved closed-eye marks', '两道柔和弯曲的闭眼线', { thumbnailAssets: [refs.eyesClosed] })
    ],
    clothing: [
      option('none', 'No clothing', '无服装', 'no clothing', '不穿服装'),
      option('collar', 'Soft collar', '柔软围领', 'a small fabric collar fitted around the lower body', '贴合身体下缘的小型布质围领', { thumbnailAssets: [refs.collar] })
    ],
    accessories: [
      option('none', 'No accessories', '无配饰', 'no accessories', '不佩戴配饰'),
      option('glasses', 'Round glasses', '圆框眼镜', 'round glasses aligned to the face', '与面部锚点对齐的圆框眼镜', { thumbnailAssets: [refs.glassesFront] })
    ]
  },
  conflicts: [{
    when: { clothing: 'collar', accessories: 'glasses' },
    code: 'fixture-collar-glasses-conflict',
    messageByLanguage: { en: 'The collar and glasses are not approved together in this fixture.', 'zh-CN': '此测试模板未批准围领与眼镜同时出现。' }
  }],
  recipes: [
    recipe('cloud-blue-open', base(), refs.cloud, refs.eyesOpen),
    recipe('diamond-blue-open', base({ appearance: 'diamond' }), refs.diamond, refs.eyesOpen),
    recipe('cloud-coral-open', base({ colors: 'coral' }), refs.cloud, refs.eyesOpen),
    recipe('cloud-blue-closed', base({ face: 'closed' }), refs.cloud, refs.eyesClosed),
    recipe('cloud-blue-collar', base({ clothing: 'collar' }), refs.cloud, refs.eyesOpen, [
      { slot: 'clothing-collar', asset: refs.collar }
    ]),
    recipe('cloud-coral-collar', base({ colors: 'coral', clothing: 'collar' }), refs.cloud, refs.eyesOpen, [
      { slot: 'clothing-collar', asset: refs.collar }
    ]),
    {
      id: 'cloud-blue-glasses',
      selections: base({ accessories: 'glasses' }),
      layers: [
        { slot: 'accessory-glasses-rear', asset: refs.glassesRear },
        { slot: 'body', asset: refs.cloud, mask: { asset: refs.bodyMask, operation: 'destination-in' }, tint: { optionField: 'colors', zone: 'body', mask: refs.bodyMask, mode: 'preserve-lightness' } },
        { slot: 'face', asset: refs.eyesOpen },
        { slot: 'accessory-glasses-front', asset: refs.glassesFront }
      ]
    }
  ]
});

/** Four-field schema-v2 fixtures for families that intentionally omit clothing. */
function withoutFamilyClothing(family) {
  const template = structuredClone(FIXTURE_TEMPLATE);
  template.family = family;
  delete template.options.clothing;
  delete template.defaultOptions.clothing;
  template.conflicts = template.conflicts.filter(rule => !Object.hasOwn(rule.when || {}, 'clothing'));
  template.recipes = template.recipes.filter(row => row.selections.clothing === 'none').map(row => {
    const recipeRow = structuredClone(row);
    delete recipeRow.selections.clothing;
    return recipeRow;
  });
  return freeze(template);
}

export const FIXTURE_DOTS_TEMPLATE = withoutFamilyClothing('dots');
export const FIXTURE_GROK_TEMPLATE = withoutFamilyClothing('grok');

function placementFor(name) {
  if (name === 'face:closed') {
    return { canvas: [...CANVAS], anchor: 'face.center', sourceAnchor: [32, 16], offset: [0, 0] };
  }
  if (name === 'face:oval' || name === 'accessories:glasses-rear' || name === 'accessories:glasses-front') {
    return { canvas: [...CANVAS], anchor: 'face.center', sourceAnchor: [64, 61], offset: [0, 0] };
  }
  if (name === 'clothing:collar') {
    return { canvas: [...CANVAS], anchor: 'body.base', sourceAnchor: [64, 96], offset: [0, 0] };
  }
  return { canvas: [...CANVAS], anchor: 'canvas', offset: [0, 0] };
}

const names = ['body:cloud', 'body:diamond', 'mask:body', 'face:oval', 'face:closed', 'clothing:collar', 'accessories:glasses-rear', 'accessories:glasses-front'];
const dimensionsFor = name => name === 'face:closed' ? [64, 32] : CANVAS;
const refByName = Object.fromEntries(Object.values(refs).map(reference => [reference.id.split(':').slice(2).join(':'), reference]));
const assetBase = names.map(name => {
  const reference = refByName[name];
  const [width, height] = dimensionsFor(name);
  return {
    ...reference,
    path: `./assets/templates/${TEMPLATE_ID}/__fixture__/${name.replaceAll(':', '-')}.png`,
    sha256: '0'.repeat(64),
    byteSize: 1,
    width,
    height,
    mime: 'image/png',
    alpha: { hasAlpha: true, hasTransparency: true },
    owner: { templateId: TEMPLATE_ID, artworkId: ARTWORK_ID, artworkVersion: ARTWORK_VERSION },
    placement: placementFor(name)
  };
});

export const FIXTURE_ASSETS = freeze(assetBase);

function drawBody(context, kind) {
  context.fillStyle = kind === 'mask' ? '#ffffff' : '#3789e8';
  context.beginPath();
  if (kind === 'diamond') {
    context.moveTo(64, 18); context.quadraticCurveTo(73, 18, 78, 27);
    context.lineTo(105, 54); context.quadraticCurveTo(114, 64, 105, 74);
    context.lineTo(76, 103); context.quadraticCurveTo(64, 116, 52, 103);
    context.lineTo(23, 74); context.quadraticCurveTo(14, 64, 23, 54);
    context.lineTo(50, 27); context.quadraticCurveTo(55, 18, 64, 18);
  } else {
    context.moveTo(28, 97); context.bezierCurveTo(16, 96, 12, 86, 16, 76);
    context.bezierCurveTo(8, 64, 16, 51, 29, 49); context.bezierCurveTo(29, 31, 45, 22, 59, 31);
    context.bezierCurveTo(69, 17, 91, 22, 94, 40); context.bezierCurveTo(111, 42, 117, 58, 108, 70);
    context.bezierCurveTo(116, 84, 105, 99, 91, 97); context.bezierCurveTo(80, 110, 65, 107, 58, 99);
    context.bezierCurveTo(47, 109, 34, 107, 28, 97);
  }
  context.closePath();
  context.fill();
}

/** Draw a deliberately simple test raster; not a usable character asset. */
export function drawFixtureAsset(context, assetId, width = CANVAS[0], height = CANVAS[1]) {
  const name = assetId.split(':').slice(2).join(':');
  context.clearRect(0, 0, width, height);
  if (name === 'body:cloud' || name === 'body:diamond' || name === 'mask:body') {
    drawBody(context, name === 'body:diamond' ? 'diamond' : name === 'mask:body' ? 'mask' : 'cloud');
  } else if (name === 'face:oval') {
    context.fillStyle = '#10131a';
    for (const x of [48, 80]) { context.beginPath(); context.ellipse(x, 61, 5, 11, 0, 0, Math.PI * 2); context.fill(); }
  } else if (name === 'face:closed') {
    context.strokeStyle = '#10131a'; context.lineWidth = 3; context.lineCap = 'round';
    for (const x of [16, 48]) { context.beginPath(); context.moveTo(x - 6, 17); context.quadraticCurveTo(x, 10, x + 6, 17); context.stroke(); }
  } else if (name === 'clothing:collar') {
    context.fillStyle = '#f4cf62'; context.beginPath(); context.moveTo(34, 86); context.quadraticCurveTo(64, 104, 94, 86);
    context.lineTo(89, 99); context.quadraticCurveTo(64, 114, 39, 99); context.closePath(); context.fill();
    context.strokeStyle = '#c59731'; context.lineWidth = 2; context.stroke();
  } else if (name === 'accessories:glasses-rear') {
    context.strokeStyle = '#e74330'; context.lineWidth = 3; context.lineCap = 'round';
    context.beginPath(); context.moveTo(5, 61); context.lineTo(37, 61); context.moveTo(91, 61); context.lineTo(123, 61); context.stroke();
  } else if (name === 'accessories:glasses-front') {
    context.strokeStyle = '#e62eb0'; context.lineWidth = 3;
    for (const x of [48, 80]) { context.beginPath(); context.arc(x, 61, 11, 0, Math.PI * 2); context.stroke(); }
    context.beginPath(); context.moveTo(59, 61); context.lineTo(69, 61); context.stroke();
  }
}

/**
 * Materialize real PNG/hash metadata for a browser test harness. The returned
 * paths and pixels remain fixture-only and should never be copied to dist/.
 */
export async function materializeFixtureAssets({ canvasFactory, cryptoImpl = globalThis.crypto } = {}) {
  const rows = [];
  const blobs = new Map();
  for (const source of assetBase) {
    const canvas = canvasFactory ? canvasFactory(source.width, source.height) : globalThis.document?.createElement?.('canvas');
    if (!canvas) throw new Error('Fixture PNG generation requires a browser canvas or canvasFactory.');
    canvas.width = source.width; canvas.height = source.height;
    drawFixtureAsset(canvas.getContext('2d'), source.id, source.width, source.height);
    const blob = await new Promise((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error(`Could not encode fixture ${source.id}.`)), 'image/png'));
    const bytes = await blob.arrayBuffer();
    const digest = new Uint8Array(await cryptoImpl.subtle.digest('SHA-256', bytes));
    const sha256 = [...digest].map(value => value.toString(16).padStart(2, '0')).join('');
    rows.push({ ...source, sha256, byteSize: blob.size });
    blobs.set(source.path, blob);
    canvas.width = 0; canvas.height = 0;
  }
  return { assets: freeze(rows), blobs };
}
