import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {createCharacter, FAMILIES} from '../dist/studio-model.js';
import {makeProject} from '../dist/studio-creation.js';
import {createFullscreenRandomizer, isSafeArtworkSource} from '../dist/studio-fullscreen-random.js';

class FakeClassList {
  constructor(node) { this.node = node; this.values = new Set(); }
  toggle(name, force) {
    const add = force === undefined ? !this.values.has(name) : Boolean(force);
    if (add) this.values.add(name); else this.values.delete(name);
    return add;
  }
  contains(name) { return this.values.has(name); }
}

class FakeElement {
  constructor(tagName, ownerDocument) {
    this.tagName = tagName.toUpperCase();
    this.ownerDocument = ownerDocument;
    this.children = [];
    this.parentNode = null;
    this.dataset = {};
    this.attributes = new Map();
    this.listeners = new Map();
    this.classList = new FakeClassList(this);
    this.style = {setProperty() {}};
    this.hidden = false;
    this.disabled = false;
    this.open = false;
    this.scrollTop = 0;
    this.scrollLeft = 0;
    this.isConnected = false;
    this.complete = false;
    this.naturalWidth = 0;
    this.textContent = '';
    this.innerHTML = '';
  }
  set className(value) { this.classList.values = new Set(String(value).split(/\s+/).filter(Boolean)); }
  get className() { return [...this.classList.values].join(' '); }
  set innerHTML(value) {
    this._html = String(value);
    if (this.tagName === 'DIALOG' && this.ownerDocument) this.makeDialogMarkup();
  }
  get innerHTML() { return this._html || ''; }
  append(...nodes) {
    for (const node of nodes) {
      node.parentNode = this;
      node.isConnected = this.isConnected;
      this.children.push(node);
      node.updateConnection?.(this.isConnected);
    }
  }
  updateConnection(connected) {
    this.isConnected = connected;
    for (const child of this.children) child.updateConnection?.(connected);
  }
  remove() {
    if (this.parentNode) this.parentNode.children = this.parentNode.children.filter(child => child !== this);
    this.updateConnection(false);
    this.parentNode = null;
  }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  addEventListener(type, listener, options = false) {
    const entries = this.listeners.get(type) || [];
    entries.push({listener, capture: options === true || options?.capture === true});
    this.listeners.set(type, entries);
  }
  removeEventListener(type, listener, options = false) {
    const capture = options === true || options?.capture === true;
    this.listeners.set(type, (this.listeners.get(type) || []).filter(entry => entry.listener !== listener || entry.capture !== capture));
  }
  dispatchEvent(event) {
    event.target ||= this;
    event.currentTarget = this;
    for (const entry of [...(this.listeners.get(event.type) || [])]) {
      if (entry.capture) entry.listener.call(this, event);
      else entry.listener.call(this, event);
      if (event.cancelBubble) break;
    }
    if (!event.cancelBubble && event.bubbles !== false && this.parentNode) this.parentNode.dispatchEvent(event);
    else if (!event.cancelBubble && event.bubbles !== false && this === this.ownerDocument?.body) this.ownerDocument.dispatchEvent(event);
    return !event.defaultPrevented;
  }
  closest(selector) {
    for (let node = this; node; node = node.parentNode) if (node.matches(selector)) return node;
    return null;
  }
  matches(selector) {
    if (selector.startsWith('.')) return this.classList.contains(selector.slice(1));
    if (selector.startsWith('#')) return this.getAttribute('id') === selector.slice(1);
    if (selector === '[data-family]') return this.dataset.family !== undefined;
    if (selector === '[data-lock]') return this.dataset.lock !== undefined;
    const dataSlot = selector.match(/^\[data-slot="([^"]+)"\]$/);
    if (dataSlot) return this.dataset.slot === dataSlot[1];
    const dataFr = selector.match(/^\[data-fr="([^"]+)"\]$/);
    if (dataFr) return this.dataset.fr === dataFr[1];
    return selector.toLowerCase() === this.tagName.toLowerCase();
  }
  querySelector(selector) {
    const queue = [...this.children];
    while (queue.length) {
      const node = queue.shift();
      if (node.matches(selector)) return node;
      queue.push(...node.children);
    }
    return null;
  }
  querySelectorAll(selector) {
    const result = [];
    const queue = [...this.children];
    while (queue.length) {
      const node = queue.shift();
      if (node.matches(selector)) result.push(node);
      queue.push(...node.children);
    }
    return result;
  }
  contains(node) { return node === this || this.children.some(child => child.contains(node)); }
  focus() { this.ownerDocument.activeElement = this; }
  showModal() { this.open = true; }
  close() {
    this.open = false;
    queueMicrotask(() => this.dispatchEvent({type: 'close', bubbles: false}));
  }
  makeDialogMarkup() {
    const d = this.ownerDocument;
    const add = (tag, className, parent = this) => {
      const node = d.createElement(tag);
      node.className = className;
      parent.append(node);
      return node;
    };
    const map = new Map();
    const remember = (selector, node) => map.set(selector, node);
    const shell = add('div', 'fr-shell');
    add('header', 'fr-header', shell);
    const main = add('main', 'fr-main', shell);
    const title = add('h1', 'fr-title', main); title.setAttribute('id', 'fr-title'); remember('#fr-title', title);
    remember('.fr-families', add('nav', 'fr-families', main));
    const art = add('section', 'fr-art-card', main);
    const artWrap = add('div', 'fr-art-wrap', art);
    remember('.fr-art', add('img', 'fr-art', artWrap));
    const empty = add('div', 'fr-art-empty', artWrap);
    const emptyTitle = add('b', '', empty); emptyTitle.textContent = '这个家族的角色形象正在准备中';
    add('span', '', empty);
    remember('.fr-art-empty', empty);
    remember('.fr-art-label', add('span', 'fr-art-label', artWrap));
    remember('.fr-family-name', add('span', 'fr-family-name', artWrap));
    const recipe = add('div', 'fr-recipe-card', art);
    remember('.fr-slots', add('div', 'fr-slots', recipe));
    remember('.fr-status', add('p', 'fr-status', main));
    const random = add('button', 'fr-button fr-random', main); random.dataset.fr = 'random';
    add('svg', '', random); add('span', '', random); add('svg', '', random);
    const apply = add('button', 'fr-button fr-apply', main); apply.dataset.fr = 'apply';
    const close = add('button', 'fr-close', main); close.dataset.fr = 'close';
    const back = add('button', 'fr-return', main); back.dataset.fr = 'close';
    remember('[data-fr="random"]', random);
    remember('[data-fr="apply"]', apply);
    // Click dispatch uses closest() on the target; querySelector only needs the first close action.
    remember('[data-fr="close"]', close);
    this._selectorMap = map;
    const query = this.querySelector.bind(this);
    this.querySelector = selector => this._selectorMap?.get(selector) || query(selector);
  }
}

