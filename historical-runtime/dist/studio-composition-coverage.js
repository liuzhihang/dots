import {compositionFingerprint} from './studio-composition-resolver.js?v=86';

const clone = value => structuredClone(value);
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const record = value => !!value && typeof value === 'object' && !Array.isArray(value);

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (record(value)) return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
}

function keyPart(value) {
  return String(value ?? 'unknown').normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'unknown';
}

export const TEMPLATE_BACKGROUND_MODES = Object.freeze(['transparent']);
export const TEMPLATE_STATE_EXPECTATION = Object.freeze({lookCount: 15, baselineStateCount: 12, fixedTemplateCount: 10, stateCount: 22, backgroundCount: 1, outputCount: 22});
export const COORDINATION_CHECKLIST = Object.freeze([
  Object.freeze({id:'proportion',label:'比例'}),
  Object.freeze({id:'contact',label:'贴合/接触'}),
  Object.freeze({id:'occlusion',label:'遮挡/层序'}),
  Object.freeze({id:'materialLighting',label:'材质/光照'}),
  Object.freeze({id:'palette',label:'配色'})
]);
const coordinationStatuses = new Set(['unreviewed','pass','issue']);
const coordinationDispositions = new Set(['pending','rejected','ready-for-explicit-confirmation']);

/** Keep archive paths short and deterministic; full case IDs stay in the manifest. */
export function coverageCaptureFilename(kind, index, caseId) {
  if (!['template','module'].includes(kind) || !Number.isSafeInteger(index) || index < 0 || typeof caseId !== 'string' || !caseId) throw new TypeError('捕获文件名需要有效范围、顺序和完整用例 ID');
  return `canvas/${kind}-${String(index + 1).padStart(3, '0')}.png`;
}

/** Source bytes use the same stable short-name policy; full asset IDs stay in records. */
export function coverageSourceFilename(index, assetId) {
  if (!Number.isSafeInteger(index) || index < 0 || typeof assetId !== 'string' || !assetId) throw new TypeError('源素材捕获文件名需要有效顺序和素材 ID');
  return `source/asset-${String(index + 1).padStart(3, '0')}.png`;
}

/** Browser capture uses the USTAR name field; reject rather than silently truncate. */
export function validateCaptureTarName(name) {
  if (typeof name !== 'string' || !name) throw new TypeError('USTAR 捕获文件名无效');
  if (new TextEncoder().encode(name).length > 100) throw new RangeError('USTAR 文件名超过 100 字节；请使用短归档名并在清单保留完整用例 ID');
  return name;
}

/** Capture the trusted geometry inputs and resolved draw parameters behind a rendered module. */
export function captureResolvedRenderMetadata(resolution, {catalog = null} = {}) {
  const plan = resolution?.renderPlan;
  if (!record(plan)) return null;
  const recipe = record(plan.recipe) ? plan.recipe : {};
  const modules = Array.isArray(plan.modules) ? plan.modules : Array.isArray(plan.layers) ? plan.layers : [];
  const assetsById = new Map((catalog?.assets ?? []).map(asset => [asset.id, asset]));
  const compositionInputs = resolution.composition?.inputs ?? {};
  const recipeProfileRefs = [];
  const addRecipeProfileRefs = value => {
    const refs = Array.isArray(value) ? value : record(value) ? [value] : [];
    for (const ref of refs) if (!recipeProfileRefs.some(item => canonical(item) === canonical(ref))) recipeProfileRefs.push(structuredClone(ref));
  };
  addRecipeProfileRefs(recipe.fitProfileRefs ?? recipe.fitProfileRef);
  addRecipeProfileRefs(recipe.geometryProfileRefs ?? recipe.geometryProfileRef);
  addRecipeProfileRefs(plan.fitProfileRefs ?? plan.fitProfileRef);
  addRecipeProfileRefs(plan.geometryProfileRefs ?? plan.geometryProfileRef);
  addRecipeProfileRefs(compositionInputs.fitProfileRefs ?? compositionInputs.fitProfileRef);
  addRecipeProfileRefs(compositionInputs.geometryProfileRefs ?? compositionInputs.geometryProfileRef);
  const profileRefs = [...recipeProfileRefs];
  const addProfileRefs = value => {
    const refs = Array.isArray(value) ? value : record(value) ? [value] : [];
    for (const ref of refs) if (!profileRefs.some(item => canonical(item) === canonical(ref))) profileRefs.push(structuredClone(ref));
  };
  for (const layer of modules) {
    addProfileRefs(layer.fitProfileRefs ?? layer.fitProfileRef);
    addProfileRefs(layer.geometryProfileRefs ?? layer.geometryProfileRef);
    const asset = assetsById.get(layer.id ?? layer.assetId);
    addProfileRefs(asset?.fitProfileRefs ?? asset?.fitProfileRef);
    addProfileRefs(asset?.geometryProfileRefs ?? asset?.geometryProfileRef);
  }
  const profileEntries = profileRefs.map(ref => ({
    ref,
    profile: (catalog?.baseGeometryProfiles ?? []).find(item => item.id === ref.id && item.version === ref.version) ?? null
  }));
  const explicitAggregateFitFingerprint = resolution.fitFingerprint
    ?? plan.fitFingerprint
    ?? compositionInputs.fitFingerprint
    ?? null;
  const explicitAggregateFitVersion = resolution.fitVersion
    ?? plan.fitVersion
    ?? compositionInputs.fitVersion
    ?? null;
  const resolverFitRefs = Array.isArray(compositionInputs.fitRefs) ? structuredClone(compositionInputs.fitRefs) : null;
  const layers = modules.map(layer => {
    const asset = assetsById.get(layer.id ?? layer.assetId);
    return {
      id: layer.id ?? layer.assetId ?? null,
      version: layer.version ?? asset?.version ?? null,
      sha256: layer.sha256 ?? asset?.sha256 ?? null,
      z: layer.z ?? null,
      sourceRect: layer.sourceRect ?? null,
      placement: layer.placement ?? layer.transform ?? null,
      rotation: layer.rotation ?? null,
      anchors: layer.anchors ?? null,
      fitPolicy: layer.fitPolicy ?? asset?.fitPolicy ?? null,
      fitProfileRef: layer.fitProfileRef ?? layer.geometryProfileRef ?? asset?.fitProfileRef ?? asset?.geometryProfileRef ?? (recipeProfileRefs.length === 1 ? recipeProfileRefs[0] : null),
      fitProfileRefs: layer.fitProfileRefs ?? layer.geometryProfileRefs ?? asset?.fitProfileRefs ?? asset?.geometryProfileRefs ?? (recipeProfileRefs.length > 1 ? recipeProfileRefs : null),
      sourceParts: layer.sourceParts ?? asset?.sourceParts ?? null,
      fitVersion: layer.fitVersion ?? null,
      fitFingerprint: layer.fitFingerprint ?? null,
      parts: structuredClone(layer.parts ?? []),
      occlusion: layer.occlusion ?? asset?.occlusion ?? null
    };
  });
  const dynamicAssets = modules.map(layer => assetsById.get(layer.id ?? layer.assetId)).filter(asset => asset?.fitPolicy || asset?.sourceParts);
  const fitInputs = dynamicAssets.map(asset => ({
    assetId: asset.id,
    version: asset.version,
    sha256: asset.sha256,
    fitPolicy: structuredClone(asset.fitPolicy),
    sourceParts: structuredClone(asset.sourceParts)
  }));
  const fitResults = dynamicAssets.map(asset => {
    const layer = modules.find(item => (item.id ?? item.assetId) === asset.id) ?? {};
    return {
      assetId: asset.id,
      version: layer.version ?? asset.version,
      sha256: layer.sha256 ?? asset.sha256,
      fitPolicy: structuredClone(layer.fitPolicy ?? asset.fitPolicy),
      sourceParts: structuredClone(layer.sourceParts ?? asset.sourceParts),
      fitProfileRefs: structuredClone(layer.fitProfileRefs ?? layer.geometryProfileRefs ?? (layer.fitProfileRef ? [layer.fitProfileRef] : layer.geometryProfileRef ? [layer.geometryProfileRef] : asset.fitProfileRefs ?? asset.geometryProfileRefs ?? (asset.fitProfileRef ? [asset.fitProfileRef] : asset.geometryProfileRef ? [asset.geometryProfileRef] : recipeProfileRefs))),
      fitVersion: layer.fitVersion ?? null,
      fitFingerprint: layer.fitFingerprint ?? null,
      parts: structuredClone(layer.parts ?? [])
    };
  });
  const resolvedFitFingerprint = explicitAggregateFitFingerprint;
  const resolvedFitVersion = explicitAggregateFitVersion;
  const resolvedFitFingerprints = fitResults.map(item => ({assetId:item.assetId,version:item.version,sha256:item.sha256,fitVersion:item.fitVersion,fitFingerprint:item.fitFingerprint}));
  return {
    kind: plan.kind ?? null,
    width: plan.width ?? null,
    height: plan.height ?? null,
    recipe: {
      id: recipe.id ?? null,
      version: recipe.version ?? null,
      fitProfileRef: recipe.fitProfileRef ?? (recipeProfileRefs.length === 1 ? recipeProfileRefs[0] : null),
      fitProfileRefs: recipe.fitProfileRefs ?? (recipeProfileRefs.length > 1 ? recipeProfileRefs : null),
      geometryProfileRefs: recipe.geometryProfileRefs ?? recipe.geometryProfileRef ?? null
    },
    aggregateFitVersion: explicitAggregateFitVersion,
    aggregateFitFingerprint: explicitAggregateFitFingerprint,
    resolvedFitVersion,
    resolvedFitFingerprint,
    resolverFitRefs,
    resolvedFitFingerprints,
    baseGeometryProfile: profileEntries.length === 1 ? structuredClone(profileEntries[0].profile) : null,
    baseGeometryProfiles: profileEntries.map(item => ({ref:item.ref,profile:item.profile?structuredClone(item.profile):null})),
    fitInputs,
    fitResults,
    resolvedFingerprint: resolution.composition?.resolvedFingerprint ?? null,
    layers
  };
}

