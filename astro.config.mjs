// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://jevg2003.github.io',
  base: '/orderlys1.0/'
});