<!--
 * @Date        : 2022-11-10 11:35:34
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-12 15:28:34
 * @Description : 
-->
<template>
  <div>
    <TestHook />
    <hr />
    <h4>useMouse</h4>
    <UseMouseFollower />
    <!-- <VideoPlayer /> -->
    <hr />
    <h4>useContext</h4>
    <Modal>
      <ModalHeader>modal1</ModalHeader>
    </Modal>
    <Modal>
      <ModalHeader>modal2</ModalHeader>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import TestHook from './HookTest.vue'
import VideoPlayer from '../VideoPlayer/VideoPlayer.vue'
import UseMouseFollower from './UseMouseDemo.vue'
import { Modal, ModalHeader } from './Modal'
const name = ref('')
</script>

<style lang="scss"></style>
