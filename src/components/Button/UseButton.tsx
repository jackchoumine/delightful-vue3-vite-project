/*
 * @Description : 使用 Button
 * @Date        : 2022-10-27 00:40:00 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-27 01:01:08 +0800
 * @LastEditors : JackChou
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

    return () => <Button>{children}</Button>
    // NOTE 另外一种写法
    // return () => (
    //   <Button>
    //     {left ? left() : null}
    //     {_default ? _default() : null}
    //     {right ? right() : null}
    //   </Button>
    // )
  },
})

export default UseButton
