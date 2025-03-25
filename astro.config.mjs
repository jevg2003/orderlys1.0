// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://jevg2003.github.io/orderlys1.0/', // 🔹 Cambia esto
  base: '/orderlys1.0/', // 🔹 Cambia esto también
  output: 'static' // 🚀 Astro necesita esto para GitHub Pages
});