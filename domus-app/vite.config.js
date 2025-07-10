import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["cosmus-blindou.me"],
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
})