import { copyText, copyAndOpen, CHATGPT_URL_FOR_MANUAL_OPEN } from './studio-actions.js?v=96';
import { ARTWORKS, createSnapshot, getArtwork, getAsset, getVariants } from './studio-artwork-catalog.js?v=96';
import { TAGS, TAG_DIMENSIONS } from './studio-tags.js?v=96';
import { SERIES } from './studio-content.js?v=96';
import { buildArtworkEditPrompt, promptFor } from './studio-prompt.js?v=96';
import { downloadAsset, loadAsset } from './studio-asset-loader.js?v=96';

const DEFAULT_DETAIL_API = { ARTWORKS, TAGS, TAG_DIMENSIONS, SERIES, createSnapshot, getArtwork, getAsset, getVariants, promptFor, buildArtworkEditPrompt, downloadAsset, loadAsset };
const LANGUAGES = Object.freeze({
  en: {
    title: 'Character details', imageAlt: name => `${name} artwork`, imageLoading: 'Loading the original artwork…',
    imageFailed: 'The original image could not be loaded.', retry: 'Retry image', unavailable: 'This artwork version is unavailable.',
    copyOriginal: 'Copy Prompt', download: 'Download original', openChatGPT: 'Open in ChatGPT', manualChatGPT: 'Open ChatGPT manually',
    promptHeading: 'Prompt preview', promptSummary: 'View full Prompt', promptLoading: 'Loading the original Prompt…', facts: 'Details', editHeading: 'Create my version',
    editNote: 'This only changes the Prompt. The artwork has not been changed.', keep: 'Keep', remove: 'Remove', replace: 'Replace',
    replacementPlaceholder: 'Describe the replacement', additional: 'Additional direction', additionalPlaceholder: 'Describe any other changes',
    modifiedPreview: 'Preview modified Prompt', copyModified: 'Copy modified Prompt', openModified: 'Open modified Prompt in ChatGPT',
    noChanges: 'Choose a change or add a direction to create a modified Prompt.', invalidReplacement: 'Add replacement text or choose Keep.',
    copied: 'Prompt copied.', copyFailed: 'Copy failed. Select and copy the full text below.',
    originalLabel: 'Original Prompt — select and copy', modifiedLabel: 'Modified Prompt — select and copy', selectText: 'Select full text',
    downloadStarted: 'Original artwork download started.', downloadFailed: 'Original artwork download failed. Try again.',
    chatCopyFailed: 'Prompt could not be copied. The full text is available below; open ChatGPT manually.',
    chatOpened: 'ChatGPT opened. Check the Prompt there, attach an image yourself if needed, then send it.',
    chatBlocked: 'ChatGPT could not be opened. Copy the Prompt and open ChatGPT manually.',
    variantLoading: 'Loading this version…', variantFailed: 'This version could not be loaded. The previous version remains selected.',
    languageFailed: 'The Prompt is unavailable in this language.',
    changes: 'Requested changes', removeInstruction: label => `Remove ${label}, while preserving the character identity and every unchanged detail.`,
    replaceInstruction: (label, value) => `Replace ${label} with ${value}.`,
    useReference: 'If you attach a reference image in ChatGPT, use it as visual guidance while preserving the character identity above. If you do not attach an image, follow the text Prompt alone. This site has not accessed or analyzed any image.'
  },
  'zh-CN': {
    title: '角色详情', imageAlt: name => `${name}作品原图`, imageLoading: '正在载入原图…',
    imageFailed: '原图暂时无法载入。', retry: '重试载入', unavailable: '此作品版本不可用。',
    copyOriginal: '复制 Prompt', download: '下载原图', openChatGPT: '在 ChatGPT 中创作', manualChatGPT: '手动打开 ChatGPT',
    promptHeading: 'Prompt 预览', promptSummary: '查看完整 Prompt', promptLoading: '正在载入原始 Prompt…', facts: '作品特点', editHeading: '创作我的版本',
    editNote: '这里只修改 Prompt，作品图片尚未改变。', keep: '保留', remove: '移除', replace: '替换',
    replacementPlaceholder: '描述替换内容', additional: '其他创作要求', additionalPlaceholder: '描述其他修改',
    modifiedPreview: '预览修改后的 Prompt', copyModified: '复制修改后的 Prompt', openModified: '在 ChatGPT 中使用修改后的 Prompt',
    noChanges: '选择一项修改或补充要求，以生成新 Prompt。', invalidReplacement: '请填写替换内容，或改为保留。',
    copied: 'Prompt 已复制。', copyFailed: '复制失败；可在下方选择并复制完整文本。',
    originalLabel: '原始 Prompt（可选择并复制）', modifiedLabel: '修改后的 Prompt（可选择并复制）', selectText: '选择全文',
    downloadStarted: '已开始下载原图。', downloadFailed: '原图下载失败，请重试。',
    chatCopyFailed: '无法复制 Prompt；完整文本已显示，可手动打开 ChatGPT。',
    chatOpened: '已打开 ChatGPT。请在那里检查 Prompt，按需自行附图并发送。',
    chatBlocked: '无法打开 ChatGPT；请复制 Prompt 后手动打开。',
    variantLoading: '正在载入此版本…', variantFailed: '无法载入此版本，仍保留上一张已成功的作品。',
    languageFailed: '此语言的 Prompt 暂不可用。',
    changes: '修改要求', removeInstruction: label => `移除${label}，同时保留角色身份和所有未修改的细节。`,
    replaceInstruction: (label, value) => `将${label}替换为${value}。`,
    useReference: '如果你在 ChatGPT 中自行附加参考图，请将其作为视觉参考并保持上述角色身份；未附图时，请只根据文字创作。本网站没有读取或分析任何图片。'
  }
});

