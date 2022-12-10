<!--
  * @Date        : 2022-08-08 14:23:25
  * @Author      : ZhouQijun
  * @LastEditors : ZhouQiJun
  * @LastEditTime: 2022-11-11 09:26:41
  * @Description : 
-->
<script setup lang="tsx">
import {
  FileViewer,
  HelloWorld,
  Button,
  UseButton,
  WatchDemo,
  TestStencilWC,
  TestHaunted,
  PopperButton,
  PopperButtonHook,
  HookDemo,
  SlottedDemo,
  MyInput,
  // AntDesignDemos,
} from '../components'
import AntDesignDemos from '../components/AntDesignVue/AntDemos.vue'
import { USER_KEY, User } from '../utils/injectionKey'
// import { testNameExport } from './components/FileViewer/FileViewer.vue'
// console.log(testNameExport)
const SubComponent = defineComponent({
  render() {
    return <div style={{ backgroundColor: 'red' }}>单个文中中定义多个组件</div>
  },
})

const show = ref(true)
const loading = ref(true)
setTimeout(() => {
  loading.value = !loading.value
}, 5000)
const user = reactive<User>({
  id: 1,
  name: 'JackChou',
})
provide(USER_KEY, { id: 1234, name: 'JackChou' })
const myInput = ref('hello')
</script>

<template>
  <!-- eslint-disable vue/no-deprecated-slot-attribute -->
  <div>
    <MyInput v-model="myInput" />
    <p>{{ myInput }}</p>
    <hr />
    <SlottedDemo />
    <hr />
    <!-- <AntDesignDemos /> -->
    <hr />
    <HookDemo />
    <PopperButtonHook />
    <PopperButton />
    <hr />
    <TestHaunted />
    <hr />
    <TestStencilWC />
    <hr />
    <WatchDemo />
    <hr />
    <FileViewer v-loading="loading" />
    <hr />
    <!-- 
    <h2>测试jsx 中使用插槽</h2>
    <Button>
      <template #left>
        <span style="margin-right: 10px">left</span>
      </template>
      <span>hello</span>
      <template #right>
        <span style="margin-left: 10px">right</span>
      </template>
    </Button>
    -->
    <!-- <UseButton>
      <template #left>
        <span>左</span>
      </template>
      <span>中</span>
      <template #right>
        <span>右</span>
      </template>
    </UseButton>
    <UseButton>
      <template #left>
        <span>左</span>
      </template>
      <template #right>
        <span>右</span>
      </template>
    </UseButton> 
    <hr />
  -->
    <!-- <HelloWorld v-if="show" v-clickOutside="clickOutside" ref="HelloWorldCom" /> -->
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
