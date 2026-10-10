import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {launchBrowser} from './browser-runtime.mjs';
import {createReviewOutputDirectory} from './review-output.mjs';

const repositoryRoot = path.resolve('.');
const args = process.argv.slice(2);
function option(name) {
  const inline = args.find(argument => argument.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  const index = args.indexOf(name);
  if (index < 0) return undefined;
  const value = args[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${name} requires a path.`);
  return value;
}

const runDirectory = option('--run-dir');
const buildReportFile = option('--build-report');
const artworkReviewFile = option('--artwork-review');
assert(runDirectory, 'Pass --run-dir <editing run directory> from the current editing verification.');
assert(buildReportFile, 'Pass --build-report <build-report.json> from the current static build.');

const runPath = path.resolve(runDirectory);
const reportPath = path.join(runPath, 'report.json');
const buildPath = path.resolve(buildReportFile);
const manifestPath = path.resolve('dist/assets/templates/sources.json');
const manifestBytes = await fs.readFile(manifestPath);
const manifest = JSON.parse(manifestBytes);
const manifestHash = createHash('sha256').update(manifestBytes).digest('hex');
const reportBytes = await fs.readFile(reportPath);
const report = JSON.parse(reportBytes);
assert.equal(report.sourceManifestSha256, manifestHash, 'The editing run must use the current exact asset manifest.');
assert.equal(report.engineeringReport.templates.length, 2, 'The report must include both real templates.');
const buildBytes = await fs.readFile(buildPath);
const buildReport = JSON.parse(buildBytes);
for (const file of buildReport.files) {
  const bytes = await fs.readFile(path.resolve(repositoryRoot, file.path));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), file.sha256, `Current build artifact changed: ${file.path}`);
}
const newArtworks = artworkReviewFile ? JSON.parse(await fs.readFile(path.resolve(artworkReviewFile), 'utf8')) : [];
assert(Array.isArray(newArtworks), 'Optional --artwork-review must contain a JSON array.');

const pngData = async file => `data:image/png;base64,${(await fs.readFile(file)).toString('base64')}`;
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const templateRows = [];
for (const template of report.engineeringReport.templates) {
  const source = manifest.templates.find(item => item.templateId === template.templateId || item.id === template.templateId);
  assert(source, `No exact current template source for ${template.templateId}.`);
  const configurations = [];
  for (const config of template.configurations) {
    const file = `${template.templateId}-${String(config.index).padStart(2, '0')}.png`;
    const filePath = path.join(runPath, 'composites', file);
    const bytes = await fs.readFile(filePath);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), config.outputSha256, `${file}: rendered output hash mismatch.`);
    configurations.push({config, file, filePath, image: await pngData(filePath)});
  }
  const defaultRow = configurations.find(({config}) => Object.entries(source.defaults)
    .every(([key, value]) => config.options[key] === value));
  assert(defaultRow, `${template.templateId} has no rendered default configuration.`);
  templateRows.push({template, source, configurations, defaultRow, originalImage: await pngData(source.artworkBinding.path)});
}

const outputRoot = await createReviewOutputDirectory({name: 'template-review', args});
const visualRoot = path.join(outputRoot, 'visual');
await fs.mkdir(visualRoot, {recursive: true});
const browser = await launchBrowser({headless: true});
const page = await browser.newPage({viewport: {width: 1424, height: 700}, deviceScaleFactor: 1});
const buildHash = createHash('sha256').update(buildBytes).digest('hex');
const scope = {
  revision: 99,
  status: 'candidate-review',
  newArtworks,
  templateSourceManifestSha256: manifestHash,
  templates: [],
  page: {
    revision: 99,
    status: 'candidate-review',
    sourceHashFile: path.relative(outputRoot, buildPath),
    buildReportSha256: buildHash,
    files: buildReport.files
  },
  engineeringRun: path.relative(outputRoot, reportPath),
  historicalArtworkApprovalDoesNotExtend: true,
  publicEditable: false,
  deploymentAuthorized: false
};

try {
  for (const {template, source, configurations, defaultRow, originalImage} of templateRows) {
    const rows = configurations;
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>*{box-sizing:border-box}body{margin:0;padding:24px;background:#0b0d12;color:#f4f6fb;font:15px/1.5 Arial,sans-serif}h1{font-size:28px;margin:0 0 8px}.note{color:#b5bfd0;margin:0 0 22px}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}figure{margin:0;border:1px solid #586071;border-radius:12px;overflow:hidden;background:#141821}.pair{display:grid;grid-template-columns:1fr 1fr}.pair img{width:100%;display:block;object-fit:contain;padding:6px}.pair img:last-child{background:#f5f5f5}figcaption{padding:10px;font-size:13px;min-height:96px;overflow-wrap:anywhere}.comparison{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:0 0 24px}.comparison figure img{width:100%;height:260px;object-fit:contain}.comparison figure:nth-child(even) img{background:#f5f5f5}.comparison figcaption{min-height:0}.hash{color:#9da9bc;font:11px monospace}</style></head><body><h1>${escape(template.templateId)} · ${rows.length} 个真实 Draft 配方</h1><p class="note">当前工程验收输出，仅供候选审阅。每格为同一透明 PNG 的深/浅底浏览器显示；背景不在导出像素中。真实 renderer 输出与导出 hash 一致。Shape 固定；编号对应精确配方记录。<br>素材 manifest ${manifestHash.slice(0, 16)} · ${escape(path.basename(runPath))}</p><div class="comparison"><figure><img src="${originalImage}"><figcaption>原 Artwork · 深底 · 原字节保持</figcaption></figure><figure><img src="${originalImage}"><figcaption>原 Artwork · 浅底 · 原字节保持</figcaption></figure><figure><img src="${defaultRow.image}"><figcaption>默认 Draft #${defaultRow.config.index} · 深底</figcaption></figure><figure><img src="${defaultRow.image}"><figcaption>默认 Draft #${defaultRow.config.index} · 浅底</figcaption></figure></div><div class="grid">${rows.map(({config, image}) => `<figure><div class="pair"><img src="${image}"><img src="${image}"></div><figcaption><b>#${String(config.index).padStart(2, '0')} · ${escape(config.options.color)}</b><br>${escape(config.options.eyes)} · ${escape(config.options.glasses)} · ${escape(config.options.accessory)}<br><span class="hash">r${config.revision} · ${config.outputSha256.slice(0, 18)}</span></figcaption></figure>`).join('')}</div></body></html>`;
    const stem = `${template.templateId}-all-configurations`;
    await page.setContent(html);
    await page.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
    await page.screenshot({path: path.join(visualRoot, `${stem}.png`), fullPage: true});
    await fs.writeFile(path.join(visualRoot, `${stem}.html`), html);
    scope.templates.push({
      id: template.templateId,
      status: 'candidate-review',
      artworkId: template.artworkId,
      artworkVersion: template.artworkVersion,
      legalCount: template.legalCount,
      defaultReconstruction: {
        status: 'candidate-review',
        configurationIndex: defaultRow.config.index,
        outputSha256: defaultRow.config.outputSha256,
        originalSha256: source.artworkBinding.sha256
      },
      reviewSheet: `visual/${stem}.png`,
      configurations: rows.map(({config, filePath}) => ({
        ...config,
        loader: undefined,
        png: path.relative(outputRoot, filePath)
      }))
    });
  }
} finally {
  await browser.close();
}

await fs.writeFile(path.join(outputRoot, 'approval-scope.json'), `${JSON.stringify(scope, null, 2)}\n`);
console.log(`Template review package written to ${outputRoot}. No approval granted.`);
