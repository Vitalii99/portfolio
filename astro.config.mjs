import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4321
  },
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});