class FakeDocument {
  constructor() {
    this.listeners = new Map();
    this.body = new FakeElement('body', this);
    this.body.isConnected = true;
    this.body.style = {overflow: 'scroll'};
    this.activeElement = this.body;
  }
  createElement(tagName) { return new FakeElement(tagName, this); }
  addEventListener(type, listener, options = false) {
    const entries = this.listeners.get(type) || [];
    entries.push({listener, capture: options === true || options?.capture === true});
    this.listeners.set(type, entries);
  }
  removeEventListener(type, listener, options = false) {
    const capture = options === true || options?.capture === true;
    this.listeners.set(type, (this.listeners.get(type) || []).filter(entry => entry.listener !== listener || entry.capture !== capture));
  }
  dispatchEvent(event) {
    const entries = [...(this.listeners.get(event.type) || [])];
    for (const entry of entries.filter(item => item.capture)) {
      entry.listener.call(this, event);
      if (event.cancelBubble) return;
    }
    for (const entry of entries.filter(item => !item.capture)) {
      entry.listener.call(this, event);
      if (event.cancelBubble) return;
    }
  }
}

const document = new FakeDocument();
const oldGlobals = {document: globalThis.document, HTMLElement: globalThis.HTMLElement, matchMedia: globalThis.matchMedia};
globalThis.document = document;
globalThis.HTMLElement = FakeElement;
let systemReducedMotion = true;
const motionListeners = new Set();
const mediaPreference = {get matches(){return systemReducedMotion;},addEventListener(type,listener){if(type==='change')motionListeners.add(listener);},removeEventListener(type,listener){if(type==='change')motionListeners.delete(listener);}};
globalThis.matchMedia = () => mediaPreference;
const changeSystemMotion = value => {systemReducedMotion=value;for(const listener of [...motionListeners])listener({matches:value});};
const tick = () => new Promise(resolve => setTimeout(resolve, 5));
const makeHarness = ({reference = false, randomRecipeFn, getArtwork, getReducedMotion, onCommit, randomSeed} = {}) => {
  const trigger = document.createElement('button');
  document.body.append(trigger);
  document.activeElement = trigger;
  let config = createCharacter('dots');
  if (randomSeed !== undefined) config.randomSeed = randomSeed;
  if (reference) config.reference = {enabled: true, notes: '', preserve: ['silhouette'], overrides: []};
  let project = makeProject(config);
  const commits = [];
  const changes = [];
  const options = {
    mount: document.body,
    getConfig: () => config,
    getProject: () => project,
    getArtwork: getArtwork || (() => './assets/atelier/dot-plush-headphones-v2.png'),
    commit: (next, meta) => { commits.push({next, meta}); project = next; config = next.character; return onCommit?.(next, meta); },
    onOpenChange: open => changes.push(open)
  };
  if (randomRecipeFn) options.randomRecipeFn = randomRecipeFn;
  if (getReducedMotion) options.getReducedMotion = getReducedMotion;
  const randomizer = createFullscreenRandomizer(options);
  return {randomizer, trigger, commits, changes, read: () => ({config, project})};
};

