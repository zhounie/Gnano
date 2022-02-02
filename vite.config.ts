import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import themePreprocessorPlugin from '@zougt/vite-plugin-theme-preprocessor'

const pathResolve = (dir: string) => {
  return resolve(__dirname, '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    themePreprocessorPlugin({
      scss: {
        multipleScopeVars: [
          {
            scopeName: 'theme-default',
            path: pathResolve('src/layout/theme/default-vars.scss')
          }, {
            scopeName: 'theme-dark',
            path: pathResolve('src/layout/theme/dark-vars.scss')
          }, {
            scopeName: 'theme-light',
            path: pathResolve('src/layout/theme/light-vars.scss')
          }
        ],
        extract: true,
        themeLinkTagId: 'head'
      }
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  optimizeDeps: {
    include: [
      'element-plus/es/locale/lang/en',
      'element-plus/es/locale/lang/zh-cn'
    ]
  }
})
