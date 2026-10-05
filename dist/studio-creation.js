import {
  ACTIONS,
  FAMILIES,
  buildPrompt,
  resolveCharacter,
  validateConfig
} from './studio-model.js?v=81';
import {
  COMPOSITION_PACKS,
  CREATION_ARTWORKS,
  getCompositionPack,
  getCreationArtwork,
  getFamilyArtwork
} from './studio-creation-assets.js?v=81';

export const PROJECT_FORMAT = 'dot-studio-project';
export const PROJECT_VERSION = 1;
export const CREATION_MODES = Object.freeze(['artwork', 'composer']);

const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const clone = value => structuredClone(value);
const isRecord = value => !!value && typeof value === 'object' && !Array.isArray(value);
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const VISUAL_PATHS = new Set([
  'shape', 'material', 'fur', 'expressionAccents', 'faceShape', 'outfit', 'eyes',
  'eyeScale', 'eyeSpacing', 'brows', 'mouth', 'expression', 'headScale',
  'bodyWidth', 'hair', 'limbs', 'action', 'pose', 'framing', 'camera',
  'background', 'aspect', 'scale', 'output', 'motionStyle', 'motionSpeed',
  'skinMaterial', 'hairMaterial', 'clothMaterial',
  'accessories.head', 'accessories.face', 'accessories.neck', 'accessories.prop',
  'colors.body', 'colors.secondary', 'colors.eyes', 'colors.accessory',
  'colors.headAccessory', 'colors.background', 'colors.skin', 'colors.hair',
  'colors.clothing'
]);
const TINT_PATHS = new Set([
  'colors.body', 'colors.secondary', 'colors.eyes', 'colors.accessory',
  'colors.headAccessory', 'colors.background', 'colors.skin', 'colors.hair', 'colors.clothing'
]);
const FRAME_PATHS = new Set(['background', 'colors.background']);
const UNSUPPORTED_PACK_EDITS = new Set(['camera', 'aspect', 'output', 'motionStyle', 'motionSpeed']);

