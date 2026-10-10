import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { chromium } from 'file:///Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const root = path.resolve('design/acceptance/current-20261010-v99/glass-wysiwyg-20261010/visual');
const base = 'http://127.0.0.1:5182/__dots_review__/';
const viewports = [
  { width: 1440, height: 900, id: '1440x900' },
  { width: 390, height: 844, id: '390x844' },
  { width: 320, height: 700, id: '320x700' },
  { width: 768, height: 1024, id: '768x1024' }
];
const languages = ['en', 'zh-CN'];
const targets = [
  { id: 'muse-rose-flowers', version: 'v1', type: 'static', key: 'static-muse' },
  { id: 'candidate-dots-20261005', version: 'v2', type: 'edit', key: 'edit-dots' },
  { id: 'candidate-grok-20261005', version: 'v2', type: 'edit', key: 'edit-grok' }
];
const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const report = {
  date: new Date().toISOString(),
  url: base,
  browser: 'Project Playwright QA runner with installed local Chrome; Browser-specific skill/plugin was not available to this subtask.',
  cssSha256: crypto.createHash('sha256').update(fs.readFileSync('dist/studio-detail.css')).digest('hex'),
  screenshots: [],
  matrix: [],
  interactions: [],
  thumbnails: [],
  mediaPreferences: {},
  closedDialog: null,
  console: []
};

async function openTarget(context, target, language) {
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
  page.on('console', message => {
    if (message.type() === 'error' || message.type() === 'warning') errors.push(`${message.type()}: ${message.text()}`);
  });
  const url = `${base}#/artwork/${target.id}?v=${target.version}`;
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#studioOverlay[open]', { timeout: 15000 });
  await page.waitForFunction(lang => document.documentElement.lang === lang, language, { timeout: 8000 });
  if (target.type === 'edit') {
    await page.waitForSelector('.studio-editor-tabs[role="tablist"] button[role="tab"]', { timeout: 15000 });
    await page.waitForFunction(() => {
      const canvas = document.querySelector('.studio-draft-host canvas');
      return canvas?.width === 1254 && canvas?.height === 1254 && document.querySelector('.studio-editor-preview[data-stale="false"]');
    }, { timeout: 20000 });
  } else {
    await page.waitForFunction(() => {
      const image = document.querySelector('.artwork-detail__image');
      return image?.complete && image.naturalWidth > 256;
    }, { timeout: 20000 });
  }
  return { page, errors, url };
}