/** A declared geometry fit is not accepted into a frozen report without its exact inputs and draw result. */
export function validateResolvedRenderMetadata(metadata, subject) {
  const errors = [];
  const componentRefs = Array.isArray(subject?.componentRefs) ? subject.componentRefs : [];
  const dynamicComponents = componentRefs.filter(item => item?.fitPolicy || item?.sourceParts);
  const normalizeRefs = value => (Array.isArray(value) ? value.filter(record) : record(value) ? [value] : []).sort((left,right)=>canonical(left).localeCompare(canonical(right)));
  const globalRefs = normalizeRefs(subject?.fitProfileRefs ?? subject?.fitProfileRef ?? subject?.geometryProfileRefs ?? subject?.geometryProfileRef);
  const componentRefsList = component => normalizeRefs(component?.fitProfileRefs ?? component?.fitProfileRef ?? component?.geometryProfileRefs ?? component?.geometryProfileRef);
  const allSubjectProfileRefs = [...globalRefs];
  for (const component of dynamicComponents) {
    for (const ref of componentRefsList(component)) if (!allSubjectProfileRefs.some(item => canonical(item) === canonical(ref))) allSubjectProfileRefs.push(ref);
  }
  if (!allSubjectProfileRefs.length && !dynamicComponents.length) return {valid:true,errors};
  if (!record(metadata)) errors.push('动态适配捕获缺少 renderMetadata');
  if (!allSubjectProfileRefs.length) errors.push('动态适配协调 subject 缺少 fitProfileRef');
  if (!dynamicComponents.length) errors.push('动态适配协调 subject 缺少带 fitPolicy/sourceParts 的组件引用');
  for (const ref of allSubjectProfileRefs) if (typeof ref.fingerprint !== 'string' || !ref.fingerprint) errors.push(`fitProfileRef ${ref.id ?? '(missing)'} 缺少 profile 指纹`);
  const metadataRecipeRefs = normalizeRefs(metadata?.recipe?.fitProfileRefs ?? metadata?.recipe?.fitProfileRef ?? metadata?.recipe?.geometryProfileRefs ?? metadata?.recipe?.geometryProfileRef);
  if (canonical(metadataRecipeRefs) !== canonical(globalRefs)) errors.push('捕获 fitProfileRefs 与协调 subject 不一致');
  const profiles = Array.isArray(metadata?.baseGeometryProfiles) ? metadata.baseGeometryProfiles : [];
  for (const ref of allSubjectProfileRefs) {
    const entry = profiles.find(item => canonical(item.ref) === canonical(ref));
    if (!entry || !record(entry.profile) || entry.profile.id !== ref.id || entry.profile.version !== ref.version) errors.push(`捕获缺少精确版本的 geometry profile ${ref.id ?? '(missing)'}`);
  }
  const expectedProfiles = Array.isArray(subject?.baseGeometryProfiles) ? subject.baseGeometryProfiles : record(subject?.baseGeometryProfile) ? [subject.baseGeometryProfile] : [];
  for (const expected of expectedProfiles) {
    if (!record(expected)) { errors.push('协调 subject 含缺失的 geometry profile'); continue; }
    const captured = profiles.find(item => item.profile?.id === expected.id && item.profile?.version === expected.version)?.profile;
    if (!captured || canonical(captured) !== canonical(expected)) errors.push(`捕获的 geometry profile ${expected.id} 内容与协调 subject 不一致`);
  }
  if (globalRefs.length === 1 && subject?.baseGeometryProfile && canonical(metadata?.baseGeometryProfile) !== canonical(subject.baseGeometryProfile)) errors.push('捕获的 base geometry profile 与协调 subject 内容不一致');
  const fitInputs = Array.isArray(metadata?.fitInputs) ? metadata.fitInputs : [];
  const fitResults = Array.isArray(metadata?.fitResults) ? metadata.fitResults : [];
  const layers = Array.isArray(metadata?.layers) ? metadata.layers : [];
  const resolverFitRefs = Array.isArray(metadata?.resolverFitRefs) ? metadata.resolverFitRefs : [];
  const sortedResolverIds = resolverFitRefs.map(item => item?.assetId);
  if (resolverFitRefs.length !== dynamicComponents.length || new Set(sortedResolverIds).size !== resolverFitRefs.length || canonical(sortedResolverIds) !== canonical([...sortedResolverIds].sort())) errors.push('resolver fitRefs 必须逐项绑定全部动态组件、无重复并按 assetId 排序');
  if (typeof metadata?.aggregateFitVersion !== 'string' || !metadata.aggregateFitVersion) errors.push('动态适配捕获缺少 resolver 聚合 fit 版本');
  if (typeof metadata?.aggregateFitFingerprint !== 'string' || !/^[a-f0-9]{16}$/.test(metadata.aggregateFitFingerprint)) errors.push('动态适配捕获缺少 resolver 聚合 fit 指纹');
  if (metadata?.resolvedFitVersion !== metadata?.aggregateFitVersion || metadata?.resolvedFitFingerprint !== metadata?.aggregateFitFingerprint) errors.push('聚合 fit 版本/指纹别名与 resolver 原始聚合值不一致');
  if (resolverFitRefs.length && typeof metadata?.aggregateFitFingerprint === 'string' && compositionFingerprint(resolverFitRefs) !== metadata.aggregateFitFingerprint) errors.push('resolver 聚合 fit 指纹与完整排序 fitRefs 不一致');
  for (const component of dynamicComponents) {
    const input = fitInputs.find(item => item.assetId === component.id);
    if (!input || input.version !== component.version || input.sha256 !== component.sha256 || canonical(input.fitPolicy) !== canonical(component.fitPolicy) || canonical(input.sourceParts) !== canonical(component.sourceParts)) {
      errors.push(`动态 fit 输入未精确绑定组件 ${component.id}`);
      continue;
    }
    const result = fitResults.find(item => item.assetId === component.id);
    if (!result || result.version !== component.version || result.sha256 !== component.sha256 || canonical(result.fitPolicy) !== canonical(component.fitPolicy) || canonical(result.sourceParts) !== canonical(component.sourceParts)) {
      errors.push(`动态 fit 结果未精确绑定组件 ${component.id}`);
      continue;
    }
    const expectedRefs = componentRefsList(component).length ? componentRefsList(component) : globalRefs;
    if (canonical(normalizeRefs(result.fitProfileRefs)) !== canonical(expectedRefs)) errors.push(`组件 ${component.id} 的 fitProfileRefs 与协调 subject 不一致`);
    if (typeof result.fitVersion !== 'string' || !result.fitVersion) errors.push(`组件 ${component.id} 缺少已解算 fit 版本`);
    if (typeof result.fitFingerprint !== 'string' || !result.fitFingerprint) errors.push(`组件 ${component.id} 缺少已解算 fit 指纹`);
    const resolverRef = resolverFitRefs.find(item => item?.assetId === component.id);
    if (!resolverRef || resolverRef.fitVersion !== result.fitVersion || resolverRef.fitFingerprint !== result.fitFingerprint) errors.push(`resolver fitRef 未精确绑定组件 ${component.id} 的实际模块解算`);
    const resolverProfileRefs = normalizeRefs(resolverRef?.fitProfileRefs ?? resolverRef?.fitProfileRef);
    if (canonical(resolverProfileRefs) !== canonical(expectedRefs)) errors.push(`resolver fitRef ${component.id} 的 geometry profile 与协调 subject 不一致`);
    const layer = layers.find(item => item.id === component.id);
    const layerParts = Array.isArray(result.parts) ? result.parts : layer?.parts;
    if (Array.isArray(result.parts) && Array.isArray(layer?.parts) && canonical(result.parts) !== canonical(layer.parts)) errors.push(`组件 ${component.id} 的 fitResults 子图层与实际绘制 layer 记录不一致`);
    const expectedPartCount = Array.isArray(component.sourceParts?.parts) ? component.sourceParts.parts.length : 0;
    if (!layer || !Array.isArray(layerParts) || layerParts.length !== expectedPartCount || expectedPartCount === 0) {
      errors.push(`组件 ${component.id} 的已解算子图层数与 sourceParts 不一致`);
      continue;
    }
    for (const part of layerParts) {
      if (!record(part?.sourceRect) || !record(part?.transform ?? part?.placement) || !Number.isFinite(part?.z) || !record(part?.occlusion)) errors.push(`组件 ${component.id} 的已解算子图层缺少源矩形、变换、层序或遮挡规则`);
    }
    if (layer.fitFingerprint !== result.fitFingerprint || layer.fitVersion !== result.fitVersion) errors.push(`组件 ${component.id} 图层 fit 指纹/版本与其 per-module fit 结果不一致`);
  }
  const expectedFitFingerprints = fitResults.map(item => ({assetId:item.assetId,version:item.version,sha256:item.sha256,fitVersion:item.fitVersion,fitFingerprint:item.fitFingerprint}));
  if (canonical(metadata?.resolvedFitFingerprints ?? []) !== canonical(expectedFitFingerprints)) errors.push('per-component fit 指纹清单与模块解算结果不一致');
  return {valid:errors.length === 0,errors};
}

