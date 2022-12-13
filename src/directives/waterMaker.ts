import type { DirectiveBinding } from 'vue'
import type { Params } from '@/utils'
import { addWaterMarker } from '@/utils'
function waterMarker(el: HTMLElement, binding: DirectiveBinding<Omit<Params, 'node'>>) {
  const value = binding.value
  addWaterMarker({ ...value, node: el })
}
export default waterMarker
