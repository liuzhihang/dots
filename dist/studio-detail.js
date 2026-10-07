import { copyText, copyAndOpen, downloadText, chatGPTUrlForPrompt, CHATGPT_URL_FOR_MANUAL_OPEN } from './studio-actions.js?v=92';
import { TARGET_PROFILES, STYLE_IDENTITIES, getArtwork, getAsset, getVariants, createSnapshot } from './studio-artwork-catalog.js?v=92';
import { TAGS, TAG_DIMENSIONS } from './studio-tags.js?v=92';
import { promptFor } from './studio-prompt.js?v=92';
import { loadAsset, downloadAsset } from './studio-asset-loader.js?v=92';

const DEFAULT_DETAIL_API = { TARGET_PROFILES, STYLE_IDENTITIES, TAGS, TAG_DIMENSIONS, getArtwork, getAsset, getVariants, createSnapshot, promptFor, loadAsset, downloadAsset };

const text = value => String(value ?? '').trim();
const node = (tag, className, content) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
};

function listify(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === 'object') return Object.entries(value).map(([key, item]) => ({ id: key, value: item }));
  return [];
}

function release(lease) {
  try { lease?.dispose?.(); } catch { /* Cleanup must not break overlay teardown. */ }
}

function lookupLabel(catalog, id) {
  const entry = Array.isArray(catalog) ? catalog.find(item => item?.id === id || item?.key === id) : catalog?.[id];
  if (typeof entry === 'string') return entry;
  return text(entry?.label || entry?.name || entry?.title || entry?.value) || text(id);
}

const FEATURE_PRIORITY = Object.freeze({
  style: 100, series: 96, accessory: 94, prop: 92, color: 90,
  material: 88, action: 86, shape: 75, expression: 72,
  'object-type': 60, theme: 48, content: 44
});
const NON_DISTINCTIVE_FEATURES = new Set([
  'action:front-static', 'action:standing', 'expression:neutral'
]);
const GENERIC_SHAPE_IDS = new Set(['shape:sphere', 'shape:rounded-square', 'shape:orb', 'shape:round']);
const GENERIC_SHAPE_LABELS = new Set(['圆球', '圆球形', '圆球角色', '球形', '圆角方形', '圆形', '方形']);
const GENERIC_OBJECT_TYPES = new Set([
  'object-type:orb-character', 'object-type:soft-geometry',
  'object-type:hooded-mascot', 'object-type:person'
]);

function artworkFeatures(artwork, api) {
  const ids = [...new Set([
    ...(Array.isArray(artwork?.tagIds) ? artwork.tagIds : []),
    ...(Array.isArray(artwork?.featureIds) ? artwork.featureIds : [])
  ])];
  const tags = listify(api?.TAGS);
  const features = artwork?.features;
  const featureRecords = Array.isArray(features) ? features : Object.values(features || {});
  const dimensions = api?.TAG_DIMENSIONS || {
    style: '风格 / 角色', 'object-type': '对象类型', shape: '外形', accessory: '配饰', prop: '道具',
    action: '动作', expression: '表情', background: '背景类型', color: '配色', material: '材质', usage: '用途'
  };
  const items = [];
  const seen = new Set();
  for (const id of ids) {
    const entry = tags.find(item => item?.id === id || item?.key === id) || api?.TAGS?.[id];
    const feature = featureRecords.find(item => item?.id === id || item?.ids?.includes(id));
    const state = feature?.state;
    if (['unknown', 'unrecorded', 'not-recorded'].includes(state)) continue;
    const dimension = text(entry?.dimension || String(id).split(':', 1)[0]);
    const dimensionLabel = text(lookupLabel(dimensions, dimension));
    const valueLabel = text(feature?.labelsById?.[id] || entry?.label || feature?.label || entry?.name || entry?.title);
    if (!dimensionLabel || !valueLabel) continue;
    const key = `${dimension}\u0000${valueLabel}`;
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({id, label: valueLabel, dimension, dimensionLabel, state, order: items.length, kind: 'feature'});
  }
  if (items.length || ids.length) return items;

  for (const feature of featureRecords) {
    const label = text(feature?.label || feature?.name || feature?.value);
    if (label && !seen.has(label)) {
      seen.add(label);
      const id = feature?.id || '';
      const dimension = text(feature?.dimension || id.split(':', 1)[0]);
      items.push({id, label, dimension, dimensionLabel: text(lookupLabel(dimensions, dimension)), state: feature?.state, order: items.length, kind: 'feature'});
    }
  }
  return items;
}

function isGenericShape(item) {
  return item.dimension === 'shape'
    && (GENERIC_SHAPE_IDS.has(item.id) || GENERIC_SHAPE_LABELS.has(item.label));
}

