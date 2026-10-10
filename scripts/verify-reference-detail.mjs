import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {createServer} from 'vite';
import {ARTWORKS, PREVIEW_ARTWORKS, createSnapshot, getVariants} from '../dist/studio-artwork-catalog.js?v=98';
import {promptFor} from '../dist/studio-prompt.js?v=98';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(process.env.DOTS_EVIDENCE_DIR || 'design/acceptance/current-20261009-v98/reference-detail');
const playwrightPath = process.env.DOTS_PLAYWRIGHT_MODULE || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightPath));
const vite = await createServer({configFile: path.join(root, 'vite.config.mjs'), server: {host: '127.0.0.1', port: 0, strictPort: true, hmr: false}});
await vite.listen();
const origin = `http://127.0.0.1:${vite.httpServer.address().port}`;
const browser = await chromium.launch({headless: true, executablePath: process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context = await browser.newContext({viewport: {width: 1440, height: 900}, acceptDownloads: true});
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
await fs.mkdir(output, {recursive: true});

const checks = [];
const check = (condition, label) => { assert.ok(condition, label); checks.push(label); };
const imageHash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const first = ARTWORKS.find(item => item.id === 'candidate-dots-20261005');
const second = ARTWORKS.find(item => item.id === 'dots-rose-glasses');
assert.ok(first && second, 'Published Dots fixtures exist.');
assert.equal(getVariants(first.id).length, 0, 'Production does not claim variants without registered relationships.');
const firstSnapshot = createSnapshot(first.id);
const originalBytes = await fs.readFile(path.join(root, 'dist', firstSnapshot.asset.path.slice(2)));
const artworkBefore = JSON.stringify(firstSnapshot.artwork);
const originalPrompt = promptFor(firstSnapshot.artwork, {language: 'en', target: 'image'});
const originalChinesePrompt = promptFor(firstSnapshot.artwork, {language: 'zh', target: 'image'});

const fixtureHTML = `<!doctype html><html lang="en" data-cache="98"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="${origin}/"><link rel="stylesheet" href="${origin}/studio.css?v=98"><link rel="stylesheet" href="${origin}/studio-detail.css?v=98"></head><body><main id="pageShell"><button id="trigger">Open</button></main><dialog id="studioOverlay" aria-labelledby="overlayTitle"><div class="overlay-shell"><header class="overlay-header"><button id="overlayBack" hidden>Back</button><h2 id="overlayTitle" tabindex="-1"></h2><button id="overlayClose" aria-label="Close details">×</button></header><div id="overlayBody"></div></div></dialog></body></html>`;

try {
  await page.route('**/index.html', route => route.fulfill({status: 200, contentType: 'text/html; charset=utf-8', body: fixtureHTML}));
  await page.goto(`${origin}/index.html`, {waitUntil: 'load'});
  await page.evaluate(async artworkId => {
    const [detailModule, overlayModule, catalog, tags, prompts, assets, actions] = await Promise.all([
      import('/studio-detail.js?v=98'), import('/studio-overlay.js?v=98'),
      import('/studio-artwork-catalog.js?v=98'), import('/studio-tags.js?v=98'),
      import('/studio-prompt.js?v=98'), import('/studio-asset-loader.js?v=98'), import('/studio-actions.js?v=98')
    ]);
    const api = {...catalog, ...tags, ...prompts, ...assets, ...actions};
    const state = {closeRequests: 0, versions: [], copied: [], notices: []};
    const detail = detailModule.createDetailController({api, language: 'en', notify: message => state.notices.push(message), onClose: () => { state.closeRequests += 1; }, onVersion: artwork => state.versions.push(artwork)});
    document.querySelector('#overlayBody').append(detail.element);
    const overlay = overlayModule.createOverlay({onClose: () => detail.requestClose()});
    overlay.open({title: 'Character details', trigger: document.querySelector('#trigger')});
    window.__detailTest = {api, detail, overlay, state, ready: detail.open({id: artworkId, version: catalog.getArtwork(artworkId).version, language: 'en'})};
  }, first.id);
  const ready = await page.evaluate(() => window.__detailTest.ready);
  assert.equal(ready.ok, true);
  assert.equal(ready.imageOk, true);
  await page.waitForFunction(() => window.__detailTest.detail.getState().imageLoaded && document.querySelector('.artwork-detail__prompt-excerpt')?.textContent.length > 0);
  const initial = await page.evaluate(() => {
    const {detail} = window.__detailTest;
    return {
      state: detail.getState(),
      title: document.querySelector('.artwork-detail__title').textContent,
      excerpt: document.querySelector('.artwork-detail__prompt-excerpt').textContent,
      editCollapsed: !document.querySelector('.artwork-detail__create-version').open,
      promptCollapsed: !document.querySelector('.artwork-detail__prompt-details').open,
      editRows: document.querySelectorAll('.artwork-detail__edit-fact').length,
      actionOrder: [...document.querySelectorAll('.artwork-detail__actions button')].map(button => button.className.split(' ').at(-1)),
      variantsHidden: document.querySelector('.artwork-detail__versions').hidden,
      inert: document.querySelector('#pageShell').inert,
      dialogOpen: document.querySelector('#studioOverlay').open
    };
  });
  assert.equal(initial.state.id, first.id);
  assert.equal(initial.state.originalPrompt, originalPrompt);
  assert.equal(initial.title, first.titleByLanguage.en);
  check(initial.excerpt.length > 0 && initial.excerpt.length <= 230, 'A concise real Prompt excerpt is visible before the full Prompt disclosure.');
  check(initial.editCollapsed && initial.promptCollapsed, 'Prompt preview and version editor disclosures start collapsed.');
  check(initial.editRows > 0 && initial.editRows <= 6, 'Only selected factual detail fields are editable.');
  check(initial.inert && initial.dialogOpen, 'Opening the shared overlay locks the page background.');
  check(initial.variantsHidden, 'Production hides the variant selector while the catalog has no real variants.');
  assert.equal(initial.actionOrder.length, 3);

  await page.evaluate(() => {
    const rows = [...document.querySelectorAll('.artwork-detail__edit-fact')];
    const remove = rows[0];
    remove.querySelector('select').value = 'remove';
    remove.querySelector('select').dispatchEvent(new Event('change', {bubbles: true}));
    const replace = rows[1];
    replace.querySelector('select').value = 'replace';
    replace.querySelector('select').dispatchEvent(new Event('change', {bubbles: true}));
    replace.querySelector('input').value = 'soft lavender fabric';
    replace.querySelector('input').dispatchEvent(new Event('input', {bubbles: true}));
    const direction = document.querySelector('.artwork-detail__additional-direction');
    direction.value = 'Keep the original character silhouette.';
    direction.dispatchEvent(new Event('input', {bubbles: true}));
    document.querySelector('.artwork-detail__create-version-summary').click();
  });
  const edited = await page.evaluate(() => window.__detailTest.detail.getState());
  check(edited.modifiedPrompt.includes('Remove ') && edited.modifiedPrompt.includes('Replace ') && edited.modifiedPrompt.includes('soft lavender fabric'), 'Keep/remove/replace intent becomes a separate modified Prompt.');
  check(edited.modifiedPrompt.includes('Keep the original character silhouette.') && edited.originalPrompt === originalPrompt, 'Free text is retained without changing the catalog Prompt.');
  assert.equal(JSON.stringify(await page.evaluate(id => window.__detailTest.api.getArtwork(id), first.id)), artworkBefore);
  assert.equal(imageHash(originalBytes), firstSnapshot.asset.sha256, 'The original image bytes remain unchanged while editing Prompt intent.');
  const originalDownload = await Promise.all([
    page.waitForEvent('download'),
    page.locator('.artwork-detail__download-original').click()
  ]).then(([download]) => download);
  const downloadedPath = await originalDownload.path();
  const downloadedBytes = await fs.readFile(downloadedPath);
  assert.equal(imageHash(downloadedBytes), firstSnapshot.asset.sha256, 'The actual downloaded file matches the registered original bytes.');
  assert.deepEqual(downloadedBytes, originalBytes, 'The original download is byte-identical to its source PNG.');
  check(true, 'Prompt edits do not alter Artwork facts or the real downloadable PNG bytes.');

  await page.evaluate(async () => window.__detailTest.detail.setLanguage('zh-CN'));
  let switched = await page.evaluate(() => window.__detailTest.detail.getState());
  assert.equal(switched.language, 'zh-CN');
  assert.equal(switched.additionalDirection, 'Keep the original character silhouette.');
  assert.equal(switched.edits.find(item => item.action === 'replace').replacement, 'soft lavender fabric');
  assert.notEqual(switched.originalPrompt, originalPrompt);
  check(switched.modifiedPrompt.includes('soft lavender fabric') && switched.modifiedPrompt.includes('Keep the original character silhouette.'), 'Language switching updates prompt language and labels while retaining edit choices and free text.');

  const previewArtwork = PREVIEW_ARTWORKS[0];
  const previewSnapshot = createSnapshot(previewArtwork.id, {allowPreview: true});
  const previewBytes = await fs.readFile(path.join(root, 'dist', previewSnapshot.asset.path.slice(2)));
  assert.equal(previewSnapshot.artwork.artApproval.status, 'pending');
  await page.evaluate(async ({id, version}) => window.__detailTest.detail.open({id, version, language: 'en'}), {id: previewArtwork.id, version: previewArtwork.version});
  await page.waitForFunction(() => window.__detailTest.detail.getState().imageLoaded && document.querySelector('.artwork-detail__review-status')?.textContent.includes('Pending review'));
  const previewDetail = await page.evaluate(() => ({
    state: window.__detailTest.detail.getState(),
    title: document.querySelector('.artwork-detail__title')?.textContent,
    badge: document.querySelector('.artwork-detail__review-status')?.textContent,
    prompt: document.querySelector('.artwork-detail__prompt-preview')?.textContent,
    variantsHidden: document.querySelector('.artwork-detail__versions')?.hidden
  }));
  assert.equal(previewDetail.state.id, previewArtwork.id);
  assert.equal(previewDetail.state.version, 'v1');
  assert.equal(previewDetail.state.previewOnly, true);
  assert.equal(previewDetail.title, previewArtwork.titleByLanguage.en);
  assert.equal(previewDetail.badge, 'Preview · Pending review');
  assert(previewDetail.prompt.includes('independent original character'));
  assert.equal(previewDetail.variantsHidden, true, 'Pending candidates do not claim unregistered variants.');
  const previewDownload = await Promise.all([
    page.waitForEvent('download'),
    page.locator('.artwork-detail__download-original').click()
  ]).then(([download]) => download);
  const previewDownloadedBytes = await fs.readFile(await previewDownload.path());
  assert.equal(imageHash(previewDownloadedBytes), previewSnapshot.asset.sha256);
  assert.deepEqual(previewDownloadedBytes, previewBytes, 'The local preview downloads its exact real original PNG bytes.');
  await page.evaluate(async () => window.__detailTest.detail.setLanguage('zh-CN'));
  const localizedPreview = await page.evaluate(() => ({
    state: window.__detailTest.detail.getState(),
    badge: document.querySelector('.artwork-detail__review-status')?.textContent,
    title: document.querySelector('.artwork-detail__title')?.textContent
  }));
  assert.equal(localizedPreview.state.previewOnly, true);
  assert.equal(localizedPreview.badge, '预览 · 待确认');
  assert.equal(localizedPreview.title, previewArtwork.titleByLanguage['zh-CN']);
  check(true, 'A pending partner uses the shared bilingual detail, states its review status, hides nonexistent variants, and downloads the real local PNG.');

  await page.evaluate(() => {
    const api = window.__detailTest.api;
    window.__savedPromptForLanguageRace = api.promptFor;
    api.promptFor = (artwork, options) => options.language === 'en'
      ? new Promise(resolve => { window.__resolveDelayedEnglishPrompt = () => resolve('DELAYED ENGLISH PROMPT'); })
      : window.__savedPromptForLanguageRace(artwork, options);
    window.__openingLanguageRace = window.__detailTest.detail.open({id: 'candidate-dots-20261005', version: 'v2', language: 'en'});
  });
  await page.waitForFunction(() => typeof window.__resolveDelayedEnglishPrompt === 'function');
  const languageDuringOpen = await page.evaluate(async () => {
    const result = await window.__detailTest.detail.setLanguage('zh-CN');
    return {result, state: window.__detailTest.detail.getState()};
  });
  assert.equal(languageDuringOpen.result.ok, true);
  assert.equal(languageDuringOpen.state.language, 'zh-CN');
  assert.equal(languageDuringOpen.state.originalPrompt, originalChinesePrompt);
  await page.evaluate(() => {
    window.__resolveDelayedEnglishPrompt();
    window.__detailTest.api.promptFor = window.__savedPromptForLanguageRace;
  });
  const languageRaceReady = await page.evaluate(() => window.__openingLanguageRace);
  assert.equal(languageRaceReady.ok, true);
  const languageAfterOpen = await page.evaluate(() => window.__detailTest.detail.getState());
  assert.equal(languageAfterOpen.language, 'zh-CN');
  assert.equal(languageAfterOpen.originalPrompt, originalChinesePrompt);
  check(true, 'A delayed English Prompt cannot overwrite a newer Chinese selection while a detail is opening.');

  const originalLoader = await page.evaluate(() => {
    const api = window.__detailTest.api;
    window.__savedLoader = api.loadAsset;
    api.loadAsset = async () => { throw new Error('fixture image unavailable'); };
    return true;
  });
  assert.equal(originalLoader, true);
  await page.evaluate(() => window.__detailTest.detail.open({id: 'candidate-dots-20261005', version: 'v2', language: 'en'}));
  const imageFailure = await page.evaluate(() => ({state: window.__detailTest.detail.getState(), copyDisabled: document.querySelector('.artwork-detail__copy-original').disabled, retryVisible: !document.querySelector('.artwork-detail__retry').hidden}));
  assert.equal(imageFailure.state.imageLoaded, false);
  assert.equal(imageFailure.state.originalPrompt, originalPrompt);
  assert.equal(imageFailure.copyDisabled, false);
  assert.equal(imageFailure.retryVisible, true);
  await page.evaluate(() => { window.__detailTest.api.loadAsset = window.__savedLoader; });
  await page.locator('.artwork-detail__retry').click();
  await page.waitForFunction(() => window.__detailTest.detail.getState().imageLoaded);
  check(true, 'An image-load failure leaves the verified Prompt usable and retries the same registered original.');

  await page.evaluate(() => {
    window.__savedDownload = window.__detailTest.api.downloadAsset;
    window.__detailTest.api.downloadAsset = async () => { throw new Error('fixture download unavailable'); };
  });
  await page.locator('.artwork-detail__download-original').click();
  await page.waitForFunction(() => document.querySelector('.artwork-detail__feedback')?.textContent.includes('download failed'));
  await page.evaluate(() => { window.__detailTest.api.downloadAsset = window.__savedDownload; });
  check(true, 'Download validation failures remain visible and are not reported as successful.');

  await page.evaluate(() => {
    document.querySelector('.artwork-detail__create-version-summary').click();
    const rows = [...document.querySelectorAll('.artwork-detail__edit-fact')];
    rows[0].querySelector('select').value = 'remove';
    rows[0].querySelector('select').dispatchEvent(new Event('change', {bubbles: true}));
    rows[1].querySelector('select').value = 'replace';
    rows[1].querySelector('select').dispatchEvent(new Event('change', {bubbles: true}));
    rows[1].querySelector('input').value = 'soft lavender fabric';
    rows[1].querySelector('input').dispatchEvent(new Event('input', {bubbles: true}));
    const direction = document.querySelector('.artwork-detail__additional-direction');
    direction.value = 'Keep the original character silhouette.';
    direction.dispatchEvent(new Event('input', {bubbles: true}));
  });
  await page.evaluate(async () => window.__detailTest.detail.setLanguage('zh-CN'));
  switched = await page.evaluate(() => window.__detailTest.detail.getState());

  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async value => window.__detailTest.state.copied.push(value)}});
    Object.defineProperty(document, 'execCommand', {configurable: true, value: () => false});
  });
  await page.locator('.artwork-detail__copy-modified').click();
  const copied = await page.evaluate(() => window.__detailTest.state.copied.at(-1));
  assert.equal(copied, switched.modifiedPrompt);
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async () => { throw new Error('clipboard denied'); }}});
    window.open = () => null;
  });
  await page.locator('.artwork-detail__copy-original').click();
  await page.locator('.artwork-detail__copy-fallback').waitFor({state: 'visible'});
  assert.equal(await page.locator('.artwork-detail__fallback-text').inputValue(), switched.originalPrompt);
  await page.locator('.artwork-detail__open-chatgpt-original').click();
  assert.equal(await page.locator('.artwork-detail__manual-chat').isVisible(), true);
  assert.equal(await page.locator('.artwork-detail__fallback-text').inputValue(), switched.originalPrompt);
  check(true, 'Clipboard denial exposes the complete selectable Prompt and a manual ChatGPT link without attaching or sending an image.');

  await page.evaluate(() => {
    window.__detailTest.overlay.close({restoreFocus: false});
    window.__detailTest.detail.close();
    const catalog = window.__detailTest.api;
    const firstSource = catalog.createSnapshot('candidate-dots-20261005');
    const secondSource = catalog.createSnapshot('dots-rose-glasses');
    const a = {...firstSource.artwork, id: 'fixture-dots-a', version: 'a1', variantGroupId: 'fixture:dots'};
    const b = {...secondSource.artwork, id: 'fixture-dots-b', version: 'b2', variantGroupId: 'fixture:dots'};
    let failNext = false;
    let delayVariantEnglish = false;
    let resolveDelayedVariantEnglish = null;
    const snapshots = new Map([[a.id, {...firstSource, artwork: a}], [b.id, {...secondSource, artwork: b}]]);
    const fixtureApi = {
      ...catalog,
      getArtwork: id => id === a.id ? a : id === b.id ? b : catalog.getArtwork(id),
      getVariants: id => id === a.id ? [b] : id === b.id ? [a] : [],
      createSnapshot: id => snapshots.get(id) || catalog.createSnapshot(id),
      promptFor: (artwork, options = {}) => {
        const language = options.language === 'zh' ? 'zh' : 'en';
        if (artwork?.id === a.id) return Promise.resolve(language === 'zh' ? 'FIXTURE PROMPT A ZH' : 'FIXTURE PROMPT A EN');
        if (artwork?.id === b.id && language === 'en' && delayVariantEnglish) {
          return new Promise(resolve => { resolveDelayedVariantEnglish = resolve; });
        }
        if (artwork?.id === b.id) return Promise.resolve(language === 'zh' ? 'FIXTURE PROMPT B ZH' : 'FIXTURE PROMPT B EN');
        return catalog.promptFor(artwork, {language, target: 'image'});
      },
      isEligible: () => true,
      loadAsset: (asset, options) => failNext && asset.id === secondSource.asset.id ? Promise.reject(new Error('fixture image failure')) : catalog.loadAsset(asset, options),
      setFailNext: value => { failNext = value; },
      setDelayVariantEnglish: value => { delayVariantEnglish = value; },
      hasDelayedVariantEnglish: () => Boolean(resolveDelayedVariantEnglish),
      resolveDelayedVariantEnglish: () => { const resolve = resolveDelayedVariantEnglish; resolveDelayedVariantEnglish = null; resolve?.('FIXTURE PROMPT B EN'); }
    };
    const versions = [];
    window.__variantFixture = {api: fixtureApi, a, b, versions};
    window.__detailTest.overlay.open({title: 'Character details', trigger: document.querySelector('#trigger')});
    const modulePromise = import('/studio-detail.js?v=98');
    window.__variantFixture.controller = modulePromise.then(({createDetailController}) => {
      const controller = createDetailController({api: fixtureApi, language: 'en', onVersion: artwork => versions.push(artwork)});
      document.querySelector('#overlayBody').replaceChildren(controller.element);
      window.__detailTest.detail = controller;
      return controller;
    });
  });
  const fixtureAId = await page.evaluate(async () => {
    const {controller, a} = window.__variantFixture;
    const detail = await controller;
    await detail.open({id: a.id, version: a.version, language: 'en'});
    return a.id;
  });
  const failedSwitch = await page.evaluate(async () => {
    const fixture = window.__variantFixture;
    fixture.api.setFailNext(true);
    return await (await fixture.controller).switchVariant(fixture.b.id);
  });
  assert.equal(failedSwitch.ok, false);
  assert.equal((await page.evaluate(() => window.__detailTest.detail.getState())).id, fixtureAId);
  assert.equal(await page.evaluate(() => window.__variantFixture.versions.length), 0);
  check(true, 'A failed variant load leaves the previous successful version selected and emits no route update.');
  await page.evaluate(async () => {
    const fixture = window.__variantFixture;
    fixture.api.setFailNext(false);
    fixture.api.setDelayVariantEnglish(true);
    fixture.pendingSwitch = (await fixture.controller).switchVariant(fixture.b.id);
  });
  await page.waitForFunction(() => window.__variantFixture.api.hasDelayedVariantEnglish());
  const languageDuringVariant = await page.evaluate(async () => {
    const state = await (await window.__variantFixture.controller).setLanguage('zh-CN');
    return {result: state, detail: window.__detailTest.detail.getState()};
  });
  assert.equal(languageDuringVariant.result.ok, true);
  assert.equal(languageDuringVariant.detail.id, fixtureAId);
  assert.equal(languageDuringVariant.detail.originalPrompt, 'FIXTURE PROMPT A ZH');
  check(true, 'Changing language during a pending variant keeps the previous successful Artwork selected.');
  await page.evaluate(() => window.__variantFixture.api.resolveDelayedVariantEnglish());
  const variantRaceResult = await page.evaluate(async () => await window.__variantFixture.pendingSwitch);
  assert.equal(variantRaceResult.ok, true);
  const successfulSwitch = await page.evaluate(() => ({state: window.__detailTest.detail.getState(), versions: window.__variantFixture.versions.map(item => item.id)}));
  assert.equal(successfulSwitch.state.id, 'fixture-dots-b');
  assert.equal(successfulSwitch.state.version, 'b2');
  assert.equal(successfulSwitch.state.language, 'zh-CN');
  assert.equal(successfulSwitch.state.originalPrompt, 'FIXTURE PROMPT B ZH');
  assert.deepEqual(successfulSwitch.versions, ['fixture-dots-b']);
  assert.equal(successfulSwitch.state.additionalDirection, '');
  check(true, 'A verified variant with a delayed stale English Prompt commits the current Chinese Prompt, image, version and callback atomically, then clears the prior draft.');

  const lastFocusable = await page.evaluate(() => {
    const dialog = document.querySelector('#studioOverlay');
    const selector = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
    const visible = [...dialog.querySelectorAll(selector)].filter(element => {
      if (!element.getClientRects().length) return false;
      for (let current = element; current && current !== dialog; current = current.parentElement) {
        if (current.hidden || current.inert || current.getAttribute('aria-hidden') === 'true') return false;
        if (current.localName === 'details' && !current.open && element !== current.querySelector('summary')) return false;
        const style = getComputedStyle(current);
        if (style.display === 'none' || style.visibility === 'hidden' || style.visibility === 'collapse') return false;
      }
      return true;
    });
    const last = visible.at(-1);
    last.focus();
    return {last: last.id || last.className, first: visible[0].id};
  });
  assert.equal(lastFocusable.first, 'overlayBack', 'The visible Back control is first in the modal focus order.');
  await page.keyboard.press('Tab');
  const wrappedFocus = await page.evaluate(() => document.activeElement?.id || document.activeElement?.className);
  assert.equal(wrappedFocus, lastFocusable.first, 'Tab from the final visible modal control wraps to its first control.');
  await page.keyboard.press('Shift+Tab');
  const reverseWrappedFocus = await page.evaluate(() => document.activeElement?.id || document.activeElement?.className);
  assert.equal(reverseWrappedFocus, lastFocusable.last, 'Shift+Tab from the first visible modal control wraps to its final control.');
  await page.keyboard.press('Escape');
  assert.equal(await page.evaluate(() => window.__detailTest.state.closeRequests), 1, 'Escape delegates route closure to the app shell.');
  assert.equal(await page.locator('#studioOverlay').evaluate(dialog => dialog.open), true, 'The app shell owns history and closes the dialog after route change.');
  await page.evaluate(() => {
    window.__detailTest.detail.close();
    window.__detailTest.overlay.close({restoreFocus: true});
  });
  await page.waitForTimeout(60);
  assert.equal(await page.locator('#pageShell').evaluate(shell => shell.inert), false);
  assert.equal(await page.locator('#trigger').evaluate(element => document.activeElement === element), true);
  check(true, 'The overlay traps focus, delegates Escape, unlocks page content and restores the invoking control.');

  await page.evaluate(() => {
    window.__detailTest.overlay.open({title: 'Character details', trigger: document.querySelector('#trigger')});
    document.querySelector('#studioOverlay').close();
  });
  await page.waitForFunction(() => window.__detailTest.state.closeRequests === 2);
  assert.equal(await page.locator('#pageShell').evaluate(shell => shell.inert), false);
  check(true, 'A native dialog close event delegates to the app shell and releases background inert state.');

  const appPage = await context.newPage();
  const appErrors = [];
  appPage.on('pageerror', error => appErrors.push(error.message));
  await appPage.goto(origin, {waitUntil: 'load'});
  await appPage.locator('.studio-nav a[href="#/gallery"]').click();
  const artworkButton = appPage.locator('#card-candidate-dots-20261005');
  await artworkButton.waitFor({state: 'visible'});
  await artworkButton.click();
  await appPage.waitForFunction(() => document.querySelector('#studioOverlay')?.open && document.querySelector('.artwork-detail__title')?.textContent);
  const appUrlBeforeLanguage = appPage.url();
  await appPage.locator('.artwork-detail__create-version-summary').click();
  const appRows = appPage.locator('.artwork-detail__edit-fact');
  await appRows.nth(0).locator('select').selectOption('remove');
  await appRows.nth(1).locator('select').selectOption('replace');
  await appRows.nth(1).locator('input').fill('rose tweed');
  const appDirection = 'Keep this note raw: Piñata 🍋';
  await appPage.locator('.artwork-detail__additional-direction').fill(appDirection);
  await appPage.locator('.artwork-detail__modified-summary').click();
  const appPromptBefore = await appPage.locator('.artwork-detail__modified-preview').textContent();
  await appPage.locator('#detailLanguage').click();
  await appPage.waitForFunction(() => document.documentElement.lang === 'zh-CN' && document.querySelector('.artwork-detail__title')?.textContent.trim() === '耳机 Dots');
  assert.equal(appPage.url(), appUrlBeforeLanguage, 'Changing modal language does not disturb the direct detail URL.');
  assert.equal(await appPage.locator('.artwork-detail__additional-direction').inputValue(), appDirection);
  assert.equal(await appPage.locator('.artwork-detail__edit-fact').nth(0).locator('select').inputValue(), 'remove');
  assert.equal(await appPage.locator('.artwork-detail__edit-fact').nth(1).locator('select').inputValue(), 'replace');
  assert.equal(await appPage.locator('.artwork-detail__edit-fact').nth(1).locator('input').inputValue(), 'rose tweed');
  const appPromptAfter = await appPage.locator('.artwork-detail__modified-preview').textContent();
  assert.notEqual(appPromptAfter, appPromptBefore, 'The base Prompt follows the selected language.');
  assert(appPromptAfter.includes(appDirection) && appPromptAfter.includes('rose tweed'));
  check(true, 'The in-dialog language control updates the real app Prompt while preserving unsaved choices and exact free text.');
  await appPage.locator('#overlayClose').click();
  await appPage.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  assert.deepEqual(appErrors, [], 'The complete app shell runs without page errors.');

  await fs.writeFile(path.join(output, 'report.json'), JSON.stringify({revision: 98, catalogRevision: 'artwork-catalog-20261009-v98', checks, errors, originalArtworkId: first.id, originalSha256: firstSnapshot.asset.sha256, previewArtworkId: previewArtwork.id, previewSha256: previewSnapshot.asset.sha256}, null, 2) + '\n');
  assert.deepEqual(errors, [], 'Browser module errors are absent.');
  console.log(`Reference detail checks passed: ${checks.length}; original download hash verified; variant fixture atomicity passed.`);
} finally {
  await browser.close();
  await vite.close();
}