/** A pending review is explicit data; empty/missing annotations never imply a pass. */
export function createDefaultCoordinationReview({adaptationId, subject} = {}) {
  if (typeof adaptationId !== 'string' || !/^[a-f0-9]{64}$/.test(adaptationId) || !record(subject)) throw new TypeError('协调性复核必须绑定完整适配指纹和 subject');
  return {
    schema: 'dot-studio-coordination-review/v1',
    adaptationId,
    subject: clone(subject),
    checklist: Object.fromEntries(COORDINATION_CHECKLIST.map(item => [item.id, 'unreviewed'])),
    checklistNotes: Object.fromEntries(COORDINATION_CHECKLIST.map(item => [item.id, ''])),
    disposition: 'pending',
    dispositionReason: '',
    updatedAt: null,
    decisionSource: 'internal-atlas-review'
  };
}

export function validateCoordinationReview(review) {
  const errors = [];
  if (!record(review) || review.schema !== 'dot-studio-coordination-review/v1') errors.push('协调性复核 schema 无效');
  if (typeof review?.adaptationId !== 'string' || !/^[a-f0-9]{64}$/.test(review.adaptationId)) errors.push('协调性复核缺少精确适配指纹');
  if (!record(review?.subject)) errors.push('协调性复核缺少精确适配 subject');
  const checklist = record(review?.checklist) ? review.checklist : {};
  if (Object.keys(checklist).length !== COORDINATION_CHECKLIST.length || COORDINATION_CHECKLIST.some(item => !coordinationStatuses.has(checklist[item.id]))) errors.push('协调性清单必须逐项记录五项合法状态');
  const notes = record(review?.checklistNotes) ? review.checklistNotes : {};
  if (Object.keys(notes).length !== COORDINATION_CHECKLIST.length || COORDINATION_CHECKLIST.some(item => typeof notes[item.id] !== 'string')) errors.push('协调性清单备注字段不完整');
  if (!coordinationDispositions.has(review?.disposition)) errors.push('协调性复核结论无效');
  if (review?.disposition === 'ready-for-explicit-confirmation' && COORDINATION_CHECKLIST.some(item => checklist[item.id] !== 'pass')) errors.push('只有五项协调性检查都显式 pass 才可标记等待用户确认');
  if (review?.disposition === 'rejected' && (typeof review.dispositionReason !== 'string' || !review.dispositionReason.trim())) errors.push('拒绝当前适配必须记录原因');
  if (review?.decisionSource !== 'internal-atlas-review') errors.push('协调性复核来源必须标记为内部图鉴人工检查');
  return {valid: errors.length === 0, errors};
}

/** A stored review belongs only to the exact adaptation subject and version. */
export function coordinationReviewMatches(review, {adaptationId, subject} = {}) {
  if (typeof adaptationId !== 'string' || !record(subject) || !validateCoordinationReview(review).valid) return false;
  return review.adaptationId === adaptationId && canonical(review.subject) === canonical(subject);
}

