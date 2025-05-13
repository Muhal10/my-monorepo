import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      styles: '/packages/styles',  // Adjust according to your monorepo structure
      'feature-x': path.resolve(__dirname, '../../packages/feature-x/src'),
      'feature-y': path.resolve(__dirname, '../../packages/feature-y/src'),
      'ui-components': path.resolve(__dirname, '../../packages/ui-components/src'),
      'utils': path.resolve(__dirname, '../../packages/utils/src'),

    },
  },
});


