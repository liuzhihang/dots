// Simulated DOM lifecycle only; not a replacement for native-dialog browser QA.
import assert from 'node:assert/strict';
import { createOverlay } from '../dist/studio-overlay.js?v=110';
class Element {
  constructor(name) { this.localName = name; this.children = []; this.events = {}; this.attrs = {}; this.style = {}; this.inert = false; this.hidden = false; this.disabled = false; this.isConnected = true; }
  get parentNode() { return this.parentElement; }
  get nextSibling() { const siblings = this.parentElement?.children || []; return siblings[siblings.indexOf(this) + 1] || null; }
  append(child) { this.insertBefore(child, null); }
  insertBefore(child, next) { if (child.parentElement) child.parentElement.children = child.parentElement.children.filter(row => row !== child); const index = next ? this.children.indexOf(next) : this.children.length; this.children.splice(index, 0, child); child.parentElement = this; }
  addEventListener(name, handler) { (this.events[name] ||= []).push(handler); }
  removeEventListener(name, handler) { this.events[name] = (this.events[name] || []).filter(fn => fn !== handler); }
  dispatch(name, event = {}) { for (const fn of this.events[name] || []) fn(event); }
  getAttribute(name) { return this.attrs[name] || null; }
  getClientRects() { return [{}]; }
  focus() { document.activeElement = this; }
  querySelectorAll() { return this.children.flatMap(child => [...(['button', 'select'].includes(child.localName) ? [child] : []), ...child.querySelectorAll()]); }
  showModal() { if (this.failOpen) throw new Error('injected showModal failure'); this.open = true; }
  close() { this.open = false; this.dispatch('close'); }
}
const document = { body: { style: {}, dataset: { screen: 'gallery' } }, documentElement: { clientWidth: 1000 }, getElementById() {}, querySelector() {} };
globalThis.document = document;
globalThis.window = { innerWidth: 1000, scrollY: 0, scrollTo() {} };
globalThis.HTMLElement = Element;
globalThis.requestAnimationFrame = callback => callback();
globalThis.getComputedStyle = () => ({ display: 'block', visibility: 'visible' });
const background = new Element('main'), header = new Element('header'), select = new Element('select'), sibling = new Element('span');
background.append(header);header.append(select);header.append(sibling);
const dialog = new Element('dialog'), title = new Element('h2'), body = new Element('div'), back = new Element('button'), mount = new Element('span'), close = new Element('button');
dialog.append(back);dialog.append(title);dialog.append(mount);dialog.append(close);dialog.append(body);
let allowClose = true;
const overlay = createOverlay({ dialog, title, body, closeButton: close, backButton: back, background, languageControl: select, languageMount: mount, onClose() { if (!allowClose) return false; overlay.close(); return true; } });
for (const reason of ['button', 'escape', 'back', 'route', 'native']) {
  overlay.open({ trigger: sibling });
  assert.equal(select.parentElement, mount);
  assert.equal(background.inert, true);
  overlay.open();assert.equal(mount.children.filter(node => node === select).length, 1, 'Repeated open never duplicates the global selector.');
  select.focus();assert.equal(document.activeElement, select);
  // The focus trap includes the moved selector, preserving wrap-around.
  back.focus();dialog.dispatch('keydown', { key: 'Tab', shiftKey: true, preventDefault() {} });assert.equal(document.activeElement, close);
  let ancestor = select;
  while (ancestor) { assert.equal(ancestor.inert, false); ancestor = ancestor.parentElement; }
  allowClose = false;dialog.dispatch('cancel', { preventDefault() {} });assert.equal(select.parentElement, mount, 'Rejected dirty exit leaves the language control usable in the modal.');assert.equal(overlay.isOpen(), true);
  allowClose = true;
  if (reason === 'button') close.dispatch('click');
  else if (reason === 'escape') dialog.dispatch('cancel', { preventDefault() {} });
  else if (reason === 'back') back.dispatch('click');
  else if (reason === 'native') { dialog.open = false; dialog.dispatch('close'); }
  else overlay.close({ restoreFocus: false });
  await Promise.resolve();
  assert.equal(select.parentElement, header);assert.equal(select.nextSibling, sibling);
  assert.equal(background.inert, false);assert.equal(overlay.isOpen(), false);
}
dialog.failOpen = true;
assert.throws(() => overlay.open(), /injected/);
assert.equal(select.parentElement, header);assert.equal(background.inert, false);
dialog.failOpen = false;overlay.open();overlay.destroy();assert.equal(select.parentElement, header);assert.equal(background.inert, false);
console.log('Simulated overlay language lifecycle: same-node mount, repeated open, focus membership, rejected exit, close/Escape/Back/route/native-close, showModal failure and destroy passed.');