/** Summarize human coherence review separately from engineering coverage and art approval. */
export function summarizeCoordinationReviews(reviews = []) {
  const summary = {
    adaptations: reviews.length,
    disposition: {pending:0,rejected:0,readyForExplicitConfirmation:0},
    engineering: {available:0,blocked:0,unknown:0},
    artApproval: {pending:0,rejected:0,approved:0,unknown:0},
    checklist: Object.fromEntries(COORDINATION_CHECKLIST.map(item => [item.id,{unreviewed:0,pass:0,issue:0}])),
    invalid: []
  };
  const seen = new Set();
  for (const review of reviews) {
    const validation = validateCoordinationReview(review);
    if (!validation.valid) summary.invalid.push({adaptationId:review?.adaptationId ?? null,errors:validation.errors});
    if (seen.has(review?.adaptationId)) summary.invalid.push({adaptationId:review.adaptationId,errors:['重复协调性适配记录']});
    seen.add(review?.adaptationId);
    const dispositionKey = review?.disposition === 'ready-for-explicit-confirmation' ? 'readyForExplicitConfirmation' : review?.disposition;
    if (Object.hasOwn(summary.disposition, dispositionKey)) summary.disposition[dispositionKey]++;
    const engineering = review?.engineeringStatus;
    summary.engineering[engineering === 'available' ? 'available' : engineering === 'blocked' ? 'blocked' : 'unknown']++;
    const approval = review?.artApprovalStatus;
    summary.artApproval[approval === 'approved' ? 'approved' : approval === 'rejected' ? 'rejected' : approval === 'pending' ? 'pending' : 'unknown']++;
    for (const item of COORDINATION_CHECKLIST) {
      const status = review?.checklist?.[item.id];
      if (Object.hasOwn(summary.checklist[item.id], status)) summary.checklist[item.id][status]++;
    }
  }
  return summary;
}

export function verifyDeclaredAssetEvidence(declared, observed = {}) {
  const errors = [];
  if (!record(declared) || typeof declared.id !== 'string') errors.push('缺少稳定素材 ID');
  if (observed.exists === false) errors.push('声明素材文件缺失');
  if (typeof declared?.src !== 'string' || !/^\.\/assets\/[a-zA-Z0-9._/-]+$/.test(declared.src) || declared.src.split('/').includes('..')) errors.push('声明素材来源不是登记的本站资源');
  if (typeof declared?.version !== 'string' || !declared.version) errors.push('声明素材版本缺失');
  if (typeof declared?.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(declared.sha256)) errors.push('声明素材 SHA-256 无效');
  if (observed.version !== undefined && observed.version !== declared?.version) errors.push('素材版本与登记引用不一致');
  if (observed.sha256 !== undefined && observed.sha256 !== declared?.sha256) errors.push('素材 SHA-256 与登记引用不一致');
  if (Number.isInteger(declared?.width) && Number.isInteger(observed.width) && observed.width !== declared.width) errors.push('素材实际宽度与登记尺寸不一致');
  if (Number.isInteger(declared?.height) && Number.isInteger(observed.height) && observed.height !== declared.height) errors.push('素材实际高度与登记尺寸不一致');
  if (observed.sha256 === undefined && observed.exists !== false) errors.push('未读取实际素材 SHA-256');
  if (!Number.isInteger(observed.width) || !Number.isInteger(observed.height)) errors.push('未读取实际素材尺寸');
  const confirmedFailure = observed.exists === false
    || (observed.version !== undefined && observed.version !== declared?.version)
    || (observed.sha256 !== undefined && observed.sha256 !== declared?.sha256)
    || (Number.isInteger(declared?.width) && Number.isInteger(observed.width) && observed.width !== declared.width)
    || (Number.isInteger(declared?.height) && Number.isInteger(observed.height) && observed.height !== declared.height)
    || typeof declared?.src !== 'string' || !/^\.\/assets\/[a-zA-Z0-9._/-]+$/.test(declared.src) || declared.src.split('/').includes('..')
    || typeof declared?.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(declared.sha256);
  return {status: errors.length ? confirmedFailure ? 'fail' : 'blocked' : 'pass', errors};
}

/** Validate alpha counts read from decoded PNG pixels; every output needs visible pixels and real transparency. */
export function validateTransparentOutputAlpha(stats) {
  const errors = [];
  if (!record(stats)) return {valid:false, errors:['PNG alpha 像素统计缺失']};
  const {width, height, transparentPixels, opaquePixels, partialAlphaPixels, alphaBounds} = stats;
  if (!Number.isSafeInteger(width) || width <= 0 || !Number.isSafeInteger(height) || height <= 0) errors.push('PNG 尺寸无效');
  const pixelCount = Number.isSafeInteger(width) && Number.isSafeInteger(height) && width > 0 && height > 0 ? width * height : 0;
  for (const [name, count] of [['transparentPixels',transparentPixels],['opaquePixels',opaquePixels],['partialAlphaPixels',partialAlphaPixels]]) {
    if (!Number.isSafeInteger(count) || count < 0) errors.push(`${name} 不是有效像素计数`);
  }
  if (!errors.length && transparentPixels + opaquePixels + partialAlphaPixels !== pixelCount) errors.push('PNG alpha 像素计数与画布尺寸不一致');
  if (Number.isSafeInteger(transparentPixels) && transparentPixels <= 0) errors.push('PNG 没有 alpha 为 0 的透明像素');
  const visiblePixels = (Number.isSafeInteger(opaquePixels) ? opaquePixels : 0) + (Number.isSafeInteger(partialAlphaPixels) ? partialAlphaPixels : 0);
  if (visiblePixels <= 0) errors.push('PNG 没有可见角色像素');
  if (!record(alphaBounds) || !Number.isSafeInteger(alphaBounds.x) || !Number.isSafeInteger(alphaBounds.y) || !Number.isSafeInteger(alphaBounds.width) || !Number.isSafeInteger(alphaBounds.height)
    || alphaBounds.x < 0 || alphaBounds.y < 0 || alphaBounds.width <= 0 || alphaBounds.height <= 0
    || (pixelCount && (alphaBounds.x + alphaBounds.width > width || alphaBounds.y + alphaBounds.height > height))) {
    errors.push('PNG 可见像素边界无效');
  }
  return {valid:errors.length === 0, errors, transparentPixels, visiblePixels, alphaBounds:record(alphaBounds) ? structuredClone(alphaBounds) : null};
}

