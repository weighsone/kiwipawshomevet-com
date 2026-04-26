// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://weighsone.github.io',
  base: '/kiwipawshomevet-com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});