/*
 * @Description : 使用 Button
 * @Date        : 2022-10-27 00:40:00 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-11-02 14:51:14
 * @LastEditors : ZhouQiJun
 */
import Button from './Button'

const UseButton = defineComponent({
  setup(props, { slots }) {
    console.log('useButton slots')
    console.log(slots)
    const { default: _default, left, right } = slots

    const children = {}
    if (left) Object.assign(children, { left: () => left() })

    if (right) Object.assign(children, { right: () => right() })

    if (_default) Object.assign(children, { right: () => _default() })
    else {
      Object.assign(children, {
        default: () => <span style={{ color: 'red' }}>hello</span>,
      })
    }
    const show = ref(false)
    // NOTE 第一种方式
    return () => (
      <div>
        <h2 v-show={show.value}></h2>
        <Button v-slots={children}></Button>
      </div>
    )

    // NOTE 第二种方式
    // return () => <Button>{children}</Button>

    // NOTE 第三种方式
    // return () => (
    //   <Button>
    //     {left ? left() : null}
    //     {_default ? _default() : null}
    //     {right ? right() : null}
    //   </Button>
    // )

    // NOTE 哪种写法更好？
    // v-slots 不是官方支持的用法，推荐使用第二种方式。
  },
})

export default UseButton
