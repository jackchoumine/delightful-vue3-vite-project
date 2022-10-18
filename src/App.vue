<!--
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-18 12:39:18
 * @Description : 
-->
<script setup>
  import { FileViewer, HelloWorld } from './components'
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
</script>

<template>
  <div>
    <FileViewer />
    <HelloWorld v-if="show" v-clickOutside="clickOutside" />
    <button @click="toggle">toggle</button>
    <count-to v-if="show" :end-value="endValue" :precision="3" @on-end="updated">
      <span slot="left">工资：</span>
      <span slot="right">$</span>
    </count-to>
  </div>
</template>

<style scoped></style>
