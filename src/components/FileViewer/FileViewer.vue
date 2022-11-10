<!--
 * @Date        : 2022-08-08 15:45:47
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-17 10:15:51
 * @Description : 文件预览
-->
<template>
  <div :style="style">
    <div>file viewer</div>
    <p>{{ jack?.name }}</p>
    <p>{{ person?.name }}</p>
    <button @click="remove">删除</button>
    <h2>useWindowResize</h2>
    <p>width:{{ width }}</p>
    <p ref="myP">height:{{ height }}</p>
    <h2>网络在线吗？{{ isOnline ? '在' : '不在' }}</h2>
    <div class="box">box</div>
    <!-- <p>点到myP外部了吗？{{ isClickOutside ? '是' : '否' }}</p> -->
  </div>
</template>

<script>
  import {
    useLocalStorage,
    useWindowResize,
    useStorage,
    useNetworkStatus,
    useOnClickOutside,
  } from '@hooks'

  export default defineComponent({
    name: 'FileViewer',
    props: {
      height: {
        type: Number,
        default: 54,
      },
    },
    setup(props) {
      console.log(props.height)
      const { value, remove } = useLocalStorage('jack', { name: 'jack' })
      const { width, height } = useWindowResize()
      const [person, setItem] = useStorage('jack')
      // console.log('person: ')
      // console.log(person)
      setItem({ name: 'reactive session storage' })

      const pDOM = ref(null)

      // NOTE lifehook 不能嵌套调用
      // onMounted(() => {
      //   console.log('onMounted 1')
      //   onMounted(() => {
      //     console.log('onMounted 2')
      //   })
      // })
      // const isClickOutside = useOnClickOutside(pDOM, () => {
      //   console.log('click outside')
      // })

      watch(width, val => {
        console.log(val)
      })
      const isOnline = useNetworkStatus(isOnline => {
        console.log(isOnline)
      })
      // FIXME
      // NOTE 使用 css 变量的技巧
      const style = computed(() => {
        return { '--div-height': props.height + 'px' }
      })
      return {
        isOnline,
        jack: value,
        remove,
        width: width,
        height: height,
        person,
        myP: pDOM,
        style,
        // isClickOutside
      }
    },
  })
</script>

<style scoped>
  .box {
    height: var(--div-height);
    background-color: #ddd;
  }
</style>
