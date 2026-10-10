import { defineConfig } from 'vite';

export default defineConfig({
  root: 'dist',
  appType: 'mpa',
  plugins: [{
    name: 'local-reveal-art-review',
    apply: 'serve',
    transform(code, id) {
      if (process.env.DOTS_REVIEW === '1' && id.split('?')[0].endsWith('/studio-runtime-config.js')) {
        return code.replace("REVEAL_RESOURCE_POLICY = 'published'", "REVEAL_RESOURCE_POLICY = 'candidate-preview'");
      }
    },
  }],
  server: {
    host: '0.0.0.0',
    // Production cache versions must not make local UI edits look stale.
    headers: {'Cache-Control': 'no-store'},
    hmr: process.env.DOTS_QA === '1' ? false : undefined,
    allowedHosts: ['terminal.local'],
  },
});
