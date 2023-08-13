import { defineConfig, sharpImageService } from 'astro/config';
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind()],
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  adapter: node({
    mode: "standalone"
  })
});