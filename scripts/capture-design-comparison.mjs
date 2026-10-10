import fs from 'node:fs/promises';
import path from 'node:path';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';

const args = process.argv.slice(2);
function option(name, fallback) {
  const inline = args.find(argument => argument.startsWith(`${name}=`));
  if (inline) return path.resolve(inline.slice(name.length + 1));
  const index = args.indexOf(name);
  if (index >= 0) {
    const value = args[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`${name} requires a directory path.`);
    return path.resolve(value);
  }
  return path.resolve(fallback);
}

const browserDirectory = option('--browser-dir', '.artifacts/browser-acceptance');
const layoutDirectory = option('--layout-dir', '.artifacts/editor-layout');
const outputDirectory = resolveEvidenceDirectory('.artifacts/design-comparison');
const referenceDirectory = path.resolve('openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/dark-gallery-20261010/source-package/references');
const referenceFiles = new Map([
  ['D01', path.join(referenceDirectory, 'D01-main-third-dark-gallery-studio.png')],
  ['D02', path.join(referenceDirectory, 'D02-support-first-mobile-guide.png')]
]);
const actualFiles = {
  D01: [
    path.join(browserDirectory, 'gallery-1440-en.png'),
    path.join(browserDirectory, 'studio-1440-en.png'),
    path.join(layoutDirectory, 'en-dots-1440x900-preview.png'),
    path.join(layoutDirectory, 'en-dots-1440x900-actions.png')
  ],
  D02: [
    path.join(browserDirectory, 'gallery-390-zh-CN.png'),
    path.join(browserDirectory, 'studio-390-zh-CN.png'),
    path.join(layoutDirectory, 'zh-CN-dots-390x844-preview.png'),
    path.join(layoutDirectory, 'zh-CN-dots-390x844-actions.png'),
    path.join(layoutDirectory, 'zh-CN-grok-390x844-preview.png'),
    path.join(layoutDirectory, 'zh-CN-grok-390x844-actions.png')
  ]
};
for (const file of [...referenceFiles.values(), ...Object.values(actualFiles).flat()]) {
  try {
    await fs.access(file);
  } catch {
    throw new Error(`Design comparison input is missing: ${file}. Run npm run test:browser to produce fresh browser and editor-layout evidence, or pass --browser-dir and --layout-dir.`);
  }
}

const image = async file => `data:image/png;base64,${(await fs.readFile(file)).toString('base64')}`;
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const browser = await launchBrowser({headless: true});
try {
  const page = await browser.newPage({viewport: {width: 2048, height: 700}, deviceScaleFactor: 1});
  for (const id of ['D01', 'D02']) {
    const reference = await image(referenceFiles.get(id));
    const captures = await Promise.all(actualFiles[id].map(async file => ({
      name: path.basename(file),
      image: await image(file)
    })));
    const desktop = id === 'D01';
    const title = desktop ? 'D01 desktop gallery and Character Studio' : 'D02 mobile gallery and Character Studio';
    const subtitle = desktop ? '1440 × 900 · English' : '390 × 844 · 简体中文';
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>*{box-sizing:border-box}body{margin:0;background:#222;color:#fff;font:18px Arial,sans-serif;padding:18px}h1{font-size:26px;margin:0 0 16px}.comparison{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:16px}.source img{width:100%;height:auto;display:block}.actual{display:grid;grid-template-columns:repeat(${desktop ? 2 : 2},minmax(0,1fr));gap:12px;align-content:start}.actual figure{margin:0;min-width:0}.actual img{width:100%;height:auto;display:block;border:1px solid #505563;border-radius:6px}.actual figcaption{font-size:13px;color:#c4cad6;padding-top:6px;overflow-wrap:anywhere}.note{color:#bbb;font-size:15px;line-height:1.5;margin-top:16px}</style></head><body><h1>${title}</h1><div class="comparison"><section class="source"><h2>Selected reference (unchanged)</h2><img src="${reference}"><p class="note">Current implementation: the character gallery is the only navigation entry; cards open Character Studio; editable controls follow the real Template capabilities. No Guide page is part of the implemented flow.</p></section><section><h2>Fresh local browser captures — ${subtitle}</h2><div class="actual">${captures.map(capture => `<figure><img src="${capture.image}"><figcaption>${escape(capture.name)}</figcaption></figure>`).join('')}</div></section></div></body></html>`;
    await page.setContent(html);
    await page.locator('img').evaluateAll(images => Promise.all(images.map(current => current.decode())));
    const visualDirectory = path.join(outputDirectory, 'visual');
    await fs.mkdir(visualDirectory, {recursive: true});
    await page.screenshot({path: path.join(visualDirectory, `${id}-combined-comparison.png`), fullPage: true});
    await fs.writeFile(path.join(visualDirectory, `${id}-combined-comparison.html`), html);
  }
} finally {
  await browser.close();
}
console.log(`Design comparison uses only fresh browser/editor-layout evidence: ${outputDirectory}`);
