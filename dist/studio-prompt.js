import { PROMPTS, STYLE_IDENTITIES } from './studio-artwork-catalog.js?v=90';

const promptsById = new Map(PROMPTS.map(record => [record.id, record]));
const stylesById = new Map(STYLE_IDENTITIES.map(style => [style.id, style]));
const LANGUAGES = new Set(['zh', 'en']);

function resolvePrompt(artwork, language, target) {
  if (!artwork || typeof artwork !== 'object') throw new TypeError('Prompt 需要已登记的 Artwork。');
  if (target !== 'image') throw new RangeError(`暂不支持 ${target} 目标的作品 Prompt。`);
  if (!LANGUAGES.has(language)) throw new RangeError(`暂不支持 ${language} Prompt 语言。`);
  const ref = language === 'en' ? artwork.promptRefs?.enImage : artwork.promptRefs?.zhImage;
  const record = promptsById.get(ref);
  if (!record || record.artworkId !== artwork.id || record.language !== language || record.target !== target) {
    throw new Error('作品没有与当前版本匹配的 Prompt 记录。');
  }
  return record;
}

export function promptFor(artwork, { language = 'zh', target = 'image' } = {}) {
  return resolvePrompt(artwork, language, target).text;
}

export function promptRecordFor(artwork, { language = 'zh', target = 'image' } = {}) {
  return resolvePrompt(artwork, language, target);
}

export function buildReferencePrompt({ styleId, description = '', retain = [], language = 'zh', target = 'image' } = {}) {
  if (target !== 'image') throw new RangeError(`暂不支持 ${target} 目标的参考图 Prompt。`);
  if (!LANGUAGES.has(language)) throw new RangeError(`暂不支持 ${language} Prompt 语言。`);
  const style = stylesById.get(styleId);
  if (!style) throw new RangeError('请选择已登记的目标风格。');
  const details = String(description ?? '').trim().slice(0, 2000);
  const retained = (Array.isArray(retain) ? retain : [retain]).map(value => String(value ?? '').trim()).filter(Boolean).slice(0, 20);
  if (language === 'en') {
    if (!style.labelEn || !style.descriptionEn) throw new Error('该风格尚无经编辑的英文参考模板。');
    const lines = [
      `Create an original still character image in the ${style.labelEn} identity. ${style.descriptionEn}`,
      details ? `User-provided direction: ${details}` : '',
      retained.length ? `Details to retain: ${retained.join('; ')}.` : '',
      'If you upload a reference image in ChatGPT, use that image as visual guidance. This page has not accessed or analyzed any image; upload it in ChatGPT yourself.',
      'Keep the character itself isolated on a transparent background unless the user explicitly requests a scene. This is a prompt for a still image, not an animation or a validated Dot/Pet package.'
    ].filter(Boolean);
    return lines.join('\n\n');
  }
  const lines = [
    `以 ${style.label} 身份制作一张原创静态角色图。${style.description}`,
    details ? `用户提供的创作要求：${details}` : '',
    retained.length ? `希望保留的细节：${retained.join('、')}。` : '',
    '如果你在 ChatGPT 中上传了参考图片，请以该图片作为视觉参考；未上传图片时，请只根据上述文字要求创作。本页面没有读取或分析任何图片，请由你在 ChatGPT 中手动上传。',
    '除非用户明确要求场景，角色本身保持独立并使用透明背景。这是静态图 Prompt，不是动画或已验证的 Dot/Pet 资源包。'
  ].filter(Boolean);
  return lines.join('\n\n');
}
