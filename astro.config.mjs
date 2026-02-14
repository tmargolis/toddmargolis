// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://toddmargolis.net', // Your custom domain
  output: 'static',
  base: '/',                       // Leave as '/' since you use a custom domain
  outDir: 'dist',
  trailingSlash: 'always',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {},
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});