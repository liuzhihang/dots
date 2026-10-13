import { getFigureFields, getFigureStates, resolveFigureSelection } from './studio-gallery-figures.js?v=111';
import { createDraft, updateDraft } from './studio-draft.js?v=111';
import { createEditor, getTemplateManifestRows, renderTemplateOptionThumbnail } from './studio-editor.js?v=111';
import { getTemplateOptionAssetRefs } from './studio-edit-templates.js?v=111';
import { createPreviewLoader } from './studio-preview-loader.js?v=111';

const FIELD_LABELS = Object.freeze({
  en: { color: 'Color', colors: 'Color', eyes: 'Face', face: 'Face', glasses: 'Glasses', accessory: 'Accessory', accessories: 'Accessories', clothing: 'Clothing' },
  'zh-CN': { color: '配色', colors: '配色', eyes: '五官', face: '五官', glasses: '眼镜', accessory: '配饰', accessories: '配饰', clothing: '衣物' }
});
const COPY = Object.freeze({
  en: { title: 'Character adjustments', hint: 'Preview and Prompt update with each selection.', selected: 'Selected', unavailable: 'Not available with this figure’s current settings.', rendering: 'Updating preview…', failed: 'The new settings were not applied. Retry or choose an option again.', retry: 'Retry preview', fixed: 'This figure has a fixed configuration.' },
  'zh-CN': { title: '角色调整', hint: '预览与 Prompt 随选择同步更新。', selected: '当前选择', unavailable: '当前形象配置不支持此选项。', rendering: '正在更新预览…', failed: '新配置未应用，请重试或重新选择。', retry: '重试预览', fixed: '此形象目前为固定配置。' }
});
let instanceId = 0;

const languageKey = value => value === 'zh-CN' ? 'zh-CN' : 'en';
const labelFor = (record, locale, fallback = '') => String(record?.labelByLanguage?.[locale]
  || record?.semanticByLanguage?.[locale]
  || record?.labelByLanguage?.en
  || record?.semanticByLanguage?.en
  || record?.label
  || fallback
  || record?.id
  || '').trim();
const canonicalState = (states, state) => states.find(candidate => candidate.id === state?.id
  && candidate.figureId === state?.figureId
  && candidate.look?.id === state?.look?.id
  && candidate.look?.version === state?.look?.version
  && candidate.template?.id === state?.template?.id
  && candidate.template?.version === state?.template?.version
  && candidate.recipe?.id === state?.recipe?.id) || null;

function registeredRecipeOptions(state) {
  const source = state?.recipe?.selections || state?.selections;
  if (!source || typeof source !== 'object' || Array.isArray(source)) return null;
  const recipe = state.template?.recipes?.find(row => row.id === state.recipe?.id);
  if (!recipe || Object.keys(recipe.selections || {}).length !== Object.keys(source).length
    || Object.keys(recipe.selections || {}).some(key => recipe.selections[key] !== source[key])) return null;
  return source;
}

/**
 * A Figure editor keeps one stable Figure session while each renderer child
 * remains bound to one exact registered Artwork, Template, and recipe.
 */
