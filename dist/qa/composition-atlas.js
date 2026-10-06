import {LayeredComposer} from '../studio-composer.js?v=86';
import {getTemplateAssetStates, resolveModularComposition, resolveTemplateComposition} from '../studio-composition-resolver.js?v=86';
import {COMPOSITION_CATALOG_VERSION, getModularRecipeApproval, getModularRecipeFingerprint, getTrustedModularCatalog} from '../studio-composition-catalog.js?v=86';
import {buildModularCoverageCases, buildTemplateCoverageCases, captureResolvedRenderMetadata, COORDINATION_CHECKLIST, coordinationReviewMatches, createDefaultCoordinationReview, coverageCaptureFilename, coverageSourceFilename, summarizeCoordinationReviews, summarizeCoverage, TEMPLATE_BACKGROUND_MODES, TEMPLATE_STATE_EXPECTATION, validateCaptureTarName, validateCoordinationReview, validateTransparentOutputAlpha, verifyDeclaredAssetEvidence} from '../studio-composition-coverage.js?v=86';

const $ = selector => document.querySelector(selector);
const moduleUrl = new URL(import.meta.url);
const pageUrl = new URL(location.href);
const cacheVersion = moduleUrl.searchParams.get('v') ?? 'unknown';
const captureTool = pageUrl.searchParams.get('captureMethod') === 'playwright-local-chrome'
  ? {method:'playwright-local-chrome',automation:'Playwright',browser:'Google Chrome (local)'}
  : pageUrl.searchParams.get('captureMethod') === 'cua-managed-chrome'
    ? {method:'cua-managed-chrome',automation:'CUA',browser:'Google Chrome (managed)'}
    : {method:'unreported',automation:'unreported',browser:'unreported'};
const states = getTemplateAssetStates();
const stateById = new Map(states.map(state => [state.id, state]));
const modularCatalog = getTrustedModularCatalog();
const moduleApprovalByRecipe = new Map(modularCatalog.recipes.map(recipe => [recipe.id, getModularRecipeApproval(recipe, modularCatalog)]));
const moduleCoverage = buildModularCoverageCases({assets:modularCatalog.assets,baseStates:modularCatalog.baseStates,recipes:modularCatalog.recipes.map(recipe => ({...recipe,approvalStatus:moduleApprovalByRecipe.get(recipe.id)?.status ?? 'pending'}))});
const moduleRecipes = new Map(modularCatalog.recipes.map(recipe=>[recipe.id,recipe]));
const renderableModuleKinds=new Set(['single-asset','pairwise','high-risk','approved-recipe','seeded-sample','exhaustive-3-way','exhaustive-4-way']);
const moduleCases = moduleCoverage.cases.filter(item=>renderableModuleKinds.has(item.coverageKind)).flatMap(item=>{
  const recipe=modularCatalog.recipes.find(candidate=>candidate.baseId===item.baseId&&candidate.poseId===item.poseId&&candidate.assetIds.length===item.assetIds.length&&candidate.assetIds.every(id=>item.assetIds.includes(id)));
  const state=stateById.get(item.baseId);
  const approval = recipe ? moduleApprovalByRecipe.get(recipe.id) : null;
  const approvalStatus = !recipe ? 'unregisteredRecipe' : approval?.status === 'approved' ? 'approved' : approval?.status === 'rejected' ? 'rejected' : 'pendingArtApproval';
  return [{...item,id:`${item.id}:transparent`,moduleCaseId:item.id,moduleRecipeId:recipe?.id??null,kind:'modular',lookId:state?.lookId??null,stateId:state?.id??item.baseId,view:recipe?.view??'front',background:'transparent',backgroundCount:1,width:state?.width??null,height:state?.height??null,approvalStatus,engineeringStatus:!recipe||!state?'blocked':recipe.assetIds.every(id=>modularCatalog.assets.find(asset=>asset.id===id)?.engineeringStatus==='available')?'available':'blocked'}];
});
const cases = buildTemplateCoverageCases({
  states,
  resolver: input => resolveTemplateComposition(input)
});
const pageSize = 16;
let page = 0;
let selectedCase = null;
let selectedCoordinationReview = null;
let selectedCoordinationStorageKey = null;
let activeCollection = 'template';
let filter = {base: '', asset: '', pose: '', view: '', approval: ''};
const coordinationReviewByRecipe = new Map();
const issueTypes = ['穿插', '悬空', '遮脸', '比例', '风格', '画布', '导出'];
const coordinationStates = [
  {value:'unreviewed',label:'未检查'},
  {value:'pass',label:'通过'},
  {value:'issue',label:'有问题'}
];
const dispositionOptions = [
  {value:'pending',label:'待复核'},
  {value:'rejected',label:'拒绝当前适配'},
  {value:'ready-for-explicit-confirmation',label:'等待明确用户确认'}
];
const status = $('#status');

