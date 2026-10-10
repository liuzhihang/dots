import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {createServer} from 'vite';

const evidenceDir=path.resolve(process.env.DOTS_EVIDENCE_DIR||'design/acceptance/current-20261010-v99/cr-polish-20261011/tests/history');
await fs.mkdir(evidenceDir,{recursive:true});

const {chromium} = await import(pathToFileURL(process.env.DOTS_PLAYWRIGHT_MODULE
  || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'));
const vite = await createServer({
  configFile: new URL('../vite.config.mjs', import.meta.url).pathname,
  server: {host: '127.0.0.1', port: 0, strictPort: true, hmr: false}
});
await vite.listen();
const origin = `http://127.0.0.1:${vite.httpServer.address().port}`;
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});

async function newDirtyPage() {
  const page = await browser.newPage({viewport: {width: 1280, height: 800}});
  await page.addInitScript(() => {
    window.dotsFastForwardOnBack = false;
    window.dotsForwardTriggered = false;
    window.addEventListener('popstate', () => {
      if (window.dotsFastForwardOnBack && location.hash === '#/') {
        window.dotsFastForwardOnBack = false;
        window.dotsForwardTriggered = true;
        history.forward();
      }
    });
  });
  await page.goto(`${origin}/#/`, {waitUntil: 'networkidle'});
  await page.locator('#card-candidate-dots-20261005').click();
  await page.locator('.artwork-detail__additional-direction').fill('Keep this Draft: 松果 🍂');
  return page;
}

async function newPageWithGalleryFuture() {
  const page = await browser.newPage({viewport: {width: 1280, height: 800}});
  await page.goto(`${origin}/#/`, {waitUntil: 'networkidle'});
  await page.locator('#card-candidate-dots-20261005').click();
  await page.waitForFunction(() => location.hash.startsWith('#/artwork/')
    && document.querySelector('#studioOverlay')?.open
    && history.state?.dotsIndex === 1);
  await page.evaluate(() => { location.hash = '#/?series=grok'; });
  await page.waitForFunction(() => location.hash === '#/?series=grok'
    && document.body.dataset.screen === 'gallery'
    && history.state?.dotsIndex === 2);
  await page.evaluate(() => history.back());
  await page.waitForFunction(() => location.hash.startsWith('#/artwork/')
    && document.querySelector('#studioOverlay')?.open
    && history.state?.dotsIndex === 1);
  await page.locator('.artwork-detail__additional-direction').fill('Keep this future-entry Draft: 蕨类 🌿');
  return page;
}

async function assertDetail(page, {dirty = true} = {}) {
  await page.waitForFunction(() => location.hash.startsWith('#/artwork/')
    && document.querySelector('#studioOverlay')?.open
    && history.state?.dotsIndex === 1);
  assert.equal(await page.locator('.artwork-detail__additional-direction').inputValue(), dirty ? 'Keep this Draft: 松果 🍂' : '');
}

async function back(page, scheduleSecondBack = false) {
  await page.evaluate(second => {
    history.back();
    if (second === 'back') setTimeout(() => history.back(), 0);
  }, scheduleSecondBack);
}

async function backWithForwardInFlight(page) {
  await page.evaluate(() => { window.dotsFastForwardOnBack = true; history.back(); });
}

