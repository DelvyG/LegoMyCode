export default defineConfig({
  // Otras configuraciones...
  build: {
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  // Si estás usando un subpath para tu despliegue:
  base: '/',
})

function defineConfig(arg0: {
  // Otras configuraciones...
  build: { assetsDir: string; emptyOutDir: boolean; rollupOptions: { output: { manualChunks: undefined; }; }; };
  // Si estás usando un subpath para tu despliegue:
  base: string;
}) {
  throw new Error("Function not implemented.");
}


