/*
 * @Description : vitepress 配置
 * @Date        : 2022-10-16 02:33:56 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-16 04:32:16 +0800
 * @LastEditors : JackChou
 */
export default {
  title: 'Jack 的博客',
  description: 'vue 教程', // html meta description 方便搜索引擎抓取
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {
    lineNumbers: true, // 代码块显示行号
    toc: {
      includeLevel: [1, 2, 3, 4] //生成目录的 markdown 标题 默认 2 3
    }
  },
  themeConfig: {
    // setTitle: 'hello',
    logo: '/favicon.ico',
    sidebar: 'auto', // 所有页面开启自动根据 markdown 的标题生成侧边栏
    lastUpdated: true, // 根据 git commit 的时间显示最后更新时间
    nav: [
      { text: '主页', link: '/' },
      // {
      //   text: '框架',
      //   // 二级下拉
      //   items: [
      { text: 'vue2', link: '/vue2/' },
      { text: 'vue3', link: '/vue3/' },
      { text: 'react', link: '/react/' },
      //   ]
      // },
      { text: 'node', link: '/node/' },
      { text: '科学', link: '/science/' },
      {
        text: 'web',
        items: [
          {
            items: [
              { text: 'js', link: '/web/js/' },
              { text: 'css', link: '/web/css/' }
              // { text: 'html', link: '/web/html/' }
            ]
          },
          { items: [{ text: 'webpack', link: '/webpack/' }] }
        ]
      },
      {
        text: '其他',
        // 二级下拉
        items: [
          { text: '函数式编程', link: '/others/functional-programming/' },
          { text: 'angular', link: '/angular/' },
          { text: '开发工具', link: '/others/dev-tool/' },
          { text: 'mac使用', link: '/others/mac/' }
        ]
      }
      // { text: '面试', link: '/interview/' },
    ],
    // 博客仓库配置
    repo: 'https://github.com/jackchoumine/vue-press-blog',
    repoLabel: 'Github',
    // 开启页面上的编辑此页
    editLinks: true,
    editLinkText: '编辑此页',
    // algolia 搜索全文，需要 apiKey
    // 内置搜索智能搜索 h2 h3 标题
    algolia: {
      apiKey: 'b7968a5518faded4fab25c0e7e60813a',
      indexName: 'jackBlog'
    },
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/geeksdidi' }
      // { icon: 'twitter', link: '...' },
      // // You can also add custom icons by passing SVG as string:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: '...'
      // }
    ]
  },
  plugins: [
    ['@mr-hope/copy-code'],
    [
      'vuepress-plugin-mygitalk',
      {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 是否开启首页评论(default: true)
        home: true,
        // Gitalk配置
        gitalk: {
          // GitHub Application Client ID.
          clientID: '8dc7d58ba7eb7f5f8754',
          // GitHub Application Client Secret.
          clientSecret: '71ecf094b54febb001f2b08723a023b7f26e9d69',
          // GitHub repository. 存储评论的 repo
          repo: 'vue-press-blog',
          // GitHub repository 所有者，可以是个人或者组织。
          owner: 'jackchoumine',
          // 设置语言(default: zh-CN)
          language: 'zh-CN'
        }
      }
    ]
  ]
  // base: '/blog/',
  // 构建输出目录
  // dest: './dist', // 默认 .vuepress/dist
  // 开发运行的端口
  // port: '7777',
  // 开发运行的地址
  // host: '127.0.0.1'
}
