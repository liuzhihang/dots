import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {ASSETS} from '../dist/studio-artwork-catalog.js?v=99';
import {createMotionController} from '../dist/studio-motion.js?v=99';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = resolveEvidenceDirectory('.artifacts/motion');
const checks = [];
const check = (condition, label) => { assert.ok(condition, label); checks.push(label); };
const flush = async () => { await Promise.resolve(); await new Promise(resolve => setImmediate(resolve)); };

class FakeIntersectionObserver {
  constructor(callback) { this.callback = callback; this.targets = new Set(); this.disconnected = false; FakeIntersectionObserver.current = this; }
  observe(element) { this.targets.add(element); }
  unobserve(element) { this.targets.delete(element); }
  disconnect() { this.disconnected = true; this.targets.clear(); }
  emit(element, isIntersecting) { this.callback([{target: element, isIntersecting}], this); }
}

const listeners = new Map();
const documentRef = {
  hidden: false,
  addEventListener(type, callback) { listeners.set(type, callback); },
  removeEventListener(type, callback) { if (listeners.get(type) === callback) listeners.delete(type); }
};
const mediaListeners = new Set();
const media = {
  matches: false,
  addEventListener(_type, callback) { mediaListeners.add(callback); },
  removeEventListener(_type, callback) { mediaListeners.delete(callback); },
  set(matches) { this.matches = matches; for (const callback of mediaListeners) callback({matches}); }
};
const windowRef = {matchMedia: () => media};
const controller = createMotionController({documentRef, windowRef, intersectionObserver: FakeIntersectionObserver, matchMedia: () => media});
const record = (type = 'preview-animation') => ({type, animated: true, path: './assets/preview/example.gif'});
const calls = new Map();
function make(id, {background = true, play = async () => {}, fail = false} = {}) {
  const element = {id};
  const count = {played: 0, paused: 0, poster: 0, states: []};
  calls.set(id, count);
  const handle = controller.registerAnimation({
    id, asset: record(), element, background,
    play: async () => { count.played += 1; if (fail) throw new Error('fixture playback denied'); await play(); },
    pause: () => { count.paused += 1; },
    setPoster: () => { count.poster += 1; },
    onState: state => count.states.push(state)
  });
  assert.ok(handle, `${id} animation fixture registers`);
  FakeIntersectionObserver.current.emit(element, true);
  return {handle, element, count};
}

const background = make('background-a');
const detail = make('detail-a', {background: false});
assert.equal(controller.registerAnimation({id: 'static', asset: {type: 'static-image'}, element: {}}), null);
check(true, 'Only explicitly registered animated assets receive playback controllers; static images are rejected.');

background.handle.play();
detail.handle.play();
await flush();
assert.equal(background.handle.getState().playing, true);
assert.equal(detail.handle.getState().playing, true);
controller.setPauseReason('detailOpen', true);
await flush();
assert.equal(background.handle.getState().playing, false);
assert.equal(detail.handle.getState().playing, true, 'detailOpen pauses scene/gallery animation only');
assert(background.handle.getState().reasons.includes('detailOpen'));
assert.equal(detail.handle.getState().reasons.includes('detailOpen'), false);
controller.setPauseReason('detailOpen', false);
await flush();
assert.equal(background.handle.getState().playing, true);
check(true, 'Opening detail pauses background animation but allows an explicitly started detail preview.');

controller.setPauseReason('pageHidden', true);
FakeIntersectionObserver.current.emit(background.element, false);
controller.setPauseReason('pageHidden', false);
await flush();
assert.equal(background.handle.getState().playing, false, 'offscreen keeps background paused after page visibility resumes');
assert(background.handle.getState().reasons.includes('offscreen'));
FakeIntersectionObserver.current.emit(background.element, true);
await flush();
assert.equal(background.handle.getState().playing, true);
check(true, 'Offscreen and page-hidden pause reasons compose; removing one reason does not clear the other.');

background.handle.pause();
controller.setPauseReason('detailOpen', true);
controller.setPauseReason('detailOpen', false);
await flush();
assert.equal(background.handle.getState().playing, false, 'detail close does not override an explicit user pause');
assert(background.handle.getState().reasons.includes('user'));
controller.setPauseReason('reducedMotion', true);
assert.equal(background.handle.play(), false, 'reduced motion prevents a new play request');
controller.setPauseReason('reducedMotion', false);
await flush();
assert.equal(background.handle.getState().playing, false, 'disabling reduced motion does not auto-start animation');
assert.equal(background.handle.play(), true);
await flush();
assert.equal(background.handle.getState().playing, true);
check(true, 'User pause and reduced-motion require an explicit restart and remain independent of detail-open state.');

const secondBackground = make('background-b');
secondBackground.handle.play();
await flush();
assert.equal(secondBackground.handle.getState().playing, true);
assert.equal(background.handle.getState().playing, false, 'only one animation may be requested in a given scope');
const secondDetail = make('detail-b', {background: false});
secondDetail.handle.play();
await flush();
assert.equal(secondDetail.handle.getState().playing, true, 'background and detail use independent playback scopes');
check(true, 'At most one scene/gallery animation runs at a time while a detail animation can play separately.');

const failing = make('failing-detail', {background: false, fail: true});
failing.handle.play();
await flush();
assert.equal(failing.handle.getState().playing, false);
assert.match(failing.handle.getState().error, /fixture playback denied/);
assert(failing.count.poster >= 2, 'failed playback returns to the static poster');
check(true, 'Playback rejection returns to its poster and reports an error.');

let resolveDelayed;
let delayedPlayCount = 0;
const delayed = make('delayed-detail', {background: false, play: () => {
  delayedPlayCount += 1;
  return delayedPlayCount === 1 ? new Promise(resolve => { resolveDelayed = resolve; }) : Promise.resolve();
}});
delayed.handle.play();
await flush();
controller.setPauseReason('pageHidden', true);
controller.setPauseReason('pageHidden', false);
await flush();
assert.equal(delayed.count.played, 1, 'a second play waits for the stale pending media call');
resolveDelayed();
await flush();
await flush();
assert.equal(delayed.count.played, 2, 'a previously pending play is safely restarted after pause reasons clear');
assert.equal(delayed.handle.getState().playing, true);
check(true, 'A pending play completion cannot overwrite pause state; it restarts only after all pause reasons clear.');

const unsupportedAssets = ASSETS.filter(asset => asset.animated === true || asset.isAnimation === true || /animation/i.test(String(asset.type || asset.resourceType || asset.resourceKind || asset.purpose || '')));
assert.equal(unsupportedAssets.length, 0, 'The current production catalog has no real animation resources.');
controller.destroy();
assert.equal(FakeIntersectionObserver.current.disconnected, true);
assert.equal(listeners.size, 0);
check(true, 'The production catalog remains static and controller teardown removes browser listeners.');

await fs.mkdir(output, {recursive: true});
await fs.writeFile(path.join(output, 'motion-report.json'), JSON.stringify({revision: 99, productionAnimationCount: unsupportedAssets.length, checks, pauseReasons: ['offscreen', 'pageHidden', 'detailOpen', 'reducedMotion', 'user']}, null, 2) + '\n');
console.log(`Motion controller checks passed: ${checks.length}; production animations: ${unsupportedAssets.length}.`);
