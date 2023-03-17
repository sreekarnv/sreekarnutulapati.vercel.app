import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://sreekarnutulapati.vercel.app',
  integrations: [
    solidJs(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap({
      changefreq: 'weekly',
      customPages: [
        'https://sreekarnutulapati.vercel.app',
        'https://sreekarnutulapati.vercel.app/about',
        'https://sreekarnutulapati.vercel.app/work',
        'https://sreekarnutulapati.vercel.app/contact',
      ],
    }),
  ],
  output: 'server',
  // adapter: node({
  //   mode: "standalone"
  // })
  adapter: vercel(),
});
