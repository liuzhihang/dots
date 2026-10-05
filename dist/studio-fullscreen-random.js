import {FAMILIES, SHAPES, createCharacter, resolveCharacter} from './studio-model.js';
import {setProjectCharacter} from './studio-creation.js';
import {RANDOM_SLOTS, SLOT_NAMES, describeRecipe, randomRecipe} from './studio-random.js';

const FAMILY_IDS = Object.keys(FAMILIES);
const clone = value => structuredClone(value);
const osPrefersReducedMotion = () => Boolean(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);
const COLORS = {
  dots: '#9A73EF',
  grok: '#56C991',
  'meta-muse': '#E5D0B7',
  humans: '#83AEE8',
  animals: '#EBA965'
};

const ICONS = {
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  image: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4" width="17" height="16" rx="2.5"/><circle cx="9" cy="9" r="1.5"/><path d="m5 17 4.2-4.2a1.8 1.8 0 0 1 2.5 0l1.5 1.5 2-2a1.8 1.8 0 0 1 2.5 0L21 16"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  unlock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.2-2.4"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m16 3 4 4-4 4M4 17l4.5-4.5M13 11l3 3 4 4-4 4M4 7h2.5a5 5 0 0 1 3.54 1.46L11 9.4M20 7h-2.5a5 5 0 0 0-2.1.46"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Zm7 12 .9 3.1L23 18l-3.1.9L19 22l-.9-3.1L15 18l3.1-.9L19 14Z"/></svg>'
};

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

function artworkDescriptor(value) {
  if (typeof value === 'string') return isSafeArtworkSource(value) ? {src: value, alt: '角色家族基准形象'} : null;
  if (!value || typeof value !== 'object' || !isSafeArtworkSource(value.src)) return null;
  return {
    src: value.src,
    alt: typeof value.alt === 'string' ? value.alt : '角色家族基准形象',
    label: typeof value.label === 'string' ? value.label : '家族基准形象'
  };
}

function seedString() {
  const bytes = new Uint32Array(2);
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(bytes);
  else {
    bytes[0] = Date.now() >>> 0;
    bytes[1] = Math.floor(Math.random() * 0xffffffff) >>> 0;
  }
  return `inspiration-${bytes[0].toString(36)}-${bytes[1].toString(36)}`;
}

function slotValue(config, slot) {
  const description = describeRecipe(config);
  if (slot !== 'type') return description[slot];
  const resolved = resolveCharacter(config).config;
  return `${FAMILIES[resolved.family].short} · ${SHAPES[resolved.shape]?.label || '伙伴'}`;
}

/**
 * A modal, candidate-only randomizer. Randomizing never commits; only the explicit
 * apply action calls commit. getArtwork(family, config) should return the trusted
 * family baseline artwork descriptor {src, alt?, label?}; it remains visibly
 * labelled as a family reference because recipe changes do not redraw that image.
 *
 * commit(project, {origin: 'random'}) receives a full dot-studio-project wrapper.
 */
export function createFullscreenRandomizer({
  mount = document.body,
  getConfig,
  getProject,
  getArtwork = () => null,
  commit,
  notify = () => {},
  randomRecipeFn = randomRecipe,
  getReducedMotion = osPrefersReducedMotion,
  onOpenChange = () => {}
} = {}) {
  if (!mount?.append || typeof getConfig !== 'function' || typeof getProject !== 'function' || typeof commit !== 'function') {
    throw new TypeError('Fullscreen randomizer requires mount, getConfig, getProject and commit callbacks.');
  }
  if (typeof getReducedMotion !== 'function') throw new TypeError('getReducedMotion must be a function.');
  return new FullscreenRandomizer({mount, getConfig, getProject, getArtwork, commit, notify, randomRecipeFn, getReducedMotion, onOpenChange});
}

