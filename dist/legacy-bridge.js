'use strict';
// Old configurations stay in their original editor, without lossy migration.
try {
  const raw = sessionStorage.getItem('dot-legacy-import');
  if (raw) {
    const clean = validateConfig(JSON.parse(raw));
    state = clean;
    render();
    sessionStorage.removeItem('dot-legacy-import');
    toast('旧版配置已完整载入精细编辑器。');
  }
} catch (error) {
  sessionStorage.removeItem('dot-legacy-import');
  toast('旧版配置未能载入：' + error.message);
}
