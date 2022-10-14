/*
 * @Date        : 2022-08-09 10:17:04
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-14 16:56:45
 * @Description : 测试网络是否在线
 */
import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useNetworkStatus(callback = (isOnline = false) => {}) {
  const isOnline = ref(navigator.onLine)
  function updateOnlineStatus() {
    if (typeof window !== 'undefined') {
      isOnline.value = navigator.onLine
    }
    callback(isOnline.value)
  }
  onMounted(() => {
    console.log('updateOnlineStatus')
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('online', updateOnlineStatus)
    window.removeEventListener('offline', updateOnlineStatus)
  })
  return isOnline
}
