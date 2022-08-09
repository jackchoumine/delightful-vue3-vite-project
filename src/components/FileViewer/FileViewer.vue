<template>
  <div>file viewer</div>
  <p>{{ jack?.name }}</p>
  <p>{{ person?.name }}</p>
  <button @click="remove">删除</button>
  <h2>useWindowResize</h2>
  <p>width:{{ width }}</p>
  <p ref="myP">height:{{ height }}</p>
</template>

<script>
  import { defineComponent, toRefs, watch, ref, onMounted } from 'vue'
  import {
    useLocalStorage,
    useWindowResize,
    useStorage,
    useNetworkStatus,
    useOnClickOutside
  } from '@hooks'
  export default defineComponent({
    setup() {
      const { value, remove } = useLocalStorage('jack', { name: 'jack' })
      const { width, height } = useWindowResize()
      const [person, setItem] = useStorage('jack')
      setItem({ name: 'jack' })

      const myP = ref(null)
      onMounted(() => {
        console.log(myP.value)
        useOnClickOutside(myP, () => {
          console.log('click outside')
        })
      })
      watch(width, (val) => {
        console.log(val)
      })
      const isOnline = useNetworkStatus((isOnline) => {
        console.log(isOnline)
      })
      return { jack: value, remove, width: width, height: height, person, myP }
    }
  })
</script>

<style scoped></style>