function safeText(value) { return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function setStatus(text) { status.textContent = text; }
function options(select, values, firstLabel) {
  const previous = select.value;
  select.replaceChildren(new Option(firstLabel, ''), ...[...new Set(values.filter(Boolean))].sort().map(value => new Option(value, value)));
  if ([...select.options].some(option => option.value === previous)) select.value = previous;
}
function stateForCase(item) { return item.kind==='modular' ? stateById.get(item.baseId) : stateById.get(`${item.artworkId}::${item.recipeId}`) ?? states.find(state => state.id === `${item.artworkId}::${item.recipeId}`); }
function activeCases() { return activeCollection==='modular' ? moduleCases : cases.cases; }
function caseBase(item) { return item.kind==='modular' ? item.artworkId : item.artworkId; }
function caseAssets(item) { return item.kind==='modular' ? item.assetIds : item.assetRefs.map(ref=>ref.id); }
function casePose(item) { return item.kind==='modular' ? item.poseId : item.stateId; }
function filteredCases() {
  return activeCases().filter(item => {
    const state = stateForCase(item);
    if (filter.base && caseBase(item) !== filter.base) return false;
    if (filter.asset && !caseAssets(item).includes(filter.asset)) return false;
    if (filter.pose && casePose(item) !== filter.pose && item.recipeId !== filter.pose && item.moduleRecipeId !== filter.pose) return false;
    if (filter.view && item.view !== filter.view) return false;
    if (filter.approval && item.approvalStatus !== filter.approval) return false;
    return !!state;
  });
}

function setBackground(character, mode) {
  const next = structuredClone(character);
  next.background = mode;
  return next;
}

function resolveCase(item) {
  if(item.kind!=='modular') return resolveTemplateComposition({character:setBackground(stateForCase(item).config,item.background),artworkId:item.artworkId,recipeId:item.recipeId});
  const state=stateForCase(item),recipe=moduleRecipes.get(item.moduleRecipeId);
  if(!state||!recipe)throw new Error('模块适配用例没有对应的可信基底状态或配方');
  return resolveModularComposition({character:setBackground(state.config,item.background),composition:{baseId:recipe.baseId,recipeId:recipe.id,assetIds:[...recipe.assetIds],poseId:recipe.poseId}});
}
function captureRenderMetadata(resolution) {
  return captureResolvedRenderMetadata(resolution,{catalog:modularCatalog});
}

async function drawCase(host, item, {exportSize = null} = {}) {
  const state = stateForCase(item);
  if (!state) throw new Error(`找不到已登记状态 ${item.artworkId ?? item.baseId}::${item.recipeId ?? item.moduleRecipeId}`);
  const resolution = resolveCase(item);
  if (resolution.availability !== 'available' || !resolution.renderPlan) throw new Error(resolution.reason || '模板当前不可解算');
  const composer = new LayeredComposer(host);
  try {
    const updated = item.kind==='modular' ? await composer.updateResolved(resolution) : await composer.update(resolution.renderPlan.pack, resolution.renderPlan.config);
    if (!updated || !composer.ready) throw new Error('Canvas 模板渲染未完成');
    const blob = exportSize ? await composer.capture(exportSize) : null;
    return {composer, state, resolution, blob};
  } catch (error) {
    composer.dispose();
    throw error;
  }
}

function renderGrid() {
  const all = filteredCases();
  const maxPage = Math.max(1, Math.ceil(all.length / pageSize));
  page = Math.min(page, maxPage - 1);
  $('#page-label').textContent = `${page + 1} / ${maxPage}`;
  $('#previous').disabled = page <= 0;
  $('#next').disabled = page + 1 >= maxPage;
  const visible = all.slice(page * pageSize, (page + 1) * pageSize);
  const grid = $('#atlas-grid');
  grid.replaceChildren();
  if (!visible.length) {
    grid.innerHTML = `<p class="empty">${activeCollection==='modular'?'当前筛选范围没有可登记模块适配。':'当前筛选范围没有已登记模板状态。'}</p>`;
    return;
  }
  for (const item of visible) {
    const state = stateForCase(item);
    const card = document.createElement('article');
    card.className = 'case-card';
    const moduleStatus=item.kind==='modular';
    const title=moduleStatus?`${item.assetIds.map(id=>modularCatalog.assets.find(asset=>asset.id===id)?.name??id).join(' + ')} · ${state?.lookId??item.artworkId}`:`${item.lookId} · ${item.stateId}`;
    const review=moduleStatus?coordinationReviewByRecipe.get(item.moduleRecipeId):null;
    const coherenceBadge=moduleStatus&&item.moduleRecipeId?`<span class="badge coherence-${safeText(review?.disposition??'pending')}">协调性${safeText(dispositionLabel(review?.disposition??'pending'))}</span>`:'';
    const statusBadges=moduleStatus
      ? `<span class="badge ${state?.approvalStatus==='approved'?'approved':'approval'}">${state?.approvalStatus==='approved'?'基底身份已确认':state?.approvalStatus==='pendingScopeMapping'?'基底确认范围待核定':'基底状态待核对'}</span><span class="badge approval">${item.approvalStatus==='approved'?'模块已获美术批准':item.approvalStatus==='unregisteredRecipe'?'模块配方待登记':'模块待人工批准'}</span><span class="badge">${item.engineeringStatus==='available'?'工程可解算':'工程阻塞'}</span>${coherenceBadge}`
      : `<span class="badge ${state.approvalStatus === 'approved' ? 'approved' : 'approval'}">${state.approvalStatus === 'approved' ? '已登记身份确认' : state.approvalStatus === 'pendingScopeMapping' ? '确认范围待核定' : '未登记确认'}</span>`;
    card.innerHTML = `<div class="preview"></div><div class="card-content"><h2 class="card-title">${safeText(title)}</h2><div class="card-meta"><span class="badge transparent-output">透明 PNG</span><span class="badge">${item.width}×${item.height}</span>${statusBadges}</div><button type="button" data-detail="${safeText(item.id)}">打开配置与问题记录</button></div>`;
    const preview = card.querySelector('.preview');
    grid.append(card);
    drawCase(preview, item).catch(error => {
      preview.textContent = 'Canvas 预览失败';
      preview.setAttribute('title', error.message);
    });
    card.querySelector('[data-detail]').addEventListener('click', () => openDetail(item).catch(error => setStatus(`详情复核读取失败：${error.message}`)));
  }
}

function saveCoordinationReview() {
  if (!selectedCase || selectedCase.kind !== 'modular' || !selectedCoordinationReview || !selectedCoordinationStorageKey) return;
  const checklist=Object.fromEntries(COORDINATION_CHECKLIST.map(item=>[item.id,$(`[data-coordination-status="${item.id}"]`)?.value??'unreviewed']));
  const checklistNotes=Object.fromEntries(COORDINATION_CHECKLIST.map(item=>[item.id,$(`[data-coordination-note="${item.id}"]`)?.value.trim()??'']));
  const draft={...persistedCoordinationReview(selectedCoordinationReview),checklist,checklistNotes,disposition:$('#coordination-disposition').value,dispositionReason:$('#coordination-disposition-reason').value.trim(),updatedAt:new Date().toISOString(),decisionSource:'internal-atlas-review'};
  const validation=validateCoordinationReview(draft);
  if(!validation.valid){setStatus(`协调性复核未保存：${validation.errors.join('；')}`);return;}
  try{localStorage.setItem(selectedCoordinationStorageKey,JSON.stringify(draft));}
  catch(error){setStatus(`协调性复核保存失败：${error.message}`);return;}
  selectedCoordinationReview={...selectedCoordinationReview,...draft};
  coordinationReviewByRecipe.set(selectedCase.moduleRecipeId,selectedCoordinationReview);
  renderGrid();
  setStatus(`已保存精确适配协调性状态：${dispositionLabel(draft.disposition)}；工程状态与美术批准未被更改。`);
}

function issueKey(item) { return `dot-studio-atlas-issues:${item.id}`; }
function storedIssue(item) {
  try { return JSON.parse(localStorage.getItem(issueKey(item)) || '{"types":[],"note":""}'); }
  catch { return {types: [], note: ''}; }
}
function atlasAnnotationArtifact(scope, items, coordinationReviews = []) {
  return {
    schema:'dot-studio-atlas-annotations/v1',
    scope,
    capturedAt:new Date().toISOString(),
    issueAnnotations:items.map(item=>({caseId:item.id,moduleCaseId:item.moduleCaseId??null,storageKey:issueKey(item),annotation:storedIssue(item)})),
    coordinationReviews
  };
}
function exportCoordinationReview(review) {
  if (!review) return null;
  return {
    ...persistedCoordinationReview(review),
    engineeringStatus:review.engineeringStatus,
    artApprovalStatus:review.artApprovalStatus,
    releaseStatus:review.releaseStatus,
    coverageCaseIds:[...(review.coverageCaseIds??[])]
  };
}
function coordinationSubjectForRecipe(recipe) {
  const baseState = modularCatalog.baseStates.find(item => item.id === recipe.baseId);
  if (!baseState) throw new Error(`协调性复核缺少可信基底 ${recipe.baseId}`);
  const profileRefs=[];
  for(const value of [recipe.fitProfileRefs,recipe.fitProfileRef,recipe.geometryProfileRefs,recipe.geometryProfileRef])for(const ref of Array.isArray(value)?value:value?[value]:[])if(!profileRefs.some(item=>item.id===ref.id&&item.version===ref.version&&item.fingerprint===ref.fingerprint))profileRefs.push(structuredClone(ref));
  const componentRefs = recipe.assetIds.map(id => {
    const asset = modularCatalog.assets.find(item => item.id === id);
    if (!asset) throw new Error(`协调性复核缺少可信素材 ${id}`);
    const componentFitRefs=Array.isArray(asset.fitProfileRefs)?asset.fitProfileRefs:asset.fitProfileRef?[asset.fitProfileRef]:Array.isArray(asset.geometryProfileRefs)?asset.geometryProfileRefs:asset.geometryProfileRef?[asset.geometryProfileRef]:profileRefs;
    return {id:asset.id,version:asset.version,sha256:asset.sha256,fitPolicy:asset.fitPolicy?structuredClone(asset.fitPolicy):null,sourceParts:asset.sourceParts?structuredClone(asset.sourceParts):null,fitProfileRefs:structuredClone(componentFitRefs)};
  });
  const allProfileRefs=[...profileRefs];
  for(const component of componentRefs)for(const ref of component.fitProfileRefs)if(!allProfileRefs.some(item=>item.id===ref.id&&item.version===ref.version&&item.fingerprint===ref.fingerprint))allProfileRefs.push(structuredClone(ref));
  const baseGeometryProfiles=allProfileRefs.map(ref=>modularCatalog.baseGeometryProfiles.find(item=>item.id===ref.id&&item.version===ref.version)??null);
  return {
    catalogVersion: COMPOSITION_CATALOG_VERSION,
    baseId: recipe.baseId,
    baseAssetRefs: structuredClone(baseState.assetRefs),
    baseGeometryProfile:allProfileRefs.length===1?structuredClone(baseGeometryProfiles[0]):null,
    baseGeometryProfiles:baseGeometryProfiles.map(item=>item?structuredClone(item):null),
    componentRefs,
    poseId: recipe.poseId,
    view: recipe.view,
    recipeId: recipe.id,
    recipeVersion: recipe.version,
    fitPolicy:recipe.fitPolicy?structuredClone(recipe.fitPolicy):null,
    fitProfileRef:recipe.fitProfileRef?structuredClone(recipe.fitProfileRef):null,
    fitProfileRefs:structuredClone(profileRefs),
    geometryProfileRefs:recipe.geometryProfileRefs??recipe.geometryProfileRef??null,
    sourceParts:recipe.sourceParts?structuredClone(recipe.sourceParts):null,
    recipeFingerprint: getModularRecipeFingerprint(recipe,modularCatalog)
  };
}
function coordinationStorageKey(adaptationId) { return `dot-studio-atlas-coordination:v1:${adaptationId}`; }
function persistedCoordinationReview(review) {
  return {
    schema:review.schema,adaptationId:review.adaptationId,subject:review.subject,
    checklist:review.checklist,checklistNotes:review.checklistNotes,
    disposition:review.disposition,dispositionReason:review.dispositionReason,
    updatedAt:review.updatedAt,decisionSource:'internal-atlas-review'
  };
}
async function getCoordinationReview(recipe, casesToCapture = moduleCases) {
  const subject = coordinationSubjectForRecipe(recipe);
  const adaptationId = await sha256Text(JSON.stringify(subject));
  const key = coordinationStorageKey(adaptationId);
  let review = createDefaultCoordinationReview({adaptationId,subject});
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (coordinationReviewMatches(saved,{adaptationId,subject})) review = saved;
  } catch {}
  const approval = moduleApprovalByRecipe.get(recipe.id) ?? getModularRecipeApproval(recipe,modularCatalog);
  const baseState = modularCatalog.baseStates.find(item => item.id === recipe.baseId);
  const components = recipe.assetIds.map(id => modularCatalog.assets.find(item => item.id === id)).filter(Boolean);
  const engineeringStatus = baseState && components.length === recipe.assetIds.length && components.every(asset => asset.engineeringStatus === 'available') ? 'available' : 'blocked';
  const releaseStatus = components.length === recipe.assetIds.length && components.every(asset => asset.releaseStatus === 'approved') ? 'approved' : 'internal';
  return {
    ...review,
    engineeringStatus,
    artApprovalStatus:approval.status,
    releaseStatus,
    coverageCaseIds:[...new Set(casesToCapture.filter(item => item.moduleRecipeId === recipe.id).map(item => item.moduleCaseId).filter(Boolean))]
  };
}
async function refreshCoordinationReviewCache() {
  for (const recipe of modularCatalog.recipes) coordinationReviewByRecipe.set(recipe.id,await getCoordinationReview(recipe));
}
function dispositionLabel(value) {
  return dispositionOptions.find(item => item.value === value)?.label ?? '待复核';
}
function renderCoordinationChecklist(review) {
  const root = $('#coordination-checklist');
  root.replaceChildren();
  for (const item of COORDINATION_CHECKLIST) {
    const row = document.createElement('div');
    row.className = 'coordination-row';
    const label = document.createElement('label');
    label.textContent = item.label;
    const select = document.createElement('select');
    select.dataset.coordinationStatus = item.id;
    for (const state of coordinationStates) select.add(new Option(state.label,state.value));
    select.value = review.checklist[item.id] ?? 'unreviewed';
    const note = document.createElement('input');
    note.type = 'text';
    note.dataset.coordinationNote = item.id;
    note.placeholder = '可选备注';
    note.value = review.checklistNotes?.[item.id] ?? '';
    select.addEventListener('change', syncReadyDisposition);
    row.append(label,select,note);
    root.append(row);
  }
  const disposition = $('#coordination-disposition');
  disposition.replaceChildren(...dispositionOptions.map(item => new Option(item.label,item.value)));
  disposition.value = review.disposition;
  $('#coordination-disposition-reason').value = review.dispositionReason ?? '';
  $('#coordination-subject-summary').textContent = `适配 ${review.adaptationId.slice(0,12)}… · 工程 ${review.engineeringStatus} · 美术批准 ${review.artApprovalStatus} · 发布 ${review.releaseStatus}`;
  syncReadyDisposition();
}
function syncReadyDisposition() {
  const allPass = COORDINATION_CHECKLIST.every(item => $(`[data-coordination-status="${item.id}"]`)?.value === 'pass');
  const option = $('#coordination-disposition')?.querySelector('option[value="ready-for-explicit-confirmation"]');
  if (option) option.disabled = !allPass;
  if (!allPass && $('#coordination-disposition')?.value === 'ready-for-explicit-confirmation') $('#coordination-disposition').value = 'pending';
}
async function openDetail(item) {
  selectedCase = item;
  selectedCoordinationReview = null;
  selectedCoordinationStorageKey = null;
  const state = stateForCase(item);
  $('#detail-title').textContent = item.id;
  $('#detail-meta').replaceChildren();
  const pre = document.createElement('pre');
  let resolution;
  try{resolution=resolveCase(item);}catch(error){resolution={availability:'blocked',reason:error.message,composition:null,stageMetadata:[]};}
  const recipe = item.kind === 'modular' ? moduleRecipes.get(item.moduleRecipeId) : null;
  const review = recipe ? await getCoordinationReview(recipe) : null;
  if (selectedCase !== item) return;
  selectedCoordinationReview = review;
  selectedCoordinationStorageKey = review ? coordinationStorageKey(review.adaptationId) : null;
  pre.textContent = JSON.stringify({case:item,state,composition:resolution.composition,renderMetadata:captureRenderMetadata(resolution),stageMetadata:resolution.stageMetadata,engineering:{availability:resolution.availability,reason:resolution.reason},coordinationReview:review?{adaptationId:review.adaptationId,disposition:review.disposition,checklist:review.checklist}:null,artApproval:item.kind==='modular'?{status:resolution.approvalStatus,automaticApproval:false}: {status:state.approvalStatus,evidence:state.approvalStatus==='approved'?'v83 registeredLooks 中明确列出该 look 默认状态':'确认范围待核定；未推断批准或否决'}}, null, 2);
  $('#detail-meta').append(pre);
  $('#detail-preview').replaceChildren();
  drawCase($('#detail-preview'), item).catch(error => setStatus(`详情预览失败：${error.message}`));
  const saved = storedIssue(item);
  $('#coordination-controls').hidden = !recipe;
  if (review) renderCoordinationChecklist(review);
  const optionsRoot = $('#issue-options');
  optionsRoot.replaceChildren();
  for (const type of issueTypes) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox'; input.value = type; input.checked = saved.types.includes(type);
    label.append(input, document.createTextNode(type)); optionsRoot.append(label);
  }
  $('#issue-note').value = saved.note ?? '';
  $('#detail').hidden = false;
}
function closeDetail() { $('#detail').hidden = true; selectedCase = null; }

