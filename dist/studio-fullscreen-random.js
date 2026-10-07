import {getAsset} from './studio-artwork-catalog.js?v=90';
import {revealFeaturesFor,REVEAL_SLOTS} from './studio-draw.js?v=90';
import {loadAsset,downloadAsset} from './studio-asset-loader.js?v=90';
import {copyAndOpen,chatGPTUrlForPrompt} from './studio-actions.js?v=90';
import {featureVisualFor} from './studio-feature-visuals.js?v=90';

const FALLBACK_CARD_HEIGHT = 126;
const MAX_NEIGHBORS = 7;
const FEATURE_SLOTS = REVEAL_SLOTS;

const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const featureValueKey = value => {
  if (typeof value === 'string') return value.normalize('NFKC').trim().toLocaleLowerCase();
  if (value === null || value === undefined) return '';
  return JSON.stringify(value);
};
const getPromptText = prompt => typeof prompt === 'string' ? prompt : String(prompt?.text || prompt?.zh || '');
const getArtworkTitle = artwork => String(artwork?.title || artwork?.name || artwork?.id || '一位新伙伴');
const getFeatureText = feature => String(feature?.label || feature?.labelZh || feature?.valueLabel || feature?.value || '');
const getAssetKey = asset => asset?.id ? `${asset.id}@${asset.version ?? ''}` : String(asset?.path || asset?.src || '');
const isAbort = error => error?.name === 'AbortError';
const reducedMotion = () => Boolean(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);

