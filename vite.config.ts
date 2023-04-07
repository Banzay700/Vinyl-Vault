import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: '/src/assets/',
      components: '/src/components/',
      constants: '/src/constants/',
      modules: '/src/modules/',
      pages: '/src/pages/',
      store: '/src/store/',
      tools: '/src/tools/',
      types: '/src/types/',
      UI: '/src/UI/',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
