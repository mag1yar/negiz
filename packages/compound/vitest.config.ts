import { defineConfig } from 'vitest/config';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  plugins: [pluginReact()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
