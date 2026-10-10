import { PROMPTS } from './studio-artwork-catalog.js?v=97';

const promptsById = new Map(PROMPTS.map(record => [record.id, record]));

export function normalizePromptLanguage(language) {
  return language === 'en' ? 'en' : 'zh';
}

function resolvePrompt(artwork, language = 'en', target = 'image') {
  if (!artwork || typeof artwork !== 'object') throw new TypeError('Prompt 需要已登记的 Artwork。');
  if (target !== 'image') throw new RangeError(`暂不支持 ${target} 目标的作品 Prompt。`);
  const normalizedLanguage = normalizePromptLanguage(language);
  const ref = normalizedLanguage === 'en' ? artwork.promptRefs?.enImage : artwork.promptRefs?.zhImage;
  const record = promptsById.get(ref);
  if (!record || record.artworkId !== artwork.id || record.language !== normalizedLanguage || record.target !== target) {
    throw new Error('作品没有与当前版本匹配的 Prompt 记录。');
  }
  return record;
}

export function promptFor(artwork, { language = 'en', target = 'image' } = {}) {
  return resolvePrompt(artwork, language, target).text;
}

export function promptRecordFor(artwork, { language = 'en', target = 'image' } = {}) {
  return resolvePrompt(artwork, language, target);
}

/**
 * Build a session-only variation prompt from a verified Artwork prompt.
 * No Artwork fields or original assets are changed by this function.
 */
export function buildArtworkEditPrompt({ basePrompt, edits = [], additionalDirection = '', language = 'en' } = {}) {
  const base = String(basePrompt ?? '').trim();
  if (!base) throw new TypeError('修改 Prompt 需要当前作品的原始 Prompt。');
  const locale = normalizePromptLanguage(language);
  const changes = [];
  for (const edit of Array.isArray(edits) ? edits : []) {
    const label = String(edit?.label ?? '').trim();
    const action = edit?.action;
    if (!label || action === 'keep' || !['remove', 'replace'].includes(action)) continue;
    if (action === 'replace') {
      const replacement = String(edit?.replacement ?? '').trim();
      if (!replacement) throw new TypeError(`“${label}”的替换内容不能为空。`);
      changes.push(locale === 'en'
        ? `Replace ${label} with ${replacement}.`
        : `将${label}替换为${replacement}。`);
    } else {
      changes.push(locale === 'en'
        ? `Remove ${label} while preserving the character's identity and all unchanged details.`
        : `移除${label}，同时保留角色身份和未修改的其他细节。`);
    }
  }

  const direction = String(additionalDirection ?? '').trim().slice(0, 2000);
  const header = locale === 'en'
    ? 'Create a new variation of the same character. Preserve its identity and every detail that is not explicitly changed.'
    : '请以同一角色身份创作一个新版本，并保留所有未明确修改的细节。';
  const changeBlock = changes.length
    ? `${locale === 'en' ? 'Changes to apply:' : '需要修改：'}\n${changes.map(item => `- ${item}`).join('\n')}`
    : '';
  const directionBlock = direction
    ? (locale === 'en' ? `Additional direction: ${direction}` : `其他创作要求：${direction}`)
    : '';
  const attachmentNote = locale === 'en'
    ? 'If you attach a reference image in ChatGPT, use it as visual guidance while preserving the character identity above. If you do not attach an image, follow the text prompt alone. This site has not accessed or analyzed any image.'
    : '如果你在 ChatGPT 中自行附加参考图，请将其作为视觉参考并保持上述角色身份；未附图时，请只根据文字创作。本网站没有读取或分析任何图片。';
  return [header, base, changeBlock, directionBlock, attachmentNote].filter(Boolean).join('\n\n');
}
