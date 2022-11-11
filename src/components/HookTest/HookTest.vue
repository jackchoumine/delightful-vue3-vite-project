<!--
 * @Date        : 2022-11-10 11:29:25
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-11 09:41:08
 * @Description : 测试 hook
-->
<template>
  <div>
    <input type="text" v-model="input" />
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
    </ul>
    <p>{{ input }}</p>
  </div>
</template>

<script setup>
  import { useHttpGet } from './hooks'
  const input = ref('')
  const { list } = useHttpGet(input)
</script>

<style lang="scss"></style>
