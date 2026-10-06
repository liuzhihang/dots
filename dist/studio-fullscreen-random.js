import {getResolvedTemplateCandidates} from './studio-composition-resolver.js?v=86';
import {LayeredComposer} from './studio-composer.js?v=86';

const clone = value => structuredClone(value);
const osPrefersReducedMotion = () => Boolean(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);
const ASSET_LIMIT = 16 * 1024 * 1024;
const REEL_ITEMS = 5;
const MAX_STAGES = 6;
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const REVEAL_STAGE_ALIASES = new Map([
  ['角色', '角色'], ['角色基底', '角色'], ['基础角色', '角色'], ['character', '角色'], ['role', '角色'], ['base', '角色'], ['body', '角色'], ['avatar', '角色'], ['look', '角色'],
  ['配色', '配色'], ['颜色', '配色'], ['色彩', '配色'], ['毛色', '配色'], ['染色', '配色'], ['材质', '配色'], ['color', '配色'], ['colour', '配色'], ['palette', '配色'], ['material', '配色'], ['finish', '配色'], ['colorway', '配色'], ['dye', '配色'], ['texture', '配色'],
  ['穿搭', '穿搭'], ['服装', '穿搭'], ['衣服', '穿搭'], ['衣物', '穿搭'], ['内搭', '穿搭'], ['上装', '穿搭'], ['外套', '穿搭'], ['下装', '穿搭'], ['连体服', '穿搭'], ['鞋', '穿搭'], ['鞋子', '穿搭'], ['clothing', '穿搭'], ['clothes', '穿搭'], ['apparel', '穿搭'], ['outfit', '穿搭'], ['garment', '穿搭'], ['wardrobe', '穿搭'], ['shoe', '穿搭'], ['shoes', '穿搭'], ['footwear', '穿搭'],
  ['配饰', '配饰'], ['帽子', '配饰'], ['头饰', '配饰'], ['发饰', '配饰'], ['发箍', '配饰'], ['发卡', '配饰'], ['耳机', '配饰'], ['眼镜', '配饰'], ['颈饰', '配饰'], ['腕饰', '配饰'], ['首饰', '配饰'], ['包袋', '配饰'], ['accessory', '配饰'], ['accessories', '配饰'], ['headwear', '配饰'], ['hat', '配饰'], ['hair-accessory', '配饰'], ['headphones', '配饰'], ['eyewear', '配饰'], ['glasses', '配饰'], ['neckwear', '配饰'], ['jewelry', '配饰'], ['jewellery', '配饰'], ['wristwear', '配饰'], ['bag', '配饰'], ['bags', '配饰'], ['watch', '配饰'], ['earring', '配饰'],
  ['道具', '道具'], ['手持', '道具'], ['手持道具', '道具'], ['牌面', '道具'], ['物品', '道具'], ['工具', '道具'], ['prop', '道具'], ['props', '道具'], ['handheld', '道具'], ['item', '道具'], ['items', '道具'], ['sign', '道具'], ['book', '道具'], ['cup', '道具'], ['device', '道具'],
  ['神态动作', '神态动作'], ['姿态', '神态动作'], ['表情', '神态动作'], ['动作', '神态动作'], ['手势', '神态动作'], ['抓握', '神态动作'], ['视线', '神态动作'], ['pose', '神态动作'], ['expression', '神态动作'], ['gesture', '神态动作'], ['grip', '神态动作'], ['action', '神态动作'], ['motion', '神态动作'], ['emote', '神态动作'], ['gaze', '神态动作'], ['agent-state', '神态动作']
]);

const ICONS = {
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Zm7 12 .9 3.1L23 18l-3.1.9L19 22l-.9-3.1L15 18l3.1-.9L19 14Z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  unlock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.2-2.4"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>'
};

const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const stableJson = value => {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (object(value)) return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
};
const assetKey = asset => `${asset.id}@${asset.version}`;

async function isPngBlob(blob) {
  if (!(blob instanceof Blob) || blob.type !== 'image/png' || blob.size < PNG_SIGNATURE.length) return false;
  const signature = new Uint8Array(await blob.slice(0, PNG_SIGNATURE.length).arrayBuffer());
  return PNG_SIGNATURE.every((byte, index) => signature[index] === byte);
}

