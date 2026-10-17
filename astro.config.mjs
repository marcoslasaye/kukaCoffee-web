import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kukacoffee.id',
  trailingSlash: 'never',
  redirects: {
    '/services/coffee-and-menu': '/coffee-and-menu',
    '/services/small-group-bookings': '/small-group-bookings',
  },
  integrations: [
    sitemap(),
  ],
});