function rankedArtworkFeatures(artwork, api) {
  const all = artworkFeatures(artwork, api).filter(item => {
    if (!item.id || !item.dimension) return false;
    if (['background', 'usage'].includes(item.dimension)) return false;
    if (['none', 'not-applicable', 'notApplicable', 'unknown', 'unrecorded', 'not-recorded'].includes(item.state)) return false;
    if (/:(?:none|not-applicable)$/i.test(item.id) || /^无(?:配饰|道具|背景|用途)?$/.test(item.label)) return false;
    if (GENERIC_OBJECT_TYPES.has(item.id)) return false;
    return artwork.styleIdentity === 'grok' || !isGenericShape(item);
  });
  const score = item => FEATURE_PRIORITY[item.dimension] ?? 20;
  return all
    .filter(item => !NON_DISTINCTIVE_FEATURES.has(item.id))
    .sort((a, b) => score(b) - score(a) || a.order - b.order);
}

export function detailSelectedTagsFor(artwork, limit = 4, api = DEFAULT_DETAIL_API) {
  const count = Math.max(0, Number.isFinite(Number(limit)) ? Math.floor(Number(limit)) : 4);
  return rankedArtworkFeatures(artwork, api).slice(0, count);
}

function makeFeatureButton(item, onTag) {
  const tag = node('button', 'artwork-detail__tag artwork-detail__tag--feature', item.label);
  tag.type = 'button';
  tag.dataset.tagId = item.id;
  tag.dataset.dimension = item.dimension;
  tag.setAttribute('aria-label', `${item.dimensionLabel}：${item.label}`);
  tag.title = item.label;
  tag.addEventListener('click', () => onTag(item.id, item.dimension));
  return tag;
}

function makeTagList(artwork, api, onTag = () => {}) {
  const wrap = node('div', 'artwork-detail__tag-group');
  wrap.setAttribute('role', 'group');
  const list = node('ul', 'artwork-detail__tags');
  const selected = detailSelectedTagsFor(artwork, 4, api);
  wrap.hidden = selected.length === 0;
  for (const item of selected) {
    const listItem = node('li', 'artwork-detail__tag-item');
    listItem.append(makeFeatureButton(item, onTag));
    list.append(listItem);
  }
  wrap.append(list);
  return wrap;
}

function populateFeatureRecord(record, artwork, api, onTag) {
  record.replaceChildren();
  const byDimension = new Map();
  for (const item of artworkFeatures(artwork, api)) {
    if (!item.id || !item.dimension || !item.dimensionLabel) continue;
    if (['unknown', 'unrecorded', 'not-recorded'].includes(item.state)) continue;
    if (!byDimension.has(item.dimension)) byDimension.set(item.dimension, {label: item.dimensionLabel, items: []});
    byDimension.get(item.dimension).items.push(item);
  }
  for (const {label, items} of byDimension.values()) {
    const term = node('dt', '', label);
    const detail = node('dd', 'artwork-detail__feature-values');
    for (const item of items) detail.append(makeFeatureButton(item, onTag));
    record.append(term, detail);
  }
}

function assetSummaryText(asset) {
  if (!asset) return '';
  const mime = text(asset.mime).toLowerCase();
  const format = mime === 'image/png' ? 'PNG' : mime === 'image/webp' ? 'WebP' : mime === 'image/jpeg' ? 'JPEG' : '';
  if (!format || !asset.width || !asset.height) return '';
  const transparent = asset.alpha?.hasTransparency === true ? '透明 ' : '';
  return `${transparent}${format} · 静态 · ${asset.width} × ${asset.height} px`;
}

function applyOpticalBounds(image, asset) {
  const bounds = asset?.alpha?.visibleBounds;
  const width = Number(asset?.width);
  const height = Number(asset?.height);
  const x = Number(bounds?.x);
  const y = Number(bounds?.y);
  const visibleWidth = Number(bounds?.width);
  const visibleHeight = Number(bounds?.height);
  const values = [width, height, x, y, visibleWidth, visibleHeight];
  if (values.some(value => !Number.isFinite(value))
    || width <= 0 || height <= 0 || x < 0 || y < 0 || visibleWidth <= 0 || visibleHeight <= 0
    || x + visibleWidth > width || y + visibleHeight > height) {
    image.classList.remove('artwork-detail__image--optical');
    for (const property of ['--detail-image-width', '--detail-image-x', '--detail-image-y']) image.style.removeProperty(property);
    return;
  }
  const longestVisibleEdge = Math.max(visibleWidth, visibleHeight);
  const displayWidth = width / longestVisibleEdge * 90;
  image.width = width;
  image.height = height;
  image.style.setProperty('--detail-image-width', `${displayWidth}%`);
  image.style.setProperty('--detail-image-x', `${-((x + visibleWidth / 2) / width * 100)}%`);
  image.style.setProperty('--detail-image-y', `${-((y + visibleHeight / 2) / height * 100)}%`);
  image.classList.add('artwork-detail__image--optical');
}

