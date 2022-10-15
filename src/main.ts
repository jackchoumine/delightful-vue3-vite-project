/*
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : JackChou
 * @LastEditTime: 2022-10-15 20:39:44 +0800
 * @Description :
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { vAuth, vClickOutside } from './plugins'

createApp(App).use(vAuth).use(vClickOutside).mount('#app')
