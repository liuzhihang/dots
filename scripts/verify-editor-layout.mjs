import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { launchBrowser } from './browser-runtime.mjs';
import { resolveEvidenceDirectory } from './evidence-paths.mjs';
import { ARTWORKS } from '../dist/studio-artwork-catalog.js?v=100';
import { TEMPLATE_REGISTRY, getTemplateForArtwork, getTemplateOptionFields } from '../dist/studio-edit-templates.js?v=100';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = resolveEvidenceDirectory('.artifacts/editor-layout');
const harnessRoot = path.join(repoRoot, 'scripts/fixtures/editor');
await fs.mkdir(output, { recursive: true });

const server = await createServer({
  configFile: path.join(repoRoot, 'vite.config.mjs'),
  server: { host: '127.0.0.1', port: 0, strictPort: true, hmr: false },
  plugins: [{
    name: 'dots-editor-layout-harness',
    configureServer(vite) {
      vite.middlewares.use('/__dots_editor_harness__', async (request, response, next) => {
        if (request.method !== 'GET') return next();
        try {
          const pathname = new URL(request.url || '/', 'http://localhost').pathname;
          const script = pathname.endsWith('.js');
          const source = await fs.readFile(path.join(harnessRoot, script ? 'harness.js' : 'harness.html'));
          response.statusCode = 200;
          response.setHeader('Cache-Control', 'no-store');
          response.setHeader('Content-Type', script ? 'text/javascript; charset=utf-8' : 'text/html; charset=utf-8');
          response.end(source);
        } catch (error) { next(error); }
      });
    }
  }]
});
await server.listen();
const origin = `http://127.0.0.1:${server.httpServer.address().port}`;
const browser = await launchBrowser({ headless: true });
const errors = [];
const captures = [];
const rows = [];
const sizes = [[1440, 900], [1206, 1257], [768, 1024], [390, 844], [320, 700]];
const templateCases = TEMPLATE_REGISTRY.map(template => {
  const artwork = ARTWORKS.find(item => item.id === template.artworkBinding.artworkId
    && item.version === template.artworkBinding.artworkVersion);
  assert(artwork, `${template.id} has an exact Artwork binding.`);
  assert.equal(getTemplateForArtwork(artwork)?.id, template.id,
    `${template.id} is available through the public eligibility path.`);
  const fields = getTemplateOptionFields(template);
  return { series: template.id, seriesId: artwork.seriesId, id: artwork.id, templateId: template.id, fields, tabs: template.schemaVersion === 2 ? fields.map(field => field.key) : ['colors', 'face', 'accessories'], colorField: template.schemaVersion === 2 ? 'colors' : 'color', faceField: template.schemaVersion === 2 ? 'face' : 'eyes' };
});
assert.equal(templateCases.length, ARTWORKS.filter(item => getTemplateForArtwork(item)).length, 'Every publicly editable Artwork is checked through public access.');
assert(templateCases.length > 0);