function refreshFilterOptions() {
  const current=activeCases();
  options($('#base-filter'),current.map(item=>item.artworkId),'全部基底');
  options($('#asset-filter'),current.flatMap(caseAssets),'全部素材');
  options($('#pose-filter'),current.map(casePose),'全部姿态');
  options($('#status-filter'),current.map(item=>item.approvalStatus),'全部状态');
}
function setCollection(collection) {
  activeCollection=collection;page=0;filter={base:'',asset:'',pose:'',view:'',approval:''};
  const modular=collection==='modular',current=activeCases();
  $('#collection-template').setAttribute('aria-pressed',String(!modular));
  $('#collection-modular').setAttribute('aria-pressed',String(modular));
  $('#capture-all').hidden=modular;$('#capture-modules').hidden=!modular;
  $('#look-label').textContent=modular?'代表基底':'已登记 look';
  $('#state-label').textContent=modular?'登记模块配方':'模板状态';
  $('#case-label').textContent=modular?'配方 × 透明输出':'状态 × 透明输出';
  $('#module-label').textContent=modular?'真实模块素材':'模块素材';
  $('#look-count').textContent=String(new Set(current.map(item=>item.lookId).filter(Boolean)).size);
  $('#state-count').textContent=String(modular?new Set(current.map(item=>item.moduleRecipeId).filter(Boolean)).size:states.length);
  $('#case-count').textContent=String(current.length);
  $('#module-count').textContent=modular?`${modularCatalog.assets.length} · 待人工批准`:`${modularCatalog.assets.length} 项内置试点`;
  refreshFilterOptions();renderGrid();
  setStatus(modular?`模块目录 ${modularCatalog.assets.length} 项素材 · ${modularCatalog.recipes.length} 条配方 · ${current.length} 个透明 PNG 输出；工程状态与人工批准分开记录。`:`目录基线 ${cases.inventory.lookCount} look · ${cases.inventory.stateCount} 模板状态 · ${cases.cases.length} 个透明 PNG 输出；模块试点不进入默认随机候选。`);
}

