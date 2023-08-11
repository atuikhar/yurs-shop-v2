import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

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
    define: {
      'process.env': {},
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      outDir: path.resolve(__dirname, 'dist'),
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
    base: '/yurs-shop-v2.git/',
    plugins: [react()],
  };
});
