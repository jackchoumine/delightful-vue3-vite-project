import type { Directive, DirectiveBinding } from 'vue'
import { copyText } from '@/utils'

/**
 * 复制指令
 * // 没提供值，复制 textContent，这里复制 hello
 * <div v-copy>hello</div>
 * // 提供值，复制该值，复制 value 的值
 * <div v-copy="value">hello</div>
 */
const copy: Directive = {
  mounted(el, binding: DirectiveBinding) {
    const { value = false } = binding
    const text = el.textContent.trim()
    if (!value) {
      // 没有值, 复制节点文本
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
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.onClick)
  },
}

export default copy
