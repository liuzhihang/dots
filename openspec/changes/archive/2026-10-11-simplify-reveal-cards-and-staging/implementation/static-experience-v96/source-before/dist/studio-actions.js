const CHATGPT_URL = 'https://chatgpt.com/';

export async function copyText(value, { isCurrent = () => true } = {}) {
  const text = String(value ?? '');
  if (!text) return { ok: false, method: null, error: new Error('没有可复制的内容。') };
  const current = () => { try { return isCurrent() === true; } catch { return false; } };
  if (!current()) return { ok: false, cancelled: true, method: null };

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      if (!current()) return { ok: false, cancelled: true, method: null };
      return { ok: true, method: 'clipboard' };
    }
  } catch (error) {
    // Continue to the user-gesture-compatible fallback below.
  }
  if (!current()) return { ok: false, cancelled: true, method: null };

  const active = document.activeElement;
  const selection = document.getSelection?.();
  const savedRanges = [];
  if (selection) {
    for (let i = 0; i < selection.rangeCount; i += 1) savedRanges.push(selection.getRangeAt(i).cloneRange());
  }

  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.setAttribute('aria-hidden', 'true');
  Object.assign(field.style, {
    position: 'fixed', inset: '0 auto auto 0', width: '1px', height: '1px',
    padding: '0', border: '0', opacity: '0', pointerEvents: 'none'
  });
  document.body.append(field);

  let copied = false;
  try {
    field.focus({ preventScroll: true });
    field.select();
    field.setSelectionRange(0, field.value.length);
    copied = document.execCommand?.('copy') === true;
  } catch {
    copied = false;
  } finally {
    field.remove();
    try { active?.focus?.({ preventScroll: true }); } catch { /* Focus may have left the document. */ }
    if (selection) {
      selection.removeAllRanges();
      for (const range of savedRanges) selection.addRange(range);
    }
  }

  return copied
    ? { ok: true, method: 'execCommand' }
    : { ok: false, method: null, error: new Error('浏览器没有允许复制到剪贴板。') };
}

export function downloadText(value, filename = 'dot-icon-studio-prompt.txt') {
  const text = String(value ?? '');
  if (!text || typeof document === 'undefined' || typeof URL?.createObjectURL !== 'function') return false;

  let url;
  try {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.hidden = true;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    return true;
  } catch {
    if (url) URL.revokeObjectURL(url);
    return false;
  }
}

export function chatGPTUrlForPrompt(value) {
  const prompt = String(value ?? '');
  return prompt ? `${CHATGPT_URL}?prompt=${encodeURIComponent(prompt)}` : CHATGPT_URL;
}

export async function copyAndOpen(value, { notify = () => {}, isCurrent = () => true } = {}) {
  // Open synchronously during the click activation. Clipboard work may await and
  // would otherwise lose the browser's permission to open a new tab.
  const current = () => { try { return isCurrent() === true; } catch { return false; } };
  if (!current()) return { copied: false, opened: false, cancelled: true, copy: { cancelled: true } };
  const targetUrl = chatGPTUrlForPrompt(value);
  let opened = false;
  try {
    const target = window.open(targetUrl, '_blank');
    if (target) {
      try { target.opener = null; } catch { /* Cross-origin window proxy. */ }
      opened = true;
    }
  } catch {
    opened = false;
  }

  const copy = await copyText(value, { isCurrent: current });
  if (copy.cancelled || !current()) return { copied: false, opened, cancelled: true, copy };
  if (copy.ok && opened) notify('已携带 Prompt 打开 ChatGPT，并复制作为备用。请确认输入框内容；需要参考图时在那里上传，再自行发送。');
  else if (copy.ok) notify('Prompt 已复制。浏览器拦截了新标签页，请手动打开 ChatGPT，再添加参考图并发送。');
  else if (opened) notify('已携带 Prompt 请求打开 ChatGPT，备用复制失败。若输入框未显示内容，可从本站文本框手动复制；参考图由你上传并发送。');
  else notify('复制和打开都未完成。请从页面中的文本框手动复制 Prompt，并手动打开 ChatGPT。');

  return { copied: copy.ok, opened, copy, targetUrl };
}

export const CHATGPT_URL_FOR_MANUAL_OPEN = CHATGPT_URL;
