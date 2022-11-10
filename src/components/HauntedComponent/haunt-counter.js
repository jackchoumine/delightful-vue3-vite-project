/*
 * @Date        : 2022-11-09 12:43:19
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-10 09:02:42
 * @Description :
 */
import { html } from 'lit'
import { component, useState } from 'haunted'

function Counter() {
  const [count, setCount] = useState(0)

  // NOTE 自定义事件的触发
  // 使用监听函数获取 this
  const onClick = () => {
    // this 为自定义元素
    console.log(this)
    this.dispatchEvent(
      new CustomEvent('hello', {
        detail: { name: 'John' },
      })
    )
    setCount(count + 1)
  }
  return html`
    <div id="count">${count}</div>
    <button type="button" id="my-btn" @click=${onClick}>Increment</button>
  `
}

customElements.define('my-counter', component(Counter))
