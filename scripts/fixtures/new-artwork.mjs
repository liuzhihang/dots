import {
  ARTWORKS, CHARACTER_IDENTITIES, PROMPTS, canOpenArtwork as catalogCanOpenArtwork,
  createSnapshot as catalogCreateSnapshot, getAsset as catalogGetAsset, getArtwork as catalogGetArtwork,
  getPrompt as catalogGetPrompt, getVariants as catalogGetVariants, isPreviewArtwork as catalogIsPreviewArtwork,
  validateArtwork
} from '../../dist/studio-artwork-catalog.js?v=100';
import { queryArtworks as catalogQueryArtworks } from '../../dist/studio-tags.js?v=100';

const fixtureId = 'fixture-new-static-artwork';
const fixtureCharacterId = 'fixture-white-cat-variation';
const approvalPath = 'scripts/fixtures/new-artwork.mjs#fixture-only';
const snapshotPath = 'scripts/fixtures/new-artwork.mjs#fixture-only';

/**
 * Builds a browser-test-only new Character/Artwork using registered white-cat
 * files. The bytes are real and immutable; all changed ownership and approval
 * fields are explicitly fixture-only. Nothing is added to the published lists.
 */
export function createNewArtworkFixture() {
  const sourceArtwork = catalogGetArtwork('animal-white-cat', ARTWORKS);
  const sourceOriginal = catalogGetAsset(sourceArtwork.assetRefs.original);
  const sourcePoster = catalogGetAsset(sourceArtwork.assetRefs.poster);
  const sourcePoster512 = catalogGetAsset(sourceArtwork.assetRefs.poster512);
  const sourceDetail512 = catalogGetAsset(sourceArtwork.assetRefs.detail512);
  const sourceDetail1024 = catalogGetAsset(sourceArtwork.assetRefs.detail1024);
  const character = Object.freeze({
    id: fixtureCharacterId,
    seriesId: sourceArtwork.seriesId,
    labelByLanguage: Object.freeze({ en: 'Fixture White Cat Variation', 'zh-CN': '测试奶油白猫新外观' })
  });
  const fixtureIdentity = Object.freeze({
    status: 'approved',
    record: approvalPath,
    sourceSnapshot: snapshotPath,
    sourceId: 'fixture-only-white-cat-source',
    siteVersion: 'fixture',
    cacheRevision: 'fixture',
    scope: 'fixture-only',
    artworkId: fixtureId,
    assetSha256: sourceOriginal.sha256,
    note: '仅供隔离的组件闭环测试，不授予正式作品批准。'
  });
  const original = Object.freeze({
    ...sourceOriginal,
    id: `asset:${fixtureId}:original`,
    version: 'fixture-v1',
    ownerArtworkId: fixtureId,
    publicationStatus: 'published',
    sourceSnapshotMatch: true,
    artApproval: Object.freeze({ ...fixtureIdentity, assetSha256: sourceOriginal.sha256 })
  });
  const derivative = (source, purpose, resourceKind = source.resourceKind) => Object.freeze({
    ...source,
    id: `asset:${fixtureId}:${purpose}`,
    artworkId: fixtureId,
    ownerArtworkId: fixtureId,
    sourceAssetId: original.id,
    sourceAssetSha256: original.sha256,
    sourceAssetSnapshotRef: null,
    publicationStatus: 'published-derivative',
    resourceKind,
    purpose,
    downloadable: false,
    artApproval: original.artApproval
  });
  const poster = derivative(sourcePoster, 'poster', 'gallery-poster');
  const poster512 = derivative(sourcePoster512, 'poster512', 'gallery-poster');
  const detail512 = derivative(sourceDetail512, 'detail512', 'display-preview');
  const detail1024 = derivative(sourceDetail1024, 'detail1024', 'display-preview');
  const assets = Object.freeze([original, poster, poster512, detail512, detail1024]);
  const byAssetId = new Map(assets.map(asset => [asset.id, asset]));
  const getAsset = ref => {
    const id = typeof ref === 'string' ? ref : ref?.id;
    const asset = byAssetId.get(id);
    if (!asset) return catalogGetAsset(ref);
    if (ref && typeof ref === 'object') {
      const fields = ['version', 'path', 'sha256', 'mime', 'byteSize', 'width', 'height'];
      if (fields.some(field => ref[field] !== asset[field])) return null;
    }
    return asset;
  };
  const basePromptZh = catalogGetPrompt(sourceArtwork.promptRefs.zhImage);
  const basePromptEn = catalogGetPrompt(sourceArtwork.promptRefs.enImage);
  const prompts = Object.freeze([
    Object.freeze({ ...basePromptZh, id: `prompt:${fixtureId}:zh-image`, artworkId: fixtureId, source: 'fixture-only' }),
    Object.freeze({ ...basePromptEn, id: `prompt:${fixtureId}:en-image`, artworkId: fixtureId, source: 'fixture-only' })
  ]);
  const artwork = {
    ...structuredClone(sourceArtwork),
    id: fixtureId,
    title: 'Fixture White Cat Variation',
    description: 'Fixture-only data proving that a new Character and complete Artwork can use shared components.',
    titleByLanguage: { en: 'Fixture White Cat Variation', 'zh-CN': '测试奶油白猫新外观' },
    descriptionByLanguage: {
      en: 'A test-only variation using the registered white-cat art bytes and facts.',
      'zh-CN': '仅用于测试的新外观，复用已登记白猫原图字节与真实可见事实。'
    },
    aliases: { en: ['fixture only', 'new character fixture'], 'zh-CN': ['仅测试', '新角色测试项'] },
    characterId: fixtureCharacterId,
    characterLabelByLanguage: character.labelByLanguage,
    source: {
      id: 'fixture-only-white-cat-source', kind: 'test-only-original-artwork',
      registrationRef: approvalPath, sourceSnapshot: snapshotPath, sourceId: 'fixture-only-white-cat-source'
    },
    sourceSnapshotMatch: true,
    featureReview: { status: 'verified-visible-facts', method: 'copied from the exact registered white-cat fixture source' },
    artApproval: Object.freeze({ ...fixtureIdentity, assetSha256: original.sha256 }),
    assetRefs: Object.freeze({ original: original.id, poster: poster.id, poster512: poster512.id, detail512: detail512.id, detail1024: detail1024.id }),
    displayPreviews: Object.freeze({ small: detail512.id, large: detail1024.id }),
    promptRefs: Object.freeze({ zhImage: prompts[0].id, enImage: prompts[1].id }),
    version: original.version
  };
  Object.freeze(artwork);
  const catalog = Object.freeze([...ARTWORKS, artwork]);
  const allPrompts = Object.freeze([...PROMPTS, ...prompts]);
  const characterIdentities = Object.freeze([...CHARACTER_IDENTITIES, character]);
  const validationContext = Object.freeze({ getAsset, prompts: allPrompts, characterIdentities });
  const getArtwork = id => id === fixtureId ? artwork : catalogGetArtwork(id);
  const getPrompt = idOrRecord => {
    const id = typeof idOrRecord === 'string' ? idOrRecord : idOrRecord?.id;
    const prompt = prompts.find(item => item.id === id) || catalogGetPrompt(id);
    if (!prompt || (idOrRecord && typeof idOrRecord === 'object'
      && ['artworkId', 'language', 'target', 'revision', 'text'].some(field => idOrRecord[field] !== prompt[field]))) return null;
    return prompt;
  };
  const getVariants = id => id === fixtureId ? [] : catalogGetVariants(id);
  const isPreviewArtwork = idOrArtwork => idOrArtwork?.id === fixtureId || idOrArtwork === fixtureId
    ? false : catalogIsPreviewArtwork(idOrArtwork);
  const canOpenArtwork = (idOrArtwork, version) => {
    if (idOrArtwork === fixtureId || idOrArtwork?.id === fixtureId) {
      return (!version || version === artwork.version) && validateArtwork(artwork, validationContext);
    }
    return catalogCanOpenArtwork(idOrArtwork, version);
  };
  const createSnapshot = id => id === fixtureId
    ? catalogCreateSnapshot(id, { ...validationContext, catalog, catalogRevision: 'fixture-only' })
    : catalogCreateSnapshot(id);
  const queryArtworks = query => catalogQueryArtworks(query, catalog, validationContext);
  const promptFor = (record, { language = 'zh-CN', target = 'image' } = {}) => {
    if (target !== 'image' || !record) return null;
    const id = language === 'en' ? record.promptRefs?.enImage : record.promptRefs?.zhImage;
    return getPrompt(id);
  };
  return Object.freeze({
    artwork, character, assets, prompts, catalog, getAsset, getArtwork, getPrompt,
    getVariants, isPreviewArtwork, canOpenArtwork, createSnapshot, queryArtworks,
    promptFor, validationContext, sourceArtwork
  });
}