async function openArtwork(page, id) {
  await page.evaluate(async artworkId => {
    const { getArtwork } = await import('/studio-artwork-catalog.js?v=100');
    const artwork = getArtwork(artworkId);
    if (!artwork) throw new Error(`Artwork is unavailable: ${artworkId}`);
    window.__dotsQAApp.openArtwork(artwork.id, artwork.version);
  }, id);
  await page.waitForFunction(id => document.querySelector('.character-studio')?.dataset.artworkId === id
    && document.querySelector('#studioOverlay')?.open, id, { timeout: 20_000 });
  try { await page.waitForFunction(() => {
    const state = window.__dotsQAApp.detail.getState();
    const canvas = document.querySelector('.studio-draft-host canvas.studio-editor-canvas');
    return state.editable && state.editorReady && state.promptReady && state.exportReady && state.draft
      && canvas && Number(canvas.dataset.renderRevision) === state.draft.revision;
  }, null, { timeout: 30_000 }); } catch (error) {
    console.error('Editable detail state at timeout:', JSON.stringify(await page.evaluate(() => ({
      state: window.__dotsQAApp?.detail?.getState(), hash: location.hash, bodyScreen: document.body.dataset.screen,
      overlayOpen: document.querySelector('#studioOverlay')?.open, studio: document.querySelector('.character-studio')?.dataset,
      status: [...document.querySelectorAll('.studio-editor-status,.studio-editor-controls [role=status]')].map(item => item.textContent),
      retry: [...document.querySelectorAll('.studio-editor-controls [data-action="retry"]')].map(item => ({ hidden: item.hidden, disabled: item.disabled })),
      canvas: [...document.querySelectorAll('.studio-draft-host canvas')].map(item => ({ revision: item.dataset.renderRevision, recipe: item.dataset.recipeKey }))
    })), null, 2));
    throw error;
  }
  await page.waitForFunction(() => {
    const buttons = [...document.querySelectorAll('.studio-editor-option[data-field][data-option-id]')].filter(button => !['color', 'colors'].includes(button.dataset.field));
    return buttons.length > 0 && buttons.every(button => {
      const visual = button.querySelector('.studio-editor-option-visual');
      return button.dataset.optionId === 'none' ? visual?.dataset.thumbnailState === 'empty'
        : visual?.dataset.thumbnailState === 'ready' && visual.querySelector('canvas');
    });
  }, null, { timeout: 30_000 });
}

async function assertHomeHero(page, language) {
  const expected = language === 'en' ? ['Make It', 'Your Dot.'] : ['创造', '你的Dot.'];
  assert.deepEqual(await page.locator('#galleryTitle [data-home-copy]').allTextContents(), expected,
    'The two localized hero lines match the approved Dots direction.');
  assert.equal(await page.locator('#heroCopy,#heroCopyFallback').count(), 0, 'The retired generic Prompt CTA and fallback do not return to the home page.');
  assert.equal(await page.locator('.gallery-intro-copy .intro-actions > *').count(), 1, 'Browse is the sole hero action.');
  assert.equal((await page.locator('#browseCharacters').innerText()).trim(), language === 'en' ? 'Browse characters' : '浏览角色');
  assert((await page.locator('.intro-description').innerText()).trim().length <= 120, 'The hero description remains short.');
  const art = page.locator('.gallery-intro-art[aria-hidden="true"]');
  assert.equal(await art.count(), 1, 'The hero uses one decorative banner region.');
  assert.equal(await art.locator('img').count(), 1, 'The banner is a single decorative image, not the retired three-poster composition.');
  await page.waitForFunction(() => {
    const image = document.querySelector('.gallery-intro-art img');
    return Boolean(image && image.complete && image.naturalWidth > 0);
  }, null, { timeout: 20_000 });
}

