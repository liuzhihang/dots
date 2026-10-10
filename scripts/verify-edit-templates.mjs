import assert from 'node:assert/strict';
import {
  TEMPLATE_REGISTRY,
  enumerateValidConfigurations,
  getRequiredTemplateAssets,
  getTemplateForArtwork,
  resolveTemplateAsset,
  validateTemplateOptions
} from '../dist/studio-edit-templates.js?v=99';
import {
  cancelDraft,
  createDraft,
  isDraftDirty,
  markExternalIntent,
  resetDraft,
  updateDraft,
  updateDraftLanguage
} from '../dist/studio-draft.js?v=99';

const dots = TEMPLATE_REGISTRY.find(template => template.id === 'dots-orb-v1');
const grok = TEMPLATE_REGISTRY.find(template => template.id === 'grok-orb-v1');
assert.ok(dots && grok, 'Both bound template definitions exist.');
assert.equal(TEMPLATE_REGISTRY.length, 2, 'Only the two explicitly selected orb pilots are registered.');

const dotsArtwork = { id: dots.artworkBinding.artworkId, version: dots.artworkBinding.artworkVersion, publicationStatus: 'published', artApproval: { status: 'approved' } };
const grokArtwork = { id: grok.artworkBinding.artworkId, version: grok.artworkBinding.artworkVersion, publicationStatus: 'published', artApproval: { status: 'approved' } };
assert.equal(getTemplateForArtwork(dotsArtwork)?.id, dots.id, 'The exactly approved Dots Template is exposed in production.');
assert.equal(getTemplateForArtwork(grokArtwork)?.id, grok.id, 'The exactly approved Grok Template is exposed in production.');
assert.equal(getTemplateForArtwork({ ...dotsArtwork, version: 'v1' }), null, 'A different Artwork version is never implicitly adapted.');
assert.equal(getTemplateForArtwork({ ...grokArtwork, id: 'unbound-artwork' }), null, 'An unbound artwork cannot receive a template.');

const pendingDots = { ...dots, status: 'pending', engineeringStatus: 'pending', artApproval: { status: 'pending', record: null } };
assert.equal(getTemplateForArtwork(dotsArtwork, { registry: [pendingDots] }), null, 'A pending Template stays unavailable in production.');
assert.equal(getTemplateForArtwork(dotsArtwork, { registry: [pendingDots], reviewHarness: true })?.accessMode, 'review-only', 'Only the explicit review harness can inspect a pending Template.');
assert.equal(getTemplateForArtwork({ ...dotsArtwork, artApproval: { status: 'pending' } }), null, 'Approved Template status cannot bypass Artwork approval.');
assert.equal(getTemplateForArtwork({ ...dotsArtwork, publicationStatus: 'preview-only' }), null, 'An approved Template cannot expose an unpublished Artwork.');

const dotsRows = enumerateValidConfigurations(dots);
const grokRows = enumerateValidConfigurations(grok);
assert.equal(dotsRows.length, 12, 'Dots has exactly 12 legal combinations.');
assert.equal(grokRows.length, 16, 'Grok has exactly 16 legal combinations.');
assert.equal(new Set(dotsRows.map(row => JSON.stringify(row))).size, 12, 'Dots combinations are unique.');
assert.equal(new Set(grokRows.map(row => JSON.stringify(row))).size, 16, 'Grok combinations are unique.');
assert.equal(dotsRows.some(row => row.glasses === 'round' && row.accessory === 'headphones'), false, 'Dots rejects all four glasses-plus-headphones combinations.');
assert.equal(grokRows.some(row => row.glasses === 'round' && row.accessory === 'soft-cap'), true, 'Grok includes the specifically adapted cap-plus-glasses combinations.');
assert.ok(dotsRows.every(row => row.shape === 'orb') && grokRows.every(row => row.shape === 'orb'), 'Shape remains fixed and is not a hidden selector.');
assert.equal(validateTemplateOptions(dots, { ...dots.defaultOptions, shape: 'triangle' }).valid, false, 'A non-orb shape is rejected.');

