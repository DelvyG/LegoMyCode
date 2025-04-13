import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
 base: '/', // Al no tener subdominio debes agregarlo
 build: {
  outDir: 'dist',
  rollupOptions: {
   input: {
    main: resolve(__dirname, 'index.html')
   }
  },
 },
 publicDir: 'public',
})