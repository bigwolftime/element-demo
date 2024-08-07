import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "node:path";

export default defineConfig({
    base: '/',
    plugins: [vue()],
    resolve: {
      alias: {
          '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true
    },
    define: {
        'process.env': {}
    },
    server: {
        historyApiFallback: true
    }
})