async function assertActionGeometry(page, name) {
  const actions = page.locator('.studio-actions');
  assert.equal(await actions.locator('[data-action="copy-prompt"]').count(), 1);
  assert.equal(await actions.locator('[data-action="open-chatgpt"]').count(), 1);
  assert.equal(await actions.locator('[data-action="export"]').count(), 1);
  const geometry = await actions.evaluate(container => {
    const rect = element => {
      const box = element.getBoundingClientRect();
      return { x: box.x, y: box.y, left: box.left, right: box.right, top: box.top, bottom: box.bottom, width: box.width, height: box.height };
    };
    return {
      container: rect(container),
      copy: rect(container.querySelector('[data-action="copy-prompt"]')),
      chat: rect(container.querySelector('[data-action="open-chatgpt"]')),
      export: rect(container.querySelector('[data-action="export"]')),
      labels: [...container.querySelectorAll('button')].map(button => getComputedStyle(button).textAlign)
    };
  });
  assert(geometry.copy.height >= 44 && geometry.chat.height >= 44 && geometry.export.height >= 44, `${name}: all three main actions have 44px targets: ${JSON.stringify(geometry)}`);
  assert(Math.abs(geometry.copy.top - geometry.chat.top) <= 1 && Math.abs(geometry.copy.bottom - geometry.chat.bottom) <= 1
    && Math.abs(geometry.copy.top - geometry.export.top) <= 1, `${name}: Copy, ChatGPT, and compact Export align on one row.`);
  assert(Math.abs(geometry.copy.left - geometry.container.left) <= 1 && Math.abs(geometry.export.right - geometry.container.right) <= 1
    && geometry.chat.left > geometry.copy.right - 1 && geometry.export.left > geometry.chat.right - 1, `${name}: the primary actions lead and Export sits at the trailing edge.`);
  assert(geometry.copy.width > geometry.export.width && geometry.chat.width > geometry.export.width, `${name}: Export is more compact than either primary prompt action.`);
  assert(geometry.labels.every(value => value === 'center'), `${name}: action labels are centered.`);
  for (const action of ['copy-prompt', 'open-chatgpt', 'export']) {
    const button = actions.locator(`[data-action="${action}"]`);
    await button.scrollIntoViewIfNeeded();
    const hits = await button.evaluate(element => {
      const box = element.getBoundingClientRect();
      const points = [[box.left + 8, box.top + 8], [box.right - 8, box.top + 8], [box.left + 8, box.bottom - 8], [box.right - 8, box.bottom - 8], [box.left + box.width / 2, box.top + box.height / 2]];
      const header = document.querySelector('.overlay-header')?.getBoundingClientRect();
      return {
        points: points.map(([x, y]) => { const hit = document.elementFromPoint(x, y); return hit === element || element.contains(hit); }),
        headerOverlap: Boolean(header && box.top < header.bottom - 1 && box.bottom > header.top)
      };
    });
    assert(hits.points.every(Boolean), `${name}: ${action} receives pointer hits at center and inset corners.`);
    assert.equal(hits.headerOverlap, false, `${name}: ${action} is not obscured by the dialog header.`);
  }
  return geometry;
}

