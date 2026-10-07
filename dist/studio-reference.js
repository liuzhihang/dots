import { copyText, copyAndOpen, chatGPTUrlForPrompt } from './studio-actions.js?v=92';
import { STYLE_IDENTITIES } from './studio-artwork-catalog.js?v=92';
import { buildReferencePrompt } from './studio-prompt.js?v=92';

const MAX_TEXT = 2000;
const DEFAULT_REFERENCE_API = { STYLE_IDENTITIES, buildReferencePrompt };

const text = value => String(value ?? '').trim();
const make = (tag, className, content) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
};

function styleEntries(api) {
  const styles = api?.STYLE_IDENTITIES;
  if (Array.isArray(styles)) return styles.filter(item => item?.id).map(item => ({ id: item.id, label: item.label || item.name || item.title || item.id }));
  if (styles && typeof styles === 'object') return Object.entries(styles).map(([id, value]) => ({ id, label: typeof value === 'string' ? value : value?.label || value?.name || id }));
  return [];
}

function cleanRetain(value) {
  return String(value ?? '').split(/\r?\n/).map(line => line.trim()).filter(Boolean).slice(0, 20);
}

/**
 * Build a local, text-only reference brief. The user chooses and uploads any
 * reference image inside ChatGPT; this view never selects or reads image files.
 */
