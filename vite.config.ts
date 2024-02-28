import path from 'node:path'
import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    AutoImport({
      imports: ['react'],
      dirs: ['./src/components', './src/hooks', './src/utils'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
