/*
 * @Description : 导出组件
 * @Date        : 2022-10-15 19:51:59 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-11-07 11:51:03
 * @LastEditors : ZhouQiJun
 */
export { default as HelloWorld } from './HelloWorld.vue'
export { FileViewer } from './FileViewer'
export { default as ChartDemos } from './WebComponents/ChartDemos.vue'
// export { Button, UseButton } from './Button'
// NOTE 导出每一个命名导出
export * from './Button'
export { default as WatchDemo } from './WatchDemo/WatchDemo.vue'
export { default as TestStencilWC } from './StencilComponent/TestStencilWC.vue'