export function createReferenceView({ styleId = '', session = {}, api = DEFAULT_REFERENCE_API, onSessionChange = () => {}, notify = () => {} } = {}) {
  if (!api || typeof api.buildReferencePrompt !== 'function') throw new TypeError('参考图入口需要本地 Prompt 模板 API。');
  session ||= {};

  const current = {
    styleId: text(session.styleId || styleId),
    description: String(session.description || '').slice(0, MAX_TEXT),
    retain: Array.isArray(session.retain) ? session.retain.map(text).filter(Boolean).slice(0, 20) : [],
    language: session.language === 'en' ? 'en' : 'zh',
    target: 'image'
  };
  let disposed = false;
  let promptRevision = 0;
  let promptText = '';
  let copyFallbackOpen = false;
  let building = false;

  const root = make('section', 'reference-assist');
  root.setAttribute('aria-labelledby', 'reference-assist-title');
  const title = make('h2', 'reference-assist__title', '用参考图继续创作');
  title.id = 'reference-assist-title';
  const intro = make('p', 'reference-assist__intro', '填写创作方向和要保留的细节，选择角色风格后生成提示词。本站不会选择、预览或分析图片；打开 ChatGPT 后，你可以在那里上传参考图片并发送。');

  const styleLabel = make('label', 'reference-assist__field-label', '目标风格');
  const styleSelect = make('select', 'reference-assist__style-select');
  const entries = styleEntries(api);
  for (const style of entries) {
    const option = make('option', '', style.label);
    option.value = style.id;
    styleSelect.append(option);
  }
  if (current.styleId && !entries.some(item => item.id === current.styleId)) {
    const option = make('option', '', current.styleId);
    option.value = current.styleId;
    styleSelect.append(option);
  }
  styleSelect.value = current.styleId || entries[0]?.id || '';
  styleLabel.append(styleSelect);

  const descriptionLabel = make('label', 'reference-assist__field-label', '创作方向');
  const description = make('textarea', 'reference-assist__description');
  description.rows = 4;
  description.maxLength = MAX_TEXT;
  description.value = current.description;
  description.placeholder = '例如：保留发型与主配色，改成挥手姿势。';
  descriptionLabel.append(description);

  const retainLabel = make('label', 'reference-assist__field-label', '希望保留的细节（每行一项）');
  const retain = make('textarea', 'reference-assist__retain');
  retain.rows = 3;
  retain.maxLength = MAX_TEXT;
  retain.value = current.retain.join('\n');
  retain.placeholder = '例如：圆形眼镜\n浅紫主色';
  retainLabel.append(retain);

  const languageLabel = make('label', 'reference-assist__field-label', 'Prompt 语言');
  const languageSelect = make('select', 'reference-assist__language-select');
  for (const [value, label] of [['zh', '中文'], ['en', 'English']]) {
    const option = make('option', '', label);
    option.value = value;
    languageSelect.append(option);
  }
  languageSelect.value = current.language;
  languageLabel.append(languageSelect);

  const promptHeading = make('h3', 'reference-assist__prompt-title', '创作 Prompt');
  const promptPreview = make('pre', 'reference-assist__prompt-preview');
  promptPreview.setAttribute('aria-live', 'polite');
  const chatNote = make('p', 'reference-assist__chat-note', '如果你要参考图片，请在 ChatGPT 输入框中上传图片。本站不会把本地文件附加到对话，也不会替你发送。');

  const actions = make('div', 'reference-assist__actions');
  const copyButton = make('button', 'reference-assist__button reference-assist__button--quiet', '复制 Prompt');
  copyButton.type = 'button';
  const chatButton = make('button', 'reference-assist__button reference-assist__button--primary', '在 ChatGPT 中创作');
  chatButton.type = 'button';
  actions.append(copyButton, chatButton);

  const manualChatLink = make('a', 'reference-assist__manual-chat-link', '重新打开 ChatGPT（带入当前 Prompt）');
  manualChatLink.href = chatGPTUrlForPrompt('');
  manualChatLink.target = '_blank';
  manualChatLink.rel = 'noopener noreferrer';
  manualChatLink.hidden = true;

  const feedback = make('p', 'reference-assist__feedback');
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  const copyFallback = make('div', 'reference-assist__copy-fallback');
  const fallbackLabel = make('label', 'reference-assist__field-label', 'Prompt 全文（可手动选择复制）');
  const fallbackArea = make('textarea', 'reference-assist__manual-prompt');
  fallbackArea.readOnly = true;
  fallbackArea.rows = 8;
  fallbackLabel.append(fallbackArea);
  const selectButton = make('button', 'reference-assist__select-prompt', '选择全文');
  selectButton.type = 'button';
  copyFallback.append(fallbackLabel, selectButton);
  copyFallback.hidden = true;
  root.append(title, intro, styleLabel, descriptionLabel, retainLabel, languageLabel, promptHeading, promptPreview, chatNote, actions, manualChatLink, feedback, copyFallback);

  function message(value, error = false) {
    feedback.textContent = value;
    feedback.dataset.state = error ? 'error' : 'ok';
    if (value) notify(value, { error });
  }

  function updateSession() {
    current.styleId = styleSelect.value;
    current.description = description.value.slice(0, MAX_TEXT);
    current.retain = cleanRetain(retain.value);
    current.language = languageSelect.value === 'en' ? 'en' : 'zh';
    onSessionChange({ ...current });
  }

  function updatePromptControls() {
    copyButton.disabled = building || !promptText;
    chatButton.disabled = building || !promptText;
  }

  async function makePrompt() {
    const token = ++promptRevision;
    const fields = {
      styleId: styleSelect.value,
      description: description.value.slice(0, MAX_TEXT).trim(),
      retain: cleanRetain(retain.value),
      language: languageSelect.value === 'en' ? 'en' : 'zh',
      target: 'image'
    };
    updateSession();
    building = true;
    updatePromptControls();
    try {
      const result = await api.buildReferencePrompt(fields);
      if (disposed || token !== promptRevision) return;
      promptText = text(result?.text ?? result);
      promptPreview.textContent = promptText || '填写创作方向后生成对应提示词。';
      fallbackArea.value = promptText;
      manualChatLink.href = chatGPTUrlForPrompt(promptText);
      copyFallback.hidden = !copyFallbackOpen;
    } catch (error) {
      if (!disposed && token === promptRevision) {
        promptText = '';
        promptPreview.textContent = '模板 Prompt 暂不可用。';
        message(`Prompt 模板生成失败：${text(error?.message) || '请稍后重试。'}`, true);
      }
    } finally {
      if (!disposed && token === promptRevision) {
        building = false;
        updatePromptControls();
      }
    }
  }

  for (const field of [styleSelect, description, retain, languageSelect]) field.addEventListener('input', makePrompt);
  styleSelect.addEventListener('change', makePrompt);
  languageSelect.addEventListener('change', makePrompt);

  copyButton.addEventListener('click', async () => {
    if (!promptText || building) return message('Prompt 暂不可用，请稍后重试。', true);
    const frozenPrompt = promptText;
    const token = promptRevision;
    const result = await copyText(frozenPrompt, { isCurrent: () => !disposed && promptRevision === token });
    if (result.cancelled || disposed || promptRevision !== token) return;
    if (result.ok) {
      copyFallbackOpen = false;
      copyFallback.hidden = true;
      message('创作 Prompt 已复制。若需参考图片，请在 ChatGPT 上传后自行发送。');
    } else {
      copyFallbackOpen = true;
      fallbackArea.value = frozenPrompt;
      copyFallback.hidden = false;
      fallbackArea.focus();
      fallbackArea.select();
      message('复制失败；已提供可手动选择的完整 Prompt。', true);
    }
  });

  chatButton.addEventListener('click', async () => {
    if (!promptText || building) return message('Prompt 暂不可用，请稍后重试。', true);
    const frozenPrompt = promptText;
    const token = promptRevision;
    const result = await copyAndOpen(frozenPrompt, {
      isCurrent: () => !disposed && promptRevision === token,
      notify: value => { if (!disposed && promptRevision === token) message(value); }
    });
    if (result.cancelled || disposed || promptRevision !== token) return;
    manualChatLink.href = result.targetUrl || chatGPTUrlForPrompt(frozenPrompt);
    if (!result.opened) manualChatLink.hidden = false;
    if (!result.copied) {
      copyFallbackOpen = true;
      fallbackArea.value = frozenPrompt;
      copyFallback.hidden = false;
      fallbackArea.focus();
      fallbackArea.select();
    }
  });

  selectButton.addEventListener('click', () => {
    fallbackArea.focus();
    fallbackArea.select();
  });

  manualChatLink.href = chatGPTUrlForPrompt(promptText);
  makePrompt();

  return {
    element: root,
    title: '用参考图继续创作',
    getSession() { updateSession(); return { ...current }; },
    dispose() {
      disposed = true;
      promptRevision += 1;
    }
  };
}
