import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useNetworkStatus(callback = (isOnline = false) => {}) {
  const isOnline = ref(false)
  function updateOnlineStatus() {
    if (typeof window !== 'undefined') {
      isOnline.value = navigator.onLine
    }
    callback(isOnline.value)
  }
  onMounted(() => {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('online', updateOnlineStatus)
    window.removeEventListener('offline', updateOnlineStatus)
  })
  return isOnline
}
