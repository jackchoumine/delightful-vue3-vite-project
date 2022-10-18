/*
 * @Date        : 2022-08-08 15:54:09
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-18 13:01:27
 * @Description : vite 配置
 */
// @ts-nocheck
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

const isCustomElement = tag => /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(tag)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: isCustomElement,
        },
      },
    }),
    AutoImport({
      imports: ['vue'], //, 'vue-router']
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@c': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
})
