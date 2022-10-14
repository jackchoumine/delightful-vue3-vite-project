import { ref, onMounted, onUnmounted } from 'vue'

function getItem(key, storage) {
  const value = storage.getItem(key)
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

export function useStorage(key, type = 'session') {
  let storage = null
  switch (type) {
    case 'session':
      storage = sessionStorage
      break
    case 'local':
      storage = localStorage
    default:
      break
  }

  const value = ref(getItem(key, storage))
  function setItem(storage) {
    return (newValue) => {
      value.value = newValue
      storage.setItem(key, JSON.stringify(newValue))
    }
  }
  return [value, setItem(storage)]
}