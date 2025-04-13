import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,  // ← ¡Importante! Limpia el directorio en cada build
  },
  publicDir: 'public'  // Carpeta para assets estáticos
});