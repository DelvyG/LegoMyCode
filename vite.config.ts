// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './src/main.js', // Punto de entrada principal
      },
      output: {
        format: 'esm', // Usa ES Modules
        entryFileNames: 'assets/main.[hash].js',
      },
    },
  },
});