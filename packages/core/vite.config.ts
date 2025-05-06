import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es'],
      fileName: '[name].js',
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'assets/[name][extname]',
        globals: {},
        preserveModules: false,
      },
    },
    target: 'es2020',
    sourcemap: false,
    emptyOutDir: true,
  },
});
