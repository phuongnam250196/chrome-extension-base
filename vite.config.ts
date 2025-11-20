import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// Custom plugin to copy manifest.json to the dist folder
const copyManifestPlugin = () => {
  return {
    name: 'copy-manifest',
    // This hook runs after the bundle has been written to disk
    writeBundle() {
      const sourcePath = resolve(__dirname, 'manifest.json')
      const outputPath = resolve(__dirname, 'dist', 'manifest.json')
      copyFileSync(sourcePath, outputPath)
      console.log(`Copied manifest.json from ${sourcePath} to ${outputPath}`)
    },
  }
}

export default defineConfig({
  plugins: [vue(), copyManifestPlugin()], // Add the custom plugin here
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/index.html'),
        background: resolve(__dirname, 'src/background/index.js'),
        content: resolve(__dirname, 'src/content/index.js'),
      },
      output: {
        // Thay đổi entryFileNames để đặt các tệp vào đúng thư mục
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'background' || chunkInfo.name === 'content') {
            return `${chunkInfo.name}/index.js`
          }
          return 'assets/[name].js'
        },
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
})
