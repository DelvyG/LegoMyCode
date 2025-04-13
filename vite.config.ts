import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    // rollupOptions: {  // <-- Elimina esta sección
    //   input: 'src/my-element.ts',
    // },
  },
});