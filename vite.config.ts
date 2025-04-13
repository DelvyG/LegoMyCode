import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(new URL('.', import.meta.url).pathname, 'index.html'),
  },
},
});