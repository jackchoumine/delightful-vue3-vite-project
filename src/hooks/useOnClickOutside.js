import { onMounted, onBeforeUnmount } from 'vue'

export function useOnClickOutside(ref = null, callback) {
  function handleClick(event) {
    // debugger
    // if (!ref.value || ref.value.contains(e.target)) {
    //   console.log('click inside')
    //   return
    // }
    // callback()
    if (ref.value && !ref.value.contains(event.target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClick)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClick)
  })
}
