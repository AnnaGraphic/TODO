import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // set base to repo for deploy on gh-pages
  base: '/TODO/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})
