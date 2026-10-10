import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {ARTWORKS, PREVIEW_ARTWORKS, getArtwork, getAsset, CATALOG_REVISION} from '../dist/studio-artwork-catalog.js?v=98';
import {promptFor} from '../dist/studio-prompt.js?v=98';
import {SCENE_ART, SCENE_CHARACTERS} from '../dist/studio-scenes.js?v=98';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'design/acceptance/current-20261009-v98/browser');
const playwrightPath = process.env.DOTS_PLAYWRIGHT_MODULE || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightPath));
const manifest = JSON.parse(await fs.readFile(path.join(root, 'design/static-publish-manifest.json')));
const sourceSnapshot = await Promise.all(manifest.files.map(async file => ({
  path: file,
  sha256: crypto.createHash('sha256').update(await fs.readFile(path.resolve(root, file))).digest('hex')
})));
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const sceneAssetFile = asset => path.join(root, 'dist', asset.src.replace(/^\.?\//, ''));
const sceneKey = entry => entry.artworkId + '@' + entry.artworkVersion;
const sceneByKey = new Map(SCENE_CHARACTERS.map(entry => [sceneKey(entry), entry]));
const desktopEntries = SCENE_CHARACTERS.filter(entry => entry.desktop);
const mobileEntries = SCENE_CHARACTERS.filter(entry => entry.mobile);
const mobileKeys = mobileEntries.map(sceneKey).sort();
const desktopKeys = desktopEntries.map(sceneKey).sort();
const originalPaths = new Set(ARTWORKS.map(artwork => new URL(getAsset(artwork.assetRefs.original).path, 'http://localhost/').pathname));

assert.equal(desktopEntries.length, 17, 'The enriched terrace has 15 original identities plus two new preview companions.');
assert.equal(sceneByKey.size, SCENE_CHARACTERS.length, 'Scene hotspot artwork ID and version pairs are unique.');
for (const entry of SCENE_CHARACTERS) {
  const artwork = getArtwork(entry.artworkId);
  assert.ok(artwork, 'Scene hotspot resolves to a registered artwork: ' + sceneKey(entry));
  assert.equal(artwork.version, entry.artworkVersion, 'Scene hotspot uses the registered artwork version: ' + sceneKey(entry));
}
for (const layout of Object.keys(SCENE_ART)) {
  const asset = SCENE_ART[layout];
  assert.ok(asset && asset.src && asset.width > 0 && asset.height > 0 && asset.sha256, 'Scene ' + layout + ' artwork metadata is complete.');
  const bytes = await fs.readFile(sceneAssetFile(asset));
  assert.equal(sha256(bytes), asset.sha256, 'Scene ' + layout + ' image matches its registered hash.');
}

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const context = await browser.newContext({
  viewport: {width: 1440, height: 900},
  acceptDownloads: true,
  permissions: ['clipboard-read', 'clipboard-write']
});
await context.addInitScript(() => {
  try { localStorage.clear(); } catch { /* Storage-denied behavior is tested in an isolated context. */ }
});
const page = await context.newPage();
const errors = [];
const checks = [];
const media = [];
const downloads = [];
const sceneViewports = {};
const base = process.env.DOTS_BASE_URL || 'http://127.0.0.1:5180/';
page.on('pageerror', error => errors.push(error.message));
page.on('response', response => {
  if (/\.(png|webp|gif|mp4)(?:\?|$)/i.test(response.url())) {
    media.push({
      url: response.url(),
      status: response.status(),
      bytes: Number(response.headers()['content-length'] || 0)
    });
  }
});

const check = name => {
  checks.push(name);
  console.log('PASS', name);
};
const sceneLayoutForWidth = (width,height=900) => width <= 600 ? 'mobile' : (SCENE_ART.tablet&&width/height<1.1?'tablet':'desktop');
const sceneAssetForWidth = (width,height=900) => SCENE_ART[sceneLayoutForWidth(width,height)];
const sceneAssetPath = asset => new URL(asset.src, base).pathname;

async function ready(route) {
  await page.goto(base + (route || '#/home'));
  await page.waitForFunction(revision => document.documentElement.dataset.catalogRevision === revision, CATALOG_REVISION);
}
async function loadedDetail(targetPage = page) {
  await targetPage.waitForFunction(() => ['ready', 'image-error'].includes(document.querySelector('.artwork-detail')?.dataset.state));
}
async function waitForSceneAsset(asset, targetPage = page) {
  await targetPage.waitForFunction(expected => {
    const image = document.querySelector('img.terrace-art');
    return image && image.complete && image.naturalWidth === expected.width
      && image.naturalHeight === expected.height
      && new URL(image.currentSrc || image.src, location.href).pathname === expected.pathname;
  }, {width: asset.width, height: asset.height, pathname: sceneAssetPath(asset)});
}
async function closeWithX(targetPage = page) {
  await targetPage.locator('#overlayClose').click();
  await targetPage.waitForFunction(() => !document.querySelector('dialog').open);
}
async function backToSource(hash, targetPage = page) {
  await targetPage.locator('#overlayBack').click();
  await targetPage.waitForFunction(expected => location.hash === expected && !document.querySelector('dialog').open, hash);
}
async function navigatePage(name, width, targetPage = page) {
  if (width <= 600) {
    if (await targetPage.locator('#menuToggle').getAttribute('aria-expanded') !== 'true') {
      await targetPage.locator('#menuToggle').click();
    }
    await targetPage.locator('#mobileMenu a[data-page="' + name + '"]').click();
  } else {
    await targetPage.locator('.studio-nav a[data-page="' + name + '"]').click();
  }
  await targetPage.waitForFunction(screen => document.body.dataset.screen === screen, name);
}
async function screenshot(name, targetPage = page) {
  await targetPage.evaluate(async () => {
    await Promise.all([...document.images]
      .filter(image => image.getClientRects().length)
      .map(image => image.decode().catch(() => {})));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await targetPage.screenshot({path: path.join(dir, name + '.png'), fullPage: false});
}
async function noOverflow(targetPage = page) {
  assert.ok(await targetPage.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Page must not overflow horizontally.');
}
async function inspectScene(width, height, targetPage = page) {
  const asset = sceneAssetForWidth(width,height);
  const layout = sceneLayoutForWidth(width,height);
  await waitForSceneAsset(asset, targetPage);
  await targetPage.waitForFunction(expected=>{
    const stage=document.querySelector('.terrace-stage').getBoundingClientRect(),canvas=document.querySelector('.scene-canvas').getBoundingClientRect();
    const w=Math.max(stage.width,stage.height*expected.width/expected.height),h=w*expected.height/expected.width;
    return Math.abs(canvas.width-w)<1&&Math.abs(canvas.height-h)<1&&Math.abs(canvas.left-(stage.left+(stage.width-w)/2))<1&&Math.abs(canvas.top-(stage.top+(stage.height-h)/2))<1;
  },asset);
  const snapshot = await targetPage.evaluate(() => {
    const stage = document.querySelector('.terrace-stage');
    const canvas = document.querySelector('.scene-canvas');
    const image = document.querySelector('img.terrace-art');
    const rect = element => {
      const value = element.getBoundingClientRect();
      return {left: value.left, top: value.top, right: value.right, bottom: value.bottom, width: value.width, height: value.height};
    };
    const all = [...document.querySelectorAll('.scene-character')];
    const visible = all.filter(button => {
      const style = getComputedStyle(button);
      const box = button.getBoundingClientRect();
      return !button.hidden && style.display !== 'none' && style.visibility !== 'hidden'
        && box.width > 0 && box.height > 0 && button.getClientRects().length > 0;
    });
    return {
      stage: rect(stage),
      canvas: rect(canvas),
      image: rect(image),
      fit: getComputedStyle(image).objectFit,
      src: new URL(image.currentSrc || image.src, location.href).pathname,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      domCount: all.length,
      visible: visible.map(button => {
        const box = button.getBoundingClientRect();
        const centerX = box.left + box.width / 2;
        const centerY = box.top + box.height / 2;
        const hit = document.elementFromPoint(centerX, centerY);
        return {
          artworkId: button.dataset.artworkId,
          artworkVersion: button.dataset.version,
          label: button.getAttribute('aria-label') || button.textContent.trim(),
          width: box.width,
          height: box.height,
          centerX,
          centerY,
          centerHit: hit === button || button.contains(hit),
          inCanvas: canvas?.contains(button) || false
        };
      })
    };
  });
  assert.equal(snapshot.src, sceneAssetPath(asset), 'The correct ' + layout + ' scene image is active at ' + width + ' CSS px.');
  assert.equal(snapshot.naturalWidth, asset.width, 'Scene image width matches registered ' + layout + ' metadata.');
  assert.equal(snapshot.naturalHeight, asset.height, 'Scene image height matches registered ' + layout + ' metadata.');
  assert.equal(snapshot.fit, 'cover', 'Scene image uses object-cover at ' + width + ' CSS px.');
  assert.ok(snapshot.canvas, 'The scene canvas exists at ' + width + ' CSS px.');
  assert.equal(snapshot.domCount, snapshot.visible.length, 'Only visible, applicable scene hotspots are present in the DOM at ' + width + ' CSS px.');
  assert.ok(snapshot.visible.length > 0, 'The scene has selectable characters at ' + width + ' CSS px.');
  const expectedEntries = SCENE_CHARACTERS.filter(entry => entry[layout]);
  const expected = new Map(expectedEntries.map(entry => [sceneKey(entry), entry]));
  const actualKeys = snapshot.visible.map(sceneKey).sort();
  assert.equal(new Set(actualKeys).size, actualKeys.length, 'No duplicate scene hotspot IDs and versions at ' + width + ' CSS px.');
  for (const target of snapshot.visible) {
    const key = sceneKey(target);
    assert.ok(expected.has(key), 'Visible hotspot maps to the ' + layout + ' source manifest: ' + key);
    assert.ok(target.label, 'Visible hotspot has a localized accessible label: ' + key);
    assert.ok(target.inCanvas, 'Hotspot belongs to the image-mapped scene canvas: ' + key);
    assert.ok(target.width >= 44 && target.height >= 44, 'Scene target is at least 44 by 44 CSS px: ' + key);
    assert.ok(target.centerX >= snapshot.stage.left && target.centerX <= snapshot.stage.right
      && target.centerY >= snapshot.stage.top && target.centerY <= snapshot.stage.bottom,
    'Hotspot center remains inside the visible scene crop: ' + key);
    assert.ok(target.centerHit, 'Hotspot center is not covered by another layer: ' + key);
    assert.ok(sceneByKey.has(key), 'Hotspot artwork ID and version are registered: ' + key);
  }
  if (layout === 'mobile' && height >= 700) {
    assert.deepEqual(actualKeys, mobileKeys, 'Mobile DOM includes exactly the non-null mobile hotspots at ' + width + ' CSS px.');
  } else if (width === 1440) {
    assert.deepEqual(actualKeys, desktopKeys, 'The 1440px desktop scene includes all 17 registered desktop hotspots.');
  }
  const result = {layout, width, height, asset: asset.src, sha256: asset.sha256, targets: snapshot.visible.map(sceneKey)};
  sceneViewports[width + 'x' + height] = result;
  return result;
}

await fs.mkdir(dir, {recursive: true});
await fs.mkdir(path.join(dir, 'downloads'), {recursive: true});

try {
  await ready('#/gallery');
  assert.equal(await page.locator('#artworkGrid .artwork-card').count(), 15);
  await page.waitForFunction(() => [...document.querySelectorAll('#artworkGrid img')]
    .filter(image => image.getBoundingClientRect().top < innerHeight)
    .every(image => image.complete && image.naturalWidth > 0));
  const galleryMedia = media.slice();
  assert.ok(!galleryMedia.some(item => originalPaths.has(new URL(item.url).pathname)),
    'Gallery loads optimized posters rather than original character PNGs.');
  check('gallery loads optimized posters, not all original PNGs');

  const gallerySearch = async () => await page.locator('#navSearch').isVisible() ? '#navSearch' : '#gallerySearch';
  const activeGallerySearch = await gallerySearch();
  assert.equal(activeGallerySearch, '#navSearch', 'Desktop gallery uses the header search field.');
  assert.equal(await page.locator('#gallerySearch').isVisible(), false, 'Desktop does not duplicate the gallery search field.');
  await page.locator(activeGallerySearch).fill('rose');
  assert.ok(await page.locator('#artworkGrid .artwork-card').count() > 0);
  await page.locator(activeGallerySearch).fill('does-not-exist-zzz');
  assert.equal(await page.locator('#artworkGrid .artwork-card').count(), 0);
  assert.ok(await page.locator('#galleryEmpty').isVisible());
  await page.locator('#clearSearch').click();
  assert.equal(await page.locator('#artworkGrid .artwork-card').count(), 15);
  check('search, no results and clear search');

  const seriesButtons = page.locator('#gallerySeries button');
  const seriesButton = seriesButtons.nth(1);
  const seriesId = await seriesButton.getAttribute('data-series-id');
  const expectedSeriesCount = ARTWORKS.filter(artwork => artwork.seriesId === seriesId || artwork.seriesIds?.includes(seriesId)).length;
  await seriesButton.click();
  assert.equal(await page.locator('#artworkGrid .artwork-card').count(), expectedSeriesCount);
  await page.locator(activeGallerySearch).fill('headphones');
  assert.equal(await page.locator('#artworkGrid .artwork-card').count(), 1);
  const sourceHash = new URL(page.url()).hash;
  const trigger = page.locator('#artworkGrid .artwork-select').first();
  const artworkId = await trigger.getAttribute('data-artwork-id');
  const artworkVersion = await trigger.getAttribute('data-version');
  await trigger.click();
  await loadedDetail();
  assert.equal(await page.locator('.artwork-detail').getAttribute('data-artwork-id'), artworkId);
  assert.equal(await page.locator('.artwork-detail').getAttribute('data-version'), artworkVersion);
  assert.equal(await page.locator('#pageShell').evaluate(element => element.inert), true);
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('dialog').open);
  assert.equal(new URL(page.url()).hash, sourceHash);
  await page.waitForFunction(id => document.activeElement.id === 'card-' + id, artworkId);
  await page.goForward();
  await loadedDetail();
  assert.equal(await page.locator('.artwork-detail').getAttribute('data-artwork-id'), artworkId);
  check('series AND search, shared details, Escape/source query/focus and forward');

  await page.locator('.artwork-detail__copy-original').click();
  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  assert.equal(clipboard, promptFor(ARTWORKS.find(artwork => artwork.id === artworkId), {language: 'en'}));
  check('real browser clipboard equals original English Prompt');

  const selectedArtwork = ARTWORKS.find(artwork => artwork.id === artworkId);
  const selectedAsset = getAsset(selectedArtwork.assetRefs.original);
  const originalDownload = await Promise.all([
    page.waitForEvent('download'),
    page.locator('.artwork-detail__download-original').click()
  ]).then(([download]) => download);
  const originalPath = await originalDownload.path();
  const downloadedBytes = await fs.readFile(originalPath);
  assert.equal(sha256(downloadedBytes), selectedAsset.sha256);
  assert.equal(downloadedBytes.length, selectedAsset.byteSize);
  const savedOriginal = path.join(dir, 'downloads', selectedArtwork.id + '.png');
  await originalDownload.saveAs(savedOriginal);
  downloads.push({artworkId: selectedArtwork.id, file: path.relative(root, savedOriginal), sha256: selectedAsset.sha256, byteSize: downloadedBytes.length});
  check('real download preserves registered original bytes');

  assert.equal(await page.locator('.artwork-detail__versions').isVisible(), false);
  const editSummary = page.locator('.artwork-detail__create-version-summary');
  await editSummary.click();
  const selects = page.locator('.artwork-detail__create-version select');
  assert.ok(await selects.count() > 0);
  await selects.first().selectOption('replace');
  const replacement = page.locator('.artwork-detail__create-version input').first();
  await replacement.fill('a little silver star');
  const titleBefore = await page.locator('.artwork-detail__title').textContent();
  await editSummary.click();
  await editSummary.click();
  assert.equal(await replacement.inputValue(), 'a little silver star');
  assert.equal(await page.locator('.artwork-detail__title').textContent(), titleBefore);
  check('collapsed edit retains replacement text without changing original title');

  await closeWithX();
  await page.locator('#clearFilters').click();
  await page.locator('#languagePreference').click();
  assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN');
  await page.locator('#artworkGrid .artwork-select').first().click();
  await loadedDetail();
  await page.locator('.artwork-detail__copy-original').click();
  const chineseArtworkId = await page.locator('.artwork-detail').getAttribute('data-artwork-id');
  assert.equal(await page.evaluate(() => navigator.clipboard.readText()),
    promptFor(ARTWORKS.find(artwork => artwork.id === chineseArtworkId), {language: 'zh'}));
  check('Chinese interface and Prompt use same selected version');
  await closeWithX();
  await page.locator('#languagePreference').click();

  for (const artwork of [...ARTWORKS,...PREVIEW_ARTWORKS]) {
    await ready('#/artwork/' + artwork.id + '?v=' + artwork.version);
    await loadedDetail();
    assert.equal(await page.locator('.artwork-detail').getAttribute('data-artwork-id'), artwork.id);
    assert.equal(await page.locator('.artwork-detail').getAttribute('data-version'), artwork.version);
    const asset = getAsset(artwork.assetRefs.original);
    assert.equal(await page.locator('.artwork-detail__image').evaluate(image => image.naturalWidth), asset.width);
    if (!downloads.some(item => item.artworkId === artwork.id)) {
      const pendingDownload = page.waitForEvent('download');
      await page.locator('.artwork-detail__download-original').click();
      const download = await pendingDownload;
      const file = path.join(dir, 'downloads', artwork.id + '.png');
      await download.saveAs(file);
      const bytes = await fs.readFile(file);
      assert.equal(sha256(bytes), asset.sha256);
      assert.equal(bytes.length, asset.byteSize);
      downloads.push({artworkId: artwork.id, file: path.relative(root, file), sha256: asset.sha256, byteSize: bytes.length});
    }
  }
  check('15 approved and two pending preview detail URLs return their own exact original files');

  await page.reload();
  await loadedDetail();
  await closeWithX();
  assert.equal(new URL(page.url()).hash, '#/gallery');
  await page.waitForFunction(() => document.activeElement.id === 'galleryTitle');
  check('direct detail reload closes safely to gallery');

  const unknownArtwork = ARTWORKS[0];
  for (const route of [
    '#/artwork/no-such-artwork?v=v1',
    '#/artwork/' + unknownArtwork.id + '?v=no-such-version',
    '#/game'
  ]) {
    await ready(route);
    assert.ok(await page.locator('#notFoundPortal').isVisible());
    assert.equal(await page.locator('dialog').evaluate(dialog => dialog.open), false);
  }
  check('unknown IDs, versions and retired routes show recovery');

  const viewports = [[1440, 900], [390, 844], [320, 700], [768, 1024]];
  for (const [width, height] of viewports) {
    await page.setViewportSize({width, height});
    await ready('#/home');
    await waitForSceneAsset(sceneAssetForWidth(width,height));
    await noOverflow();
    const homeGeometry=await page.evaluate(()=>{const hero=document.querySelector('.home-hero').getBoundingClientRect(),series=document.querySelector('#homeSeries').getBoundingClientRect();return{height:hero.height,top:hero.top,bottom:hero.bottom,seriesTop:series.top,seriesBottom:series.bottom,scrollHeight:document.documentElement.scrollHeight,viewport:innerHeight,featured:!!document.querySelector('#featuredCards,.featured-section'),inside:document.querySelector('.home-hero').contains(document.querySelector('#homeSeries')),footerHidden:document.querySelector('.site-footer').hidden}});
    assert.equal(homeGeometry.featured,false,'Featured Characters is removed from the DOM.');
    assert.equal(homeGeometry.inside,true,'Categories belong inside the scenic homepage.');
    assert.equal(homeGeometry.footerHidden,true,'Home ends with the scene rather than an external footer.');
    assert.ok(Math.abs(homeGeometry.height-height)<=1&&Math.abs(homeGeometry.top)<=1,'Scene fills the browser viewport.');
    assert.ok(homeGeometry.scrollHeight<=height+1,'No separate below-scene home content or scroll gap.');
    assert.ok(homeGeometry.seriesTop>0&&homeGeometry.seriesBottom<=height,'Categories stay on the background and within the viewport.');
    const report = await inspectScene(width, height);
    await screenshot('home-' + width);
    if (width === 390 || width === 320) {
      assert.equal(await page.locator('#navSearch').isVisible(), false, 'Mobile hides the desktop header search field.');
    }
    const firstTarget = report.targets[0];
    const source = new URL(page.url()).hash;
    const expected = sceneByKey.get(firstTarget);
    const target = page.locator('.scene-character').first();
    await target.click();
    await loadedDetail();
    assert.equal(await page.locator('.artwork-detail').getAttribute('data-artwork-id'), expected.artworkId);
    assert.equal(await page.locator('.artwork-detail').getAttribute('data-version'), expected.artworkVersion);
    if (width === 390) {
      const ctaBounds = await page.locator('.artwork-detail__actions .artwork-detail__button').evaluateAll(buttons =>
        buttons.map(button => ({top: button.getBoundingClientRect().top, bottom: button.getBoundingClientRect().bottom})));
      assert.equal(ctaBounds.length, 3);
      assert.ok(ctaBounds.every(bounds => bounds.top >= 0 && bounds.bottom <= height),
        'All three primary detail actions fit in the first 390 by 844 viewport.');
    }
    await screenshot('detail-' + width);
    await noOverflow();
    await backToSource(source);
    await page.waitForFunction(id => document.activeElement?.matches('.scene-character')
      && document.activeElement.dataset.artworkId === id, expected.artworkId);
    await navigatePage('gallery', width);
    if (width === 768) {
      assert.ok(await page.locator('#gallerySearch').isVisible(), '768px tablet uses the page search field.');
      assert.equal(await page.locator('#navSearch').isVisible(), false, '768px tablet hides the desktop header search field.');
    }
    await screenshot('gallery-' + width);
    await noOverflow();
    await navigatePage('guide', width);
    await screenshot('guide-' + width);
    await noOverflow();
  }
  check('four viewport home/gallery/detail/guide screenshots, scene identity mapping, target sizes and overflow');
  await ready('#/home');
  for(const [width,height] of [[1920,1080],[1100,700],[844,600],[390,568],[844,390]]){
    await page.setViewportSize({width,height});
    await inspectScene(width,height);await noOverflow();
    assert.ok(await page.evaluate(()=>Math.abs(document.querySelector('.home-hero').getBoundingClientRect().height-innerHeight)<1&&document.documentElement.scrollHeight<=innerHeight+1),'Wide and short browser windows keep a single full-viewport homepage.');
  }
  check('continuous resize also covers 1920, intermediate desktop, and short landscape windows');


  await page.setViewportSize({width: 1440, height: 900});
  await ready('#/home');
  const desktopBeforeResize = (await inspectScene(1440, 900)).targets;
  await page.setViewportSize({width: 390, height: 844});
  const mobileAfterResize = (await inspectScene(390, 844)).targets;
  assert.deepEqual([...mobileAfterResize].sort(), mobileKeys, 'Resizing in place activates exactly the mobile scene entries.');
  assert.ok(mobileAfterResize.every(key => desktopBeforeResize.includes(key)),
    'Mobile and desktop scene layouts preserve the same character IDs and artwork versions.');
  await page.setViewportSize({width: 1440, height: 900});
  const desktopAfterResize = (await inspectScene(1440, 900)).targets;
  assert.deepEqual([...desktopAfterResize].sort(), [...desktopBeforeResize].sort(), 'Resizing back restores the same desktop hotspot IDs and versions.');
  check('switching between desktop and mobile preserves scene artwork identity and versions');

  await page.setViewportSize({width: 1440, height: 900});
  await ready('#/home');
  for(const [layout,width,height] of [['desktop',1440,900],['tablet',768,1024],['mobile',390,844]]){
    await page.setViewportSize({width,height});await inspectScene(width,height);
    const folder=layout==='desktop'?'outlines':'outlines-'+layout;
    await fs.mkdir(path.join(dir,folder),{recursive:true});
    for(const entry of SCENE_CHARACTERS.filter(item=>item[layout])){
      const target=page.locator('.scene-character[data-artwork-id="'+entry.artworkId+'"]');
      await target.hover();
      const shape=page.locator('.scene-outline[data-active]');
      assert.equal(await shape.count(),1,'Each painted character has one hover contour in '+layout);
      assert.equal(await shape.getAttribute('data-artwork-id'),entry.artworkId,'Hover selects the identity under the cursor in '+layout);
      await page.waitForFunction(id=>getComputedStyle(document.querySelector('.scene-outline[data-active][data-artwork-id="'+id+'"]')).opacity==='1',entry.artworkId);
      const bounds=await shape.boundingBox();
      const x=Math.max(0,bounds.x-22),y=Math.max(0,bounds.y-35);
      await page.screenshot({path:path.join(dir,folder,entry.artworkId+'.png'),clip:{x,y,width:Math.min(width-x,bounds.width+44),height:Math.min(height-y,bounds.height+70)}});
    }
  }
  check('all 17 desktop, 17 tablet and 13 mobile silhouettes select the matching identity; actual browser crops saved');
  await page.setViewportSize({width:1440,height:900});await inspectScene(1440,900);
  const keyboardTarget = page.locator('.scene-character').first();
  await keyboardTarget.hover();
  assert.equal(await page.locator('dialog').evaluate(dialog => dialog.open), false);
  const fixedBefore=await keyboardTarget.boundingBox();
  const activeOutline=page.locator('.scene-outline[data-active]');
  assert.equal(await activeOutline.count(),1,'Hover highlights exactly one character.');
  assert.equal(await activeOutline.getAttribute('data-artwork-id'),await keyboardTarget.getAttribute('data-artwork-id'));
  assert.ok((await activeOutline.locator('path').first().getAttribute('d')).length>100,'Highlight uses a traced silhouette, not a target rectangle.');
  const offsetBefore=await activeOutline.locator('.outline-light').evaluate(node=>getComputedStyle(node).strokeDashoffset);
  await page.waitForFunction(before=>getComputedStyle(document.querySelector('.scene-outline[data-active] .outline-light')).strokeDashoffset!==before,offsetBefore);
  assert.deepEqual(await keyboardTarget.boundingBox(),fixedBefore,'Outline animation never moves the hit target.');
  await screenshot('home-hover-outline-1440');
  await page.locator('#motionPreference').click();
  await keyboardTarget.hover();
  assert.equal(await activeOutline.locator('.outline-light').evaluate(node=>getComputedStyle(node).animationName),'none','Reduced motion leaves a static contour.');
  await screenshot('home-reduced-motion-outline-1440');
  await page.locator('#motionPreference').click();
  await keyboardTarget.focus();
  await screenshot('home-keyboard-outline-1440');
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('.scene-outline[data-active]').count(),0,'Opening details clears scene highlights.');
  await loadedDetail();
  const keyboardId = await page.locator('.artwork-detail').getAttribute('data-artwork-id');
  const keyboardVersion = await page.locator('.artwork-detail').getAttribute('data-version');
  await backToSource('#/home');
  await page.waitForFunction(id => document.activeElement?.matches('.scene-character')
    && document.activeElement.dataset.artworkId === id, keyboardId);
  assert.equal(sceneByKey.get(keyboardId + '@' + keyboardVersion)?.artworkVersion, keyboardVersion);
  await page.locator('.scene-character').first().press('Space');
  await loadedDetail();
  assert.equal(await page.locator('.artwork-detail').getAttribute('data-artwork-id'), keyboardId);
  await closeWithX();
  check('hover does not open details; keyboard Enter/Space and Back restore scene focus');

  await page.setViewportSize({width: 390, height: 844});
  await ready('#/home');
  assert.ok(await page.locator('#menuToggle').isVisible());
  await page.locator('#menuToggle').click();
  assert.equal(await page.locator('#menuToggle').getAttribute('aria-expanded'), 'true');
  assert.ok(await page.locator('#mobileMenu').isVisible());
  assert.ok(await page.locator('#mobileMenu #languagePreference').isVisible());
  assert.ok(await page.locator('#mobileMenu #motionPreference').isVisible());
  await page.locator('#mobileMenu #languagePreference').click();
  assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN');
  assert.ok(await page.locator('#mobileMenu').isVisible(), 'Changing language leaves the open menu usable.');
  const motionPreference = page.locator('#mobileMenu #motionPreference');
  const motionBefore = await page.locator('html').getAttribute('data-reduced-motion');
  await motionPreference.click();
  const motionAfter = await page.locator('html').getAttribute('data-reduced-motion');
  assert.notEqual(motionAfter, motionBefore);
  await motionPreference.click();
  assert.equal(await page.locator('html').getAttribute('data-reduced-motion'), motionBefore);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#mobileMenu').isVisible(), false);
  await page.waitForFunction(() => document.activeElement.id === 'menuToggle');
  await page.locator('#menuToggle').click();
  await page.locator('#mobileMenu a[data-page="gallery"]').click();
  await page.waitForFunction(() => document.body.dataset.screen === 'gallery' && location.hash === '#/gallery');
  assert.equal(await page.locator('#mobileMenu').isVisible(), false);
  await page.locator('#menuToggle').click();
  await page.locator('#mobileMenu #languagePreference').click();
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  await page.keyboard.press('Escape');
  check('mobile menu opens and closes, navigates, localizes and exposes motion preference');

  const failedContext = await browser.newContext({viewport: {width: 390, height: 844}});
  await failedContext.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {value: {writeText: () => Promise.reject(new Error('Denied'))}});
    document.execCommand = () => false;
    window.open = () => null;
    Object.defineProperty(window, 'localStorage', {get: () => { throw new Error('Denied'); }});
  });
  const failedPage = await failedContext.newPage();
  failedPage.on('pageerror', error => errors.push(error.message));
  const failedOriginalPath = new URL(getAsset(ARTWORKS[0].assetRefs.original).path, base).pathname;
  await failedPage.route(url => url.pathname === failedOriginalPath, route => route.fulfill({status: 404, body: 'missing'}));
  await failedPage.goto(base + '#/artwork/' + ARTWORKS[0].id + '?v=' + ARTWORKS[0].version);
  await failedPage.waitForFunction(() => document.querySelector('.artwork-detail')?.dataset.state === 'image-error');
  await failedPage.locator('.artwork-detail__copy-original').click();
  assert.ok(await failedPage.locator('.artwork-detail__copy-fallback').isVisible());
  await failedPage.locator('.artwork-detail__open-chatgpt-original').click();
  assert.ok(await failedPage.locator('.artwork-detail__copy-fallback').isVisible());
  await failedPage.screenshot({path: path.join(dir, 'detail-failure-390.png')});
  await failedContext.close();
  check('storage denied, original 404, clipboard denied and popup blocked retain text fallback');

  const touchContext = await browser.newContext({viewport: {width: 390, height: 844}, hasTouch: true, isMobile: true});
  const touchPage = await touchContext.newPage();
  touchPage.on('pageerror', error => errors.push(error.message));
  await touchPage.goto(base + '#/home');
  await touchPage.waitForFunction(() => document.querySelector('.scene-character'));
  const touchTarget = touchPage.locator('.scene-character').first();
  const touchId = await touchTarget.getAttribute('data-artwork-id');
  const touchVersion = await touchTarget.getAttribute('data-version');
  await touchTarget.tap();
  await touchPage.waitForFunction(() => document.querySelector('dialog').open);
  await loadedDetail(touchPage);
  assert.equal(await touchPage.locator('.artwork-detail').getAttribute('data-artwork-id'), touchId);
  assert.equal(await touchPage.locator('.artwork-detail').getAttribute('data-version'), touchVersion);
  await touchContext.close();
  check('single touch opens the same artwork version without hover');

  const resourceContext = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
  const resourcePage = await resourceContext.newPage();
  resourcePage.on('pageerror', error => errors.push(error.message));
  const mobileScenePath = sceneAssetPath(SCENE_ART.mobile);
  let sceneRequests = 0;
  await resourcePage.route(url => url.pathname === mobileScenePath, route => {
    sceneRequests += 1;
    return sceneRequests === 1
      ? route.fulfill({status: 404, body: 'missing scene art'})
      : route.continue();
  });
  await resourcePage.goto(base + '#/home');
  await resourcePage.waitForFunction(() => document.querySelector('#heroScene .scene-failed'));
  assert.ok(await resourcePage.locator('#heroScene .scene-error').isVisible());
  assert.equal(await resourcePage.locator('html').getAttribute('data-reduced-motion'), 'true');
  const failedTargets = await resourcePage.locator('#heroScene .scene-character').evaluateAll(buttons =>
    buttons.filter(button => !button.hidden && button.getClientRects().length).map(button => ({
      id: button.dataset.artworkId,
      version: button.dataset.version,
      label: button.getAttribute('aria-label')
    })));
  assert.deepEqual(failedTargets.map(item => item.id + '@' + item.version).sort(), mobileKeys);
  assert.ok(failedTargets.every(item => item.label));
  const failedTarget = resourcePage.locator('#heroScene .scene-character').first();
  const failedArtworkId = await failedTarget.getAttribute('data-artwork-id');
  const failedArtworkVersion = await failedTarget.getAttribute('data-version');
  await failedTarget.click();
  await loadedDetail(resourcePage);
  assert.equal(await resourcePage.locator('.artwork-detail').getAttribute('data-artwork-id'), failedArtworkId);
  assert.equal(await resourcePage.locator('.artwork-detail').getAttribute('data-version'), failedArtworkVersion);
  await resourcePage.locator('#overlayBack').click();
  await resourcePage.waitForFunction(() => !document.querySelector('dialog').open);
  await resourcePage.locator('.scene-error button').click();
  await resourcePage.waitForFunction(() => {
    const image = document.querySelector('img.terrace-art');
    return image?.complete && image.naturalWidth > 0 && !document.querySelector('#heroScene .scene-failed');
  });
  assert.ok(sceneRequests >= 2, 'Retry requests the same selected scene image again.');
  assert.equal(await resourcePage.locator('.scene-error').isVisible(), false);
  check('mobile scene failure keeps labeled hotspots selectable and retry restores the same image under reduced motion');

  await navigatePage('gallery', 390, resourcePage);
  const firstPosterPath = new URL(getAsset(ARTWORKS[0].assetRefs.poster).path, base).pathname;
  let posterRequests = 0, failPoster = true;
  await resourcePage.route(url => url.pathname === firstPosterPath, route => {
    posterRequests += 1;
    return failPoster
      ? route.fulfill({status: 404, body: 'missing poster'})
      : route.continue();
  });
  await resourcePage.reload();
  await resourcePage.waitForFunction(() => {
    const error = document.querySelector('#artworkGrid .card-image-error');
    return error && !error.hidden;
  });
  failPoster = false;
  await resourcePage.locator('#artworkGrid .card-retry').first().click();
  await resourcePage.waitForFunction(() => document.querySelector('#artworkGrid .card-image-error')?.hidden);
  assert.ok(posterRequests >= 2);
  await resourceContext.close();
  check('failed poster retry uses the same character');

  assert.deepEqual(errors, []);
  check('no uncaught page errors');
  for (const source of sourceSnapshot) {
    assert.equal(sha256(await fs.readFile(path.resolve(root, source.path))), source.sha256,
      'Source changed during browser QA: ' + source.path);
  }
  const report = {
    sourceSnapshot,
    revision: 98,
    catalogRevision: CATALOG_REVISION,
    browserVersion: browser.version(),
    status: 'passed',
    checks,
    downloads,
    scene: {
      desktop: SCENE_ART.desktop,
      mobile: SCENE_ART.mobile,
      tablet: SCENE_ART.tablet,
      characterEntries: SCENE_CHARACTERS.length,
      viewportMappings: sceneViewports
    },
    galleryMedia,
    galleryMediaBytes: galleryMedia.reduce((total, item) => total + item.bytes, 0),
    productionAnimationCount: 0,
    productionVariants: 0,
    screenshots: 'real headless Chrome; simulated CSS viewports, not physical phones',
    errors
  };
  await fs.writeFile(path.join(dir, 'report.json'), JSON.stringify(report, null, 2) + '\n');
} catch (error) {
  await page.screenshot({path: path.join(dir, 'failed-state.png')}).catch(() => {});
  await fs.writeFile(path.join(dir, 'failure.json'), JSON.stringify({
    message: error.message,
    stack: error.stack,
    checks,
    errors,
    sceneViewports
  }, null, 2));
  throw error;
} finally {
  await browser.close();
}