async function sha256(blob) {
  const digest = await crypto.subtle.digest('SHA-256', await blob.arrayBuffer());
  return [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, '0')).join('');
}
async function sha256Text(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, '0')).join('');
}
function toBase64(bytes) {
  let output = '';
  const step = 0x8000;
  for (let index = 0; index < bytes.length; index += step) output += String.fromCharCode(...bytes.subarray(index, index + step));
  return btoa(output);
}
function sourceFilenameFor(assetId, filenames) {
  if (!filenames.has(assetId)) filenames.set(assetId, coverageSourceFilename(filenames.size, assetId));
  return filenames.get(assetId);
}
function pngAlphaStats(blob) {
  return createImageBitmap(blob).then(bitmap => {
    const canvas = document.createElement('canvas'); canvas.width = bitmap.width; canvas.height = bitmap.height;
    const context = canvas.getContext('2d', {alpha: true}); context.drawImage(bitmap, 0, 0);
    const pixels = context.getImageData(0, 0, bitmap.width, bitmap.height).data;
    let transparent = 0, opaque = 0, partial = 0, minX = bitmap.width, minY = bitmap.height, maxX = -1, maxY = -1;
    for (let index = 0; index < pixels.length; index += 4) {
      const alpha = pixels[index + 3];
      if (alpha === 0) transparent++; else {
        if (alpha === 255) opaque++; else partial++;
        const pixel = index / 4, x = pixel % bitmap.width, y = Math.floor(pixel / bitmap.width);
        minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
      }
    }
    bitmap.close();
    return {width: canvas.width, height: canvas.height, transparentPixels: transparent, opaquePixels: opaque, partialAlphaPixels: partial, alphaBounds: maxX < 0 ? null : {x:minX,y:minY,width:maxX-minX+1,height:maxY-minY+1}};
  });
}
function requireTransparentRoleOutput(alpha) {
  const check=validateTransparentOutputAlpha(alpha);
  if(!check.valid)throw new Error(`角色 PNG 透明 alpha 检查失败：${check.errors.join('；')}`);
  return check;
}

