import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Punto de entrada HTML (ubicado en la raíz)
  root: '.',  
  build: {
    // Donde se generarán los archivos de build
    outDir: 'dist',
    rollupOptions: {
      // Punto de entrada JS (ubicado en src/)
      input: path.resolve(__dirname, './src/main.js'), 
    },
  },
});