export function createFigureEditor({
  root,
  previewRoot,
  figure,
  initialState,
  sessionId,
  loader,
  language: initialLanguage = 'en',
  resolveState = state => ({ artwork: state?.artwork }),
  onStateChange = () => {},
  onStatus = () => {}
} = {}) {
  if (!root?.append || !previewRoot?.replaceChildren) throw new TypeError('Figure editor requires controls and preview hosts.');
  if (!figure?.id || !figure?.version || !sessionId) throw new TypeError('A registered Figure and stable session ID are required.');
  if (!loader || typeof loader.acquire !== 'function') throw new TypeError('A registered template preview loader is required.');

  const states = getFigureStates(figure);
  const baseline = canonicalState(states, initialState);
  if (!baseline) throw new Error('Initial state is not a member of this registered Figure.');
  const fields = getFigureFields(figure).filter(field => !['appearance', 'shape', 'silhouette'].includes(field.key)
    && Array.isArray(field.options) && field.options.length > 1);
  let locale = languageKey(initialLanguage);
  let currentState = baseline;
  let currentRecord = null;
  let currentEditor = null;
  let pending = null;
  let pendingToken = 0;
  let destroyed = false;
  let externalIntent = '';
  let baselineIntent = '';
  let lastFailedState = null;
  let figureAssetRows = null;
  let figureAssetRequest = null;
  let figureAssetController = null;
  const thumbnailLoader = createPreviewLoader({
    assetRegistry: [], requireDeliveryCoverage: true,
    maxConcurrent: 2, maxDecodedBytes: 32 * 1024 * 1024, maxIdleEntries: 6
  });
  let thumbnailGeneration = 0;
  const thumbnailRequests = new Map();

  const documentRef = root.ownerDocument || document;
  const element = documentRef.createElement('section');
  element.className = 'studio-editor-controls studio-figure-editor';
  element.dataset.figureId = figure.id;
  element.dataset.figureVersion = figure.version;
  element.setAttribute('aria-label', locale === 'zh-CN' ? '形象编辑器' : 'Figure editor');
  const heading = documentRef.createElement('h3');
  const hint = documentRef.createElement('p');
  hint.className = 'studio-editor-hint helper';
  const summary = documentRef.createElement('p');
  summary.className = 'studio-editor-selection-summary helper';
  const tabs = documentRef.createElement('div');
  tabs.className = 'studio-editor-tabs';
  tabs.setAttribute('role', 'tablist');
  tabs.setAttribute('aria-orientation', 'horizontal');
  const panelHost = documentRef.createElement('div');
  panelHost.className = 'studio-figure-editor-panels';
  const status = documentRef.createElement('p');
  status.className = 'studio-editor-status studio-figure-editor-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  const retry = documentRef.createElement('button');
  retry.type = 'button';
  retry.className = 'button studio-editor-retry';
  retry.hidden = true;
  retry.onclick = () => {
    const target = lastFailedState || currentState;
    lastFailedState = null;
    void beginTransition(target, { retrying: true });
  };
  element.append(heading, hint, summary, tabs, panelHost, status, retry);
  root.replaceChildren(element);

  const tabPrefix = `studio-figure-${++instanceId}`;
  const fieldPanels = new Map();
  const fieldTabs = new Map();
  const optionButtons = new Map();
  let activeField = fields[0]?.key || null;

  function fieldLabel(field) {
    return labelFor(field, locale, FIELD_LABELS[locale][field.key] || field.key);
  }

  function optionLabel(field, option) {
    return labelFor(option, locale, option.id);
  }

  function valueFor(state, field) {
    return state?.values?.[field.key] ?? state?.selections?.[field.key]
      ?? state?.recipe?.selections?.[field.key] ?? null;
  }

  function selectionSummary() {
    const copy = COPY[locale];
    const values = fields.map(field => {
      const selected = field.options.find(option => option.id === valueFor(currentState, field));
      return selected ? `${fieldLabel(field)}: ${optionLabel(field, selected)}` : '';
    }).filter(Boolean);
    summary.textContent = values.length ? `${copy.selected} — ${values.join(' · ')}` : '';
  }

  function refreshButtons() {
    const copy = COPY[locale];
    for (const field of fields) {
      const selectedId = valueFor(currentState, field);
      for (const { option, button } of optionButtons.get(field.key) || []) {
        const selected = option.id === selectedId;
        const target = selected ? currentState
          : resolveFigureSelection(figure, currentState.id, { [field.key]: option.id });
        const available = Boolean(target && canonicalState(states, target));
        button.disabled = Boolean(pending || (!selected && !available));
        button.setAttribute('aria-disabled', String(button.disabled));
        button.setAttribute('aria-pressed', String(selected));
        button.title = !available && !selected ? copy.unavailable : '';
        button.dataset.optionAvailable = String(available);
      }
    }
    selectionSummary();
  }

  function activateField(key) {
    if (!fieldPanels.has(key)) return;
    activeField = key;
    for (const [fieldKey, tab] of fieldTabs) {
      const active = fieldKey === key;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      fieldPanels.get(fieldKey).hidden = !active;
    }
    loadFigureThumbnails(key);
  }

  function renderFields() {
    tabs.replaceChildren();
    panelHost.replaceChildren();
    fieldPanels.clear();
    fieldTabs.clear();
    optionButtons.clear();
    for (const field of fields) {
      const tabId = `${tabPrefix}-tab-${field.key}`;
      const panelId = `${tabPrefix}-panel-${field.key}`;
      const tab = documentRef.createElement('button');
      tab.type = 'button';
      tab.className = 'studio-editor-tab';
      tab.id = tabId;
      tab.dataset.figureField = field.key;
      tab.dataset.editorTab = field.key;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panelId);
      tab.addEventListener('click', () => activateField(field.key));
      tab.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const index = fields.findIndex(row => row.key === field.key);
        const targetIndex = event.key === 'Home' ? 0 : event.key === 'End' ? fields.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : fields.length - 1)) % fields.length;
        const target = fields[targetIndex];
        activateField(target.key);
        fieldTabs.get(target.key)?.focus();
      });
      tabs.append(tab);

      const panel = documentRef.createElement('section');
      panel.className = 'studio-editor-category studio-figure-editor-category';
      panel.id = panelId;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tabId);
      const title = documentRef.createElement('h4');
      title.className = 'studio-editor-field-title';
      const options = documentRef.createElement('div');
      options.className = 'studio-editor-option-list studio-figure-option-list';
      options.setAttribute('role', 'group');
      options.setAttribute('aria-label', fieldLabel(field));
      const buttons = [];
      for (const option of field.options) {
        const button = documentRef.createElement('button');
        button.type = 'button';
        button.className = `studio-editor-option studio-figure-option studio-figure-option-${field.key}`;
        button.dataset.field = field.key;
        button.dataset.optionId = option.id;
        const visual = documentRef.createElement('span');
        visual.className = 'studio-editor-option-visual studio-figure-option-visual';
        if (typeof option.hex === 'string' && /^#[0-9a-f]{6}$/i.test(option.hex)) {
          visual.style.background = `radial-gradient(circle at 32% 28%, color-mix(in srgb, ${option.hex} 82%, white), ${option.hex} 63%, color-mix(in srgb, ${option.hex} 72%, black))`;
          visual.dataset.thumbnailState = 'ready';
        } else if (option.sourceOptionId === 'none') {
          visual.classList.add('studio-editor-option-none');
          visual.dataset.thumbnailState = 'empty';
          const mark = documentRef.createElement('span');
          mark.className = 'studio-editor-option-none-mark';
          mark.textContent = '×';
          mark.setAttribute('aria-hidden', 'true');
          visual.append(mark);
        } else {
          visual.dataset.thumbnailState = 'waiting-for-manifest';
          visual.setAttribute('aria-hidden', 'true');
          button.setAttribute('aria-busy', 'true');
        }
        const label = documentRef.createElement('span');
        label.className = 'studio-editor-option-label';
        label.textContent = optionLabel(field, option);
        button.append(visual, label);
        button.addEventListener('click', () => {
          if (button.disabled) return;
          const target = resolveFigureSelection(figure, currentState.id, { [field.key]: option.id });
          if (!target || !canonicalState(states, target)) return;
          void beginTransition(target);
        });
        options.append(button);
        buttons.push({ option, button });
      }
      title.textContent = fieldLabel(field);
      panel.append(title, options);
      panelHost.append(panel);
      fieldPanels.set(field.key, panel);
      fieldTabs.set(field.key, tab);
      optionButtons.set(field.key, buttons);
    }
    tabs.hidden = fields.length < 2;
    if (!fields.length) {
      const fixed = documentRef.createElement('p');
      fixed.className = 'studio-editor-fixed-look-note helper';
      fixed.setAttribute('role', 'status');
      panelHost.append(fixed);
    }
    activateField(activeField || fields[0]?.key);
  }

  function localize() {
    const copy = COPY[locale];
    heading.textContent = copy.title;
    hint.textContent = copy.hint;
    retry.textContent = copy.retry;
    tabs.setAttribute('aria-label', locale === 'zh-CN' ? '可调整项目' : 'Adjustable options');
    for (const field of fields) {
      const tab = fieldTabs.get(field.key);
      if (tab) tab.textContent = fieldLabel(field);
      const panel = fieldPanels.get(field.key);
      const title = panel?.querySelector('.studio-editor-field-title');
      if (title) title.textContent = fieldLabel(field);
      const group = panel?.querySelector('.studio-editor-option-list');
      group?.setAttribute('aria-label', fieldLabel(field));
      for (const { option, button } of optionButtons.get(field.key) || []) {
        const label = button.querySelector('.studio-editor-option-label');
        if (label) label.textContent = optionLabel(field, option);
        button.setAttribute('aria-label', `${fieldLabel(field)}: ${optionLabel(field, option)}`);
      }
    }
    const fixed = panelHost.querySelector('.studio-editor-fixed-look-note');
    if (fixed) fixed.textContent = copy.fixed;
    refreshButtons();
  }

  function sourceForOption(option, field) {
    return states.find(state => state.look?.id === option.sourceLookId
      && state.template?.options?.[field.key]?.some(row => row.id === option.sourceOptionId)) || null;
  }

  async function ensureFigureAssetRows() {
    if (figureAssetRows) return figureAssetRows;
    if (figureAssetRequest) return figureAssetRequest;
    figureAssetController = new AbortController();
    const signal = figureAssetController.signal;
    figureAssetRequest = (async () => {
      const sourceTemplates = [...new Map(states.map(state => [`${state.template.id}@${state.template.version}`, state.template])).values()];
      const manifestUrl = new URL('./assets/templates/sources.json?v=111', documentRef.baseURI);
      if (manifestUrl.origin !== globalThis.location?.origin) throw new Error('Template sources must be loaded from this site.');
      const response = await fetch(manifestUrl.href, { cache: 'force-cache', credentials: 'same-origin', signal });
      if (!response?.ok) throw new Error(`Template source manifest request failed (${response?.status ?? 'no response'}).`);
      const contentType = (response.headers?.get?.('content-type') || '').split(';', 1)[0].trim().toLowerCase();
      if (contentType !== 'application/json' && !contentType.endsWith('+json')) throw new Error('Template source manifest did not return JSON.');
      const manifest = await response.json();
      if (signal.aborted || destroyed) throw new DOMException('Figure editor was closed.', 'AbortError');
      const rows = sourceTemplates.flatMap(sourceTemplate => getTemplateManifestRows(sourceTemplate, manifest));
      const unique = [...new Map(rows.map(row => [`${row.id}\u0000${row.version}\u0000${row.purpose}`, row])).values()];
      thumbnailLoader.registerAssets(unique);
      figureAssetRows = unique;
      return figureAssetRows;
    })().catch(error => {
      figureAssetRequest = null;
      figureAssetController = null;
      throw error;
    });
    return figureAssetRequest;
  }

  function markThumbnailError(button, visual) {
    visual.replaceChildren();
    visual.dataset.thumbnailState = 'error';
    const mark = documentRef.createElement('span');
    mark.className = 'studio-editor-option-unavailable-mark';
    mark.textContent = '×';
    mark.setAttribute('aria-hidden', 'true');
    visual.append(mark);
    button.dataset.thumbnailError = 'true';
    button.setAttribute('aria-busy', 'false');
  }

  function loadFigureThumbnails(fieldKey = activeField) {
    for (const [button, controller] of thumbnailRequests) {
      if (button.dataset.field === fieldKey) continue;
      controller.abort();
      thumbnailRequests.delete(button);
      const visual = button.querySelector('.studio-figure-option-visual');
      if (visual?.dataset.thumbnailState === 'loading') visual.dataset.thumbnailState = 'waiting-for-manifest';
      button.dataset.thumbnailGeneration = String(++thumbnailGeneration);
    }
    for (const field of fields) {
      if (field.key !== fieldKey) continue;
      for (const { option, button } of optionButtons.get(field.key) || []) {
        const visual = button.querySelector('.studio-figure-option-visual');
        if (!visual || visual.dataset.thumbnailState !== 'waiting-for-manifest') continue;
        const source = sourceForOption(option, field);
        if (!source) {
          markThumbnailError(button, visual);
          continue;
        }
        const refs = getTemplateOptionAssetRefs(source.template, field.key, option.sourceOptionId);
        const references = refs.thumbnailAssets.length ? refs.thumbnailAssets : refs.layerAssets;
        if (!references.length) {
          markThumbnailError(button, visual);
          continue;
        }
        const generation = ++thumbnailGeneration;
        button.dataset.thumbnailGeneration = String(generation);
        visual.dataset.thumbnailState = 'loading';
        button.setAttribute('aria-busy', 'true');
        visual.dataset.assetIds = references.map(reference => reference.id).join(' ');
        const controller = new AbortController();
        thumbnailRequests.set(button, controller);
        void (async () => {
          try {
            const rows = await ensureFigureAssetRows();
            const thumbnail = await renderTemplateOptionThumbnail({
              template: source.template, references, rows, loader: thumbnailLoader, documentRef, signal: controller.signal
            });
            if (destroyed || controller.signal.aborted || Number(button.dataset.thumbnailGeneration) !== generation) return;
            if (!thumbnail) {
              markThumbnailError(button, visual);
              return;
            }
            visual.replaceChildren(thumbnail);
            visual.dataset.thumbnailState = 'ready';
            button.setAttribute('aria-busy', 'false');
          } catch {
            if (!destroyed && !controller.signal.aborted && Number(button.dataset.thumbnailGeneration) === generation) {
              markThumbnailError(button, visual);
            }
          } finally {
            if (thumbnailRequests.get(button) === controller) thumbnailRequests.delete(button);
          }
        })();
      }
    }
  }

  function childDraft(state, drafts) {
    const options = registeredRecipeOptions(state);
    if (!options) throw new Error('Figure state does not name an exact registered Template recipe.');
    let draft = drafts.createDraft({ artwork: state.artwork, template: state.template, look: state.look, language: locale, sessionId });
    // A GalleryLook can fix fields that are present in the full registered recipe
    // but are not editable Draft fields (for example, a cloud with no accessory).
    // Keep those source defaults and only patch actual changes from that baseline.
    const patch = Object.fromEntries(Object.entries(options).filter(([key, value]) => draft.options[key] !== value));
    if (Object.keys(patch).length) draft = drafts.updateDraft(draft, patch, { template: state.template });
    if (Object.keys(options).some(key => draft.options[key] !== options[key])) {
      throw new Error('Renderer Draft did not retain the exact registered Figure recipe.');
    }
    return draft;
  }

  function commitCandidate(candidate, snapshot) {
    if (destroyed || pending !== candidate) return;
    const previousEditor = currentEditor;
    currentEditor = candidate.editor;
    currentState = candidate.state;
    currentRecord = candidate.record;
    pending = null;
    lastFailedState = null;
    delete element.dataset.errorCode;
    delete element.dataset.errorAssetId;
    previewRoot.replaceChildren(currentEditor.previewElement);
    status.textContent = '';
    retry.hidden = true;
    element.dataset.stateId = currentState.id;
    element.dataset.recipeId = currentState.recipe.id;
    refreshButtons();
    previousEditor?.destroy();
    if (candidate.changed) onStateChange(currentState, currentRecord, { snapshot, sessionId, figure });
    onStatus({ message: '', canExport: true, snapshot, state: currentState, record: currentRecord, figure, sessionId });
  }

  async function beginTransition(target, { retrying = false } = {}) {
    if (destroyed || pending) return false;
    const exact = canonicalState(states, target);
    if (!exact) return false;
    if (exact.id === currentState.id && currentEditor && !retrying) {
      if (lastFailedState) {
        // An explicit re-selection of the still-visible successful state is a
        // user-confirmed recovery from the failed candidate.
        lastFailedState = null;
        delete element.dataset.errorCode;
        delete element.dataset.errorAssetId;
        status.textContent = '';
        retry.hidden = true;
        const snapshot = currentEditor.getSnapshot();
        onStatus({ message: '', canExport: Boolean(snapshot), snapshot, state: currentState, record: currentRecord, figure, sessionId });
      }
      return true;
    }
    let resolved;
    try { resolved = resolveState(exact); }
    catch { resolved = null; }
    const record = resolved?.artwork ? resolved : null;
    if (!record) {
      status.textContent = COPY[locale].failed;
      return false;
    }

    const token = ++pendingToken;
    const candidate = { token, state: exact, record, editor: null, changed: exact.id !== currentState.id };
    pending = candidate;
    status.textContent = COPY[locale].rendering;
    retry.hidden = true;
    element.dataset.pending = 'true';
    refreshButtons();
    for (const controller of thumbnailRequests.values()) controller.abort();
    thumbnailRequests.clear();
    for (const buttons of optionButtons.values()) for (const { button } of buttons) {
      const visual = button.querySelector('.studio-figure-option-visual');
      if (visual?.dataset.thumbnailState === 'loading') {
        visual.dataset.thumbnailState = 'waiting-for-manifest';
        button.dataset.thumbnailGeneration = String(++thumbnailGeneration);
      }
    }
    onStatus({ message: status.textContent, canExport: false, snapshot: null, state: currentState, record: currentRecord, figure, sessionId, pending: true });
    try {
      const [editorModule, drafts] = await Promise.all([
        import('./studio-editor.js?v=111'),
        import('./studio-draft.js?v=111')
      ]);
      if (destroyed || pending !== candidate || token !== pendingToken) return false;
      const childRoot = documentRef.createElement('div');
      candidate.editor = editorModule.createEditor({
        root: childRoot,
        artwork: exact.artwork,
        template: exact.template,
        look: exact.look,
        draft: childDraft(exact, drafts),
        loader,
        language: locale,
        showControls: false,
        onStatus: childStatus => {
          if (destroyed || pending !== candidate || token !== pendingToken) return;
          if (childStatus?.canExport && childStatus.snapshot) {
            delete element.dataset.pending;
            commitCandidate(candidate, childStatus.snapshot);
            return;
          }
          if (childStatus?.error) {
            candidate.error = childStatus.error;
            failCandidate(candidate);
          }
        }
      });
      return true;
    } catch (error) {
      candidate.error = error;
      failCandidate(candidate);
      return false;
    }
  }

  function failCandidate(candidate) {
    if (destroyed || pending !== candidate) return;
    candidate.editor?.destroy();
    pending = null;
    delete element.dataset.pending;
    lastFailedState = candidate.state;
    if (candidate.error?.code) element.dataset.errorCode = candidate.error.code;
    if (candidate.error?.assetId) element.dataset.errorAssetId = candidate.error.assetId;
    status.textContent = COPY[locale].failed;
    retry.hidden = false;
    refreshButtons();
    const snapshot = currentEditor?.getSnapshot() || null;
    onStatus({ message: status.textContent, canExport: false, snapshot: null, state: currentState, record: currentRecord, figure, sessionId, error: true });
  }

  renderFields();
  if (!fields.length) hint.hidden = true;
  localize();
  loadFigureThumbnails();
  element.dataset.stateId = currentState.id;
  void beginTransition(baseline);

  return Object.freeze({
    element,
    getState: () => currentState,
    getRecord: () => currentRecord,
    getSnapshot: () => currentEditor?.getSnapshot() || null,
    getDraft: () => currentEditor?.getDraft() || null,
    exportPNG: (...args) => currentEditor?.exportPNG(...args) || Promise.resolve(false),
    hasDirty: () => currentState.id !== baseline.id || externalIntent !== baselineIntent,
    setExternalIntent(value) { externalIntent = String(value ?? '').trim(); },
    setLanguage(value) {
      locale = languageKey(value);
      currentEditor?.setLanguage(locale);
      pending?.editor?.setLanguage(locale);
      localize();
    },
    retry() {
      const target = lastFailedState || currentState;
      lastFailedState = null;
      return beginTransition(target, { retrying: true });
    },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      pendingToken += 1;
      pending?.editor?.destroy();
      currentEditor?.destroy();
      for (const controller of thumbnailRequests.values()) controller.abort();
      thumbnailRequests.clear();
      figureAssetController?.abort();
      figureAssetController = null;
      thumbnailLoader.releaseAll();
      pending = null;
      currentEditor = null;
      previewRoot.replaceChildren();
      element.remove();
    }
  });
}
