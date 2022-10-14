<!--
 * @Date        : 2022-08-08 15:45:47
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-14 17:17:27
 * @Description : 文件预览
-->
<template>
  <div>file viewer</div>
  <p>{{ jack?.name }}</p>
  <p>{{ person?.name }}</p>
  <button @click="remove">删除</button>
  <h2>useWindowResize</h2>
  <p>width:{{ width }}</p>
  <p ref="myP">height:{{ height }}</p>
  <h2>网络在线吗？{{ isOnline ? '在' : '不在' }}</h2>
  <p>点到myP外部了吗？{{ isClickOutside ? '是' : '否' }}</p>
</template>

<script>
  import {
    useLocalStorage,
    useWindowResize,
    useStorage,
    useNetworkStatus,
    useOnClickOutside
  } from '@hooks'

  export default defineComponent({
    name: 'FileViewer',
    setup() {
      const { value, remove } = useLocalStorage('jack', { name: 'jack' })
      const { width, height } = useWindowResize()
      const [person, setItem] = useStorage('jack')

      setItem({ name: 'jack' })

      const pDOM = ref(null)

      // NOTE lifehook 不能嵌套调用
      // onMounted(() => {
      //   console.log('onMounted 1')
      //   onMounted(() => {
      //     console.log('onMounted 2')
      //   })
      // })
      const isClickOutside = useOnClickOutside(pDOM, () => {
        console.log('click outside')
      })

      watch(width, (val) => {
        console.log(val)
      })
      const isOnline = useNetworkStatus((isOnline) => {
        console.log(isOnline)
      })

      return {
        isOnline,
        jack: value,
        remove,
        width: width,
        height: height,
        person,
        myP: pDOM,
        isClickOutside
      }
    }
  })
</script>

<style scoped></style>
