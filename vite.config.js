import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      open: true,
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      outDir: path.resolve(__dirname, 'dist'),
      minify: true,
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
    plugins: [react(), reactRefresh()],
  };
});