/** Build one transparent output case per declared template state; backgrounds are not a coverage dimension. */
export function buildTemplateCoverageCases({states = [], backgrounds = TEMPLATE_BACKGROUND_MODES, resolver = null, expected = TEMPLATE_STATE_EXPECTATION} = {}) {
  const cases = [];
  const uniqueLooks = new Set(states.map(state => state.lookId).filter(Boolean));
  const stateIds = new Set();
  const integrity = [];
  if (!Array.isArray(backgrounds) || backgrounds.length !== 1 || backgrounds[0] !== 'transparent') {
    integrity.push({code:'unsupported-background-override',message:'覆盖只支持 transparent 输出；背景不再是可选组合维度'});
  }
  for (const state of states) {
    if (!state?.id || !state?.artworkId || !state?.recipeId || !Array.isArray(state.assetRefs)) {
      integrity.push({code: 'invalid-state-declaration', stateId: state?.id ?? null, message: '模板状态缺少稳定身份或素材引用'});
    }
    if (state?.id && stateIds.has(state.id)) integrity.push({code: 'duplicate-state-id', stateId: state.id, message: '模板状态 ID 重复'});
    if (state?.id) stateIds.add(state.id);
    for (const background of TEMPLATE_BACKGROUND_MODES) {
      const id = `template:${keyPart(state?.id)}:transparent`;
      const config = state?.config ? clone(state.config) : null;
      if (config) config.background = 'transparent';
      let resolution = null;
      let resolverError = '';
      if (typeof resolver === 'function' && config) {
        try { resolution = resolver({character: config, artworkId: state.artworkId, recipeId: state.recipeId}); }
        catch (error) { resolverError = error?.message || '组合解算失败'; }
      }
      const resolvable = resolution?.availability === 'available' && !!resolution.composition && !!resolution.renderPlan;
      cases.push({
        id, kind: 'template-output', declaredRequired: true,
        lookId: state?.lookId ?? null, artworkId: state?.artworkId ?? null,
        stateId: state?.stateId ?? state?.recipeId ?? null, recipeId: state?.recipeId ?? null,
        background, backgroundCount:1, view: 'front', width: state?.width ?? null, height: state?.height ?? null,
        assetRefs: clone(state?.assetRefs ?? []), assets: clone(state?.assets ?? []),
        config, composition: clone(resolution?.composition ?? null), renderPlan: clone(resolution?.renderPlan ?? null),
        approvalStatus: state?.approvalStatus ?? 'unknown', engineeringStatus: state?.engineeringStatus ?? 'unknown',
        resolvable, executionStatus: resolvable ? 'blocked' : 'blocked',
        reason: resolverError || resolution?.reason || (resolver ? '模板当前无法解算' : '尚未执行真实渲染'),
        evidence: null
      });
      if (typeof resolver === 'function' && !resolvable) integrity.push({code: 'declared-template-unresolvable', caseId: id, message: resolverError || resolution?.reason || '声明状态不可解算'});
    }
  }
  const observed = {
    lookCount: uniqueLooks.size,
    stateCount: states.length,
    baselineStateCount: states.filter(state => state?.artworkId?.startsWith('candidate-')).length,
    fixedTemplateCount: states.filter(state => !state?.artworkId?.startsWith('candidate-')).length,
    backgroundCount: TEMPLATE_BACKGROUND_MODES.length,
    outputCount: cases.length
  };
  for (const key of ['lookCount', 'stateCount', 'baselineStateCount', 'fixedTemplateCount', 'backgroundCount', 'outputCount']) {
    if (expected?.[key] !== undefined && observed[key] !== expected[key]) integrity.push({code: 'inventory-count-mismatch', field: key, expected: expected[key], actual: observed[key], message: `${key} 目录数与当前验收基线不符`});
  }
  return {cases, integrity, inventory: observed, expected: clone(expected)};
}

const statusValues = new Set(['pass', 'fail', 'blocked', 'excluded']);

/** Summarize execution without letting a failed declared asset disappear from the denominator. */
export function summarizeCoverage(cases = [], results = [], {expectedDeclaredCount = null} = {}) {
  const resultById = new Map(results.map(result => [result.id, result]));
  const denominator = [];
  const exclusions = [];
  const issues = [];
  for (const item of cases) {
    const result = resultById.get(item.id);
    const declared = item.declaredRequired !== false;
    const hardExclusion = item.hardConstraintExcluded === true;
    if (hardExclusion) {
      if (!item.hardConstraint || !item.exclusionReason) {
        issues.push({code: 'unexplained-hard-exclusion', caseId: item.id});
        denominator.push({...item, executionStatus: result?.status ?? 'blocked', reason: '硬约束排除缺少依据，保留在必检分母'});
      } else exclusions.push({...item, executionStatus: 'excluded', hardConstraint: item.hardConstraint, exclusionReason: item.exclusionReason});
      continue;
    }
    if (!declared) continue;
    const status = statusValues.has(result?.status) && result.status !== 'excluded' ? result.status : 'blocked';
    denominator.push({...item, executionStatus: status, reason: result?.reason ?? (status === 'blocked' ? '尚无执行结果' : ''), evidence: result?.evidence ?? null});
  }
  if (expectedDeclaredCount !== null && denominator.length + exclusions.length !== expectedDeclaredCount) {
    issues.push({code: 'declared-denominator-mismatch', expected: expectedDeclaredCount, actual: denominator.length + exclusions.length});
  }
  const counts = denominator.reduce((total, item) => { total[item.executionStatus]++; return total; }, {pass: 0, fail: 0, blocked: 0});
  const activeDeclarations = cases.some(item => item.declaredRequired !== false);
  if (activeDeclarations && denominator.length === 0 && exclusions.length === 0) issues.push({code: 'empty-denominator-with-active-declarations'});
  if (activeDeclarations && cases.filter(item => item.declaredRequired !== false).every(item => item.hardConstraintExcluded === true) && denominator.length === 0) {
    issues.push({code: 'all-required-cases-excluded', message: '所有必检声明不得通过硬约束排除清空分母'});
  }
  const total = denominator.length;
  const passed = total > 0 && counts.pass === total && issues.length === 0;
  return {
    denominator: total,
    hardConstraintExcluded: exclusions.length,
    resolvable: cases.filter(item => item.declaredRequired !== false && !item.hardConstraintExcluded && item.resolvable === true).length,
    executed: counts.pass + counts.fail,
    counts,
    issues,
    result: passed ? 'pass' : counts.fail > 0 || issues.length > 0 ? 'fail' : 'blocked',
    cases: denominator,
    exclusions
  };
}

function supported(asset, base, pose) {
  const bases = asset.baseIds ?? [];
  const poses = asset.poses ?? [];
  // A registered PNG state has exactly one pose; asset-wide pose lists do not
  // grant every supported pose to every base state. Generic fixture bases may
  // omit poseId when they deliberately model a layout with multiple poses.
  return (typeof base.poseId !== 'string' || base.poseId === pose) &&
    (bases.includes(base.id) || bases.includes(base.artworkId)) && poses.includes(pose);
}

function excludedPair(a, b, constraints = []) {
  const pair = new Set([a.id, b.id]);
  if ((a.excludes ?? []).some(id => pair.has(id)) || (b.excludes ?? []).some(id => pair.has(id))) return {constraint: 'asset.excludes', reason: '素材契约声明互斥'};
  const slotsA = new Set(a.slots ?? []), slotsB = new Set(b.slots ?? []);
  if ([...slotsA].some(slot => slotsB.has(slot)) && !(constraints.some(rule => rule.kind === 'slotCoexistence' && rule.assetIds?.every(id => pair.has(id))))) {
    return {constraint: 'slot-occupancy', reason: '两个素材占用同一槽位且没有显式共存配方'};
  }
  for (const rule of constraints) {
    if (rule.kind === 'exclusive' && rule.assetIds?.length === 2 && rule.assetIds.every(id => pair.has(id))) return {constraint: rule.id ?? 'declared-exclusive', reason: rule.reason ?? '目录声明素材互斥'};
  }
  return null;
}

