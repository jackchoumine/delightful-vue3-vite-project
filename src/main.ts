/*
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-10 09:07:38
 * @Description :
 */
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import router from './router'
// @ts-ignore
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import { vAuth, vClickOutside } from './plugins'
// 导入 haunted 创建的 web component
import './components/HauntedComponent/haunt-counter'

// import { defineCustomElements } from 'jack-ui/loader'
// defineCustomElements()

// import './assets/styles/style.css'

import 'jack-web-ui/dist/jack-web-ui/jack-web-ui.css'
// @ts-ignore
// import { MyRating } from 'jack-web-ui/dist/components/index'
import {
  ELineChart,
  HelloStencil,
  // defineCustomElementELineChart,
} from 'echarts-web-components/dist/components'
// customElements.define('count-to', CountTo as unknown as CustomElementConstructor)
import { CountTo } from 'jack-web-ui/dist/components'
// web component
// app.config.compilerOptions.isCustomElement = tag =>
//   /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(tag)
import { ElLoading } from 'element-plus'
customElements.define('count-to', CountTo as unknown as CustomElementConstructor)
customElements.define('line-chart', ELineChart as unknown as CustomElementConstructor)
// customElements.define('line-chart', ELineChart as unknown as CustomElementConstructor)
customElements.define(
  'hello-stencil',
  HelloStencil as unknown as CustomElementConstructor,
)

const app = createApp(App)

app.config.performance = true
app.use(vAuth).use(vClickOutside) // .use(Antd)
app.use(ElLoading).use(router)
// import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'
// import('element-plus').then(({ default: ElementPlus }) => {
// app.use(ElementPlus)
// })

app.mount('#app')
