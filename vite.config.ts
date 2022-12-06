/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, '/src') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  plugins: [react(), tsconfigPaths()],
})