function compatiblePair(a, b, base, pose, constraints) {
  if (!supported(a, base, pose) || !supported(b, base, pose)) return {constraint: 'base-or-pose-support', reason: '至少一项素材没有声明支持该基底与姿态'};
  const excluded = excludedPair(a, b, constraints);
  if (excluded) return excluded;
  for (const asset of [a, b]) {
    const missing = (asset.dependencies ?? []).filter(id => ![a.id, b.id].includes(id));
    if (missing.length) return {constraint: 'asset.dependencies', reason: `${asset.id} 缺少依赖素材 ${missing.join(', ')}`};
  }
  return null;
}

function cartesian(domains, visit, index = 0, values = {}) {
  if (index >= domains.length) return visit(values);
  const [key, options] = domains[index];
  for (const value of options) {
    values[key] = value;
    cartesian(domains, visit, index + 1, values);
  }
  delete values[key];
}

function seededRandom(seed) {
  let state = 2166136261;
  for (const char of String(seed)) state = Math.imul(state ^ char.charCodeAt(0), 16777619) >>> 0;
  return () => {
    state ^= state << 13; state ^= state >>> 17; state ^= state << 5;
    return (state >>> 0) / 0x100000000;
  };
}

function combinationCount(total, choose) {
  if (choose < 0 || choose > total) return 0;
  let result = 1;
  for (let index = 1; index <= Math.min(choose, total - choose); index++) result = result * (total - index + 1) / index;
  return Math.floor(result);
}

function visitCombinations(items, size, visit, index = 0, selected = []) {
  if (selected.length === size) { visit([...selected]); return; }
  const remaining = size - selected.length;
  for (let cursor = index; cursor <= items.length - remaining; cursor++) {
    selected.push(items[cursor]);
    visitCombinations(items, size, visit, cursor + 1, selected);
    selected.pop();
  }
}

/**
 * Builds required module coverage from declared capabilities. This generator never
 * treats missing files as incompatibility; only explicit constraints are excluded.
 */
