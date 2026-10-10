const focusableSelector = 'summary,a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

function visibleFocusable(dialog) {
  return [...dialog.querySelectorAll(focusableSelector)].filter(element =>
    element.getClientRects().length > 0
    && ![element, ...ancestors(element, dialog)].some(ancestor => {
      if (ancestor.hidden || ancestor.inert || ancestor.getAttribute('aria-hidden') === 'true') return true;
      if (ancestor.localName === 'details' && !ancestor.open && element !== ancestor.querySelector('summary')) return true;
      const style = getComputedStyle(ancestor);
      return style.display === 'none' || style.visibility === 'hidden' || style.visibility === 'collapse';
    })
  );
}

function ancestors(element, stopAt) {
  const items = [];
  for (let current = element.parentElement; current && current !== stopAt; current = current.parentElement) items.push(current);
  return items;
}

/** Own the single native details dialog, its focus loop and page inert state. */
export function createOverlay({
  dialog = document.getElementById('studioOverlay'),
  title = document.getElementById('overlayTitle'),
  body = document.getElementById('overlayBody'),
  closeButton = document.getElementById('overlayClose'),
  backButton = document.getElementById('overlayBack'),
  background = document.getElementById('pageShell'),
  onClose = () => {}
} = {}) {
  if (!dialog || !title || !body || !closeButton) throw new TypeError('Overlay requires the existing studioOverlay dialog DOM.');

  let returnFocus = null;
  let returnScrollY = 0;
  let originalOverflow = '';
  let originalPaddingRight = '';
  let originalInert = false;
  let openState = false;
  let closeRequested = false;
  let internalClose = false;
  let ignoredCloseEvents = 0;
  let destroyed = false;

  const setPageLocked = locked => {
    if (locked) {
      originalOverflow = document.body.style.overflow;
      originalPaddingRight = document.body.style.paddingRight;
      originalInert = Boolean(background?.inert);
      const gutter = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
      document.body.style.overflow = 'hidden';
      if (gutter) document.body.style.paddingRight = `${gutter}px`;
      if (background) background.inert = true;
      return;
    }
    if (background) background.inert = originalInert;
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = originalPaddingRight;
  };

  const requestClose = reason => {
    if (!openState || closeRequested || destroyed) return;
    closeRequested = true;
    try {
      // Accepted history navigation is asynchronous. Keep the latch until the
      // shell closes the panel; only a rejected exit permits another attempt.
      if (onClose({ reason }) === false) closeRequested = false;
    } catch { closeRequested = false; }
  };

  function onCancel(event) {
    event.preventDefault();
    requestClose('escape');
  }

  function onDialogClick(event) {
    if (event.target === dialog) requestClose('backdrop');
  }

  function onCloseClick() {
    requestClose('button');
  }

  function onKeyDown(event) {
    if (!openState || event.key !== 'Tab') return;
    const items = visibleFocusable(dialog);
    if (!items.length) {
      event.preventDefault();
      title.focus({ preventScroll: true });
      return;
    }
    const index = items.indexOf(document.activeElement);
    const first = items[0];
    const last = items.at(-1);
    if (event.shiftKey && index <= 0) {
      event.preventDefault();
      last.focus({ preventScroll: true });
    } else if (!event.shiftKey && (index === items.length - 1 || index < 0)) {
      event.preventDefault();
      first.focus({ preventScroll: true });
    }
  }

  function open({ title: nextTitle, trigger = document.activeElement, scrollY = window.scrollY } = {}) {
    if (destroyed) return false;
    if (nextTitle !== undefined) setTitle(nextTitle);
    if (openState) {
      return true;
    }
    returnFocus = trigger instanceof HTMLElement ? trigger : null;
    returnScrollY = Number.isFinite(Number(scrollY)) ? Number(scrollY) : window.scrollY;
    closeRequested = false;
    body.scrollTop = 0;
    body.scrollLeft = 0;
    setPageLocked(true);
    try {
      if (!dialog.open) dialog.showModal();
      openState = true;
    } catch (error) {
      setPageLocked(false);
      throw error;
    }
    requestAnimationFrame(() => {
      if (openState && !destroyed) title.focus({ preventScroll: true });
    });
    return true;
  }

  function setTitle(value) {
    title.textContent = String(value ?? '');
  }

  function close({ restoreFocus = true } = {}) {
    if (!openState && !dialog.open) return false;
    internalClose = true;
    closeRequested = true;
    openState = false;
    if (dialog.open) {
      ignoredCloseEvents += 1;
      dialog.close();
    }
    setPageLocked(false);
    const focusTarget = returnFocus;
    returnFocus = null;
    if (restoreFocus) {
      window.scrollTo(0, returnScrollY);
      requestAnimationFrame(() => {
        if (focusTarget?.isConnected && !focusTarget.disabled) focusTarget.focus({ preventScroll: true });
        else {
          const pageTitle = document.getElementById(`${document.body.dataset.screen || 'home'}Title`)
            || document.querySelector('main h1[tabindex], main h1');
          pageTitle?.focus?.({ preventScroll: true });
        }
      });
    }
    queueMicrotask(() => { internalClose = false; });
    return true;
  }

  function onNativeClose() {
    if (ignoredCloseEvents > 0) {
      ignoredCloseEvents -= 1;
      return;
    }
    if (!openState) return;
    openState = false;
    setPageLocked(false);
    if (!internalClose && !closeRequested) {
      closeRequested = true;
      try { onClose({ reason: 'native-close' }); } catch { /* The app shell owns route and source restoration. */ }
    }
  }

  function destroy() {
    if (destroyed) return;
    close({ restoreFocus: false });
    destroyed = true;
    dialog.removeEventListener('cancel', onCancel);
    dialog.removeEventListener('click', onDialogClick);
    dialog.removeEventListener('keydown', onKeyDown);
    dialog.removeEventListener('close', onNativeClose);
    closeButton.removeEventListener('click', onCloseClick);
    if (backButton) backButton.removeEventListener('click', onCloseClick);
  }

  dialog.addEventListener('cancel', onCancel);
  dialog.addEventListener('click', onDialogClick);
  dialog.addEventListener('keydown', onKeyDown);
  dialog.addEventListener('close', onNativeClose);
  closeButton.addEventListener('click', onCloseClick);
  if (backButton) { backButton.hidden = false; backButton.addEventListener('click', onCloseClick); }

  return Object.freeze({
    open,
    close,
    setTitle,
    destroy,
    isOpen: () => openState,
    requestClose
  });
}