try {
  for (const language of ['en', 'zh-CN']) {
    for (const templateCase of templateCases) {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
      await context.addInitScript(value => localStorage.setItem('dots-v99-language', value), language);
      const page = await context.newPage();
      page.setDefaultTimeout(12_000);
      page.on('pageerror', error => errors.push({ language, series: templateCase.series, message: error.message }));
      await page.goto(`${origin}/__dots_editor_harness__/?fixture=${templateCase.series}`, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => Boolean(window.__dotsQAApp));
      assert.equal(await page.locator('html').getAttribute('lang'), language);
      assert.equal(await page.locator('#galleryTitle').count(), 1);
      await assertHomeHero(page, language);
      assert.equal(await page.locator('.studio-nav a').count(), 1);
      assert.equal(await page.locator('.studio-nav a[data-page="guide"],#guidePortal,#detailLanguage').count(), 0);

      await openArtwork(page, templateCase.id);
      assert.equal(await page.locator('.studio-editor-controls[data-template-id]').getAttribute('data-review-only'), 'false',
        'The active editor is publicly eligible and not marked review-only.');
      assert.equal(await page.locator('.studio-original>summary').isVisible(), true);
      assert.equal(await page.locator('.studio-original').evaluate(details => details.open), false);
      const disclosureChevron = await page.locator('.studio-original>summary').evaluate(summary => {
        const box = summary.getBoundingClientRect(), style = getComputedStyle(summary, '::after');
        return { height: box.height, content: style.content, display: style.display, width: Number.parseFloat(style.width), heightAfter: Number.parseFloat(style.height), marginLeft: Number.parseFloat(style.marginLeft), marginRight: Number.parseFloat(style.marginRight), borderRightWidth: Number.parseFloat(style.borderRightWidth), borderBottomWidth: Number.parseFloat(style.borderBottomWidth), transform: style.transform };
      });
      assert(disclosureChevron.height >= 44, 'The original-material disclosure keeps a 44px hit area.');
      assert(disclosureChevron.content !== 'none' && disclosureChevron.display !== 'none' && disclosureChevron.width > 0 && disclosureChevron.heightAfter > 0
        && disclosureChevron.marginLeft > 0 && disclosureChevron.marginRight >= 0 && disclosureChevron.borderRightWidth > 0 && disclosureChevron.borderBottomWidth > 0 && disclosureChevron.transform !== 'none',
      `The CSS chevron remains visible, outlined, and pushed to the summary's trailing edge: ${JSON.stringify(disclosureChevron)}`);
      const originalSummary = page.locator('.studio-original>summary');
      const trailingHit = await originalSummary.evaluate(element => ({ x: element.getBoundingClientRect().width - 16, y: element.getBoundingClientRect().height / 2 }));
      await originalSummary.click({ position: trailingHit });
      assert.equal(await page.locator('.studio-original').evaluate(details => details.open), true, 'The trailing chevron hit area opens the original-material disclosure.');
      await originalSummary.click({ position: trailingHit });
      assert.equal(await page.locator('.studio-original').evaluate(details => details.open), false, 'The same chevron hit area closes the original-material disclosure.');
      assert.equal(await page.locator('.studio-editor-tabs[role="tablist"]').count(), 1);
      assert.equal(await page.locator('.studio-editor-tab[role="tab"]').count(), templateCase.tabs.length);
      assert.equal(await page.locator('.studio-editor-category[role="tabpanel"]').count(), templateCase.tabs.length);
      assert.equal(await page.locator('.studio-editor-tab[data-editor-tab="clothing"]').count(), Number(templateCase.tabs.includes('clothing')), 'Clothing appears only when declared by this exact Template.');
      assert.equal(await page.locator('.studio-editor-options select').count(), 0, 'Visual editing uses option buttons, never text dropdowns.');
      assert.equal(await page.locator('.studio-editor-controls button[data-action="export"],.studio-editor-controls button[data-action="reset"],.studio-editor-controls button[data-action="cancel"]').count(), 0);
      assert.equal(await page.locator('.studio-actions [data-action="copy-prompt"],.studio-actions [data-action="open-chatgpt"],.studio-actions [data-action="export"]').count(), 3);
      assert.deepEqual(await page.locator('.studio-editor-tab[role="tab"]').allTextContents(), language === 'en'
        ? templateCase.tabs.map(key => ({ appearance: 'Appearance', colors: 'Colors', face: 'Face', clothing: 'Clothing', accessories: 'Accessories' })[key])
        : templateCase.tabs.map(key => ({ appearance: '外观', colors: '配色', face: '五官', clothing: '服装', accessories: '配饰' })[key]), 'Only supported localized tabs are shown; option field IDs stay stable inside their capability-driven group.');
      assert.deepEqual(await page.locator('.studio-actions button').allTextContents(), language === 'en'
        ? ['Copy Prompt', 'Use in ChatGPT', 'Export PNG']
        : ['复制 Prompt', '在 ChatGPT 中使用', '导出 PNG']);
      assert.equal(await page.locator('.studio-prompt-actions textarea.artwork-detail__additional-direction').count(), 1);
      assert.equal(await page.locator('.studio-remix,.remix-facts,.remix-fact').count(), 0);
      assert.equal(await page.locator('.studio-related').evaluate(section => section.tagName === 'SECTION' && section.parentElement.classList.contains('studio-media-column')), true);
      assert.equal(await page.locator('.studio-editor-fixed-shape:visible').count(), 0, 'The fixed Shape value does not add redundant editor copy.');

      const tabs = page.locator('.studio-editor-tab[role="tab"]');
      const panels = page.locator('.studio-editor-category[role="tabpanel"]');
      const tabsState = await page.evaluate(() => {
        const tabs = [...document.querySelectorAll('.studio-editor-tab[role="tab"]')];
        const panels = [...document.querySelectorAll('.studio-editor-category[role="tabpanel"]')];
        const selected = tabs.filter(tab => tab.getAttribute('aria-selected') === 'true');
        const visible = panels.filter(panel => !panel.hidden && panel.getClientRects().length > 0);
        return {
          selected: selected.map(tab => tab.dataset.editorTab),
          visible: visible.map(panel => panel.dataset.editorTab),
          everyPanelHasOptions: panels.every(panel => panel.querySelectorAll('button.studio-editor-option[data-field][data-option-id]').length > 0),
          linked: tabs.every(tab => tab.getAttribute('aria-controls') === panels.find(panel => panel.dataset.editorTab === tab.dataset.editorTab)?.id
            && panels.find(panel => panel.dataset.editorTab === tab.dataset.editorTab)?.getAttribute('aria-labelledby') === tab.id),
          roving: tabs.filter(tab => tab.tabIndex === 0).map(tab => tab.dataset.editorTab)
        };
      });
      assert.deepEqual(tabsState.selected, [templateCase.tabs[0]]);
      assert.deepEqual(tabsState.visible, [templateCase.tabs[0]]);
      assert.equal(tabsState.everyPanelHasOptions, true, 'Each capability-driven tab contains actual registered choices.');
      assert.equal(tabsState.linked, true);
      assert.deepEqual(tabsState.roving, [templateCase.tabs[0]]);
      const beforeTabs = await page.evaluate(() => { const state = window.__dotsQAApp.detail.getState(); return { sessionId: state.draft.sessionId, revision: state.draft.revision, canvas: document.querySelector('.studio-draft-host canvas.studio-editor-canvas').toDataURL() }; });
      await tabs.nth(0).focus();
      for (const [key, expected] of [['ArrowRight', templateCase.tabs[1]], ['Home', templateCase.tabs[0]], ['End', templateCase.tabs.at(-1)], ['ArrowRight', templateCase.tabs[0]], ['ArrowLeft', templateCase.tabs.at(-1)], ['ArrowRight', templateCase.tabs[0]]]) {
        await page.keyboard.press(key);
        await page.waitForFunction(expected => document.querySelector(`.studio-editor-tab[data-editor-tab="${expected}"]`)?.getAttribute('aria-selected') === 'true', expected);
      }
      await page.locator('.studio-editor-tab[data-editor-tab="face"]').focus();
      await page.keyboard.press('Space');
      await page.waitForFunction(() => document.querySelector('.studio-editor-tab[data-editor-tab="face"]')?.getAttribute('aria-selected') === 'true');
      await tabs.nth(0).focus();
      await page.keyboard.press('Enter');
      await page.waitForFunction(expected => document.querySelector(`.studio-editor-tab[data-editor-tab="${expected}"]`)?.getAttribute('aria-selected') === 'true', templateCase.tabs[0]);
      const afterTabs = await page.evaluate(() => { const state = window.__dotsQAApp.detail.getState(); return { sessionId: state.draft.sessionId, revision: state.draft.revision, canvas: document.querySelector('.studio-draft-host canvas.studio-editor-canvas').toDataURL() }; });
      assert.deepEqual(afterTabs, beforeTabs, 'Tab keyboard navigation changes no Draft, revision, session, or preview pixels.');
      assert.equal(await panels.evaluateAll(items => items.filter(panel => !panel.hidden && panel.getClientRects().length).length), 1);

      const visualSummary = await page.evaluate(() => {
        const optionButtons = [...document.querySelectorAll('.studio-editor-option[data-field][data-option-id]')];
        const colors = optionButtons.filter(button => ['color', 'colors'].includes(button.dataset.field));
        const layers = optionButtons.filter(button => !['color', 'colors'].includes(button.dataset.field) && button.dataset.optionId !== 'none');
        const none = optionButtons.filter(button => button.dataset.optionId === 'none');
        const thumbnails = layers.map(button => {
          const visual = button.querySelector('.studio-editor-option-visual');
          const canvas = visual?.querySelector('canvas');
          let alphaPixels = 0;
          if (canvas?.width && canvas?.height) {
            const pixels = canvas.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, canvas.width, canvas.height).data;
            for (let index = 3; index < pixels.length; index += 4) if (pixels[index]) alphaPixels++;
          }
          let transparentPixels = 0;
          if (canvas?.width && canvas?.height) {
            const pixels = canvas.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, canvas.width, canvas.height).data;
            for (let index = 3; index < pixels.length; index += 4) if (pixels[index] === 0) transparentPixels++;
          }
          const style = visual && getComputedStyle(visual);
          return { field: button.dataset.field, state: visual?.dataset.thumbnailState, canvas: Boolean(canvas), width: canvas?.width || 0, height: canvas?.height || 0, alphaPixels, transparentPixels, assetIds: visual?.dataset.assetIds || '', backgroundImage: style?.backgroundImage || '', backgroundColor: style?.backgroundColor || '' };
        });
        return {
          colorCount: colors.length,
          colorsHaveRealSwatches: colors.every(button => button.querySelector('.studio-editor-color-swatch')?.style.getPropertyValue('--option-color')),
          colorsHaveText: colors.every(button => button.querySelector('.studio-editor-option-label')?.textContent.trim()),
          layers,
          thumbnails,
          noneCount: none.length,
          noneHasText: none.every(button => button.querySelector('.studio-editor-option-label')?.textContent.trim()),
          selectedCount: optionButtons.filter(button => button.getAttribute('aria-pressed') === 'true').length
        };
      });
      assert.equal(visualSummary.colorCount, templateCase.fields.find(field => field.key === templateCase.colorField).options.length);
      assert.equal(visualSummary.colorsHaveRealSwatches, true);
      assert.equal(visualSummary.colorsHaveText, true);
      assert(visualSummary.thumbnails.length > 0);
      assert(visualSummary.thumbnails.every(item => item.state === 'ready' && item.canvas && item.width > 0 && item.height > 0
        && item.alphaPixels > 0 && item.transparentPixels > 0 && item.assetIds && item.backgroundImage === 'none'
        && (/rgba\([^)]*,\s*0\s*\)/.test(item.backgroundColor) || item.backgroundColor === 'transparent')),
      `Real layer thumbnails retain transparent pixels and have no checker/gray surface: ${JSON.stringify(visualSummary.thumbnails)}`);
      assert.equal(visualSummary.noneCount, templateCase.fields.reduce((count, field) => count + field.options.filter(option => option.id === 'none').length, 0));
      assert(visualSummary.noneHasText);
      assert.equal(visualSummary.selectedCount, templateCase.fields.length, 'Each option group has exactly one selected value, including the hidden tabs.');

      for (const [width, height] of sizes) {
        await page.setViewportSize({ width, height });
        await page.locator('#overlayBody').evaluate(element => { element.scrollTop = 0; });
        const previewFile = path.join(output, `${language}-${templateCase.series}-${width}x${height}-preview.png`);
        await page.screenshot({ path: previewFile, fullPage: false });
        captures.push(previewFile);
        const opened = await page.evaluate(() => {
          const dialog = document.querySelector('#studioOverlay');
          const header = document.querySelector('.overlay-header');
          const preview = document.querySelector('.studio-preview').getBoundingClientRect();
          const canvas = document.querySelector('.studio-draft-host canvas.studio-editor-canvas').getBoundingClientRect();
          return {
            dialogOpen: dialog.open,
            titleVisible: Boolean(document.querySelector('.artwork-detail__title')?.getClientRects().length),
            headerPosition: getComputedStyle(header).position,
            headerHeight: header.getBoundingClientRect().height,
            headerBorderBottomWidth: getComputedStyle(header).borderBottomWidth,
            headerBottom: header.getBoundingClientRect().bottom,
            preview: { left: preview.left, right: preview.right, top: preview.top, bottom: preview.bottom },
            canvas: { left: canvas.left, right: canvas.right, top: canvas.top, bottom: canvas.bottom },
            objectFit: getComputedStyle(document.querySelector('.studio-draft-host canvas.studio-editor-canvas')).objectFit,
            bodyScrollTop: document.querySelector('#overlayBody').scrollTop,
            viewport: { width: innerWidth, height: innerHeight },
            overflow: document.documentElement.scrollWidth > innerWidth
          };
        });
        assert.equal(opened.dialogOpen, true);
        assert.equal(opened.titleVisible, true);
        assert.notEqual(opened.headerPosition, 'sticky', 'The dialog header remains in normal flow while the body scrolls independently.');
        assert(opened.headerHeight >= 44 && opened.headerHeight <= 56, `${width}×${height}: the detail header stays thin and close to 44px: ${JSON.stringify(opened)}`);
        assert.equal(opened.headerBorderBottomWidth, '0px', 'The detail header has no divider line.');
        assert.equal(opened.overflow, false, `${width}×${height} has no horizontal document overflow.`);
        assert(opened.canvas.left >= opened.preview.left - 1 && opened.canvas.right <= opened.preview.right + 1 && opened.canvas.top >= opened.preview.top - 1 && opened.canvas.bottom <= opened.preview.bottom + 1, `${width}×${height}: the full transparent preview canvas is inside its media bounds: ${JSON.stringify(opened)}`);
        assert.equal(opened.objectFit, 'contain');
        if (width <= 390) {
          assert(opened.preview.top >= opened.headerBottom - 1, 'The header never covers the character preview.');
          assert(opened.preview.bottom <= height + 1, `${width}×${height}: the complete character remains visible at the initial scroll position.`);
        }
        const actions = await assertActionGeometry(page, `${language}/${templateCase.series}/${width}`);
        const relatedGeometry = await page.locator('.studio-related').evaluate(section => {
          const list = section.querySelector('.related-items');
          const listRect = list.getBoundingClientRect();
          return { visible: getComputedStyle(section).display !== 'none' && section.getClientRects().length > 0,
            justify: getComputedStyle(list).justifyContent,
            listLeft: listRect.left,
            cards: [...section.querySelectorAll('.related-character')].map(card => { const r = card.getBoundingClientRect(); return { left: r.left, right: r.right, width: r.width }; }) };
        });
        if (relatedGeometry.visible) {
          assert(relatedGeometry.cards.length > 0, `${width}×${height}: visible related content has cards.`);
          assert.equal(relatedGeometry.justify, 'flex-start', `${width}×${height}: related cards align left.`);
          assert(relatedGeometry.cards.every(card => card.width >= 96 && card.width <= 112), `${width}×${height}: related cards use fixed widths: ${JSON.stringify(relatedGeometry)}`);
          assert(Math.abs(relatedGeometry.cards[0].left - relatedGeometry.listLeft) <= 1, `${width}×${height}: first related card starts at the list left edge: ${JSON.stringify(relatedGeometry)}`);
        }
        if (width <= 390) {
          await page.locator('.studio-editor-tab[data-editor-tab="face"]').click();
          const eyeOption = page.locator(`.studio-editor-option[data-field="${templateCase.faceField}"][data-option-id]:not([disabled])`).first();
          await eyeOption.scrollIntoViewIfNeeded();
          const eyeHit = await eyeOption.evaluate(element => { const r = element.getBoundingClientRect(); const x = r.left + r.width / 2, y = r.top + r.height / 2, hit = document.elementFromPoint(x, y); return { hit: hit === element || element.contains(hit), rect: { left: r.left, right: r.right, top: r.top, bottom: r.bottom }, preview: document.querySelector('.studio-preview').getBoundingClientRect().toJSON() }; });
          assert.equal(eyeHit.hit, true, `${width}×${height}: visual option remains clickable after scrolling: ${JSON.stringify(eyeHit)}`);
          await eyeOption.click();
          await page.waitForFunction(() => { const state = window.__dotsQAApp.detail.getState(); return state.promptReady && state.exportReady && document.querySelector('.studio-draft-host canvas.studio-editor-canvas')?.dataset.renderRevision === String(state.draft.revision); });
          await page.locator('.studio-actions [data-action="export"]').scrollIntoViewIfNeeded();
          assert.equal(await page.locator('.studio-actions [data-action="export"]').isEnabled(), true);
          const exportHit = await page.locator('.studio-actions [data-action="export"]').evaluate(element => { const r = element.getBoundingClientRect(), hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return { hit: hit === element || element.contains(hit), preview: document.querySelector('.studio-preview').getBoundingClientRect().toJSON(), canvas: document.querySelector('.studio-draft-host canvas.studio-editor-canvas').getBoundingClientRect().toJSON(), scrollTop: document.querySelector('#overlayBody').scrollTop }; });
          assert.equal(exportHit.hit, true, `${width}×${height}: Export remains operable after scrolling through the editor.`);
          assert(exportHit.scrollTop > 0, `${width}×${height}: mobile editor content scrolls naturally to the actions.`);
          assert(exportHit.canvas.bottom <= exportHit.preview.bottom + 1, `${width}×${height}: the transparent canvas remains contained by its preview while content scrolls.`);
        }
        const file = path.join(output, `${language}-${templateCase.series}-${width}x${height}-actions.png`);
        await page.screenshot({ path: file, fullPage: false });
        captures.push(file);
        rows.push({ language, series: templateCase.series, width, height, opened, actions, relatedGeometry, visualSummary: { colorCount: visualSummary.colorCount, thumbnailCount: visualSummary.thumbnails.length, noneCount: visualSummary.noneCount } });
      }

      // Exercise related switching only when the catalog has a same-series sibling; every detail still gets a close/reopen reset check.
      await page.setViewportSize({ width: 390, height: 844 });
      const body = page.locator('#overlayBody');
      const relatedCount = await page.locator('.related-character').count();
      const hasRelatedSiblings = ARTWORKS.some(item => item.seriesId === templateCase.seriesId && item.id !== templateCase.id);
      assert.equal(relatedCount > 0, hasRelatedSiblings, `${templateCase.id}: related cards match the catalog's same-series siblings.`);
      let changedArtwork = null;
      let lifecycle = 'reopen-without-related-siblings';
      if (hasRelatedSiblings) {
        await page.locator('.studio-related').scrollIntoViewIfNeeded();
        await body.evaluate(element => { element.scrollTop = element.scrollHeight; });
        await page.locator('.related-character').first().click();
        await page.waitForFunction(id => window.__dotsQAApp.detail.getState().id !== id
          && document.querySelector('#overlayBody').scrollTop === 0
          && document.querySelector('.artwork-detail__title')?.getClientRects().length > 0,
        templateCase.id, { timeout: 15_000 });
        changedArtwork = await page.evaluate(() => ({ id: window.__dotsQAApp.detail.getState().id, scrollTop: document.querySelector('#overlayBody').scrollTop }));
        assert.notEqual(changedArtwork.id, templateCase.id);
        assert.equal(changedArtwork.scrollTop, 0, 'Switching to a related Artwork resets the scrollport and reveals its identity.');
        lifecycle = 'related-switch-and-reopen';
      } else {
        assert.equal(await page.locator('.studio-related').evaluate(section => section.hidden), true,
          `${templateCase.id}: related content is hidden when its series has no sibling Artworks.`);
      }
      await page.locator('#overlayClose').click();
      await page.waitForFunction(() => !document.querySelector('#studioOverlay').open && document.body.dataset.screen === 'gallery');
      const closedDialog = await page.locator('#studioOverlay').evaluate(dialog => ({ display: getComputedStyle(dialog).display, rect: dialog.getBoundingClientRect().toJSON() }));
      assert.equal(closedDialog.display, 'none', `The closed dialog is removed from layout: ${JSON.stringify(closedDialog)}`);
      assert(closedDialog.rect.width === 0 || closedDialog.rect.height === 0, `The closed dialog has no visible bounds: ${JSON.stringify(closedDialog)}`);
      await page.locator(`#card-${templateCase.id}`).scrollIntoViewIfNeeded();
      await page.locator(`#card-${templateCase.id}`).click();
      await page.waitForFunction(id => window.__dotsQAApp.detail.getState().id === id
        && document.querySelector('#overlayBody').scrollTop === 0
        && document.querySelector('.artwork-detail__title')?.getClientRects().length > 0,
      templateCase.id, { timeout: 20_000 });
      rows.push({ language, series: templateCase.series, lifecycle, changedArtwork, reopenedScrollTop: await body.evaluate(element => element.scrollTop) });
      await context.close();
    }
  }
  assert.deepEqual(errors, []);
  const report = { revision: 100, browser: browser.version(), evidence: 'Installed Chrome via project Playwright; Codex in-app browser was used for visual opening only, not interaction acceptance.', sizes, cases: rows.length, captures, rows, errors };
  await fs.writeFile(path.join(output, 'layout.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(`Editor layout: ${rows.length} bilingual/template/viewport cases passed; ${captures.length} screenshots.`);
} finally {
  await browser.close();
  await server.close();
}
