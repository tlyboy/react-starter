import path from 'node:path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['react'],
      dirs: [
        'src/utils',
      ],
    }),
    react(),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
