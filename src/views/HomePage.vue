<!--
  * @Date        : 2022-08-08 14:23:25
  * @Author      : ZhouQijun
  * @LastEditors : ZhouQiJun
  * @LastEditTime: 2022-11-11 09:26:41
  * @Description : 
-->
<script setup lang="tsx">
import { HelloWorld, WatchDemo, SlottedDemo } from '../components'
import { USER_KEY, User } from '../utils/injectionKey'
// import { testNameExport } from './components/FileViewer/FileViewer.vue'
// console.log(testNameExport)
const SubComponent = defineComponent({
  render() {
    return <div style={{ backgroundColor: 'red' }}>单个文中中定义多个组件</div>
  },
})

const loading = ref(true)
setTimeout(() => {
  loading.value = !loading.value
}, 5000)

provide(USER_KEY, { id: 1234, name: 'JackChou' })
</script>

<template>
  <div>
    <SlottedDemo />
    <hr />
    <WatchDemo />
    <hr />
    <HelloWorld />
    <!-- <button @click="toggle">toggle</button> -->
    <!-- <count-to v-if="show" :end-value="endValue" :precision="3" @on-end="updated">
      <span slot="left">工资：</span>
      <span slot="right">$</span>
    </count-to> -->
    <!-- <my-rating :max-value="10" :person="person" :personArray="[person]"></my-rating>
    <button type="button" @click="changePerson">修改person</button> -->
    <SubComponent />
  </div>
</template>

<style scoped></style>
