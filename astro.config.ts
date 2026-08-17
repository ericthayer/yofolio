import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  integrations: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
      experimentalDisableStreaming: true,
    }),
    mdx(),
  ],
  vite: {
    plugins: [svgr()],
  },
});
