import { defineConfig } from 'vite';

export default defineConfig({
  root: 'dist',
  appType: 'mpa',
  server: {
    host: '0.0.0.0',
    hmr: process.env.DOTS_QA === '1' ? false : undefined,
    allowedHosts: ['terminal.local'],
  },
});