const FEATURE_PRIORITY = Object.freeze({ style: 100, series: 96, accessory: 94, prop: 92, color: 90, material: 88, action: 86, shape: 75, expression: 72, 'object-type': 60, theme: 48, content: 44 });
const EXCLUDED_STATES = new Set(['none', 'not-applicable', 'notApplicable', 'unknown', 'unrecorded', 'not-recorded']);
const DIMENSION_LABELS = Object.freeze({
  en: { style: 'Identity', series: 'Series', accessory: 'Accessory', 'head-accessory': 'Head accessory', 'body-accessory': 'Body accessory', 'facial-features': 'Features', clothing: 'Clothing', prop: 'Object', color: 'Color', material: 'Material', action: 'Action', shape: 'Shape', expression: 'Expression', 'object-type': 'Character type', theme: 'Theme', content: 'Content' },
  'zh-CN': { style: '身份', series: '系列', accessory: '配饰', 'head-accessory': '头部配饰', 'body-accessory': '身体配饰', 'facial-features': '五官', clothing: '衣物', prop: '道具', color: '配色', material: '材质', action: '动作', shape: '外形', expression: '表情', 'object-type': '角色类型', theme: '主题', content: '内容' }
});

const text = value => String(value ?? '').trim();
const normalizeLanguage = value => value === 'en' ? 'en' : 'zh-CN';
const promptLanguage = value => value === 'en' ? 'en' : 'zh';
const node = (tag, className, content) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
};
const release = lease => { try { lease?.dispose?.(); } catch { /* Releasing a Blob URL must not break state recovery. */ } };
const versionOf = snapshot => text(snapshot?.artwork?.version || snapshot?.artwork?.revision || snapshot?.asset?.version || '');
const published = artwork => artwork && (artwork.publicationStatus === 'published' || artwork.status === 'published' || artwork.published === true);

function localized(record, field, language) {
  const map = record?.[`${field}ByLanguage`];
  const aliases = record?.labelByLanguage || record?.nameByLanguage;
  return text(map?.[language] || map?.[promptLanguage(language)] || aliases?.[language] || aliases?.[promptLanguage(language)] || record?.[field] || record?.label || record?.name);
}

function asArray(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === 'object') return Object.entries(value).map(([id, item]) => typeof item === 'string' ? { id, label: item } : { id, ...item });
  return [];
}

function tagFor(api, id) {
  const entries = asArray(api?.TAGS);
  return entries.find(item => item?.id === id || item?.key === id) || null;
}

