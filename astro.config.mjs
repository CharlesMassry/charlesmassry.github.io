// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://charliemassry.com',
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
