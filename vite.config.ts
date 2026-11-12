import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/cnb-api': {
        target: 'https://www.cnb.cz',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cnb-api/, ''),
      },
    },
  },
})
