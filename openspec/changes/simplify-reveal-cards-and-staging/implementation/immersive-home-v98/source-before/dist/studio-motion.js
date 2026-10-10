const REASONS = new Set(['offscreen', 'pageHidden', 'detailOpen', 'user', 'reducedMotion']);

function animationResource(asset) {
  const type = String(asset?.type || asset?.resourceType || asset?.resourceKind || asset?.purpose || '').toLowerCase();
  return Boolean(asset?.animated === true || asset?.isAnimation === true || type.includes('animation'));
}

/**
 * Coordinates playback only for explicitly registered animation assets.
 * Static Artwork and posters are never animated by this controller.
 */
export function createMotionController({
  documentRef = globalThis.document,
  windowRef = globalThis.window,
  intersectionObserver = globalThis.IntersectionObserver,
  matchMedia = query => windowRef?.matchMedia?.(query)
} = {}) {
  const entries = new Map();
  const globalReasons = new Set();
  const mediaQuery = matchMedia?.('(prefers-reduced-motion: reduce)');
  if (documentRef?.hidden) globalReasons.add('pageHidden');
  if (mediaQuery?.matches) globalReasons.add('reducedMotion');

  const observer = typeof intersectionObserver === 'function'
    ? new intersectionObserver(changes => {
      for (const change of changes) {
        const entry = [...entries.values()].find(item => item.element === change.target);
        if (!entry) continue;
        entry.offscreen = !change.isIntersecting;
        reconcile(entry);
      }
    }, { threshold: 0.01 })
    : null;

  function reasonsFor(entry) {
    const reasons = new Set(globalReasons);
    reasons.delete('detailOpen');
    if (entry.offscreen) reasons.add('offscreen');
    if (entry.background && globalReasons.has('detailOpen')) reasons.add('detailOpen');
    if (entry.userPaused) reasons.add('user');
    return reasons;
  }

  function publish(entry, extra = {}) {
    const reasons = [...reasonsFor(entry)];
    const state = Object.freeze({
      id: entry.id,
      playing: entry.playing,
      requested: entry.requested,
      paused: !entry.playing,
      reasons: Object.freeze(reasons),
      error: entry.error,
      ...extra
    });
    try { entry.onState(state); } catch { /* UI observers cannot interrupt playback control. */ }
  }

  function canPlay(entry) {
    const reasons = reasonsFor(entry);
    return entry.requested && reasons.size === 0 && !entry.disposed;
  }

  function pauseEntry(entry) {
    entry.requestId += 1;
    if (entry.playing || entry.pending) {
      try { entry.pause(); } catch { /* A failed media pause is handled as a static fallback. */ }
    }
    entry.playing = false;
    if (!entry.pending) entry.pendingId = 0;
    try { entry.setPoster(); } catch { /* Static poster remains the safe presentation. */ }
    publish(entry);
  }

  async function startEntry(entry) {
    if (!canPlay(entry) || entry.pending || entry.playing) return;
    const requestId = ++entry.requestId;
    entry.pending = true;
    entry.pendingId = requestId;
    entry.error = null;
    publish(entry);
    try {
      await entry.play();
      if (entry.disposed || requestId !== entry.requestId || !canPlay(entry)) {
        try { entry.pause(); } catch { /* Ignore stale media completion. */ }
        try { entry.setPoster(); } catch { /* Keep the static fallback. */ }
        entry.playing = false;
      } else {
        entry.playing = true;
      }
    } catch (error) {
      if (requestId === entry.requestId && !entry.disposed) {
        entry.error = error instanceof Error ? error.message : String(error || 'Animation playback failed.');
        entry.requested = false;
      }
      entry.playing = false;
      try { entry.pause(); } catch { /* Keep the static fallback. */ }
      try { entry.setPoster(); } catch { /* Keep the static fallback. */ }
    } finally {
      if (entry.pendingId === requestId) {
        entry.pending = false;
        entry.pendingId = 0;
      }
      publish(entry);
      if (!entry.disposed && !entry.pending && !entry.playing && canPlay(entry)) reconcile(entry);
    }
  }

  function reconcile(entry) {
    if (!entry || entry.disposed) return;
    if (!canPlay(entry)) {
      if (entry.playing || entry.pending) pauseEntry(entry);
      else publish(entry);
      return;
    }
    void startEntry(entry);
  }

  function registerAnimation({ id, asset, element, play, pause, setPoster = () => {}, background = true, onState = () => {} } = {}) {
    if (!id || !element || !animationResource(asset)) return null;
    const key = String(id);
    const existing = entries.get(key);
    if (existing) existing.dispose();
    const entry = {
      id: key,
      asset,
      element,
      play: typeof play === 'function' ? play : () => element.play?.(),
      pause: typeof pause === 'function' ? pause : () => element.pause?.(),
      setPoster,
      background: background === true,
      onState,
      offscreen: Boolean(observer),
      requested: false,
      requestId: 0,
      pendingId: 0,
      userPaused: false,
      playing: false,
      pending: false,
      error: null,
      disposed: false,
      dispose: null
    };
    entry.dispose = () => {
      if (entry.disposed) return;
      entry.disposed = true;
      entry.requested = false;
      entry.playing = false;
      entry.requestId += 1;
      entry.pending = false;
      entry.pendingId = 0;
      try { entry.pause(); } catch { /* Disposal is best effort. */ }
      try { entry.setPoster(); } catch { /* Keep the static fallback. */ }
      observer?.unobserve?.(entry.element);
      if (entries.get(key) === entry) entries.delete(key);
      publish(entry);
    };
    entries.set(key, entry);
    try { observer?.observe?.(element); } catch { entry.offscreen = false; }
    try { entry.setPoster(); } catch { /* The UI still shows its static Artwork poster. */ }
    publish(entry);
    return Object.freeze({
      play: () => {
        if (globalReasons.has('reducedMotion')) {
          entry.requested = false;
          entry.userPaused = true;
          reconcile(entry);
          return false;
        }
        for (const other of entries.values()) {
          if (other !== entry && other.background === entry.background && other.requested) {
            other.requested = false;
            other.userPaused = false;
            pauseEntry(other);
          }
        }
        entry.requested = true;
        entry.userPaused = false;
        entry.error = null;
        reconcile(entry);
        return true;
      },
      pause: () => {
        entry.requested = false;
        entry.userPaused = true;
        pauseEntry(entry);
      },
      dispose: entry.dispose,
      getState: () => Object.freeze({ id: entry.id, playing: entry.playing, requested: entry.requested, reasons: Object.freeze([...reasonsFor(entry)]), error: entry.error })
    });
  }

  function setPauseReason(reason, active) {
    if (!REASONS.has(reason) || reason === 'offscreen' || reason === 'user') return false;
    if (active) globalReasons.add(reason);
    else globalReasons.delete(reason);
    if (reason === 'reducedMotion' && active) {
      for (const entry of entries.values()) {
        if (entry.requested) {
          entry.requested = false;
          entry.userPaused = true;
        }
      }
    }
    for (const entry of entries.values()) reconcile(entry);
    return true;
  }

  function onVisibilityChange() {
    setPauseReason('pageHidden', Boolean(documentRef?.hidden));
  }
  function onMotionChange(event) {
    setPauseReason('reducedMotion', Boolean(event?.matches));
  }

  documentRef?.addEventListener?.('visibilitychange', onVisibilityChange);
  mediaQuery?.addEventListener?.('change', onMotionChange);
  if (mediaQuery && !mediaQuery.addEventListener) mediaQuery.addListener?.(onMotionChange);

  function destroy() {
    documentRef?.removeEventListener?.('visibilitychange', onVisibilityChange);
    mediaQuery?.removeEventListener?.('change', onMotionChange);
    if (mediaQuery && !mediaQuery.removeEventListener) mediaQuery.removeListener?.(onMotionChange);
    observer?.disconnect?.();
    for (const entry of [...entries.values()]) entry.dispose();
  }

  return Object.freeze({
    registerAnimation,
    setPauseReason,
    destroy,
    getState: () => Object.freeze({ pauseReasons: Object.freeze([...globalReasons]), animations: Object.freeze([...entries.values()].map(entry => Object.freeze({ id: entry.id, playing: entry.playing, requested: entry.requested, reasons: Object.freeze([...reasonsFor(entry)]), error: entry.error }))) })
  });
}
