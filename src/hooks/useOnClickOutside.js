/*
 * @Date        : 2022-08-09 10:29:48
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-14 17:13:17
 * @Description : 点击 dom 外部
 */
import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useOnClickOutside(DOM = null, callback) {
  const isClickOutside = ref(false)
  function handleClick(event) {
    if (DOM.value && !DOM.value.contains(event.target)) {
      callback()
      isClickOutside.value = true
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClick)
  })
  return isClickOutside
}
