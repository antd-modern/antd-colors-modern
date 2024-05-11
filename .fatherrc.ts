import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  targets: {
    chrome: 86,
  },
  esm: { output: 'es' },
  cjs: { output: 'lib' },
});