export function buildModularCoverageCases({assets = [], baseStates = [], recipes = [], hardConstraints = [], seed = 'dot-studio-coverage-v1', maxCases = 50000, samplesPerSize = 4, maxSampleAttempts = 256} = {}) {
  if (!Number.isInteger(samplesPerSize) || samplesPerSize < 0) throw new RangeError('samplesPerSize 必须是非负整数');
  if (!Number.isInteger(maxSampleAttempts) || maxSampleAttempts < 1) throw new RangeError('maxSampleAttempts 必须是正整数');
  const cases = [], exclusions = [], seen = new Set();
  const add = item => {
    if (cases.length + exclusions.length >= maxCases) throw new Error(`組合覆盖用例超过安全上限 ${maxCases}`);
    const id = item.id ?? `module:${keyPart(item.coverageKind)}:${keyPart(item.baseId)}:${keyPart(item.poseId)}:${item.assetIds.map(keyPart).join('+')}`;
    if (seen.has(id)) return;
    seen.add(id);
    if (item.hardConstraintExcluded) exclusions.push({...item, id, declaredRequired: true});
    else cases.push({...item, id, declaredRequired: true, executionStatus: 'blocked', resolvable: false, reason: '尚未执行真实解算/渲染'});
  };
  const declaredAssets = assets.filter(asset => asset && typeof asset.id === 'string');
  const uniqueBases = baseStates.filter(base => base && typeof base.id === 'string');

  // All declared single-asset × supported base × supported pose pairs.
  for (const asset of declaredAssets) for (const base of uniqueBases) for (const poseId of asset.poses ?? []) {
    if (!supported(asset, base, poseId)) continue;
    add({coverageKind: 'single-asset', baseId: base.id, artworkId: base.artworkId, poseId, assetIds: [asset.id], factors: {asset: asset.id, base: base.id, pose: poseId}, assetVersions: [{id: asset.id, version: asset.version ?? null, sha256: asset.sha256 ?? null}]});
  }

  // Valid pairwise relationships for assets sharing a declared base and pose.
  for (const base of uniqueBases) {
    const poses = [...new Set(declaredAssets.flatMap(asset => asset.poses ?? []))].sort();
    for (const poseId of poses) {
      const candidates = declaredAssets.filter(asset => supported(asset, base, poseId)).sort((a,b)=>a.id.localeCompare(b.id));
      for (let left = 0; left < candidates.length; left++) for (let right = left + 1; right < candidates.length; right++) {
        const a = candidates[left], b = candidates[right];
        const exclusion = compatiblePair(a, b, base, poseId, hardConstraints);
        const item = {coverageKind: 'pairwise', baseId: base.id, artworkId: base.artworkId, poseId, assetIds: [a.id, b.id].sort(), factors: {assetA: a.id, assetB: b.id, base: base.id, pose: poseId}, assetVersions: [a, b].map(asset => ({id: asset.id, version: asset.version ?? null, sha256: asset.sha256 ?? null}))};
        if (exclusion) add({...item, hardConstraintExcluded: true, hardConstraint: exclusion.constraint, exclusionReason: exclusion.reason});
        else add(item);
      }
      for (const size of [3,4].filter(value => candidates.length >= value)) {
        const theoreticalCount = combinationCount(candidates.length, size);
        const targetSamples = Math.min(samplesPerSize, theoreticalCount);
        const sampled = new Set();
        let attempts = 0;
        const addCombination = (chosenAssets, coverageKind) => {
          const chosenIds = chosenAssets.map(asset => asset.id).sort();
          const sampleKey = chosenIds.join('|');
          if (sampled.has(sampleKey)) return;
          sampled.add(sampleKey);
          let exclusion = null;
          for (let left = 0; left < chosenAssets.length && !exclusion; left++) for (let right = left + 1; right < chosenAssets.length && !exclusion; right++) exclusion = compatiblePair(chosenAssets[left],chosenAssets[right],base,poseId,hardConstraints);
          const item = {coverageKind,seed,baseId:base.id,artworkId:base.artworkId,poseId,assetIds:chosenIds,factors:{assetIds:chosenIds,base:base.id,pose:poseId},propertyChecks:['deterministic-resolution','hard-constraints-preserved','resource-refs-stable'],assetVersions:chosenAssets.map(asset=>({id:asset.id,version:asset.version??null,sha256:asset.sha256??null}))};
          if (exclusion) add({...item,hardConstraintExcluded:true,hardConstraint:exclusion.constraint,exclusionReason:exclusion.reason});
          else add(item);
        };
        // Exhaust small spaces. Only larger spaces use a deterministic seed sample.
        if (theoreticalCount <= maxSampleAttempts) {
          visitCombinations(candidates, size, chosen => addCombination(chosen, `exhaustive-${size}-way`));
        } else {
          const random = seededRandom(`${seed}:${base.id}:${poseId}:${size}`);
          while (sampled.size < targetSamples && attempts < maxSampleAttempts) {
            attempts++;
            const selection = new Set();
            while (selection.size < size) selection.add(candidates[Math.floor(random() * candidates.length)].id);
            const chosenAssets = [...selection].sort().map(id => candidates.find(asset => asset.id === id));
            const before = sampled.size;
            addCombination(chosenAssets, 'seeded-sample');
            // Hard-excluded tuples are recorded but do not satisfy the valid render sample target.
            if (sampled.size > before && exclusions.some(item => item.coverageKind === 'seeded-sample' && item.baseId === base.id && item.poseId === poseId && item.assetIds.join('|') === chosenAssets.map(asset => asset.id).sort().join('|'))) sampled.delete(chosenAssets.map(asset => asset.id).sort().join('|'));
          }
          if (sampled.size < targetSamples) {
            add({id:`seeded-sample-shortfall:${keyPart(base.id)}:${keyPart(poseId)}:${size}`,coverageKind:'seeded-sample-shortfall',seed,baseId:base.id,artworkId:base.artworkId,poseId,assetIds:[],requestedSamples:targetSamples,generatedSamples:sampled.size,attempts,factors:{size,base:base.id,pose:poseId},declarationError:'固定 seed 未能生成要求数量的有效高阶组合；保留为 blocked 必检项'});
          }
        }
      }
    }
  }

  // Explicit recipe high-risk groups only. factorDomains may be supplied by the catalog
  // adapter; otherwise asset.<name> resolves only against assets that explicitly name
  // that risk group and matching stable slot/category, never arbitrary category guesses.
  for (const recipe of recipes) for (const group of recipe.highRiskGroups ?? []) {
    const factorIds = group.factorIds ?? [];
    const strength = group.strength;
    if (!group.id || ![3, 4].includes(strength) || factorIds.length !== strength) {
      add({id: `risk-invalid:${keyPart(group.id)}`, coverageKind: 'high-risk-invalid-declaration', baseId: recipe.baseId ?? null, poseId: recipe.poseId ?? null, assetIds: recipe.assetIds ?? [], factors: {groupId: group.id ?? null, factorIds: clone(factorIds)}, declarationError: '高风险组必须显式声明 id、3/4 个 factorIds 与对应 strength'});
      continue;
    }
    const domains = factorIds.map(factorId => {
      if (record(group.factorDomains) && Array.isArray(group.factorDomains[factorId])) return [factorId, group.factorDomains[factorId]];
      if (factorId.startsWith('asset.')) {
        const dimension = factorId.slice('asset.'.length);
        return [factorId, declaredAssets.filter(asset => (asset.riskGroups ?? []).includes(group.id) && ((asset.slots ?? []).includes(dimension) || asset.category === dimension)).map(asset => asset.id)];
      }
      if (factorId === 'base') return [factorId, uniqueBases.map(base => base.id)];
      if (factorId.startsWith('base.')) {
        const path = factorId.slice('base.'.length).split('.');
        const values = uniqueBases.map(base => path.reduce((node,key)=>node?.[key],base) ?? path.reduce((node,key)=>node?.[key],base.config)).filter(value => value !== undefined);
        return [factorId, [...new Map(values.map(value => [canonical(value), value])).values()]];
      }
      if (factorId === 'pose') return [factorId, [...new Set(declaredAssets.flatMap(asset => asset.poses ?? []))].sort()];
      if (factorId.startsWith('pose.')) {
        const path = factorId.slice('pose.'.length).split('.');
        const values = uniqueBases.map(base => path.reduce((node,key)=>node?.[key],base.config) ?? path.reduce((node,key)=>node?.[key],base)).filter(value => value !== undefined);
        return [factorId, [...new Map(values.map(value => [canonical(value), value])).values()]];
      }
      return [factorId, []];
    });
    const missingDomain = domains.find(([, values]) => !values.length);
    if (missingDomain) {
      add({id: `risk-unresolved:${keyPart(group.id)}:${keyPart(missingDomain[0])}`, coverageKind: 'high-risk-unresolved-domain', baseId: recipe.baseId ?? null, poseId: recipe.poseId ?? null, assetIds: recipe.assetIds ?? [], factors: {groupId: group.id, factorIds: clone(factorIds)}, declarationError: `未提供高风险因子 ${missingDomain[0]} 的可信取值域`});
      continue;
    }
    cartesian(domains, values => {
      const assetIds = [...new Set(Object.entries(values).filter(([factor]) => factor.startsWith('asset.')).map(([, value]) => value))].sort();
      const baseId = recipe.baseId ?? uniqueBases[0]?.id ?? null;
      const poseId = recipe.poseId ?? uniqueBases.find(base => base.id === baseId)?.poseId ?? 'front';
      const chosen = assetIds.map(id => declaredAssets.find(asset => asset.id === id)).filter(Boolean);
      const base = uniqueBases.find(item => item.id === baseId) ?? {id: baseId, artworkId: null};
      let exclusion = null;
      for (let i = 0; i < chosen.length && !exclusion; i++) for (let j = i + 1; j < chosen.length && !exclusion; j++) exclusion = compatiblePair(chosen[i], chosen[j], base, poseId, hardConstraints);
      const item = {id: `high-risk:${keyPart(group.id)}:${keyPart(canonical(values))}`, coverageKind: 'high-risk', riskGroupId: group.id, baseId, artworkId: base.artworkId, poseId, assetIds, factors: clone(values), strength, assetVersions: chosen.map(asset => ({id: asset.id, version: asset.version ?? null, sha256: asset.sha256 ?? null}))};
      if (exclusion) add({...item, hardConstraintExcluded: true, hardConstraint: exclusion.constraint, exclusionReason: exclusion.reason});
      else add(item);
    });
  }

  for (const recipe of recipes.filter(item => item.approvalStatus === 'approved' || item.approved === true)) {
    const base = uniqueBases.find(item => item.id === recipe.baseId);
    const recipeAssets = recipe.assetIds ?? [];
    add({id: `approved-recipe:${keyPart(recipe.id)}`, coverageKind: 'approved-recipe', baseId: recipe.baseId, artworkId: base?.artworkId ?? null, poseId: recipe.poseId ?? null, assetIds: [...recipeAssets], factors: {recipeId: recipe.id}, assetVersions: recipeAssets.map(id => {const asset = declaredAssets.find(item => item.id === id); return {id, version: asset?.version ?? null, sha256: asset?.sha256 ?? null};})});
  }

  const seedCases = [];
  for (const recipe of recipes) {
    if (recipe.seedProperty === true || recipe.propertyChecks?.length) {
      seedCases.push({id: `seed-property:${keyPart(recipe.id)}:${keyPart(seed)}`, coverageKind: 'seed-property', declaredRequired: true, seed, baseId: recipe.baseId ?? null, poseId: recipe.poseId ?? null, assetIds: [...(recipe.assetIds ?? [])], propertyChecks: clone(recipe.propertyChecks ?? ['deterministic-resolution', 'hard-constraints-preserved']), executionStatus: 'blocked', resolvable: false, reason: '尚未执行固定 seed 性质检查'});
    }
    for (const parameter of recipe.parameterChecks ?? []) {
      const path = parameter.factorId ?? parameter.path ?? parameter.id;
      const values = [...new Map([...(parameter.representative !== undefined ? [{value: parameter.representative, boundary: 'representative'}] : []), ...(parameter.boundaries ?? []).map(value => typeof value === 'object' && own(value, 'value') ? value : {value, boundary: 'boundary'})].map(item => [canonical(item.value), item])).values()];
      for (const sample of values) seedCases.push({id: `parameter-edge:${keyPart(recipe.id)}:${keyPart(path)}:${keyPart(canonical(sample.value))}`, coverageKind: 'parameter-boundary', declaredRequired: true, seed, baseId: recipe.baseId ?? null, poseId: recipe.poseId ?? null, assetIds: [...(recipe.assetIds ?? [])], factors: {[path]: clone(sample.value)}, boundary: sample.boundary, executionStatus: 'blocked', resolvable: false, reason: '尚未执行参数代表值/边界检查'});
    }
  }
  cases.push(...seedCases);
  const singleAssetCases=cases.filter(item=>item.coverageKind==='single-asset');
  const adaptationKey=item=>{
    const base=uniqueBases.find(value=>value.id===item.baseId),profile=base?.geometryProfile;
    return canonical({baseId:item.baseId,poseId:item.poseId,view:item.view??'front',asset:item.assetVersions?.[0]??item.assetIds?.[0],geometryProfileRef:profile?{id:profile.id,version:profile.version,baseAssetRefs:base.assetRefs??profile.baseAssetRefs??[]}:null});
  };
  const recipeIds=new Set(recipes.map(item=>item?.id).filter(value=>typeof value==='string'&&value));
  const inventory={
    assetCount:declaredAssets.length,
    componentAssetIdCount:new Set(declaredAssets.map(item=>item.id)).size,
    baseCount:uniqueBases.length,
    recipeCount:recipes.length,
    declaredRecipeCount:recipes.length,
    registeredRecipeCount:recipeIds.size,
    multiComponentRecipeCount:new Set(recipes.filter(item=>(item.assetIds??[]).length>1).map(item=>item.id).filter(value=>typeof value==='string'&&value)).size,
    singleAssetCases:singleAssetCases.length,
    singleComponentAdaptationCount:new Set(singleAssetCases.map(adaptationKey)).size,
    pairwiseCases:cases.filter(item=>item.coverageKind==='pairwise').length,
    highRiskCases:cases.filter(item=>item.coverageKind==='high-risk').length,
    approvedRecipeCases:cases.filter(item=>item.coverageKind==='approved-recipe').length,
    exhaustiveCases:cases.filter(item=>item.coverageKind==='exhaustive-3-way'||item.coverageKind==='exhaustive-4-way').length,
    seededSamples:cases.filter(item=>item.coverageKind==='seeded-sample').length,
    seededSampleShortfalls:cases.filter(item=>item.coverageKind==='seeded-sample-shortfall').length,
    seedPropertyCases:seedCases.filter(item=>item.coverageKind==='seed-property').length,
    parameterBoundaryCases:seedCases.filter(item=>item.coverageKind==='parameter-boundary').length
  };
  return {cases,exclusions,inventory,seed};
}

