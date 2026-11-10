export default {
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: 'public/index.html',
    },
  },
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
};