for (const viewport of viewports) {
  for (const language of languages) {
    for (const target of targets) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
      await context.addInitScript(lang => localStorage.setItem('dots-v99-language', lang), language);
      const { page, errors, url } = await openTarget(context, target, language);
      await page.waitForTimeout(120);
      const file = `${viewport.id}-${language}-${target.key}.png`;
      const screenshot = path.join(root, file);
      await page.screenshot({ path: screenshot, fullPage: false });
      const metrics = await page.evaluate(() => {
        const rect = element => {
          if (!element) return null;
          const r = element.getBoundingClientRect();
          return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
        };
        const overlay = document.querySelector('#studioOverlay');
        const preview = document.querySelector('.studio-preview');
        const canvas = document.querySelector('.studio-draft-host canvas');
        const image = document.querySelector('.artwork-detail__image');
        const targetPreview = canvas || image;
        const details = document.querySelector('.studio-original');
        const summary = details?.querySelector(':scope > summary');
        const tabs = [...document.querySelectorAll('.studio-editor-tab[role="tab"]')];
        const panels = [...document.querySelectorAll('.studio-editor-field[role="tabpanel"]')];
        const selectedTab = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');
        const activePanel = panels.find(panel => !panel.hidden);
        const styles = element => {
          if (!element) return null;
          const style = getComputedStyle(element);
          return { backgroundColor: style.backgroundColor, backgroundImage: style.backgroundImage, backdropFilter: style.backdropFilter };
        };
        let alpha = null;
        if (canvas) {
          const context = canvas.getContext('2d');
          alpha = { corner: context.getImageData(0, 0, 1, 1).data[3], center: context.getImageData(627, 627, 1, 1).data[3] };
        }
        return {
          title: document.querySelector('.artwork-detail__title')?.textContent,
          lang: document.documentElement.lang,
          dialogDisplay: getComputedStyle(overlay).display,
          dialogRect: rect(overlay),
          glass: styles(overlay),
          headerGlass: styles(document.querySelector('.overlay-header')),
          mediaGlass: styles(document.querySelector('.studio-media-column')),
          contentGlass: styles(document.querySelector('.studio-content')),
          previewRect: rect(preview),
          previewContentRect: rect(targetPreview),
          previewAlpha: alpha,
          originalDetails: details ? { open: details.open, summaryHidden: summary.hidden, summaryHeight: rect(summary)?.height } : null,
          tabs: tabs.map(tab => ({ field: tab.dataset.field, selected: tab.getAttribute('aria-selected'), height: rect(tab)?.height })),
          selectedTab: selectedTab?.dataset.field || null,
          activePanel: activePanel?.dataset.field || null,
          visiblePanelCount: panels.filter(panel => !panel.hidden).length,
          pendingText: document.querySelector('.studio-editor-review')?.textContent || null,
          oldModeDom: document.querySelectorAll('.studio-mode-tabs,.studio-mode').length,
          contentScroll: (() => { const e = document.querySelector('.studio-content'); return { top: e.scrollTop, height: e.scrollHeight, clientHeight: e.clientHeight, horizontalOverflow: e.scrollWidth > e.clientWidth + 1 }; })(),
          viewport: [innerWidth, innerHeight]
        };
      });
      const r = metrics.previewContentRect;
      const previewFits = r && r.x >= -1 && r.y >= -1 && r.right <= viewport.width + 1 && r.bottom <= viewport.height + 1
        && r.x >= metrics.previewRect.x - 1 && r.y >= metrics.previewRect.y - 1
        && r.right <= metrics.previewRect.right + 1 && r.bottom <= metrics.previewRect.bottom + 1;
      const item = {
        viewport: viewport.id, language, target: target.key, url, screenshot: file, metrics,
        previewFits: Boolean(previewFits), noConsoleErrors: errors.length === 0,
        detailsPass: target.type === 'static'
          ? metrics.originalDetails?.open === true && metrics.originalDetails?.summaryHidden === true
          : metrics.originalDetails?.open === false && metrics.originalDetails?.summaryHidden === false && metrics.originalDetails?.summaryHeight >= 44,
        tabsPass: target.type !== 'edit' || (metrics.tabs.length === 4 && metrics.visiblePanelCount === 1 && metrics.tabs.every(tab => tab.height >= 44)),
        transparentCanvasPass: target.type !== 'edit' || (metrics.previewAlpha.corner === 0 && metrics.previewAlpha.center > 0),
        noLegacyModeUi: metrics.oldModeDom === 0,
        noHorizontalContentOverflow: metrics.contentScroll.horizontalOverflow === false
      };
      report.matrix.push(item);
      report.screenshots.push(file);
      report.console.push(...errors.map(error => ({ target: target.key, viewport: viewport.id, language, error })));
      await context.close();
    }
  }
}

