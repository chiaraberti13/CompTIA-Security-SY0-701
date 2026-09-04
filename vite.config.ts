import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // The Italian dataset alone is ~1.8 MB of source. It is split into its own
      // chunk below, so the generic 500 kB warning would fire on every build for
      // something already handled.
      chunkSizeWarningLimit: 1800,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            // The datasets change far less often than the app code. Keeping them
            // in dedicated chunks means a UI change does not invalidate megabytes
            // of study material in the visitor's browser cache.
            if (id.includes('/src/data.ts')) return 'dataset-it';
            if (id.includes('/src/data.en.ts')) return 'dataset-en';
            if (id.includes('node_modules')) return 'vendor';
            return undefined;
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
