import { assertValidTemplateOptions } from './studio-edit-templates.js?v=99';

const freeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) freeze(child);
  return Object.freeze(value);
};

const clonePlain = value => value == null ? value : JSON.parse(JSON.stringify(value));
const stable = value => {
  if (Array.isArray(value)) return `[${value.map(stable).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stable(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
};

function normalizeExternalIntent(value) {
  if (value == null) return null;
  if (typeof value !== 'object' || Array.isArray(value)) throw new TypeError('External intent must be an object or null.');
  const direction = typeof value.direction === 'string' ? value.direction.trim() : '';
  const edits = Array.isArray(value.edits) ? value.edits.map(edit => ({
    label: typeof edit?.label === 'string' ? edit.label.trim() : '',
    action: typeof edit?.action === 'string' ? edit.action.trim() : '',
    replacement: typeof edit?.replacement === 'string' ? edit.replacement.trim() : ''
  })).filter(edit => edit.action !== 'keep' && (edit.label || edit.action || edit.replacement)) : [];
  if (!direction && edits.length === 0) return null;
  return freeze({ direction, edits });
}

function sameOptions(a, b) {
  return a && b && ['color', 'shape', 'eyes', 'glasses', 'accessory'].every(key => a[key] === b[key]);
}

function assertBinding(artwork, template) {
  const artworkId = artwork?.id ?? artwork?.artworkId;
  const artworkVersion = artwork?.version ?? artwork?.artworkVersion;
  if (!artworkId || !artworkVersion || !template?.artworkBinding) throw new TypeError('A bound Artwork and Template are required.');
  if (template.artworkBinding.artworkId !== artworkId || template.artworkBinding.artworkVersion !== artworkVersion) {
    throw new Error('Template is not bound to this exact Artwork version.');
  }
}

function makeSessionId() {
  try { return globalThis.crypto.randomUUID(); } catch { /* Older runtimes use the local fallback. */ }
  return `studio-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function withDirty(draft) {
  return freeze({ ...draft, dirty: isDraftDirty(draft) });
}

export function createDraft({ artwork, template, language = 'en', sessionId = makeSessionId(), reviewHarness = false } = {}) {
  assertBinding(artwork, template);
  if (template.status !== 'approved' && !(reviewHarness === true && template.status === 'pending')) {
    throw new Error('Pending edit templates require an explicit review harness.');
  }
  const defaultOptions = assertValidTemplateOptions(template, template.defaultOptions);
  return withDirty({
    kind: 'character-studio-draft',
    sessionId,
    baseArtworkId: artwork.id ?? artwork.artworkId,
    baseArtworkVersion: artwork.version ?? artwork.artworkVersion,
    templateId: template.id,
    templateVersion: template.version,
    language: language === 'zh-CN' ? 'zh-CN' : 'en',
    reviewOnly: template.status === 'pending',
    defaultOptions: { ...defaultOptions },
    options: { ...defaultOptions },
    revision: 0,
    intentRevision: 0,
    externalIntent: null,
    baselineExternalIntent: null
  });
}

export function updateDraft(draft, patch, { template } = {}) {
  if (!draft || draft.kind !== 'character-studio-draft') throw new TypeError('A CharacterStudio Draft is required.');
  if (!template || template.id !== draft.templateId || template.version !== draft.templateVersion) throw new Error('Draft Template binding changed.');
  if (!patch || typeof patch !== 'object' || Array.isArray(patch)) throw new TypeError('Option patch must be an object.');
  const supportedKeys = new Set(['color', 'shape', 'eyes', 'glasses', 'accessory']);
  const unsupported = Object.keys(patch).filter(key => !supportedKeys.has(key));
  if (unsupported.length) throw new Error(`Unsupported Draft field: ${unsupported.join(', ')}`);
  const options = assertValidTemplateOptions(template, { ...draft.options, ...patch });
  if (sameOptions(options, draft.options)) return draft;
  return withDirty({ ...draft, options: { ...options }, revision: draft.revision + 1 });
}

/** Reset local configuration and outside intent to the Draft's creation baseline. */
export function resetDraft(draft, { template } = {}) {
  if (!draft || draft.kind !== 'character-studio-draft') throw new TypeError('A CharacterStudio Draft is required.');
  if (!template || template.id !== draft.templateId || template.version !== draft.templateVersion) throw new Error('Draft Template binding changed.');
  const options = assertValidTemplateOptions(template, draft.defaultOptions);
  const intentChanged = stable(draft.externalIntent) !== stable(draft.baselineExternalIntent);
  const optionsChanged = !sameOptions(options, draft.options);
  if (!intentChanged && !optionsChanged) return draft;
  return withDirty({
    ...draft,
    options: { ...options },
    externalIntent: clonePlain(draft.baselineExternalIntent),
    revision: optionsChanged ? draft.revision + 1 : draft.revision,
    intentRevision: intentChanged ? draft.intentRevision + 1 : draft.intentRevision
  });
}

/** Cancel edits has the same default reset semantics; the caller switches the same Studio to View. */
export function cancelDraft(draft, options = {}) {
  return resetDraft(draft, options);
}

/** Set ChatGPT-only intent without changing the renderer revision. */
export function markExternalIntent(draft, intent) {
  if (!draft || draft.kind !== 'character-studio-draft') throw new TypeError('A CharacterStudio Draft is required.');
  const normalized = normalizeExternalIntent(intent);
  if (stable(normalized) === stable(draft.externalIntent)) return draft;
  return withDirty({ ...draft, externalIntent: normalized, intentRevision: draft.intentRevision + 1 });
}

export function isDraftDirty(draft) {
  if (!draft || draft.kind !== 'character-studio-draft') return false;
  return !sameOptions(draft.options, draft.defaultOptions)
    || stable(draft.externalIntent) !== stable(draft.baselineExternalIntent);
}

export function updateDraftLanguage(draft, language) {
  if (!draft || draft.kind !== 'character-studio-draft') throw new TypeError('A CharacterStudio Draft is required.');
  const next = language === 'zh-CN' ? 'zh-CN' : 'en';
  return next === draft.language ? draft : freeze({ ...draft, language: next });
}
