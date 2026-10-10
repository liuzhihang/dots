import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';

const root = process.cwd();
const outputDir = resolveEvidenceDirectory('.artifacts/character-extension');
const output = path.join(outputDir, 'extension-browser.json');
const vite = await createServer({ configFile: path.join(root, 'vite.config.mjs'), server: { host: '127.0.0.1', port: 0, strictPort: true, hmr: false } });
await vite.listen();
const origin = `http://127.0.0.1:${vite.httpServer.address().port}`;
const browser = await launchBrowser({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, acceptDownloads: true });
const page = await context.newPage();
page.setDefaultTimeout(15000);
const errors = [];
const requests = [];
const checks = [];
page.on('pageerror', error => errors.push(error.message));
page.on('request', request => requests.push(new URL(request.url()).pathname));
page.addInitScript(() => {
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText: async value => { window.__copiedText = value; } }
  });
});

const fixtureUrl = `/@fs/${path.join(root, 'scripts/fixtures/new-artwork.mjs').split(path.sep).join('/')}`;
const shell = `<!doctype html><html lang="zh-CN"><head><base href="${origin}/"><link rel="stylesheet" href="/studio.css?v=99"><link rel="stylesheet" href="/studio-detail.css?v=99"></head><body><main><section id="gallery" aria-label="测试图库"></section><section id="detail"></section></main></body></html>`;
const check = (condition, message) => {
  assert.ok(condition, message);
  checks.push(message);
};

