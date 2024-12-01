const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'ui',
      fileName: (format) => `xso-ui.${format}.js`
    }
  }
});