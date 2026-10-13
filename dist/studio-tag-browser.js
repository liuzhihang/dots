import { SERIES } from './studio-content.js?v=111';
import { normalizeGalleryQuery } from './studio-tags.js?v=111';

const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

export function createGalleryFilters(container, { getQuery, onChange, getLocale } = {}) {
  if (!container || typeof getQuery !== 'function' || typeof onChange !== 'function') {
    throw new TypeError('createGalleryFilters requires a container, getQuery, and onChange.');
  }

  const locale = () => getLocale?.() === 'zh-CN' ? 'zh-CN' : 'en';
  const labels = {
    en: { all: 'All', group: 'Filter by series' },
    'zh-CN': { all: '全部', group: '按系列筛选' }
  };

  function render(focusSeriesId) {
    const language = locale();
    const query = normalizeGalleryQuery(getQuery());
    const selected = query.valid ? query.seriesId : '';
    const options = [
      { id: '', label: labels[language].all },
      ...SERIES.map(series => ({ id: series.id, label: series.labelByLanguage[language] || series.labelByLanguage.en }))
    ];
    container.innerHTML = `<div class="gallery-series-filter" role="group" aria-label="${escapeHTML(labels[language].group)}">${options.map(option =>
      `<button type="button" class="gallery-series-filter__button" data-series-id="${escapeHTML(option.id)}" aria-pressed="${selected === option.id}">${escapeHTML(option.label)}</button>`
    ).join('')}</div>`;
    if (focusSeriesId !== undefined) {
      const button = [...container.querySelectorAll('[data-series-id]')].find(item => item.dataset.seriesId === focusSeriesId);
      button?.focus({ preventScroll: true });
    }
  }

  const click = event => {
    const button = event.target.closest('[data-series-id]');
    if (!button || !container.contains(button)) return;
    const query = normalizeGalleryQuery(getQuery());
    onChange({ ...query, seriesId: button.dataset.seriesId || '' });
    render(button.dataset.seriesId || '');
  };
  container.addEventListener('click', click);
  render();

  return {
    render,
    dispose() { container.removeEventListener('click', click); }
  };
}
