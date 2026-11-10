export default {
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: 'public/index.html',
    },
  },
  base: '/personal-site-2027/',
  server: {
    port: 3000,
    open: true,
  },
};
