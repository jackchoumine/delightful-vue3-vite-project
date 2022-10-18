/*
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-18 13:01:58
 * @Description :
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { vAuth, vClickOutside } from './plugins'

// import { defineCustomElements } from 'jack-ui/loader'
import { CountTo } from 'jack-ui'
// defineCustomElements()
customElements.define('count-to', CountTo as unknown as CustomElementConstructor)

const app = createApp(App)

app.use(vAuth).use(vClickOutside)
// web component
// app.config.compilerOptions.isCustomElement = tag =>
//   /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(tag)

app.mount('#app')
