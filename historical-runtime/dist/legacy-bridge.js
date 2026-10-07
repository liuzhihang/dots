'use strict';
(() => {
  // The legacy editor can inspect a current project wrapper, but this bridge
  // never migrates cached role JSON or assigns data to the old editor state.
  const parseProject = async value => {
    const {parseProject: parseCurrentProject} = await import('./studio-creation.js?v=86');
    return parseCurrentProject(value);
  };
  Object.defineProperty(window, 'DotLegacyBridge', {
    value: Object.freeze({parseProject}),
    configurable: false,
    enumerable: false,
    writable: false
  });

  let hasUnsupportedImport = false;
  try { hasUnsupportedImport = sessionStorage.getItem('dot-legacy-import') !== null; } catch {}
  if (hasUnsupportedImport && typeof window.toast === 'function') {
    window.toast('旧版角色 JSON 不再支持自动导入；原存储记录仍保留。');
  }
})();
