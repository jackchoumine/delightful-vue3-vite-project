<!--
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-02 15:26:52
 * @Description : 
-->
<script setup>
  import { FileViewer, HelloWorld, Button, UseButton } from './components'
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
  const loading = ref(true)
  setTimeout(() => {
    loading.value = !loading.value
  }, 5000)
</script>

<template>
  <div>
    <FileViewer v-loading="loading" />
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
    <UseButton>
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
    <!-- v-clickOutside="clickOutside"  -->
    <HelloWorld v-if="show" />
    <ElButton type="primary">el Button</ElButton>
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
