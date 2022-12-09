# provide 和 inject

## 基础使用

`App.vue`

```js
const user = reactive({
  id: 1,
  name: 'JackChou',
})
// provide(key, value)
provide('USER', user)
```

在任何 App 的后台组件中使用：

```js
// inject(key,defaultValue)
const user = inject('USER')
```

使用字面量提供 key，容易写错，且容易冲突。

解决办法：key 集中管理，且使用 symbol 类型。

`injectKey.ts`

```js
export const USER_KEY = Symbol('User')
```

在 provide 和 inject 中使用

`App.vue`

```js
import { USER_KEY } from './utils/injectionKey'
const user = reactive({
  id: 1,
  name: 'JackChou',
})
provide(USER_KEY, user)
```

使用 inject

```js
import { USER_KEY } from '@/utils/injectionKey'
const user = inject(USER_KEY)
```

## 类型安全的 inject

上面 inject 之后，user 的类型为 unknown。

为了解决这一问题，vue 提供`InjectionKey`，给 key 添加上类型。

```ts
import type { InjectionKey } from 'vue'
export type User = { id: number; name: string }
export const USER_KEY: InjectionKey<User> = Symbol('User')
```

> inject 之后，还是提示类型为 unknown，没生效。

<!-- TODO -->
