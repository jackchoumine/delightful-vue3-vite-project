/*
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : JackChou
 * @LastEditTime: 2022-10-27 00:21:02 +0800
 * @Description :
 */
import { createApp } from 'vue'
import App from './App.vue'
import { vAuth, vClickOutside } from './plugins'

// import { defineCustomElements } from 'jack-ui/loader'
// defineCustomElements()

// import './assets/styles/style.css'

import 'jack-web-ui/dist/jack-web-ui/jack-web-ui.css'
// @ts-ignore
import { CountTo, MyRating } from 'jack-web-ui/dist/components'
customElements.define('count-to', CountTo as unknown as CustomElementConstructor)
customElements.define('my-rating', MyRating as unknown as CustomElementConstructor)

const app = createApp(App)

app.use(vAuth).use(vClickOutside)
// web component
// app.config.compilerOptions.isCustomElement = tag =>
//   /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(tag)

app.mount('#app')