function labelTargetProfiles(api) {
  const entries = listify(api?.TARGET_PROFILES);
  if (!entries.length) return [{ label: '目标平台', state: '安装未验证', note: '本作品没有已验证的目标安装资源。' }];
  const checkedDate = profile => text(profile?.queriedAt || profile?.checkedAt || profile?.source?.checkedAt).slice(0, 10);
  const official = (profile, note) => ({
    label: profile.platform,
    state: '资料已核对 · 安装未验证',
    note,
    sourceUrl: /^https:\/\//i.test(profile.sourceUrl || '') ? profile.sourceUrl : '',
    sourceType: '官方文档',
    checkedAt: checkedDate(profile)
  });
  const local = (profile, version, dimensions, frameLayout, states) => ({
    label: `本机 Pet ${version} 格式合同`,
    state: '本机工具格式合同，非 Web 通用要求',
    note: `透明 PNG/WebP；${dimensions}；最大 20 MiB；${frameLayout}；动作格：${states}。本期未制作目标包或验证安装。`,
    sourceType: '本机工具格式合同',
    checkedAt: checkedDate(profile)
  });
  return entries.map(profile => {
    switch (profile?.id) {
      case 'static-character-download':
        return {label: 'Dot Icon Studio 原图下载', state: '登记原图；校验后下载', note: '单张透明静态 PNG，按目录下载原始字节；不表示可安装 Dot 或 Pet。', sourceType: '本地素材目录', checkedAt: checkedDate(profile)};
      case 'chatgpt-work-web-custom-pet':
        return official(profile, '透明 PNG/WebP；1536 × 1872 px；最大 20 MiB。官方网页文档未规定帧布局；本期未制作或上传 Pet 包。');
      case 'chatgpt-dot-desktop':
        return official(profile, '可选择现有角色或 Pet；官方资料未说明任意静态 PNG 的直接导入格式。');
      case 'chatgpt-dot-mobile':
        return official(profile, '移动 App 的可用性依账号开放情况；官方资料未规定移动端角色图片导入格式。');
      case 'codex-local-pet-v1-contract':
        return local(profile, 'v1', '1536 × 1872 px', '8 × 9 格，每格 192 × 208 px，共 57 个动作格与 15 个空格', '待机、左右移动、挥手、跳跃、受阻、等待、工作、检查');
      case 'codex-local-pet-v2-contract':
        return local(profile, 'v2', '1536 × 2288 px', '8 × 11 格，每格 192 × 208 px，共 73 个动作/朝向格与 15 个空格', '待机、左右移动、挥手、跳跃、受阻、等待、工作、检查及 16 个朝向');
      default:
        return {
          label: text(profile?.platform || profile?.label || profile?.id) || '目标平台',
          state: '待验证',
          note: text(profile?.note || profile?.description) || '尚无已验证目标资源。',
          sourceUrl: /^https:\/\//i.test(profile?.sourceUrl || '') ? profile.sourceUrl : '',
          sourceType: profile?.sourceType === 'official documentation' ? '官方文档' : '资料记录',
          checkedAt: checkedDate(profile)
        };
    }
  }).filter(profile => profile.label);
}

function assetRecordLines(asset) {
  if (!asset) return [];
  const lines = [];
  if (asset.width && asset.height) lines.push(['图像尺寸', `${asset.width} × ${asset.height} px`]);
  if (asset.mime) lines.push(['MIME', asset.mime]);
  if (asset.byteSize) lines.push(['文件大小', `${asset.byteSize.toLocaleString()} bytes`]);
  if (asset.sha256) lines.push(['SHA-256', asset.sha256]);
  if (asset.resourceStatus) {
    const stateLabels = {
      'verified-source': '已与来源快照核对',
      'verified-in-browser': '已在浏览器核验',
      'unverified': '待验证'
    };
    lines.push(['资源状态', stateLabels[asset.resourceStatus] || '待核对']);
  }
  if (asset.alpha !== undefined) {
    const alpha = asset.alpha;
    const value = typeof alpha === 'boolean' ? (alpha ? '登记含 Alpha' : '登记不含 Alpha')
      : [alpha?.status || alpha?.state || (alpha?.hasTransparency ? '登记含透明像素' : alpha?.hasAlpha ? '登记含 Alpha 通道' : ''), alpha?.verified === true ? '验证记录通过' : alpha?.verified === false ? '验证记录未通过' : ''].filter(Boolean).join(' · ') || '待核对';
    lines.push(['Alpha 记录', value]);
  }
  if (asset.artApproval) {
    const approval = asset.artApproval;
    const approvalState = approval.status === 'approved' ? '登记批准' : approval.status === 'pending' ? '待人工确认' : '范围待核对';
    const approvalScope = approval.scope === 'scope.registeredLooks' ? '既有登记图库作品' : approval.scope === 'pose asset not individually listed in scope.registeredLooks' ? '该姿态未列入逐项批准名单' : '';
    lines.push(['美术确认', [approvalState, approvalScope].filter(Boolean).join(' · ') || '有记录，范围待核对']);
  }
  return lines;
}

