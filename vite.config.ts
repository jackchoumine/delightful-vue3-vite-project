/*
 * @Date        : 2022-08-08 15:54:09
 * @Author      : ZhouQijun
 * @LastEditors : JackChou
 * @LastEditTime: 2022-10-16 05:14:52 +0800
 * @Description : vite 配置
 */
// @ts-nocheck
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