class FullscreenRandomizer {
  constructor(options) {
    Object.assign(this, options);
    this.dialog = null;
    this.family = 'auto';
    this.locks = {type: false, look: false, accessories: false, action: false};
    this.candidate = null;
    this.phase = 'idle';
    this.timers = new Set();
    this.turn = 0;
    this.returnFocus = null;
    this.artworkTurn = 0;
    this.opened = false;
    this.disposed = false;
    this.onClick = event => this.handleClick(event);
    this.onKeydown = event => this.handleKeydown(event);
    this.shortcutsAttached = false;
    this.onCancel = event => { event.preventDefault(); this.close(); };
    this.onNativeClose = () => {
      // A previous close event can arrive after the modal has already been reopened.
      if (!this.dialog?.open) this.finishClose();
    };
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
          <div class="fr-heading">
            <span class="fr-eyebrow">A LITTLE SPARK OF INSPIRATION</span>
            <h1 id="fr-title" tabindex="-1">灵感随机器</h1>
            <p>挑选一个角色家族，或交给灵感帮你组合。</p>
          </div>
          <nav class="fr-families" aria-label="选择角色家族" role="group"></nav>
          <section class="fr-art-card" aria-label="家族基准形象与随机配方">
            <div class="fr-art-wrap">
              <img class="fr-art" alt="" hidden>
              <div class="fr-art-empty" hidden>
                <span class="fr-empty-symbol" aria-hidden="true">${ICONS.image}</span>
                <b>这个家族的角色形象正在准备中</b>
                <span>可以先体验配方，稍后再查看基准形象。</span>
              </div>
              <div class="fr-art-caption"><span class="fr-art-label"></span><span class="fr-family-name"></span></div>
            </div>
            <div class="fr-recipe-card">
              <div class="fr-recipe-heading"><div><span class="fr-eyebrow">YOUR LITTLE COMPANION</span><h2>本次随机配方</h2></div><span class="fr-status-dot" aria-hidden="true"></span></div>
              <div class="fr-slots" role="group" aria-label="随机配方与锁定设置"></div>
            </div>
          </section>
          <p class="fr-art-note">图中展示所选家族的基准形象；随机结果是创作配方，可复制 Prompt 创作对应形象。</p>
          <p class="fr-status" role="status" aria-live="polite">选择家族后，开始组合你的下一份灵感。</p>
          <div class="fr-actions">
            <button class="fr-button fr-random" type="button" data-fr="random">${ICONS.sparkle}<span>随机一款</span>${ICONS.arrow}</button>
            <button class="fr-button fr-apply" type="button" data-fr="apply" disabled>用这个配方</button>
            <button class="fr-return" type="button" data-fr="close">返回创作</button>
          </div>
          <p class="fr-footnote">不需要登录。应用配方后，可在创作面板复制 Prompt 并带入 ChatGPT。</p>
        </main>
      </div>`;
    this.mount.append(dialog);
    dialog.addEventListener('click', this.onClick);
    dialog.addEventListener('keydown', this.onKeydown);
    dialog.addEventListener('cancel', this.onCancel);
    dialog.addEventListener('close', this.onNativeClose);
    this.dialog = dialog;
    this.buildFamilyButtons();
    this.buildSlots();
  }

  buildFamilyButtons() {
    const nav = this.dialog.querySelector('.fr-families');
    const addButton = (id, label, shortLabel) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'fr-family';
      button.dataset.family = id;
      button.setAttribute('aria-pressed', 'false');
      if (id !== 'auto') {
        button.style.setProperty('--family-color', COLORS[id]);
        const image = artworkDescriptor(this.getArtwork(id, null));
        if (image) {
          const img = document.createElement('img');
          img.className = 'fr-family-art';
          img.src = image.src;
          img.alt = '';
          img.loading = 'lazy';
          img.addEventListener('error', () => img.remove(), {once: true});
          button.append(img);
        } else {
          const mark = document.createElement('span');
          mark.className = 'fr-family-mark';
          mark.setAttribute('aria-hidden', 'true');
          mark.style.setProperty('--family-color', COLORS[id]);
          button.append(mark);
        }
      } else {
        const mark = document.createElement('span');
        mark.className = 'fr-auto-mark';
        mark.innerHTML = ICONS.shuffle;
        mark.setAttribute('aria-hidden', 'true');
        button.append(mark);
      }
      const title = document.createElement('span');
      title.className = 'fr-family-text';
      title.innerHTML = `<b>${label}</b>${shortLabel ? `<small>${shortLabel}</small>` : ''}`;
      button.append(title);
      nav.append(button);
    };
    addButton('auto', '自动', '五组随机');
    for (const id of FAMILY_IDS) addButton(id, FAMILIES[id].short, '');
  }

  buildSlots() {
    const container = this.dialog.querySelector('.fr-slots');
    for (const slot of RANDOM_SLOTS) {
      const card = document.createElement('div');
      card.className = 'fr-slot';
      card.dataset.slot = slot;
      const label = document.createElement('span');
      label.className = 'fr-slot-label';
      label.textContent = SLOT_NAMES[slot];
      const value = document.createElement('b');
      value.className = 'fr-slot-value';
      value.textContent = '待组合';
      const lock = document.createElement('button');
      lock.type = 'button';
      lock.className = 'fr-lock';
      lock.dataset.lock = slot;
      lock.innerHTML = ICONS.unlock;
      lock.setAttribute('aria-pressed', 'false');
      lock.setAttribute('aria-label', `锁定${SLOT_NAMES[slot]}`);
      card.append(label, value, lock);
      container.append(card);
    }
  }

  open() {
    if (this.disposed) return false;
    this.build();
    if (this.dialog.open) return false;
    if (this.opened) this.finishClose();
    this.returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.family = 'auto';
    this.locks = {type: false, look: false, accessories: false, action: false};
    this.candidate = null;
    this.phase = 'idle';
    this.updateFamilyState();
    this.updateSlotState(null);
    const referenceEnabled = resolveCharacter(this.getConfig()).config.reference.enabled;
    this.setStatus(referenceEnabled
      ? '参考图创作会保留当前家族，类型不会随机更改。'
      : '选择家族后，开始组合你的下一份灵感。');
    this.updateActions();
    this.syncReducedMotion();
    this.dialog.showModal();
    this.opened = true;
    const main = this.dialog.querySelector('.fr-main');
    const families = this.dialog.querySelector('.fr-families');
    if (main) main.scrollTop = 0;
    if (families) families.scrollLeft = 0;
    document.addEventListener('keydown', this.onKeydown, true);
    this.shortcutsAttached = true;
    this.dialog.querySelector('#fr-title').focus({preventScroll: true});
    this.updateArtwork(this.family === 'auto' ? resolveCharacter(this.getConfig()).config.family : this.family);
    this.onOpenChange(true);
    return true;
  }

  close() {
    if (this.disposed || (!this.dialog?.open && !this.opened)) return;
    this.cancelSpin(false);
    this.candidate = null;
    this.phase = 'idle';
    this.artworkTurn++;
    if (this.dialog?.open) this.dialog.close();
    this.finishClose();
  }

  finishClose() {
    if (this.disposed || !this.opened) return;
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
    this.turn++;
    this.artworkTurn++;
    this.clearTimers();
    this.candidate = null;
    this.phase = 'idle';
    this.disposed = true;
    this.returnFocus = null;
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

  handleClick(event) {
    const familyButton = event.target.closest('[data-family]');
    if (familyButton && this.dialog.contains(familyButton)) {
      const nextFamily = familyButton.dataset.family;
      const current = resolveCharacter(this.getConfig()).config;
      if (current.reference.enabled && nextFamily !== 'auto' && nextFamily !== current.family) return;
      this.cancelSpin(false);
      this.candidate = null;
      this.family = nextFamily;
      this.updateFamilyState();
      this.updateSlotState(null);
      this.updateActions();
      this.setStatus(nextFamily === 'auto' ? '下一次随机会从五组角色中挑选。' : `已选择 ${FAMILIES[nextFamily].short}，可以开始组合。`);
      this.updateArtwork(nextFamily === 'auto' ? current.family : nextFamily);
      return;
    }
    const lockButton = event.target.closest('[data-lock]');
    if (lockButton && this.dialog.contains(lockButton) && !lockButton.disabled) {
      const slot = lockButton.dataset.lock;
      this.cancelSpin(false);
      this.locks[slot] = !this.locks[slot];
      this.updateSlotState(this.candidate?.config || null);
      this.updateActions();
      this.setStatus(this.locks[slot]
        ? `已锁定${SLOT_NAMES[slot]}，下一次随机会保留它。`
        : `已解锁${SLOT_NAMES[slot]}，下一次随机可以重新组合。`);
      return;
    }
    const action = event.target.closest('[data-fr]')?.dataset.fr;
    if (action === 'close') this.close();
    else if (action === 'random') this.phase === 'spinning' ? this.cancelSpin(true) : this.spin();
    else if (action === 'apply') this.applyCandidate();
  }

  handleKeydown(event) {
    const editable = event.target?.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(event.target?.tagName || '');
    if (!editable && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (!editable && event.key.toLowerCase() === 'r' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  updateFamilyState() {
    const config = resolveCharacter(this.getConfig()).config;
    for (const button of this.dialog.querySelectorAll('[data-family]')) {
      const id = button.dataset.family;
      const selected = this.family === id;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
      const unavailable = config.reference.enabled && id !== 'auto' && id !== config.family;
      button.disabled = unavailable;
      button.title = unavailable ? '参考图创作会保留当前角色家族。' : '';
    }
  }

  updateSlotState(config) {
    const resolved = resolveCharacter(config || this.chooseSource()).config;
    for (const slot of RANDOM_SLOTS) {
      const card = this.dialog.querySelector(`[data-slot="${slot}"]`);
      const value = card.querySelector('.fr-slot-value');
      const button = card.querySelector('[data-lock]');
      const forced = slot === 'type' && (this.family !== 'auto' || !!resolved?.reference.enabled);
      const locked = forced || this.locks[slot] || (slot === 'type' && !!resolved?.reference.enabled);
      value.textContent = slotValue(resolved, slot);
      card.classList.toggle('locked', locked);
      card.classList.toggle('rolling', this.phase === 'spinning' && !locked);
      if (this.phase === 'spinning' && !locked) value.textContent = '灵感组合中';
      button.innerHTML = locked ? ICONS.lock : ICONS.unlock;
      button.disabled = forced;
      button.setAttribute('aria-pressed', String(locked));
      const reason = resolved?.reference.enabled ? '参考图模式固定' : '所选家族固定';
      button.setAttribute('aria-label', forced ? `${SLOT_NAMES[slot]}由${reason}` : `${this.locks[slot] ? '解锁' : '锁定'}${SLOT_NAMES[slot]}`);
      button.title = forced
        ? (resolved?.reference.enabled ? '参考图创作会保留当前家族' : '切换上方家族来更改类型')
        : `${this.locks[slot] ? '解锁' : '锁定'}${SLOT_NAMES[slot]}`;
    }
  }

  updateActions() {
    const random = this.dialog.querySelector('[data-fr="random"]');
    random.querySelector('span').textContent = this.phase === 'spinning' ? '停止随机' : (this.candidate ? '再随机一次' : '随机一款');
    random.setAttribute('aria-label', this.phase === 'spinning' ? '停止随机过程' : (this.candidate ? '再随机一次' : '随机一款'));
    random.classList.toggle('is-spinning', this.phase === 'spinning');
    const apply = this.dialog.querySelector('[data-fr="apply"]');
    apply.disabled = !this.candidate || this.phase === 'spinning';
  }

  syncReducedMotion() {
    let reduce = false;
    try { reduce = Boolean(this.getReducedMotion()); }
    catch { reduce = osPrefersReducedMotion(); }
    this.dialog.classList.toggle('fr-reduce-motion', reduce);
    return reduce;
  }

  setStatus(text) {
    this.dialog.querySelector('.fr-status').textContent = text;
  }

  async updateArtwork(family) {
    const turn = ++this.artworkTurn;
    const image = this.dialog.querySelector('.fr-art');
    const empty = this.dialog.querySelector('.fr-art-empty');
    const label = this.dialog.querySelector('.fr-art-label');
    const familyName = this.dialog.querySelector('.fr-family-name');
    image.hidden = true;
    empty.hidden = true;
    label.textContent = '家族基准形象';
    familyName.textContent = FAMILIES[family]?.short || '';
    try {
      const descriptor = artworkDescriptor(await this.getArtwork(family, null));
      if (turn !== this.artworkTurn || !this.dialog.open) return;
      if (!descriptor) {
        empty.hidden = false;
        return;
      }
      image.alt = descriptor.alt;
      image.onload = () => {
        if (turn === this.artworkTurn && this.dialog.open) image.hidden = false;
      };
      image.onerror = () => {
        if (turn === this.artworkTurn && this.dialog.open) {
          image.hidden = true;
          empty.hidden = false;
          empty.querySelector('b').textContent = '这组基准形象暂时无法显示';
        }
      };
      image.src = descriptor.src;
      if (image.complete && image.naturalWidth) image.hidden = false;
      label.textContent = descriptor.label || '家族基准形象';
    } catch {
      if (turn === this.artworkTurn && this.dialog.open) empty.hidden = false;
    }
  }

  chooseSource() {
    const current = resolveCharacter(this.getConfig()).config;
    if (this.candidate) return clone(this.candidate.config);
    const target = this.family === 'auto' || current.reference.enabled ? current.family : this.family;
    if (target === current.family) return clone(current);
    const base = createCharacter(target);
    for (const key of ['name', 'notes', 'randomSeed', 'output', 'aspect', 'background', 'framing', 'camera', 'scale', 'motionSpeed']) {
      if (key in current) base[key] = clone(current[key]);
    }
    base.reference = clone(current.reference);
    return base;
  }

  spin() {
    if (this.phase === 'spinning') return;
    const source = this.chooseSource();
    const locks = {...this.locks};
    if (source.reference.enabled || this.family !== 'auto') locks.type = true;
    const token = ++this.turn;
    this.candidate = null;
    this.phase = 'spinning';
    this.updateSlotState(source);
    this.updateActions();
    this.setStatus('灵感正在组合，稍等一下…');
    let recipe;
    try {
      recipe = RANDOM_SLOTS.every(slot => locks[slot])
        ? clone(source)
        : this.randomRecipeFn(source, seedString(), locks);
    } catch (error) {
      this.phase = 'idle';
      this.updateSlotState(null);
      this.updateActions();
      this.setStatus(error?.message || '这次没有组合成功，请再试一次。');
      return;
    }
    const duration = this.syncReducedMotion() ? 0 : 760;
    this.schedule(() => {
      if (!this.dialog.open || token !== this.turn || this.phase !== 'spinning') return;
      this.candidate = {config: clone(recipe)};
      this.phase = 'ready';
      this.updateSlotState(this.candidate.config);
      this.updateActions();
      const family = resolveCharacter(recipe).config.family;
      this.setStatus(`${FAMILIES[family].short} 的配方已准备好。喜欢的话，应用后就能复制 Prompt 创作。`);
      this.updateArtwork(family);
    }, duration);
  }

  cancelSpin(showMessage = true) {
    if (this.phase !== 'spinning') return;
    this.turn++;
    this.clearTimers();
    this.phase = 'idle';
    this.candidate = null;
    if (this.dialog?.isConnected) {
      this.updateSlotState(null);
      this.updateActions();
      if (showMessage) this.setStatus('已停止随机，尚未应用任何更改。');
    }
  }

  schedule(callback, delay) {
    const timer = setTimeout(() => {
      this.timers.delete(timer);
      callback();
    }, delay);
    this.timers.add(timer);
  }

  clearTimers() {
    for (const timer of this.timers) clearTimeout(timer);
    this.timers.clear();
  }

  applyCandidate() {
    if (!this.candidate || this.phase !== 'ready') return;
    try {
      const currentProject = this.getProject();
      const nextProject = setProjectCharacter(currentProject, this.candidate.config);
      const unchanged = JSON.stringify(nextProject) === JSON.stringify(currentProject);
      const result = unchanged ? undefined : this.commit(nextProject, {origin: 'random'});
      const focusTarget = result && typeof result.focus === 'function'
        ? result
        : result?.focus && typeof result.focus.focus === 'function' ? result.focus : null;
      if (focusTarget?.isConnected) this.returnFocus = focusTarget;
      this.candidate = null;
      this.phase = 'idle';
      this.close();
      this.notify(unchanged ? '当前配方已保留，可复制 Prompt 创作。' : '配方已更新，可复制 Prompt 创作。');
    } catch (error) {
      this.setStatus(error?.message || '暂时无法应用这个配方，请再试一次。');
    }
  }
}