async function interaction(targetId, optionId, file) {
  const context = await browser.newContext({ viewport: { width: 320, height: 700 }, deviceScaleFactor: 1 });
  const { page, errors } = await openTarget(context, { id: targetId, version: 'v2', type: 'edit' }, 'en');
  const sample = () => page.evaluate(() => {
    const canvas = document.querySelector('.studio-draft-host canvas');
    const preview = document.querySelector('.studio-preview').getBoundingClientRect();
    const rect = canvas.getBoundingClientRect();
    const pixel = [...canvas.getContext('2d').getImageData(627, 627, 1, 1).data];
    const actions = document.querySelector('.studio-editor-actions')?.getBoundingClientRect();
    const action = document.querySelector('.studio-editor-actions [data-action="export"]')?.getBoundingClientRect();
    const options = [...document.querySelectorAll('.studio-editor-field:not([hidden]) .studio-editor-option')].map(button => {
      const r = button.getBoundingClientRect();
      return { id: button.dataset.optionId, x: r.x, y: r.y, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
    });
    const tabs = [...document.querySelectorAll('.studio-editor-tab')].map(tab => ({ field: tab.dataset.field, width: tab.getBoundingClientRect().width, right: tab.getBoundingClientRect().right }));
    return { pixel, canvas: { x: rect.x, y: rect.y, width: rect.width, height: rect.height, bottom: rect.bottom }, preview: { x: preview.x, y: preview.y, right: preview.right, bottom: preview.bottom }, actions: actions ? { y: actions.y, bottom: actions.bottom, position: getComputedStyle(document.querySelector('.studio-editor-actions')).position } : null, options, export: action ? { y: action.y, bottom: action.bottom, height: action.height } : null, tabs, scrollTop: document.querySelector('.studio-content').scrollTop };
  });
  const before = await sample();
  await page.locator('.studio-editor-tab[data-field="eyes"]').click();
  const pixelAfterTab = (await sample()).pixel;
  await page.locator('.studio-editor-tab[data-field="color"]').click();
  await page.locator(`.studio-editor-option[data-field="color"][data-option-id="${optionId}"]`).click();
  await page.waitForFunction(id => document.querySelector(`.studio-editor-option[data-field="color"][data-option-id="${id}"]`)?.getAttribute('aria-pressed') === 'true'
    && document.querySelector('.studio-editor-preview[data-stale="false"]'), optionId, { timeout: 10000 });
  await page.screenshot({ path: path.join(root, file), fullPage: false });
  const after = await sample();
  await page.locator('.studio-editor-actions [data-action="export"]').scrollIntoViewIfNeeded();
  const exportScrolled = await page.evaluate(() => {
    const action = document.querySelector('.studio-editor-actions [data-action="export"]');
    const canvas = document.querySelector('.studio-draft-host canvas');
    const preview = document.querySelector('.studio-preview');
    const ar = action.getBoundingClientRect(), cr = canvas.getBoundingClientRect(), pr = preview.getBoundingClientRect();
    return {
      scrollTop: document.querySelector('.studio-content').scrollTop,
      export: { y: ar.y, bottom: ar.bottom, height: ar.height },
      exportVisible: ar.top >= 0 && ar.bottom <= innerHeight && ar.height >= 44,
      canvasStillContained: cr.x >= pr.x - 1 && cr.y >= pr.y - 1 && cr.right <= pr.right + 1 && cr.bottom <= pr.bottom + 1,
      canvasStillVisible: cr.y >= 0 && cr.bottom <= innerHeight
    };
  });
  const result = {
    targetId, viewport: [320, 700], optionId, before, pixelAfterTab, after,
    tabDidNotRender: JSON.stringify(before.pixel) === JSON.stringify(pixelAfterTab),
    optionChangedCanvas: JSON.stringify(before.pixel) !== JSON.stringify(after.pixel),
    canvasContainedAndVisible: after.canvas.x >= after.preview.x - 1 && after.canvas.y >= after.preview.y - 1
      && after.canvas.x + after.canvas.width <= after.preview.right + 1 && after.canvas.bottom <= after.preview.bottom + 1
      && after.canvas.y >= 0 && after.canvas.bottom <= 700,
    tabsAllVisible: after.tabs.every(tab => tab.width > 0 && tab.right <= 320),
    optionsVisibleAndUnobstructed: after.options.length > 0 && after.options.every(option => option.y >= 0 && option.bottom <= 700)
      && after.actions?.position === 'static' && after.actions.y >= Math.max(...after.options.map(option => option.bottom)) - 1,
    exportScrolled,
    exportReachable: exportScrolled.exportVisible && exportScrolled.scrollTop > 0 && exportScrolled.canvasStillContained && exportScrolled.canvasStillVisible,
    screenshot: file,
    noConsoleErrors: errors.length === 0
  };
  report.interactions.push(result);
  report.screenshots.push(file);
  report.console.push(...errors.map(error => ({ target: targetId, viewport: '320x700', language: 'en', error })));
  await context.close();
}
await interaction('candidate-dots-20261005', 'warm-yellow', 'interaction-320x700-dots-warm-yellow.png');
await interaction('candidate-grok-20261005', 'mint', 'interaction-320x700-grok-mint.png');

async function accessoryThumbs(targetId, file) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const { page, errors } = await openTarget(context, { id: targetId, version: 'v2', type: 'edit' }, 'en');
  await page.locator('.studio-editor-tab[data-field="accessory"]').click();
  await page.waitForFunction(() => {
    const panel = [...document.querySelectorAll('.studio-editor-field[role="tabpanel"]')].find(item => !item.hidden);
    return panel?.dataset.field === 'accessory'
      && panel.querySelector('canvas.studio-editor-option-thumbnail')
      && [...panel.querySelectorAll('canvas.studio-editor-option-thumbnail')].every(canvas => canvas.width > 0 && canvas.height > 0);
  }, { timeout: 15000 });
  const thumbs = await page.evaluate(() => [...document.querySelectorAll('.studio-editor-field[role="tabpanel"]:not([hidden]) canvas.studio-editor-option-thumbnail')].map(canvas => {
    const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
    let alphaPixels = 0; for (let i = 3; i < pixels.length; i += 4) if (pixels[i]) alphaPixels++;
    return { width: canvas.width, height: canvas.height, alphaPixels, assetIds: canvas.dataset.assetIds || '' };
  }));
  await page.screenshot({ path: path.join(root, file), fullPage: false });
  const result = { targetId, screenshot: file, thumbnails: thumbs, allRealAlpha: thumbs.length > 0 && thumbs.every(item => item.alphaPixels > 0), noConsoleErrors: errors.length === 0 };
  report.thumbnails.push(result); report.screenshots.push(file);
  report.console.push(...errors.map(error => ({ target: targetId, viewport: '1440x900', language: 'en', error })));
  await context.close();
}
await accessoryThumbs('candidate-dots-20261005', 'accessory-1440-dots-headphones-tab.png');
await accessoryThumbs('candidate-grok-20261005', 'accessory-1440-grok-cap-tab.png');