function featureFacts(artwork, api, language) {
  const features = artwork?.features;
  const groups = Array.isArray(features) ? features : Object.entries(features || {}).map(([dimension, value]) => ({ dimension, ...value }));
  const ids = [...new Set([...(artwork?.featureIds || []), ...(artwork?.tagIds || [])])];
  const facts = [];
  for (const id of ids) {
    const group = groups.find(item => item?.id === id || item?.ids?.includes(id) || item?.labelsById?.[id]);
    const tag = tagFor(api, id);
    const state = group?.state || tag?.state || 'known';
    if (EXCLUDED_STATES.has(state)) continue;
    const dimension = text(tag?.dimension || group?.dimension || String(id).split(':', 1)[0]);
    if (['series', 'background', 'usage'].includes(dimension)) continue;
    const labelByLanguage = tag?.labelByLanguage || group?.labelsByLanguage?.[id] || group?.labelByLanguage;
    const label = text(labelByLanguage?.[language] || labelByLanguage?.[promptLanguage(language)] || group?.labelsById?.[id] || tag?.label || group?.label || tag?.name);
    if (!label) continue;
    facts.push({ id, dimension, label, state, order: facts.length });
  }
  const seen = new Set();
  const unique = facts.filter(item => {
    const key = `${item.dimension}\u0000${item.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const preferredIds = Array.isArray(artwork?.detailFactIds) ? artwork.detailFactIds : [];
  if (preferredIds.length) {
    const byId = new Map(unique.map(item => [item.id, item]));
    const preferred = preferredIds.map(id => byId.get(id)).filter(Boolean);
    const preferredSet = new Set(preferredIds);
    const remaining = unique.filter(item => !preferredSet.has(item.id));
    remaining.sort((a, b) => (FEATURE_PRIORITY[b.dimension] ?? 20) - (FEATURE_PRIORITY[a.dimension] ?? 20) || a.order - b.order);
    return [...preferred, ...remaining];
  }
  return unique.sort((a, b) => (FEATURE_PRIORITY[b.dimension] ?? 20) - (FEATURE_PRIORITY[a.dimension] ?? 20) || a.order - b.order);
}

/** Public helper used by page summaries; it returns only real, localized facts. */
export function detailSelectedTagsFor(artwork, limit = 4, api = DEFAULT_DETAIL_API, language = 'en') {
  const count = Math.max(0, Number.isFinite(Number(limit)) ? Math.floor(Number(limit)) : 4);
  return featureFacts(artwork, api, normalizeLanguage(language)).slice(0, count);
}

function promptText(value) {
  return text(typeof value === 'string' ? value : value?.text);
}

function snapshotFor(api, id) {
  const value = api?.createSnapshot?.(id);
  if (!value?.artwork || value.artwork.id !== id || !published(value.artwork)) return null;
  const asset = value.asset || api.getAsset?.(value.artwork.assetRefs?.original);
  if (!asset || !asset.path || !asset.sha256) return null;
  return Object.freeze({ ...value, asset });
}

function isSameVariantFamily(current, candidate) {
  if (!candidate || !published(candidate) || !current?.artwork?.variantGroupId) return false;
  if (candidate.variantGroupId !== current.artwork.variantGroupId || candidate.id === current.artwork.id) return false;
  const currentIdentity = current.artwork.characterId || current.artwork.characterRef || current.artwork.styleIdentity;
  const candidateIdentity = candidate.characterId || candidate.characterRef || candidate.styleIdentity;
  return !currentIdentity || !candidateIdentity || currentIdentity === candidateIdentity;
}

export function createDetailController({ api = DEFAULT_DETAIL_API, onClose = () => {}, onVersion = () => {}, language = 'en', notify = () => {} } = {}) {
  let currentLanguage = normalizeLanguage(language);
  let active = null;
  let imageLease = null;
  let imageController = null;
  let sessionId = 0;
  let languageRequest = 0;
  let variantRequest = 0;
  let isClosed = true;
  let error = '';
  let fallbackText = '';
  let fallbackKind = 'original';
  let originalPrompt = '';
  let edits = new Map();
  let additionalDirection = '';
  let variantLoading = false;

  const root = node('article', 'artwork-detail');
  root.setAttribute('aria-labelledby', 'artwork-detail-title');
  root.dataset.state = 'empty';
  const mediaColumn = node('div', 'artwork-detail__media-column');
  const media = node('div', 'artwork-detail__media');
  const image = node('img', 'artwork-detail__image');
  image.decoding = 'async';
  image.hidden = true;
  const imageStatus = node('div', 'artwork-detail__image-status');
  imageStatus.setAttribute('role', 'status');
  const imageMessage = node('p', '', '');
  const imageRetry = node('button', 'artwork-detail__retry', '');
  imageRetry.type = 'button';
  imageRetry.hidden = true;
  imageStatus.append(imageMessage, imageRetry);
  media.append(image, imageStatus);
  const variants = node('nav', 'artwork-detail__versions');
  variants.hidden = true;
  variants.setAttribute('aria-label', '');
  mediaColumn.append(media, variants);

  const content = node('div', 'artwork-detail__content');
  const title = node('h3', 'artwork-detail__title', '');
  title.id = 'artwork-detail-title';
  title.tabIndex = -1;
  const description = node('p', 'artwork-detail__description');
  const tags = node('ul', 'artwork-detail__tags');
  tags.setAttribute('aria-label', '');
  const feedback = node('p', 'artwork-detail__feedback');
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');

  const actions = node('div', 'artwork-detail__actions');
  const copyOriginalButton = node('button', 'artwork-detail__button artwork-detail__button--primary artwork-detail__copy-original', '');
  copyOriginalButton.type = 'button';
  const downloadButton = node('button', 'artwork-detail__button artwork-detail__download-original', '');
  downloadButton.type = 'button';
  const openOriginalButton = node('button', 'artwork-detail__button artwork-detail__open-chatgpt-original', '');
  openOriginalButton.type = 'button';
  actions.append(copyOriginalButton, downloadButton, openOriginalButton);

  const promptDetails = node('details', 'artwork-detail__prompt-details');
  const promptHeading = node('h4', 'artwork-detail__prompt-heading', '');
  const promptExcerpt = node('p', 'artwork-detail__prompt-excerpt', '');
  const promptSummary = node('summary', 'artwork-detail__prompt-summary', '');
  const promptPreview = node('pre', 'artwork-detail__prompt-preview');
  promptDetails.append(promptSummary, promptPreview);

  const editDetails = node('details', 'artwork-detail__create-version');
  const editSummary = node('summary', 'artwork-detail__create-version-summary', '');
  const editContent = node('div', 'artwork-detail__edit-content');
  const editNote = node('p', 'artwork-detail__edit-note');
  const factRows = node('div', 'artwork-detail__edit-facts');
  const additionalLabel = node('label', 'artwork-detail__additional-label');
  const additionalLabelText = node('span', '', '');
  const additionalInput = node('textarea', 'artwork-detail__additional-direction');
  additionalInput.rows = 3;
  additionalInput.maxLength = 2000;
  additionalLabel.append(additionalLabelText, additionalInput);
  const editError = node('p', 'artwork-detail__edit-error');
  editError.setAttribute('role', 'status');
  const modifiedDetails = node('details', 'artwork-detail__modified-details');
  const modifiedSummary = node('summary', 'artwork-detail__modified-summary', '');
  const modifiedPreview = node('pre', 'artwork-detail__modified-preview');
  modifiedDetails.append(modifiedSummary, modifiedPreview);
  const editActions = node('div', 'artwork-detail__edit-actions');
  const copyModifiedButton = node('button', 'artwork-detail__button artwork-detail__copy-modified', '');
  copyModifiedButton.type = 'button';
  const openModifiedButton = node('button', 'artwork-detail__button artwork-detail__open-chatgpt-modified', '');
  openModifiedButton.type = 'button';
  editActions.append(copyModifiedButton, openModifiedButton);
  editContent.append(editNote, factRows, additionalLabel, editError, modifiedDetails, editActions);
  editDetails.append(editSummary, editContent);

  const fallback = node('section', 'artwork-detail__copy-fallback');
  fallback.hidden = true;
  fallback.setAttribute('aria-label', '');
  const fallbackLabel = node('label', 'artwork-detail__fallback-label');
  const fallbackLabelText = node('span', '', '');
  const fallbackArea = node('textarea', 'artwork-detail__fallback-text');
  fallbackArea.readOnly = true;
  fallbackArea.rows = 8;
  fallbackArea.setAttribute('spellcheck', 'false');
  fallbackLabel.append(fallbackLabelText, fallbackArea);
  const fallbackActions = node('div', 'artwork-detail__fallback-actions');
  const selectFallback = node('button', 'artwork-detail__button artwork-detail__select-fallback', '');
  selectFallback.type = 'button';
  const manualChat = node('a', 'artwork-detail__manual-chat', '');
  manualChat.href = CHATGPT_URL_FOR_MANUAL_OPEN;
  manualChat.target = '_blank';
  manualChat.rel = 'noopener noreferrer';
  fallbackActions.append(selectFallback, manualChat);
  fallback.append(fallbackLabel, fallbackActions);

  content.append(title, description, tags, actions, feedback, promptHeading, promptExcerpt, promptDetails, editDetails, fallback);
  root.append(mediaColumn, content);

  const lang = () => LANGUAGES[currentLanguage];
  const setFeedback = (message, failed = false) => {
    feedback.textContent = message;
    feedback.dataset.state = failed ? 'error' : 'ok';
    if (message) notify(message, { error: failed });
  };
  const setImageMessage = (message, showRetry = false) => {
    imageMessage.textContent = message;
    imageRetry.hidden = !showRetry;
    imageRetry.textContent = lang().retry;
    imageStatus.hidden = false;
  };
  const factsForActive = () => active ? featureFacts(active.artwork, api, currentLanguage) : [];

  function getModifiedPrompt() {
    if (!originalPrompt || !active) return '';
    const requestedEdits = [...edits.values()].filter(item => item.action !== 'keep').map(item => ({
      label: item.label,
      action: item.action,
      replacement: item.replacement
    }));
    try {
      // Keep the builder injected by the module to ensure user intent cannot edit catalog data.
      return (api.buildArtworkEditPrompt || buildArtworkEditPrompt)({ basePrompt: originalPrompt, edits: requestedEdits, additionalDirection, language: currentLanguage });
    } catch (cause) {
      editError.textContent = text(cause?.message) || lang().invalidReplacement;
      return '';
    }
  }

  function renderLocalizedLabels() {
    const strings = lang();
    copyOriginalButton.textContent = strings.copyOriginal;
    downloadButton.textContent = strings.download;
    openOriginalButton.textContent = strings.openChatGPT;
    promptDetails.setAttribute('aria-label', strings.promptHeading);
    promptHeading.textContent = strings.promptHeading;
    promptSummary.textContent = strings.promptSummary;
    tags.setAttribute('aria-label', strings.facts);
    editSummary.textContent = strings.editHeading;
    editNote.textContent = strings.editNote;
    additionalLabelText.textContent = strings.additional;
    additionalInput.placeholder = strings.additionalPlaceholder;
    modifiedSummary.textContent = strings.modifiedPreview;
    copyModifiedButton.textContent = strings.copyModified;
    openModifiedButton.textContent = strings.openModified;
    fallbackLabelText.textContent = fallbackKind === 'modified' ? strings.modifiedLabel : strings.originalLabel;
    selectFallback.textContent = strings.selectText;
    manualChat.textContent = strings.manualChatGPT;
    imageRetry.textContent = strings.retry;
    if (active) {
      title.textContent = localized(active.artwork, 'title', currentLanguage) || (currentLanguage === 'en' ? 'Artwork' : '角色作品');
      description.textContent = localized(active.artwork, 'description', currentLanguage);
      image.alt = strings.imageAlt(title.textContent);
      variants.setAttribute('aria-label', currentLanguage === 'en' ? 'Artwork versions' : '作品版本');
      renderTags();
      renderFactRows();
      promptPreview.textContent = originalPrompt;
      promptExcerpt.textContent = promptExcerptFor(originalPrompt);
      updateModifiedPreview();
      fallbackArea.value = fallbackText;
      fallback.hidden = !fallbackText;
      fallbackLabelText.textContent = fallbackKind === 'modified' ? strings.modifiedLabel : strings.originalLabel;
    }
  }

  function promptExcerptFor(value) {
    const compact = text(value).replace(/\s+/g, ' ');
    return compact.length > 230 ? `${compact.slice(0, 227).trimEnd()}…` : compact;
  }

  function renderTags() {
    tags.replaceChildren();
    if (!active) return;
    for (const fact of detailSelectedTagsFor(active.artwork, 4, api, currentLanguage)) {
      const item = node('li', 'artwork-detail__tag', fact.label);
      item.dataset.tagId = fact.id;
      item.dataset.dimension = fact.dimension;
      tags.append(item);
    }
    const seriesIds = Array.isArray(active.artwork.seriesIds) ? active.artwork.seriesIds : active.artwork.seriesId ? [active.artwork.seriesId] : [];
    const series = asArray(api.SERIES);
    for (const id of seriesIds.slice(0, Math.max(0, 4 - tags.childElementCount))) {
      const record = series.find(item => item.id === id);
      const label = localized(record, 'name', currentLanguage) || localized(record, 'title', currentLanguage);
      if (label && ![...tags.children].some(item => item.textContent === label)) tags.append(node('li', 'artwork-detail__tag artwork-detail__tag--series', label));
    }
  }

  function renderFactRows() {
    factRows.replaceChildren();
    if (!active) return;
    const strings = lang();
    const allFacts = factsForActive();
    const selectedIds = Array.isArray(active.artwork.detailFactIds) ? active.artwork.detailFactIds : [];
    const editFacts = selectedIds.length ? selectedIds.map(id => allFacts.find(fact => fact.id === id)).filter(Boolean) : allFacts;
    for (const fact of editFacts) {
      const row = node('div', 'artwork-detail__edit-fact');
      row.dataset.featureId = fact.id;
      const dimensionNames = DIMENSION_LABELS[currentLanguage];
      const dimensions = api.TAG_DIMENSIONS;
      const rawDimensionLabel = dimensions?.[fact.dimension];
      const dimensionLabel = rawDimensionLabel && typeof rawDimensionLabel === 'object'
        ? rawDimensionLabel[currentLanguage] || rawDimensionLabel[promptLanguage(currentLanguage)]
        : currentLanguage === 'zh-CN' ? rawDimensionLabel : dimensionNames[fact.dimension] || rawDimensionLabel;
      const label = node('label', 'artwork-detail__edit-fact-label', `${text(dimensionLabel) || dimensionNames[fact.dimension] || fact.dimension}: ${fact.label}`);
      const select = node('select', 'artwork-detail__edit-fact-action');
      select.setAttribute('aria-label', `${label.textContent} — ${strings.editHeading}`);
      for (const [value, titleText] of [['keep', strings.keep], ['remove', strings.remove], ['replace', strings.replace]]) {
        const option = node('option', '', titleText);
        option.value = value;
        select.append(option);
      }
      const replacement = node('input', 'artwork-detail__replacement');
      replacement.type = 'text';
      replacement.maxLength = 160;
      replacement.placeholder = strings.replacementPlaceholder;
      replacement.setAttribute('aria-label', `${strings.replace}: ${fact.label}`);
      replacement.hidden = true;
      const currentEdit = edits.get(fact.id) || { action: 'keep', replacement: '', label: fact.label };
      if (edits.has(fact.id)) currentEdit.label = fact.label;
      select.value = currentEdit.action;
      replacement.value = currentEdit.replacement;
      replacement.hidden = currentEdit.action !== 'replace';
      select.addEventListener('change', () => {
        const next = edits.get(fact.id) || { label: fact.label, replacement: '' };
        next.label = fact.label;
        next.action = select.value;
        if (next.action !== 'replace') next.replacement = '';
        edits.set(fact.id, next);
        replacement.hidden = next.action !== 'replace';
        editError.textContent = '';
        updateModifiedPreview();
      });
      replacement.addEventListener('input', () => {
        const next = edits.get(fact.id) || { label: fact.label, action: 'replace', replacement: '' };
        next.label = fact.label;
        next.action = 'replace';
        next.replacement = replacement.value;
        edits.set(fact.id, next);
        editError.textContent = '';
        updateModifiedPreview();
      });
      row.append(label, select, replacement);
      factRows.append(row);
    }
  }

  function updateModifiedPreview() {
    manualChat.hidden = true;
    manualChat.href = CHATGPT_URL_FOR_MANUAL_OPEN;
    const modified = getModifiedPrompt();
    modifiedPreview.textContent = modified;
    const invalid = [...edits.values()].some(item => item.action === 'replace' && !text(item.replacement));
    const hasChanges = [...edits.values()].some(item => item.action !== 'keep') || Boolean(text(additionalDirection));
    const available = Boolean(modified && hasChanges && !invalid);
    copyModifiedButton.disabled = !available;
    openModifiedButton.disabled = !available;
    modifiedDetails.hidden = !available;
    editError.textContent = invalid ? lang().invalidReplacement : hasChanges ? '' : lang().noChanges;
  }

  function setFallback(value, kind) {
    fallbackText = String(value ?? '');
    fallbackKind = kind;
    fallbackArea.value = fallbackText;
    fallbackLabelText.textContent = kind === 'modified' ? lang().modifiedLabel : lang().originalLabel;
    fallback.hidden = !fallbackText;
    if (fallbackText) {
      try { fallbackArea.focus({ preventScroll: true }); fallbackArea.select(); } catch { /* Browser may decline programmatic focus. */ }
    }
  }

  async function promptForSnapshot(snapshot, languageValue) {
    const resolved = await api.promptFor(snapshot.artwork, { language: promptLanguage(languageValue), target: 'image' });
    const value = promptText(resolved);
    if (!value) throw new Error(lang().languageFailed);
    return value;
  }

  async function loadVerifiedImage(snapshot, token, signal) {
    if (typeof api.loadAsset !== 'function') throw new Error('Image loader unavailable.');
    const lease = await api.loadAsset(snapshot.asset, { signal });
    if (signal.aborted || token !== sessionId) { release(lease); return null; }
    const probe = new Image();
    probe.decoding = 'async';
    probe.src = lease.url;
    try {
      if (typeof probe.decode === 'function') await probe.decode();
      else await new Promise((resolve, reject) => { probe.onload = resolve; probe.onerror = () => reject(new Error('Image decoding failed.')); });
    } catch (cause) {
      release(lease);
      throw cause;
    }
    if (signal.aborted || token !== sessionId) { release(lease); return null; }
    return lease;
  }

  function renderVariants() {
    variants.replaceChildren();
    variants.hidden = true;
    if (!active?.artwork?.variantGroupId || typeof api.getVariants !== 'function') return;
    const candidates = asArray(api.getVariants(active.artwork.id)).filter(item => isSameVariantFamily(active, item));
    const seen = new Set([active.artwork.id]);
    const unique = candidates.filter(item => {
      if (!item?.id || seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
    if (!unique.length) return;
    variants.hidden = false;
    for (const variant of unique) {
      const versionButton = node('button', 'artwork-detail__version', localized(variant, 'title', currentLanguage) || variant.id);
      versionButton.type = 'button';
      versionButton.dataset.artworkId = variant.id;
      versionButton.dataset.version = text(variant.version || variant.revision || '');
      versionButton.setAttribute('aria-current', variant.id === active.artwork.id ? 'true' : 'false');
      versionButton.disabled = variantLoading || variant.id === active.artwork.id;
      versionButton.addEventListener('click', () => switchVariant(variant.id));
      variants.append(versionButton);
    }
  }

  function renderSnapshot(snapshot, prompt, lease) {
    const previousLease = imageLease;
    active = snapshot;
    originalPrompt = prompt;
    edits = new Map();
    additionalDirection = '';
    fallbackText = '';
    error = '';
    fallback.hidden = true;
    manualChat.hidden = true;
    promptDetails.open = false;
    editDetails.open = false;
    fallback.hidden = true;
    root.dataset.artworkId = snapshot.artwork.id;
    root.dataset.version = versionOf(snapshot);
    root.dataset.state = 'ready';
    title.textContent = localized(snapshot.artwork, 'title', currentLanguage) || (currentLanguage === 'en' ? 'Artwork' : '角色作品');
    description.textContent = localized(snapshot.artwork, 'description', currentLanguage);
    image.alt = lang().imageAlt(title.textContent);
    if (lease) {
      image.src = lease.url;
      image.hidden = false;
      imageStatus.hidden = true;
      imageLease = lease;
      release(previousLease);
    }
    promptPreview.textContent = prompt;
    promptExcerpt.textContent = promptExcerptFor(prompt);
    renderTags();
    renderFactRows();
    renderVariants();
    additionalInput.value = '';
    updateModifiedPreview();
  }

  function unavailable(message = lang().unavailable) {
    active = null;
    originalPrompt = '';
    error = message;
    root.dataset.state = 'unavailable';
    delete root.dataset.artworkId;
    delete root.dataset.version;
    title.textContent = message;
    description.textContent = '';
    tags.replaceChildren();
    variants.replaceChildren();
    variants.hidden = true;
    image.hidden = true;
    image.removeAttribute('src');
    setImageMessage(message, false);
    fallbackText = '';
    fallback.hidden = true;
    fallbackArea.value = '';
    manualChat.hidden = true;
    promptPreview.textContent = '';
    promptExcerpt.textContent = '';
    promptDetails.hidden = true;
    editDetails.hidden = true;
    for (const button of [copyOriginalButton, downloadButton, openOriginalButton, copyModifiedButton, openModifiedButton]) button.disabled = true;
  }

  imageRetry.addEventListener('click', async () => {
    if (!active) return;
    const frozen = active;
    const token = sessionId;
    imageController?.abort();
    imageController = new AbortController();
    setImageMessage(lang().imageLoading, false);
    try {
      const lease = await loadVerifiedImage(frozen, token, imageController.signal);
      if (!lease || token !== sessionId || active !== frozen) return;
      const previous = imageLease;
      image.src = lease.url;
      image.hidden = false;
      imageStatus.hidden = true;
      imageLease = lease;
      release(previous);
      setFeedback('');
    } catch (cause) {
      if (token !== sessionId || active !== frozen || cause?.name === 'AbortError') return;
      setImageMessage(lang().imageFailed, true);
      setFeedback(cause?.message || lang().imageFailed, true);
    }
  });

  async function open(options = {}) {
    const id = text(options.id);
    currentLanguage = normalizeLanguage(options.language || currentLanguage);
    isClosed = false;
    const token = ++sessionId;
    languageRequest += 1;
    const promptLanguageRequest = languageRequest;
    const promptLanguage = currentLanguage;
    variantRequest += 1;
    variantLoading = false;
    imageController?.abort();
    imageController = new AbortController();
    const oldLease = imageLease;
    imageLease = null;
    release(oldLease);
    active = null;
    originalPrompt = '';
    edits = new Map();
    additionalDirection = '';
    fallbackText = '';
    error = '';
    fallback.hidden = true;
    fallbackArea.value = '';
    manualChat.hidden = true;
    setFeedback('');
    renderLocalizedLabels();
    image.hidden = true;
    setImageMessage(lang().imageLoading, false);
    promptDetails.hidden = false;
    editDetails.hidden = false;
    imageRetry.hidden = true;
    promptPreview.textContent = '';
    promptExcerpt.textContent = lang().promptLoading;
    root.dataset.state = 'loading';
    delete root.dataset.artworkId;
    delete root.dataset.version;
    const snapshot = snapshotFor(api, id);
    if (!snapshot) { unavailable(); return { ok: false, artworkId: id, imageOk: false }; }
    const requestedVersion = text(options.version);
    if (requestedVersion && requestedVersion !== versionOf(snapshot)) {
      unavailable();
      return { ok: false, artworkId: id, version: requestedVersion, imageOk: false };
    }
    active = snapshot;
    root.dataset.artworkId = id;
    root.dataset.version = versionOf(snapshot);
    title.textContent = localized(snapshot.artwork, 'title', currentLanguage) || id;
    image.alt = lang().imageAlt(title.textContent);
    description.textContent = localized(snapshot.artwork, 'description', currentLanguage);
    for (const button of [copyOriginalButton, downloadButton, openOriginalButton]) button.disabled = true;
    renderTags();
    renderFactRows();
    renderVariants();
    additionalInput.value = '';
    updateModifiedPreview();
    try { title.focus({ preventScroll: true }); } catch { /* Focus is managed by the containing modal. */ }

    const imageTask = loadVerifiedImage(snapshot, token, imageController.signal).then(lease => ({ ok: Boolean(lease), lease }), cause => ({ ok: false, cause }));
    const promptTask = promptForSnapshot(snapshot, promptLanguage).then(value => ({ ok: true, value }), cause => ({ ok: false, cause }));
    const [imageResult, promptResult] = await Promise.all([imageTask, promptTask]);
    if (token !== sessionId || isClosed) { release(imageResult.lease); return { ok: false, cancelled: true, artworkId: id }; }
    if (!active || active.artwork.id !== id) { release(imageResult.lease); return { ok: false, cancelled: true, artworkId: id }; }
    if (promptLanguageRequest !== languageRequest) {
      // A newer setLanguage request owns the Prompt now; do not let this open's
      // slower response overwrite it or replace its loading/error state.
    } else if (promptResult.ok) {
      originalPrompt = promptResult.value;
      promptPreview.textContent = originalPrompt;
      promptExcerpt.textContent = promptExcerptFor(originalPrompt);
      for (const button of [copyOriginalButton, openOriginalButton]) button.disabled = false;
      updateModifiedPreview();
    } else {
      originalPrompt = '';
      promptPreview.textContent = '';
      setFeedback(lang().languageFailed, true);
    }
    if (imageResult.ok) {
      renderSnapshot(snapshot, originalPrompt, imageResult.lease);
    } else {
      root.dataset.state = 'image-error';
      image.hidden = true;
      setImageMessage(lang().imageFailed, true);
      if (imageResult.cause?.name !== 'AbortError') setFeedback(lang().imageFailed, true);
    }
    downloadButton.disabled = false;
    const promptOk = promptLanguageRequest === languageRequest ? promptResult.ok : Boolean(originalPrompt);
    return { ok: promptOk, artworkId: id, version: versionOf(snapshot), imageOk: imageResult.ok };
  }

  async function switchVariant(id) {
    if (!active || variantLoading || isClosed) return { ok: false };
    const request = ++variantRequest;
    const token = sessionId;
    const previous = active;
    const listed = asArray(api.getVariants(previous.artwork.id)).find(item => (typeof item === 'string' ? item : item?.id) === id);
    const candidateArtwork = api.getArtwork?.(id) || (typeof listed === 'string' ? api.getArtwork?.(listed) : listed);
    if (!isSameVariantFamily(previous, candidateArtwork) || (api.isEligible && !api.isEligible(candidateArtwork))) {
      setFeedback(lang().variantFailed, true);
      return { ok: false, reason: 'invalid-variant' };
    }
    const next = snapshotFor(api, id);
    if (!next) { setFeedback(lang().variantFailed, true); return { ok: false, reason: 'unavailable' }; }
    variantLoading = true;
    renderVariants();
    setFeedback(lang().variantLoading);
    const nextController = new AbortController();
    let promptLanguageRequest = languageRequest;
    let promptLanguage = currentLanguage;
    imageController?.abort();
    imageController = nextController;
    let lease = null;
    try {
      const [promptResult, imageResult] = await Promise.allSettled([
        promptForSnapshot(next, promptLanguage),
        loadVerifiedImage(next, token, nextController.signal)
      ]);
      if (imageResult.status === 'fulfilled') lease = imageResult.value;
      if (imageResult.status === 'rejected') throw imageResult.reason;
      if (!lease || request !== variantRequest || token !== sessionId || isClosed) { release(lease); return { ok: false, cancelled: true }; }
      let nextPrompt = promptResult.status === 'fulfilled' ? promptResult.value : undefined;
      if (promptResult.status === 'rejected' && promptLanguageRequest === languageRequest && promptLanguage === currentLanguage) throw promptResult.reason;
      while (nextPrompt === undefined || promptLanguageRequest !== languageRequest || promptLanguage !== currentLanguage) {
        promptLanguageRequest = languageRequest;
        promptLanguage = currentLanguage;
        try {
          nextPrompt = await promptForSnapshot(next, promptLanguage);
        } catch (cause) {
          if (request !== variantRequest || token !== sessionId || isClosed) { release(lease); return { ok: false, cancelled: true }; }
          if (promptLanguageRequest !== languageRequest || promptLanguage !== currentLanguage) continue;
          throw cause;
        }
        if (request !== variantRequest || token !== sessionId || isClosed) { release(lease); return { ok: false, cancelled: true }; }
      }
      renderSnapshot(next, nextPrompt, lease);
      lease = null;
      setFeedback('');
      try { onVersion(next.artwork); } catch { /* Routing callbacks cannot invalidate a verified in-view selection. */ }
      return { ok: true, artwork: next.artwork, version: versionOf(next) };
    } catch (cause) {
      release(lease);
      if (request === variantRequest && token === sessionId && !isClosed && cause?.name !== 'AbortError') setFeedback(lang().variantFailed, true);
      return { ok: false, error: cause };
    } finally {
      if (request === variantRequest && token === sessionId) {
        variantLoading = false;
        renderVariants();
      }
    }
  }

  async function setLanguage(languageValue) {
    const nextLanguage = normalizeLanguage(languageValue);
    if (nextLanguage === currentLanguage) return { ok: true, language: currentLanguage };
    const request = ++languageRequest;
    const token = sessionId;
    const snapshot = active;
    currentLanguage = nextLanguage;
    renderLocalizedLabels();
    if (!snapshot || isClosed) return { ok: true, language: currentLanguage };
    try {
      const nextPrompt = await promptForSnapshot(snapshot, nextLanguage);
      if (request !== languageRequest || token !== sessionId || active !== snapshot || isClosed) return { ok: false, cancelled: true };
      originalPrompt = nextPrompt;
      promptPreview.textContent = originalPrompt;
      promptExcerpt.textContent = promptExcerptFor(originalPrompt);
      copyOriginalButton.disabled = false;
      openOriginalButton.disabled = false;
      updateModifiedPreview();
      setFeedback('');
      return { ok: true, language: currentLanguage };
    } catch (cause) {
      if (request === languageRequest && token === sessionId && active === snapshot) {
        // Preserve the last working Prompt when a requested locale is unavailable.
        updateModifiedPreview();
        setFeedback(lang().languageFailed, true);
      }
      return { ok: false, error: cause };
    }
  }

  function currentOperation(snapshot, token) {
    return !isClosed && sessionId === token && active === snapshot;
  }

  async function copyPrompt(value, kind, snapshot, token) {
    const result = await copyText(value, { isCurrent: () => currentOperation(snapshot, token) });
    if (result.cancelled || !currentOperation(snapshot, token)) return result;
    if (result.ok) {
      if (fallbackKind === kind) { fallbackText = ''; fallback.hidden = true; }
      setFeedback(lang().copied);
    } else {
      setFallback(value, kind);
      setFeedback(lang().copyFailed, true);
    }
    return result;
  }

  copyOriginalButton.addEventListener('click', () => {
    if (!active || !originalPrompt) return;
    void copyPrompt(originalPrompt, 'original', active, sessionId);
  });
  openOriginalButton.addEventListener('click', async () => {
    if (!active || !originalPrompt) return;
    const snapshot = active;
    const token = sessionId;
    const frozen = originalPrompt;
    const result = await copyAndOpen(frozen, { isCurrent: () => currentOperation(snapshot, token) });
    if (result.cancelled || !currentOperation(snapshot, token)) return;
    manualChat.href = result.targetUrl || CHATGPT_URL_FOR_MANUAL_OPEN;
    manualChat.hidden = Boolean(result.opened && result.copied);
    if (!result.copied) {
      setFallback(frozen, 'original');
      setFeedback(result.opened ? lang().chatCopyFailed : lang().chatBlocked, true);
    } else {
      setFeedback(result.opened ? lang().chatOpened : lang().chatBlocked, !result.opened);
    }
  });
  downloadButton.addEventListener('click', async () => {
    if (!active || typeof api.downloadAsset !== 'function') return;
    const snapshot = active;
    const token = sessionId;
    downloadButton.disabled = true;
    let lease;
    try {
      lease = await api.downloadAsset(snapshot.asset);
      if (!lease?.blob || lease.asset?.sha256 !== snapshot.asset.sha256) throw new Error('Downloaded bytes do not match this Artwork asset.');
      if (currentOperation(snapshot, token)) setFeedback(lang().downloadStarted);
    } catch (cause) {
      if (currentOperation(snapshot, token)) setFeedback(`${lang().downloadFailed}${cause?.message ? ` ${cause.message}` : ''}`, true);
    } finally {
      release(lease);
      if (currentOperation(snapshot, token)) downloadButton.disabled = false;
    }
  });
  additionalInput.addEventListener('input', () => {
    additionalDirection = additionalInput.value;
    editError.textContent = '';
    updateModifiedPreview();
  });
  copyModifiedButton.addEventListener('click', () => {
    const snapshot = active;
    const token = sessionId;
    const modified = getModifiedPrompt();
    if (!snapshot || !modified || copyModifiedButton.disabled) return;
    void copyPrompt(modified, 'modified', snapshot, token);
  });
  openModifiedButton.addEventListener('click', async () => {
    const snapshot = active;
    const token = sessionId;
    const modified = getModifiedPrompt();
    if (!snapshot || !modified || openModifiedButton.disabled) return;
    const result = await copyAndOpen(modified, { isCurrent: () => currentOperation(snapshot, token) });
    if (result.cancelled || !currentOperation(snapshot, token)) return;
    manualChat.href = result.targetUrl || CHATGPT_URL_FOR_MANUAL_OPEN;
    manualChat.hidden = Boolean(result.opened && result.copied);
    if (!result.copied) {
      setFallback(modified, 'modified');
      setFeedback(result.opened ? lang().chatCopyFailed : lang().chatBlocked, true);
    } else {
      setFeedback(result.opened ? lang().chatOpened : lang().chatBlocked, !result.opened);
    }
  });
  selectFallback.addEventListener('click', () => { fallbackArea.focus(); fallbackArea.select(); });

  renderLocalizedLabels();
  imageRetry.textContent = lang().retry;
  manualChat.hidden = true;

  function close({ restoreFocus = false } = {}) {
    isClosed = true;
    sessionId += 1;
    languageRequest += 1;
    variantRequest += 1;
    imageController?.abort();
    imageController = null;
    const previous = imageLease;
    imageLease = null;
    release(previous);
    active = null;
    originalPrompt = '';
    edits = new Map();
    additionalDirection = '';
    fallbackText = '';
    error = '';
    variantLoading = false;
    root.replaceChildren(mediaColumn, content);
    image.removeAttribute('src');
    image.hidden = true;
    fallback.hidden = true;
    promptPreview.textContent = '';
    promptExcerpt.textContent = '';
    modifiedPreview.textContent = '';
    root.dataset.state = 'closed';
    delete root.dataset.artworkId;
    delete root.dataset.version;
    return { restoreFocus };
  }

  function requestClose() {
    try { onClose(); } catch { /* The parent owns URL and source restoration. */ }
  }

  function getState() {
    const modifiedPrompt = getModifiedPrompt();
    return Object.freeze({
      id: active?.artwork?.id || null,
      version: active ? versionOf(active) : null,
      language: currentLanguage,
      state: root.dataset.state,
      imageLoaded: Boolean(imageLease),
      originalPrompt,
      modifiedPrompt,
      edits: Object.freeze([...edits.values()].map(item => Object.freeze({ ...item }))),
      additionalDirection,
      error,
      isClosed
    });
  }

  return Object.freeze({
    element: root,
    open,
    setLanguage,
    close,
    requestClose,
    getState,
    switchVariant
  });
}
