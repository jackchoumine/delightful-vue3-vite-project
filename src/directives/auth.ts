import type { Directive, DirectiveBinding } from 'vue'

const $auth = function (key = '') {
  // NOTE 从后台获取到的权限列表，放在store里面
  const buttonKeys = ['key', 'key1', 'key2']
  // 返回 bool ，方便在结合 v-if 使用
  return buttonKeys.includes(key)
}

const auth = (el, binding: DirectiveBinding) => {
  const { value: key = '', arg = 'show' } = binding
  if (key && !$auth(key)) {
    // 1. 无权限时只是禁用，用户可以编辑页面启用，且可出发事件
    // NOTE 解决办法：克隆一个新元素，使用新元素代替旧元素
    // cloneNode(true) 克隆整个节点，通过 addEventListener 绑定的事件不会被克隆
    // NOTE 行内属性绑定的事件会被克隆
    // 2. 有的元素没有 disabled 属性，设置了没有用
    // NOTE pointer-events:none 可实现任意元素禁用 hover 和 click
    // 缺点：hover 时不显示 title

    // 无权限时禁用按钮
    if (arg === 'disabled') {
      // el.disabled = true
      // setAttribute 能新增不存在的属性
      el.setAttribute('disabled', true)
      el.title = '没有操作权限'
      // 设置无权限的样式
      el.style['pointer-events'] = 'none'
      el.style.opacity = 0.6 // 设置该属性只是起到禁用效果而已
      el.style.cursor = 'not-allowed'
      const elClone = el.cloneNode(true)
      el.parentElement?.replaceChild(elClone, el)
    } else {
      // 无权限时删除按钮
      el.remove()
    }
  }
}
export default auth