async function preferenceChecks() {
  const context = await browser.newContext({ viewport: { width: 320, height: 700 }, deviceScaleFactor: 1 });
  const { page, errors } = await openTarget(context, { id: 'candidate-dots-20261005', version: 'v2', type: 'edit' }, 'en');
  const defaultStyle = await page.evaluate(() => ({
    support: CSS.supports('backdrop-filter', 'blur(1px)'),
    overlay: getComputedStyle(document.querySelector('#studioOverlay')).backdropFilter,
    tabs: getComputedStyle(document.querySelector('.studio-editor-tabs')).backdropFilter,
    actions: getComputedStyle(document.querySelector('.studio-editor-actions')).backdropFilter
  }));
  const cdp = await context.newCDPSession(page);
  let reducedTransparency;
  try {
    await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-transparency', value: 'reduce' }] });
    await page.waitForFunction(() => matchMedia('(prefers-reduced-transparency: reduce)').matches, { timeout: 3000 });
    reducedTransparency = await page.evaluate(() => ({
      matches: matchMedia('(prefers-reduced-transparency: reduce)').matches,
      overlay: getComputedStyle(document.querySelector('#studioOverlay')).backdropFilter,
      tabs: getComputedStyle(document.querySelector('.studio-editor-tabs')).backdropFilter,
      actions: getComputedStyle(document.querySelector('.studio-editor-actions')).backdropFilter,
      tabBackground: getComputedStyle(document.querySelector('.studio-editor-tabs')).backgroundColor,
      actionBackground: getComputedStyle(document.querySelector('.studio-editor-actions')).backgroundColor
    }));
    await page.screenshot({ path: path.join(root, 'fallback-reduced-transparency-320.png'), fullPage: false });
    report.screenshots.push('fallback-reduced-transparency-320.png');
  } catch (error) { reducedTransparency = { unsupported: error.message }; }
  await cdp.detach();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const reducedMotion = await page.evaluate(() => ({
    matches: matchMedia('(prefers-reduced-motion: reduce)').matches,
    tabTransition: getComputedStyle(document.querySelector('.studio-editor-tab')).transitionDuration,
    optionTransition: getComputedStyle(document.querySelector('.studio-editor-option')).transitionDuration,
    optionTransitionProperty: getComputedStyle(document.querySelector('.studio-editor-option')).transitionProperty,
    summaryTransition: getComputedStyle(document.querySelector('.studio-original>summary') || document.querySelector('.studio-prompt>summary')).transitionDuration
  }));
  await page.addStyleTag({ content: `
    #studioOverlay[open]{background:#1f2431!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}
    #studioOverlay[open]::backdrop{background:rgba(10,13,20,.58)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}
    .overlay-header{background:#2a3040!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}
    .studio-media-column{background:linear-gradient(145deg,rgba(255,255,255,.04),transparent 55%),#242a38!important}
    .studio-content{background:rgba(35,41,55,.96)!important}
    .studio-editor-tabs,#studioOverlay[open] .studio-editor-actions{background:#242a38!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}
    .preview-label{background:#242a38!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}
  ` });
  const noBlur = await page.evaluate(() => ({
    simulatedUnsupported: true,
    overlay: getComputedStyle(document.querySelector('#studioOverlay')).backdropFilter,
    tabs: getComputedStyle(document.querySelector('.studio-editor-tabs')).backdropFilter,
    actions: getComputedStyle(document.querySelector('.studio-editor-actions')).backdropFilter,
    overlayBackground: getComputedStyle(document.querySelector('#studioOverlay')).backgroundColor,
    overlayOpaqueSolid: getComputedStyle(document.querySelector('#studioOverlay')).backgroundColor === 'rgb(31, 36, 49)'
  }));
  await page.screenshot({ path: path.join(root, 'fallback-no-blur-simulated-320.png'), fullPage: false });
  report.screenshots.push('fallback-no-blur-simulated-320.png');
  report.mediaPreferences = { defaultStyle, reducedTransparency, reducedMotion, noBlur };
  report.console.push(...errors.map(error => ({ target: 'candidate-dots-20261005', viewport: '320x700', language: 'en', error })));
  await context.close();
}
await preferenceChecks();

