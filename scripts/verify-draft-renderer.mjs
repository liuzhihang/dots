import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const server = http.createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://127.0.0.1').pathname;
  if (pathname === '/harness') {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    response.end('<!doctype html><html><head><meta charset="utf-8"></head><body><main id="test"></main></body></html>');
    return;
  }
  if (!pathname.startsWith('/dist/')) {
    response.writeHead(404).end();
    return;
  }
  const relative = decodeURIComponent(pathname.slice('/dist/'.length));
  if (relative.includes('..') || relative.includes('\\')) {
    response.writeHead(400).end();
    return;
  }
  try {
    const body = await fs.readFile(path.join(dist, relative));
    response.writeHead(200, { 'content-type': relative.endsWith('.js') ? 'text/javascript; charset=utf-8' : 'application/octet-stream', 'cache-control': 'no-store' });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});

await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
let browser;
try {
  browser = await launchBrowser({headless: true});
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto(`http://127.0.0.1:${port}/harness`);
  const result = await page.evaluate(async origin => {
    const [templatesModule, draftModule, rendererModule, loaderModule] = await Promise.all([
      import(`${origin}/dist/studio-edit-templates.js?v=99`),
      import(`${origin}/dist/studio-draft.js?v=99`),
      import(`${origin}/dist/studio-renderer.js?v=99`),
      import(`${origin}/dist/studio-preview-loader.js?v=99`)
    ]);
    const {TEMPLATE_REGISTRY, enumerateValidConfigurations, getRequiredTemplateAssets} = templatesModule;
    const {createDraft, updateDraft} = draftModule;
    const {renderDraft, createExportSnapshot, exportSnapshot, isRenderResultCurrent} = rendererModule;
    const {createPreviewLoader} = loaderModule;
    const pngs = new Map();
    const assetRegistry = [];
    const drawFixture = (assetId, canvas) => {
      const context = canvas.getContext('2d');
      const [templateId, ...tail] = assetId.replace('template:', '').split(':');
      const layer = tail.join(':');
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (layer === 'body-neutral') {
        const gradient = context.createRadialGradient(555, 490, 24, 627, 627, 440);
        gradient.addColorStop(0, '#f8f8f8');
        gradient.addColorStop(0.72, '#c9c9c9');
        gradient.addColorStop(1, '#777777');
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(627, 627, 440, 0, Math.PI * 2);
        context.fill();
      } else if (layer.startsWith('eyes:')) {
        const variant = layer.slice('eyes:'.length);
        context.fillStyle = templateId === 'grok-orb-v1' ? '#ffffff' : '#151515';
        if (variant.includes('closed')) {
          context.lineWidth = 24;
          context.lineCap = 'round';
          context.strokeStyle = '#151515';
          for (const x of [510, 744]) {
            context.beginPath();
            context.moveTo(x - 54, 565);
            context.quadraticCurveTo(x, 520, x + 54, 565);
            context.stroke();
          }
        } else {
          for (const x of [510, 744]) {
            context.save();
            if (variant === 'upright-capsules') context.rotate(-0.1);
            else if (variant === 'angled-capsules') context.rotate(-0.45);
            context.beginPath();
            context.ellipse(x, 565, 42, 82, 0, 0, Math.PI * 2);
            context.fill();
            context.restore();
          }
        }
      } else if (layer.endsWith(':rear')) {
        context.strokeStyle = layer.includes('headphones') ? '#3b3447' : layer.includes('cap') ? '#4f3b72' : '#84536c';
        context.lineWidth = 44;
        context.lineCap = 'round';
        if (layer.includes('headphones')) {
          context.beginPath(); context.arc(627, 470, 480, Math.PI * 1.13, Math.PI * 1.87); context.stroke();
        } else {
          context.beginPath(); context.moveTo(320, 530); context.lineTo(260, 580); context.moveTo(934, 530); context.lineTo(994, 580); context.stroke();
        }
      } else if (layer.endsWith(':front')) {
        const color = layer.includes('headphones') ? '#7954c8' : layer.includes('cap') ? '#7155aa' : '#e7a9be';
        context.strokeStyle = color;
        context.fillStyle = color;
        if (layer.includes('glasses')) {
          context.lineWidth = 20;
          context.beginPath(); context.arc(510, 565, 108, 0, Math.PI * 2); context.stroke();
          context.beginPath(); context.arc(744, 565, 108, 0, Math.PI * 2); context.stroke();
          context.lineWidth = 18; context.beginPath(); context.moveTo(618, 565); context.lineTo(636, 565); context.stroke();
        } else if (layer.includes('headphones')) {
          context.beginPath(); context.roundRect(130, 485, 155, 285, 66); context.fill();
          context.beginPath(); context.roundRect(969, 485, 155, 285, 66); context.fill();
        } else {
          context.beginPath(); context.ellipse(627, 300, 300, 130, 0, Math.PI, Math.PI * 2); context.fill();
          context.beginPath(); context.roundRect(375, 292, 504, 92, 44); context.fill();
        }
      }
    };

    const uniqueRefs = new Map();
    for (const template of TEMPLATE_REGISTRY) {
      for (const options of enumerateValidConfigurations(template)) {
        for (const ref of getRequiredTemplateAssets(template, options)) uniqueRefs.set(ref.id, ref);
      }
    }
    for (const ref of uniqueRefs.values()) {
      const templateId = ref.id.split(':')[1];
      const canvas = document.createElement('canvas');
      canvas.width = 1254; canvas.height = 1254;
      drawFixture(ref.id, canvas);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const pathPart = ref.id.slice(`template:${templateId}:`.length).replaceAll(':', '-') + '.png';
      const path = `./assets/templates/${templateId}/__fixture__/${pathPart}`;
      const bytes = await blob.arrayBuffer();
      const hashBytes = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
      const sha256 = [...hashBytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
      const record = {
        ...ref,
        path,
        sha256,
        byteSize: blob.size,
        width: canvas.width,
        height: canvas.height,
        mime: 'image/png',
        alpha: { hasAlpha: true, hasTransparency: true },
        owner: templateId,
        placement: {
          canvas: [1254, 1254],
          anchor: 'canvas',
          offset: ref.id === 'template:grok-orb-v1:eyes:angled-capsules' ? [5.75, 5]
            : templateId === 'grok-orb-v1' && ref.id.endsWith(':cap:soft:rear') ? [0, -71.25]
              : templateId === 'grok-orb-v1' && ref.id.endsWith(':cap:soft:front') ? [0, -82.5] : [0, 0],
          ...(
            ref.id === 'template:grok-orb-v1:eyes:angled-capsules'
              ? { transform: { pivot: [888.5, 462], scale: [1.17, 0.78], shear: [0, -0.194], rotationDegrees: 0 } }
              : ref.id === 'template:grok-orb-v1:eyes:upright-capsules'
                ? { transform: { pivot: [909, 578], scale: [1.11, 0.75], rotationDegrees: -10 } }
                  : templateId === 'grok-orb-v1' && ref.id.endsWith(':cap:soft:rear')
                    ? { transform: { pivot: [0, 0], scale: [1, 0.75], rotationDegrees: 0 } }
                    : templateId === 'grok-orb-v1' && ref.id.endsWith(':cap:soft:front')
                      ? { transform: { pivot: [0, 0], scale: [1, 0.75], rotationDegrees: 0 } }
                : {}
          )
        }
      };
      assetRegistry.push(record);
      pngs.set(`/dist/assets/templates/${templateId}/__fixture__/${pathPart}`, blob);
      canvas.width = 0; canvas.height = 0;
    }

    const createImageBitmapImpl = async blob => {
      const bitmap = await window.createImageBitmap(blob);
      const close = bitmap.close.bind(bitmap);
      try {
        Object.defineProperty(bitmap, 'close', { configurable: true, value() { window.__bitmapCloseCount += 1; close(); } });
      } catch { /* Some browsers expose a non-configurable Web IDL method. */ }
      window.__bitmapCreateCount += 1;
      return bitmap;
    };
    window.__bitmapCloseCount = 0;
    window.__bitmapCreateCount = 0;
    window.__urlRevokeCount = 0;
    const urlRef = {
      createObjectURL: blob => URL.createObjectURL(blob),
      revokeObjectURL: url => { window.__urlRevokeCount += 1; URL.revokeObjectURL(url); }
    };
    const fetchImpl = async url => {
      const path = new URL(url).pathname;
      const blob = pngs.get(path);
      return blob
        ? new Response(blob, { status: 200, headers: { 'content-type': 'image/png' } })
        : new Response('missing fixture', { status: 404, headers: { 'content-type': 'text/plain' } });
    };

    const summaries = [];
    const outputHashes = {};
    const loaders = [];
    const colorComposites = [];
    for (const template of TEMPLATE_REGISTRY) {
      const loader = createPreviewLoader({ assetRegistry, baseURL: `${origin}/dist/`, fetchImpl, createImageBitmapImpl, urlRef });
      loaders.push(loader);
      const artwork = { id: template.artworkBinding.artworkId, version: template.artworkBinding.artworkVersion };
      const configurations = enumerateValidConfigurations(template);
      const hashes = new Set();
      for (const [index, options] of configurations.entries()) {
        const draft = createDraft({ artwork, template, reviewHarness: true, sessionId: `${template.id}-render-${index}` });
        const configured = updateDraft(draft, options, { template });
        const result = await renderDraft({ draft: configured, template, loader, assetRegistry, sessionId: configured.sessionId });
        if (!isRenderResultCurrent(result, configured, template)) throw new Error(`Stale render accepted for ${template.id} config ${index}`);
        const ctx = result.canvas.getContext('2d', { willReadFrequently: true });
        const corner = ctx.getImageData(0, 0, 1, 1).data;
        const center = ctx.getImageData(627, 627, 1, 1).data;
        if (corner[3] !== 0 || center[3] === 0) throw new Error(`RGBA transparency/subject check failed for ${template.id} config ${index}`);
        const rgba = ctx.getImageData(0, 0, result.width, result.height).data;
        const alpha = new Uint8Array(result.width * result.height);
        for (let pixel = 0; pixel < alpha.length; pixel += 1) alpha[pixel] = rgba[pixel * 4 + 3];
        const alphaDigest = new Uint8Array(await crypto.subtle.digest('SHA-256', alpha));
        const alphaHash = [...alphaDigest].map(byte => byte.toString(16).padStart(2, '0')).join('');
        const sampleOffset = (850 * result.width + 627) * 4;
        colorComposites.push({
          templateId: template.id,
          options,
          alphaHash,
          probe: [...rgba.slice(sampleOffset, sampleOffset + 4)],
          expectedHex: template.options.color.find(option => option.id === options.color)?.hex
        });
        const frozenSnapshot = createExportSnapshot(result);
        if (!Object.isFrozen(frozenSnapshot) || !Object.isFrozen(frozenSnapshot.options)) throw new Error('Export snapshot is not immutable.');
        const blob = await exportSnapshot(frozenSnapshot);
        if (blob.type !== 'image/png') throw new Error('Export did not return image/png.');
        const hashBytes = new Uint8Array(await crypto.subtle.digest('SHA-256', await blob.arrayBuffer()));
        const hash = [...hashBytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
        hashes.add(hash);
        const key = `${template.id}:${options.color}/${options.eyes}/${options.glasses}/${options.accessory}`;
        outputHashes[key] = hash;
        summaries.push({ templateId: template.id, revision: result.revision, recipeKey: result.recipeKey, options, pngBytes: blob.size, pngHash: hash });
        result.release();
      }
      if (hashes.size !== configurations.length) throw new Error(`${template.id} legal choices did not all produce distinct PNG pixels.`);
    }

    const rgbHue = ([r, g, b]) => {
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min;
      if (!delta) return null;
      let hue = max === r ? (g - b) / delta + (g < b ? 6 : 0)
        : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
      return hue / 6;
    };
    const hexHue = hex => {
      const channels = [0, 2, 4].map(offset => Number.parseInt(hex.slice(offset + 1, offset + 3), 16));
      return rgbHue(channels);
    };
    const hueDistance = (a, b) => Math.min(Math.abs(a - b), 1 - Math.abs(a - b));
    const matched = new Set();
    for (const first of colorComposites) {
      const mate = colorComposites.find(other => other.templateId === first.templateId
        && other.options.color !== first.options.color
        && ['eyes', 'glasses', 'accessory'].every(field => other.options[field] === first.options[field]));
      if (!mate) continue;
      const key = `${first.templateId}:${first.options.eyes}:${first.options.glasses}:${first.options.accessory}`;
      if (matched.has(key)) continue;
      matched.add(key);
      if (first.alphaHash !== mate.alphaHash) throw new Error(`Body recolor changed source alpha for ${key}.`);
      const mateHue = rgbHue(mate.probe);
      if (mate.probe[3] === 0 || mateHue === null || hueDistance(mateHue, hexHue(mate.expectedHex)) > 0.04) {
        throw new Error(`Alternate body color does not match its registered hue for ${key}: ${mate.probe.join(',')}.`);
      }
      const firstHue = rgbHue(first.probe);
      if (first.options.color === mate.options.color || (firstHue !== null && hueDistance(firstHue, mateHue) < 0.05)) {
        throw new Error(`Supported body colors did not visibly recolor ${key}.`);
      }
    }
    const verifiedFamilies = new Set([...matched].map(key => key.split(':')[0]));
    if (verifiedFamilies.size !== TEMPLATE_REGISTRY.length) throw new Error('Could not verify alpha-preserving recolor for both controlled template families.');

    const primary = TEMPLATE_REGISTRY[0];
    const primaryArtwork = { id: primary.artworkBinding.artworkId, version: primary.artworkBinding.artworkVersion };
    const primaryLoader = loaders[0];
    const baselineDraft = createDraft({ artwork: primaryArtwork, template: primary, reviewHarness: true, sessionId: 'snapshot-freeze' });
    const baseline = await renderDraft({ draft: baselineDraft, template: primary, loader: primaryLoader, assetRegistry });
    const frozenBaseline = createExportSnapshot(baseline);
    const changedDraft = updateDraft(baselineDraft, { color: 'warm-yellow', accessory: 'none' }, { template: primary });
    const changed = await renderDraft({ draft: changedDraft, template: primary, loader: primaryLoader, assetRegistry });
    const oldSnapshotBlob = await exportSnapshot(frozenBaseline);
    const oldSnapshotHashBytes = new Uint8Array(await crypto.subtle.digest('SHA-256', await oldSnapshotBlob.arrayBuffer()));
    const oldSnapshotHash = [...oldSnapshotHashBytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
    const baselineHash = summaries.find(item => item.templateId === primary.id && item.options.color === primary.defaultOptions.color && item.options.eyes === primary.defaultOptions.eyes && item.options.glasses === primary.defaultOptions.glasses && item.options.accessory === primary.defaultOptions.accessory)?.pngHash;
    if (oldSnapshotHash !== baselineHash) throw new Error('Export snapshot pixels changed after a later revision rendered.');
    baseline.release(); changed.release();

    let missingRef = getRequiredTemplateAssets(primary, primary.defaultOptions).find(ref => ref.id.includes('headphones:default:front'));
    const missingRegistry = assetRegistry.filter(asset => asset.id !== missingRef.id);
    const missingLoader = createPreviewLoader({ assetRegistry: missingRegistry, baseURL: `${origin}/dist/`, fetchImpl, createImageBitmapImpl, urlRef });
    const missingDraft = createDraft({ artwork: primaryArtwork, template: primary, reviewHarness: true, sessionId: 'missing-layer' });
    let missingCode = null;
    try { await renderDraft({ draft: missingDraft, template: primary, loader: missingLoader, assetRegistry: missingRegistry }); }
    catch (error) { missingCode = error.code; }
    if (missingCode !== 'missing-template-layer') throw new Error(`Missing real layer did not fail explicitly (received ${missingCode}).`);

    const urlLease = await primaryLoader.acquire(assetRegistry.find(asset => asset.id === 'template:dots-orb-v1:body-neutral'));
    const objectUrl = urlLease.url;
    if (!objectUrl?.startsWith('blob:')) throw new Error('A Blob URL lease was not created.');
    urlLease.release();
    for (const loader of loaders) loader.releaseAll();
    missingLoader.releaseAll();
    const stats = loaders.map(loader => loader.stats());
    if (stats.some(row => row.activeRequests !== 0 || row.queuedRequests !== 0 || row.cacheEntries !== 0 || row.decodedBytes !== 0)) {
      throw new Error('Loader teardown left an active request or decoded cache entry.');
    }
    if (stats.some(row => row.peakDecodedBytes > 64 * 1024 * 1024)) throw new Error('Decoded image cache exceeded 64 MiB.');
    if (window.__urlRevokeCount < 1) throw new Error('Eviction did not revoke the held Blob URL.');
    const templatePlacements = Object.fromEntries(TEMPLATE_REGISTRY.map(template => [template.id, {
      accessories: Object.fromEntries(Object.entries(template.layers.accessories || {}).map(([id, definition]) => [id, definition.rearPlacement || 'under-body']))
    }]));
    return { summaries, outputHashes, stats, templatePlacements, colorChecks: verifiedFamilies.size, bitmapCreateCount: window.__bitmapCreateCount, bitmapCloseCount: window.__bitmapCloseCount, urlRevokeCount: window.__urlRevokeCount };
  }, `http://127.0.0.1:${port}`);

  assert.equal(result.summaries.filter(row => row.templateId === 'dots-orb-v1').length, 12, 'All 12 Dots combinations rendered and exported.');
  assert.equal(result.summaries.filter(row => row.templateId === 'grok-orb-v1').length, 16, 'All 16 Grok combinations rendered and exported.');
  assert.ok(result.summaries.some(row => row.templateId === 'grok-orb-v1' && row.options.accessory === 'soft-cap' && row.recipeKey.includes('placement=0,-71.25;pivot=0,0;scale=1,0.75;')), 'Recipe identity includes the cap group compression and cap-rear placement offset.');
  assert.equal(result.templatePlacements['grok-orb-v1'].accessories['soft-cap'], 'over-body', 'The Grok soft-cap declares its rear crown above the body plane.');
  assert.equal(result.templatePlacements['dots-orb-v1'].accessories.headphones, 'under-body', 'Dots headphones stay behind the body plane.');
  assert.ok(result.summaries.some(row => row.templateId === 'grok-orb-v1' && row.options.accessory === 'soft-cap' && row.options.glasses === 'round'
    && row.recipeKey.includes('layer-order=glasses-rear>body>accessory-rear>eyes>glasses-front>accessory-front')),
  'Grok cap rear is composited above the body but before its eyes and glasses, and the recipe records that order.');
  assert.ok(result.summaries.some(row => row.templateId === 'dots-orb-v1' && row.options.accessory === 'headphones'
    && row.recipeKey.includes('layer-order=accessory-rear>body>eyes>accessory-front')),
  'Dots headphone rear remains below the body and the recipe records that order.');
  assert.ok(result.summaries.some(row => row.templateId === 'grok-orb-v1' && row.options.eyes === 'angled-capsules'
    && row.options.glasses === 'round' && row.recipeKey.includes('pivot=888.5,462;scale=1.17,0.78;shear=0,-0.194;rotation=0')),
  'The angled-eye + round-glasses recipe records its measured two-lens affine registration.');
  assert.ok(result.summaries.some(row => row.templateId === 'grok-orb-v1' && row.options.eyes === 'upright-capsules'
    && row.options.glasses === 'round' && row.recipeKey.includes('scale=1.11,0.75;shear=0,0;rotation=-10')),
  'The upright-eye + round-glasses recipe records its manifest-owned registration transform.');
  assert.ok(result.bitmapCreateCount >= 1, 'Real browser ImageBitmap decode ran.');
  assert.ok(result.urlRevokeCount >= 1, 'Object URL cleanup was exercised.');
  assert.equal(result.colorChecks, 2, 'Both controlled templates preserve alpha and render their registered alternate hue.');
  assert.deepEqual(pageErrors, [], 'Browser renderer produced no uncaught page errors.');
  console.log('PASS browser Canvas rendered and exported all 12 Dots / 16 Grok configurations using QA-only generated fixtures.');
  console.log('PASS transparent alpha, distinct composites, immutable export snapshot, explicit missing-layer failure, lease and cache release.');
  console.log('PASS metadata-driven cap crown/body ordering is reflected in deterministic recipe identity.');
  console.log(`METRIC bitmap created=${result.bitmapCreateCount}; closed=${result.bitmapCloseCount}; object URLs revoked=${result.urlRevokeCount}; cache peaks=${result.stats.map(row => row.peakDecodedBytes).join(',')}`);
  console.log('NOTE Production template layers and visual acceptance remain separate gates; this suite does not make generated fixtures production assets.');
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
