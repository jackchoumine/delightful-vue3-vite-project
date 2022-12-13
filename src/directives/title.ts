import type { DirectiveBinding } from 'vue'

function title(el, binding: DirectiveBinding) {
  const { value } = binding
  if (value) {
    if (typeof value === 'string') {
      el.title = value
    } else if (typeof value === 'function') {
      value()
    }
  } else {
    el.title = el.textContent.trim()
  }
}
export default title
