import Vue from 'vue'
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'
import VueRouter from 'vue-router'//1）导入
Vue.use(VueRouter)//使用VueRouter

//3)实例化
var router = new VueRouter({
    routes:[{
      path:'/one',
      component:One
    },{
      path:'/two',
      component:Two
    }]
  })
  export default router