<template>
  <div>file viewer</div>
  <p>{{ jack?.name }}</p>
  <button @click="remove">删除</button>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue'
  import { useLocalStorage } from '@hooks'
  export default defineComponent({
    setup() {
      const { value, remove } = useLocalStorage('jack', { name: 'jack' })
      return { jack: value, remove }
    }
  })
</script>

<style scoped></style>