const outcomes = [];
try {
  // Use the repository's Playwright browser QA harness; CUA remains available for root's interactive review.
  const singleCancel = await newDirtyPage();
  const singleDialogs = [];
  singleCancel.on('dialog', async dialog => { singleDialogs.push(dialog.type()); await dialog.dismiss(); });
  await back(singleCancel);
  await assertDetail(singleCancel);
  assert.deepEqual(singleDialogs, ['confirm']);
  outcomes.push('Single Back cancellation returns to the same detail entry and retains dirty intent.');
  await singleCancel.close();

  const doubleBackCancel = await newDirtyPage();
  const doubleBackDialogs = [];
  doubleBackCancel.on('dialog', async dialog => { doubleBackDialogs.push(dialog.type()); await dialog.dismiss(); });
  await back(doubleBackCancel, 'back');
  await assertDetail(doubleBackCancel);
  assert.ok(doubleBackDialogs.includes('confirm'));
  outcomes.push(`Rapid double Back cancellation converges to the original detail URL/state and retains dirty intent (${doubleBackDialogs.join(', ')} dialogs).`);
  await doubleBackCancel.close();

  const backForwardCancel = await newDirtyPage();
  const backForwardDialogs = [];
  backForwardCancel.on('dialog', async dialog => { backForwardDialogs.push(dialog.type()); await dialog.dismiss(); });
  await backWithForwardInFlight(backForwardCancel);
  await assertDetail(backForwardCancel);
  assert.equal(await backForwardCancel.evaluate(() => window.dotsForwardTriggered), true);
  assert.ok(backForwardDialogs.includes('confirm'));
  outcomes.push(`Forward dispatched from the dirty Back popstate, then Back cancelled, returns to the same detail entry and Draft (${backForwardDialogs.join(', ')} dialogs).`);
  await backForwardCancel.close();

  const backAccept = await newDirtyPage();
  const acceptedDialogs = [];
  backAccept.on('dialog', async dialog => {
    acceptedDialogs.push(dialog.type());
    if (dialog.type() === 'confirm') await dialog.accept();
    else await dialog.dismiss();
  });
  await back(backAccept);
  await backAccept.waitForFunction(() => location.hash === '#/' && !document.querySelector('#studioOverlay')?.open);
  assert.deepEqual(acceptedDialogs, ['confirm']);
  await backAccept.evaluate(() => history.forward());
  await backAccept.waitForFunction(() => location.hash.startsWith('#/artwork/')
    && document.querySelector('#studioOverlay')?.open
    && history.state?.dotsIndex === 1
    && document.querySelector('.artwork-detail__additional-direction')?.value === '');
  outcomes.push('Accepting Back lands on Gallery; Forward reopens the prior Artwork in the same clean CharacterStudio.');
  await backAccept.close();

  const backForwardAccept = await newDirtyPage();
  const backForwardAcceptedDialogs = [];
  backForwardAccept.on('dialog', async dialog => {
    backForwardAcceptedDialogs.push(dialog.type());
    if (dialog.type() === 'confirm') await dialog.accept();
    else await dialog.dismiss();
  });
  await backWithForwardInFlight(backForwardAccept);
  await backForwardAccept.waitForFunction(() => location.hash.startsWith('#/artwork/')
    && document.querySelector('#studioOverlay')?.open
    && history.state?.dotsIndex === 1
    && document.querySelector('.artwork-detail__additional-direction')?.value === ''
    && window.dotsForwardTriggered);
  assert.ok(backForwardAcceptedDialogs.includes('confirm'));
  outcomes.push(`Accepting dirty Back before its queued Forward reopens the Artwork in the same clean CharacterStudio (${backForwardAcceptedDialogs.join(', ')} dialogs).`);
  await backForwardAccept.close();

  const dirtyForward = await newPageWithGalleryFuture();
  const forwardDialogs = [];
  let forwardDecision = 'dismiss';
  dirtyForward.on('dialog', async dialog => {
    forwardDialogs.push(dialog.type());
    if (dialog.type() === 'confirm' && forwardDecision === 'accept') await dialog.accept();
    else await dialog.dismiss();
  });
  await dirtyForward.evaluate(() => history.forward());
  await dirtyForward.waitForFunction(() => location.hash.startsWith('#/artwork/')
    && document.querySelector('#studioOverlay')?.open
    && history.state?.dotsIndex === 1
    && document.querySelector('.artwork-detail__additional-direction')?.value === 'Keep this future-entry Draft: 蕨类 🌿');
  assert.deepEqual(forwardDialogs, ['confirm']);
  forwardDecision = 'accept';
  await dirtyForward.evaluate(() => history.forward());
  await dirtyForward.waitForFunction(() => location.hash === '#/?series=grok'
    && document.body.dataset.screen === 'gallery'
    && !document.querySelector('#studioOverlay')?.open
    && history.state?.dotsIndex === 2);
  assert.deepEqual(forwardDialogs, ['confirm', 'confirm']);
  outcomes.push('Dirty Forward from detail index 1 to a filtered Characters future entry: cancel restores detail and Draft; accept reaches the gallery at index 2.');
  assert.equal(await dirtyForward.locator('.studio-nav a[data-page="guide"],#guidePortal').count(),0,'The public shell has no Guide navigation or portal.');
  await dirtyForward.close();

  const closeAccept = await newDirtyPage();
  const closeDialogs = [];
  closeAccept.on('dialog', async dialog => { closeDialogs.push(dialog.type()); await dialog.accept(); });
  await closeAccept.locator('#overlayClose').click();
  await closeAccept.waitForFunction(() => location.hash === '#/' && !document.querySelector('#studioOverlay')?.open);
  assert.deepEqual(closeDialogs, ['confirm']);
  outcomes.push('Accepting the overlay close performs exactly one history traversal to Gallery.');
  await closeAccept.close();

  const report={revision:99,browser:browser.version(),scenarios:outcomes.length,outcomes,route:'#/?series=grok',physicalDevice:false};
  await fs.writeFile(path.join(evidenceDir,'history.json'),JSON.stringify(report,null,2)+'\n');
  console.log(`Studio history: ${outcomes.length} focused browser scenarios passed.`);
  for (const outcome of outcomes) console.log(`- ${outcome}`);
} finally {
  await browser.close();
  await vite.close();
}
