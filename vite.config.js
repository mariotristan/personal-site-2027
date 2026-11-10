import { defineConfig } from 'vite';

// GitHub Pages serves the repo under /personal-site-2027/ and publishes docs/.
export default defineConfig({
  base: '/personal-site-2027/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
