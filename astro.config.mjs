import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
// import vercel from '@astrojs/vercel/serverless';

import image from '@astrojs/image';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
