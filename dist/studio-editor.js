import { createDraft, updateDraft } from './studio-draft.js?v=102';
import { getTemplateForArtwork, TEMPLATE_REGISTRY } from './studio-edit-templates.js?v=102';
import { createExportSnapshot, exportSnapshot, isRenderResultCurrent, renderDraft } from './studio-renderer.js?v=102';
import { enumerateValidConfigurations, getRequiredTemplateAssets, getTemplateOptionFields, getTemplateOptionAssetRefs, assertValidTemplateOptions } from './studio-edit-templates.js?v=102';
import { normalizeTemplatePlacement, templatePlacementMatrix } from './studio-preview-loader.js?v=102';

export const STUDIO_EDITOR_REVISION = 'studio-editor-20261010-v99';
let editorInstance = 0;

const labels = {
  en: {
    title: 'Character adjustments', hint: 'Preview and Prompt update with each selection.', tabs: 'Customize your character',
    appearance: 'Appearance', colors: 'Colors', face: 'Face', clothing: 'Clothing', accessories: 'Accessories',
    color: 'Color', eyes: 'Eyes', glasses: 'Glasses', accessory: 'Accessory',
    
    rendering: 'Rendering the selected configuration…', ready: '',
    failed: 'The latest configuration could not be rendered. Export is unavailable.',
    retry: 'Retry preview and thumbnails',
    stale: 'The previous preview remains visible while the latest selection renders.',
    exported: 'PNG download started.',
    unknown: 'The selected option is not supported by this template.', unavailable: 'Unavailable in this template'
  },
  'zh-CN': {
    title: '角色调整', hint: '预览与 Prompt 随选择同步更新。', tabs: '角色调整分类',
    appearance: '外观', colors: '配色', face: '五官', clothing: '服装', accessories: '配饰',
    color: '颜色', eyes: '眼睛', glasses: '眼镜', accessory: '配件',
    
    rendering: '正在渲染当前配置…', ready: '',
    failed: '最新配置渲染失败，暂不可导出。',
    retry: '重试预览与缩略图',
    stale: '最新选择正在渲染，当前暂显示上一版预览。',
    exported: '已开始下载 PNG。',
    unknown: '此模板不支持该选项。', unavailable: '此模板不支持'
  }
};

const copyOptions = options => Object.freeze({ ...options });

function languageKey(value) { return value === 'zh-CN' ? 'zh-CN' : 'en'; }
function optionLabel(option, language) { return option?.labelByLanguage?.[language] || option?.labelByLanguage?.en || option?.id || ''; }
function localErrorMessage(error, language) { return error?.messageByLanguage?.[language] || error?.message || labels[language].unknown; }
function sameOptions(a, b) { return a && b && Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(key => a[key] === b[key]); }
function filenameFor(artwork, template, revision) {
  const stem = `${artwork?.id || artwork?.artworkId || 'artwork'}-${template.id}-draft-r${revision}`;
  return stem.replace(/[^a-z0-9._-]+/gi, '-').replace(/-+/g, '-').toLowerCase() + '.png';
}

function downloadBlob(blob, filename, URLRef = globalThis.URL, documentRef = globalThis.document) {
  if (!URLRef?.createObjectURL || !documentRef?.createElement) throw new Error('The browser cannot start a local PNG download.');
  const url = URLRef.createObjectURL(blob);
  const anchor = documentRef.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.hidden = true;
  documentRef.body.append(anchor);
  anchor.click();
  anchor.remove();
  globalThis.setTimeout(() => URLRef.revokeObjectURL(url), 30000);
}

function assertEditorAccess(artwork, template, reviewHarness, registry) {
  const allowed = getTemplateForArtwork(artwork, { reviewHarness: reviewHarness === true, registry: registry || [template] });
  if (!allowed || allowed.id !== template?.id || allowed.version !== template?.version) {
    throw new Error('This Artwork has no approved local edit template in the current context.');
  }
  if (template.status !== 'approved' && reviewHarness !== true) throw new Error('Pending edit templates require an explicit review harness.');
}

/**
 * Build the controls for the existing CharacterStudio preview column. `element`
 * contains controls only; `previewElement` hosts the renderer's transparent
 * canvas so callers can place it in the same preview region.
 */
