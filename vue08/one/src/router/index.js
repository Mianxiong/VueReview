import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Category from '@/views/Category'
import Shopping from '@/views/Shopping'
import User from '@/views/User'
import Demo from '@/views/Demo'
import Phone from '@/views/Phone'
import Tool from '@/views/Tool'
import NotFound from '@/views/NotFound'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    // redirect:'/home'
    redirect: {
      name: 'Home1'
    }
  },
  {
    //命名路由
    path: '/Home',
    alias:'/h',
    name: 'Home1',
    component: Home,

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/category',
    components:{//同一个路径可以渲染多个组件
      default:Category,
      demo:Demo,
      
    },
    redirect:{'name':'phone'},
    children:[
    //   {
    //   path:'',
    //   component:Phone
    // },
    
      {
      //子路由
      path:'phone',//category/phone
      name:'phone',
      component:Phone
    },
    {
      path:'tool',//category/tool
      component:Tool
    }]
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/shopping',
    component: Shopping
  },{
    path:'**',
    component:NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router