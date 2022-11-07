<!--
 * @Date        : 2022-08-08 14:23:25
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-07 11:58:08
 * @Description : 
-->
<script setup>
  import {
    FileViewer,
    HelloWorld,
    Button,
    UseButton,
    WatchDemo,
    TestStencilWC,
  } from './components'
  const show = ref(true)
  const loading = ref(true)
  setTimeout(() => {
    loading.value = !loading.value
  }, 5000)
</script>

<template>
  <div>
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
    <!-- v-clickOutside="clickOutside"  -->
    <HelloWorld v-if="show" />
    <ElButton type="primary">el Button</ElButton>
  </div>
</template>

<style scoped></style>
