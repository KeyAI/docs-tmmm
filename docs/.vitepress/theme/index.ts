import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Figures from '../components/Figures.vue'


export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('Figures', Figures)
  }
} satisfies Theme