import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rayenhamza.me',
  output: 'static',
  compressHTML: true,
  prefetch: {
    defaultStrategy: 'hover'
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lanyard.cnrad.dev'
      }
    ]
  },
  integrations: [tailwind(), sitemap()]
});
