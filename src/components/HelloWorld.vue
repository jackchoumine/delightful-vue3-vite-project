<!--
 * @Date        : 2022-10-17 09:27:13
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-02 14:57:55
 * @Description : 
-->
<script>
  import Modal from './Modal/Modal.vue'
  export default {
    components: {
      Modal,
    },
    directives: {
      focus: {
        mounted(el, binding, vNode) {
          // 获取input，并调用其focus()方法
          el.focus()
        },
      },
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
      const modalIsOpen = ref(false)
      const openModal = () => {
        modalIsOpen.value = true
      }
      const onModalClose = () => {
        modalIsOpen.value = false
      }
      return { modalIsOpen, openModal, onModalClose }
    },
  }
</script>

<template>
  <div class="hello-world">
    <input v-focus />
    <button v-auth:disabled="'li'" class="button">无权限禁用</button>
    <button v-auth="'li'">无权限删除</button>
    <button @click="openModal">Open Modal</button>
    <br />
    <Modal :isOpen="modalIsOpen" @close-modal="onModalClose">My Modal !!!!</Modal>
  </div>
</template>

<style>
  .hello-world {
    background-color: aliceblue;
  }
  .hello-world .button {
    color: red;
  }
</style>
