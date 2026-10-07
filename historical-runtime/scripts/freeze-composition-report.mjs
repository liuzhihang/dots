#!/usr/bin/env node
import {createHash} from 'node:crypto';
import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {basename, dirname, join, resolve, sep} from 'node:path';
import {execFileSync} from 'node:child_process';
import {gunzipSync} from 'node:zlib';
import {fileURLToPath} from 'node:url';
import {coordinationReviewMatches, summarizeCoordinationReviews, validateResolvedRenderMetadata} from '../dist/studio-composition-coverage.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
function arg(name, fallback = null) { const index = args.indexOf(name); return index >= 0 ? args[index + 1] : fallback; }
const bundlePath = arg('--bundle');
const requestedOut = arg('--out');
const expectedSourceId = arg('--expected-source-id');
const manifestOnly = args.includes('--manifest-only');
const validateOnly = args.includes('--validate-only');
if (!bundlePath && !manifestOnly) {
  console.error('用法: node scripts/freeze-composition-report.mjs --bundle <capture.tar.gz> [--out design/acceptance/current-YYYYMMDD-v83-r2]');
  process.exit(2);
}

const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const command = (name, parameters) => execFileSync(name, parameters, {cwd: root, encoding: 'utf8'}).trimEnd();
const ensureSafeRelative = value => {
  if (!value || value.startsWith('/') || value.includes('\\') || value.split('/').some(part => !part || part === '.' || part === '..')) throw new Error(`归档路径不安全: ${value}`);
  return value;
};

function readTar(bytes) {
  const files = new Map();
  for (let offset = 0; offset + 512 <= bytes.length;) {
    const header = bytes.subarray(offset, offset + 512);
    if (header.every(value => value === 0)) break;
    const nulName = header.subarray(0, 100).indexOf(0);
    const name = new TextDecoder().decode(header.subarray(0, nulName < 0 ? 100 : nulName));
    const sizeField = new TextDecoder().decode(header.subarray(124, 136)).replace(/\0.*$/, '').trim();
    const size = Number.parseInt(sizeField || '0', 8);
    if (!Number.isSafeInteger(size) || size < 0) throw new Error(`归档文件大小无效: ${name}`);
    const checkHeader = Uint8Array.from(header);
    const checksumField = new TextDecoder().decode(header.subarray(148, 156)).replace(/\0.*$/, '').trim();
    checkHeader.fill(32, 148, 156);
    const checksum = checkHeader.reduce((total, value) => total + value, 0);
    if (checksum !== Number.parseInt(checksumField, 8)) throw new Error(`归档校验失败: ${name}`);
    ensureSafeRelative(name);
    if (files.has(name)) throw new Error(`归档路径重复: ${name}`);
    const dataStart = offset + 512, dataEnd = dataStart + size;
    if (dataEnd > bytes.length) throw new Error(`归档内容截断: ${name}`);
    files.set(name, Buffer.from(bytes.subarray(dataStart, dataEnd)));
    offset = dataStart + Math.ceil(size / 512) * 512;
  }
  return files;
}

function trackedSourceFiles() {
  const all = command('git', ['ls-files', '-co', '--exclude-standard']).split('\n').filter(Boolean);
  const exact = new Set(['AGENTS.md', 'DESIGN.md', 'README.md', 'package.json', 'package-lock.json', 'vite.config.mjs']);
  return all.filter(path => exact.has(path) || path.startsWith('dist/') || path.startsWith('src/') || path.startsWith('scripts/') || path.startsWith('.agents/rules/'))
    .filter(path => !path.startsWith('dist/assets/qa/') && !path.startsWith('design/acceptance/'))
    .filter(path => existsSync(join(root, path)));
}

