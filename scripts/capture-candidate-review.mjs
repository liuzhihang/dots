import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {PREVIEW_ARTWORKS, getAsset} from '../dist/studio-artwork-catalog.js?v=110';
import {launchBrowser} from './browser-runtime.mjs';
import {createReviewOutputDirectory} from './review-output.mjs';

const records = PREVIEW_ARTWORKS;
assert(records.length > 0, 'No preview-only Artwork candidates are registered; no review package was created.');

const dir = await createReviewOutputDirectory({name: 'artwork-review'});
const rows = [];
for (const artwork of records) {
  const asset = getAsset(artwork.assetRefs.original);
  const bytes = await fs.readFile(path.join('dist', asset.path.slice(2)));
  rows.push({
    id: artwork.id,
    version: artwork.version,
    sha256: createHash('sha256').update(bytes).digest('hex'),
    path: asset.path,
    status: artwork.artApproval.status,
    name: artwork.titleByLanguage['zh-CN'],
    image: `data:image/png;base64,${bytes.toString('base64')}`
  });
}
const html = `<html><head><style>*{box-sizing:border-box}body{margin:0;padding:24px;background:#222731;color:#fff;font:16px system-ui}h1{font-size:24px;margin:0 0 6px}p{color:#bec6d9;margin:0 0 20px}.grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}.item{min-width:0}h2{font-size:15px;line-height:1.4;min-height:42px}img{width:100%;height:228px;object-fit:contain;padding:6px;display:block}.dark{background:#0b0d12}.light{background:#fff}small{font-size:11px;color:#bec6d9;overflow-wrap:anywhere;display:block;margin-top:6px}</style></head><body><h1>Dots · 当前候选外观</h1><p>候选列表依据真实 Artwork 登记状态；浏览器按实际 alpha 分别合成深色与白色背景，来源原 PNG 未改写。</p><div class="grid">${rows.map(row => `<article class="item"><h2>${row.name}</h2><img class="dark" src="${row.image}"><img class="light" src="${row.image}"><small>${row.id} @ ${row.version}<br>SHA-256 ${row.sha256}</small></article>`).join('')}</div></body></html>`;
await fs.writeFile(path.join(dir, 'new-artworks-review.html'), html);

const browser = await launchBrowser({headless: true});
try {
  const page = await browser.newPage({viewport: {width: 1440, height: 710}});
  await page.setContent(html);
  await page.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
  await page.screenshot({path: path.join(dir, 'new-artworks-review.png'), fullPage: true});
} finally {
  await browser.close();
}

await fs.writeFile(path.join(dir, 'new-artworks-review.json'), JSON.stringify(rows.map(({image, ...row}) => row), null, 2));
console.log(`Candidate artwork review package written to ${dir}.`);
