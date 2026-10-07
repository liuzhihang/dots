import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {createServer} from 'vite';
import {ARTWORKS, ASSETS, STYLE_IDENTITIES, TARGET_PROFILES, createSnapshot, getVariants} from '../dist/studio-artwork-catalog.js?v=90';
import {TAGS} from '../dist/studio-tags.js?v=90';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(process.env.DOTS_EVIDENCE_DIR || 'design/acceptance/current-20261007-v90/reference-detail');
const playwrightPath = process.env.DOTS_PLAYWRIGHT_MODULE || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightPath));
const vite = await createServer({configFile: path.join(root, 'vite.config.mjs'), server: {host: '127.0.0.1', port: 0, strictPort: true, hmr: false}});
await vite.listen();
const port = vite.httpServer.address().port;
const origin = `http://127.0.0.1:${port}`;
const browser = await chromium.launch({headless: true, executablePath: process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context = await browser.newContext({viewport: {width: 1440, height: 1000}, acceptDownloads: true});
const page = await context.newPage();
const pageErrors = [];
const requests = [];
const checks = [];
page.on('pageerror', error => pageErrors.push(error.message));
page.on('request', request => requests.push({method: request.method(), url: request.url()}));
await page.route('https://**/*', route => route.abort());
await fs.mkdir(output, {recursive: true});

function check(condition, label) {
  assert.ok(condition, label);
  checks.push(label);
}

async function screenshot(name) {
  await page.evaluate(async () => {
    const visible = [...document.images].filter(image => image.currentSrc && image.getClientRects().length);
    await Promise.all(visible.map(image => image.decode()));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await page.screenshot({path: path.join(output, name), fullPage: true});
}

try {
  await page.goto(`${origin}/index.html`, {waitUntil: 'load'});
  assert.equal(await page.locator('html').getAttribute('data-cache'), '90', 'reference/detail fixture uses the current cache 90 source');
  await page.evaluate(async () => {
    const [detail, reference, catalog, tags, prompts, assets, actions] = await Promise.all([
      import('/studio-detail.js?v=90'),
      import('/studio-reference.js?v=90'),
      import('/studio-artwork-catalog.js?v=90'),
      import('/studio-tags.js?v=90'),
      import('/studio-prompt.js?v=90'),
      import('/studio-asset-loader.js?v=90'),
      import('/studio-actions.js?v=90')
    ]);
    document.body.replaceChildren();
    window.__componentModules = {detail, reference, catalog, tags, prompts, assets, actions};
    window.__componentNotify = [];
    window.__componentTagCalls = [];
    window.__nativeApi = {...catalog, ...tags, ...prompts, ...assets};
    localStorage.clear();
  });

  const actualArtwork = ARTWORKS.find(artwork => artwork.id === 'muse-rose-flowers') || ARTWORKS.find(artwork => artwork.status === 'published');
  assert.ok(actualArtwork);
  assert.deepEqual(getVariants(actualArtwork.id), []);
  const actualSnapshot = createSnapshot(actualArtwork.id);
  assert.ok(actualSnapshot?.asset?.sha256 && actualSnapshot?.prompt?.text);
  await page.evaluate(id => {
    const view = window.__componentModules.detail.createDetailView({
      artworkId: id,
      api: window.__nativeApi,
      notify: message => window.__componentNotify.push(message),
      onTag: (tagId, dimension) => window.__componentTagCalls.push({tagId, dimension})
    });
    window.__detailView = view;
    document.body.append(view.element);
  }, actualArtwork.id);
  await page.locator('.artwork-detail__image').waitFor({state: 'visible'});
  await page.waitForFunction(() => document.querySelector('.artwork-detail__prompt-preview')?.textContent);
  assert.equal(await page.locator('.artwork-detail__title').innerText(), actualArtwork.title);
  assert.equal(await page.locator('.artwork-detail__prompt-preview').textContent(), actualSnapshot.prompt.text);
  assert.equal(await page.locator('.artwork-detail__tag-group').evaluate(tags => tags.closest('.artwork-detail__content') !== null), true);
  const detailLayout = await page.evaluate(() => {
    const media = document.querySelector('.artwork-detail__media');
    const content = document.querySelector('.artwork-detail__content');
    const mediaRect = media.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const group = document.querySelector('.artwork-detail__tag-group');
    const tags = group.querySelector('.artwork-detail__tags:not(.artwork-detail__tags--more)');
    const visibleTags = [...tags.querySelectorAll('.artwork-detail__tag')];
    const allFeatureIds = [...document.querySelectorAll('.artwork-detail__feature-record [data-tag-id]')].map(tag => tag.dataset.tagId);
    const actions = document.querySelector('.artwork-detail__actions');
    const prompt = document.querySelector('.artwork-detail__prompt-details');
    const secondary = document.querySelector('.artwork-detail__secondary-actions');
    const assetSummary = document.querySelector('.artwork-detail__asset-summary');
    const excerpt = document.querySelector('.artwork-detail__prompt-excerpt');
    const excerptStyle = excerpt ? getComputedStyle(excerpt) : null;
    const order = (left, right) => Boolean(left.compareDocumentPosition(right) & Node.DOCUMENT_POSITION_FOLLOWING);
    return {
      imageTop: mediaRect.top,
      imageRight: mediaRect.right,
      contentTop: contentRect.top,
      contentLeft: contentRect.left,
      tagsTop: tags.getBoundingClientRect().top,
      tagsText: visibleTags.map(tag => tag.textContent.trim()),
      tagLabels: visibleTags.map(tag => tag.getAttribute('aria-label')),
      defaultTagCount: visibleTags.length,
      featureIds: allFeatureIds,
      mainActionLabels: [...actions.querySelectorAll('button')].filter(button => !button.hidden).map(button => button.textContent.trim()),
      promptCollapsed: !prompt.open,
      promptPreviewHidden: !prompt.querySelector('.artwork-detail__prompt-preview').checkVisibility(),
      excerptText: excerpt?.textContent.trim() || '',
      excerptLines: excerptStyle ? Math.round(excerpt.getBoundingClientRect().height / parseFloat(excerptStyle.lineHeight)) : 0,
      languageBeforeDisclosure: Boolean(document.querySelector('.artwork-detail__prompt-heading .artwork-detail__language-select')) && !prompt.querySelector('.artwork-detail__language-select'),
      actionsBeforePrompt: order(actions, prompt),
      secondaryAfterPrompt: order(prompt, secondary),
      secondaryActionLabels: [...secondary.querySelectorAll('button')].map(button => button.textContent.trim()),
      variantsHidden: document.querySelector('.artwork-detail__versions').hidden,
      assetSummaryText: assetSummary.textContent.trim(),
      assetSummaryHeight: assetSummary.getBoundingClientRect().height,
      assetSummaryWhiteSpace: getComputedStyle(assetSummary).whiteSpace,
      assetDetailsCollapsed: document.querySelector('.artwork-detail__asset-details').open === false,
      targetDetailsCollapsed: document.querySelector('.artwork-detail__target-details').open === false,
      backgroundImage: getComputedStyle(media).backgroundImage,
      mediaBackground: getComputedStyle(media).backgroundColor
    };
  });
  assert(detailLayout.contentLeft >= detailLayout.imageRight - 1, 'desktop Artwork information, including tags, sits beside the large image');
  assert(Math.abs(detailLayout.contentTop - detailLayout.imageTop) <= 2, 'desktop detail aligns the content column with the image top');
  assert(detailLayout.tagsText.length > 0);
  assert.equal(detailLayout.tagsText.some(label => /^(风格|背景类型|外形|配饰|道具|动作|表情|配色|材质|用途)[：:]/.test(label)), false);
  assert(detailLayout.tagLabels.every(label => label && /[：:]/.test(label)), 'dimension context remains available to assistive technology');
  assert.equal(detailLayout.defaultTagCount, 4, 'the four most useful tags appear by default');
  assert.equal(new Set(detailLayout.featureIds).size, detailLayout.featureIds.length, 'the expanded feature index contains no duplicate facts');
  const allArtworkFeatureIds = [...new Set([...(actualArtwork.tagIds || []), ...(actualArtwork.featureIds || [])])];
  assert(allArtworkFeatureIds.every(id => detailLayout.featureIds.includes(id)), 'the expandable feature index retains every registered Artwork feature');
  assert.deepEqual(detailLayout.mainActionLabels, ['复制 Prompt', '下载原图'], 'copy and download are the direct primary detail actions');
  assert.equal(detailLayout.promptCollapsed, true, 'the full Prompt starts collapsed');
  assert.equal(detailLayout.promptPreviewHidden, true, 'the complete Prompt remains inside its collapsed disclosure');
  assert(detailLayout.excerptText.length > 0 && detailLayout.excerptLines <= 3, 'a short two-to-three-line Prompt summary is visible before the disclosure');
  assert.equal(detailLayout.languageBeforeDisclosure, true, 'Prompt language is selectable before opening the full text');
  assert.equal(detailLayout.actionsBeforePrompt, true, 'primary actions appear before the collapsible Prompt');
  assert.equal(detailLayout.secondaryAfterPrompt, true, 'reference and ChatGPT continuation follow the Prompt disclosure');
  assert.deepEqual([...detailLayout.secondaryActionLabels].sort(), ['用参考图继续创作', '在 ChatGPT 中创作'].sort());
  assert.equal(detailLayout.variantsHidden, true, 'no unapproved or nonexistent variant section is rendered');
  assert(detailLayout.assetSummaryText && detailLayout.assetSummaryWhiteSpace === 'nowrap' && detailLayout.assetSummaryHeight <= 24, 'file specification remains a compact single line');
  assert.equal(detailLayout.assetDetailsCollapsed, true);
  assert.equal(detailLayout.targetDetailsCollapsed, true);
  assert.equal(detailLayout.backgroundImage, 'none', 'detail artwork surface does not draw a transparency checkerboard');
  assert.equal(await page.locator('.artwork-detail__empty-variants').count(), 0, 'empty variant placeholder is removed');
  assert.equal(await page.locator('.artwork-detail__versions button[data-artwork-id]').count(), 0);
  assert.equal(await page.locator('.artwork-detail__target-notice').innerText(), '当前是静态透明 PNG，暂无已验证 Dot/Pet 安装包。');
  assert.equal(await page.locator('.artwork-detail__target-details').getAttribute('open'), null);
  await page.locator('.artwork-detail__target-details summary').click();
  assert((await page.locator('.artwork-detail__targets').innerText()).includes('本机工具格式合同，非 Web 通用要求'));
  assert.equal((await page.locator('.artwork-detail__targets').innerText()).includes('/Users/'), false);
  await page.locator('.artwork-detail__target-details summary').click();
  assert.equal(await page.locator('button').filter({hasText: /安装|上传到 Dot|导入 Pet/}).count(), 0);
  const firstTag = page.locator('.artwork-detail__tags:not(.artwork-detail__tags--more) .artwork-detail__tag').first();
  const clickedTag = {tagId: await firstTag.getAttribute('data-tag-id'), dimension: await firstTag.getAttribute('data-dimension')};
  await firstTag.click();
  assert.deepEqual(await page.evaluate(() => window.__componentTagCalls), [clickedTag], 'tag chip invokes the gallery filter callback with its typed feature');
  await page.locator('.artwork-detail__feature-details > summary').click();
  assert.equal(await page.locator('.artwork-detail__feature-details').evaluate(el => el.open), true);
  assert.equal(await page.locator('.artwork-detail__feature-record [data-tag-id]').count(), detailLayout.featureIds.length);
  await page.locator('.artwork-detail__feature-details > summary').click();
  const ready = await page.evaluate(() => window.__detailView.ready);
  assert.equal(ready.artworkId, actualArtwork.id);
  assert.equal(ready.imageOk, true);
  check(true, 'desktop detail places four clickable real feature tags beside the image, keeps the full feature index expandable and target claims factual');

  await page.locator('.artwork-detail__prompt-summary').click();
  assert.equal(await page.locator('.artwork-detail__prompt-details').evaluate(el => el.open), true);
  await page.locator('.artwork-detail__language-select').selectOption('en');
  const expectedEnglishPrompt = await page.evaluate(id => window.__nativeApi.promptFor(window.__nativeApi.getArtwork(id), {language: 'en', target: 'image'}), actualArtwork.id);
  await page.waitForFunction(expected => document.querySelector('.artwork-detail__prompt-preview')?.textContent === expected, expectedEnglishPrompt);
  await page.evaluate(() => {
    window.__savedClipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
    window.__savedExecDescriptor = Object.getOwnPropertyDescriptor(document, 'execCommand');
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async () => { throw new Error('fixture clipboard denied'); }}});
    Object.defineProperty(document, 'execCommand', {configurable: true, value: () => false});
  });
  await page.getByRole('button', {name: '复制 Prompt'}).click();
  await page.locator('.artwork-detail__copy-fallback').waitFor({state: 'visible'});
  const resumed = await page.evaluate(async id => {
    const resumeState = window.__detailView.getResumeState();
    window.__detailView.dispose();
    document.body.replaceChildren();
    const view = window.__componentModules.detail.createDetailView({artworkId: id, resumeState, api: window.__nativeApi});
    window.__detailView = view;
    document.body.append(view.element);
    const result = await view.ready;
    return {result, resumeState: view.getResumeState(), prompt: document.querySelector('.artwork-detail__prompt-preview')?.textContent};
  }, actualArtwork.id);
  assert.equal(resumed.result.artworkId, actualArtwork.id);
  assert.equal(resumed.result.imageOk, true);
  assert.equal(resumed.resumeState.promptLanguage, 'en');
  assert.equal(resumed.resumeState.copyFallbackOpen, true);
  assert.equal(resumed.prompt, expectedEnglishPrompt);
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async () => {}}});
  });
  await page.getByRole('button', {name: '复制 Prompt'}).click();
  await page.locator('.artwork-detail__copy-fallback').waitFor({state: 'hidden'});
  await page.evaluate(() => {
    if (window.__savedClipboardDescriptor) Object.defineProperty(navigator, 'clipboard', window.__savedClipboardDescriptor);
    else delete navigator.clipboard;
    if (window.__savedExecDescriptor) Object.defineProperty(document, 'execCommand', window.__savedExecDescriptor);
    else delete document.execCommand;
  });
  check(true, 'detail resume restores its verified Artwork snapshot, selected language and selectable Prompt fallback');
  await screenshot('detail-real-catalog.png');
  await page.evaluate(() => { window.__detailView.dispose(); document.body.replaceChildren(); });

  // Synthetic variants exercise atomic replacement and downloads without adding
  // any unapproved variant to the published catalogue.
  const fixtureWorks = ARTWORKS.filter(item => item.status === 'published' && item.id !== actualArtwork.id);
  const first = fixtureWorks[0];
  const second = fixtureWorks.find(item => item.id !== first.id && JSON.stringify(item.tagIds) !== JSON.stringify(first.tagIds));
  assert.ok(first && second);
  await page.evaluate(({firstId, secondId}) => {
    const {catalog, detail} = window.__componentModules;
    const sourceFirst = catalog.createSnapshot(firstId);
    const sourceSecond = catalog.createSnapshot(secondId);
    const fixtureArtwork = (snapshot, id, title) => ({...snapshot.artwork, id, title, status: 'published', published: true, variantGroupId: 'test-only-variant-fixture'});
    const artworks = new Map([
      ['fixture:first', fixtureArtwork(sourceFirst, 'fixture:first', '仅测试 · 第一款')],
      ['fixture:second', fixtureArtwork(sourceSecond, 'fixture:second', '仅测试 · 第二款')]
    ]);
    const source = new Map([['fixture:first', sourceFirst], ['fixture:second', sourceSecond]]);
    const state = {deferSecond: false, failFirstAgain: false, firstLoads: 0, pendingVariant: null, pendingDownload: null, deferDownload: false, downloaded: [], changed: [], calls: []};
    const api = {
      ...window.__nativeApi,
      getArtwork: id => artworks.get(id) || null,
      getVariants: id => id === 'fixture:first' ? [artworks.get('fixture:second')] : id === 'fixture:second' ? [artworks.get('fixture:first')] : [],
      createSnapshot: id => {
        const base = source.get(id), artwork = artworks.get(id);
        if (!base || !artwork) return null;
        return Object.freeze({...base, artwork, artworkId: id, prompt: {text: id === 'fixture:first' ? 'FIXTURE PROMPT A' : 'FIXTURE PROMPT B', language: 'zh', revision: 'test-only'}});
      },
      promptFor: async (artwork, {language = 'zh'} = {}) => {
        const base = artwork?.id === 'fixture:first' ? 'FIXTURE PROMPT A' : artwork?.id === 'fixture:second' ? 'FIXTURE PROMPT B' : '';
        return language === 'en' ? `${base} · EN` : base;
      },
      async loadAsset(asset, options) {
        state.calls.push(asset.id);
        if (asset.id === source.get('fixture:first').asset.id) {
          state.firstLoads += 1;
          if (state.failFirstAgain && state.firstLoads > 1) throw new Error('fixture forced image failure');
        }
        if (asset.id === source.get('fixture:second').asset.id && state.deferSecond) {
          return await new Promise((resolve, reject) => {
            state.pendingVariant = {resolve, reject, options};
            options?.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), {once: true});
          });
        }
        return window.__nativeApi.loadAsset(asset, options);
      },
      async downloadAsset(asset, options) {
        state.downloaded.push(asset.id);
        if (state.deferDownload) {
          return await new Promise((resolve, reject) => {
            state.pendingDownload = {asset, resolve, reject, options};
            options?.signal?.addEventListener('abort', () => reject(new DOMException('Download aborted', 'AbortError')), {once: true});
          });
        }
        return window.__nativeApi.downloadAsset(asset, options);
      }
    };
    window.__variantFixture = {api, state, source};
    const view = detail.createDetailView({artworkId: 'fixture:first', snapshot: api.createSnapshot('fixture:first'), api, onArtworkChange: id => state.changed.push(id)});
    window.__detailView = view;
    document.body.append(view.element);
  }, {firstId: first.id, secondId: second.id});
  await page.locator('.artwork-detail__image').waitFor({state: 'visible'});
  assert.equal(await page.locator('.artwork-detail__title').innerText(), '仅测试 · 第一款');
  await page.locator('.artwork-detail__prompt-summary').click();
  await page.locator('.artwork-detail__language-select').selectOption('en');
  await page.waitForFunction(() => document.querySelector('.artwork-detail__prompt-preview')?.textContent === 'FIXTURE PROMPT A · EN');
  const firstTags = await page.locator('.artwork-detail__tag-group').innerText();
  const originalImage = await page.locator('.artwork-detail__image').getAttribute('src');
  await page.evaluate(() => { window.__variantFixture.state.deferSecond = true; });
  await page.locator('[data-artwork-id="fixture:second"]').click();
  await page.waitForFunction(() => window.__variantFixture.state.pendingVariant !== null);
  assert.equal(await page.locator('.artwork-detail__title').innerText(), '仅测试 · 第一款');
  assert.equal(await page.locator('.artwork-detail__prompt-preview').textContent(), 'FIXTURE PROMPT A · EN');
  assert.equal(await page.locator('.artwork-detail__tag-group').innerText(), firstTags);
  assert.equal(await page.locator('.artwork-detail__image').getAttribute('src'), originalImage);
  await page.evaluate(async () => {
    const asset = window.__variantFixture.source.get('fixture:second').asset;
    const lease = await window.__nativeApi.loadAsset(asset);
    window.__variantFixture.state.pendingVariant.resolve(lease);
    window.__variantFixture.state.deferSecond = false;
  });
  await page.waitForFunction(() => document.querySelector('.artwork-detail__title')?.textContent === '仅测试 · 第二款');
  assert.equal(await page.locator('.artwork-detail__prompt-preview').textContent(), 'FIXTURE PROMPT B · EN');
  assert.equal(await page.locator('.artwork-detail__language-select').inputValue(), 'en');
  assert.notEqual(await page.locator('.artwork-detail__tag-group').innerText(), firstTags);
  assert.notEqual(await page.locator('.artwork-detail__image').getAttribute('src'), originalImage);
  assert.deepEqual(await page.evaluate(() => window.__variantFixture.state.changed), ['fixture:second']);
  check(true, 'variant image, value-only tags and language-matched Prompt change atomically after the next image decodes');

  await page.evaluate(() => { window.__variantFixture.state.deferDownload = true; });
  await page.locator('[data-artwork-id="fixture:first"]').click();
  await page.waitForFunction(() => document.querySelector('.artwork-detail__title')?.textContent === '仅测试 · 第一款');
  const frozenAsset = await page.evaluate(() => window.__variantFixture.source.get('fixture:first').asset);
  await page.getByRole('button', {name: '下载原图'}).click();
  await page.waitForFunction(() => window.__variantFixture.state.pendingDownload !== null);
  await page.locator('[data-artwork-id="fixture:second"]').click();
  await page.waitForFunction(() => document.querySelector('.artwork-detail__title')?.textContent === '仅测试 · 第二款');
  const downloadEvent = page.waitForEvent('download');
  await page.evaluate(async () => {
    const pending = window.__variantFixture.state.pendingDownload;
    const verified = await window.__nativeApi.downloadAsset(pending.asset, pending.options);
    pending.resolve(verified);
    window.__variantFixture.state.deferDownload = false;
  });
  const download = await downloadEvent;
  const downloadPath = path.join(output, 'frozen-variant-download.png');
  await download.saveAs(downloadPath);
  const downloadedBytes = await fs.readFile(downloadPath);
  assert.equal(crypto.createHash('sha256').update(downloadedBytes).digest('hex'), frozenAsset.sha256);
  assert.deepEqual(await page.evaluate(() => window.__variantFixture.state.downloaded.slice(-1)), [frozenAsset.id]);
  check(true, 'an in-flight download remains bound to its frozen Artwork A after the detail view switches to Artwork B');
  await screenshot('detail-variant-fixture.png');

  await page.evaluate(() => { window.__variantFixture.state.failFirstAgain = true; });
  const secondTags = await page.locator('.artwork-detail__tags').innerText();
  const secondImage = await page.locator('.artwork-detail__image').getAttribute('src');
  await page.locator('[data-artwork-id="fixture:first"]').click();
  await page.waitForFunction(() => document.querySelector('.artwork-detail__feedback')?.textContent.includes('仍显示上一张已载入作品'));
  assert.equal(await page.locator('.artwork-detail__title').innerText(), '仅测试 · 第二款');
  assert.equal(await page.locator('.artwork-detail__prompt-preview').textContent(), 'FIXTURE PROMPT B · EN');
  assert.equal(await page.locator('.artwork-detail__tags').innerText(), secondTags);
  assert.equal(await page.locator('.artwork-detail__image').getAttribute('src'), secondImage);
  check(true, 'failed variant decoding keeps the last loaded image, tags and Prompt together');

  await page.evaluate(() => {
    const state = window.__variantFixture.state;
    state.deferDownload = true;
    state.pendingDownload = null;
  });
  const notificationsBeforeClose = await page.evaluate(() => window.__componentNotify.length);
  await page.getByRole('button', {name: '下载原图'}).click();
  await page.waitForFunction(() => window.__variantFixture.state.pendingDownload !== null);
  const downloadSignal = await page.evaluate(() => window.__variantFixture.state.pendingDownload.options.signal);
  await page.evaluate(() => window.__detailView.dispose());
  await page.waitForTimeout(40);
  assert.equal(await page.evaluate(() => window.__variantFixture.state.pendingDownload.options.signal.aborted), true);
  assert.equal(await page.evaluate(() => window.__componentNotify.length), notificationsBeforeClose, 'download teardown emits no delayed notification');
  check(true, 'closing detail aborts an in-flight download and suppresses late feedback');

  await page.evaluate(() => {
    window.__execCount = 0;
    window.__openCount = 0;
    window.__openedUrl = '';
    window.open = url => { window.__openCount += 1; window.__openedUrl = String(url); return {opener: null}; };
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: () => new Promise((_, reject) => { window.__rejectDetailChat = reject; })}});
    Object.defineProperty(document, 'execCommand', {configurable: true, value: () => { window.__execCount += 1; return false; }});
    const {detail, catalog} = window.__componentModules;
    const artwork = catalog.ARTWORKS.find(item => item.status === 'published');
    const view = detail.createDetailView({artworkId: artwork.id, api: window.__nativeApi});
    document.body.replaceChildren(view.element);
    window.__pendingDetailChatView = view;
  });
  await page.locator('.artwork-detail__image').waitFor({state: 'visible'});
  await page.getByRole('button', {name: '在 ChatGPT 中创作'}).click();
  await page.waitForFunction(() => typeof window.__rejectDetailChat === 'function');
  const openedDetailUrl = await page.evaluate(() => window.__openedUrl);
  const detailQueryPrompt = new URL(openedDetailUrl).searchParams.get('prompt');
  assert(detailQueryPrompt?.length > 0, 'ChatGPT opens with a prompt query value');
  await page.evaluate(() => {
    window.__pendingDetailChatView.dispose();
    window.__rejectDetailChat(new Error('late clipboard denial'));
  });
  await page.waitForTimeout(40);
  assert.equal(await page.evaluate(() => window.__openCount), 1);
  assert.equal(await page.evaluate(() => window.__execCount), 0);
  assert.equal(await page.locator('.artwork-detail__manual-chat-link').getAttribute('hidden'), '');
  check(true, 'detail ChatGPT action pre-fills the prompt and a rejected clipboard promise after close causes no stale fallback');
  await page.evaluate(() => {
    if (window.__savedClipboardDescriptor) Object.defineProperty(navigator, 'clipboard', window.__savedClipboardDescriptor);
    else delete navigator.clipboard;
    if (window.__savedExecDescriptor) Object.defineProperty(document, 'execCommand', window.__savedExecDescriptor);
    else delete document.execCommand;
  });

  await page.evaluate(() => {
    const {reference, prompts, catalog} = window.__componentModules;
    window.__referencePromptFields = [];
    window.__referenceStateChanges = [];
    window.__referenceApiFail = false;
    const api = {
      STYLE_IDENTITIES: catalog.STYLE_IDENTITIES,
      buildReferencePrompt: async fields => {
        window.__referencePromptFields.push(fields);
        if (window.__referenceApiFail) throw new Error('fixture template failure');
        return prompts.buildReferencePrompt(fields);
      }
    };
    const view = reference.createReferenceView({
      styleId: 'dots',
      session: null,
      api,
      onSessionChange: session => window.__referenceStateChanges.push(session)
    });
    window.__referenceView = view;
    document.body.replaceChildren(view.element);
  });
  await page.waitForFunction(() => document.querySelector('.reference-assist__prompt-preview')?.textContent.includes('如果你在 ChatGPT 中上传了参考图片'));
  assert.equal(await page.locator('input[type="file"]').count(), 0);
  assert.equal(await page.locator('.reference-assist img').count(), 0);
  assert((await page.locator('.reference-assist__intro').innerText()).includes('不会选择、预览或分析图片'));
  assert.equal(await page.locator('.reference-assist button').filter({hasText: '下载 Prompt TXT'}).count(), 0);
  assert.equal(await page.locator('.reference-assist__actions button').count(), 2);
  check(true, 'reference assist has no local file picker or preview, and offers only copy/OpenAI continuation actions');

  await page.locator('.reference-assist__description').fill('保留眼镜，改成挥手');
  await page.locator('.reference-assist__retain').fill('圆形眼镜\n紫色主色');
  await page.locator('.reference-assist__language-select').selectOption('en');
  await page.waitForFunction(() => document.querySelector('.reference-assist__prompt-preview')?.textContent.includes('Retain these details:') || document.querySelector('.reference-assist__prompt-preview')?.textContent.includes('Details to retain:'));
  const referencePrompt = await page.locator('.reference-assist__prompt-preview').innerText();
  assert(referencePrompt.includes('保留眼镜，改成挥手'));
  assert(referencePrompt.includes('圆形眼镜'));
  assert(referencePrompt.includes('If you upload a reference image in ChatGPT') || referencePrompt.includes('如果你在 ChatGPT 中上传了参考图片'));
  const session = await page.evaluate(() => window.__referenceView.getSession());
  assert.equal(session.description, '保留眼镜，改成挥手');
  assert.deepEqual(session.retain, ['圆形眼镜', '紫色主色']);
  assert.equal(session.styleId, 'dots');
  assert.equal('file' in session || 'fileName' in session, false);
  assert.equal(await page.evaluate(() => localStorage.length), 0);
  check(true, 'reference Prompt uses only the chosen style, user text and retained details, with conditional ChatGPT upload instructions');
  await screenshot('reference-text-only-desktop.png');

  await page.evaluate(() => {
    window.__openedUrl = '';
    window.__openCount = 0;
    window.open = () => null;
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async () => { throw new Error('fixture clipboard denied'); }}});
    Object.defineProperty(document, 'execCommand', {configurable: true, value: () => false});
  });
  await page.getByRole('button', {name: '复制 Prompt'}).click();
  await page.locator('.reference-assist__copy-fallback').waitFor({state: 'visible'});
  assert.equal(await page.locator('.reference-assist__manual-prompt').inputValue(), referencePrompt);
  await page.getByRole('button', {name: '在 ChatGPT 中创作'}).click();
  await page.waitForFunction(() => !document.querySelector('.reference-assist__manual-chat-link').hidden);
  const fallbackUrl = await page.locator('.reference-assist__manual-chat-link').getAttribute('href');
  assert.equal(new URL(fallbackUrl).searchParams.get('prompt'), referencePrompt);
  assert.equal(await page.locator('.reference-assist__manual-prompt').inputValue(), referencePrompt);
  assert((await page.locator('.reference-assist__feedback').innerText()).includes('复制失败') || (await page.locator('.reference-assist__feedback').innerText()).includes('未完成'));
  check(true, 'clipboard and popup failure preserve the full prompt and a manual ChatGPT link carrying that prompt');

  await page.evaluate(() => {
    window.__openCount = 0;
    window.__openedUrl = '';
    window.open = url => { window.__openCount += 1; window.__openedUrl = String(url); return {opener: null}; };
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async value => { window.__copiedPrompt = value; }}});
  });
  await page.getByRole('button', {name: '在 ChatGPT 中创作'}).click();
  await page.waitForFunction(() => window.__copiedPrompt?.length > 0);
  const openedReferenceUrl = await page.evaluate(() => window.__openedUrl);
  assert.equal(new URL(openedReferenceUrl).searchParams.get('prompt'), referencePrompt);
  assert.equal(await page.evaluate(() => window.__copiedPrompt), referencePrompt);
  assert.equal(await page.evaluate(() => window.__openCount), 1, 'the action opens one ChatGPT tab and does not send a message');
  check(true, 'ChatGPT opens with the encoded template prompt and copies the same text for fallback; no message is submitted');

  await page.evaluate(() => { window.__referenceApiFail = true; });
  await page.locator('.reference-assist__description').fill('触发模板错误');
  await page.waitForFunction(() => document.querySelector('.reference-assist__feedback')?.textContent.includes('fixture template failure'));
  assert.equal(await page.getByRole('button', {name: '在 ChatGPT 中创作'}).isDisabled(), true);
  check(true, 'template failures are announced and do not open ChatGPT with stale Prompt text');

  // A clipboard promise that settles after the single overlay closes must not
  // focus fallback content or write into a replaced view.
  await page.evaluate(() => {
    window.__execCount = 0;
    window.__openCount = 0;
    window.open = url => { window.__openCount += 1; window.__openedUrl = String(url); return {opener: null}; };
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: () => new Promise((_, reject) => { window.__rejectPendingReference = reject; })}});
    window.__referenceApiFail = false;
    const {reference, prompts, catalog} = window.__componentModules;
    const view = reference.createReferenceView({styleId: 'dots', api: {STYLE_IDENTITIES: catalog.STYLE_IDENTITIES, buildReferencePrompt: prompts.buildReferencePrompt}});
    document.body.replaceChildren(view.element);
    window.__pendingReferenceView = view;
  });
  await page.waitForFunction(() => document.querySelector('.reference-assist__prompt-preview')?.textContent.includes('如果你在 ChatGPT 中上传了参考图片'));
  await page.getByRole('button', {name: '在 ChatGPT 中创作'}).click();
  await page.waitForFunction(() => typeof window.__rejectPendingReference === 'function');
  await page.evaluate(() => {
    window.__pendingReferenceView.dispose();
    window.__rejectPendingReference(new Error('late clipboard denial'));
  });
  await page.waitForTimeout(40);
  assert.equal(await page.evaluate(() => window.__openCount), 1, 'the user click synchronously requested one prefilled ChatGPT tab');
  assert.equal(await page.evaluate(() => window.__execCount), 0, 'no delayed clipboard fallback after disposal');
  assert.equal(await page.locator('.reference-assist__manual-chat-link').getAttribute('hidden'), '');
  check(true, 'closing the reference overlay suppresses late clipboard UI updates while preserving the already opened ChatGPT tab');

  await page.setViewportSize({width: 320, height: 900});
  await page.evaluate(() => {
    const {reference, catalog, prompts} = window.__componentModules;
    const view = reference.createReferenceView({styleId: 'dots', api: {STYLE_IDENTITIES: catalog.STYLE_IDENTITIES, buildReferencePrompt: prompts.buildReferencePrompt}});
    document.body.replaceChildren(view.element);
    window.__mobileReferenceView = view;
  });
  const overflow = await page.evaluate(() => ({
    total: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    offenders: [...document.querySelectorAll('body *')].map(element => ({
      tag: element.tagName.toLowerCase(), className: element.className?.baseVal ?? element.className ?? '',
      scrollWidth: element.scrollWidth, clientWidth: element.clientWidth,
      left: Math.round(element.getBoundingClientRect().left), right: Math.round(element.getBoundingClientRect().right)
    })).filter(item => item.right > innerWidth + 1).slice(0, 12)
  }));
  assert(overflow.total <= 2, `reference 320px horizontal overflow ${JSON.stringify(overflow)}`);
  await screenshot('reference-320.png');
  check(true, 'text-only reference view fits a simulated 320 CSS px viewport without horizontal overflow');

  const externalRequests = requests.filter(request => !request.url.startsWith(origin));
  assert.deepEqual(externalRequests, [], 'tests do not navigate out to ChatGPT or another external origin');
  assert.equal(requests.some(request => request.method !== 'GET' && request.method !== 'HEAD'), false, 'no local reference upload or mutation request');
  assert.equal(pageErrors.length, 0, pageErrors.join('\n'));
  check(true, 'no external request, reference image upload, or uncaught browser error');

  await fs.writeFile(path.join(output, 'report.json'), `${JSON.stringify({
    sourceCache: 90,
    origin,
    checks,
    pageErrors,
    externalRequests,
    testOnlyVariantFixture: true,
    actualPublishedArtworkCount: ARTWORKS.length,
    actualPublishedVariantCount: ARTWORKS.filter(item => item.status === 'published' && item.variantGroupId).length,
    candidatePoseAssets: ASSETS.filter(asset => asset.candidateOnly).map(asset => ({id: asset.id, approval: asset.artApproval.status, sha256: asset.sha256})),
    targetProfiles: TARGET_PROFILES.map(profile => ({id: profile.id, verificationStatus: profile.verificationStatus, checkedAt: profile.queriedAt || profile.checkedAt})),
    styleIdentityCount: STYLE_IDENTITIES.length,
    tagCount: TAGS.length,
    simulatedViewport: 'Chromium CSS viewport only; no physical device verified',
    artApproval: 'not performed; screenshots are engineering evidence only',
    targetInstallValidation: 'not performed',
    externalVisionService: 'not used',
    referenceImageHandling: 'No local file selection, preview, analysis, persistence, upload, or public catalog entry; prompt requests conditional use if the user uploads in ChatGPT.',
    published: false
  }, null, 2)}\n`);
  console.log(`Reference/detail checks passed: ${checks.length}; evidence: ${output}`);
} finally {
  await context.close();
  await browser.close();
  await vite.close();
}
