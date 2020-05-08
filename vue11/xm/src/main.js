import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Toast,List} from 'vant';
Vue.config.productionTip = false
Vue.use(Button).use(Toast).use(List)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
