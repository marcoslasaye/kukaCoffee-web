import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kukacoffee.id',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
  ],
});