function localAssetPath(src) {
  if (typeof src !== 'string' || !src || src.includes('\\') || /[?#]/.test(src)) return false;
  let decoded;
  try { decoded = decodeURIComponent(src); } catch { return false; }
  if (decoded.includes('\\') || /[?#]/.test(decoded) || (!decoded.startsWith('./assets/') && !decoded.startsWith('/assets/'))) return false;
  return !decoded.split('/').some((part, index) => (index > 0 && (part === '..' || part === '.')));
}

function firstArtworkId(family) {
  return getFamilyArtwork(family)?.id ?? null;
}

function normalizeArtworkId(artworkId, family, defaultArtwork) {
  if (artworkId === undefined) artworkId = defaultArtwork ? firstArtworkId(family) : null;
  if (artworkId === null) return null;
  if (typeof artworkId !== 'string') throw new Error('完整图作品编号无效');
  const artwork = getCreationArtwork(artworkId);
  if (!artwork) throw new Error('完整图作品不存在；项目文件不能导入图片 URL');
  if (artwork.family !== family) throw new Error('完整图作品不属于当前角色分组');
  if (artwork.status === 'retired' && artwork.kind === 'retired-tombstone' && !own(artwork, 'src')) {
    return artwork.id;
  }
  if (!localAssetPath(artwork.src)) throw new Error('完整图只能来自本站登记的本地作品');
  return artwork.id;
}

function normalizeCreation(creation, family, { defaultArtwork = true } = {}) {
  if (creation === undefined || creation === null) creation = {};
  if (!isRecord(creation)) throw new Error('创作模式配置无效');
  if (Object.keys(creation).some(key => !['mode', 'artworkId'].includes(key))) {
    throw new Error('创作模式配置包含不支持的字段');
  }
  const mode = creation.mode ?? 'artwork';
  if (!CREATION_MODES.includes(mode)) throw new Error('创作模式必须是 artwork 或 composer');
  return {
    mode,
    artworkId: normalizeArtworkId(creation.artworkId, family, defaultArtwork)
  };
}

function makeNormalizedProject(character, creation, { defaultArtwork = true } = {}) {
  const config = validateConfig(character);
  return {
    format: PROJECT_FORMAT,
    version: PROJECT_VERSION,
    character: clone(config),
    creation: normalizeCreation(creation, config.family, { defaultArtwork })
  };
}

function parseProjectObject(raw) {
  if (!isRecord(raw)) throw new Error('项目文件必须是 JSON 对象');
  if (raw.format !== PROJECT_FORMAT) {
    if (own(raw, 'format')) throw new Error('项目文件格式不受支持');
    return makeNormalizedProject(raw, {}, { defaultArtwork: true });
  }
  if (raw.version !== PROJECT_VERSION) throw new Error('Dot Studio 项目版本不受支持');
  if (Object.keys(raw).some(key => !['format', 'version', 'character', 'creation'].includes(key))) {
    throw new Error('项目文件包含不支持的字段');
  }
  if (!own(raw, 'character')) throw new Error('项目文件缺少角色配置');
  return makeNormalizedProject(raw.character, raw.creation, { defaultArtwork: true });
}

export function makeProject(character, creation = {}) {
  return makeNormalizedProject(character, creation, { defaultArtwork: true });
}

export function parseProject(raw) {
  if (typeof raw === 'string') {
    try { raw = JSON.parse(raw); } catch { throw new Error('项目文件不是有效的 JSON'); }
  }
  return parseProjectObject(raw);
}

export function exportProject(project) {
  return JSON.stringify(parseProjectObject(project), null, 2);
}

export function setProjectCharacter(project, nextCharacter) {
  const current = parseProjectObject(project);
  const next = validateConfig(nextCharacter);
  const familyChanged = current.character.family !== next.family;
  const artworkId = familyChanged ? firstArtworkId(next.family) : current.creation.artworkId;
  return makeNormalizedProject(next, {
    mode: current.creation.mode,
    artworkId
  }, { defaultArtwork: false });
}

export function setCreationMode(project, mode) {
  const current = parseProjectObject(project);
  if (!CREATION_MODES.includes(mode)) throw new Error('创作模式必须是 artwork 或 composer');
  return makeNormalizedProject(current.character, {
    mode,
    artworkId: current.creation.artworkId
  }, { defaultArtwork: false });
}

function valueAt(config, path) {
  if (typeof path !== 'string' || path.split('.').some(part => !part || ['__proto__', 'prototype', 'constructor'].includes(part))) {
    return undefined;
  }
  return path.split('.').reduce((value, key) => value?.[key], config);
}

function validPack(pack) {
  if (!isRecord(pack) || typeof pack.id !== 'string' || typeof pack.family !== 'string' || !FAMILIES[pack.family]) {
    throw new Error('组合素材身份无效');
  }
  if (!Number.isInteger(pack.revision) || pack.revision < 1 || !isRecord(pack.provenance) || typeof pack.provenance.origin !== 'string' || !pack.provenance.origin.trim() || typeof pack.provenance.detail !== 'string' || !pack.provenance.detail.trim()) throw new Error('组合素材必须登记版本与来源说明');
  if (!['layered-2d', 'fixed-image-2d'].includes(pack.kind) || pack.view !== 'front' || pack.status !== 'candidate') {
    throw new Error('组合素材必须是正面候选包');
  }
  if (!Number.isInteger(pack.width) || !Number.isInteger(pack.height) || pack.width < 1 || pack.height < 1 || pack.width > 8192 || pack.height > 8192) {
    throw new Error('组合素材尺寸无效');
  }
  if (!isRecord(pack.baseConfig) || pack.baseConfig.version !== 10) throw new Error('组合素材基准必须是 schema v10 角色配置');
  const base = validateConfig(pack.baseConfig);
  if (base.family !== pack.family || base.camera !== 'front' || base.reference.enabled) throw new Error('组合素材基准分组、视角或参考图状态不匹配');
  if (!Array.isArray(pack.editablePaths) || !Array.isArray(pack.layers) || !pack.layers.length) throw new Error('组合素材缺少可编辑字段或图层');
  const editable = new Set(pack.editablePaths);
  if (editable.size !== pack.editablePaths.length || [...editable].some(path => !VISUAL_PATHS.has(path))) {
    throw new Error('组合素材声明了无效的可编辑字段');
  }
  if ([...editable].some(path => UNSUPPORTED_PACK_EDITS.has(path))) throw new Error('当前组合引擎不支持修改视角、画幅或输出动态格式');
  if (pack.kind === 'fixed-image-2d') {
    if (pack.layers.length !== 1 || (pack.variants?.length ?? 0) !== 0 || [...editable].some(path => !FRAME_PATHS.has(path)) || pack.layers[0]?.tintPath !== undefined) {
      throw new Error('完整形象候选只能登记一张原图，并且只能编辑背景');
    }
  }
  const layerIds = new Set();
  for (const layer of pack.layers) {
    if (!isRecord(layer) || typeof layer.id !== 'string' || !layer.id || layerIds.has(layer.id)) throw new Error('组合图层编号无效或重复');
    layerIds.add(layer.id);
    if (!localAssetPath(layer.src) || !Number.isFinite(layer.z)) throw new Error('组合图层必须使用安全的本地图片路径并声明绘制顺序');
    if (layer.when !== undefined) {
      throw new Error('条件图层不能证明造型替换；请登记完整图层配方');
    }
    if (layer.tintPath !== undefined && (!TINT_PATHS.has(layer.tintPath) || !editable.has(layer.tintPath))) {
      throw new Error('图层染色字段必须列入可编辑字段');
    }
  }
  const resolvedBase = resolveCharacter(base).config;
  const structural = [...editable].filter(path => !TINT_PATHS.has(path) && !FRAME_PATHS.has(path));
  const variants = pack.variants ?? [];
  if (!Array.isArray(variants)) throw new Error('组合配方列表无效');
  if (pack.kind === 'fixed-image-2d' && variants.length) throw new Error('完整形象候选不能声明造型变体');
  if (pack.kind === 'layered-2d' && structural.length && !variants.length) throw new Error('造型修改必须登记完整图层配方');
  const variantIds = new Set(), bindings = new Set();
  for (const variant of variants) {
    if (!isRecord(variant) || typeof variant.id !== 'string' || !variant.id || variantIds.has(variant.id)) throw new Error('组合配方编号无效或重复');
    variantIds.add(variant.id);
    if (!isRecord(variant.values) || Object.keys(variant.values).length !== structural.length || structural.some(path => !own(variant.values, path))) throw new Error('每个配方必须绑定所有造型字段');
    if (Object.values(variant.values).some(value => !['string', 'number', 'boolean'].includes(typeof value) || (typeof value === 'number' && !Number.isFinite(value)))) throw new Error('组合配方参数无效');
    const binding = JSON.stringify(structural.map(path => variant.values[path]));
    if (bindings.has(binding)) throw new Error('组合配方的参数绑定不能重复');
    bindings.add(binding);
    if (!Array.isArray(variant.layerIds) || !variant.layerIds.length || new Set(variant.layerIds).size !== variant.layerIds.length || variant.layerIds.some(id => !layerIds.has(id))) throw new Error('组合配方必须列出有效且不重复的完整图层清单');
  }
  if (variants.length && !variants.some(variant => structural.every(path => Object.is(variant.values[path], valueAt(resolvedBase, path))))) throw new Error('组合素材缺少基准造型配方');
  return { base: resolvedBase, editable, structural, variants, layers: pack.layers };
}

function assignPath(config, path, value) {
  const parts = path.split('.');
  const key = parts.pop();
  const parent = parts.reduce((node, part) => node[part], config);
  parent[key] = value;
}

// Only copy values represented by a registered render recipe into the actual
// Canvas configuration. Other character settings remain available to Prompt.
export function resolveCompositionConfig(pack, inputConfig, {templatePreview = false} = {}) {
  const info = validPack(pack);
  const current = resolveCharacter(validateConfig(inputConfig)).config;
  if (pack.family !== current.family) throw new Error('组合素材与当前角色分组不一致。');
  if (!templatePreview) {
    const assessment = inspectCompositionPack(pack, current);
    if (assessment.availability !== 'available') throw new Error(assessment.reason);
  }
  const result = clone(info.base);
  result.background = current.background;
  result.colors.background = current.colors.background;
  if (pack.kind === 'layered-2d' && info.variants.length) {
    const matches = variant => info.structural.every(path => Object.is(variant.values[path], valueAt(current, path)));
    const variant = info.variants.find(matches)
      ?? info.variants.find(item => info.structural.every(path => Object.is(item.values[path], valueAt(info.base, path))))
      ?? info.variants[0];
    for (const path of info.structural) assignPath(result, path, variant.values[path]);
  }
  return validateConfig(result);
}

function selectedLayers(info, config) {
  if (!info.variants.length) return info.layers;
  const variant = info.variants.find(item => info.structural.every(path => Object.is(item.values[path], valueAt(config, path))));
  if (!variant) throw new Error('图层包缺少当前造型的完整配方，无法合成当前设定。');
  const ids = new Set(variant.layerIds);
  return info.layers.filter(layer => ids.has(layer.id));
}

// The renderer and capability check share the same exclusive layer selection.
export function selectCompositionLayers(pack, inputConfig) {
  const assessment = inspectCompositionPack(pack, inputConfig);
  if (assessment.availability !== 'available') throw new Error(assessment.reason);
  const info = validPack(pack), rendered = resolveCompositionConfig(pack, inputConfig);
  return selectedLayers(info, rendered).map(clone);
}

export function inspectCompositionPack(pack, inputConfig) {
  if (!pack) return { availability: 'missing', reason: '当前分组还没有登记可合成的图层包。' };
  try {
    const config = validateConfig(inputConfig);
    const info = validPack(pack);
    if (pack.family !== config.family) return { availability: 'unsupported', reason: '组合素材与当前角色分组不一致。' };
    if (config.reference.enabled) return { availability: 'unsupported', reason: '参考图片只在 ChatGPT 中附加；当前预览仍是内置模板，不能导出为已按参考图生成的角色。' };
    const current = resolveCharacter(config).config;
    if (current.camera !== 'front') return { availability: 'unsupported', reason: '所选内置形象是正面固定视图；当前角度只写入 Prompt。' };
    if (current.output === 'storyboard' || current.output === 'pet') return { availability: 'unsupported', reason: '所选内置形象是单张 PNG；分镜或 Pet 输出需要在 ChatGPT 中继续制作。' };
    const activeLayers = selectedLayers(info, current);
    for (const path of VISUAL_PATHS) {
      const before = valueAt(info.base, path), after = valueAt(current, path);
      if (same(before, after)) continue;
      if (!info.editable.has(path)) return { availability: 'unsupported', reason: `“${pathLabel(path)}”只会写入 Prompt；当前画面仍是所选模板，因此不能导出为已应用这些设定的 PNG。` };
      if (TINT_PATHS.has(path) && !FRAME_PATHS.has(path) && !activeLayers.some(layer => layer.tintPath === path)) return { availability: 'unsupported', reason: `当前素材没有“${pathLabel(path)}”的完整渲染配方；画面仍显示所选模板，PNG 导出已停用。` };
    }
    return {
      availability: 'available',
      reason: pack.kind === 'layered-2d'
        ? '当前表情、姿态、已登记配饰状态与背景均有对应的完整静态 PNG 配方。候选效果仍待真实页面美术验收。'
        : '当前内置搭配与背景均按登记配置渲染。候选效果仍待真实页面美术验收。'
    };
  } catch (error) {
    return { availability: 'unsupported', reason: error?.message || '组合素材配置无效。' };
  }
}

const FIELD_LABELS = {
  shape: '角色轮廓', material: '主体材质', fur: '绒毛长度', expressionAccents: '表情点缀',
  faceShape: '脸型', outfit: '服装', eyes: '眼形', eyeScale: '眼睛大小', eyeSpacing: '眼距',
  brows: '眉毛', mouth: '嘴形', expression: '表情', headScale: '头部比例', bodyWidth: '身体宽度',
  hair: '发型', limbs: '肢体', action: '动作', pose: '姿态', framing: '取景范围', camera: '视角',
  background: '背景', aspect: '画面比例', scale: '角色画面尺寸', output: '输出类型',
  motionStyle: '动态样式', motionSpeed: '动态速度', skinMaterial: '皮肤材质', hairMaterial: '头发材质',
  clothMaterial: '服装材质', 'accessories.head': '头部配饰', 'accessories.face': '眼部配饰',
  'accessories.neck': '颈部配饰', 'accessories.prop': '手持道具', 'colors.body': '主体颜色',
  'colors.secondary': '辅助颜色', 'colors.eyes': '眼睛颜色', 'colors.accessory': '配饰颜色',
  'colors.headAccessory': '头饰颜色', 'colors.background': '背景颜色', 'colors.skin': '肤色',
  'colors.hair': '发色', 'colors.clothing': '服装颜色'
};
function pathLabel(path) { return FIELD_LABELS[path] || '角色外观设置'; }

export function resolveCreation(project) {
  const current = parseProjectObject(project);
  const config = clone(current.character);
  const resolved = resolveCharacter(config);
  const artwork = current.creation.artworkId ? clone(getCreationArtwork(current.creation.artworkId)) : null;
  const pack = getCompositionPack(config.family, current.creation.artworkId, config);
  if (current.creation.mode === 'artwork') {
    if (artwork?.status === 'retired') return {
      mode: 'artwork', config, resolved, artwork, pack: pack ? clone(pack) : null,
      availability: 'missing', reason: artwork.retirementReason || '历史形象已撤下。'
    };
    if (!artwork) return {
      mode: 'artwork', config, resolved, artwork: null, pack: pack ? clone(pack) : null,
      availability: 'missing', reason: '当前分组没有登记完整图作品。'
    };
    return {
      mode: 'artwork', config, resolved, artwork, pack: pack ? clone(pack) : null,
      availability: 'available',
      reason: `当前显示的是${artwork.kind==='baseline-candidate'?'固定基准候选':artwork.kind==='look-template'?'内置搭配候选':'固定历史示例'}“${artwork.name}”；参数变化只更新 Prompt，下载始终是该作品原文件。`
    };
  }
  const assessment = inspectCompositionPack(pack, config);
  return {
    mode: 'composer', config, resolved, artwork, pack: pack ? clone(pack) : null,
    availability: assessment.availability,
    reason: assessment.reason
  };
}

export function buildCreationPrompt(project, lang = 'zh') {
  const current = parseProjectObject(project);
  const artwork = current.creation.artworkId ? getCreationArtwork(current.creation.artworkId) : null;
  const pack = getCompositionPack(current.character.family, current.creation.artworkId, current.character);
  const assessment = inspectCompositionPack(pack, current.character);
  const en = lang === 'en';
  let prompt = buildPrompt(current.character, lang);
  let note;
  if (current.creation.mode === 'artwork') {
    if (artwork?.status === 'retired') {
      note = en
        ? `\n\n[Studio output] This historical character image has been withdrawn. The character settings and legacy artwork ID remain in this project for compatibility. No image is available to display or download; this prompt describes the saved character configuration only.`
        : `\n\n【工作台输出说明】${artwork.retirementReason || '历史形象已撤下'}。为兼容旧项目，当前角色设定与旧作品编号仍予保留；没有可展示或下载的原图，本 Prompt 仅描述已保存的角色设定。`;
    } else if (artwork) {
      const candidateKind = artwork.kind==='baseline-candidate'?'baseline candidate':artwork.kind==='look-template'?'built-in look candidate':'historical example';
      const candidateKindZh = artwork.kind==='baseline-candidate'?'固定基准候选':artwork.kind==='look-template'?'内置搭配候选':'固定历史示例';
      note = en
        ? `\n\n[Studio output] “${artwork.name}” is a ${candidateKind} pending real-page visual review. This is a fixed original image; character settings update the Prompt only. Downloading keeps the original file. Attach it yourself in ChatGPT if you want to use it as a reference; the site does not attach images or generate artwork.`
        : `\n\n【工作台输出说明】“${artwork.name}”是${candidateKindZh}，仍待真实网页美术验收。它是固定原图；修改角色设定只更新本 Prompt。下载保留原文件。若要把它作为参考，请自行下载并在 ChatGPT 附加；网站不会自动附图或生成图片。`;
    } else {
      note = en
        ? '\n\n[Studio output] No complete artwork is registered for this family. This prompt describes the character settings only; the site has not generated or exported a matching image. You can attach your own reference in ChatGPT.'
        : '\n\n【工作台输出说明】当前分组没有登记完整作品；本 Prompt 只描述角色设定，网站尚未生成或导出对应图片。需要使用自己的参考图时，请在 ChatGPT 另行附加。';
    }
  } else if (assessment.availability === 'available') {
    const actionOverride = pack?.actionPromptOverrides?.[current.character.action]?.[en ? 'en' : 'zh'];
    const genericAction = ACTIONS[current.character.action]?.[en ? 'english' : 'zh'];
    if (actionOverride && genericAction && prompt.includes(genericAction)) {
      prompt = prompt.replace(genericAction, actionOverride);
    }
    note = '\n\n' + (pack?.outputNotes?.[en ? 'en' : 'zh'] || (en
      ? '[Studio output] This is a supported local 2D composition from a baseline candidate pending real webpage art review. It is not a generated image or a freely rotatable 3D model; this note does not indicate art acceptance. Attach your own reference image in ChatGPT when needed.'
      : '【工作台输出说明】当前为由基准候选图层生成的本地 2D 合成，尚待真实网页美术验收；本说明不表示验收通过。它不是自动生成图片，也不支持自由旋转三维视角。需要参考自己的图片时，请在 ChatGPT 另行附加。'));
  } else {
    const reason = en
      ? current.character.reference.enabled
        ? 'Reference images are only added by you in ChatGPT; this page has not read or transformed one.'
        : assessment.availability === 'missing'
          ? 'No composable layers are registered for this family.'
          : current.character.camera !== 'front'
            ? 'This layer pack supports the front view only.'
            : ['storyboard', 'pet'].includes(current.character.output)
              ? 'This layer pack exports a single PNG and does not support storyboards or Pet files.'
              : 'The layer pack does not cover one or more of the current character settings.'
      : current.character.reference.enabled ? '网站未读取图片，未转换参考图；请在 ChatGPT 另附自己的图片。' : assessment.reason;
    note = en
      ? `\n\n[Studio output] ${reason} This prompt describes the requested character settings; the site has not rendered a current composite image. Attach your own image in ChatGPT if needed.`
      : `\n\n【工作台输出说明】${reason} 本 Prompt 描述所选角色设定；网站尚未合成当前图片。需要使用自己的图片时，请在 ChatGPT 另行附加。`;
  }
  return prompt + note;
}

export function getRegisteredArtworks() {
  return CREATION_ARTWORKS.map(clone);
}

export function isLocalCreationAsset(src) {
  return localAssetPath(src);
}
