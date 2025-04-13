import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/lmc-app-shell.ts', // Asegúrate de que esto apunte a lmc-app-shell.ts
    },
  },
  publicDir: 'public',
});