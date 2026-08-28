import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://miwtoo.github.io',
  base: '/optcg-deck-learn',
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
