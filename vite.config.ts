import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sri } from 'vite-plugin-sri3'
import { viteSecurity } from './plugins/vite-security'

export default defineConfig({
  plugins: [
    react(),
    sri(),
    viteSecurity(),
  ],

  server: {
    fs: {
      strict: true,
      allow: [
        '.',
        'src',
        'public',
        'node_modules/.vite/deps',
      ],
      deny: [
        '.env',
        '.git',
        'node_modules/.vite/deps/**/*.map',
      ],
    },
  },
})
