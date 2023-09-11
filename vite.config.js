/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    eslint(),
    vitePluginFaviconsInject('./src/components/kp5.svg'),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
