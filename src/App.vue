<!--
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : JackChou
 * @LastEditTime: 2022-10-15 20:57:14 +0800
 * @Description : 
-->
<script setup lang="ts">
  import { FileViewer, HelloWorld } from '@c'
  const show = ref(true)
  function toggle() {
    show.value = !show.value
  }
  function clickOutside() {
    console.log('clickOutSide')
  }
</script>

<template>
  <div>
    <FileViewer />
    <HelloWorld v-if="show" v-clickOutside="clickOutside" />
    <button @click="toggle">toggle</button>
  </div>
</template>

<style scoped></style>
