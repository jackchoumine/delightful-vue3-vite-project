<!--
 * @Date        : 2022-11-10 11:35:34
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-12 15:28:34
 * @Description : 
-->
<template>
  <div>
    <h4>useVisibilityChange</h4>
    <audio
      ref="audio"
      controls
      src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>
    <h3>组合函数例子</h3>
    <SimpleCounter />
    <h3>在条件语句下使用组合函数</h3>
    <ContactList />
    <ContactList searchable />
    <h3>使用hook共享状态</h3>
    <h4>书本列表</h4>
    <ul>
      <li v-for="(item, index) in books" :key="index">
        <button @click="() => removeCart(item.id)">-</button>
        {{ item.name }} -- ￥{{ item.price }}
        <button @click="() => addCart(item)">+</button>
      </li>
    </ul>
    <h4>购物车</h4>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.name }} -- {{ item.number }}
      </li>
    </ul>
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
import SimpleCounter from './SimpleCounter.vue'
import ContactList from './ContactList.vue'
import { Modal, ModalHeader } from './Modal'
import useCart from './useCart'
import { useVisibilityChange } from '@/hooks'
const books = ref([
  { id: 1, name: 'vue', price: 12 },
  { id: 2, name: 'react', price: 20 },
  { id: 3, name: 'angular', price: 21 },
])
const { items, addCart, removeCart } = useCart()
const audio = ref(null)
useVisibilityChange(hidden => {
  if (hidden) {
    audio.value?.pause()
  }
})
</script>

<style lang="scss"></style>
