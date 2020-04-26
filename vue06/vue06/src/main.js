import Vue from 'vue'
import App from './App.vue'//导入App 组件（单文件组件）


Vue.config.productionTip = false

new Vue({
  render: h => h(App),//h createElement 程序一运行，就开始渲染App 组件
}).$mount('#app')
