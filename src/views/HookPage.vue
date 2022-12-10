<script setup lang="ts" name="HookPage">
import {
  FileViewer,
  HookDemo,
  PopperButton,
  PopperButtonHook,
  MyInput,
} from '../components'
const myInput = ref('hello')
</script>

<template>
  <div class="vue-component">
    <MyInput v-model="myInput" />
    <p>{{ myInput }}</p>
    <hr />
    <FileViewer />
    <HookDemo />
    <PopperButtonHook />
    <PopperButton />
  </div>
</template>

<style lang="scss"></style>