export function isSafeArtworkSource(source) {
  if (typeof source !== 'string' || !source || source.includes('\\') || source.includes('?') || source.includes('#')) return false;
  try {
    const decoded = decodeURIComponent(source);
    if (decoded.includes('%') || decoded.includes('\\') || decoded.includes('\0')) return false;
    const path = decoded.split(/[?#]/, 1)[0];
    if (!path.startsWith('./assets/') && !path.startsWith('/assets/')) return false;
    if (path.split('/').some((part, index) => part === '..' || (index > 0 && part === '.'))) return false;
    const url = new URL(source, globalThis.location?.href || 'https://dot.invalid/');
    const base = new URL(globalThis.location?.href || 'https://dot.invalid/');
    return url.origin === base.origin && url.pathname.startsWith('/assets/');
  } catch {
    return false;
  }
}

function validAsset(asset) {
  return object(asset)
    && typeof asset.id === 'string' && asset.id.length > 0
    && (typeof asset.version === 'string' || Number.isInteger(asset.version))
    && typeof asset.sha256 === 'string' && /^[a-f0-9]{64}$/i.test(asset.sha256)
    && Number.isFinite(asset.width) && asset.width > 0
    && Number.isFinite(asset.height) && asset.height > 0
    && isSafeArtworkSource(asset.src)
    && isSafeArtworkSource(asset.previewSrc || asset.src);
}

export function isResolvedRandomCandidate(candidate) {
  if (!object(candidate) || typeof candidate.id !== 'string' || !object(candidate.project)) return false;
  const project = candidate.project;
  const composition = candidate.composition;
  const resolution = candidate.resolution;
  if (project.format !== 'dot-studio-project' || project.version !== 2 || !object(project.character) || project.character.version !== 10) return false;
  if (!object(project.creation) || !object(composition) || !['template', 'modular'].includes(composition.kind)) return false;
  if (!object(project.creation.composition) || stableJson(project.creation.composition) !== stableJson(composition)) return false;
  if (!object(resolution) || resolution.availability !== 'available' || !object(resolution.composition) || !object(resolution.renderPlan)) return false;
  if (stableJson(resolution.composition) !== stableJson(composition)) return false;
  if (!Array.isArray(composition.assetRefs) || composition.assetRefs.length === 0) return false;
  if (composition.assetRefs.some(ref => !object(ref) || typeof ref.id !== 'string' || !ref.id || !['string', 'number'].includes(typeof ref.version) || typeof ref.sha256 !== 'string' || !/^[a-f0-9]{64}$/i.test(ref.sha256))) return false;
  if (new Set(composition.assetRefs.map(assetKey)).size !== composition.assetRefs.length) return false;
  if (!Array.isArray(candidate.stageMetadata) || candidate.stageMetadata.length === 0) return false;
  const stages = candidate.stageMetadata;
  if (stages.length !== composition.assetRefs.length) return false;
  if (stages.some(stage => !object(stage) || typeof stage.stage !== 'string' || !stage.stage.trim() || !validAsset(stage.asset))) return false;
  const metadata = new Map();
  for (const stage of stages) {
    const key = assetKey(stage.asset);
    if (metadata.has(key)) return false;
    metadata.set(key, stage.asset);
  }
  return composition.assetRefs.every(ref => {
    const asset = metadata.get(assetKey(ref));
    return asset && asset.version === ref.version && asset.sha256.toLowerCase() === ref.sha256.toLowerCase();
  });
}

function stableHash(value) {
  let hash = 2166136261;
  for (const char of String(value)) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return hash >>> 0;
}

function randomSeed() {
  const bytes = new Uint32Array(2);
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(bytes);
  else {
    bytes[0] = Date.now() >>> 0;
    bytes[1] = Math.floor(Math.random() * 0xffffffff) >>> 0;
  }
  return `rendered-${bytes[0].toString(36)}-${bytes[1].toString(36)}`;
}

function seedCandidate(candidates, seed) {
  const sorted = [...candidates].sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  return sorted[stableHash(seed) % sorted.length];
}

function revealStageFor(metadata) {
  const raw = typeof metadata?.stage === 'string' ? metadata.stage.trim() : '';
  const normalized = raw.normalize('NFKC').toLowerCase().replace(/[\s_]+/g, '-');
  const direct = REVEAL_STAGE_ALIASES.get(normalized);
  if (direct) return direct;
  const tokens = normalized.split(/[^a-z0-9\u3400-\u9fff-]+/).filter(Boolean);
  const matches = new Set(tokens.map(token => REVEAL_STAGE_ALIASES.get(token)).filter(Boolean));
  if (matches.size === 1) return [...matches][0];
  for (const [alias, stage] of REVEAL_STAGE_ALIASES) {
    if (alias.length > 1 && /[^a-z0-9]/i.test(alias) && normalized.includes(alias)) matches.add(stage);
  }
  if (matches.size === 1) return [...matches][0];
  const detail = matches.size > 1 ? `同时对应多个展示阶段：${[...matches].join('、')}` : '尚未登记到展示阶段';
  throw new Error(`素材 ${metadata?.asset?.id || 'unknown'} 的原始阶段“${raw || '(空)'}”${detail}，无法安全揭晓。`);
}

function groupCandidateAssets(candidate) {
  const grouped = new Map();
  for (const metadata of candidate.stageMetadata) {
    const stage = revealStageFor(metadata);
    if (!grouped.has(stage)) grouped.set(stage, []);
    grouped.get(stage).push(metadata.asset);
  }
  return grouped;
}

function sourceQuery(query) {
  if (!object(query)) return {typedQuery: query ?? {}, lookIds: null};
  const {lookIds, ...typedQuery} = query;
  const normalized = Array.isArray(lookIds) ? lookIds : lookIds instanceof Set ? [...lookIds] : null;
  const allowlist = lookIds === undefined || lookIds === null
    ? null
    : new Set((normalized || []).filter(id => typeof id === 'string'));
  return {typedQuery, lookIds: allowlist};
}

function candidateArtworkId(candidate) {
  return candidate.project?.creation?.artworkId || candidate.composition?.baseId || '';
}

function matchesLocks(candidate, locks) {
  if (locks.artworkId && candidateArtworkId(candidate) !== locks.artworkId) return false;
  if (locks.recipeId && candidate.composition?.recipeId !== locks.recipeId) return false;
  return true;
}

function selectReelAssets(candidates, selected, seed) {
  const stages = [];
  const groupedCandidates = candidates.map(candidate => ({candidate, groups: groupCandidateAssets(candidate)}));
  const selectedGroups = groupedCandidates.find(entry => entry.candidate === selected)?.groups;
  if (!selectedGroups) throw new Error('冻结候选未能映射到素材揭晓阶段。');
  const chosenGroups = [...selectedGroups];
  if (chosenGroups.length > MAX_STAGES) throw new Error(`候选包含 ${chosenGroups.length} 个展示阶段，超过最多 ${MAX_STAGES} 阶段的界限。`);
  for (const [stageName, chosenAssets] of chosenGroups) {
    const available = groupedCandidates
      .flatMap(({candidate, groups}) => (groups.get(stageName) || [])
        .map(asset => ({candidateId: candidate.id, stage: stageName, asset})))
      .sort((a, b) => (a.candidateId < b.candidateId ? -1 : a.candidateId > b.candidateId ? 1 : 0)
        || (a.asset.id < b.asset.id ? -1 : a.asset.id > b.asset.id ? 1 : 0));
    const deduped = [...new Map(available.map(item => [assetKey(item.asset), item])).values()];
    const offset = deduped.length ? stableHash(`${seed}:${stageName}`) % deduped.length : 0;
    const rotated = deduped.slice(offset).concat(deduped.slice(0, offset));
    const chosenKeys = new Set(chosenAssets.map(assetKey));
    const samples = rotated.filter(item => !chosenKeys.has(assetKey(item.asset))).slice(0, Math.max(0, REEL_ITEMS - chosenAssets.length));
    const selectedItems = chosenAssets.map(asset => ({candidateId: selected.id, stage: stageName, asset}));
    const reel = [...samples, ...selectedItems];
    stages.push({stage: stageName, chosenAssets, items: reel});
  }
  return stages;
}

async function readVerifiedAsset(asset, signal, fetcher = globalThis.fetch) {
  const source = asset.previewSrc || asset.src;
  if (!isSafeArtworkSource(source)) throw new Error(`素材 ${asset.id} 使用了非登记本地路径`);
  if (typeof fetcher !== 'function' || !globalThis.crypto?.subtle) throw new Error('浏览器无法校验登记素材哈希');
  const response = await fetcher(source, {signal, credentials: 'same-origin', redirect: 'error'});
  if (!response.ok) throw new Error(`素材 ${asset.id} 读取失败（${response.status}）`);
  const finalUrl = response.url ? new URL(response.url, globalThis.location?.href || 'https://dot.invalid/') : new URL(source, globalThis.location?.href || 'https://dot.invalid/');
  const baseUrl = new URL(globalThis.location?.href || 'https://dot.invalid/');
  if (finalUrl.origin !== baseUrl.origin || !finalUrl.pathname.startsWith('/assets/')) throw new Error(`素材 ${asset.id} 重定向到了不受信任的位置`);
  const blob = await response.blob();
  if (!blob.type.startsWith('image/') || blob.size < 1 || blob.size > ASSET_LIMIT) throw new Error(`素材 ${asset.id} 的文件类型或大小无效`);
  const bytes = await blob.arrayBuffer();
  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
  const actual = [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  const expected = (source === asset.src ? asset.sha256 : asset.previewSha256 || asset.sha256).toLowerCase();
  if (actual !== expected) throw new Error(`素材 ${asset.id} 的 SHA-256 与目录记录不一致`);
  const verifiedBlob = new Blob([bytes], {type: blob.type});
  const objectUrl = URL.createObjectURL(verifiedBlob);
  try {
    const image = new Image();
    image.decoding = 'async';
    const loaded = new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = () => reject(new Error(`素材 ${asset.id} 无法解码`));
    });
    image.src = objectUrl;
    if (typeof image.decode === 'function') {
      try { await image.decode(); }
      catch { await loaded; }
    } else await loaded;
    if (!image.naturalWidth || !image.naturalHeight) throw new Error(`素材 ${asset.id} 解码后尺寸为空`);
    if (image.naturalWidth !== asset.width || image.naturalHeight !== asset.height) throw new Error(`素材 ${asset.id} 尺寸与目录记录不一致`);
    return {key: assetKey(asset), source, objectUrl, width: image.naturalWidth, height: image.naturalHeight};
  } catch (error) {
    URL.revokeObjectURL(objectUrl);
    throw error;
  }
}

/**
 * Build the production callbacks around the shared composition resolver and the
 * same LayeredComposer used by the workbench. The resolver supplies trusted local
 * paths; this adapter rechecks hashes before any thumbnail or result is revealed.
 */
export function createResolvedRandomizerAdapters({
  getCurrentProject,
  getCandidates = getResolvedTemplateCandidates,
  Composer = LayeredComposer,
  fetcher = globalThis.fetch,
  captureSize = 1024
} = {}) {
  if (typeof getCandidates !== 'function' || typeof Composer !== 'function') throw new TypeError('随机适配器需要共享候选 resolver 和 LayeredComposer。');
  return {
    async getCandidateSet({query, project, locks, seed, signal} = {}) {
      if (typeof getCurrentProject !== 'function' && !project) throw new TypeError('随机适配器需要当前 v2 项目。');
      const currentProject = project || getCurrentProject();
      const {typedQuery, lookIds} = sourceQuery(query);
      const resolved = await getCandidates({query: typedQuery, project: currentProject, locks, seed, signal});
      const allowlist = lookIds;
      const candidates = (resolved?.candidates || []).filter(candidate => {
        if (!isResolvedRandomCandidate(candidate) || !matchesLocks(candidate, locks || {})) return false;
        return !allowlist || allowlist.has(candidateArtworkId(candidate));
      });
      const availability = candidates.length ? 'available' : 'empty';
      const reason = candidates.length
        ? ''
        : resolved?.candidates?.length && allowlist
          ? '当前首页场景没有可用的真实模板组合。'
          : resolved?.reason || '当前范围没有已批准且可真实渲染的候选。';
      return {candidates, availability, reason, rejected: resolved?.rejected || []};
    },
    async preloadCandidate({candidate, reelStages = [], signal} = {}) {
      if (!isResolvedRandomCandidate(candidate)) throw new Error('候选没有通过 v2 真实渲染合同校验');
      const selectedAssets = candidate.stageMetadata.map(stage => stage.asset);
      const references = candidate.composition.assetRefs;
      const refMap = new Map(references.map(ref => [assetKey(ref), ref]));
      for (const ref of references) {
        const asset = selectedAssets.find(item => assetKey(item) === assetKey(ref));
        if (!asset || asset.sha256.toLowerCase() !== ref.sha256.toLowerCase()) throw new Error(`候选缺少素材 ${ref.id} 的可信本地预载来源`);
      }
      const assets = [...selectedAssets, ...reelStages.flatMap(stage => stage.items.map(item => item.asset))];
      const unique = [...new Map(assets.map(asset => [assetKey(asset), asset])).values()];
      const loaded = new Map();
      const objectUrls = new Set();
      try {
        for (const asset of unique) {
          if (signal?.aborted) throw new DOMException('随机任务已取消', 'AbortError');
          const ref = refMap.get(assetKey(asset));
          if (ref && ref.sha256.toLowerCase() !== asset.sha256.toLowerCase()) throw new Error(`素材 ${asset.id} 与 composition 引用版本不一致`);
          const value = await readVerifiedAsset(asset, signal, fetcher);
          loaded.set(value.key, value);
          objectUrls.add(value.objectUrl);
        }
      } catch (error) {
        for (const url of objectUrls) URL.revokeObjectURL(url);
        throw error;
      }
      let disposed = false;
      return {
        loaded,
        getPreview(asset) {
          const entry = loaded.get(assetKey(asset));
          if (!entry) throw new Error(`缩略图素材 ${asset.id} 未通过预载`);
          return entry.objectUrl;
        },
        dispose() {
          if (disposed) return;
          disposed = true;
          for (const url of objectUrls) URL.revokeObjectURL(url);
          objectUrls.clear();
          loaded.clear();
        }
      };
    },
    async renderCandidate({candidate, container, signal} = {}) {
      if (!isResolvedRandomCandidate(candidate)) throw new Error('候选没有通过 v2 真实渲染合同校验');
      if (signal?.aborted) throw new DOMException('随机任务已取消', 'AbortError');
      const staging = document.createElement('div');
      staging.className = 'fr-render-staging';
      const composer = new Composer(staging);
      try {
        const rendered = await composer.updateResolved(candidate.resolution, {signal});
        if (!rendered || signal?.aborted || composer.canvas?.dataset?.previewStatus !== 'ready') throw new Error('真实组合画布未能就绪');
        const blob = await composer.captureBlob(captureSize, {transparent: true});
        if (signal?.aborted) throw new DOMException('随机任务已取消', 'AbortError');
        if (!(await isPngBlob(blob))) throw new Error('真实组合 PNG 编码失败或文件签名无效');
        if (container?.append) container.append(staging);
        let disposed = false;
        return {
          canvas: composer.canvas,
          blob,
          composer,
          dispose() {
            if (disposed) return;
            disposed = true;
            composer.dispose();
            staging.remove();
          }
        };
      } catch (error) {
        composer.dispose();
        staging.remove();
        throw error;
      }
    },
    dispose() {}
  };
}

export function createFullscreenRandomizer({
  mount = document.body,
  getCurrentProject,
  getCandidateSet,
  preloadCandidate,
  renderCandidate,
  commitCandidate,
  onPromptOnly = null,
  notify = () => {},
  getSeed = randomSeed,
  getReducedMotion = osPrefersReducedMotion,
  onOpenChange = () => {}
} = {}) {
  if (!mount?.append || typeof getCurrentProject !== 'function' || typeof getCandidateSet !== 'function'
      || typeof preloadCandidate !== 'function' || typeof renderCandidate !== 'function' || typeof commitCandidate !== 'function') {
    throw new TypeError('全局随机器需要当前项目、候选、预载、真实绘制和提交回调。');
  }
  if (typeof getReducedMotion !== 'function' || typeof getSeed !== 'function') throw new TypeError('getReducedMotion and getSeed must be functions.');
  return new FullscreenRandomizer({mount, getCurrentProject, getCandidateSet, preloadCandidate, renderCandidate, commitCandidate, onPromptOnly, notify, getSeed, getReducedMotion, onOpenChange});
}

class FullscreenRandomizer {
  constructor(options) {
    Object.assign(this, options);
    this.dialog = null;
    this.scope = {query: null, scopeLabel: '全部内容', source: ''};
    this.locks = {artworkId: null, recipeId: null};
    this.currentResult = null;
    this.pendingCandidate = null;
    this.pendingAssets = null;
    this.pendingReels = [];
    this.phase = 'closed';
    this.timers = new Set();
    this.session = 0;
    this.turn = 0;
    this.abortController = null;
    this.returnFocus = null;
    this.opened = false;
    this.disposed = false;
    this.motionPreference = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)');
    this.onMotionChange = () => {
      if (this.dialog?.open && this.syncReducedMotion() && this.phase === 'revealing') this.finishReveal(true);
    };
    this.motionPreference?.addEventListener?.('change', this.onMotionChange);
    this.onClick = event => this.handleClick(event);
    this.onKeydown = event => this.handleKeydown(event);
    this.shortcutsAttached = false;
    this.onCancel = event => { event.preventDefault(); this.close(); };
    this.onNativeClose = () => { if (!this.dialog?.open) this.finishClose(); };
  }

  build() {
    if (this.dialog) return;
    const dialog = document.createElement('dialog');
    dialog.className = 'fullscreen-randomizer';
    dialog.setAttribute('aria-labelledby', 'fr-title');
    dialog.innerHTML = `
      <div class="fr-shell">
        <header class="fr-header">
          <div class="fr-brand"><img class="fr-brand-mark" src="./assets/characters/brand-mark.png" alt=""><span>Dot Icon Studio</span></div>
          <button class="fr-close" type="button" data-fr="close" aria-label="关闭随机灵感">${ICONS.close}</button>
        </header>
        <main class="fr-main">
          <div class="fr-heading"><span class="fr-eyebrow">A LITTLE SPARK OF INSPIRATION</span><h1 id="fr-title" tabindex="-1">灵感随机器</h1>
            <p class="fr-scope"><span class="fr-scope-label">全部内容</span><button type="button" data-fr="clear-scope" hidden>切回全部</button></p>
          </div>
          <section class="fr-result-card" aria-label="真实角色组合结果" hidden>
            <div class="fr-canvas-host" aria-live="off"></div>
            <div class="fr-result-caption"><b class="fr-result-name"></b><span class="fr-result-note">来自已登记的可渲染配方</span></div>
          </section>
          <section class="fr-reveal" aria-label="真实素材逐项揭晓" hidden>
            <div class="fr-reveal-heading"><span class="fr-eyebrow">REAL ASSETS · ONE RESOLVED RESULT</span><b class="fr-reveal-title">正在揭晓组合</b></div>
            <div class="fr-reel-stage" aria-live="polite"></div>
          </section>
          <section class="fr-locks" aria-label="锁定随机内容" hidden>
            <button type="button" data-fr-lock="artworkId" aria-pressed="false">${ICONS.unlock}<span>锁定角色</span></button>
            <button type="button" data-fr-lock="recipeId" aria-pressed="false">${ICONS.unlock}<span>锁定配方</span></button>
          </section>
          <details class="fr-advanced" hidden>
            <summary>高级：Prompt-only 随机</summary>
            <p>只更新创作 Prompt，不生成或应用可渲染组合。</p>
            <button type="button" data-fr="prompt-only">在工作台生成 Prompt 配方</button>
          </details>
          <p class="fr-status" role="status" aria-live="polite">准备生成一款真实可预览的角色组合。</p>
          <div class="fr-actions">
            <button class="fr-button fr-random" type="button" data-fr="random">${ICONS.sparkle}<span>随机一款</span>${ICONS.arrow}</button>
            <button class="fr-button fr-skip" type="button" data-fr="skip" hidden>跳过动画</button>
            <button class="fr-button fr-apply" type="button" data-fr="apply" hidden disabled>用这个组合</button>
          </div>
          <p class="fr-footnote">随机候选先通过真实配方解算，再逐项揭晓并在画布中组装；应用前不会更改当前作品。</p>
        </main>
      </div>`;
    this.mount.append(dialog);
    dialog.addEventListener('click', this.onClick);
    dialog.addEventListener('keydown', this.onKeydown);
    dialog.addEventListener('cancel', this.onCancel);
    dialog.addEventListener('close', this.onNativeClose);
    this.dialog = dialog;
  }

  open({query = null, scopeLabel = '全部内容', source = ''} = {}) {
    if (this.disposed) return false;
    this.build();
    if (this.dialog.open) return false;
    if (this.opened) this.finishClose();
    this.returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.session++;
    this.turn++;
    this.abortController = null;
    this.scope = {query: query ? clone(query) : null, scopeLabel: String(scopeLabel || '全部内容'), source: String(source || '')};
    this.locks = {artworkId: null, recipeId: null};
    this.currentResult = null;
    this.pendingCandidate = null;
    this.pendingAssets = null;
    this.pendingReels = [];
    this.phase = 'intro';
    this.dialog.querySelector('.fr-main').scrollTop = 0;
    this.renderIntro();
    this.syncReducedMotion();
    this.dialog.showModal();
    this.opened = true;
    document.addEventListener('keydown', this.onKeydown, true);
    this.shortcutsAttached = true;
    this.dialog.querySelector('#fr-title').focus({preventScroll: true});
    this.onOpenChange(true);
    return true;
  }

  close() {
    if (this.disposed || (!this.dialog?.open && !this.opened)) return;
    this.session++;
    this.turn++;
    this.abortCurrent();
    this.clearTimers();
    this.clearPending();
    this.clearCurrentResult();
    this.phase = 'closed';
    if (this.dialog?.open) this.dialog.close();
    this.finishClose();
  }

  finishClose() {
    if (!this.opened) return;
    this.opened = false;
    if (this.shortcutsAttached) {
      document.removeEventListener('keydown', this.onKeydown, true);
      this.shortcutsAttached = false;
    }
    this.clearTimers();
    if (this.returnFocus?.isConnected) this.returnFocus.focus({preventScroll: true});
    this.returnFocus = null;
    this.onOpenChange(false);
  }

  dispose() {
    if (this.disposed) return;
    const wasOpen = this.opened || !!this.dialog?.open;
    this.session++;
    this.turn++;
    this.abortCurrent();
    this.clearTimers();
    this.clearPending();
    this.clearCurrentResult();
    this.phase = 'closed';
    this.disposed = true;
    this.motionPreference?.removeEventListener?.('change', this.onMotionChange);
    if (this.dialog) {
      this.dialog.removeEventListener('click', this.onClick);
      this.dialog.removeEventListener('keydown', this.onKeydown);
      this.dialog.removeEventListener('cancel', this.onCancel);
      this.dialog.removeEventListener('close', this.onNativeClose);
      if (this.dialog.open) this.dialog.close();
      this.dialog.remove();
      this.dialog = null;
    }
    if (this.shortcutsAttached) {
      document.removeEventListener('keydown', this.onKeydown, true);
      this.shortcutsAttached = false;
    }
    this.opened = false;
    if (wasOpen) this.onOpenChange(false);
  }

  renderIntro() {
    const $ = selector => this.dialog.querySelector(selector);
    $('.fr-scope-label').textContent = this.scope.scopeLabel;
    $('[data-fr="clear-scope"]').hidden = true;
    $('.fr-result-card').hidden = true;
    $('.fr-reveal').hidden = true;
    $('.fr-locks').hidden = true;
    $('.fr-advanced').open = false;
    $('.fr-advanced').hidden = true;
    $('[data-fr="random"]').querySelector('span').textContent = '随机一款';
    $('[data-fr="random"]').disabled = false;
    $('[data-fr="skip"]').hidden = true;
    $('[data-fr="apply"]').hidden = true;
    $('[data-fr="apply"]').disabled = true;
    this.setStatus('准备生成一款真实可预览的角色组合。');
  }

  hasScope() {
    if (!this.scope.query) return Boolean(this.scope.scopeLabel && this.scope.scopeLabel !== '全部内容');
    if (this.scope.scopeLabel && this.scope.scopeLabel !== '全部内容') return true;
    if (Array.isArray(this.scope.query.lookIds) && this.scope.query.lookIds.length) return true;
    if (this.scope.query.lookIds instanceof Set && this.scope.query.lookIds.size) return true;
    return Object.keys(this.scope.query).some(key => key !== 'lookIds' && this.scope.query[key] !== null && this.scope.query[key] !== ''
      && (!Array.isArray(this.scope.query[key]) || this.scope.query[key].length > 0));
  }

  handleClick(event) {
    const lock = event.target.closest('[data-fr-lock]');
    if (lock && this.dialog.contains(lock)) {
      this.toggleLock(lock.dataset.frLock);
      return;
    }
    const action = event.target.closest('[data-fr]')?.dataset.fr;
    if (action === 'close') this.close();
    else if (action === 'random') this.spin();
    else if (action === 'skip') this.finishReveal(true);
    else if (action === 'apply') this.applyCandidate();
    else if (action === 'clear-scope') this.clearScope();
    else if (action === 'prompt-only') this.openPromptOnly();
  }

  handleKeydown(event) {
    const editable = event.target?.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(event.target?.tagName || '');
    if (!editable && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
      event.preventDefault(); event.stopPropagation(); return;
    }
    if (!editable && event.key.toLowerCase() === 'r' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault(); event.stopPropagation();
    }
  }

  toggleLock(key) {
    if (!this.currentResult || this.phase !== 'result' || !['artworkId', 'recipeId'].includes(key)) return;
    const candidate = this.currentResult.candidate;
    const currentValue = key === 'artworkId' ? candidateArtworkId(candidate) : candidate.composition.recipeId;
    if (!currentValue) return;
    this.locks[key] = this.locks[key] === currentValue ? null : currentValue;
    this.renderLocks();
    this.setStatus(this.locks[key] ? `已锁定${key === 'artworkId' ? '角色' : '配方'}；重抽时会保留其登记 ID。` : `已解除${key === 'artworkId' ? '角色' : '配方'}锁定。`);
  }

  renderLocks() {
    const candidate = this.currentResult?.candidate;
    const data = [
      ['artworkId', candidate ? candidateArtworkId(candidate) : '', '锁定角色', '角色已锁定', '角色'],
      ['recipeId', candidate?.composition?.recipeId || '', '锁定配方', '配方已锁定', '配方']
    ];
    for (const [key, value, idleLabel, lockedLabel] of data) {
      const button = this.dialog.querySelector(`[data-fr-lock="${key}"]`);
      const locked = Boolean(value && this.locks[key] === value);
      button.disabled = !value;
      button.setAttribute('aria-pressed', String(locked));
      button.setAttribute('aria-label', locked ? `解除${key === 'artworkId' ? '角色' : '配方'}锁定` : idleLabel);
      button.querySelector('span').textContent = locked ? lockedLabel : idleLabel;
      button.querySelector('svg').outerHTML = locked ? ICONS.lock : ICONS.unlock;
    }
  }

  clearScope() {
    if (!this.hasScope()) return;
    if (['resolving', 'preloading', 'revealing', 'assembling'].includes(this.phase)) {
      this.turn++;
      this.abortCurrent();
      this.clearTimers();
      this.clearPending();
      this.phase = this.currentResult ? 'result' : 'intro';
    }
    this.scope = {...this.scope, query: null, scopeLabel: '全部内容'};
    this.dialog.querySelector('.fr-scope-label').textContent = '全部内容';
    this.dialog.querySelector('[data-fr="clear-scope"]').hidden = true;
    this.dialog.querySelector('.fr-reveal').hidden = true;
    this.setStatus('范围已切回全部；当前组合和锁定保持不变，下次重抽会从全部内容中选择。');
    if (!this.currentResult && this.phase === 'failed') this.phase = 'intro';
    this.updateActions();
  }

  openPromptOnly() {
    if (typeof this.onPromptOnly !== 'function') {
      this.setStatus('Prompt-only 高级随机入口尚未接入工作台。');
      return;
    }
    const request = {query: this.scope.query ? clone(this.scope.query) : null, locks: {...this.locks}, source: this.scope.source};
    this.resetCandidate();
    try {
      this.onPromptOnly(request);
      this.setStatus('已请求工作台生成 Prompt-only 配方；它不会成为可渲染随机结果。');
    } catch (error) {
      this.setStatus(error?.message || '暂时无法生成 Prompt-only 配方。');
    }
  }

  resetCandidate() {
    // Invalidate any reveal/render work from the candidate before leaving the rendered-result flow.
    this.turn++;
    this.abortCurrent();
    this.clearTimers();
    this.clearPending();
    this.clearCurrentResult();
    this.phase = 'intro';
    this.dialog.querySelector('.fr-canvas-host').replaceChildren();
    this.dialog.querySelector('.fr-result-name').textContent = '';
    this.dialog.querySelector('.fr-reel-stage').replaceChildren();
    this.dialog.querySelector('.fr-reveal-title').textContent = '正在揭晓组合';
    this.renderIntro();
    this.updateActions();
    this.dialog.querySelector('[data-fr="random"]').focus({preventScroll: true});
  }

  syncReducedMotion() {
    let reduce = false;
    try { reduce = osPrefersReducedMotion() || Boolean(this.getReducedMotion()); }
    catch { reduce = osPrefersReducedMotion(); }
    this.dialog.classList.toggle('fr-reduce-motion', reduce);
    return reduce;
  }

  async spin() {
    if (!this.dialog?.open || ['resolving', 'preloading', 'revealing', 'assembling'].includes(this.phase)) return;
    const session = this.session;
    const turn = ++this.turn;
    this.abortCurrent();
    this.clearTimers();
    this.clearPending();
    const abortController = new AbortController();
    this.abortController = abortController;
    const signal = abortController.signal;
    const seed = this.getSeed();
    const project = clone(this.getCurrentProject());
    const locks = {...this.locks};
    this.phase = 'resolving';
    this.updateActions();
    this.setStatus('正在按当前范围与锁定项求解可渲染候选…');
    try {
      const result = await this.getCandidateSet({query: this.scope.query ? clone(this.scope.query) : null, project, locks, seed, signal});
      if (!this.isCurrent(session, turn)) return;
      const candidates = (result?.candidates || []).filter(candidate => isResolvedRandomCandidate(candidate) && matchesLocks(candidate, locks));
      if (!candidates.length) {
        this.phase = this.currentResult ? 'result' : 'failed';
        this.renderErrorState(result?.reason || '当前锁定和筛选范围下没有可用的真实组合。');
        return;
      }
      // Selection is frozen before any fetch, decode, reel or canvas work starts.
      const selected = seedCandidate(candidates, seed);
      this.pendingCandidate = selected;
      this.pendingReels = selectReelAssets(candidates, selected, seed);
      this.phase = 'preloading';
      this.renderScopeControls();
      this.updateActions();
      this.setStatus('已锁定一个真实候选，正在校验登记素材并预载揭晓缩略图…');
      this.pendingAssets = await this.preloadCandidate({candidate: selected, reelStages: this.pendingReels, signal, seed});
      if (!this.isCurrent(session, turn)) { this.clearPending(); return; }
      this.buildRevealStages();
      this.phase = 'revealing';
      this.updateActions();
      if (this.syncReducedMotion()) this.finishReveal(true);
      else this.revealStage(0, session, turn);
    } catch (error) {
      if (!this.isCurrent(session, turn) || error?.name === 'AbortError') return;
      this.clearPending();
      this.phase = this.currentResult ? 'result' : 'failed';
      this.updateActions();
      this.renderErrorState(error?.message || '候选预载或解算失败；没有替换为其他角色。');
    }
  }

  buildRevealStages() {
    const reveal = this.dialog.querySelector('.fr-reveal');
    const host = this.dialog.querySelector('.fr-reel-stage');
    host.replaceChildren();
    this.pendingReels.forEach((stage, index) => {
      const card = document.createElement('article');
      card.className = 'fr-reel';
      card.dataset.stage = stage.stage;
      card.dataset.index = String(index);
      const label = document.createElement('span');
      label.className = 'fr-reel-label';
      label.textContent = stage.stage;
      const viewport = document.createElement('div');
      viewport.className = 'fr-reel-window';
      const image = document.createElement('img');
      image.className = 'fr-reel-image';
      image.alt = `${stage.stage} 素材揭晓`;
      image.src = this.pendingAssets.getPreview(stage.items[0].asset);
      const meta = document.createElement('span');
      meta.className = 'fr-reel-count';
      meta.textContent = `${index + 1} / ${this.pendingReels.length}`;
      viewport.append(image, meta);
      card.append(label, viewport);
      host.append(card);
    });
    reveal.hidden = this.pendingReels.length === 0;
    this.dialog.querySelector('.fr-result-card').hidden = !this.currentResult;
    this.dialog.querySelector('.fr-locks').hidden = !this.currentResult;
  }

  revealStage(index, session, turn) {
    if (!this.isCurrent(session, turn) || this.phase !== 'revealing') return;
    if (index >= this.pendingReels.length) { this.finishReveal(false); return; }
    const stages = this.dialog.querySelectorAll('.fr-reel');
    const card = stages[index];
    card.classList.add('is-active', 'is-rolling');
    const image = card.querySelector('.fr-reel-image');
    const items = this.pendingReels[index].items;
    let frame = 0;
    const started = Date.now();
    const duration = 520 + index * 115;
    const roll = () => {
      if (!this.isCurrent(session, turn) || this.phase !== 'revealing') return;
      const elapsed = Date.now() - started;
      if (elapsed >= duration) {
        this.markStageLanded(card, this.pendingReels[index]);
        this.dialog.querySelector('.fr-reveal-title').textContent = `${this.pendingReels[index].stage} 已揭晓`;
        this.schedule(() => this.revealStage(index + 1, session, turn), 190);
        return;
      }
      image.src = this.pendingAssets.getPreview(items[frame++ % items.length].asset);
      const progress = elapsed / duration;
      const delay = Math.round(54 + Math.pow(progress, 3) * 205);
      this.schedule(roll, delay);
    };
    roll();
  }

  finishReveal(skipped) {
    if (this.phase !== 'revealing') return;
    this.clearTimers();
    for (const stage of this.dialog.querySelectorAll('.fr-reel')) {
      const index = Number(stage.dataset.index);
      const data = this.pendingReels[index];
      this.markStageLanded(stage, data);
    }
    this.dialog.querySelector('.fr-reveal-title').textContent = skipped ? '静态揭晓完成' : '素材已揭晓';
    this.assembleCandidate(this.session, this.turn);
  }

  markStageLanded(card, stage) {
    const viewport = card.querySelector('.fr-reel-window');
    const final = document.createElement('div');
    final.className = 'fr-reel-final';
    for (const asset of stage.chosenAssets) {
      const image = document.createElement('img');
      image.className = 'fr-reel-landed-image';
      image.alt = `${stage.stage} · ${asset.id}`;
      image.src = this.pendingAssets.getPreview(asset);
      final.append(image);
    }
    const count = document.createElement('span');
    count.className = 'fr-reel-count';
    count.textContent = stage.chosenAssets.length > 1 ? `${stage.chosenAssets.length} 项` : '已选';
    viewport.replaceChildren(final, count);
    card.classList.remove('is-rolling');
    card.classList.add('is-active', 'is-landed');
  }

  async assembleCandidate(session, turn) {
    if (!this.pendingCandidate || !this.isCurrent(session, turn)) return;
    this.phase = 'assembling';
    this.updateActions();
    this.setStatus('正在使用同一条已解算配方绘制真实组合并检查 PNG…');
    let rendered;
    try {
      rendered = await this.renderCandidate({candidate: this.pendingCandidate, signal: this.abortController.signal});
      if (!this.isCurrent(session, turn)) { rendered?.dispose?.(); return; }
      if (!rendered?.canvas || !(await isPngBlob(rendered.blob))) {
        throw new Error('真实组合画布或 PNG 编码没有就绪。');
      }
      const previous = this.currentResult;
      const candidate = this.pendingCandidate;
      const assets = this.pendingAssets;
      this.currentResult = {candidate, rendered, assets};
      this.pendingCandidate = null;
      this.pendingAssets = null;
      this.pendingReels = [];
      this.phase = 'result';
      const host = this.dialog.querySelector('.fr-canvas-host');
      host.replaceChildren(rendered.canvas);
      const resultCard = this.dialog.querySelector('.fr-result-card');
      resultCard.hidden = false;
      const name = candidate.project.character.name || candidate.project.creation.artworkId || '随机角色';
      this.dialog.querySelector('.fr-result-name').textContent = name;
      this.dialog.querySelector('.fr-locks').hidden = false;
      this.dialog.querySelector('.fr-advanced').hidden = typeof this.onPromptOnly !== 'function';
      this.dialog.querySelector('.fr-reveal').hidden = true;
      this.renderLocks();
      this.updateActions();
      this.setStatus('真实组合已经就绪；应用后才会写入当前作品。');
      previous?.rendered?.dispose?.();
      previous?.assets?.dispose?.();
    } catch (error) {
      rendered?.dispose?.();
      if (!this.isCurrent(session, turn) || error?.name === 'AbortError') return;
      this.clearPending();
      this.phase = this.currentResult ? 'result' : 'failed';
      this.updateActions();
      this.renderErrorState(error?.message || '真实组合绘制或 PNG 编码失败；没有暗中替换候选。');
    }
  }

  renderErrorState(message) {
    this.setStatus(message);
    this.dialog.querySelector('.fr-reveal').hidden = true;
    this.dialog.querySelector('.fr-scope-label').textContent = this.scope.scopeLabel;
    this.dialog.querySelector('[data-fr="clear-scope"]').hidden = !this.hasScope();
    this.dialog.querySelector('.fr-result-card').hidden = !this.currentResult;
    this.dialog.querySelector('.fr-locks').hidden = !this.currentResult;
  }

  renderScopeControls() {
    this.dialog.querySelector('.fr-scope-label').textContent = this.scope.scopeLabel;
    this.dialog.querySelector('[data-fr="clear-scope"]').hidden = !this.hasScope();
  }

  updateActions() {
    if (!this.dialog) return;
    const busy = ['resolving', 'preloading', 'revealing', 'assembling'].includes(this.phase);
    const random = this.dialog.querySelector('[data-fr="random"]');
    random.disabled = busy;
    random.querySelector('span').textContent = this.currentResult ? '再随机一次' : '随机一款';
    random.setAttribute('aria-label', this.currentResult ? '再随机一次' : '随机一款');
    this.dialog.querySelector('[data-fr="skip"]').hidden = this.phase !== 'revealing';
    const apply = this.dialog.querySelector('[data-fr="apply"]');
    apply.hidden = !this.currentResult;
    apply.disabled = !this.currentResult || busy;
    if (this.phase === 'intro' || this.phase === 'failed') random.querySelector('span').textContent = this.currentResult ? '再随机一次' : '随机一款';
  }

  setStatus(message) { this.dialog.querySelector('.fr-status').textContent = message; }

  isCurrent(session, turn) {
    return !this.disposed && this.dialog?.open && this.opened && this.session === session && this.turn === turn && !this.abortController?.signal.aborted;
  }

  schedule(callback, delay) {
    const timer = setTimeout(() => { this.timers.delete(timer); callback(); }, delay);
    this.timers.add(timer);
    return timer;
  }

  clearTimers() { for (const timer of this.timers) clearTimeout(timer); this.timers.clear(); }
  abortCurrent() { this.abortController?.abort(); this.abortController = null; }
  clearPending() { this.pendingAssets?.dispose?.(); this.pendingAssets = null; this.pendingCandidate = null; this.pendingReels = []; }
  clearCurrentResult() { this.currentResult?.rendered?.dispose?.(); this.currentResult?.assets?.dispose?.(); this.currentResult = null; }

  applyCandidate() {
    if (!this.currentResult || this.phase !== 'result' || !this.currentResult.candidate.project.creation.composition) return;
    try {
      const result = this.commitCandidate(clone(this.currentResult.candidate.project), {origin: 'random'});
      if (result && typeof result.then === 'function') throw new Error('应用回调必须同步提交，以保证一次撤销记录。');
      const focusTarget = result && typeof result.focus === 'function' ? result : result?.focus && typeof result.focus.focus === 'function' ? result.focus : null;
      if (focusTarget?.isConnected) this.returnFocus = focusTarget;
      this.close();
      this.notify('真实组合已应用；需要时可撤销回到原作品。');
    } catch (error) {
      this.setStatus(error?.message || '暂时无法应用这个组合。');
    }
  }
}
