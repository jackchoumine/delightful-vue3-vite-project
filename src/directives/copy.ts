import type { Directive, DirectiveBinding } from 'vue'
import { copyText } from '@/utils'

const copy: Directive = {
  mounted(el, binding: DirectiveBinding) {
    const { value = false } = binding
    const text = el.textContent.trim()
    if (value) {
      if (typeof value === 'boolean') {
        // 复制节点文本
        el.onClick = () => {
          copyText(text)
        }
      } else {
        // 复制指定传入的值
        el.onClick = () => {
          copyText(value)
        }
      }
      el.addEventListener('click', el.onClick, false)
    }
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.onClick)
  },
}

export default copy
