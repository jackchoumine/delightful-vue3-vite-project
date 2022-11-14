<template>
  <h3>测试useModel</h3>
  <input v-model="inputRef" />
</template>

<script lang="ts">
  import { useModel } from './hooks'
  export default defineComponent({
    name: 'MyInput',
    emits: ['update:input'],
    props: ['input'],
    setup(props, { emit, attrs, slots }) {
      // const inputRef = useModel(props, 'input')
      const inputRef = ref('')
      watch(inputRef, input => {
        emit('update:input', input)
      })
      return { inputRef }
    },
  })
</script>

<style scoped lang="scss"></style>
