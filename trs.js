module.exports = {
    // NOTE 会检查jsx 配置 .stylelintignore 忽略 jsx js
    ignoreFiles: ['**/*.js', '**/*.jsx', 'src/assets/css/element-variables.scss', 'theme/'],
    extends: [
      'stylelint-config-standard',
      'stylelint-config-standard-scss',
      'stylelint-config-html/html',
      'stylelint-config-html/vue',
    ],
    plugins: ['stylelint-order'],
    rules: {
      'no-empty-source': null,
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: ['extend'],
        },
      ],
      // 忽略伪类选择器 ::v-deep
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['/./', 'v-deep', '-webkit-'],
        },
      ],
      // 属性的排序
      'order/properties-order': [
        // 布局
        'display',
        'visibility',
        'float',
        'clear',
        'overflow',
        'overflow-x',
        'overflow-y',
        'clip',
        'zoom',
        // 定位
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        // 尺寸
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
  
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
  
        'border',
  
        // 文本样式
        'font',
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'font-variant',
        'font-size-adjust',
        'font-stretch',
        'font-effect',
        'font-emphasize',
        'font-emphasize-position',
        'font-emphasize-style',
        'font-smooth',
        'line-height',
        'text-align',
        'text-align-last',
        'vertical-align',
        'white-space',
        'text-decoration',
        'text-emphasis',
        'text-emphasis-color',
        'text-emphasis-style',
        'text-emphasis-position',
        'text-indent',
        'text-justify',
        'letter-spacing',
        'word-spacing',
        'text-outline',
        'text-transform',
        'text-wrap',
        'text-overflow',
        'text-overflow-ellipsis',
        'text-overflow-mode',
        'word-wrap',
        'word-break',
        // 背景
        'color',
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-attachment',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-clip',
        'background-origin',
        'background-size',
        // 轮廓和阴影
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',
        'outline-offset',
        'opacity',
        'box-shadow',
        'text-shadow',
        // 动画
        'transition',
        'transition-delay',
        'transition-timing-function',
        'transition-duration',
        'transition-property',
        'transform',
        'transform-origin',
        'animation',
        'animation-name',
        'animation-duration',
        'animation-play-state',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        // 其他：伪类 伪元素
        'content',
        'quotes',
        'counter-reset',
        'counter-increment',
        'resize',
        'cursor',
        'user-select',
        'nav-index',
        'nav-up',
        'nav-right',
        'nav-down',
        'nav-left',
        'tab-size',
        'hyphens',
        'pointer-events',
        // 规则参考
        // https://wiki.zthxxx.me/wiki/%E7%A8%8B%E5%BA%8F%E8%AF%AD%E8%A8%80/CSS/CSS%20%E5%B1%9E%E6%80%A7%E5%A3%B0%E6%98%8E%E9%A1%BA%E5%BA%8F%E8%A7%84%E8%8C%83/
        // https://347830076.github.io/myBlog/standard/stylelint.html#%E8%87%AA%E5%AE%9A%E4%B9%89css%E5%B1%9E%E6%80%A7%E9%A1%BA%E5%BA%8F%E8%A7%84%E5%88%99
        // 如何自动修复？
        // https://bryanadamss.github.io/2020/03/05/style-lint/
        /**
         *
         * 安装 stylelint-plus
         * 配置  
      
       "editor.codeActionsOnSave": {
         "source.fixAll.stylelint": true
        },
        "stylelint.autoFixOnSave": true,
        "stylelint.useLocal": true,
      // 依赖
      "postcss": "^8.4.5",
      "postcss-html": "^1.3.0",
      "postcss-sass": "^0.5.0",
      "stylelint": "^14.2.0",
      "stylelint-config-html": "^1.0.0",
      "stylelint-config-prettier": "^9.0.3",
      "stylelint-config-standard": "^24.0.0",
      "stylelint-config-standard-scss": "^3.0.0",
      "stylelint-order": "^5.0.0",
      "stylelint-webpack-plugin": "^3.1.1",
         */
      ],
    },
  }