function sourceManifest() {
  const paths = trackedSourceFiles().sort();
  const files = paths.map(path => ({path, sha256: sha(readFileSync(join(root, path)))}));
  const sourceId = `sha256:${sha(Buffer.from(files.map(file => `${file.path}\0${file.sha256}`).join('\n')))}`;
  const status = command('git', ['status', '--porcelain=v1', '--untracked-files=all']).split('\n').filter(Boolean);
  const changed = new Set(status.map(line => line.slice(3).trim().replace(/^"|"$/g, '')));
  const dirtyFiles = files.filter(file => changed.has(file.path));
  const dirtySnapshotHash = dirtyFiles.length ? sha(Buffer.from(dirtyFiles.map(file => `${file.path}\0${file.sha256}`).join('\n'))) : null;
  return {
    sourceId, commit: command('git', ['rev-parse', 'HEAD']), branch: command('git', ['branch', '--show-current']),
    dirty: dirtyFiles.length > 0, dirtySnapshotHash,
    files, dirtyFiles,
    manifestSha256: sha(Buffer.from(JSON.stringify(files)))
  };
}

if (manifestOnly) {
  console.log(JSON.stringify(sourceManifest(), null, 2));
  process.exit(0);
}

function localDate() {
  return new Intl.DateTimeFormat('en-CA', {timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date()).replaceAll('-', '');
}
function pickOutput(cacheVersion) {
  const base = `design/acceptance/current-${localDate()}-v${cacheVersion}`;
  if (requestedOut) return requestedOut;
  if (!existsSync(join(root, base))) return base;
  let revision = 2;
  while (existsSync(join(root, `${base}-r${revision}`))) revision++;
  return `${base}-r${revision}`;
}

const absBundle = resolve(bundlePath);
const compressed = readFileSync(absBundle);
const tar = gunzipSync(compressed);
const files = readTar(tar);
const bundleManifestBytes = files.get('capture-manifest.json');
if (!bundleManifestBytes) throw new Error('捕获包缺少 capture-manifest.json');
const bundleManifest = JSON.parse(bundleManifestBytes.toString('utf8'));
const captureKind = bundleManifest.schema === 'dot-studio-template-capture-bundle/v1' ? 'template' : bundleManifest.schema === 'dot-studio-module-capture-bundle/v1' ? 'modular' : null;
if (!captureKind) throw new Error(`不支持的捕获包 schema: ${bundleManifest.schema}`);
const expectedOutputCount = captureKind === 'template' ? 22 : bundleManifest.inventory?.outputCount;
if (!Array.isArray(bundleManifest.records) || !Number.isInteger(expectedOutputCount) || bundleManifest.records.length !== expectedOutputCount || (captureKind === 'template' && expectedOutputCount !== 22)) throw new Error(`${captureKind === 'template' ? '模板捕获' : '模块适配捕获'}清单数与实际记录数不符：${bundleManifest.records?.length ?? 0}/${expectedOutputCount ?? 'unknown'}`);
let atlasAnnotations=null;
if (bundleManifest.annotationsArtifact) {
  const reference=bundleManifest.annotationsArtifact;
  const annotationBytes=files.get(reference.filename);
  if (!annotationBytes || annotationBytes.length!==reference.bytes || sha(annotationBytes)!==reference.sha256) throw new Error('图鉴 localStorage 标注附件缺失或哈希不符');
  atlasAnnotations=JSON.parse(annotationBytes.toString('utf8'));
  if (atlasAnnotations.schema!=='dot-studio-atlas-annotations/v1') throw new Error('图鉴标注附件 schema 无效');
  if (!Array.isArray(atlasAnnotations.issueAnnotations) || !Array.isArray(atlasAnnotations.coordinationReviews)) throw new Error('图鉴标注附件字段不完整');
} else if (captureKind==='modular') {
  throw new Error('模块捕获包必须包含图鉴 localStorage 标注附件');
}
let coordinationSummary=null;
if (captureKind==='modular') {
  const coordination=bundleManifest.coordination;
  if (!coordination?.separateFromEngineeringAndArtApproval || !Array.isArray(coordination.reviews) || !coordination.summary) throw new Error('模块捕获包缺少独立协调性复核记录');
  coordinationSummary=summarizeCoordinationReviews(coordination.reviews);
  if (coordinationSummary.invalid.length || JSON.stringify(coordinationSummary)!==JSON.stringify(coordination.summary)) throw new Error('协调性复核摘要与逐适配记录不一致或包含无效项');
  if (!atlasAnnotations || JSON.stringify(atlasAnnotations.coordinationReviews)!==JSON.stringify(coordination.reviews)) throw new Error('冻结附件中的协调性复核与 capture manifest 不一致');
  const reviewById=new Map(coordination.reviews.map(review=>[review.adaptationId,review]));
  if (reviewById.size!==coordination.reviews.length) throw new Error('协调性复核适配 ID 重复');
  for (const record of bundleManifest.records) {
    if (!record.moduleRecipeId) continue;
    const review=reviewById.get(record.coordinationReviewId);
    if (!review || !coordinationReviewMatches(review,{adaptationId:record.coordinationReviewId,subject:record.coordinationSubject})) throw new Error(`模块输出缺少绑定精确 adaptation 的协调性复核: ${record.id}`);
    const geometry=validateResolvedRenderMetadata(record.renderMetadata,record.coordinationSubject);
    if ((record.status==='pass'||record.renderMetadata) && !geometry.valid) throw new Error(`模块输出缺少精确动态 fit 或实际绘制元数据: ${record.id} · ${geometry.errors.join('；')}`);
  }
}
const pngSignature = Buffer.from([137,80,78,71,13,10,26,10]);
function requirePng(name, metadata, context) {
  const bytes = files.get(name);
  if (!bytes) throw new Error(`${context} 缺少 PNG 字节文件: ${name}`);
  if (bytes.length < 24 || !bytes.subarray(0,8).equals(pngSignature)) throw new Error(`${context} 不是有效 PNG 字节: ${name}`);
  const width = bytes.readUInt32BE(16), height = bytes.readUInt32BE(20);
  const actualSha256 = sha(bytes);
  if (metadata.sha256 && metadata.sha256 !== actualSha256) throw new Error(`${context} PNG SHA-256 与实际字节不一致: ${name}`);
  if (metadata.bytes !== undefined && metadata.bytes !== bytes.length) throw new Error(`${context} PNG 字节长度与清单不一致: ${name}`);
  if (metadata.width !== undefined && metadata.width !== width) throw new Error(`${context} PNG 宽度与清单不一致: ${name}`);
  if (metadata.height !== undefined && metadata.height !== height) throw new Error(`${context} PNG 高度与清单不一致: ${name}`);
  return {bytes: bytes.length, sha256: actualSha256, width, height};
}
function requireAlphaStats(stats, width, height, context) {
  if (!stats || !['transparentPixels','opaquePixels','partialAlphaPixels'].every(key => Number.isInteger(stats[key]) && stats[key] >= 0)) throw new Error(`${context} 缺少 PNG alpha 像素统计`);
  if (stats.transparentPixels + stats.opaquePixels + stats.partialAlphaPixels !== width * height) throw new Error(`${context} alpha 像素统计总数与画布尺寸不符`);
  if (stats.transparentPixels <= 0 || stats.opaquePixels + stats.partialAlphaPixels <= 0) throw new Error(`${context} PNG 必须同时具有透明背景与可见角色像素`);
  if (!stats.alphaBounds || !Number.isInteger(stats.alphaBounds.x) || !Number.isInteger(stats.alphaBounds.y) || !Number.isInteger(stats.alphaBounds.width) || !Number.isInteger(stats.alphaBounds.height) || stats.alphaBounds.width < 1 || stats.alphaBounds.height < 1 || stats.alphaBounds.x < 0 || stats.alphaBounds.y < 0 || stats.alphaBounds.x + stats.alphaBounds.width > width || stats.alphaBounds.y + stats.alphaBounds.height > height) throw new Error(`${context} PNG 可见像素范围无效`);
}
const recordIds = new Set(), stateIds = new Set(), moduleCaseIds = new Set(), backgroundModes = new Set(['transparent']);
for (const record of bundleManifest.records) {
  if (!record.id || recordIds.has(record.id)) throw new Error(`捕获用例 ID 缺失或重复: ${record.id ?? '(missing)'}`);
  recordIds.add(record.id);
  if (!record.stateId || !backgroundModes.has(record.background)) throw new Error(`捕获用例缺少状态或背景模式: ${record.id}`);
  if (captureKind === 'template') stateIds.add(`${record.artworkId}::${record.stateId}`);
  else {
    if (!record.moduleCaseId) throw new Error(`模块捕获用例缺少原始覆盖 ID: ${record.id}`);
    moduleCaseIds.add(record.moduleCaseId);
  }
  if (!['pass','fail','blocked'].includes(record.status)) throw new Error(`捕获用例状态无效: ${record.id} · ${record.status}`);
  for (const asset of record.sourceAssets ?? []) {
    if (asset.src && (!/^\.\/assets\/[a-zA-Z0-9._/-]+$/.test(asset.src) || asset.src.split('/').includes('..'))) throw new Error(`源素材路径不属于登记的本站资源: ${record.id} · ${asset.id}`);
    if (asset.filename && asset.actualSha256) {
      const sourcePng = requirePng(asset.filename, {sha256:asset.actualSha256,bytes:asset.bytes,width:asset.width,height:asset.height}, `${record.id} 源素材 ${asset.id}`);
      requireAlphaStats(asset.alpha, sourcePng.width, sourcePng.height, `${record.id} 源素材 ${asset.id}`);
    }
    if (asset.status === 'pass') {
      if (!asset.filename || typeof asset.version !== 'string' || !asset.version || asset.expectedSha256 !== asset.actualSha256) throw new Error(`模板源素材登记状态/版本/hash 不完整: ${record.id} · ${asset.id}`);
      if (!asset.src || !/^\.\/assets\/[a-zA-Z0-9._/-]+$/.test(asset.src) || asset.src.split('/').includes('..')) throw new Error(`通过源素材缺少可信本站来源: ${record.id} · ${asset.id}`);
    } else if (record.status === 'pass') throw new Error(`通过用例包含未通过的源素材: ${record.id} · ${asset.id}`);
  }
  if (record.status === 'pass') {
    if (!Array.isArray(record.sourceAssets) || record.sourceAssets.length === 0) throw new Error(`通过用例缺少源素材字节证据: ${record.id}`);
    if (!record.canvas?.filename || !record.canvas.sha256) throw new Error(`通过用例缺少 Canvas PNG 字节证据: ${record.id}`);
    const compositionRefs = new Set((record.composition?.assetRefs ?? []).map(ref => ref.id));
    if (captureKind === 'modular' && (record.composition?.kind !== 'modular' || !record.moduleRecipeId)) throw new Error(`通过模块用例缺少真实 modular composition: ${record.id}`);
    const sourceRefs = new Set(record.sourceAssets.map(asset => asset.id));
    if (!compositionRefs.size || compositionRefs.size !== sourceRefs.size || [...compositionRefs].some(id => !sourceRefs.has(id))) throw new Error(`通过用例素材字节证据与 ResolvedComposition 引用不一致: ${record.id}`);
    const canvasPng = requirePng(record.canvas.filename, record.canvas, `${record.id} Canvas 输出`);
    if (canvasPng.width !== record.width || canvasPng.height !== record.height) throw new Error(`Canvas 输出尺寸与状态声明不一致: ${record.id}`);
    requireAlphaStats(record.canvas, canvasPng.width, canvasPng.height, `${record.id} Canvas 输出`);
    if (typeof record.canvas.visiblePixelRatio !== 'number' || record.canvas.visiblePixelRatio <= 0 || record.canvas.visiblePixelRatio > 1) throw new Error(`Canvas 可见像素比例无效: ${record.id}`);
  }
}
if (captureKind === 'template') {
  if (stateIds.size !== 22) throw new Error(`模板状态唯一数应为 22；得到 ${stateIds.size}`);
  for (const stateKey of stateIds) for (const background of backgroundModes) {
    const [artworkId,stateId]=stateKey.split('::');
    if (!bundleManifest.records.some(record => record.artworkId === artworkId && record.stateId === stateId && record.background === background)) throw new Error(`捕获缺少状态/背景组合: ${stateKey} · ${background}`);
  }
} else {
  if (!moduleCaseIds.size || expectedOutputCount !== moduleCaseIds.size * backgroundModes.size) throw new Error(`模块适配必须为每个声明 case 捕获透明输出；得到 ${moduleCaseIds.size} 个 case/${expectedOutputCount} 项`);
  for (const caseId of moduleCaseIds) for (const background of backgroundModes) {
    if (!bundleManifest.records.some(record => record.moduleCaseId === caseId && record.background === background)) throw new Error(`模块捕获缺少 case/背景组合: ${caseId} · ${background}`);
  }
  for (const exclusion of bundleManifest.hardConstraintExclusions ?? []) {
    if (!exclusion.hardConstraintExcluded || !exclusion.hardConstraint || !exclusion.exclusionReason) throw new Error(`模块硬约束排除缺少可追溯依据: ${exclusion.id ?? '(missing)'}`);
  }
}
const captureCases = bundleManifest.records.map(record => ({id: record.id, declaredRequired: true, resolvable: record.status === 'pass'}));
const statusCounts = bundleManifest.records.reduce((counts, record) => { counts[record.status]++; return counts; }, {pass:0,fail:0,blocked:0});
const coverage = {
  declared: captureCases.length,
  ...statusCounts,
  excluded: 0
};
coverage.structuralHardConstraintExclusions = captureKind === 'modular' ? (bundleManifest.hardConstraintExclusions ?? []).length : 0;
const captureTool = bundleManifest.browser?.captureTool ?? {method:'unreported',automation:'unreported',browser:'unreported'};
const scopeNote = captureKind === 'template'
  ? '本报告覆盖 22 个模板状态的透明输出；独立模块适配结果由同一冻结目录下的 module-canvas 报告记录，随机候选接线需另行验证。'
  : '本报告覆盖捕获清单中已登记模块配方的透明输出；模板基线由并列模板报告记录，随机候选接线需另行验证。';
if (coverage.pass + coverage.fail + coverage.blocked !== coverage.declared) throw new Error('捕获项分母与执行状态总数不一致');
if (bundleManifest.coverage?.denominator !== coverage.declared || bundleManifest.coverage?.counts?.pass !== coverage.pass || bundleManifest.coverage?.counts?.fail !== coverage.fail || bundleManifest.coverage?.counts?.blocked !== coverage.blocked) throw new Error('捕获报告覆盖分母/状态计数与逐项记录不一致');
if (validateOnly) {
  console.log(JSON.stringify({valid:true,captureKind,records:coverage.declared,counts:{pass:coverage.pass,fail:coverage.fail,blocked:coverage.blocked},hardConstraintExclusions:coverage.structuralHardConstraintExclusions,sourceFiles:[...files.keys()].filter(name=>name.startsWith('source/')).length,canvasFiles:[...files.keys()].filter(name=>name.startsWith('canvas/')).length,annotationsArtifact:atlasAnnotations?{schema:atlasAnnotations.schema,scope:atlasAnnotations.scope,issueAnnotationCount:atlasAnnotations.issueAnnotations.length}:null,coordinationSummary:coordinationSummary?{adaptations:coordinationSummary.adaptations,disposition:coordinationSummary.disposition,engineering:coordinationSummary.engineering,artApproval:coordinationSummary.artApproval}:null},null,2));
  process.exit(0);
}

const outputRelative = pickOutput(bundleManifest.cacheVersion || 'unknown');
const output = resolve(root, outputRelative);
if (!output.startsWith(`${root}${sep}`)) throw new Error('证据目录必须位于仓库内');
if (existsSync(output)) throw new Error(`拒绝覆盖已存在冻结目录: ${outputRelative}`);
mkdirSync(output, {recursive: false});

try {
  const evidence = [];
  for (const [name, bytes] of files) {
    if (name === 'capture-manifest.json') continue;
    const relativeName = ensureSafeRelative(name);
    const target = resolve(output, relativeName);
    if (!target.startsWith(`${output}${sep}`)) throw new Error(`证据文件越界: ${name}`);
    mkdirSync(dirname(target), {recursive: true});
    writeFileSync(target, bytes, {flag: 'wx'});
    evidence.push({path: relativeName, bytes: bytes.length, sha256: sha(bytes)});
  }
  const source = sourceManifest();
  const sourceMatch = expectedSourceId ? source.sourceId === expectedSourceId : null;
  const isInvalidated = sourceMatch === false;
  const freeze = {
    schema: 'dot-studio-composition-coverage-report/v1',
    captureKind,
    createdAt: new Date().toISOString(),
    classification: isInvalidated ? 'invalidated-source-drift' : sourceMatch === true ? 'source-matched-capture-pending-human-review' : 'source-unbound-diagnostic',
    captureTool,
    source,
    capturedSourceId: expectedSourceId ?? null,
    sourceMatchedCapture: sourceMatch,
    runtime: {cacheVersion: bundleManifest.cacheVersion, ...bundleManifest.browser},
    inventory: bundleManifest.inventory,
    integrity: bundleManifest.integrity,
    coverage,
    hardConstraintExclusions: bundleManifest.hardConstraintExclusions ?? [],
    annotationsArtifact:bundleManifest.annotationsArtifact??null,
    coordination:captureKind==='modular' ? {...bundleManifest.coordination,summary:coordinationSummary} : null,
    atlasAnnotations,
    cases: bundleManifest.records.map(record => ({id: record.id, moduleCaseId: record.moduleCaseId ?? null, moduleRecipeId: record.moduleRecipeId ?? null, moduleRecipeVersion:record.moduleRecipeVersion??null, coverageKind: record.coverageKind ?? 'template-background', baseId: record.baseId ?? null, assetIds: record.assetIds ?? [], poseId: record.poseId ?? null, lookId: record.lookId, artworkId: record.artworkId, recipeId: record.recipeId, stateId: record.stateId, background: record.background, view: record.view, declaredRequired: true, hardConstraintExcluded: false, resolvable: record.status === 'pass', status: record.status, approvalStatus: record.approvalStatus ?? null, engineeringStatus: record.engineeringStatus ?? null, coordinationReviewId:record.coordinationReviewId??null, coordinationSubject:record.coordinationSubject??null, coordinationReview:record.coordinationReview??null, atlasIssueAnnotation:record.atlasIssueAnnotation??null, renderMetadata:record.renderMetadata??null, reason: record.issue, config: record.config, composition: record.composition, sourceAssets: record.sourceAssets, canvas: record.canvas})),
    coordination: captureKind==='modular' ? bundleManifest.coordination : null,
    atlasAnnotations,
    artApproval: bundleManifest.artApproval,
    evidence,
    reviewState: isInvalidated ? 'invalidated-source-drift' : sourceMatch === true ? 'pending-human-review' : 'source-unbound-diagnostic', baselineAccepted: false,
    notes: ['内部工程证据，不替代人工美术确认。', `PNG/Canvas 捕获方法取自捕获包元数据：${captureTool.method} · ${captureTool.automation} · ${captureTool.browser}。首页前后截图的浏览器工具及方法另见 browser-core 对照记录，不由本捕获推断。`, scopeNote, ...(isInvalidated ? ['捕获前绑定的 source ID 与冻结时当前 source ID 不一致；本包已失效，不计为最终通过。'] : [])]
  };
  writeFileSync(join(output, 'coverage-report.json'), `${JSON.stringify(freeze, null, 2)}\n`, {flag: 'wx'});
  writeFileSync(join(output, 'capture-source.json'), `${JSON.stringify({bundlePath: basename(absBundle),bundleSha256: sha(compressed),bundleManifest}, null, 2)}\n`, {flag: 'wx'});
  console.log(JSON.stringify({output: outputRelative, sourceId: source.sourceId, dirtySnapshotHash: source.dirtySnapshotHash, files: evidence.length, coverage, reviewState: freeze.reviewState}, null, 2));
} catch (error) {
  console.error(`冻结中止，输出目录保留供检查: ${outputRelative}`);
  throw error;
}
