import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/bg_sale',
  build: {
    inlineStylesheets: 'auto'
  }
});
