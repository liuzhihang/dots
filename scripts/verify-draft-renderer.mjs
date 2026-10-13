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
  const sourceRoot = pathname.startsWith('/dist/') ? dist
    : pathname.startsWith('/scripts/fixtures/') ? path.join(root, 'scripts', 'fixtures')
      : null;
  const sourcePrefix = pathname.startsWith('/dist/') ? '/dist/' : '/scripts/fixtures/';
  if (!sourceRoot) {
    response.writeHead(404).end();
    return;
  }
  const relative = decodeURIComponent(pathname.slice(sourcePrefix.length));
  if (relative.includes('..') || relative.includes('\\')) {
    response.writeHead(400).end();
    return;
  }
  try {
    const body = await fs.readFile(path.join(sourceRoot, relative));
    const contentType = /\.(?:m?js)$/.test(relative) ? 'text/javascript; charset=utf-8'
      : /\.png$/i.test(relative) ? 'image/png'
        : /\.webp$/i.test(relative) ? 'image/webp' : 'application/octet-stream';
    response.writeHead(200, { 'content-type': contentType, 'cache-control': 'no-store' });
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
    const [templatesModule, draftModule, rendererModule, loaderModule, fixtureModule] = await Promise.all([
      import(`${origin}/dist/studio-edit-templates.js?v=110`),
      import(`${origin}/dist/studio-draft.js?v=110`),
      import(`${origin}/dist/studio-renderer.js?v=110`),
      import(`${origin}/dist/studio-preview-loader.js?v=110`),
      import(`${origin}/scripts/fixtures/character-adjustment-v2.mjs`)
    ]);
    const {TEMPLATE_REGISTRY, LEGACY_TEMPLATE_REGISTRY, enumerateValidConfigurations, getRequiredTemplateAssets} = templatesModule;
    const {createDraft, updateDraft} = draftModule;
    const {renderDraft, createExportSnapshot, exportSnapshot, isRenderResultCurrent} = rendererModule;
    const {createPreviewLoader} = loaderModule;
    const {FIXTURE_ARTWORK, FIXTURE_TEMPLATE, materializeFixtureAssets} = fixtureModule;
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
    for (const template of LEGACY_TEMPLATE_REGISTRY) {
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

    const v2Fixture = await materializeFixtureAssets();
    for (const record of v2Fixture.assets) assetRegistry.push(record);
    for (const [path, blob] of v2Fixture.blobs) pngs.set(`/dist/${path.replace(/^\.\//, '')}`, blob);

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
    const fetchImpl = async (url, options) => {
      const path = new URL(url).pathname;
      const blob = pngs.get(path);
      return blob
        ? new Response(blob, { status: 200, headers: { 'content-type': 'image/png' } })
        : window.fetch(url, options);
    };
    const productionManifestResponse = await window.fetch(`${origin}/dist/assets/templates/sources.json`);
    if (!productionManifestResponse.ok) throw new Error('Could not load the current approved Template source manifest.');
    const productionManifest = await productionManifestResponse.json();
    const productionAssets = productionManifest.assets;
    const retainedSourceAssets = productionManifest.retainedSourceAssets || [];
    const tupleKey = asset => `${asset.id}\u0000${asset.version}\u0000${asset.purpose}`;
    const requiredSourceTuples = new Set();
    for (const template of TEMPLATE_REGISTRY) {
      for (const options of enumerateValidConfigurations(template)) {
        for (const asset of getRequiredTemplateAssets(template, options)) requiredSourceTuples.add(tupleKey(asset));
      }
    }
    const activeSourceTuples = new Set(productionAssets.map(tupleKey));
    const retainedSourceTuples = new Set(retainedSourceAssets.map(tupleKey));
    if (TEMPLATE_REGISTRY.length !== 44 || productionManifest.templates.length !== TEMPLATE_REGISTRY.length
      || productionAssets.length !== 309
      || retainedSourceAssets.length !== 6
      || requiredSourceTuples.size !== 309
      || [...requiredSourceTuples].some(key => !activeSourceTuples.has(key))
      || [...activeSourceTuples].some(key => !requiredSourceTuples.has(key))
      || [...retainedSourceTuples].some(key => requiredSourceTuples.has(key))
      || new Set([...activeSourceTuples, ...retainedSourceTuples]).size !== 315
      || !productionAssets.every(asset => asset.status === 'approved' && asset.publicEditable === true && asset.artApproval?.approvalId === 'character-adjustments-20261011-v1')
      || !retainedSourceAssets.every(asset => asset.purpose === 'silhouette-mask' && asset.status === 'approved' && asset.publicEditable === true && asset.artApproval?.approvalId === 'character-adjustments-20261011-v1')
      || productionManifest.templates.reduce((sum, row) => sum + row.declaredLegalConfigurations, 0) !== 540) {
      throw new Error('The current production registry/source manifest is not the exact approved 44-Template set with 309 active tuples, 6 retained masks, and 540 recipes.');
    }

    const summaries = [];
    const outputHashes = {};
    const loaders = [];
    const colorComposites = [];
    for (const template of LEGACY_TEMPLATE_REGISTRY) {
      const loader = createPreviewLoader({ deliveryRegistry: [], assetRegistry, baseURL: `${origin}/dist/`, fetchImpl, createImageBitmapImpl, urlRef });
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
    if (verifiedFamilies.size !== LEGACY_TEMPLATE_REGISTRY.length) throw new Error('Could not verify alpha-preserving recolor for both controlled legacy template families.');

    const fixtureLoader = createPreviewLoader({ deliveryRegistry: [], assetRegistry, baseURL: `${origin}/dist/`, fetchImpl, createImageBitmapImpl, urlRef, verifyHash: true });
    const v2Summaries = [];
    const v2PngHashes = new Set();
    const v2Renders = new Map();
    for (const [index, options] of enumerateValidConfigurations(FIXTURE_TEMPLATE).entries()) {
      const fixtureDraft = createDraft({ artwork: FIXTURE_ARTWORK, template: FIXTURE_TEMPLATE, reviewHarness: true, sessionId: `fixture-v2-${index}` });
      const configured = updateDraft(fixtureDraft, options, { template: FIXTURE_TEMPLATE });
      const rendered = await renderDraft({ draft: configured, template: FIXTURE_TEMPLATE, loader: fixtureLoader, assetRegistry, sessionId: configured.sessionId });
      if (!isRenderResultCurrent(rendered, configured, FIXTURE_TEMPLATE)) throw new Error(`Stale schema-v2 render accepted for fixture recipe ${options.appearance}/${options.colors}/${options.face}/${options.clothing}/${options.accessories}`);
      if (rendered.schemaVersion !== 2 || rendered.options.accessories !== options.accessories
        || rendered.layerOrder.join('|') !== rendered.layerRefs.map(layer => layer.slot).join('|')) throw new Error('Schema-v2 result does not freeze the exact five-field selection and ordered layer references.');
      const context = rendered.canvas.getContext('2d', { willReadFrequently: true });
      const pixels = context.getImageData(0, 0, rendered.width, rendered.height).data;
      const pixelAt = (x, y) => Array.from(pixels.slice((y * rendered.width + x) * 4, (y * rendered.width + x) * 4 + 4));
      const corner = pixelAt(0, 0);
      if (corner[3] !== 0) throw new Error('Schema-v2 renderer painted the transparent canvas corner.');
      if (options.accessories === 'glasses') {
        if (rendered.layerOrder.join('|') !== 'accessory-glasses-rear|body|face|accessory-glasses-front') throw new Error('The glasses recipe does not declare rear/body/face/front occlusion order.');
        const outsideRear = pixelAt(8, 61);
        const bodyOccludesRear = pixelAt(32, 61);
        const frontOverFace = pixelAt(48, 50);
        if (!(outsideRear[0] > 180 && outsideRear[1] < 110 && outsideRear[3] > 0)) throw new Error(`The rear glasses temple is missing outside the body: ${outsideRear.join(',')}`);
        if (!(bodyOccludesRear[2] > bodyOccludesRear[0] && bodyOccludesRear[3] > 0)) throw new Error(`The body did not cover the rear glasses temple: ${bodyOccludesRear.join(',')}`);
        if (!(frontOverFace[0] > 180 && frontOverFace[2] > 120 && frontOverFace[3] > 0)) throw new Error(`The front glasses frame did not cover the face at its registered overlap: ${frontOverFace.join(',')}`);
      }
      const snapshot = createExportSnapshot(rendered);
      if (!Object.isFrozen(snapshot) || !Object.isFrozen(snapshot.options) || !Object.isFrozen(snapshot.semantics.en)
        || snapshot.semantics.en.identity !== FIXTURE_TEMPLATE.identitySemanticsByLanguage.en
        || snapshot.semantics['zh-CN'].face !== FIXTURE_TEMPLATE.options.face.find(option => option.id === options.face).semanticByLanguage['zh-CN']) {
        throw new Error('The immutable schema-v2 snapshot is missing bilingual final-appearance semantics.');
      }
      const faceBinding = snapshot.layerRefs.find(layer => layer.slot === 'face')?.assets.find(asset => asset.id.endsWith(':face:oval') || asset.id.endsWith(':face:closed'));
      const expectedSourceAnchor = options.face === 'closed' ? '32,16' : '64,61';
      if (!faceBinding || faceBinding.placement.anchor !== 'face.center'
        || faceBinding.placement.sourceAnchor.join(',') !== expectedSourceAnchor
        || faceBinding.templateAnchorPoint.join(',') !== '64,61'
        || !rendered.recipeKey.includes(`anchor=face.center;source=${expectedSourceAnchor}`)) {
        throw new Error('The successful recipe and snapshot did not freeze the source-to-template face anchor.');
      }
      if (options.face === 'closed' && (faceBinding.id.endsWith(':face:closed') === false
        || v2Fixture.assets.find(asset => asset.id === faceBinding.id)?.width !== 64)) {
        throw new Error('The independent-size face fixture did not reach the named Template anchor from its 64px source canvas.');
      }
      if (Object.values(snapshot.semantics.en).some(value => Object.values(options).includes(value))) throw new Error('Prompt semantics leaked an internal option id.');
      const blob = await exportSnapshot(snapshot);
      if (blob.type !== 'image/png') throw new Error('Schema-v2 Export did not preserve PNG transparency.');
      const hashBytes = new Uint8Array(await crypto.subtle.digest('SHA-256', await blob.arrayBuffer()));
      const hash = [...hashBytes].map(value => value.toString(16).padStart(2, '0')).join('');
      v2PngHashes.add(hash);
      const variant = options.appearance === 'cloud' && options.colors === 'blue' && options.face === 'oval' && options.clothing === 'none' && options.accessories === 'none' ? 'default'
        : options.appearance === 'diamond' ? 'appearance'
          : options.colors === 'coral' && options.clothing === 'collar' ? 'color-clothing'
            : options.colors === 'coral' ? 'color'
              : options.face === 'closed' ? 'face'
                : options.clothing === 'collar' ? 'clothing'
                  : 'accessories';
      v2Renders.set(variant, {
        pixels,
        bodyProbe: pixelAt(64, 75),
        collarProbe: pixelAt(64, 101)
      });
      v2Summaries.push({ recipeId: rendered.recipeId, recipeKey: rendered.recipeKey, options, layerOrder: rendered.layerOrder, pngBytes: blob.size, pngHash: hash });
      rendered.release();
    }
    if (v2Summaries.length !== 7 || v2PngHashes.size !== 7) throw new Error('The schema-v2 fixture must render each of its seven explicit finite recipes to distinct PNG pixels.');
    const defaultPixels = v2Renders.get('default').pixels;
    for (const field of ['appearance', 'color', 'face', 'clothing', 'accessories']) {
      const variant = v2Renders.get(field);
      if (!variant || !variant.pixels.some((value, index) => value !== defaultPixels[index])) throw new Error(`Schema-v2 ${field} did not create a real pixel change from its default. `);
    }
    if (v2Renders.get('color').bodyProbe.every((value, index) => value === v2Renders.get('default').bodyProbe[index])) throw new Error('Schema-v2 color selection did not recolor the body material zone.');
    if (v2Renders.get('clothing').collarProbe.some((value, index) => value !== v2Renders.get('color-clothing').collarProbe[index])) throw new Error('Schema-v2 body tint changed the clothing layer color.');
    const defaultAlpha = [];
    const colorAlpha = [];
    for (let index = 3; index < defaultPixels.length; index += 4) {
      defaultAlpha.push(defaultPixels[index]);
      colorAlpha.push(v2Renders.get('color').pixels[index]);
    }
    if (defaultAlpha.some((value, index) => value !== colorAlpha[index])) throw new Error('Zone color editing changed the character silhouette alpha.');
    const v2Draft = createDraft({ artwork: FIXTURE_ARTWORK, template: FIXTURE_TEMPLATE, reviewHarness: true, sessionId: 'fixture-v2-conflict' });
    let conflictCode = null;
    try { updateDraft(v2Draft, { clothing: 'collar', accessories: 'glasses' }, { template: FIXTURE_TEMPLATE }); }
    catch (cause) { conflictCode = cause.code; }
    if (conflictCode !== 'fixture-collar-glasses-conflict' || v2Draft.options.clothing !== 'none' || v2Draft.options.accessories !== 'none') {
      throw new Error('Schema-v2 incompatible options were not atomically rejected.');
    }
    const mismatchedOwnerRegistry = v2Fixture.assets.map(record => record.id === 'template:fixture-cloud-v2:body:cloud'
      ? { ...record, owner: { ...record.owner, artworkVersion: 'other-artwork-version' } }
      : record);
    const mismatchedOwnerLoader = createPreviewLoader({ deliveryRegistry: [], assetRegistry: mismatchedOwnerRegistry, baseURL: `${origin}/dist/`, fetchImpl, createImageBitmapImpl, urlRef });
    const ownerDraft = createDraft({ artwork: FIXTURE_ARTWORK, template: FIXTURE_TEMPLATE, reviewHarness: true, sessionId: 'fixture-v2-owner' });
    let ownerCode = null;
    try { await renderDraft({ draft: ownerDraft, template: FIXTURE_TEMPLATE, loader: mismatchedOwnerLoader, assetRegistry: mismatchedOwnerRegistry }); }
    catch (cause) { ownerCode = cause.code; }
    if (ownerCode !== 'template-layer-owner-mismatch') throw new Error('Renderer accepted a layer borrowed from a different Artwork version.');
    mismatchedOwnerLoader.releaseAll();

    const productionLoader = createPreviewLoader({
      assetRegistry: productionAssets,
      baseURL: `${origin}/dist/`,
      fetchImpl,
      createImageBitmapImpl,
      urlRef,
      verifyHash: true,
      maxDecodedBytes: 64 * 1024 * 1024,
      maxIdleEntries: 16
    });
    const productionRenderRows = [];
    let productionRecipeCount = 0;
    for (const template of TEMPLATE_REGISTRY) {
      const manifestBinding = productionManifest.templates.find(row => row.id === template.id && row.version === template.version);
      if (!manifestBinding || manifestBinding.status !== 'approved' || manifestBinding.engineeringStatus !== 'passed' || manifestBinding.publicEditable !== true) {
        throw new Error(`Production Template approval binding is missing for ${template.id}@${template.version}.`);
      }
      const configurations = enumerateValidConfigurations(template);
      if (configurations.length !== manifestBinding.declaredLegalConfigurations) throw new Error(`Declared finite recipe count differs from the runtime definition for ${template.id}.`);
      const artwork = { id: template.artworkBinding.artworkId, version: template.artworkBinding.artworkVersion };
      for (const [index, options] of configurations.entries()) {
        const required = getRequiredTemplateAssets(template, options);
        for (const reference of required) {
          if (!productionAssets.some(asset => asset.id === reference.id && asset.version === reference.version && asset.purpose === reference.purpose)) {
            throw new Error(`Required source/thumbnail is not in the approved runtime manifest: ${template.id} ${reference.id}`);
          }
        }
        const draft = createDraft({ artwork, template, sessionId: `approved-${template.id}-${index}` });
        const configured = updateDraft(draft, options, { template });
        const rendered = await renderDraft({ draft: configured, template, loader: productionLoader, assetRegistry: productionAssets, sessionId: configured.sessionId });
        try {
          if (!isRenderResultCurrent(rendered, configured, template)
            || rendered.schemaVersion !== 2
            || rendered.recipeId !== template.recipes[index]?.id
            || rendered.width !== template.canvas.width || rendered.height !== template.canvas.height) {
            throw new Error(`Rendered production snapshot does not match the exact approved recipe/canvas: ${template.id} recipe ${index}.`);
          }
          const rgba = rendered.canvas.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, rendered.width, rendered.height).data;
          let hasTransparentPixel = false;
          let hasVisiblePixel = false;
          for (let pixel = 3; pixel < rgba.length; pixel += 4 * 127) {
            if (rgba[pixel] === 0) hasTransparentPixel = true;
            if (rgba[pixel] > 0) hasVisiblePixel = true;
            if (hasTransparentPixel && hasVisiblePixel) break;
          }
          if (!hasTransparentPixel || !hasVisiblePixel) throw new Error(`Production render lost transparent canvas or visible character pixels: ${template.id} recipe ${index}.`);
          if (index === 0) {
            const snapshot = createExportSnapshot(rendered);
            const [exportBlob, previewBlob] = await Promise.all([
              exportSnapshot(snapshot),
              new Promise(resolve => rendered.canvas.toBlob(resolve, 'image/png'))
            ]);
            if (!previewBlob || previewBlob.type !== 'image/png' || exportBlob.type !== 'image/png' || previewBlob.size !== exportBlob.size) {
              throw new Error(`Production preview/export PNG differs for ${template.id} recipe ${index}.`);
            }
            const [exportBuffer, previewBuffer] = await Promise.all([exportBlob.arrayBuffer(), previewBlob.arrayBuffer()]);
            const [exportDigest, previewDigest] = await Promise.all([
              crypto.subtle.digest('SHA-256', exportBuffer),
              crypto.subtle.digest('SHA-256', previewBuffer)
            ]);
            const exportHash = [...new Uint8Array(exportDigest)].map(value => value.toString(16).padStart(2, '0')).join('');
            const previewHash = [...new Uint8Array(previewDigest)].map(value => value.toString(16).padStart(2, '0')).join('');
            if (exportHash !== previewHash) throw new Error(`Production preview and frozen export pixels differ for ${template.id} recipe ${index}.`);
          }
          productionRecipeCount += 1;
        } finally {
          rendered.release();
        }
      }
      productionRenderRows.push({ templateId: template.id, recipes: configurations.length });
    }
    if (productionRecipeCount !== 540) throw new Error(`Rendered ${productionRecipeCount} production recipes; expected all 540 approved recipes.`);
    productionLoader.releaseAll();
    const productionStats = productionLoader.stats();
    if (productionStats.activeRequests !== 0 || productionStats.cacheEntries !== 0 || productionStats.decodedBytes !== 0
      || productionStats.peakDecodedBytes > 64 * 1024 * 1024) throw new Error('Production Template layer decode cache did not stay bounded and clean up.');

    const primary = LEGACY_TEMPLATE_REGISTRY[0];
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
    fixtureLoader.releaseAll();
    missingLoader.releaseAll();
    const stats = [...loaders, fixtureLoader].map(loader => loader.stats());
    if (stats.some(row => row.activeRequests !== 0 || row.queuedRequests !== 0 || row.cacheEntries !== 0 || row.decodedBytes !== 0)) {
      throw new Error('Loader teardown left an active request or decoded cache entry.');
    }
    if (stats.some(row => row.peakDecodedBytes > 64 * 1024 * 1024)) throw new Error('Decoded image cache exceeded 64 MiB.');
    if (window.__urlRevokeCount < 1) throw new Error('Eviction did not revoke the held Blob URL.');
    const templatePlacements = Object.fromEntries(LEGACY_TEMPLATE_REGISTRY.map(template => [template.id, {
      accessories: Object.fromEntries(Object.entries(template.layers.accessories || {}).map(([id, definition]) => [id, definition.rearPlacement || 'under-body']))
    }]));
    return { summaries, v2Summaries, outputHashes, stats, productionStats, productionRenderRows, productionRecipeCount, templatePlacements, colorChecks: verifiedFamilies.size, bitmapCreateCount: window.__bitmapCreateCount, bitmapCloseCount: window.__bitmapCloseCount, urlRevokeCount: window.__urlRevokeCount };
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
  assert.equal(result.productionRenderRows.length, 44, 'Every exact production Template renders in its approved Artwork binding.');
  assert.equal(result.productionRecipeCount, 540, 'Every approved finite production recipe renders from its exact registered PNG resources and exports the identical transparent PNG.');
  assert.deepEqual(pageErrors, [], 'Browser renderer produced no uncaught page errors.');
  assert.equal(result.v2Summaries.length, 7, 'The v2 fixture renders each explicitly listed recipe.');
  console.log('PASS legacy v1 regression renders plus schema-v2 fixture with five real pixel-changing fields and finite recipes.');
  console.log('PASS transparent alpha, distinct composites, immutable export snapshot, explicit missing-layer failure, lease and cache release.');
  console.log('PASS metadata-driven cap crown/body ordering is reflected in deterministic recipe identity.');
  console.log('PASS all 44 approved production Templates render all 540 finite recipes from exact hash-verified source assets with preview/export PNG equality.');
  console.log(`METRIC bitmap created=${result.bitmapCreateCount}; closed=${result.bitmapCloseCount}; object URLs revoked=${result.urlRevokeCount}; cache peaks=${result.stats.map(row => row.peakDecodedBytes).join(',')}`);
  console.log('NOTE The production resource/render checks do not replace independent visual or user-art acceptance evidence.');
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