function octal(value, width) { return `${Math.max(0, value).toString(8).padStart(width - 1, '0')}\0`; }
function tarEntry(name, bytes) {
  const header = new Uint8Array(512), view = new DataView(header.buffer);
  const encoder = new TextEncoder();
  const write = (offset, length, value) => header.set(encoder.encode(String(value)).subarray(0, length), offset);
  validateCaptureTarName(name);
  write(0, 100, name); write(100, 8, octal(0o644, 8)); write(108, 8, octal(0, 8)); write(116, 8, octal(0, 8));
  write(124, 12, octal(bytes.length, 12)); write(136, 12, octal(Math.floor(Date.now() / 1000), 12));
  header.fill(32, 148, 156); write(156, 1, '0'); write(257, 6, 'ustar\0'); write(263, 2, '00');
  const checksum = header.reduce((total, value) => total + value, 0); write(148, 8, `${checksum.toString(8).padStart(6, '0')}\0 `);
  const padded = new Uint8Array(Math.ceil(bytes.length / 512) * 512); padded.set(bytes);
  return [header, padded];
}
function tarArchive(files) {
  const parts = [];
  for (const file of files) parts.push(...tarEntry(file.name, file.bytes));
  parts.push(new Uint8Array(1024));
  return new Blob(parts, {type: 'application/x-tar'});
}
async function downloadArchive(files,filename) {
  const archive=tarArchive(files);
  if(typeof CompressionStream!=='function')throw new Error('当前浏览器不支持 gzip 捕获包；不能生成可冻结的 .tar.gz 证据');
  const gz=await new Response(archive.stream().pipeThrough(new CompressionStream('gzip'))).blob();
  const url=URL.createObjectURL(gz),link=document.createElement('a');link.href=url;link.download=filename;link.click();
  setTimeout(()=>URL.revokeObjectURL(url),30000);
}
async function downloadCaptureBundle() {
  const button = $('#capture-all'); button.disabled = true;
  const files = [], records = [], rawById = new Map(), sourceFilenames = new Map();
  let runStatus = 'pass';
  try {
    const expected = buildTemplateCoverageCases({states, resolver: input => resolveTemplateComposition(input)});
    const casesToRun = expected.cases;
    setStatus(`开始捕获 ${casesToRun.length} 个真实透明 Canvas 输出；逐项校验登记 PNG 字节和实际 alpha 像素……`);
    const sink = document.createElement('div'); sink.className = 'capture-sink'; document.body.append(sink);
    for (let index = 0; index < casesToRun.length; index++) {
      const item = casesToRun[index], state = stateForCase(item);
      const record = {id: item.id, coverageKind:item.kind, lookId: item.lookId, artworkId: item.artworkId, recipeId: item.recipeId, stateId: item.stateId, background: item.background, backgroundCount:1, view: item.view, width: item.width, height: item.height, config: item.config, composition: item.composition, approvalStatus: item.approvalStatus, atlasIssueAnnotation:storedIssue(item), status: 'blocked', sourceAssets: [], canvas: null, issue: null};
      try {
        for (const asset of state.assets) {
          const sourceFilename = sourceFilenameFor(asset.id,sourceFilenames);
          let raw = rawById.get(asset.id);
          if (!raw) {
            try {
              const response = await fetch(asset.src, {cache: 'no-store'});
              if (!response.ok) throw new Error(`素材文件 HTTP ${response.status}: ${asset.id}`);
              const blob = await response.blob();
              const actualHash = await sha256(blob);
              const alpha = await pngAlphaStats(blob);
              raw = {blob, actualHash, alpha};
              rawById.set(asset.id, raw);
              files.push({name: sourceFilename, bytes: new Uint8Array(await blob.arrayBuffer())});
            } catch (error) {
              record.sourceAssets.push({id:asset.id,version:asset.version,expectedSha256:asset.sha256,src:asset.src,filename:sourceFilename,status:'fail',errors:[error.message]});
              throw error;
            }
          }
          const resolvedRef = state.assetRefs.find(ref => ref.id === asset.id);
          const verification = verifyDeclaredAssetEvidence(asset,{exists:true,version:resolvedRef?.version,sha256:raw.actualHash,width:raw.alpha.width,height:raw.alpha.height});
          if (!resolvedRef || resolvedRef.version !== asset.version || resolvedRef.sha256 !== asset.sha256) verification.errors.push('模板状态引用与素材目录版本/hash 不一致');
          if (verification.errors.length) verification.status = 'fail';
          record.sourceAssets.push({id: asset.id, version: asset.version, expectedSha256: asset.sha256, actualSha256: raw.actualHash, src: asset.src, filename: sourceFilename, bytes: raw.blob.size, width: raw.alpha.width, height: raw.alpha.height, alpha: raw.alpha, status: verification.status, errors: verification.errors});
          if (verification.status !== 'pass') throw new Error(`登记 PNG 实际字节/来源检查失败：${asset.id} · ${verification.errors.join('；')}`);
        }
        const rendered = await drawCase(sink, item, {exportSize: Math.max(item.width, item.height)});
        try {
          const blob = rendered.blob;
          if (!blob || blob.type !== 'image/png') throw new Error('Canvas 未输出 PNG 字节');
          const alpha = await pngAlphaStats(blob);
          const transparentCheck = requireTransparentRoleOutput(alpha);
          const actualSha256 = await sha256(blob);
          if (alpha.width !== item.width || alpha.height !== item.height) throw new Error(`Canvas PNG 尺寸不符：期望 ${item.width}×${item.height}，实际 ${alpha.width}×${alpha.height}`);
          const filename = coverageCaptureFilename('template',index,item.id);
          files.push({name: filename, bytes: new Uint8Array(await blob.arrayBuffer())});
          record.canvas = {filename, mimeType: blob.type, bytes: blob.size, sha256: actualSha256, ...alpha, transparentOutputCheck:transparentCheck, visiblePixelRatio: (alpha.opaquePixels + alpha.partialAlphaPixels) / (alpha.width * alpha.height)};
          record.status = record.sourceAssets.every(asset => asset.status === 'pass') ? 'pass' : 'fail';
          if (record.status !== 'pass') runStatus = 'fail';
        } finally { rendered.composer.dispose(); }
      } catch (error) {
        record.status = 'fail'; record.issue = error?.message || 'Canvas 捕获失败'; runStatus = 'fail';
      }
      records.push(record);
      setStatus(`捕获进度 ${index + 1}/${casesToRun.length} · ${record.status} · ${record.id}`);
      if (index % 5 === 4) await new Promise(requestAnimationFrame);
    }
    sink.remove();
    const coverage = summarizeCoverage(casesToRun, records.map(item => ({id:item.id,status:item.status,evidence:item.canvas,reason:item.issue})), {expectedDeclaredCount: TEMPLATE_STATE_EXPECTATION.outputCount});
    if (coverage.result !== 'pass') runStatus = 'fail';
    const annotationArtifact=atlasAnnotationArtifact('template-cases',casesToRun);
    const annotationBytes=new TextEncoder().encode(JSON.stringify(annotationArtifact,null,2));
    const annotationSha256=await sha256(new Blob([annotationBytes],{type:'application/json'}));
    files.push({name:'atlas-annotations.json',bytes:annotationBytes});
    const manifest = {schema:'dot-studio-template-capture-bundle/v1',capturedAt:new Date().toISOString(),cacheVersion,catalogVersion:COMPOSITION_CATALOG_VERSION,source:{sourceId:'pending-node-freeze',note:'解包后由 Node freeze 脚本绑定当前 Git/source manifest'},browser:{userAgent:navigator.userAgent,viewport:{width:innerWidth,height:innerHeight,devicePixelRatio},captureTool},inventory:expected.inventory,integrity:expected.integrity,coverage:{result:coverage.result,denominator:coverage.denominator,hardConstraintExcluded:coverage.hardConstraintExcluded,resolvable:coverage.resolvable,executed:coverage.executed,counts:coverage.counts,issues:coverage.issues},annotationsArtifact:{filename:'atlas-annotations.json',bytes:annotationBytes.length,sha256:annotationSha256},records,artApproval:{separateFromEngineering:true,registeredLookCount:new Set(states.filter(item=>item.approvalStatus==='approved').map(item=>item.lookId)).size,scopePendingStateIds:states.filter(item=>item.approvalStatus==='pendingScopeMapping').map(item=>item.id),automaticApproval:false}};
    files.push({name:'capture-manifest.json',bytes:new TextEncoder().encode(JSON.stringify(manifest,null,2))});
    setStatus(`已生成 ${records.length} 项透明 PNG 捕获；alpha 检查 ${coverage.result}，正在压缩证据包……`);
    await downloadArchive(files,`dot-studio-template-capture-${new Date().toISOString().slice(0,10)}.tar.gz`);
    setStatus(`捕获完成：${records.length} 项透明 PNG、${files.filter(file=>file.name.endsWith('.png')).length} 个源/输出文件；标注随附件导出，实际 alpha 报告 ${coverage.result}，最终冻结需由本地脚本绑定 source manifest。`);
  } catch (error) {
    setStatus(`捕获流程失败：${error.message}`);
    throw error;
  } finally { button.disabled = false; }
}

