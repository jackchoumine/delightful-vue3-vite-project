type Handler = (event: Event) => void

export function useOn(evntName: string, handler: Handler, target: HTMLElement | Window) {
  onMounted(() => {
    target.addEventListener(evntName, handler)
  })
  onUnmounted(() => {
    target.removeEventListener(evntName, handler)
  })
}
