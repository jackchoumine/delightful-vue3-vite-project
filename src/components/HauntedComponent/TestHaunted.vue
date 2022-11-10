<!--
 * @Date        : 2022-11-10 09:03:19
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-10 09:04:14
 * @Description : 
-->
<template>
  <my-counter @hello="onCustomEvent"></my-counter>
</template>

<script setup lang="ts">
  function onCustomEvent(event) {
    console.log(event.type)
  }
</script>

<style lang="scss"></style>