async function closeCheck() {
  const context = await browser.newContext({ viewport: { width: 320, height: 700 } });
  const { page } = await openTarget(context, { id: 'candidate-dots-20261005', version: 'v2', type: 'edit' }, 'en');
  await page.locator('#overlayClose').click();
  await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  report.closedDialog = await page.evaluate(() => {
    const dialog = document.querySelector('#studioOverlay');
    const r = dialog.getBoundingClientRect();
    return { open: dialog.open, display: getComputedStyle(dialog).display, rect: [r.x, r.y, r.width, r.height] };
  });
  await context.close();
}
await closeCheck();

report.summary = {
  matrixItems: report.matrix.length,
  matrixPass: report.matrix.every(item => item.previewFits && item.noConsoleErrors && item.detailsPass && item.tabsPass && item.transparentCanvasPass && item.noLegacyModeUi && item.noHorizontalContentOverflow),
  interactionPass: report.interactions.every(item => item.tabDidNotRender && item.optionChangedCanvas && item.canvasContainedAndVisible && item.tabsAllVisible && item.optionsVisibleAndUnobstructed && item.exportReachable && item.noConsoleErrors),
  thumbnailPass: report.thumbnails.every(item => item.allRealAlpha && item.noConsoleErrors),
  reducedTransparencyPass: report.mediaPreferences.reducedTransparency?.matches === true
    && [report.mediaPreferences.reducedTransparency.overlay, report.mediaPreferences.reducedTransparency.tabs, report.mediaPreferences.reducedTransparency.actions].every(value => value === 'none'),
  reducedMotionPass: report.mediaPreferences.reducedMotion?.matches === true
    && report.mediaPreferences.reducedMotion.tabTransition === '0s'
    && report.mediaPreferences.reducedMotion.optionTransition === '0s'
    && report.mediaPreferences.reducedMotion.optionTransitionProperty === 'none',
  noBlurSimulationPass: report.mediaPreferences.noBlur?.simulatedUnsupported === true
    && [report.mediaPreferences.noBlur.overlay, report.mediaPreferences.noBlur.tabs, report.mediaPreferences.noBlur.actions].every(value => value === 'none')
    && report.mediaPreferences.noBlur.overlayOpaqueSolid === true,
  closedDialogPass: report.closedDialog?.open === false && report.closedDialog?.display === 'none'
    && report.closedDialog.rect[2] === 0 && report.closedDialog.rect[3] === 0,
  consoleErrors: report.console.length
};
fs.writeFileSync(path.join(root, 'report.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report.summary, null, 2));
if (!report.summary.matrixPass || !report.summary.interactionPass || !report.summary.thumbnailPass || !report.summary.reducedTransparencyPass || !report.summary.reducedMotionPass || !report.summary.noBlurSimulationPass || !report.summary.closedDialogPass || report.summary.consoleErrors) process.exitCode = 1;
await browser.close();