async function downloadModuleCaptureBundle() {
  const button=$('#capture-modules');button.disabled=true;
  const files=[],records=[],rawById=new Map(),sourceFilenames=new Map();
  try {
    await refreshCoordinationReviewCache();
    const casesToRun=moduleCases;
    setStatus(`开始捕获 ${casesToRun.length} 个登记模块透明 PNG 输出；工程状态与人工批准分别记录……`);
    const sink=document.createElement('div');sink.className='capture-sink';document.body.append(sink);
    const assetById=new Map([...states.flatMap(state=>state.assets),...modularCatalog.assets].map(asset=>[asset.id,asset]));
    for(let index=0;index<casesToRun.length;index++){
      const item=casesToRun[index],state=stateForCase(item),recipe=moduleRecipes.get(item.moduleRecipeId),approval=recipe?moduleApprovalByRecipe.get(recipe.id):null,review=recipe?coordinationReviewByRecipe.get(recipe.id):null,releaseStatusByAsset=(recipe?.assetIds??[]).map(id=>({assetId:id,status:modularCatalog.assets.find(asset=>asset.id===id)?.releaseStatus??'missing'})),record={id:item.id,moduleCaseId:item.moduleCaseId,moduleRecipeId:item.moduleRecipeId,moduleRecipeVersion:recipe?.version??null,coverageKind:item.coverageKind,lookId:item.lookId,artworkId:item.artworkId,baseId:item.baseId,assetIds:[...item.assetIds],poseId:item.poseId,stateId:item.stateId,background:item.background,backgroundCount:1,view:recipe?.view??item.view??'front',width:item.width,height:item.height,config:state?setBackground(state.config,item.background):null,composition:null,approvalStatus:item.approvalStatus,approvalEvidence:approval?{status:approval.status,approvalIds:approval.approvalIds,approvedAssetIds:approval.approvedAssetIds,pendingAssetIds:approval.pendingAssetIds}:null,releaseStatusByAsset,engineeringStatus:item.engineeringStatus,coordinationReviewId:review?.adaptationId??null,coordinationSubject:review?.subject??null,coordinationReview:exportCoordinationReview(review),atlasIssueAnnotation:storedIssue(item),status:'blocked',sourceAssets:[],canvas:null,issue:null};
      try{
        const resolution=resolveCase(item);record.composition=resolution.composition;record.reason=resolution.reason;record.renderMetadata=captureRenderMetadata(resolution);
        if(resolution.availability!=='available'||!resolution.renderPlan)throw new Error(resolution.reason||'模块适配无法解算');
        for(const ref of resolution.composition.assetRefs){
          const asset=assetById.get(ref.id);
          if(!asset)throw new Error(`composition 引用了目录中不存在的素材 ${ref.id}`);
          const sourceFilename=sourceFilenameFor(asset.id,sourceFilenames);
          let raw=rawById.get(asset.id);
          if(!raw){
            const response=await fetch(asset.src,{cache:'no-store'});
            if(!response.ok)throw new Error(`素材文件 HTTP ${response.status}: ${asset.id}`);
            const blob=await response.blob(),actualHash=await sha256(blob),alpha=await pngAlphaStats(blob);
            raw={blob,actualHash,alpha};rawById.set(asset.id,raw);files.push({name:sourceFilename,bytes:new Uint8Array(await blob.arrayBuffer())});
          }
          const verification=verifyDeclaredAssetEvidence(asset,{exists:true,version:ref.version,sha256:raw.actualHash,width:raw.alpha.width,height:raw.alpha.height});
          if(ref.version!==asset.version||ref.sha256!==asset.sha256)verification.errors.push('ResolvedComposition 素材引用与可信目录版本/hash 不一致');
          if(verification.errors.length)verification.status='fail';
          record.sourceAssets.push({id:asset.id,version:asset.version,expectedSha256:asset.sha256,actualSha256:raw.actualHash,src:asset.src,filename:sourceFilename,bytes:raw.blob.size,width:raw.alpha.width,height:raw.alpha.height,alpha:raw.alpha,status:verification.status,errors:verification.errors});
          if(verification.status!=='pass')throw new Error(`模块或模板 PNG 字节/来源检查失败：${asset.id} · ${verification.errors.join('；')}`);
        }
        const rendered=await drawCase(sink,item,{exportSize:Math.max(item.width,item.height)});
        try{
          const blob=rendered.blob;
          if(!blob||blob.type!=='image/png')throw new Error('Canvas 未输出模块 PNG 字节');
          const alpha=await pngAlphaStats(blob),actualSha256=await sha256(blob);
          const transparentCheck=requireTransparentRoleOutput(alpha);
          if(alpha.width!==item.width||alpha.height!==item.height)throw new Error(`模块 Canvas PNG 尺寸不符：期望 ${item.width}×${item.height}，实际 ${alpha.width}×${alpha.height}`);
          const filename=coverageCaptureFilename('module',index,item.id);
          files.push({name:filename,bytes:new Uint8Array(await blob.arrayBuffer())});
          record.canvas={filename,mimeType:blob.type,bytes:blob.size,sha256:actualSha256,...alpha,transparentOutputCheck:transparentCheck,visiblePixelRatio:(alpha.opaquePixels+alpha.partialAlphaPixels)/(alpha.width*alpha.height)};
          record.status='pass';
        }finally{rendered.composer.dispose();}
      }catch(error){record.status='fail';record.issue=error?.message||'模块 Canvas 捕获失败';}
      records.push(record);setStatus(`模块捕获进度 ${index+1}/${casesToRun.length} · ${record.status} · ${record.id}`);
      if(index%3===2)await new Promise(requestAnimationFrame);
    }
    sink.remove();
    const coverage=summarizeCoverage(casesToRun,records.map(item=>({id:item.id,status:item.status,evidence:item.canvas,reason:item.issue})),{expectedDeclaredCount:casesToRun.length});
    if(!casesToRun.length)throw new Error('当前模块目录没有声明的可渲染用例；拒绝生成空分母报告');
    const includedRecipeIds=new Set(casesToRun.map(item=>item.moduleRecipeId).filter(Boolean));
    const coordinationReviews=[...includedRecipeIds].map(id=>coordinationReviewByRecipe.get(id)).filter(Boolean).map(exportCoordinationReview);
    const coordinationSummary=summarizeCoordinationReviews(coordinationReviews);
    if(coordinationSummary.invalid.length)throw new Error(`协调性复核存在无效或重复记录：${JSON.stringify(coordinationSummary.invalid)}`);
    const annotationArtifact=atlasAnnotationArtifact('modular-cases',casesToRun,coordinationReviews);
    const annotationBytes=new TextEncoder().encode(JSON.stringify(annotationArtifact,null,2));
    const annotationSha256=await sha256(new Blob([annotationBytes],{type:'application/json'}));
    files.push({name:'atlas-annotations.json',bytes:annotationBytes});
    const approvalByRecipe=modularCatalog.recipes.map(recipe=>{
      const approval=moduleApprovalByRecipe.get(recipe.id)??getModularRecipeApproval(recipe,modularCatalog);
      const assets=recipe.assetIds.map(id=>modularCatalog.assets.find(asset=>asset.id===id)).filter(Boolean);
      return {recipeId:recipe.id,recipeVersion:recipe.version,baseId:recipe.baseId,poseId:recipe.poseId,view:recipe.view,status:approval.status,approvalIds:approval.approvalIds,approvedAssetIds:approval.approvedAssetIds,pendingAssetIds:approval.pendingAssetIds,defaultEligible:recipe.defaultEligible===true,releaseStatusByAsset:assets.map(asset=>({assetId:asset.id,status:asset.releaseStatus})),eligibleForDefaultPool:approval.status==='approved'&&recipe.defaultEligible===true&&assets.length===recipe.assetIds.length&&assets.every(asset=>asset.releaseStatus==='approved')};
    });
    const renderCaseCount=new Set(casesToRun.map(item=>item.moduleCaseId)).size;
    const manifest={schema:'dot-studio-module-capture-bundle/v1',capturedAt:new Date().toISOString(),cacheVersion,catalogVersion:modularCatalog.version,source:{sourceId:'pending-node-freeze',note:'冻结脚本将绑定 source manifest'},browser:{userAgent:navigator.userAgent,viewport:{width:innerWidth,height:innerHeight,devicePixelRatio},captureTool},inventory:{moduleAssetCount:modularCatalog.assets.length,componentAssetIdCount:moduleCoverage.inventory.componentAssetIdCount,singleComponentAdaptationCount:moduleCoverage.inventory.singleComponentAdaptationCount,singleAssetCaseCount:moduleCoverage.inventory.singleAssetCases,declaredRecipeCount:modularCatalog.recipes.length,registeredRecipeCount:moduleCoverage.inventory.registeredRecipeCount,multiComponentRecipeCount:moduleCoverage.inventory.multiComponentRecipeCount,recipeCount:moduleCoverage.inventory.recipeCount,renderCaseCount,backgroundCount:TEMPLATE_BACKGROUND_MODES.length,outputCount:casesToRun.length,coverageKinds:[...new Set(casesToRun.map(item=>item.coverageKind))]},hardConstraintExclusions:moduleCoverage.exclusions,coverage:{result:coverage.result,denominator:coverage.denominator,hardConstraintExcluded:coverage.hardConstraintExcluded,resolvable:coverage.resolvable,executed:coverage.executed,counts:coverage.counts,issues:coverage.issues},annotationsArtifact:{filename:'atlas-annotations.json',bytes:annotationBytes.length,sha256:annotationSha256},coordination:{separateFromEngineeringAndArtApproval:true,summary:coordinationSummary,reviews:coordinationReviews,automaticApproval:false},records,artApproval:{separateFromEngineering:true,approvedRecipeCount:approvalByRecipe.filter(item=>item.status==='approved').length,pendingRecipeIds:approvalByRecipe.filter(item=>item.status==='pending').map(item=>item.recipeId),rejectedRecipeIds:approvalByRecipe.filter(item=>item.status==='rejected').map(item=>item.recipeId),eligibleDefaultRecipeCount:approvalByRecipe.filter(item=>item.eligibleForDefaultPool).length,approvalByRecipe,pendingAssetIds:modularCatalog.assets.filter(asset=>asset.artApproval?.status!=='approved'||asset.releaseStatus!=='approved').map(asset=>asset.id),automaticApproval:false}};
    files.push({name:'capture-manifest.json',bytes:new TextEncoder().encode(JSON.stringify(manifest,null,2))});
    setStatus(`已生成 ${records.length} 个模块适配 Canvas 输出；工程状态 ${coverage.result}，美术批准仍单独记录，正在压缩证据包……`);
    await downloadArchive(files,`dot-studio-module-capture-${new Date().toISOString().slice(0,10)}.tar.gz`);
    setStatus(`模块捕获完成：${records.length} 项、${files.filter(file=>file.name.endsWith('.png')).length} 个源/Canvas PNG；工程报告 ${coverage.result}，协调性复核与美术批准分列。`);
  }catch(error){setStatus(`模块捕获失败：${error.message}`);throw error;}
  finally{button.disabled=false;}
}