try {
  for (const source of [
    './assets/atelier/base.png', '/assets/characters/dots.png', './assets/characters/%E8%A7%92%E8%89%B2.png'
  ]) assert.equal(isSafeArtworkSource(source), true, `${source} should be a same-site asset`);
  for (const source of [
    '../assets/character.png', './assets/../secret.png', './assets/%2e%2e/secret.png',
    './assets/a%252f..%252fsecret.png', 'https://attacker.test/assets/character.png',
    'data:image/png;base64,AA==', './outside/character.png', './assets/character.png?token=x'
  ]) assert.equal(isSafeArtworkSource(source), false, `${source} must be rejected`);

  let randomCalls = 0;
  const locked = makeHarness({randomRecipeFn: source => { randomCalls++; return structuredClone(source); }});
  const startingSeed = locked.read().config.randomSeed;
  locked.randomizer.open();
  const lookLock = locked.randomizer.dialog.querySelector('[data-slot="look"]')?.querySelector('[data-lock]');
  assert.ok(lookLock);
  for (const slot of ['type', 'look', 'accessories', 'action']) assert.equal(locked.randomizer.locks[slot], false, `${slot} starts unlocked`);
  for (const slot of ['type', 'look', 'accessories', 'action']) {
    const lock = locked.randomizer.dialog.querySelector(`[data-slot="${slot}"]`)?.querySelector('[data-lock]');
    assert.ok(lock);
    locked.randomizer.handleClick({target: lock});
  }
  assert.equal(locked.randomizer.locks.type, true);
  assert.equal(locked.randomizer.locks.look, true);
  assert.equal(locked.randomizer.locks.accessories, true);
  assert.equal(locked.randomizer.locks.action, true);
  locked.randomizer.spin();
  await tick();
  assert.equal(randomCalls, 0, 'all locked slots reuse the current candidate instead of drawing a new seed');
  assert.equal(locked.randomizer.candidate.config.randomSeed, startingSeed, 'all locked slots preserve the current random seed');
  assert.equal(locked.commits.length, 0, 'showing a candidate must not commit it');
  locked.randomizer.applyCandidate();
  assert.equal(locked.commits.length, 0, 'applying an unchanged all-locked recipe does not create a commit or history entry');
  assert.equal(locked.randomizer.dialog.open, false);
  assert.equal(document.activeElement, locked.trigger, 'closing restores focus to the opener');

  let familyRandomCalls = 0;
  const familyLocked = makeHarness({randomSeed: 'keep-seed', randomRecipeFn: source => { familyRandomCalls++; return structuredClone(source); }});
  familyLocked.randomizer.open();
  const grok = familyLocked.randomizer.dialog.querySelectorAll('[data-family]').find(button => button.dataset.family === 'grok');
  familyLocked.randomizer.handleClick({target: grok});
  for (const slot of ['look', 'accessories', 'action']) {
    const lock = familyLocked.randomizer.dialog.querySelector(`[data-slot="${slot}"]`)?.querySelector('[data-lock]');
    familyLocked.randomizer.handleClick({target: lock});
  }
  familyLocked.randomizer.spin();
  await tick();
  assert.equal(familyRandomCalls, 0, 'a selected family with all effective slots locked does not draw a new random seed');
  assert.equal(familyLocked.randomizer.candidate.config.family, 'grok');
  assert.equal(familyLocked.randomizer.candidate.config.randomSeed, 'keep-seed', 'changing the selected baseline family preserves the existing seed when all slots are locked');
  familyLocked.randomizer.applyCandidate();
  assert.equal(familyLocked.commits.length, 1, 'an explicitly selected different family is applied even when its slots are locked');
  familyLocked.randomizer.dispose();

  const cancelled = makeHarness();
  cancelled.randomizer.open();
  cancelled.randomizer.spin();
  assert.equal(cancelled.randomizer.phase, 'spinning');
  cancelled.randomizer.close();
  await tick();
  assert.equal(cancelled.randomizer.candidate, null, 'closing during spin discards the pending recipe');
  assert.equal(cancelled.commits.length, 0, 'a late timer after close cannot commit');
  assert.equal(cancelled.randomizer.timers.size, 0, 'close clears scheduled timers');

  const families = makeHarness();
  families.randomizer.open();
  for (const id of ['auto', ...Object.keys(FAMILIES)]) {
    const button = families.randomizer.dialog.querySelectorAll('[data-family]').find(candidate => candidate.dataset.family === id);
    assert.ok(button, `family selector ${id} exists`);
    families.randomizer.handleClick({target: button});
    assert.equal(families.randomizer.family, id, `family selector ${id} remains independently selectable`);
    assert.equal(button.getAttribute('aria-pressed'), 'true');
  }
  families.randomizer.dispose();

  let selectedSourceFamily;
  let selectedLocks;
  const scoped = makeHarness({randomRecipeFn: (source, seed, locks) => {
    selectedSourceFamily = source.family;
    selectedLocks = locks;
    return structuredClone(source);
  }});
  scoped.randomizer.open();
  const grokButton = scoped.randomizer.dialog.querySelectorAll('[data-family]').find(button => button.dataset.family === 'grok');
  scoped.randomizer.handleClick({target: grokButton});
  const scopedTypeLock = scoped.randomizer.dialog.querySelector('[data-slot="type"]')?.querySelector('[data-lock]');
  assert.equal(scopedTypeLock.disabled, true, 'choosing one family holds the type slot');
  scoped.randomizer.spin();
  await tick();
  assert.equal(selectedSourceFamily, 'grok', 'a family selection seeds its own baseline');
  assert.equal(selectedLocks.type, true, 'a family selection passes a type lock into randomRecipe');
  scoped.randomizer.dispose();

  const referenced = makeHarness({reference: true});
  referenced.randomizer.open();
  const humanButton = referenced.randomizer.dialog.querySelectorAll('[data-family]').find(button => button.dataset.family === 'humans');
  const dotsButton = referenced.randomizer.dialog.querySelectorAll('[data-family]').find(button => button.dataset.family === 'dots');
  assert.equal(humanButton.disabled, true, 'reference mode disables other family selections');
  assert.equal(dotsButton.disabled, false, 'reference mode leaves the current family available');
  const referenceTypeLock = referenced.randomizer.dialog.querySelector('[data-slot="type"]')?.querySelector('[data-lock]');
  assert.equal(referenceTypeLock.disabled, true, 'reference mode holds the type slot');
  assert.match(referenceTypeLock.title, /参考图/, 'the type lock explains that reference mode fixes the family');
  assert.match(referenceTypeLock.getAttribute('aria-label'), /参考图/, 'assistive technology hears why the type is locked');
  assert.match(referenced.randomizer.dialog.querySelector('.fr-status').textContent, /参考图/, 'the initial status explains the reference-family constraint');
  referenced.randomizer.family = 'auto';
  referenced.randomizer.spin();
  await tick();
  assert.equal(referenced.randomizer.candidate.config.family, 'dots', 'reference mode keeps the candidate in its source family');
  assert.equal(referenced.commits.length, 0);
  referenced.randomizer.close();

  let appReducedMotion = false;
  const production = await readFile(new URL('../dist/studio.js', import.meta.url), 'utf8');
  const motionCallback = production.match(/getReducedMotion:(\(\)=>[^,]+),getArtwork:/)?.[1];
  assert.ok(motionCallback, 'the production randomizer supplies a motion preference callback');
  const productionGetReducedMotion = vm.runInNewContext(motionCallback, {
    get reduceMotion() { return appReducedMotion; },
    matchMedia: globalThis.matchMedia
  });
  const motion = makeHarness({getReducedMotion: () => appReducedMotion});
  const originalMotionProject = structuredClone(motion.read().project);
  motion.randomizer.open();
  const motionDialog = motion.randomizer.dialog;
  assert.equal(motionDialog.classList.contains('fr-reduce-motion'), true,
    'an app callback returning false must never override the enabled OS preference');
  // Change OS and app preferences while the same modal remains open. Each draw
  // must use their current values, including returning to normal motion.
  for (const [os, app] of [[true,false],[false,false],[false,true],[true,true],[false,false],[true,false]]) {
    systemReducedMotion = os;
    appReducedMotion = app;
    const reduced = os || app;
    assert.equal(productionGetReducedMotion(), reduced,
      `production callback respects current preferences: OS=${os}, app=${app}`);
    motion.randomizer.spin();
    assert.equal(motionDialog.classList.contains('fr-reduce-motion'), reduced);
    await tick();
    if (reduced) {
      assert.ok(motion.randomizer.candidate, `OS=${os}, app=${app} resolves without the rolling delay`);
      assert.equal(motion.randomizer.phase, 'ready');
      assert.equal(motion.randomizer.timers.size, 0);
      for (const slot of ['type', 'look', 'accessories', 'action']) {
        assert.equal(motionDialog.querySelector(`[data-slot="${slot}"]`).classList.contains('rolling'), false);
      }
    } else {
      assert.equal(motion.randomizer.candidate, null, 'normal motion retains the cancellable rolling interval');
      motion.randomizer.cancelSpin();
      assert.equal(motion.randomizer.phase, 'idle');
      assert.equal(motion.randomizer.timers.size, 0, 'cancellation removes the pending normal-motion timer');
    }
    assert.equal(motion.randomizer.dialog, motionDialog, 'preference changes reuse the active dialog');
    assert.equal(motion.commits.length, 0, 'preference changes and draws never commit a candidate');
    assert.deepEqual(motion.read().project, originalMotionProject);
  }
  motion.randomizer.spin();
  motion.randomizer.close();
  await tick();
  assert.equal(motion.randomizer.candidate, null, 'closing before an immediate draw completes discards its candidate');
  assert.equal(motion.randomizer.timers.size, 0);
  assert.equal(motion.commits.length, 0);
  motion.randomizer.open();
  motion.randomizer.spin();
  motion.randomizer.dispose();
  await tick();
  assert.equal(motion.randomizer.candidate, null, 'dispose cancels an immediate reduced-motion draw');
  assert.equal(motion.randomizer.timers.size, 0);
  assert.equal(motion.commits.length, 0);

  systemReducedMotion=false;
  const changing = makeHarness({getReducedMotion:()=>false});
  changing.randomizer.open();changing.randomizer.spin();
  assert.equal(changing.randomizer.phase,'spinning');
  assert.equal(changing.randomizer.timers.size,1);
  changeSystemMotion(true);
  assert.equal(changing.randomizer.phase,'ready','enabling OS reduced motion during a draw ends its delay immediately');
  assert.equal(changing.randomizer.timers.size,0,'the old delay is cancelled');
  assert(changing.randomizer.candidate);
  assert.equal(changing.commits.length,0,'a preference change never applies the candidate');
  changeSystemMotion(false);
  changing.randomizer.spin();
  assert.equal(changing.randomizer.phase,'spinning','normal motion can be restored for the next draw');
  changing.randomizer.close();changeSystemMotion(true);await tick();
  assert.equal(changing.randomizer.candidate,null,'a closed dialog cannot receive a late preference candidate');
  const listenerCount=motionListeners.size;
  changing.randomizer.dispose();
  assert.equal(motionListeners.size,listenerCount-1,'dispose removes the media-query listener');

  const repeated = makeHarness();
  repeated.randomizer.open();
  const dialog = repeated.randomizer.dialog;
  const mainScroll = dialog.querySelector('.fr-main');
  const familyScroll = dialog.querySelector('.fr-families');
  mainScroll.scrollTop = 128;
  familyScroll.scrollLeft = 64;
  repeated.randomizer.close();
  repeated.randomizer.open();
  assert.equal(mainScroll.scrollTop, 0, 'reopening starts at the top of the content');
  assert.equal(familyScroll.scrollLeft, 0, 'reopening starts at the first family option');
  await tick(); // The first native close event may arrive after the second open.
  assert.equal(repeated.randomizer.dialog, dialog, 'reopening reuses one dialog');
  assert.equal(dialog.open, true, 'a stale close event cannot close or unfocus the reopened dialog');
  assert.deepEqual(repeated.changes, [true, false, true]);

  let rootShortcutCalls = 0;
  document.addEventListener('keydown', () => { rootShortcutCalls++; });
  const shortcut = {
    type: 'keydown', key: 'r', ctrlKey: false, metaKey: false, altKey: false,
    target: repeated.randomizer.dialog.querySelector('[data-fr="random"]'), defaultPrevented: false,
    preventDefault() { this.defaultPrevented = true; },
    stopPropagation() { this.cancelBubble = true; }
  };
  document.dispatchEvent(shortcut);
  assert.equal(shortcut.defaultPrevented, true, 'R is consumed while the random modal owns keyboard focus');
  assert.equal(shortcut.cancelBubble, true, 'R cannot reach the workspace random shortcut');
  const undoShortcut = {...shortcut, key: 'z', ctrlKey: true, cancelBubble: false, defaultPrevented: false};
  document.dispatchEvent(undoShortcut);
  assert.equal(undoShortcut.defaultPrevented, true, 'undo cannot change the project behind the candidate dialog');
  assert.equal(rootShortcutCalls, 0);
  assert.equal(document.body.style.overflow, 'scroll', 'the module never mutates root body overflow');
  repeated.randomizer.dispose();
  assert.equal(document.body.children.includes(dialog), false, 'dispose removes the modal node');
  assert.equal(repeated.randomizer.timers.size, 0);
  assert.equal(repeated.randomizer.open(), false, 'a disposed instance cannot be reopened');
  await tick();
  assert.equal(repeated.commits.length, 0, 'dispose prevents late work from committing');
  assert.deepEqual(repeated.changes, [true, false, true, false]);

  const destination = document.createElement('h1');
  document.body.append(destination);
  const applied = makeHarness({
    randomRecipeFn: source => ({...structuredClone(source), randomSeed: 'focus-transfer'}),
    onCommit: () => ({focus: destination})
  });
  applied.randomizer.open();
  applied.randomizer.spin();
  await tick();
  assert.ok(applied.randomizer.candidate, 'the changed focus-transfer candidate is ready');
  applied.randomizer.applyCandidate();
  assert.equal(document.activeElement, destination, 'an Apply callback can move focus to the newly shown destination');
  applied.randomizer.dispose();

  console.log('Fullscreen random lifecycle checks passed: Apply-only commits, cancellation/dispose clear timers, reference family and lock rules, safe local artwork, focus and shortcut cleanup.');
} finally {
  globalThis.document = oldGlobals.document;
  globalThis.HTMLElement = oldGlobals.HTMLElement;
  globalThis.matchMedia = oldGlobals.matchMedia;
}