/** Compute a narrow review impact set from catalog dependency declarations. */
export function calculateCompositionImpact({cases = [], change = {kind: 'unknown'}, assets = [], baseStates = [], recipes = []} = {}) {
  const kind = change.kind;
  const target = change.id ?? change.assetId ?? change.baseId ?? change.ruleId ?? null;
  const selected = [], affectedChecks = new Set(), selectedIds = new Set();
  const select = item => { if (!selectedIds.has(item.id)) { selectedIds.add(item.id); selected.push(item); } };
  const addCheck = value => affectedChecks.add(value);
  for (const item of cases) {
    const assetIds = new Set(item.assetIds ?? (item.assetRefs ?? []).map(ref => ref.id));
    const matchesAsset = target && assetIds.has(target);
    const matchesBase = target && [item.baseId, item.artworkId].includes(target);
    const matchesTag = change.lookIds?.includes(item.lookId) || change.artworkIds?.includes(item.artworkId);
    const matchesTheme = target && (item.themeIds ?? []).includes(target) || target && item.riskGroupId === target || change.factorIds?.some(id => own(item.factors ?? {}, id));
    let include = false;
    if (['asset', 'new-asset', 'asset-version'].includes(kind)) include = matchesAsset || (change.baseIds ?? []).some(id => [item.baseId, item.artworkId].includes(id)) && (change.poseIds ?? []).includes(item.poseId);
    else if (['base', 'base-image'].includes(kind)) include = matchesBase || assetIds.has(target);
    else if (['layout', 'compositor', 'tint', 'shared-renderer'].includes(kind)) include = true;
    else if (['tag', 'tag-filter', 'random-pool'].includes(kind)) { addCheck('tag-filter'); addCheck('default-random-pool'); include = false; }
    else if (['theme', 'theme-rule'].includes(kind)) include = !!matchesTheme;
    else if (['pose-rule', 'compatibility-rule'].includes(kind)) include = (change.poseIds ?? []).includes(item.poseId) || (change.assetIds ?? []).some(id => assetIds.has(id)) || !!matchesTheme;
    else include = true;
    if (include) select(item);
  }
  const changedAsset = change.asset ?? change.record ?? null;
  if (['asset', 'new-asset', 'asset-version'].includes(kind) && changedAsset?.id && Array.isArray(baseStates)) {
    const candidateAssets = assets.filter(item => item.id !== changedAsset.id).concat(changedAsset);
    const generated = buildModularCoverageCases({assets: candidateAssets, baseStates, recipes, hardConstraints: change.hardConstraints ?? []}).cases;
    for (const item of generated) if ((item.assetIds ?? []).includes(changedAsset.id)) select(item);
  }
  if (['layout', 'compositor', 'tint', 'shared-renderer'].includes(kind)) addCheck('all-rendered-cases');
  if (['base', 'base-image'].includes(kind)) addCheck('all-cases-using-base');
  if (['asset', 'new-asset', 'asset-version'].includes(kind)) addCheck('declared-base-pose-neighbors');
  if (['theme', 'theme-rule', 'pose-rule', 'compatibility-rule'].includes(kind)) addCheck('declared-theme-and-high-risk-neighbors');
  return {change: clone(change), caseIds: selected.map(item => item.id), count: selected.length, requiredChecks: [...affectedChecks].sort(), result: selected.length || affectedChecks.size ? 'required' : 'no-impact'};
}

/** Build a freeze record with dirty-source and browser evidence fields; persistence is handled by the caller. */
export function createCoverageFreezeRecord({sourceManifest, git = {}, browser = {}, canvas = {}, cases = [], report = {}, evidence = [], createdAt = new Date().toISOString()} = {}) {
  if (!sourceManifest || typeof sourceManifest.sourceId !== 'string' || !Array.isArray(sourceManifest.files)) throw new Error('冻结报告必须绑定 source ID 与文件清单');
  const dirty = git.dirty === true || sourceManifest.dirty === true;
  if (dirty && (!sourceManifest.dirtySnapshotHash || !Array.isArray(sourceManifest.dirtyFiles))) throw new Error('未提交源码必须绑定 dirty snapshot hash 与变更文件 hash 清单');
  return {
    schema: 'dot-studio-composition-coverage-report/v1',
    createdAt,
    source: {sourceId: sourceManifest.sourceId, commit: git.commit ?? sourceManifest.commit ?? null, branch: git.branch ?? sourceManifest.branch ?? null, dirty, dirtySnapshotHash: sourceManifest.dirtySnapshotHash ?? null, files: clone(sourceManifest.files), dirtyFiles: clone(sourceManifest.dirtyFiles ?? [])},
    runtime: {cacheVersion: browser.cacheVersion ?? null, userAgent: browser.userAgent ?? null, browser: browser.name ?? null, viewport: clone(browser.viewport ?? null), canvas: clone(canvas)},
    denominator: {declared: cases.filter(item => item.declaredRequired !== false && !item.hardConstraintExcluded).length, excluded: cases.filter(item => item.hardConstraintExcluded).length},
    report: clone(report), evidence: clone(evidence),
    reviewState: 'pending-human-review', baselineAccepted: false
  };
}
