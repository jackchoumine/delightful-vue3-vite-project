import { h, defineComponent, computed } from 'vue'
import { LazyOrRef } from './types'
import { unravel } from '../utils/utils'

export function useMouseFollower(position: LazyOrRef<{ x: number; y: number }>) {
  const style = computed(() => {
    const { x, y } = unravel(position)

    return {
      position: 'fixed',
      top: 0,
      left: 0,
      transform: `translate3d(${x}px, ${y}px, 0)`,
    }
  })

  const Follower = defineComponent(
    (props, { slots }) =>
      () =>
        h('div', { ...props, style: style.value }, slots)
  )

  return Follower
}
