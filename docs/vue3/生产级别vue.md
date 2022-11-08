# 生产级别的 vue ---《[Production-Grade Vue.js](https://frontendmasters.com/courses/production-vue/)》课程笔记

花了 3 个小时，听了 front master 的 production-grade vue 课程，课程不错，比较基础，但是也学到了一些东西，现在总结如下。

## 拆分组件的标识

哪种情况下拆分组件，有时候往往没有一个清晰的边界，以下几种情况，需要拆分组件：

- 发现组件难以阅读

- 难以简洁明确的描述组件职责

单一职责是软件设计的黄金法则。

- 组件内**单独一段代码**具有自己的状态

组件内有一个状态不和其他状态产生关联，可拆分成单独组件，让组件更加清晰。

## 更好的组织你的目录

目录嵌套太深，不利于重构和浏览文件。

课程里推荐**两层**的目录，从命名上把相关的文件组织到一起，比如：

```bash
srr
  components
    DashboardHeader.vue
    DashboardHeader.test.js
    Dashboard.test.js
    Dashboard.vue
```

这样命名，组件被 vscode 聚拢到一起，方便阅读。

但是实际上命名一直是很多人难题，很多人也不愿意花点时间，思考命名，所以我更推荐最多三层目录，把相关组件组织到单独目录下，使用 index 导出变量：

```bash
srr
  components
    Dashboard # 文件大写
      DashboardHeader.vue
      DashboardHeader.test.js
      Dashboard.test.js
      Dashboard.vue
      index.js # 导出相关变量
```

或者

```bash
srr
  components
    Dashboard # 文件大写
      Header.vue
      Header.test.js
      Dashboard.test.js
      Dashboard.vue
      index.js # 导出相关变量
```