try {
  await page.route('**/__character-extension-test', route => route.fulfill({ contentType: 'text/html', body: shell }));
  await page.goto(`${origin}/__character-extension-test`);
  const setup = await page.evaluate(async fixtureModuleUrl => {
    const [fixtureModule, cardModule, detailModule, catalog, tags, prompt, actions, previews] = await Promise.all([
      import(fixtureModuleUrl),
      import('/studio-card.js?v=99'),
      import('/studio-detail.js?v=99'),
      import('/studio-artwork-catalog.js?v=99'),
      import('/studio-tags.js?v=99'),
      import('/studio-prompt.js?v=99'),
      import('/studio-asset-loader.js?v=99'),
      import('/studio-preview-loader.js?v=99')
    ]);
    const fixture = fixtureModule.createNewArtworkFixture();
    const matches = fixture.queryArtworks({ text: '测试奶油白猫新外观', seriesId: 'animals', sort: 'curated', language: 'zh-CN' });
    const api = {
      ARTWORKS: fixture.catalog,
      TAGS: tags.TAGS,
      TAG_DIMENSIONS: tags.TAG_DIMENSIONS,
      SERIES: catalog.SERIES,
      getArtwork: fixture.getArtwork,
      getAsset: fixture.getAsset,
      createSnapshot: fixture.createSnapshot,
      canOpenArtwork: fixture.canOpenArtwork,
      isPreviewArtwork: fixture.isPreviewArtwork,
      getVariants: fixture.getVariants,
      promptFor: fixture.promptFor,
      downloadAsset: (asset, options = {}) => actions.downloadAsset(asset, { ...options, resolveAsset: fixture.getAsset })
    };
    const displayAssets = fixture.assets.filter(asset => ['gallery-poster', 'display-preview'].includes(asset.resourceKind));
    const loader = previews.createPreviewLoader({ assetRegistry: displayAssets, baseURL: new URL('/', location.origin) });
    const detail = detailModule.createDetailController({ api, language: 'zh-CN', loader });
    document.querySelector('#detail').append(detail.element);
    const card = cardModule.createArtworkCard(matches[0], {
      language: 'zh-CN',
      lookupAsset: fixture.getAsset,
      series: catalog.SERIES,
      context: 'shared-gallery',
      onOpen: (id, version) => detail.open({ id, version, language: 'zh-CN' })
    });
    document.querySelector('#gallery').append(card);
    window.__extension = { fixture, api, matches, detail, loader, sourceArtworkJson: JSON.stringify(fixture.sourceArtwork) };
    return {
      fixtureArtworkId: fixture.artwork.id,
      fixtureCharacterId: fixture.character.id,
      matchIds: matches.map(artwork => artwork.id),
      sourcePath: fixture.assets.find(asset => asset.id.endsWith(':original')).path,
      sourceSha256: fixture.assets.find(asset => asset.id.endsWith(':original')).sha256,
      expectedPrompt: fixture.promptFor(fixture.artwork, { language: 'zh-CN' }).text,
      cardClass: card.className
    };
  }, fixtureUrl);

  assert.deepEqual(setup.matchIds, [setup.fixtureArtworkId]);
  check(setup.cardClass === 'artwork-card', 'A data-only Character and Artwork appear through the shared gallery query and card component.');
  check(await page.locator(`#shared-gallery-${setup.fixtureArtworkId}`).isVisible(), 'The shared card is rendered and addressable by its data ID.');
  const originalPath = new URL(setup.sourcePath.replace(/^\.\//, ''), `${origin}/`).pathname;
  check(!requests.includes(originalPath), 'Query and ordinary card rendering do not fetch the original PNG.');

  await page.locator(`#shared-gallery-${setup.fixtureArtworkId}`).click();
  await page.waitForFunction(() => document.querySelector('.character-studio')?.dataset.preview === 'ready');
  await page.waitForFunction(() => { const button=document.querySelector('.studio-actions [data-action="copy-prompt"]');return Boolean(button&&!button.disabled); });
  assert.equal(await page.locator('.artwork-detail__title').textContent(), '测试奶油白猫新外观');
  assert.equal(await page.evaluate(() => window.__extension.detail.getState().originalPrompt), setup.expectedPrompt);
  check(await page.locator('.character-studio').isVisible(), 'The shared detail controller opens the fixture from the card without a character-specific page.');
  assert.equal(await page.locator('.studio-editor-content:not([hidden])').count(),0,'A newly registered Artwork without a Template stays static.');
  assert.equal(await page.locator('.studio-actions [data-action="copy-prompt"],.studio-actions [data-action="open-chatgpt"],.studio-actions [data-action="export"]').count(),3);
  assert.equal(await page.locator('.studio-original [data-action="export"],.studio-original .artwork-detail__download-original').count(),0,'The read-only disclosure has no duplicate download control.');
  check(!requests.includes(originalPath), 'Detail cover and sharper preview use registered display derivatives; original bytes remain unloaded.');

  const displayBefore = await page.locator('.artwork-detail__image').evaluate(image => image.currentSrc || image.src);
  await page.locator('.artwork-detail__additional-direction').fill('请保留奶油白颜色和圆润猫耳。');
  const promptState = await page.evaluate(() => window.__extension.detail.getState());
  assert.equal(promptState.originalPrompt,setup.expectedPrompt);
  assert(promptState.modifiedPrompt.includes(setup.expectedPrompt)&&promptState.modifiedPrompt.includes('请保留奶油白颜色和圆润猫耳。'));
  assert.equal(promptState.promptReady,true);
  assert.equal(await page.locator('.artwork-detail__image').evaluate(image => image.currentSrc || image.src),displayBefore,'Additional instructions do not alter or rerender a static preview.');
  await page.locator('.studio-actions [data-action="copy-prompt"]').click();
  await page.waitForFunction(() => window.__copiedText === window.__extension.detail.getState().modifiedPrompt);
  assert.equal(await page.evaluate(() => window.__copiedText), promptState.modifiedPrompt);
  await page.evaluate(() => {window.__openUrls=[];window.__realOpen=window.open;window.open=url=>{window.__openUrls.push(String(url));return null;};});
  await page.locator('.studio-actions [data-action="open-chatgpt"]').click();
  const chatUrl=await page.evaluate(()=>window.__openUrls.at(-1));assert.equal(new URL(chatUrl).searchParams.get('prompt'),promptState.modifiedPrompt);
  check(true, 'The unified Chinese Prompt copies and opens in ChatGPT with extra intent while leaving the static preview unchanged.');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('.studio-actions [data-action="export"]').click()
  ]);
  const downloaded = await fs.readFile(await download.path());
  const sourcePath = path.join(root, 'dist', setup.sourcePath.replace(/^\.\//, ''));
  const source = await fs.readFile(sourcePath);
  const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
  assert.equal(sha256(downloaded), setup.sourceSha256);
  assert.deepEqual(downloaded, source);
  check(true, 'The primary static Export action returns exact registered PNG bytes and SHA-256 through the injected fixture resolver.');

  const sourceUnchanged = await page.evaluate(() => window.__extension.sourceArtworkJson === JSON.stringify(window.__extension.fixture.sourceArtwork));
  check(sourceUnchanged, 'The isolated fixture flow does not mutate its source Artwork record.');
  assert.deepEqual(errors, []);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, `${JSON.stringify({
    revision: 99,
    fixture: { artworkId: setup.fixtureArtworkId, characterId: setup.fixtureCharacterId, scope: 'fixture-only', sourceSha256: setup.sourceSha256 },
    query: { text: '测试奶油白猫新外观', seriesId: 'animals', sort: 'curated', matchIds: setup.matchIds },
    checks,
    browser: { name: 'Google Chrome', version: browser.version(), viewport: { width: 1280, height: 800 }, origin },
    requestedPaths: requests,
    errors
  }, null, 2)}\n`);
  console.log(`Character extension browser flow: ${checks.length} checks passed.`);
} finally {
  await context.close();
  await browser.close();
  await vite.close();
}
