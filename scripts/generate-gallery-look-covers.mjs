import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {launchBrowser} from './browser-runtime.mjs';
import {ARTWORKS, validateArtwork} from '../dist/studio-artwork-catalog.js?v=111';
import {
  TEMPLATE_REGISTRY,
  getRequiredTemplateAssets,
  getTemplateRecipe,
  validateTemplateDefinition
} from '../dist/studio-edit-templates.js?v=111';
import {GALLERY_LOOKS} from '../dist/studio-gallery-looks.js?v=111';
import {STUDIO_RENDERER_REVISION} from '../dist/studio-renderer.js?v=111';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const outputDirectory = path.join(dist, 'assets/gallery-looks');
const dataPath = path.join(dist, 'studio-gallery-look-data.js');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stable(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function tupleKey(asset) {
  return `${asset.id}\u0000${asset.version}\u0000${asset.purpose}`;
}

function sourceAssetRows(template, options, sourcesByTuple) {
  return getRequiredTemplateAssets(template, options, {includeAllOptionThumbnails: false})
    .map(reference => {
      const source = sourcesByTuple.get(tupleKey(reference));
      assert(source, `Recipe source is not registered: ${template.id} ${reference.id}`);
      assert.equal(source.status, 'approved', `Recipe source is not approved: ${reference.id}`);
      assert.equal(source.publicEditable, true, `Recipe source is not production-editable: ${reference.id}`);
      assert.equal(source.owner?.templateId, template.id, `Recipe layer is not owned by exact template: ${reference.id}`);
      assert.equal(source.owner?.artworkId, template.artworkBinding.artworkId, `Recipe layer is not owned by exact Artwork: ${reference.id}`);
      assert.equal(source.owner?.artworkVersion, template.artworkBinding.artworkVersion, `Recipe layer Artwork version mismatch: ${reference.id}`);
      return {
        id: source.id,
        version: source.version,
        purpose: source.purpose,
        path: source.path,
        sha256: source.sha256
      };
    })
    .sort((a, b) => tupleKey(a).localeCompare(tupleKey(b), 'en'));
}

const sourceManifest = JSON.parse(await fs.readFile(path.join(dist, 'assets/templates/sources.json'), 'utf8'));
assert.equal(sourceManifest.schemaVersion, 1, 'Template source manifest schema must remain supported.');
assert.equal(ARTWORKS.length, 44, 'The frozen approved Artwork catalog contains 44 source works.');
assert.equal(TEMPLATE_REGISTRY.length, 44, 'Every approved Artwork has one registered production Template.');
assert.equal(GALLERY_LOOKS.length, 90, 'The current gallery look registry must cover 90 appearances.');
assert.equal(GALLERY_LOOKS.filter(look => !look.isDefault).length, 46, 'Exactly 46 alternative appearances need derived covers.');

const sourceRows = sourceManifest.assets;
const sourcesByTuple = new Map(sourceRows.map(row => [tupleKey(row), row]));
const preparedLooks = GALLERY_LOOKS.filter(look => !look.isDefault).map(look => {
  const artwork = ARTWORKS.find(row => row.id === look.artworkId && row.version === look.artworkVersion);
  const template = TEMPLATE_REGISTRY.find(row => row.id === look.templateId && row.version === look.templateVersion);
  assert(artwork && validateArtwork(artwork), `Missing exact approved source Artwork: ${look.artworkId}@${look.artworkVersion}`);
  assert(template && template.artworkBinding.artworkId === artwork.id
    && template.artworkBinding.artworkVersion === artwork.version, `Missing exact bound Template for ${look.id}`);
  assert(validateTemplateDefinition(template, {assetRegistry: sourceRows}).valid, `Invalid approved Template definition: ${template.id}`);
  const recipe = getTemplateRecipe(template, look.defaultOptions);
  assert(recipe && recipe.id === look.defaultRecipeId, `Look default does not resolve to its exact registered recipe: ${look.id}`);
  const assets = sourceAssetRows(template, look.defaultOptions, sourcesByTuple);
  const sourceRecipeSha256 = hash(Buffer.from(stable(recipe)));
  const expectedFiles = [
    {size: 256, purpose: 'poster256', ref: look.assetRefs.poster},
    {size: 512, purpose: 'poster512', ref: look.assetRefs.poster512}
  ].map(row => ({
    ...row,
    filename: `${look.id}-${look.version}-${row.size}.webp`,
    path: `./assets/gallery-looks/${look.id}-${look.version}-${row.size}.webp`
  }));
  return {look, artwork, template, recipe, assets, sourceRecipeSha256, expectedFiles};
});

const expectedOutputNames = new Set(preparedLooks.flatMap(row => row.expectedFiles.map(file => file.filename)));
await fs.mkdir(outputDirectory, {recursive: true});
const outputStat = await fs.lstat(outputDirectory);
assert(outputStat.isDirectory() && !outputStat.isSymbolicLink(), 'Gallery look output directory must be a real directory.');

const pageErrors = [];
const storedNames = new Set();
const server = http.createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://127.0.0.1').pathname;
  if (request.method === 'GET' && pathname === '/harness') {
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store'});
    response.end('<!doctype html><html><head><meta charset="utf-8"></head><body><main id="gallery-look-cover-generator"></main></body></html>');
    return;
  }
  if (request.method !== 'GET' || !pathname.startsWith('/dist/')) {
    response.writeHead(404).end();
    return;
  }
  const relative = decodeURIComponent(pathname.slice('/dist/'.length));
  if (!relative || relative.includes('..') || relative.includes('\\')) {
    response.writeHead(400).end();
    return;
  }
  try {
    const body = await fs.readFile(path.join(dist, relative));
    const contentType = /\.m?js$/i.test(relative) ? 'text/javascript; charset=utf-8'
      : relative.endsWith('.json') ? 'application/json; charset=utf-8'
        : /\.png$/i.test(relative) ? 'image/png'
          : /\.webp$/i.test(relative) ? 'image/webp' : 'application/octet-stream';
    response.writeHead(200, {'content-type': contentType, 'cache-control': 'no-store'});
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});

