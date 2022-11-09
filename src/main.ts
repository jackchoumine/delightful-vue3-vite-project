/*
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-02 15:55:29
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
// import { MyRating } from 'jack-web-ui/dist/components/index'
import {
  ELineChart,
  HelloStencil
  // defineCustomElementELineChart,
} from 'echarts-web-components/dist/components'
// customElements.define('count-to', CountTo as unknown as CustomElementConstructor)
import { CountTo } from 'jack-web-ui/dist/components'
customElements.define('count-to', CountTo as unknown as CustomElementConstructor)
customElements.define('line-chart', ELineChart as unknown as CustomElementConstructor)
// customElements.define('line-chart', ELineChart as unknown as CustomElementConstructor)
customElements.define('hello-stencil',  HelloStencil as unknown as CustomElementConstructor)

const app = createApp(App)

app.use(vAuth).use(vClickOutside)
// web component
// app.config.compilerOptions.isCustomElement = tag =>
//   /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(tag)
import { ElLoading } from 'element-plus'
app.use(ElLoading)
// import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'
// import('element-plus').then(({ default: ElementPlus }) => {
// app.use(ElementPlus)
// })

app.mount('#app')