/**
 * Create a single-view Artwork detail panel. `api` is injected by the app shell
 * so this view stays independent from legacy project/composition modules.
 */
export function createDetailView({ artworkId, snapshot, resumeState, api = DEFAULT_DETAIL_API, onReference = () => {}, onTag = () => {}, onArtworkChange = () => {}, notify = () => {} } = {}) {
  if (snapshot?.snapshot) snapshot = snapshot.snapshot;
  const isCompleteSnapshot = value => Boolean(value?.artwork && value?.asset && value.prompt != null);
  const resumeSnapshot = resumeState?.snapshot?.snapshot || resumeState?.snapshot;
  const resumeId = resumeSnapshot?.artwork?.id || resumeSnapshot?.artworkId;
  let acceptedResumeSnapshot = null;
  if (resumeId && api?.createSnapshot) {
    try {
      const canonical = api.createSnapshot(resumeId);
      const canonicalAsset = canonical?.asset || api.getAsset?.(canonical?.artwork?.assetRefs?.original);
      const savedPrompt = text(resumeSnapshot?.prompt?.text ?? resumeSnapshot?.prompt);
      const canonicalPrompt = text(canonical?.prompt?.text ?? canonical?.prompt);
      if (isCompleteSnapshot(canonical)
        && canonical.artwork.id === resumeId
        && resumeSnapshot?.asset?.id === canonicalAsset?.id
        && resumeSnapshot?.asset?.sha256 === canonicalAsset?.sha256
        && resumeSnapshot?.catalogRevision === canonical.catalogRevision
        && savedPrompt === canonicalPrompt) {
        acceptedResumeSnapshot = canonical;
      }
    } catch { /* A stale or invalid resume snapshot falls back to the requested Artwork. */ }
  }
  if (acceptedResumeSnapshot) snapshot = acceptedResumeSnapshot;
  if (!isCompleteSnapshot(snapshot) && api?.createSnapshot && (artworkId || resumeId)) snapshot = api.createSnapshot(artworkId || resumeId);
  if (!snapshot?.artwork || !api) throw new TypeError('作品详情需要冻结的 Artwork snapshot 和新目录 API。');

  const normalizeSnapshot = value => {
    const asset = value?.asset || api.getAsset?.(value?.artwork?.assetRefs?.original);
    return Object.freeze({ ...value, asset });
  };
  snapshot = normalizeSnapshot(snapshot);

  let active = snapshot;
  let promptLanguage = acceptedResumeSnapshot && resumeState?.promptLanguage === 'en' ? 'en' : 'zh';
  let copyFallbackOpen = Boolean(acceptedResumeSnapshot && resumeState?.copyFallbackOpen === true);
  let loading = false;
  let disposed = false;
  let imageController = null;
  let downloadController = null;
  let imageLease = null;
  let promptText = text(snapshot.prompt?.text ?? snapshot.prompt);
  let revision = 0;
  let readySettled = false;
  let resolveReady;
  const ready = new Promise(resolve => { resolveReady = resolve; });

  function settleReady(result) {
    if (readySettled) return;
    readySettled = true;
    resolveReady(result);
  }

  const root = node('section', 'artwork-detail');
  root.setAttribute('aria-labelledby', 'artwork-detail-title');
  const mediaColumn = node('div', 'artwork-detail__media-column');
  const media = node('div', 'artwork-detail__media');
  const image = node('img', 'artwork-detail__image');
  image.alt = `${text(snapshot.artwork.title) || '角色作品'}，作品原图`;
  image.decoding = 'async';
  image.hidden = true;
  const imageStatus = node('p', 'artwork-detail__image-status', '图片载入中…');
  imageStatus.setAttribute('role', 'status');
  media.append(image, imageStatus);
  const versionBar = node('div', 'artwork-detail__versions');
  const detailsColumn = node('div', 'artwork-detail__content');
  const title = node('h2', 'artwork-detail__title', text(snapshot.artwork.title) || '角色作品');
  title.id = 'artwork-detail-title';
  const description = node('p', 'artwork-detail__description', text(snapshot.artwork.description));
  const tags = makeTagList(snapshot.artwork, api, onTag);
  const specification = node('p', 'artwork-detail__asset-summary');
  const factsHeading = node('h3', 'artwork-detail__section-title', '标签与作品特征');
  factsHeading.classList.add('artwork-detail__visually-hidden');
  factsHeading.id = 'artwork-detail-tags-title';
  tags.setAttribute('aria-labelledby', factsHeading.id);
  const actions = node('div', 'artwork-detail__actions');
  const copyButton = node('button', 'artwork-detail__button artwork-detail__button--primary', '复制 Prompt');
  copyButton.type = 'button';
  const downloadButton = node('button', 'artwork-detail__button', '下载原图');
  downloadButton.type = 'button';
  const referenceButton = node('button', 'artwork-detail__button', '用参考图继续创作');
  referenceButton.type = 'button';
  const chatButton = node('button', 'artwork-detail__button artwork-detail__button--quiet', '在 ChatGPT 中创作');
  chatButton.type = 'button';
  const manualChatLink = node('a', 'artwork-detail__manual-chat-link', '手动打开 ChatGPT');
  manualChatLink.href = CHATGPT_URL_FOR_MANUAL_OPEN;
  manualChatLink.target = '_blank';
  manualChatLink.rel = 'noopener noreferrer';
  manualChatLink.hidden = true;
  const feedback = node('p', 'artwork-detail__feedback');
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  const copyFallback = node('div', 'artwork-detail__copy-fallback');
  const copyFallbackLabel = node('label', 'artwork-detail__copy-label', 'Prompt 全文（可手动选择复制）');
  const promptArea = node('textarea', 'artwork-detail__prompt-text');
  promptArea.readOnly = true;
  promptArea.rows = 7;
  promptArea.setAttribute('spellcheck', 'false');
  copyFallbackLabel.append(promptArea);
  const promptActions = node('div', 'artwork-detail__prompt-actions');
  const promptDownload = node('button', 'artwork-detail__button artwork-detail__button--small', '下载 Prompt TXT');
  promptDownload.type = 'button';
  const selectPrompt = node('button', 'artwork-detail__text-action', '选择全文');
  selectPrompt.type = 'button';
  promptActions.append(selectPrompt, promptDownload);
  copyFallback.append(copyFallbackLabel, promptActions);
  copyFallback.hidden = true;

  const promptBlock = node('section', 'artwork-detail__prompt-block');
  const promptHead = node('div', 'artwork-detail__prompt-heading');
  const promptLabel = node('strong', 'artwork-detail__prompt-label', '对应 Prompt');
  const promptDetails = node('details', 'artwork-detail__prompt-details');
  const promptSummary = node('summary', 'artwork-detail__prompt-summary', '展开完整 Prompt');
  const language = node('label', 'artwork-detail__language', '语言');
  const languageSelect = node('select', 'artwork-detail__language-select');
  for (const [value, label] of [['zh', '中文'], ['en', 'English']]) {
    const option = node('option', '', label);
    option.value = value;
    languageSelect.append(option);
  }
  language.append(languageSelect);
  promptHead.append(promptLabel, language);
  const promptExcerpt = node('p', 'artwork-detail__prompt-excerpt');
  const promptPreview = node('pre', 'artwork-detail__prompt-preview');
  promptDetails.append(promptSummary, promptPreview);
  promptBlock.append(promptHead, promptExcerpt, promptDetails);
  const targets = node('ul', 'artwork-detail__targets');
  const targetDetails = node('details', 'artwork-detail__target-details');
  const targetSummary = node('summary', '', 'Dot / Pet 目标支持与验证');
  const targetNotice = node('p', 'artwork-detail__target-notice', '当前是静态透明 PNG，暂无已验证 Dot/Pet 安装包。');
  targetDetails.append(targetSummary, targetNotice, targets);
  const assetDetails = node('details', 'artwork-detail__asset-details');
  const assetSummary = node('summary', '', '文件与来源记录');
  const assetRecord = node('dl', 'artwork-detail__asset-record');
  assetDetails.append(assetSummary, assetRecord);
  const featureDetails = node('details', 'artwork-detail__feature-details');
  const featureSummary = node('summary', '', '作品信息与完整特征');
  const featureRecord = node('dl', 'artwork-detail__feature-record');
  featureDetails.append(featureSummary, featureRecord);

  const secondaryActions = node('div', 'artwork-detail__secondary-actions');
  actions.append(copyButton, downloadButton);
  secondaryActions.append(chatButton, referenceButton);
  detailsColumn.append(title, description, factsHeading, tags, specification, actions, feedback, copyFallback, promptBlock, secondaryActions, manualChatLink, featureDetails, targetDetails, assetDetails);
  mediaColumn.append(media, versionBar);
  root.append(mediaColumn, detailsColumn);

  function report(message, isError = false) {
    feedback.textContent = message;
    feedback.dataset.state = isError ? 'error' : 'ok';
    if (message) notify(message, { error: isError });
  }

  function setBusy(value) {
    loading = value;
    root.dataset.loading = value ? 'true' : 'false';
    for (const control of [copyButton, downloadButton, referenceButton, chatButton, promptDownload, languageSelect]) control.disabled = value;
    versionBar.querySelectorAll('button[data-artwork-id]').forEach(control => { control.disabled = value; });
  }

  async function promptFor(snapshotValue, languageValue) {
    const resolved = await api.promptFor(snapshotValue.artwork, { language: languageValue, target: 'image' });
    return text(resolved?.text ?? resolved);
  }

  function renderArtwork(nextSnapshot, nextPrompt) {
    active = nextSnapshot;
    promptText = nextPrompt ?? text(nextSnapshot.prompt?.text ?? nextSnapshot.prompt);
    title.textContent = text(nextSnapshot.artwork.title) || '角色作品';
    description.textContent = text(nextSnapshot.artwork.description);
    const nextTags = makeTagList(nextSnapshot.artwork, api, onTag);
    nextTags.setAttribute('aria-labelledby', factsHeading.id);
    currentTags.replaceWith(nextTags);
    // Keep a stable reference for the next atomic replacement.
    currentTags = nextTags;
    specification.textContent = assetSummaryText(nextSnapshot.asset);
    specification.hidden = !specification.textContent;
    promptExcerpt.textContent = promptText;
    promptPreview.textContent = promptText;
    promptArea.value = promptText;
    copyFallback.hidden = !copyFallbackOpen;
    promptDetails.open = Boolean(copyFallbackOpen);
    targets.replaceChildren();
    for (const profile of labelTargetProfiles(api)) {
      const item = node('li', 'artwork-detail__target');
      const name = node('strong', '', profile.label);
      const state = node('span', 'artwork-detail__target-state', profile.state);
      const note = node('small', '', profile.note);
      item.append(name, state);
      if (profile.note) item.append(note);
      if (profile.checkedAt) item.append(node('small', 'artwork-detail__target-checked', `资料查询：${profile.checkedAt}`));
      if (profile.sourceType) item.append(node('small', 'artwork-detail__target-source-type', `来源类型：${profile.sourceType}`));
      if (/^https?:\/\//i.test(profile.sourceUrl)) {
        const source = node('a', 'artwork-detail__target-source', '查看目标说明');
        source.href = profile.sourceUrl;
        source.target = '_blank';
        source.rel = 'noopener noreferrer';
        item.append(source);
      } else if (profile.sourceUrl) {
        item.append(node('small', 'artwork-detail__target-source-ref', `来源：${profile.sourceUrl}`));
      }
      targets.append(item);
    }
    assetRecord.replaceChildren();
    for (const [label, value] of assetRecordLines(nextSnapshot.asset)) {
      const term = node('dt', '', label);
      const detail = node('dd', '', value);
      assetRecord.append(term, detail);
    }
    assetDetails.hidden = assetRecord.childElementCount === 0;
    populateFeatureRecord(featureRecord, nextSnapshot.artwork, api, onTag);
    featureDetails.hidden = featureRecord.childElementCount === 0;
    renderVariants();
  }

  let currentTags = tags;

  function renderVariants() {
    versionBar.replaceChildren();
    const groupId = active.artwork?.variantGroupId;
    if (!groupId || typeof api.getVariants !== 'function') {
      versionBar.hidden = true;
      return;
    }
    const variants = listify(api.getVariants(active.artwork.id));
    const published = variants.filter(item => {
      if (!item) return false;
      const id = typeof item === 'string' ? item : item.id;
      const candidate = (typeof item === 'string' || !item.status && !item.published && !item.publicationStatus)
        ? api.getArtwork?.(id) || item
        : item;
      return candidate?.status === 'published' || candidate?.published === true || candidate?.publicationStatus === 'published';
    });
    const unique = [];
    const seen = new Set([active.artwork.id]);
    for (const item of published) {
      const id = typeof item === 'string' ? item : item.id;
      if (!id || seen.has(id)) continue;
      seen.add(id);
      unique.push(typeof item === 'string' ? { id, title: '' } : item);
    }
    if (!unique.length) {
      versionBar.hidden = true;
      return;
    }
    versionBar.hidden = false;
    versionBar.setAttribute('aria-label', '同角色已发布变体');
    versionBar.append(node('span', 'artwork-detail__versions-label', '已制作变体'));
    for (const variant of unique) {
      const button = node('button', 'artwork-detail__version', text(variant.title || variant.name) || '查看变体');
      button.type = 'button';
      button.dataset.artworkId = variant.id;
      button.addEventListener('click', () => switchVariant(variant.id));
      versionBar.append(button);
    }
  }

  async function loadImage(snapshotValue, token, signal) {
    if (typeof api.loadAsset !== 'function') throw new Error('作品图片加载器不可用。');
    const lease = await api.loadAsset(snapshotValue.asset, { signal });
    if (disposed || signal.aborted || token !== revision) {
      release(lease);
      return null;
    }
    const probe = new Image();
    probe.decoding = 'async';
    probe.src = lease.url;
    if (typeof probe.decode === 'function') await probe.decode();
    else await new Promise((resolve, reject) => {
      probe.onload = resolve;
      probe.onerror = () => reject(new Error('作品图片无法解码。'));
    });
    if (disposed || signal.aborted || token !== revision) {
      release(lease);
      return null;
    }
    image.src = lease.url;
    image.alt = `${text(snapshotValue.artwork.title) || '角色作品'}，作品原图`;
    applyOpticalBounds(image, snapshotValue.asset);
    image.hidden = false;
    imageStatus.hidden = true;
    const previous = imageLease;
    imageLease = lease;
    release(previous);
    return true;
  }

  async function switchVariant(id) {
    if (loading || disposed) return;
    const token = ++revision;
    imageController?.abort();
    imageController = new AbortController();
    setBusy(true);
    imageStatus.hidden = false;
    imageStatus.textContent = '正在切换图片…';
    try {
      const nextSnapshot = normalizeSnapshot(await api.createSnapshot(id));
      if (disposed || token !== revision) return;
      if (!nextSnapshot?.artwork || nextSnapshot.artwork.status !== 'published' || !nextSnapshot.asset) throw new Error('该变体尚无可用的已发布图片。');
      const nextPrompt = await promptFor(nextSnapshot, promptLanguage);
      if (!nextPrompt) throw new Error('该变体没有与当前语言匹配的 Prompt。');
      const loaded = await loadImage(nextSnapshot, token, imageController.signal);
      if (!loaded || disposed || token !== revision) return;
      renderArtwork(nextSnapshot, nextPrompt);
      onArtworkChange(nextSnapshot.artwork.id);
      report('已切换作品。');
    } catch (error) {
      if (!disposed && token === revision && error?.name !== 'AbortError') {
        imageStatus.hidden = true;
        report(`未能载入该变体，仍显示上一张已载入作品。${text(error?.message)}`, true);
      }
    } finally {
      if (!disposed && token === revision) setBusy(false);
    }
  }

  async function changeLanguage(nextLanguage) {
    promptLanguage = nextLanguage === 'en' ? 'en' : 'zh';
    if (!active?.artwork) return;
    const token = revision;
    setBusy(true);
    try {
      const nextPrompt = await promptFor(active, promptLanguage);
      if (disposed || token !== revision || !nextPrompt) throw new Error('对应语言的 Prompt 暂不可用。');
      promptText = nextPrompt;
      promptExcerpt.textContent = promptText;
      promptPreview.textContent = promptText;
      promptArea.value = promptText;
      report('已切换 Prompt 语言。');
    } catch (error) {
      if (!disposed && token === revision) {
        languageSelect.value = promptLanguage === 'en' ? 'zh' : 'en';
        promptLanguage = languageSelect.value;
        report(text(error?.message) || 'Prompt 暂不可用。', true);
      }
    } finally {
      if (!disposed && token === revision) setBusy(false);
    }
  }

  copyButton.addEventListener('click', async () => {
    const frozen = active;
    const frozenTitle = text(active.artwork.title) || '当前作品';
    const frozenPrompt = promptText;
    const token = revision;
    const result = await copyText(frozenPrompt, {
      isCurrent: () => !disposed && active === frozen && revision === token
    });
    if (result.cancelled || disposed || active !== frozen || revision !== token) return;
    if (result.ok) {
      copyFallbackOpen = false;
      copyFallback.hidden = true;
      promptDetails.open = false;
      report(`${frozenTitle} 的 Prompt 已复制。`);
    } else {
      copyFallbackOpen = true;
      copyFallback.hidden = false;
      promptDetails.open = true;
      promptArea.value = frozenPrompt;
      promptArea.focus();
      promptArea.select();
      report('复制失败；已提供可手动选择的完整 Prompt。', true);
    }
  });
  downloadButton.addEventListener('click', async () => {
    if (loading || !active?.asset || typeof api.downloadAsset !== 'function') return;
    const frozen = active;
    downloadController?.abort();
    downloadController = new AbortController();
    downloadButton.disabled = true;
    let downloadLease;
    try {
      downloadLease = await api.downloadAsset(frozen.asset, { signal: downloadController.signal });
      if (!downloadLease?.blob) throw new Error('下载器没有返回目录绑定的图片字节。');
      if (!disposed) report('已开始下载原图。');
    } catch (error) {
      if (!disposed) report(`原图下载失败：${text(error?.message) || '请稍后重试。'}`, true);
    } finally {
      release(downloadLease);
      if (!disposed) downloadButton.disabled = false;
    }
  });
  promptDownload.addEventListener('click', () => {
    if (!downloadText(promptText, `${active.artwork.id}-${promptLanguage}-prompt.txt`)) report('Prompt TXT 下载失败；可从文本框手动复制。', true);
    else report('已请求下载当前作品对应的 Prompt TXT。');
  });
  selectPrompt.addEventListener('click', () => {
    promptArea.focus();
    promptArea.select();
  });
  languageSelect.addEventListener('change', () => changeLanguage(languageSelect.value));
  referenceButton.addEventListener('click', () => onReference(active.artwork.styleIdentity));
  chatButton.addEventListener('click', async () => {
    const frozen = active;
    const frozenPrompt = promptText;
    const token = revision;
    const result = await copyAndOpen(frozenPrompt, {
      isCurrent: () => !disposed && active === frozen && revision === token,
      notify: message => { if (!disposed && active === frozen && revision === token) report(message); }
    });
    if (result.cancelled || active !== frozen || disposed || revision !== token) return;
    manualChatLink.href = result.targetUrl || chatGPTUrlForPrompt(frozenPrompt);
    manualChatLink.textContent = '重新打开 ChatGPT（带入当前 Prompt）';
    manualChatLink.hidden = false;
    if (!result.copied) {
      copyFallbackOpen = true;
      copyFallback.hidden = false;
      promptDetails.open = true;
      promptArea.value = frozenPrompt;
      promptArea.focus();
      promptArea.select();
    }
  });

  renderArtwork(snapshot, promptText);
  languageSelect.value = promptLanguage;
  setBusy(true);
  imageController = new AbortController();
  const firstRevision = ++revision;
  const initialImage = loadImage(snapshot, firstRevision, imageController.signal).then(
    loaded => ({ok: loaded === true}),
    error => ({ok: false, error})
  );
  const initialPrompt = promptLanguage === 'zh'
    ? Promise.resolve({ok: true, prompt: promptText})
    : promptFor(snapshot, promptLanguage).then(
      prompt => prompt ? ({ok: true, prompt}) : ({ok: false, error: new Error('对应语言的 Prompt 暂不可用。')}),
      error => ({ok: false, error})
    );
  Promise.all([initialImage, initialPrompt]).then(([imageResult, promptResult]) => {
    if (disposed || firstRevision !== revision) {
      settleReady({ok: false, cancelled: true, artworkId: active?.artwork?.id});
      return;
    }
    if (imageResult.ok) {
      imageStatus.hidden = true;
    } else {
      image.hidden = true;
      imageStatus.hidden = false;
      imageStatus.textContent = '作品原图暂时无法载入。';
      if (imageResult.error?.name !== 'AbortError') report(`作品图片载入失败：${text(imageResult.error?.message) || '请关闭后重试。'}`, true);
    }
    if (promptResult.ok) {
      promptText = promptResult.prompt;
      promptExcerpt.textContent = promptText;
      promptPreview.textContent = promptText;
      promptArea.value = promptText;
    } else {
      promptLanguage = 'zh';
      languageSelect.value = 'zh';
      promptText = text(snapshot.prompt?.text ?? snapshot.prompt);
      promptExcerpt.textContent = promptText;
      promptPreview.textContent = promptText;
      promptArea.value = promptText;
      report(`对应语言的 Prompt 暂不可用，已恢复中文。${text(promptResult.error?.message)}`, true);
    }
    setBusy(false);
    settleReady({ok: imageResult.ok, imageOk: imageResult.ok, promptOk: promptResult.ok, artworkId: active?.artwork?.id});
  }).catch(error => {
    if (!disposed && firstRevision === revision) {
      image.hidden = true;
      imageStatus.hidden = false;
      imageStatus.textContent = '作品原图暂时无法载入。';
      report(`作品详情暂时无法载入：${text(error?.message) || '请关闭后重试。'}`, true);
      setBusy(false);
    }
    settleReady({ok: false, cancelled: disposed, artworkId: active?.artwork?.id});
  });

  return {
    element: root,
    title: '作品详情',
    ready,
    getResumeState() {
      return {snapshot: active, promptLanguage, copyFallbackOpen};
    },
    dispose() {
      disposed = true;
      revision += 1;
      imageController?.abort();
      downloadController?.abort();
      release(imageLease);
      imageLease = null;
      settleReady({ok: false, cancelled: true, artworkId: active?.artwork?.id});
    }
  };
}
