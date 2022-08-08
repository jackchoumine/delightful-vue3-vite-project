# delightful vue3 vite project

使用 vite 创建 vue 应用，目录结构没给出推荐，那么如何安排目录结构呢？

目录结构没有对错的标准，关键是项目大了**方便管理**、新人来了能**快速找到**他想要修改的文件。

## 一些原则

### 导入方便

设置目录别名，导入模块更加方便：

```js
{
   resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@c' : path.resolve(__dirname, './src/components')
    },
  },
}
```

### index.js 只包含导入导出代码

index.js 用来负责多个导出，不包含业务代码。如果包含业务代码，vscode 的上方导航，会同时存在多个 index.js，难以区分。

即使上级目录不同，index.js 包含业务代码，会增加导航成本。

### 以功能组织目录

需要`components`、`utils`、`helpers`、`hooks`、`tools`等目录组织功能。

复杂的组件可能被拆分成几个文件，把这些文件放在一个目录下管理。

比如一个`FileViewer`组件：

```bash
components
 FileViewer
  - FileViewer.vue
  - Sidebar.vue
  - FileContent.vue
  - Directory.vue
  - File.vue
  - helpers.js
  - hooks.js
  - index.js # 导出组件
```

放在一个目录的好处：**方便阅读**；当需要在另一个项目里使用时，能**整体复制**。

## hooks

如果 hook 仅限于一个组件使用，把这些 hook 就近这个组件组织。

如果是比较通用的 hook，可能在多个组件中使用，放在 hooks 目录下。

## utils -- 通过项目工具函数

这些工具函数可以在不同项目之间共享，比如 axios 的封装。

## helpers -- 特定项目的辅助函数

不能在项目之间共享的工具函数，放在这里，这些函数往往和特定的项目绑定。

## views

页面组件目录，不宜嵌套太深，最多嵌套一层。

## router

路由目录，路径在命名时，和 views 下的组件名称保持一致，方便在浏览器查看页面，然后在 vscode 里寻找响应的页面组件。

比如

```js
const routes = [
  { path: '/about', component: () => import('../views/About.vue') }
  { path: '/hello-world', component: () => import('../views/HelloWorld.vue') }
]
```

> 多个单词的 path 使用羊肉串命名，可读性更高。
