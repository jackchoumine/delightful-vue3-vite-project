type Handler = (event: Event) => void

export function useOn(eventName: string, handler: Handler, target: HTMLElement | Window) {
  onMounted(() => {
    target.addEventListener(eventName, handler)
  })
  onUnmounted(() => {
    target.removeEventListener(eventName, handler)
  })
}