const defaultRefs = getRequiredTemplateAssets(dots, dots.defaultOptions);
assert.deepEqual(defaultRefs.map(row => row.id), [
  'template:dots-orb-v1:body-neutral',
  'template:dots-orb-v1:eyes:original',
  'template:dots-orb-v1:headphones:default:rear',
  'template:dots-orb-v1:headphones:default:front'
], 'The Dots default recipe requires real body, eye, and both headphone planes.');
assert.equal(resolveTemplateAsset(defaultRefs[0], [defaultRefs[0]]), defaultRefs[0], 'Exact asset id/version/purpose resolves.');
assert.equal(resolveTemplateAsset({ ...defaultRefs[0], purpose: 'original-artwork' }, [defaultRefs[0]]), null, 'Purpose mismatch never resolves.');
const uprightEyesRef = getRequiredTemplateAssets(grok, { ...grok.defaultOptions, eyes: 'upright-capsules' })
  .find(reference => reference.id === 'template:grok-orb-v1:eyes:upright-capsules');
assert.equal(uprightEyesRef?.version, 'v2', 'The revised upright-eye source is independently versioned without replacing its earlier registered bytes.');
assert.equal(grok.layers.eyes['angled-capsules']?.version, 'v2', 'The registered angled eye placement uses an immutable v2 resource tuple.');
assert.equal(grok.layers.glasses.round.rear?.version, 'v2', 'The registered glasses rear plane uses its revised v2 resource tuple.');
assert.equal(grok.layers.accessories['soft-cap'].rear?.version, 'v2', 'The cap rear placement uses an immutable v2 resource tuple.');
assert.equal(grok.layers.accessories['soft-cap'].front?.version, 'v2', 'The cap front placement uses an immutable v2 resource tuple.');
assert.throws(() => getRequiredTemplateAssets({ ...dots, layers: { ...dots.layers, eyes: {} } }, dots.defaultOptions), /no registered .* eye layer/i, 'Missing layer definition blocks the recipe.');

const dotsDraft = createDraft({ artwork: dotsArtwork, template: dots, sessionId: 'verify-dots-session', reviewHarness: true });
assert.equal(isDraftDirty(dotsDraft), false, 'New Draft starts clean.');
assert.equal(markExternalIntent(dotsDraft, { direction: '', edits: [] }), dotsDraft, 'Empty external intent is a no-op.');
assert.equal(markExternalIntent(dotsDraft, { direction: '', edits: [{ label: 'real fact', action: 'keep' }] }), dotsDraft, 'Unchanged fact rows do not dirty the Draft.');
const externalDraft = markExternalIntent(dotsDraft, { direction: 'external', edits: [{ label: 'add wings', action: 'add' }] });
assert.equal(externalDraft.revision, dotsDraft.revision, 'ChatGPT-only intent does not schedule a canvas render.');
assert.equal(isDraftDirty(externalDraft), true, 'Non-empty external intent participates in dirty state.');
const changedDraft = updateDraft(externalDraft, { color: 'warm-yellow' }, { template: dots });
assert.equal(changedDraft.revision, 1, 'A legal local option change increments the render revision.');
assert.equal(changedDraft.options.color, 'warm-yellow', 'The accepted value is committed to the isolated Draft.');
assert.throws(() => updateDraft(changedDraft, { glasses: 'round' }, { template: dots }), /do not fit|不兼容/i, 'Conflicting combination is rejected without mutating the previous Draft.');
assert.equal(changedDraft.options.glasses, 'none', 'Rejected patch leaves the prior configuration intact.');
const reset = resetDraft(changedDraft, { template: dots });
assert.equal(reset.options.color, dots.defaultOptions.color, 'Reset restores the Template baseline.');
assert.equal(reset.externalIntent, null, 'Reset clears outside intent alongside local changes.');
assert.equal(reset.revision, 2, 'Reset to different rendered options creates a new revision.');
assert.equal(isDraftDirty(reset), false, 'Returning to both baselines clears dirty state.');
assert.equal(cancelDraft(reset, { template: dots }), reset, 'Cancel on a clean baseline remains a no-op; the caller switches to View.');
const localized = updateDraftLanguage(changedDraft, 'zh-CN');
assert.equal(localized.language, 'zh-CN', 'Language can change without touching the Artwork snapshot.');
assert.equal(localized.revision, changedDraft.revision, 'Language changes do not trigger a canvas render.');
assert.equal(isDraftDirty(localized), isDraftDirty(changedDraft), 'Language changes do not affect dirty state.');

console.log('PASS exact artwork/template binding and approval gates');
console.log('PASS 12 Dots / 16 Grok legal combinations and explicit incompatibility');
console.log('PASS in-memory Draft, external intent, revision, reset and cancel semantics');
