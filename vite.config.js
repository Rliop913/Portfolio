import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

export default defineConfig({
  plugins: [{
    name: 'include-cv-pdf',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'Jiho_Kim_CV.pdf',
        source: readFileSync(new URL('./Jiho_Kim_CV.pdf', import.meta.url)),
      });
    },
  }],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['terminal.local'],
  },
});