function element(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function makeButton(action, label, className = '') {
  const button = element('button', className, label);
  button.type = 'button';
  button.dataset.fr = action;
  return button;
}



function featureSignature(features) {
  return features.map(feature => `${feature.kind}:${featureValueKey(feature.value ?? feature.id)}`).join('|');
}

function evenlySample(items, maximum, preferredKey) {
  if (items.length <= maximum) return items;
  const preferredIndex = items.findIndex(item => item.key === preferredKey);
  const center = preferredIndex < 0 ? Math.floor(items.length / 2) : preferredIndex;
  const start = Math.max(0, Math.min(items.length - maximum, center - Math.floor(maximum / 2)));
  const sample = items.slice(start, start + maximum);
  if (preferredIndex >= start && preferredIndex < start + maximum) return sample;
  return [...sample.slice(0, maximum - 1), items[preferredIndex]].sort((a, b) => a.sortKey.localeCompare(b.sortKey));
}

function buildSlots(result, pool) {
  const selectedFeatures = Array.isArray(result?.revealFeatures) ? result.revealFeatures : [];
  const artworks = (Array.isArray(pool) ? pool : []).filter(isRecord);
  const indexed = artworks.map(artwork => {
    let features = [];
    try { features = revealFeaturesFor(artwork) || []; } catch { /* One malformed pool entry cannot replace the frozen selection. */ }
    return {artwork, features: Array.isArray(features) ? features : []};
  });

  const slots = [];
  for (const definition of FEATURE_SLOTS) {
    const chosenFeatures = selectedFeatures.filter(feature => definition.kinds.includes(feature?.kind));
    if (chosenFeatures.length !== 1 || chosenFeatures[0].state === 'unknown') throw new Error('这张作品缺少已核实的六类揭晓特征。');
    const chosenVisual = featureVisualFor(chosenFeatures, definition.key, result.artwork);
    if (!['artwork-preview', 'source-crop', 'empty-value'].includes(chosenVisual.kind)) throw new Error('这张作品的特征示意尚未登记完整，没有开始动画。');

    const selectedItem = {
      key: featureSignature(chosenFeatures),
      features: chosenFeatures,
      artwork: result.artwork,
      artworkId: result.artworkId,
      label: chosenFeatures.map(getFeatureText).filter(Boolean).join(' · '),
      visual: chosenVisual,
      assetRef: chosenVisual.assetRef || null,
      isFrozenSelection: true
    };
    const choices = new Map();
    for (const row of indexed) {
      const features = row.features.filter(feature => definition.kinds.includes(feature?.kind));
      if (!features.length) continue;
      const key = featureSignature(features);
      if (choices.has(key)) continue;
      const visual = featureVisualFor(features, definition.key, row.artwork);
      if (!['artwork-preview', 'source-crop', 'empty-value'].includes(visual.kind)) continue;
      choices.set(key, {
        key,
        features,
        artwork: row.artwork,
        artworkId: row.artwork.id,
        label: features.map(getFeatureText).filter(Boolean).join(' · '),
        visual,
        assetRef: visual.assetRef || null,
        isFrozenSelection: false
      });
    }
    choices.set(selectedItem.key, selectedItem);
    const ordered = [...choices.values()].sort((a, b) => {
      const left = `${a.artworkId || ''}:${a.key}`;
      const right = `${b.artworkId || ''}:${b.key}`;
      return left.localeCompare(right);
    }).map(item => ({...item, sortKey: `${item.artworkId || ''}:${item.key}`}));
    const sampled = evenlySample(ordered, MAX_NEIGHBORS, selectedItem.key);
    const selectedIndex = sampled.findIndex(item => item.key === selectedItem.key);
    const items = sampled.map((item, index) => ({...item, index}));
    slots.push({...definition, items, selectedIndex: Math.max(0, selectedIndex)});
  }
  return slots;
}

function buildRestoredSlots(result) {
  const selectedFeatures = Array.isArray(result?.revealFeatures) ? result.revealFeatures : [];
  return FEATURE_SLOTS.flatMap(definition => {
    const features = selectedFeatures.filter(feature => definition.kinds.includes(feature?.kind));
    if (features.length !== 1 || features[0].state === 'unknown') throw new Error('这张作品缺少已核实的六类揭晓特征。');
    const visual = featureVisualFor(features, definition.key, result.artwork);
    if (!['artwork-preview', 'source-crop', 'empty-value'].includes(visual.kind)) throw new Error('这张作品的特征示意尚未登记完整。');
    const item = {
      key: featureSignature(features),
      features,
      artwork: result.artwork,
      artworkId: result.artworkId,
      label: features.map(getFeatureText).filter(Boolean).join(' · '),
      visual,
      assetRef: visual.assetRef || null,
      isFrozenSelection: true
    };
    return [{...definition, items: [item], selectedIndex: 0}];
  });
}

function makeCardBack(label) {
  const back = element('div', 'fr-card-back');
  back.setAttribute('aria-label', `${label}尚未揭晓`);
  const mark = element('img', 'fr-card-back-mark');
  mark.src = './assets/characters/brand-mark.png'; mark.alt = ''; mark.width = 52; mark.height = 52;
  back.append(mark);
  return back;
}

function createStructure() {
  const root = element('section', 'fr-view');
  root.setAttribute('aria-label', '随机发现已发布角色作品');

  const brand = element('div', 'fr-stage-brand');
  const mark = element('img'); mark.src = './assets/characters/brand-mark.png'; mark.alt = ''; mark.width = 22; mark.height = 22;
  brand.append(mark, element('span', '', 'Dot Icon Studio'));
  root.append(brand);
  const heading = element('div', 'fr-intro');
  heading.append(element('span', 'fr-eyebrow', '随机发现'));
  const hint = element('h2', 'fr-hint', '随机发现一位伙伴');
  heading.append(hint);
  heading.append(element('p', 'fr-intro-subtitle', '转动六张卡，揭晓真实作品的独特线索'));

  const reveal = element('section', 'fr-reveal');
  reveal.setAttribute('aria-label', '作品特征卡片揭晓');
  reveal.hidden = true;
  const revealHeader = element('div', 'fr-reveal-heading');
  revealHeader.append(element('span', 'fr-reveal-kicker', '特征卡片'));
  const stageLabel = element('span', 'fr-stage-label', '等待开始');
  stageLabel.setAttribute('aria-live', 'polite');
  revealHeader.append(stageLabel);
  const reelHost = element('div', 'fr-reel-stage');
  reelHost.setAttribute('aria-live', 'off');
  reelHost.tabIndex = 0;
  reelHost.setAttribute('aria-label', '六张特征卡轨道，可横向浏览');
  const progressHost = element('div', 'fr-reveal-progress');
  progressHost.setAttribute('role', 'group');
  progressHost.setAttribute('aria-label', '卡片停止进度');
  progressHost.hidden = true;
  const reelNote = element('p', 'fr-reel-stage-note', '角色风格 · 外形五官 · 配色材质 · 衣物 · 配饰 · 道具');
  reelNote.hidden = true;

  const result = element('article', 'fr-result-card');
  result.setAttribute('aria-label', '已揭晓的完整角色作品');
  result.hidden = true;
  const resultImageHost = element('div', 'fr-result-image-host');
  const resultImage = element('img', 'fr-result-image');
  resultImage.decoding = 'async';
  resultImageHost.append(resultImage);
  const caption = element('div', 'fr-result-caption');
  const resultTitle = element('h2', 'fr-result-title');
  const resultBadge = element('span', 'fr-result-badge');
  caption.append(resultTitle, resultBadge);
  const resultTraits = element('p', 'fr-result-traits');
  const resultDescription = element('p', 'fr-result-description');
  const resultInfo = element('div', 'fr-result-info');
  const resultFooter = element('div', 'fr-result-footer');
  const detail = makeButton('detail', '查看详情', 'fr-button fr-secondary fr-result-detail');
  resultInfo.append(caption, resultDescription, resultTraits, resultFooter);
  resultFooter.append(detail);
  const promptFallback = element('textarea', 'fr-prompt-fallback');
  promptFallback.setAttribute('aria-label', '供手动复制的作品 Prompt');
  promptFallback.readOnly = true;
  promptFallback.hidden = true;
  const manualChatLink=element('a','fr-manual-chat-link','手动打开 ChatGPT');
  manualChatLink.target='_blank';manualChatLink.rel='noopener noreferrer';manualChatLink.hidden=true;
  result.append(resultImageHost, resultInfo, promptFallback,manualChatLink);

  const status = element('p', 'fr-status');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');

  const actions = element('div', 'fr-actions');
  const start = makeButton('random', '随机一款', 'fr-button fr-random');
  const skip = makeButton('skip', '跳过动画', 'fr-button fr-skip');
  skip.hidden = true;
  const copy = makeButton('copy', '复制 Prompt', 'fr-button fr-primary');
  const download = makeButton('download', '下载图片', 'fr-button fr-primary-secondary');
  const chatgpt = makeButton('chatgpt', '在 ChatGPT 中创作 →', 'fr-button fr-quiet');
  const extraActions = element('div', 'fr-extra-actions');
  extraActions.append(chatgpt);
  const retryResources = makeButton('retry-resources', '重试资源并重新抽取', 'fr-button fr-secondary fr-retry');
  retryResources.hidden = true;
  actions.append(copy, download, start, skip, retryResources);
  for (const button of [copy, download, chatgpt, detail]) button.hidden = true;

  reveal.append(revealHeader, reelHost, progressHost, reelNote, result);
  const locks = element('details', 'fr-feature-locks');
  locks.hidden = true;
  locks.append(element('summary', '', '保留喜欢的特征'));
  const lockNote = element('p', 'fr-lock-note', '下一款须同时符合已选特征');
  const lockOptions = element('div', 'fr-lock-options');
  locks.append(lockNote, lockOptions);
  root.append(heading, reveal, status, actions, extraActions, locks);
  return {root, hint, locks, lockOptions, reveal, reelHost, progressHost, reelNote, stageLabel, result, resultImage, resultTitle, resultBadge, resultTraits, resultDescription, promptFallback, manualChatLink, status, start, skip, copy, download, chatgpt, retryResources, detail};
}

function makeReelItem(item, handle, centered = false) {
  const card = element('article', `fr-reel-item${centered ? ' is-centered' : ''}`);
  const label = item.label || getArtworkTitle(item.artwork);
  card.setAttribute('aria-label', label);
  const visual = element('div', 'fr-reel-visual');
  visual.dataset.visualId = item.visual.id;
  visual.dataset.visualKind = item.visual.kind;
  visual.dataset.visualVersion = item.visual.version;
  if (item.visual.source) {
    visual.dataset.sourceArtwork = item.visual.source.artworkId;
    visual.dataset.sourceAsset = item.visual.source.assetId;
    visual.dataset.sourceHash = item.visual.source.sha256;
  }
  if (handle?.url) {
    const image = element('img', 'fr-reel-image');
    image.src = handle.url;
    image.alt = '';
    image.decoding = 'async';
    const rect = item.visual.sourceRect;
    if (item.visual.kind === 'source-crop' && (!Array.isArray(rect) || rect.length !== 4 || rect.some(value => !Number.isFinite(value)) || rect[0] < 0 || rect[1] < 0 || rect[2] <= 0 || rect[3] <= 0 || rect[0]+rect[2] > 1 || rect[1]+rect[3] > 1)) throw new Error('特征局部图缺少有效登记范围。');
    if (Array.isArray(rect) && rect.length === 4) {
      const [x, y, width, height] = rect;
      visual.classList.add('is-detail-crop');
      const frame = element('span', 'fr-feature-crop');
      frame.style.setProperty?.('--fr-crop-ratio', String(width * handle.asset.width / (height * handle.asset.height)));
      frame.style.aspectRatio = `${width * handle.asset.width} / ${height * handle.asset.height}`;
      image.style.width = `${100 / width}%`;
      image.style.height = `${100 / height}%`;
      image.style.left = `${-x * 100 / width}%`;
      image.style.top = `${-y * 100 / height}%`;
      frame.append(image);
      visual.append(frame);
      visual.dataset.sourceRect = JSON.stringify(rect);
    } else visual.append(image);
  } else {
    const symbol = element('span', 'fr-reel-symbol', item.visual.kind === 'empty-value' ? '—' : '?');
    visual.append(symbol);
  }
  const copy = element('div', 'fr-reel-copy');
  const value = element('b', 'fr-reel-value', label);
  value.setAttribute('aria-label', label);
  value.setAttribute('title', label);
  copy.append(value);
  card.append(visual, copy);
  return card;
}

function reelMeasurements(slot) {
  let configuredHeight = 0;
  try {
    configuredHeight = Number.parseFloat(globalThis.getComputedStyle?.(slot.reel)?.getPropertyValue?.('--fr-card-height')) || 0;
  } catch { /* A non-browser host uses the measured item or the deterministic fallback. */ }
  const item = slot.track.children?.[0];
  const measuredHeight = Number(item?.getBoundingClientRect?.().height || item?.offsetHeight || 0);
  const cardHeight = configuredHeight > 0 ? configuredHeight : measuredHeight > 0 ? measuredHeight : FALLBACK_CARD_HEIGHT;
  const windowHeight = Number(slot.window?.getBoundingClientRect?.().height || slot.window?.clientHeight || 0);
  const inset = windowHeight > cardHeight ? (windowHeight - cardHeight) / 2 : 0;
  return {cardHeight, centerOffset: Math.max(0, cardHeight - inset)};
}

function setSlotProgress(slot, state) {
  const description = state === 'rolling' ? '正在滚动' : state === 'stopped' ? '已停止' : '等待揭晓';
  slot.stageState.textContent = description;
  slot.stageState.setAttribute('aria-label', `${slot.label}：${description}`);
  if (!slot.progress) return;
  slot.progress.dataset.state = state;
  slot.progress.classList.toggle('is-active', state === 'rolling');
  slot.progress.classList.toggle('is-landed', state === 'stopped');
  slot.progress.setAttribute('aria-label', `第 ${slot.index + 1} 张卡片，${description}`);
}

function setFocusSafe(node) {
  try { node?.focus?.({preventScroll: true}); } catch { /* Focus is owned by the containing overlay. */ }
}

/**
 * A mountable result/reveal view shared by the global overlay and the game page.
 * The Artwork is selected and frozen by the injected DrawEngine before any asset
 * is loaded or animated. Rolling candidates keep their own sources; stopped
 * cards and all result actions reveal facts from the frozen selection.
 */
export function createRevealView({
  engine,
  getConditions = () => ({}),
  onDetail = () => {},
  onResult = () => {},
  notify = () => {},
  autoStart = false,
  initialRequiredFeatures = [],
  onLocksChange = () => {},
  getAsset: resolveRegisteredAsset = getAsset,
  loadAsset: loadRegisteredAsset = loadAsset,
  openChatGPT: openPrompt = copyAndOpen,
  downloadAsset: downloadOriginal = downloadAsset
} = {}) {
  if (!engine || typeof engine.select !== 'function') throw new TypeError('卡片揭晓视图需要共享 DrawEngine。');
  if (typeof getConditions !== 'function') throw new TypeError('getConditions 必须是函数。');
  if (typeof onDetail !== 'function' || typeof onResult !== 'function' || typeof notify !== 'function'
      || typeof resolveRegisteredAsset !== 'function' || typeof loadRegisteredAsset !== 'function'
      || typeof openPrompt !== 'function' || typeof downloadOriginal !== 'function') {
    throw new TypeError('详情、创作、结果及提示回调必须是函数。');
  }

  const ui = createStructure();
  const {root} = ui;
  const lockedFeatures = new Set(initialRequiredFeatures.filter(id => typeof id === 'string'));
  let phase = 'ready';
  let runSerial = 0;
  let activeRun = null;
  let current = null;
  let displayIsPrevious = false;
  let disposed = false;
  let lastNotice = '';
  let activeSlot = -1;
  const timers = new Map();
  const frames = new Map();
  const downloads = new Set();
  const locallyUnavailableArtworkIds = new Set();
  const motionQuery = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)') || null;

  const isBusy = () => ['selecting', 'preloading', 'revealing'].includes(phase);
  const currentRun = run => !disposed && activeRun === run && run.id === runSerial && !run.controller.signal.aborted;
  const syncState = () => {
    root.dataset.phase = phase;
    const artworkId = activeRun ? activeRun.result?.artworkId : current?.result?.artworkId;
    if (artworkId) root.dataset.artworkId = String(artworkId);
    else delete root.dataset.artworkId;
  };
  const setPhase = next => { phase = next; ui.hint.textContent = next === 'result' ? '遇见新的伙伴' : '随机发现一位伙伴'; syncState(); };
  const status = message => { ui.status.textContent = String(message || ''); };
  const showNotice = message => {
    const text = typeof message === 'string' ? message : message?.message || message?.label || '';
    return String(text || '').trim();
  };

  function disposeHandles(handles) {
    for (const handle of handles || []) {
      try { handle?.dispose?.(); } catch { /* Releasing a stale URL must not block the next session. */ }
    }
    handles?.clear?.();
  }

  function clearScheduled() {
    for (const [id, resolve] of timers) {
      clearTimeout(id);
      resolve(false);
    }
    timers.clear();
    for (const [id, resolve] of frames) {
      if (typeof globalThis.cancelAnimationFrame === 'function') globalThis.cancelAnimationFrame(id);
      else clearTimeout(id);
      resolve(false);
    }
    frames.clear();
  }

  function delay(ms, run) {
    return new Promise(resolve => {
      if (!currentRun(run)) { resolve(false); return; }
      const id = setTimeout(() => {
        timers.delete(id);
        resolve(currentRun(run));
      }, ms);
      timers.set(id, resolve);
    });
  }

  function nextFrame(run) {
    return new Promise(resolve => {
      if (!currentRun(run)) { resolve(false); return; }
      const raf = globalThis.requestAnimationFrame;
      let id;
      const done = () => {
        frames.delete(id);
        resolve(currentRun(run));
      };
      if (typeof raf === 'function') id = raf(done);
      else id = setTimeout(done, 16);
      frames.set(id, resolve);
    });
  }

  function resolveAsset(ref) {
    if (!ref) return null;
    const asset = resolveRegisteredAsset(ref);
    if (!asset || !asset.path) throw new Error('有一项揭晓资源未登记到作品目录。');
    return asset;
  }

  function markArtworkUnavailable(run, artworkId, error) {
    if (!artworkId || typeof engine.markUnavailable !== 'function') return;
    try {
      engine.markUnavailable(artworkId, error?.message || 'Artwork resource verification failed');
      run.unavailableArtworkIds.add(artworkId);
      locallyUnavailableArtworkIds.add(artworkId);
    } catch { /* Exclusion is optional for engines without resource health tracking. */ }
  }

  function listUnavailableArtworks() {
    if (typeof engine.unavailableArtworkIds === 'function') {
      try {
        const ids = engine.unavailableArtworkIds();
        if (Array.isArray(ids)) {
          locallyUnavailableArtworkIds.clear();
          for (const id of ids) if (typeof id === 'string' && id) locallyUnavailableArtworkIds.add(id);
          return [...locallyUnavailableArtworkIds];
        }
      } catch { /* The local set still exposes this view's verified failures. */ }
    }
    return [...locallyUnavailableArtworkIds];
  }

  function ensureLoaded(run, assetRef, artworkId = '') {
    let asset;
    try { asset = resolveAsset(assetRef); }
    catch (error) {
      markArtworkUnavailable(run, artworkId, error);
      return Promise.reject(error);
    }
    if (!asset) return Promise.resolve(null);
    const key = getAssetKey(asset);
    if (run.loaded.has(key)) return Promise.resolve(run.loaded.get(key));
    if (run.pendingLoads.has(key)) return run.pendingLoads.get(key);
    const pending = Promise.resolve().then(() => loadRegisteredAsset(asset, {signal: run.controller.signal})).then(handle => {
      if (!handle?.blob || !handle?.url || !handle?.asset) {
        handle?.dispose?.();
        throw new Error(`作品资源 ${asset.id || asset.path} 未通过完整预载校验。`);
      }
      if (!currentRun(run)) {
        handle.dispose?.();
        throw new DOMException('抽取已取消', 'AbortError');
      }
      run.loaded.set(key, handle);
      run.handles.add(handle);
      return handle;
    }).catch(error => {
      if (!isAbort(error)) markArtworkUnavailable(run, asset.ownerArtworkId || artworkId, error);
      throw error;
    }).finally(() => run.pendingLoads.delete(key));
    run.pendingLoads.set(key, pending);
    return pending;
  }

  function handleFor(run, ref) {
    const asset = ref ? resolveAsset(ref) : null;
    return asset ? run.loaded.get(getAssetKey(asset)) || null : null;
  }

  function renderNeighborhood(slot, centerIndex) {
    const track = slot.track;
    const count = slot.items.length;
    if (count < 2) {
      const center = slot.items[centerIndex];
      track.style.transition = 'none';
      track.style.transform = 'none';
      track.classList.add('is-static');
      track.replaceChildren(makeReelItem(center, handleFor(slot.run, center.assetRef), true));
      slot.centerIndex = centerIndex;
      slot.reel.dataset.centerArtwork = String(center.artworkId || '');
      slot.reel.dataset.centerValue = center.label;
      return;
    }
    track.classList.remove('is-static');
    const before = slot.items[(centerIndex - 1 + count) % count];
    const center = slot.items[centerIndex];
    const after = slot.items[(centerIndex + 1) % count];
    track.style.transition = 'none';
    const {centerOffset} = reelMeasurements(slot);
    track.style.transform = `translateY(-${centerOffset}px)`;
    track.replaceChildren(
      makeReelItem(before, handleFor(slot.run, before.assetRef)),
      makeReelItem(center, handleFor(slot.run, center.assetRef), true),
      makeReelItem(after, handleFor(slot.run, after.assetRef))
    );
    slot.centerIndex = centerIndex;
    slot.reel.dataset.centerArtwork = String(center.artworkId || '');
    slot.reel.dataset.centerValue = center.label;
  }

  function landSlot(slot) {
    renderNeighborhood(slot, slot.selectedIndex);
    slot.reel.classList.remove('is-rolling', 'is-waiting');
    slot.window.setAttribute('aria-hidden', 'false');
    slot.reel.classList.add('is-landed');
    slot.reel.dataset.stopped = 'true';
    slot.track.style.transition = 'none';
    setSlotProgress(slot, 'stopped');
  }

  function renderSlots(run, {restored = false} = {}) {
    ui.reelHost.replaceChildren();
    ui.progressHost.replaceChildren();
    if (typeof ui.reelHost.style?.setProperty === 'function') {
      ui.reelHost.style.setProperty('--fr-slot-count', String(Math.max(1, run.slots.length)));
    } else {
      ui.reelHost.style['--fr-slot-count'] = String(Math.max(1, run.slots.length));
    }
    ui.reelHost.dataset.slotCount = String(run.slots.length);
    run.slots.forEach((slot, index) => {
      const reel = element('article', `fr-reel${restored ? ' is-restored' : ' is-waiting'}`);
      reel.dataset.slot = slot.key;
      reel.dataset.index = String(index);
      reel.dataset.stopped = restored ? 'true' : 'false';
      reel.setAttribute('aria-label', `${slot.label}特征卡`);
      const heading = element('div', 'fr-reel-label-row');
      const number = element('span', 'fr-reel-number', String(index + 1));
      const shortLabel = element('span', 'fr-reel-label', slot.shortLabel || slot.label);
      shortLabel.setAttribute('aria-label', slot.label);
      const stageState = element('span', 'fr-reel-state');
      heading.append(number, shortLabel, stageState);
      const viewport = element('div', 'fr-reel-window');
      viewport.setAttribute('role', 'group');
      viewport.setAttribute('aria-label', `${slot.label}候选卡片`);
      viewport.setAttribute('aria-hidden', restored ? 'false' : 'true');
      const track = element('div', 'fr-reel-track');
      viewport.append(track);
      reel.append(heading, viewport, makeCardBack(slot.shortLabel || slot.label));
      ui.reelHost.append(reel);
      const progress = element('span', 'fr-reveal-progress-step');
      progress.dataset.slotProgress = String(index);
      progress.dataset.index = String(index);
      progress.setAttribute('role', 'img');
      ui.progressHost.append(progress);
      slot.run = run;
      slot.reel = reel;
      slot.track = track;
      slot.window = viewport;
      slot.index = index;
      slot.stageState = stageState;
      slot.progress = progress;
      setSlotProgress(slot, restored ? 'stopped' : 'waiting');
      const startIndex = restored ? slot.selectedIndex : slot.items.length > 1
        ? (slot.selectedIndex + 1) % slot.items.length
        : slot.selectedIndex;
      renderNeighborhood(slot, startIndex);
      if (restored) landSlot(slot);
    });
    ui.reelHost.scrollLeft = 0;
    ui.reveal.hidden = false;
    ui.reelHost.hidden = run.slots.length === 0;
    ui.progressHost.hidden = run.slots.length === 0;
    ui.reelNote.hidden = run.slots.length === 0;
    ui.stageLabel.textContent = run.slots.length
      ? (restored ? '已恢复停止的卡片' : '逐卡揭晓')
      : '作品事实已核对';
  }

  function renderLocks(result) {
    ui.lockOptions.replaceChildren();
    for (const feature of result.revealFeatures || []) {
      const ids = (Array.isArray(feature.value) ? feature.value : [feature.value]).filter(id => typeof id === 'string' && result.artwork.featureIds?.includes(id));
      if (!ids.length) continue;
      const label = element('label', 'fr-lock-option');
      const input = element('input');
      input.type = 'checkbox';
      input.checked = ids.every(id => lockedFeatures.has(id));
      input.dataset.featureIds = JSON.stringify(ids);
      input.addEventListener('change', () => {
        for (const id of ids) input.checked ? lockedFeatures.add(id) : lockedFeatures.delete(id);
        onLocksChange(Object.freeze([...lockedFeatures]));
        status(lockedFeatures.size ? '下一款将满足全部已锁定特征。' : '已解除特征锁定，仍使用原筛选范围。');
      });
      label.append(input, element('span', '', `${FEATURE_SLOTS.find(slot => slot.key === feature.kind)?.label || ''}：${getFeatureText(feature)}`));
      ui.lockOptions.append(label);
    }
  }

  function renderReadyCards() {
    ui.reelHost.replaceChildren(); ui.progressHost.replaceChildren();
    for (const [index, definition] of FEATURE_SLOTS.entries()) {
      const reel = element('article', 'fr-reel is-waiting');
      reel.dataset.slot = definition.key; reel.dataset.index = String(index); reel.dataset.stopped = 'false';
      const heading = element('div', 'fr-reel-label-row');
      heading.append(element('span', 'fr-reel-number', String(index + 1)), element('span', 'fr-reel-label', definition.label));
      reel.append(heading, makeCardBack(definition.label)); ui.reelHost.append(reel);
    }
    ui.reelHost.dataset.slotCount = '6'; ui.reveal.hidden = false;
    ui.progressHost.hidden = true; ui.reelNote.hidden = true;
  }

  function followSlot(slot) {
    if (!slot.reel?.getBoundingClientRect || !ui.reelHost?.getBoundingClientRect) return;
    const card = slot.reel.getBoundingClientRect(), host = ui.reelHost.getBoundingClientRect();
    const left = Math.max(0, Math.min(ui.reelHost.scrollWidth - ui.reelHost.clientWidth,
      ui.reelHost.scrollLeft + card.left - host.left - (host.width - card.width) / 2));
    const fastConfirm = slot.items.length < 2 || slot.items[slot.selectedIndex].features.every(feature => ['none', 'not-applicable', 'notApplicable'].includes(feature.state));
    ui.reelHost.scrollTo?.({left, behavior: reducedMotion() || fastConfirm ? 'instant' : 'smooth'});
  }

  function displayResult(record, {previous = false} = {}) {
    if (!record) {
      ui.result.hidden = true;
      for (const button of [ui.copy, ui.download, ui.chatgpt, ui.detail]) button.hidden = true;
      return;
    }
    const result = record.result;
    ui.result.hidden = false;
    ui.resultImage.src = record.mainHandle.url;
    ui.resultImage.alt = getArtworkTitle(result.artwork);
    ui.resultTitle.textContent = getArtworkTitle(result.artwork);
    ui.resultBadge.textContent = previous ? '上一款' : (record.poolSize === 1 ? '当前范围仅此一款' : '');
    ui.resultBadge.hidden = !ui.resultBadge.textContent;
    ui.resultDescription.textContent = String(result.artwork.description || '');
    ui.resultDescription.hidden = !ui.resultDescription.textContent;
    const asset = result.asset;
    ui.resultTraits.textContent = [asset?.alpha?.hasAlpha && asset?.alpha?.hasTransparency ? '透明 PNG' : 'PNG', '静态', Number.isFinite(asset?.width) && Number.isFinite(asset?.height) ? `${asset.width} × ${asset.height}` : ''].filter(Boolean).join(' · ');
    ui.promptFallback.hidden = true;
    ui.manualChatLink.hidden = true;
    ui.promptFallback.value = '';
    for (const button of [ui.copy, ui.download, ui.chatgpt, ui.detail]) button.hidden = false;
    ui.copy.disabled = !getPromptText(result.prompt);
    renderLocks(result);
    ui.reelHost.scrollLeft = 0;
  }

  function showPriorResult({message, previous = true} = {}) {
    activeSlot = -1;
    displayIsPrevious = Boolean(previous && current);
    displayResult(current, {previous});
    if (current) {
      const loaded = new Map([...current.handles].map(handle => [getAssetKey(handle.asset), handle]));
      renderSlots({slots: buildRestoredSlots(current.result), loaded}, {restored: true});
      ui.stageLabel.textContent = '上一款卡片已停止';
    } else {
      renderReadyCards();
      ui.stageLabel.textContent = '揭晓已结束';
    }
    status(message || (current ? '本次没有完成；上一款作品仍保留。' : '本次随机发现已结束。'));
    updateActions();
  }

  function updateActions() {
    const busy = isBusy();
    root.dataset.displayResult = String(Boolean(current && !busy));
    ui.start.disabled = disposed || busy;
    ui.start.textContent = current ? '再来一款' : '随机一款';
    ui.skip.hidden = phase !== 'revealing';
    for (const button of [ui.copy, ui.download, ui.chatgpt, ui.detail]) {
      button.hidden = !current || busy;
    }
    ui.locks.hidden = !current || busy;
    ui.start.classList.toggle('fr-reroll', Boolean(current));
    const promptReady = Boolean(getPromptText(current?.result?.prompt));
    ui.copy.disabled = disposed || busy || !promptReady;
    ui.chatgpt.disabled = disposed || busy || !promptReady;
    ui.detail.disabled = disposed || busy || !current;
    ui.download.disabled = disposed || busy || !current || [...downloads].some(op=>op.snapshot===current.result);
    const hasUnavailableArtworks = listUnavailableArtworks().length > 0;
    ui.retryResources.hidden = !hasUnavailableArtworks;
    ui.retryResources.disabled = disposed || busy || !hasUnavailableArtworks || typeof engine.clearUnavailable !== 'function';
  }

  function buildRun() {
    return {
      id: ++runSerial,
      controller: new AbortController(),
      handles: new Set(),
      loaded: new Map(),
      pendingLoads: new Map(),
      slots: [],
      result: null,
      mainHandle: null,
      poolSize: 0,
      unavailableArtworkIds: new Set(),
      finalizing: false
    };
  }

  function retireRun(run) {
    if (!run) return;
    if (!run.controller.signal.aborted) run.controller.abort();
    disposeHandles(run.handles);
    run.loaded.clear();
    run.pendingLoads.clear();
  }

  function installCompletedRun(run) {
    if (!currentRun(run) || run.finalizing === false) return false;
    const previous = current;
    current = {
      result: run.result,
      mainHandle: run.mainHandle,
      handles: run.handles,
      poolSize: run.poolSize,
      drawId: run.result.drawId
    };
    run.handles = new Set();
    run.loaded.clear();
    activeRun = null;
    displayIsPrevious = false;
    setPhase('result');
    activeSlot = -1;
    ui.reveal.hidden = false;
    ui.stageLabel.textContent = '全部卡片已停止';
    displayResult(current);
    updateActions();
    disposeHandles(previous?.handles);
    const promptReady = Boolean(getPromptText(run.result.prompt));
    const notice = lastNotice ? `${lastNotice} ` : '';
    status(`${notice}${promptReady ? '为你找到这位伙伴，带走图片或 Prompt 吧。' : '已找到作品；该作品当前没有可复制的 Prompt。'}`);
    invokeResultCallback(run.result, run.id);
    return true;
  }

  function reportCallbackError(error, label, snapshot, operationSerial) {
    if (disposed || current?.result !== snapshot || runSerial !== operationSerial || isBusy()) return;
    const message = error?.message || `暂时无法${label}。`;
    status(message);
    try { notify(message); } catch { /* Keep the inline status as fallback. */ }
  }

  function invokeResultCallback(snapshot, operationSerial) {
    try {
      const response = onResult(snapshot);
      if (response && typeof response.then === 'function') {
        Promise.resolve(response).catch(error => reportCallbackError(error, '更新结果状态', snapshot, operationSerial));
      }
    } catch (error) {
      reportCallbackError(error, '更新结果状态', snapshot, operationSerial);
    }
  }

  function finishRun(run, skipped = false) {
    if (!currentRun(run) || run.finalizing) return false;
    run.finalizing = true;
    clearScheduled();
    for (const slot of run.slots) landSlot(slot);
    ui.stageLabel.textContent = skipped ? '已跳过，结果一致' : '全部卡片已停止';
    return installCompletedRun(run);
  }

  async function revealNextSlot(run, index = 0) {
    if (!currentRun(run) || run.finalizing) return;
    if (index >= run.slots.length) {
      ui.stageLabel.textContent = '六张卡片已停止，即将揭晓';
      status('全部线索已确认，即将揭晓这位伙伴。');
      if (await delay(240, run)) finishRun(run, false);
      return;
    }
    const slot = run.slots[index];
    activeSlot = index;
    slot.reel.classList.remove('is-waiting');
    slot.window.setAttribute('aria-hidden', 'false');
    slot.reel.classList.add('is-active', 'is-rolling');
    followSlot(slot);
    setSlotProgress(slot, 'rolling');
    ui.stageLabel.textContent = `正在揭晓：${slot.label}`;
    status(lastNotice || `正在逐卡揭晓第 ${index + 1} 张特征卡。`);

    if (slot.items.length < 2 || slot.items[slot.selectedIndex].features.every(feature => ['none', 'not-applicable', 'notApplicable'].includes(feature.state))) {
      landSlot(slot);
      slot.reel.classList.add('is-active');
      const keepGoing = await delay(90, run);
      if (keepGoing) revealNextSlot(run, index + 1);
      return;
    }

    const steps = 5 + index;
    let center = (slot.selectedIndex - (steps % slot.items.length) + slot.items.length) % slot.items.length;
    renderNeighborhood(slot, center);
    for (let step = 0; step < steps; step += 1) {
      const frameReady = await nextFrame(run);
      if (!frameReady || !currentRun(run)) return;
      const duration = 52 + step * 19;
      slot.track.style.transition = `transform ${duration}ms cubic-bezier(.18,.72,.28,1)`;
      const {cardHeight, centerOffset} = reelMeasurements(slot);
      slot.track.style.transform = `translateY(-${centerOffset + cardHeight}px)`;
      const moved = await delay(duration, run);
      if (!moved || !currentRun(run)) return;
      center = (center + 1) % slot.items.length;
      renderNeighborhood(slot, center);
    }
    if (center !== slot.selectedIndex) renderNeighborhood(slot, slot.selectedIndex);
    landSlot(slot);
    slot.reel.classList.add('is-active');
    slot.stageState.textContent = '已揭晓';
    const keepGoing = await delay(150, run);
    if (keepGoing) revealNextSlot(run, index + 1);
  }

  function notifyFailure(message, error) {
    const detail = error?.message ? ` ${error.message}` : '';
    showPriorResult({message: `${message}${detail}${current ? ' 上一款仍保留；没有更换成另一张作品。' : ' 没有开始卡片动画。'}`, previous: true});
  }

  async function start({retryNotice = ''} = {}) {
    if (disposed || isBusy()) return false;
    clearScheduled();
    if (activeRun) retireRun(activeRun);
    displayIsPrevious = Boolean(current);
    activeRun = buildRun();
    const run = activeRun;
    renderReadyCards();
    ui.result.hidden = true;
    ui.promptFallback.hidden = true;
    ui.manualChatLink.hidden = true;
    setPhase('selecting');
    activeSlot = -1;
    lastNotice = showNotice(retryNotice);
    updateActions();
    const openingStatus = current ? '正在按新范围寻找下一款作品；上一款会保留到新结果完整就绪。' : '正在按当前范围寻找已发布作品。';
    status(`${lastNotice ? `${lastNotice} ` : ''}${openingStatus}`);

    try {
      const conditions = await getConditions();
      if (!currentRun(run)) return false;
      const query = conditions?.query ?? conditions ?? {};
      const requiredFeatures = [...new Set([...(Array.isArray(conditions?.requiredFeatures) ? conditions.requiredFeatures : []), ...lockedFeatures])];
      const selection = await engine.select({query, requiredFeatures});
      if (!currentRun(run)) return false;
      if (selection?.status === 'empty') {
        setPhase('empty');
        activeRun = null;
        retireRun(run);
        const reason = showNotice(selection.message) || showNotice(selection.notice) || '当前筛选和必备特征没有匹配作品。请调整条件后重试。';
        notifyFailure([lastNotice, reason].filter(Boolean).join(' '));
        return false;
      }
      if (selection?.status === 'error') {
        setPhase('error');
        activeRun = null;
        retireRun(run);
        const reason = showNotice(selection.message) || showNotice(selection.notice) || '作品目录暂时无法完成抽取。';
        notifyFailure([lastNotice, reason].filter(Boolean).join(' '));
        return false;
      }
      if (selection?.status !== 'selected' || !selection.result?.artworkId || !selection.result?.asset) {
        throw new Error('抽取引擎没有返回完整冻结作品。');
      }

      run.result = selection.result;
      run.poolSize = Array.isArray(selection.pool) ? selection.pool.length : 0;
      lastNotice = [lastNotice, showNotice(selection.notice)].filter(Boolean).join(' ');
      const mainAsset = resolveAsset(selection.result.asset);
      const slots = buildSlots(selection.result, selection.pool);
      run.slots = slots;
      setPhase('preloading');
      status(`${lastNotice ? `${lastNotice} ` : ''}已选定完整作品，正在校验原图和卡片资源；预载完成前不会滚动。`);
      const requests = [ensureLoaded(run, mainAsset, selection.result.artworkId)];
      for (const slot of slots) {
        for (const item of slot.items) {
          if (item.assetRef) requests.push(ensureLoaded(run, item.assetRef, item.artworkId));
        }
      }
      await Promise.all(requests);
      if (!currentRun(run)) return false;
      run.mainHandle = handleFor(run, mainAsset);
      if (!run.mainHandle) throw new Error('完整作品原图未能通过资源校验。');
      renderSlots(run);
      setPhase('revealing');
      updateActions();
      if (run.poolSize === 1) {
        lastNotice = [lastNotice, '当前只有一款符合条件。'].filter(Boolean).join(' ');
      }
      if (reducedMotion()) finishRun(run, true);
      else revealNextSlot(run, 0);
      return true;
    } catch (error) {
      if (!currentRun(run) || isAbort(error)) return false;
      const failedResult = run.result;
      activeRun = null;
      retireRun(run);
      setPhase('error');
      if (failedResult) {
        const excluded = [...run.unavailableArtworkIds];
        const exclusionNote = excluded.length
          ? `已将 ${excluded.length} 款图片暂不可用的作品移出后续抽取范围。`
          : '';
        notifyFailure(`本次作品或必要卡片资源加载失败。${exclusionNote} 可点击“重试资源并重新抽取”主动恢复资源后，再按当前条件抽取。`, error);
      } else {
        notifyFailure('随机发现暂时失败。', error);
      }
      try { notify(`揭晓没有改用其他作品。${error?.message || ''}`.trim()); } catch { /* Notification is an optional side channel. */ }
      return false;
    }
  }

  function skip() {
    if (phase !== 'revealing' || !activeRun) return false;
    return finishRun(activeRun, true);
  }

  async function retryResources() {
    if (disposed || isBusy()) return false;
    const ids = listUnavailableArtworks();
    if (!ids.length) {
      updateActions();
      return false;
    }
    if (typeof engine.clearUnavailable !== 'function') {
      status('当前抽取引擎暂不支持恢复资源失败作品；请稍后重试。');
      updateActions();
      return false;
    }

    try {
      for (const id of ids) engine.clearUnavailable(id);
      for (const id of ids) locallyUnavailableArtworkIds.delete(id);
    } catch (error) {
      const message = `未能重新纳入先前资源失败的作品。${error?.message || ''}`.trim();
      status(message);
      try { notify(message); } catch { /* The inline state is the recovery path. */ }
      updateActions();
      return false;
    }

    const retryNotice = '已主动重新纳入先前资源失败的作品；沿用本次作品范围重新抽取，结果可能是其他作品。';
    updateActions();
    return start({retryNotice});
  }

  function cancel() {
    if (disposed || !activeRun) return false;
    const run = activeRun;
    runSerial += 1;
    activeRun = null;
    clearScheduled();
    retireRun(run);
    ui.reveal.hidden = true;
    setPhase(current ? 'result' : 'cancelled');
    showPriorResult({message: current ? '本次揭晓已取消；上一款作品仍保留。' : '本次揭晓已取消。', previous: Boolean(current)});
    updateActions();
    return true;
  }

  async function restore(result) {
    if (disposed || !isRecord(result) || !result.artworkId || !result.asset) return false;
    if (activeRun) cancel();
    clearScheduled();
    const run = buildRun();
    activeRun = run;
    run.result = result;
    run.poolSize = 0;
    run.slots = buildRestoredSlots(result);
    setPhase('preloading');
    ui.result.hidden = true;
    ui.reveal.hidden = true;
    updateActions();
    status('正在恢复同一张作品的原图与 Prompt 快照。');
    try {
      const asset = resolveAsset(result.asset);
      const requests = [ensureLoaded(run, asset, result.artworkId)];
      for (const slot of run.slots) {
        for (const item of slot.items) {
          if (item.assetRef) requests.push(ensureLoaded(run, item.assetRef, item.artworkId));
        }
      }
      await Promise.all(requests);
      if (!currentRun(run)) return false;
      run.mainHandle = handleFor(run, asset);
      if (!run.mainHandle) throw new Error('恢复结果没有通过原图校验。');
      const previous = current;
      current = {result, mainHandle: run.mainHandle, handles: run.handles, poolSize: run.poolSize, drawId: result.drawId};
      run.handles = new Set();
      activeRun = null;
      setPhase('result');
      displayIsPrevious = false;
      displayResult(current);
      renderSlots(run, {restored: true});
      run.loaded.clear();
      updateActions();
      status('已恢复同一张冻结作品；停止的特征卡与原图仍相互对应。');
      disposeHandles(previous?.handles);
      invokeResultCallback(result, run.id);
      return true;
    } catch (error) {
      if (!currentRun(run) || isAbort(error)) return false;
      activeRun = null;
      retireRun(run);
      setPhase('error');
      notifyFailure('无法恢复这张冻结作品。', error);
      return false;
    }
  }

  async function copyPrompt() {
    if (!current || disposed || isBusy()) return false;
    const snapshot = current.result;
    const operationSerial = runSerial;
    const prompt = getPromptText(snapshot.prompt);
    if (!prompt) { status('这张作品暂时没有已登记的 Prompt。'); return false; }
    const stillCurrent = () => !disposed && current?.result === snapshot && runSerial === operationSerial && !isBusy();
    try {
      if (!globalThis.navigator?.clipboard?.writeText) throw new Error('当前浏览器没有可用的剪贴板接口。');
      await globalThis.navigator.clipboard.writeText(prompt);
      if (!stillCurrent()) return false;
      status(`${displayIsPrevious ? '上一款' : '当前作品'}的 Prompt 已复制。`);
      try { notify('Prompt 已复制。'); } catch { /* UI status remains available. */ }
      return true;
    } catch (error) {
      if (!stillCurrent()) return false;
      ui.promptFallback.value = prompt;
      ui.promptFallback.hidden = false;
      setFocusSafe(ui.promptFallback);
      try { ui.promptFallback.select(); } catch { /* Text remains selectable with touch or keyboard. */ }
      const message = '无法自动复制；已显示完整 Prompt，可手动选择复制。';
      status(message);
      try { notify(message); } catch { /* The inline prompt is the primary fallback. */ }
      return false;
    }
  }

  async function openChatGPT() {
    if (!current || disposed || isBusy()) return false;
    const snapshot = current.result, operationSerial = runSerial;
    const prompt = getPromptText(snapshot.prompt);
    if (!prompt) return false;
    const stillCurrent = () => !disposed && current?.result === snapshot && runSerial === operationSerial && !isBusy();
    const outcome = await openPrompt(prompt,{isCurrent:stillCurrent,notify:message=>{if(stillCurrent()){status(message);notify(message);}}});
    if (!stillCurrent() || outcome?.cancelled) return false;
    if (!outcome?.copied || !outcome?.opened) {
      ui.promptFallback.value=prompt;ui.promptFallback.hidden=false;
      ui.manualChatLink.href=chatGPTUrlForPrompt(prompt);ui.manualChatLink.hidden=false;
    }
    return Boolean(outcome?.opened);
  }

  async function downloadImage() {
    if (!current || disposed || isBusy() || ui.download.disabled) return false;
    const snapshot=current.result, operationSerial=runSerial;
    const operation={snapshot,controller:new AbortController()};
    downloads.add(operation);updateActions();
    const stillCurrent=()=>!disposed&&current?.result===snapshot&&runSerial===operationSerial&&!isBusy();
    if(stillCurrent())status('正在校验并下载这款伙伴的原图…');
    let downloaded;
    try {
      downloaded=await downloadOriginal(snapshot.asset,{signal:operation.controller.signal});
      if(stillCurrent())status('已开始下载这款伙伴的透明 PNG 原图。');
      return true;
    }catch(error){
      if(stillCurrent()&&!isAbort(error))status(`图片下载失败：${error?.message||'请重试。'}`);
      return false;
    }finally{
      downloaded?.dispose?.();downloads.delete(operation);
      if(!disposed)updateActions();
    }
  }

  function actOnResult(callback, label) {
    if (!current || disposed || isBusy() || typeof callback !== 'function') return false;
    const snapshot = current.result;
    const operationSerial = runSerial;
    try {
      const response = callback(snapshot);
      if (response && typeof response.then === 'function') response.catch(error => {
        reportCallbackError(error, label, snapshot, operationSerial);
      });
      return true;
    }
    catch (error) {
      reportCallbackError(error, label, snapshot, operationSerial);
      return false;
    }
  }

  const onClick = event => {
    const button = event.target?.closest?.('[data-fr]');
    if (!button || !root.contains(button)) return;
    switch (button.dataset.fr) {
      case 'random': void start(); break;
      case 'retry-resources': void retryResources(); break;
      case 'skip': skip(); break;
      case 'copy': void copyPrompt(); break;
      case 'download': void downloadImage(); break;
      case 'chatgpt': void openChatGPT(); break;
      case 'detail': actOnResult(onDetail, '打开作品详情'); break;
      default: break;
    }
  };
  root.addEventListener('click', onClick);
  const onResize = () => {
    if (disposed) return;
    for (const reel of ui.reelHost.querySelectorAll('.fr-reel')) {
      if (reel.dataset.stopped !== 'true') continue;
      const track = reel.querySelector('.fr-reel-track'), viewport = reel.querySelector('.fr-reel-window');
      if (!track || track.children.length < 2) continue;
      track.style.transition = 'none';
      track.style.transform = `translateY(-${reelMeasurements({reel,track,window:viewport}).centerOffset}px)`;
    }
  };
  globalThis.addEventListener?.('resize', onResize);


  const onMotionChange = event => {
    if (event?.matches && phase === 'revealing') skip();
  };
  motionQuery?.addEventListener?.('change', onMotionChange);

  function dispose() {
    if (disposed) return;
    cancel();
    disposed = true;
    for(const operation of downloads)operation.controller.abort();
    runSerial += 1;
    clearScheduled();
    root.removeEventListener('click', onClick);
    globalThis.removeEventListener?.('resize', onResize);
    motionQuery?.removeEventListener?.('change', onMotionChange);
    disposeHandles(current?.handles);
    current = null;
    setPhase('disposed');
    ui.result.hidden = true;
    ui.reveal.hidden = true;
    root.remove();
  }

  const api = {
    element: root,
    start,
    skip,
    cancel,
    dispose,
    getResult: () => current?.result || null,
    getState: () => Object.freeze({
      phase,
      requiredFeatures: Object.freeze([...lockedFeatures]),
      drawId: activeRun ? activeRun.result?.drawId || null : current?.drawId || null,
      artworkId: activeRun ? activeRun.result?.artworkId || null : current?.result?.artworkId || null,
      previous: displayIsPrevious,
      activeSlot,
      slotCount: activeRun ? activeRun.slots.length : ui.reelHost.children.length,
      notice: lastNotice
    }),
    restore
  };
  syncState();
  renderReadyCards();
  updateActions();
  if (autoStart) queueMicrotask(() => { if (!disposed) void start(); });
  return api;
}