function initialize() {
  setCollection('template');
  $('#base-filter').addEventListener('change', event => {filter.base = event.target.value; page = 0; renderGrid();});
  $('#asset-filter').addEventListener('change', event => {filter.asset = event.target.value; page = 0; renderGrid();});
  $('#pose-filter').addEventListener('change', event => {filter.pose = event.target.value; page = 0; renderGrid();});
  $('#view-filter').addEventListener('change', event => {filter.view = event.target.value; page = 0; renderGrid();});
  $('#status-filter').addEventListener('change', event => {filter.approval = event.target.value; page = 0; renderGrid();});
  $('#previous').addEventListener('click', () => {page = Math.max(0,page-1); renderGrid();});
  $('#next').addEventListener('click', () => {page++; renderGrid();});
  $('#close-detail').addEventListener('click', closeDetail);
  $('#detail').addEventListener('keydown', event => {if (event.key === 'Escape') closeDetail();});
  $('#save-issue').addEventListener('click', () => {
    if (!selectedCase) return;
    const types = [...$('#issue-options').querySelectorAll('input:checked')].map(input => input.value);
    localStorage.setItem(issueKey(selectedCase), JSON.stringify({types,note:$('#issue-note').value.trim(),updatedAt:new Date().toISOString(),state:'internal-review'}));
    setStatus(`已保存内部问题记录：${selectedCase.id}；此操作不会改写人工美术批准。`);
  });
  $('#save-coordination-review').addEventListener('click',saveCoordinationReview);
  $('#collection-template').addEventListener('click',()=>setCollection('template'));
  $('#collection-modular').addEventListener('click',()=>setCollection('modular'));
  $('#capture-all').addEventListener('click', () => downloadCaptureBundle().catch(() => {}));
  $('#capture-modules').addEventListener('click',()=>downloadModuleCaptureBundle().catch(()=>{}));
}

initialize();
refreshCoordinationReviewCache().then(renderGrid).catch(error=>setStatus(`协调性记录读取失败：${error.message}`));
