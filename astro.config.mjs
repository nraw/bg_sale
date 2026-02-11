import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nraw.github.io',
  base: '/bg_sale',
  build: {
    inlineStylesheets: 'auto'
  }
});
