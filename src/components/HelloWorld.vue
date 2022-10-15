<script>
  export default {
    directives: {
      focus: {
        mounted(el, binding, vNode) {
          // 获取input，并调用其focus()方法
          el.focus()
        }
      }
    },
    setup() {
      // console.log('setup')
      // onBeforeMount(() => {
      //   console.log('com onBeforeMount')
      // })
      // onMounted(() => {
      //   console.log('com onMounted')
      // })
      // onBeforeUpdate(() => {
      //   console.log('com onBeforeUpdate')
      // })
      // onUpdated(() => {
      //   console.log('com onUpdated')
      // })
      // onBeforeUnmount(() => {
      //   console.log('com onBeforeUnmount')
      // })
      // onUnmounted(() => {
      //   console.log('com onUnmounted')
      // })
      return {}
    }
  }
</script>

<template>
  <div>
    <input v-focus />
    <button v-auth:disabled="'li'">无权限禁用</button>
    <button v-auth="'li'">无权限删除</button>
  </div>
</template>
