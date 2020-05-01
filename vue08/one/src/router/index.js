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
import List from '@/views/List'
Vue.use(VueRouter)

const routes = [{
    // path: '/',
    // // redirect:'/home'
    // redirect: {
    //   name: 'Home1'
    // }
    path:'/',
    // redirect:'/home',
    redirect:{
      name:'Home1'
    }
  },
  // {
  //   path:'/list/:type',//type相当于路由的参数，是形参
  //   component:List
  // },
  {
    path:'/list',
    name:'list',
    component:List
  },
  {
    //有名字 命名路由
    path: '/Home',
    alias:'/h',//别名
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
      default:Category,//没有名字的那个router-view 渲染 Category
      demo:Demo,//name 是demo router-view 渲染Demo组件
      
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
    component:NotFound,
    meta:{//路由的元数据
      flag:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router