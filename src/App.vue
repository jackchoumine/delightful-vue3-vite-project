<!--
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : JackChou
 * @LastEditTime: 2022-10-27 00:36:57 +0800
 * @Description : 
-->
<script setup>
  import { FileViewer, HelloWorld, Button } from './components'
  const show = ref(true)
  const endValue = ref(2000)
  function toggle() {
    show.value = !show.value
    endValue.value = Math.random() * 10000
  }
  function clickOutside() {
    console.log('clickOutSide')
  }

  function updated({ detail }) {
    console.log(detail)
  }
  const person = reactive({ name: 'jack' })
  function changePerson(params) {
    person.name = 'HELLO_WORLD'
  }
</script>

<template>
  <div>
    <FileViewer />
    <hr />
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
    <hr />
    <HelloWorld v-if="show" v-clickOutside="clickOutside" />
    <button @click="toggle">toggle</button>
    <count-to v-if="show" :end-value="endValue" :precision="3" @on-end="updated">
      <span slot="left">工资：</span>
      <span slot="right">$</span>
    </count-to>
    <my-rating :max-value="10" :person="person" :personArray="[person]"></my-rating>
    <button type="button" @click="changePerson">修改person</button>
  </div>
</template>

<style scoped></style>