await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await launchBrowser({headless: true});
  const page = await browser.newPage();
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.exposeFunction('__writeGalleryLookCover', async (filename, values) => {
    assert(expectedOutputNames.has(filename), `Browser attempted to write an unregistered cover filename: ${filename}`);
    assert(!storedNames.has(filename), `Browser attempted to write a cover twice: ${filename}`);
    assert(Array.isArray(values) && values.length >= 32 && values.every(value => Number.isInteger(value) && value >= 0 && value <= 255), `Invalid encoded WebP bytes: ${filename}`);
    const bytes = Buffer.from(values);
    await fs.writeFile(path.join(outputDirectory, filename), bytes);
    storedNames.add(filename);
    return {byteSize: bytes.length, sha256: hash(bytes)};
  });
  await page.exposeFunction('__galleryLookProgress', (complete, total, lookId) => {
    if (complete === 1 || complete % 10 === 0 || complete === total) console.log(`Gallery look cover render: ${complete}/${total} ${lookId}`);
  });
  await page.goto(`${origin}/harness`);
  const results = await page.evaluate(async ({origin, looks}) => {
    const [templateModule, draftModule, rendererModule, loaderModule] = await Promise.all([
      import(`${origin}/dist/studio-edit-templates.js?v=111`),
      import(`${origin}/dist/studio-draft.js?v=111`),
      import(`${origin}/dist/studio-renderer.js?v=111`),
      import(`${origin}/dist/studio-preview-loader.js?v=111`)
    ]);
    const {TEMPLATE_REGISTRY, getTemplateRecipe} = templateModule;
    const {createDraft, updateDraft} = draftModule;
    const {renderDraft, STUDIO_RENDERER_REVISION} = rendererModule;
    const {createPreviewLoader} = loaderModule;
    const sourceResponse = await fetch(`${origin}/dist/assets/templates/sources.json`, {cache: 'no-store'});
    if (!sourceResponse.ok) throw new Error(`Cannot read exact approved template sources: HTTP ${sourceResponse.status}`);
    const sourceManifest = await sourceResponse.json();
    const loader = createPreviewLoader({
      assetRegistry: sourceManifest.assets,
      deliveryRegistry: [],
      baseURL: `${origin}/dist/`,
      verifyHash: true,
      maxDecodedBytes: 96 * 1024 * 1024,
      maxIdleEntries: 24
    });
    const summary = [];
    try {
      for (const [index, look] of looks.entries()) {
        const template = TEMPLATE_REGISTRY.find(row => row.id === look.templateId && row.version === look.templateVersion);
        if (!template) throw new Error(`Missing exact registered Template for ${look.id}`);
        const artwork = {id: look.artworkId, version: look.artworkVersion};
        const recipe = getTemplateRecipe(template, look.defaultOptions);
        if (!recipe || recipe.id !== look.defaultRecipeId) throw new Error(`Default recipe mismatch for ${look.id}`);
        const sessionId = `gallery-look-cover-${look.id}`;
        const baseDraft = createDraft({artwork, template, sessionId});
        const draft = updateDraft(baseDraft, look.defaultOptions, {template});
        const rendered = await renderDraft({draft, template, loader, assetRegistry: sourceManifest.assets, sessionId});
        try {
          if (rendered.status !== 'success' || rendered.recipeId !== look.defaultRecipeId
            || rendered.artworkId !== look.artworkId || rendered.artworkVersion !== look.artworkVersion
            || rendered.templateId !== look.templateId || rendered.templateVersion !== look.templateVersion) {
            throw new Error(`Renderer returned the wrong source binding or recipe for ${look.id}`);
          }
          const renderedPixels = rendered.canvas.getContext('2d', {willReadFrequently: true})
            .getImageData(0, 0, rendered.width, rendered.height).data;
          let sourceTransparent = false;
          let sourceVisible = false;
          for (let alpha = 3; alpha < renderedPixels.length; alpha += 4) {
            if (renderedPixels[alpha] === 0) sourceTransparent = true;
            if (renderedPixels[alpha] > 0) sourceVisible = true;
            if (sourceTransparent && sourceVisible) break;
          }
          if (!sourceTransparent || !sourceVisible) throw new Error(`Renderer output lost real transparency/visible pixels for ${look.id}`);
          const encoded = [];
          for (const size of [256, 512]) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const context = canvas.getContext('2d', {alpha: true, willReadFrequently: true});
            context.clearRect(0, 0, size, size);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            const scale = Math.min(size / rendered.width, size / rendered.height);
            const width = rendered.width * scale;
            const height = rendered.height * scale;
            context.drawImage(rendered.canvas, (size - width) / 2, (size - height) / 2, width, height);
            const blob = await new Promise((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error(`WebP encoding failed for ${look.id} ${size}px`)), 'image/webp', 0.92));
            if (blob.type !== 'image/webp') throw new Error(`Browser did not encode WebP for ${look.id} ${size}px: ${blob.type}`);
            const decoded = await createImageBitmap(blob);
            try {
              if (decoded.width !== size || decoded.height !== size) throw new Error(`Encoded cover dimensions differ for ${look.id} ${size}px`);
              const check = document.createElement('canvas');
              check.width = size;
              check.height = size;
              const checkContext = check.getContext('2d', {alpha: true, willReadFrequently: true});
              checkContext.drawImage(decoded, 0, 0);
              const pixels = checkContext.getImageData(0, 0, size, size).data;
              let hasTransparentPixel = false;
              let hasVisiblePixel = false;
              for (let alpha = 3; alpha < pixels.length; alpha += 4) {
                if (pixels[alpha] === 0) hasTransparentPixel = true;
                if (pixels[alpha] > 0) hasVisiblePixel = true;
                if (hasTransparentPixel && hasVisiblePixel) break;
              }
              if (!hasTransparentPixel || !hasVisiblePixel) throw new Error(`WebP cover lost real alpha/visible pixels for ${look.id} ${size}px`);
              const suffix = size === 256 ? 'poster256' : 'poster512';
              const filename = `${look.id}-${look.version}-${size}.webp`;
              const bytes = new Uint8Array(await blob.arrayBuffer());
              const stored = await window.__writeGalleryLookCover(filename, Array.from(bytes));
              encoded.push({purpose: suffix, ref: suffix === 'poster256' ? look.assetRefs.poster : look.assetRefs.poster512,
                filename, byteSize: stored.byteSize, sha256: stored.sha256, width: size, height: size,
                hasAlpha: true, hasTransparency: true, mime: blob.type});
              check.width = 0;
              check.height = 0;
            } finally {
              decoded.close();
              canvas.width = 0;
              canvas.height = 0;
            }
          }
          summary.push({lookId: look.id, artworkId: look.artworkId, templateId: look.templateId,
            recipeId: rendered.recipeId, rendererRevision: STUDIO_RENDERER_REVISION, covers: encoded});
        } finally {
          rendered.release();
        }
        await window.__galleryLookProgress(index + 1, looks.length, look.id);
      }
    } finally {
      loader.releaseAll();
    }
    return summary;
  }, {origin, looks: preparedLooks.map(({look}) => look)});

  assert.deepEqual(pageErrors, [], `Browser renderer page errors: ${pageErrors.join('; ')}`);
  assert.equal(results.length, preparedLooks.length, 'Every alternative GalleryLook was rendered.');
  assert.equal(storedNames.size, expectedOutputNames.size, 'Every registered 256/512 cover was written once.');

  const metadata = [];
  for (const [index, prepared] of preparedLooks.entries()) {
    const result = results[index];
    assert.equal(result.lookId, prepared.look.id);
    assert.equal(result.recipeId, prepared.look.defaultRecipeId);
    assert.equal(result.rendererRevision, STUDIO_RENDERER_REVISION);
    assert.equal(result.covers.length, 2);
    for (const cover of result.covers) {
      const file = prepared.expectedFiles.find(row => row.filename === cover.filename);
      assert(file, `Unexpected output file for ${prepared.look.id}: ${cover.filename}`);
      assert.equal(cover.ref, file.ref);
      const bytes = await fs.readFile(path.join(outputDirectory, file.filename));
      assert.equal(bytes.length, cover.byteSize, `Encoded byte size mismatch: ${file.filename}`);
      const digest = hash(bytes);
      assert.equal(digest, cover.sha256, `Encoded WebP hash mismatch: ${file.filename}`);
      metadata.push({
        ref: cover.ref,
        id: cover.ref,
        version: prepared.look.version,
        lookId: prepared.look.id,
        lookVersion: prepared.look.version,
        artworkId: prepared.look.artworkId,
        artworkVersion: prepared.look.artworkVersion,
        templateId: prepared.look.templateId,
        templateVersion: prepared.look.templateVersion,
        appearance: prepared.look.appearance,
        recipeId: prepared.look.defaultRecipeId,
        sourceRecipeSha256: prepared.sourceRecipeSha256,
        sourceAssets: prepared.assets,
        rendererRevision: STUDIO_RENDERER_REVISION,
        purpose: cover.purpose,
        path: file.path,
        sha256: digest,
        byteSize: bytes.length,
        width: cover.width,
        height: cover.height,
        mime: cover.mime,
        publicationStatus: 'published-derivative',
        resourceKind: 'gallery-look-poster',
        alpha: {hasAlpha: cover.hasAlpha, hasTransparency: cover.hasTransparency},
        sourceRef: `rendered by ${STUDIO_RENDERER_REVISION} from ${prepared.template.id}@${prepared.template.version} recipe ${prepared.recipe.id}; source assets SHA-256 recorded below`
      });
    }
  }
  metadata.sort((a, b) => a.ref.localeCompare(b.ref, 'en'));
  const actualNames = (await fs.readdir(outputDirectory)).sort();
  assert.deepEqual(actualNames, [...expectedOutputNames].sort(), 'Generated gallery-look directory contains an orphan or missing file.');
  const source = `// Generated by scripts/generate-gallery-look-covers.mjs.\n// Do not edit by hand; values are derived from the current registered GalleryLook recipes.\nexport const GALLERY_LOOK_ASSETS = Object.freeze(${JSON.stringify(metadata, null, 2)});\n`;
  await fs.writeFile(dataPath, source);
  console.log(`Generated ${metadata.length} transparent WebP cover derivatives for ${preparedLooks.length} alternative GalleryLooks.`);
  console.log(`Browser: ${browser.version()}; renderer: ${STUDIO_RENDERER_REVISION}; directory: dist/assets/gallery-looks.`);
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