export function createEditor({
  root,
  artwork,
  template,
  draft: initialDraft,
  loader,
  assetRegistry,
  resolveAsset,
  assetManifestUrl = './assets/templates/sources.json?v=102',
  fetchImpl = globalThis.fetch?.bind(globalThis),
  language: initialLanguage = 'en',
  reviewHarness = false,
  registry = TEMPLATE_REGISTRY,
  onDraftChange = () => {},
  onStatus = () => {},
  onExport,
  canvasFactory
} = {}) {
  if (!globalThis.document?.createElement) throw new Error('CharacterStudio editor requires a browser document.');
  if (!root?.append) throw new TypeError('Pass the existing CharacterStudio controls host as root.');
  if (!template || !artwork) throw new TypeError('Artwork and Template are required.');
  assertEditorAccess(artwork, template, reviewHarness, registry);
  if (!loader || typeof loader.acquire !== 'function') throw new TypeError('A registered template preview loader is required.');
  let draft = initialDraft || createDraft({ artwork, template, language: initialLanguage, reviewHarness });
  let resolvedAssetRegistry = assetRegistry;
  let manifestPromise = null;
  let manifestController = null;
  if (draft.baseArtworkId !== (artwork.id ?? artwork.artworkId)
    || draft.baseArtworkVersion !== (artwork.version ?? artwork.artworkVersion)
    || draft.templateId !== template.id || draft.templateVersion !== template.version) {
    throw new Error('Editor Draft does not match the selected Artwork and Template version.');
  }

  const documentRef = root.ownerDocument || document;
  const element = documentRef.createElement('section');
  element.className = 'studio-editor-controls';
  element.dataset.templateId = template.id;
  element.dataset.templateVersion = template.version;
  element.dataset.reviewOnly = template.status === 'pending' ? 'true' : 'false';
  element.setAttribute('aria-label', 'Character artwork editor');
  const previewElement = documentRef.createElement('div');
  previewElement.className = 'studio-editor-preview';
  previewElement.setAttribute('aria-label', 'Transparent Draft preview');
  const previewStatus = documentRef.createElement('p');
  previewStatus.className = 'studio-editor-preview-status';
  previewStatus.setAttribute('role', 'status');
  previewStatus.setAttribute('aria-live', 'polite');
  previewElement.append(previewStatus);

  const heading = documentRef.createElement('h3');
  const hint = documentRef.createElement('p');
  hint.className = 'studio-editor-hint helper';
  const form = documentRef.createElement('form');
  form.className = 'studio-editor-options';
  form.addEventListener('submit', event => event.preventDefault());
  const tabs = documentRef.createElement('div');
  tabs.className = 'studio-editor-tabs';
  tabs.setAttribute('role', 'tablist');
  tabs.setAttribute('aria-orientation', 'horizontal');
  form.append(tabs);
  const tabIdPrefix = `studio-editor-${++editorInstance}`;
  const editableFields = getTemplateOptionFields(template).map(field => field.key);
  const categories = template.schemaVersion === 2
    ? editableFields.map(field => ({ id: field, fields: [field] }))
    : [
      { id: 'colors', fields: ['color'] },
      { id: 'face', fields: ['eyes'] },
      { id: 'accessories', fields: ['glasses', 'accessory'] }
    ].map(category => ({ ...category, fields: category.fields.filter(field => editableFields.includes(field)) }))
      .filter(category => category.fields.length);
  const categoryIds = categories.map(category => category.id);
  let activeCategory = categoryIds[0];
  const tabButtons = new Map();
  const status = documentRef.createElement('p');
  status.className = 'studio-editor-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  const retryButton = documentRef.createElement('button');
  retryButton.type = 'button';
  retryButton.dataset.action = 'retry';
  retryButton.hidden = true;
  retryButton.disabled = true;
  element.append(heading, hint, form, status, retryButton);
  root.append(element);

  let language = languageKey(draft.language || initialLanguage);
  let activeToken = 0;
  let requestController = null;
  let latestRequestedRevision = -1;
  let latestStatusMessage = '';
  let renderReady = false;
  let lastResult = null;
  let destroyed = false;
  const panels = new Map();
  const categoryPanels = new Map();
  const optionButtons = new Map();
  const optionDetails = new WeakMap();
  const thumbnailControllers = new Set();
  let thumbnailsStarted = false;
  let thumbnailGeneration = 0;

  function currentSnapshot() {
    if (!lastResult || !isRenderResultCurrent(lastResult, draft, template) || latestRequestedRevision !== draft.revision) return null;
    return Object.freeze({ schemaVersion: lastResult.schemaVersion, revision: lastResult.revision, sessionId: lastResult.sessionId, recipeKey: lastResult.recipeKey, options: copyOptions(lastResult.options), semantics: lastResult.semantics, layerRefs: lastResult.layerRefs, layerOrder: lastResult.layerOrder, rendererRevision: lastResult.rendererRevision, templateId: template.id, templateVersion: template.version, baseArtworkId: draft.baseArtworkId, baseArtworkVersion: draft.baseArtworkVersion });
  }

  function canExport() { return Boolean(renderReady && currentSnapshot()); }

  function emitStatus(message, explicitCanExport = canExport(), errorInfo = null) {
    latestStatusMessage = message || '';
    status.textContent = latestStatusMessage;
    previewStatus.textContent = latestStatusMessage;
    renderReady = Boolean(explicitCanExport && currentSnapshot());
    element.dataset.canExport = explicitCanExport ? 'true' : 'false';
    const snapshot = explicitCanExport ? currentSnapshot() : null;
    onStatus(Object.freeze({
      message: latestStatusMessage,
      canExport: explicitCanExport,
      snapshot,
      requestedRevision: latestRequestedRevision,
      renderedRevision: lastResult?.revision ?? null,
      sessionId: draft.sessionId,
      error: errorInfo ? Object.freeze({ code: errorInfo.code || 'render-failed', assetId: errorInfo.assetId || null }) : null
    }));
  }

  function updateText() {
    const text = labels[language];
    element.lang = language;
    heading.textContent = text.title;
    hint.textContent = text.hint;
    tabs.setAttribute('aria-label', text.tabs);
    for (const [field, tab] of tabButtons) tab.textContent = text[field];
    retryButton.textContent = text.retry;
    for (const [field, panel] of panels) {
      const title = panel.querySelector('.studio-editor-field-title');
      if (title) title.textContent = text[field];
      panel.querySelector('.studio-editor-option-list')?.setAttribute('aria-label', text[field]);
      for (const button of optionButtons.get(field) || []) {
        const label = button.querySelector('.studio-editor-option-label');
        const name = optionLabel(optionDetails.get(button)?.option, language);
        if (label) label.textContent = name;
        button.setAttribute('aria-label', `${text[field]}: ${name}${button.dataset.optionUnavailable === 'true' ? ` — ${text.unavailable}` : ''}`);
      }
    }
    syncButtons();
  }

  function optionLayerRefs(field, optionId) {
    if (optionId === 'none') return [];
    const refs = getTemplateOptionAssetRefs(template, field, optionId);
    return refs.thumbnailAssets.length ? refs.thumbnailAssets : refs.layerAssets;
  }

  function syncButtons() {
    for (const [field, buttons] of optionButtons) {
      for (const button of buttons) {
        button.setAttribute('aria-pressed', String(button.value === draft.options[field]));
        let conflict = '';
        try { assertValidTemplateOptions(template, { ...draft.options, [field]: button.value }); }
        catch (error) { conflict = localErrorMessage(error, language); }
        button.disabled = Boolean(conflict || button.dataset.optionUnavailable === 'true');
        button.setAttribute('aria-disabled', String(button.disabled));
        button.dataset.conflict = conflict;
        button.title = conflict;
        const name = optionLabel(optionDetails.get(button)?.option, language);
        button.setAttribute('aria-label', `${labels[language][field]}: ${name}${conflict ? ` — ${conflict}` : ''}`);
        const reason = button.querySelector('.studio-editor-option-reason');
        if (reason) { reason.textContent = conflict; reason.hidden = !conflict; }
      }
    }
  }

  function markOptionUnavailable(button, visual, reason = 'missing-layer') {
    button.disabled = true;
    button.setAttribute('aria-disabled', 'true');
    button.dataset.optionUnavailable = 'true';
    button.dataset.unavailableReason = reason;
    visual.dataset.thumbnailState = 'error';
    visual.replaceChildren();
    const mark = documentRef.createElement('span');
    mark.className = 'studio-editor-option-unavailable-mark';
    mark.textContent = '×';
    mark.setAttribute('aria-hidden', 'true');
    visual.append(mark);
    const detail = optionDetails.get(button);
    const field = button.dataset.field;
    button.setAttribute('aria-label', `${labels[language][field]}: ${optionLabel(detail?.option, language)} — ${labels[language].unavailable}`);
    if (reason === 'thumbnail-load-failed') {
      retryButton.hidden = false;
      retryButton.disabled = false;
    }
  }

  function hasRetryableThumbnailFailure() {
    return [...optionButtons.values()].some(buttons => buttons.some(button => button.dataset.unavailableReason === 'thumbnail-load-failed'));
  }

  function thumbnailBounds(record) {
    const bbox = record.alpha?.bboxAtAlphaThreshold8 || record.alpha?.bboxAtAlphaThreshold16;
    if (!Array.isArray(bbox) || bbox.length !== 4 || !bbox.every(Number.isFinite)) return [0, 0, record.width, record.height];
    const x0 = Math.max(0, Math.min(record.width, bbox[0]));
    const y0 = Math.max(0, Math.min(record.height, bbox[1]));
    const x1 = Math.max(x0 + 1, Math.min(record.width, bbox[2]));
    const y1 = Math.max(y0 + 1, Math.min(record.height, bbox[3]));
    return [x0, y0, x1, y1];
  }

  function placedThumbnailBounds(record) {
    const placement = normalizeTemplatePlacement(record, [template.canvas.width, template.canvas.height], template.anchors);
    const [x0, y0, x1, y1] = thumbnailBounds(record);
    const matrix = templatePlacementMatrix(record, placement.canvas, template.anchors);
    const points = [
      [x0, y0], [x1, y0], [x0, y1], [x1, y1]
    ].map(([x, y]) => [
      matrix.a * x + matrix.c * y + matrix.e,
      matrix.b * x + matrix.d * y + matrix.f
    ]);
    return {
      x0: Math.max(0, Math.min(...points.map(point => point[0]))),
      y0: Math.max(0, Math.min(...points.map(point => point[1]))),
      x1: Math.min(template.canvas.width, Math.max(...points.map(point => point[0]))),
      y1: Math.min(template.canvas.height, Math.max(...points.map(point => point[1])))
    };
  }

  function populateOptionThumbnails(rows, { retry = false } = {}) {
    if ((!retry && thumbnailsStarted) || destroyed) return;
    thumbnailsStarted = true;
    const recordsByKey = new Map((Array.isArray(rows) ? rows : [])
      .map(record => [`${record.id}\u0000${record.version}\u0000${record.purpose}`, record]));
    for (const [field, buttons] of optionButtons) {
      if (field === 'color' || field === 'colors') continue;
      for (const button of buttons) {
        const visual = button.querySelector('.studio-editor-option-visual');
        if (retry) {
          if (button.dataset.unavailableReason !== 'thumbnail-load-failed') continue;
          button.disabled = false;
          button.removeAttribute('aria-disabled');
          button.removeAttribute('data-option-unavailable');
          button.removeAttribute('data-unavailable-reason');
          visual.replaceChildren();
        }
        const references = optionLayerRefs(field, button.value);
        if (references?.length === 0) {
          visual.dataset.thumbnailState = 'empty';
          continue;
        }
        if (!references?.length) {
          markOptionUnavailable(button, visual);
          continue;
        }
        const records = references.map(reference => recordsByKey.get(`${reference.id}\u0000${reference.version}\u0000${reference.purpose}`)
          || loader.getRegisteredAsset?.(reference)
          || resolveAsset?.(reference));
        if (records.some((record, index) => !record
          || record.id !== references[index].id || record.version !== references[index].version || record.purpose !== references[index].purpose
          || (template.schemaVersion !== 2 && (record.width !== template.canvas.width || record.height !== template.canvas.height)) || typeof record.path !== 'string')) {
          markOptionUnavailable(button, visual);
          continue;
        }
        let boxes;
        try { boxes = records.map(placedThumbnailBounds); }
        catch {
          markOptionUnavailable(button, visual);
          continue;
        }
        const crop = {
          x0: Math.max(0, Math.min(...boxes.map(box => box.x0))),
          y0: Math.max(0, Math.min(...boxes.map(box => box.y0))),
          x1: Math.min(template.canvas.width, Math.max(...boxes.map(box => box.x1))),
          y1: Math.min(template.canvas.height, Math.max(...boxes.map(box => box.y1)))
        };
        const cropWidth = Math.max(1, crop.x1 - crop.x0);
        const cropHeight = Math.max(1, crop.y1 - crop.y0);
        const generation = ++thumbnailGeneration;
        button.dataset.thumbnailGeneration = String(generation);
        visual.dataset.thumbnailState = 'loading';
        visual.dataset.assetIds = references.map(reference => reference.id).join(' ');
        visual.replaceChildren();
        const controller = new AbortController();
        thumbnailControllers.add(controller);
        void (async () => {
          const leases = [];
          try {
            const results = await Promise.allSettled(records.map(record => loader.acquire(record, {
              signal: controller.signal,
              purpose: record.purpose
            })));
            for (const result of results) if (result.status === 'fulfilled') leases.push(result.value);
            const rejected = results.find(result => result.status === 'rejected');
            if (rejected) throw rejected.reason;
            if (destroyed || controller.signal.aborted || Number(button.dataset.thumbnailGeneration) !== generation) return;
            const pixelScale = Math.min(96 / cropWidth, 96 / cropHeight);
            const canvas = documentRef.createElement('canvas');
            canvas.className = 'studio-editor-option-thumbnail';
            canvas.width = Math.max(1, Math.round(cropWidth * pixelScale));
            canvas.height = Math.max(1, Math.round(cropHeight * pixelScale));
            canvas.dataset.assetIds = references.map(reference => reference.id).join(' ');
            canvas.setAttribute('aria-hidden', 'true');
            const context = canvas.getContext('2d', { alpha: true });
            if (!context) throw new Error('Canvas is unavailable for template option thumbnails.');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            leases.forEach((lease, index) => {
              const record = records[index];
              const matrix = templatePlacementMatrix(record, [template.canvas.width, template.canvas.height], template.anchors);
              context.save();
              context.setTransform(
                matrix.a * pixelScale,
                matrix.b * pixelScale,
                matrix.c * pixelScale,
                matrix.d * pixelScale,
                (matrix.e - crop.x0) * pixelScale,
                (matrix.f - crop.y0) * pixelScale
              );
              context.drawImage(lease.bitmap, 0, 0);
              context.restore();
            });
            visual.replaceChildren(canvas);
            visual.dataset.thumbnailState = 'ready';
            button.disabled = false;
            button.removeAttribute('aria-disabled');
            button.removeAttribute('data-option-unavailable');
            button.removeAttribute('data-unavailable-reason');
            syncButtons();
            if (!hasRetryableThumbnailFailure() && canExport()) {
              retryButton.hidden = true;
              retryButton.disabled = true;
            }
          } catch (error) {
            if (!destroyed && !controller.signal.aborted && Number(button.dataset.thumbnailGeneration) === generation) {
              markOptionUnavailable(button, visual, 'thumbnail-load-failed');
            }
          } finally {
            for (const lease of leases) {
              try { lease.release?.(); } catch { /* Release is best effort during editor teardown. */ }
            }
            thumbnailControllers.delete(controller);
          }
        })();
      }
    }
  }

  function activateCategory(field, { focus = false } = {}) {
    if (!tabButtons.has(field)) return;
    activeCategory = field;
    element.dataset.activeCategory = field;
    for (const [key, button] of tabButtons) {
      const selected = key === field;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      categoryPanels.get(key).hidden = !selected;
    }
    if (focus) {
      const button = tabButtons.get(field);
      button.focus({ preventScroll: true });
      const bounds = button.getBoundingClientRect(), viewport = tabs.getBoundingClientRect();
      if (bounds.left < viewport.left) tabs.scrollLeft -= viewport.left - bounds.left;
      else if (bounds.right > viewport.right) tabs.scrollLeft += bounds.right - viewport.right;
    }
  }

  function buildControls() {
    for (const category of categories) {
      const field = category.id;
      const tab = documentRef.createElement('button');
      tab.type = 'button';
      tab.className = 'studio-editor-tab';
      tab.dataset.editorTab = field;
      tab.id = `${tabIdPrefix}-tab-${field}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', `${tabIdPrefix}-panel-${field}`);
      tab.addEventListener('click', () => activateCategory(field));
      tab.addEventListener('keydown', event => {
        const index = categoryIds.indexOf(field);
        let next;
        if (event.key === 'ArrowRight') next = categoryIds[(index + 1) % categoryIds.length];
        else if (event.key === 'ArrowLeft') next = categoryIds[(index + categoryIds.length - 1) % categoryIds.length];
        else if (event.key === 'Home') next = categoryIds[0];
        else if (event.key === 'End') next = categoryIds.at(-1);
        else return;
        event.preventDefault();
        activateCategory(next, { focus: true });
      });
      tabs.append(tab);
      tabButtons.set(field, tab);
      const categoryPanel = documentRef.createElement('section');
      categoryPanel.className = 'studio-editor-category';
      categoryPanel.dataset.editorTab = field;
      categoryPanel.id = `${tabIdPrefix}-panel-${field}`;
      categoryPanel.setAttribute('role', 'tabpanel');
      categoryPanel.setAttribute('aria-labelledby', tab.id);
      form.append(categoryPanel);
      categoryPanels.set(field, categoryPanel);
      for (const field of category.fields) {
        const panel = documentRef.createElement('section');
        panel.className = 'studio-editor-field';
        panel.dataset.field = field;
        const title = documentRef.createElement('h4');
        title.className = 'studio-editor-field-title';
        title.textContent = labels[language][field];
        const group = documentRef.createElement('div');
        group.className = 'studio-editor-option-list';
        group.setAttribute('role', 'group');
        group.setAttribute('aria-label', labels[language][field]);
        const buttons = [];
        for (const option of template.options[field]) {
          const button = documentRef.createElement('button');
          button.type = 'button';
          button.className = `studio-editor-option studio-editor-option-${field}`;
          button.name = field;
          button.value = option.id;
          button.dataset.field = field;
          button.dataset.optionId = option.id;
          button.setAttribute('aria-pressed', draft.options[field] === option.id ? 'true' : 'false');
          button.setAttribute('aria-label', `${labels[language][field]}: ${optionLabel(option, language)}`);
          const visual = documentRef.createElement('span');
          visual.className = 'studio-editor-option-visual';
          visual.setAttribute('aria-hidden', 'true');
          if (field === 'color' || field === 'colors') {
            visual.classList.add('studio-editor-color-swatch');
            const swatch = option.hex || option.swatches?.[0] || Object.values(option.zoneColors || {})[0];
            if (/^#[\da-f]{6}$/i.test(swatch || '')) visual.style.setProperty('--option-color', swatch);
            else {
              button.disabled = true;
              button.setAttribute('aria-disabled', 'true');
              button.dataset.optionUnavailable = 'true';
            }
          } else if (option.id === 'none') {
            visual.classList.add('studio-editor-option-none');
            const mark = documentRef.createElement('span');
            mark.className = 'studio-editor-option-none-mark';
            mark.textContent = '×';
            mark.setAttribute('aria-hidden', 'true');
            visual.append(mark);
            visual.dataset.thumbnailState = 'empty';
          } else if (!optionLayerRefs(field, option.id)?.length) {
            button.disabled = true;
            button.setAttribute('aria-disabled', 'true');
            button.dataset.optionUnavailable = 'true';
            visual.dataset.thumbnailState = 'error';
            const mark = documentRef.createElement('span');
            mark.className = 'studio-editor-option-unavailable-mark';
            mark.textContent = '×';
            mark.setAttribute('aria-hidden', 'true');
            visual.append(mark);
          } else {
            visual.dataset.thumbnailState = 'waiting-for-manifest';
          }
          const label = documentRef.createElement('span');
          label.className = 'studio-editor-option-label';
          label.textContent = optionLabel(option, language);
          const reason = documentRef.createElement('span');
          reason.className = 'studio-editor-option-reason';
          reason.hidden = true;
          button.append(visual, label, reason);
          optionDetails.set(button, { option });
          button.addEventListener('click', () => {
            if (button.disabled) return;
            const before = draft;
            try {
              draft = updateDraft(before, { [field]: button.value }, { template });
              syncButtons();
              if (draft === before) return;
              onDraftChange(draft, { reason: 'option' });
              void requestRender();
            } catch (error) {
              syncButtons();
              emitStatus(localErrorMessage(error, language), canExport(), error);
            }
          });
          buttons.push(button);
          group.append(button);
        }
        panel.append(title, group);
        categoryPanel.append(panel);
        panels.set(field, panel);
        optionButtons.set(field, buttons);
      }
    }
    activateCategory(activeCategory);
    syncButtons();
  }

  function requiredManifestRows(manifest) {
    if (!manifest || manifest.schemaVersion !== 1 || !Array.isArray(manifest.assets)) {
      throw Object.assign(new Error('The template source manifest is missing or has an unsupported schema.'), { code: 'invalid-template-manifest' });
    }
    const required = new Map();
    for (const options of enumerateValidConfigurations(template)) {
      for (const reference of getRequiredTemplateAssets(template, options, { includeAllOptionThumbnails: true })) required.set(reference.id, reference);
    }
    const allRows = manifest.assets;
    for (const reference of required.values()) {
      const record = allRows.find(row => row?.id === reference.id);
      if (!record || record.version !== reference.version || record.purpose !== reference.purpose) {
        throw Object.assign(new Error(`The template source manifest does not bind required layer ${reference.id}.`), { code: 'missing-template-layer', assetId: reference.id });
      }
      if ((template.schemaVersion !== 2 && (record.width !== template.canvas.width || record.height !== template.canvas.height)) || record.mime !== 'image/png') {
        throw Object.assign(new Error(`Template layer metadata does not match the registered ${template.canvas.width}×${template.canvas.height} PNG canvas: ${reference.id}.`), { code: 'template-layer-canvas-mismatch', assetId: reference.id });
      }
    }
    const rows = allRows.filter(row => row?.id?.startsWith(`template:${template.id}:`));
    if (rows.length !== required.size) {
      throw Object.assign(new Error(`The source manifest has an unexpected number of layers for ${template.id}.`), { code: 'template-manifest-layer-count' });
    }
    return rows;
  }

  async function ensureAssetManifest() {
    if (resolvedAssetRegistry) {
      loader.registerAssets?.(resolvedAssetRegistry);
      return resolvedAssetRegistry;
    }
    if (typeof fetchImpl !== 'function' || typeof loader.registerAssets !== 'function') {
      throw Object.assign(new Error('The browser cannot load or register local template layers.'), { code: 'template-manifest-unavailable' });
    }
    if (!manifestPromise) {
      manifestController = new AbortController();
      manifestPromise = (async () => {
        const manifestUrl = new URL(assetManifestUrl, documentRef.baseURI);
        if (manifestUrl.origin !== globalThis.location?.origin) throw Object.assign(new Error('Template sources must be loaded from this site.'), { code: 'untrusted-template-manifest' });
        const response = await fetchImpl(manifestUrl.href, { signal: manifestController.signal, cache: 'force-cache', credentials: 'same-origin' });
        if (!response?.ok) throw Object.assign(new Error(`Template source manifest request failed (${response?.status ?? 'no response'}).`), { code: 'template-manifest-request-failed' });
        const contentType = (response.headers?.get?.('content-type') || '').split(';', 1)[0].trim().toLowerCase();
        if (contentType !== 'application/json' && !contentType.endsWith('+json')) throw Object.assign(new Error('Template source manifest did not return JSON.'), { code: 'template-manifest-mime-mismatch' });
        const manifest = await response.json();
        if (template.schemaVersion !== 2 && (manifest.canvas?.width !== template.canvas.width || manifest.canvas?.height !== template.canvas.height)) {
          throw Object.assign(new Error('Template source manifest canvas does not match this editor.'), { code: 'template-manifest-canvas-mismatch' });
        }
        const rows = requiredManifestRows(manifest);
        loader.registerAssets(rows);
        resolvedAssetRegistry = rows;
        return rows;
      })().catch(error => {
        manifestPromise = null;
        throw error;
      });
    }
    return manifestPromise;
  }

  function setCanvas(result) {
    const old = previewElement.querySelector('canvas[data-render-revision]');
    if (old && old !== result.canvas) {
      old.remove();
      old.width = 0;
      old.height = 0;
    }
    result.canvas.dataset.renderRevision = String(result.revision);
    result.canvas.dataset.recipeKey = result.recipeKey;
    result.canvas.className = 'studio-editor-canvas';
    result.canvas.setAttribute('aria-label', language === 'zh-CN' ? '当前 Draft 的透明预览' : 'Transparent preview of the current Draft');
    result.canvas.style.width = '100%';
    result.canvas.style.height = '100%';
    result.canvas.style.objectFit = 'contain';
    result.canvas.style.background = 'transparent';
    previewElement.prepend(result.canvas);
    previewElement.dataset.stale = 'false';
  }

  function discardResult(result) {
    if (!result) return;
    result.canvas?.remove?.();
    try { result.release?.(); } catch { /* Detached result cleanup is best effort. */ }
  }

  async function requestRender() {
    if (destroyed) return null;
    const token = ++activeToken;
    requestController?.abort();
    const controller = new AbortController();
    requestController = controller;
    latestRequestedRevision = draft.revision;
    const requestedDraft = draft;
    const requestedRevision = draft.revision;
    if (lastResult) previewElement.dataset.stale = 'true';
    retryButton.hidden = true;
    retryButton.disabled = true;
    emitStatus(lastResult ? labels[language].stale : labels[language].rendering, false);
    try {
      const registryRows = await ensureAssetManifest();
      if (destroyed || token !== activeToken || controller.signal.aborted) return null;
      const result = await renderDraft({
        draft: requestedDraft,
        template,
        loader,
        assetRegistry: registryRows,
        resolveAsset,
        sessionId: requestedDraft.sessionId,
        signal: controller.signal,
        canvasFactory
      });
      if (destroyed || token !== activeToken || draft.sessionId !== result.sessionId || draft.revision !== result.revision) {
        discardResult(result);
        return null;
      }
      if (!isRenderResultCurrent(result, draft, template) || requestedRevision !== result.revision) {
        discardResult(result);
        emitStatus(labels[language].failed, false);
        return null;
      }
      if (lastResult && lastResult !== result) discardResult(lastResult);
      lastResult = result;
      setCanvas(result);
      const canRetry = hasRetryableThumbnailFailure();
      retryButton.hidden = !canRetry;
      retryButton.disabled = !canRetry;
      emitStatus(labels[language].ready, true);
      // Current character layers take priority over optional control thumbnails.
      populateOptionThumbnails(registryRows);
      return currentSnapshot();
    } catch (error) {
      if (destroyed || token !== activeToken || error?.name === 'AbortError') return null;
      previewElement.dataset.stale = lastResult ? 'true' : 'false';
      retryButton.hidden = false;
      retryButton.disabled = false;
      const localizedFailure = error?.code === 'missing-template-layer'
        ? (language === 'zh-CN' ? `缺少必需图层：${error.assetId || ''}` : `A required template layer is missing: ${error.assetId || ''}`)
        : labels[language].failed;
      emitStatus(localizedFailure, false, error);
      return null;
    }
  }

  retryButton.addEventListener('click', () => {
    if (resolvedAssetRegistry) populateOptionThumbnails(resolvedAssetRegistry, { retry: true });
    void requestRender();
  });

  async function exportPNG() {
    const snapshotView = currentSnapshot();
    if (destroyed || !renderReady || !snapshotView || !lastResult || !isRenderResultCurrent(lastResult, draft, template)) return false;
    const frozen = createExportSnapshot(lastResult);
    try {
      const blob = await exportSnapshot(frozen, { canvasFactory });
      if (destroyed) return false;
      const filename = filenameFor(artwork, template, frozen.revision);
      if (typeof onExport === 'function') {
        await onExport(Object.freeze({ blob, filename, snapshot: snapshotView, exportKind: frozen.exportStatus }));
      } else {
        downloadBlob(blob, filename, globalThis.URL, documentRef);
      }
      emitStatus(labels[language].exported, canExport());
      return true;
    } catch (error) {
      if (!destroyed) emitStatus(labels[language].failed, false, error);
      throw error;
    }
  }

  buildControls();
  updateText();
  void requestRender();

  return Object.freeze({
    element,
    previewElement,
    getDraft: () => draft,
    getSnapshot: () => renderReady ? currentSnapshot() : null,
    exportPNG,
    setLanguage(nextLanguage) {
      language = languageKey(nextLanguage);
      updateText();
      if (renderReady && currentSnapshot()) emitStatus(labels[language].ready, true);
    },
    setDraft(nextDraft) {
      if (!nextDraft || nextDraft.kind !== 'character-studio-draft'
        || nextDraft.sessionId !== draft.sessionId
        || nextDraft.baseArtworkId !== draft.baseArtworkId
        || nextDraft.baseArtworkVersion !== draft.baseArtworkVersion
        || nextDraft.templateId !== template.id || nextDraft.templateVersion !== template.version) {
        throw new Error('Updated Draft does not match this editor session.');
      }
      const previous = draft;
      draft = nextDraft;
      syncButtons();
      if (draft.revision !== previous.revision || !sameOptions(draft.options, previous.options)) void requestRender();
      else if (renderReady && currentSnapshot()) emitStatus(labels[language].ready, true);
    },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      activeToken += 1;
      requestController?.abort();
      manifestController?.abort();
      manifestController = null;
      thumbnailGeneration += 1;
      for (const controller of thumbnailControllers) controller.abort();
      thumbnailControllers.clear();
      if (lastResult) discardResult(lastResult);
      lastResult = null;
      element.remove();
      previewElement.replaceChildren();
    }
  });
}
