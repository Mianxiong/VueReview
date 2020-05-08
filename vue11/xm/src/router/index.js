import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema'
import News from '../views/News'
import User from '../views/User'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/film'//重定向 上来就渲染Film组件
    },
    {
      path:'/film',
      redirect:'/film/nowPlaying'
    },
  {
    path: '/film/:type',//影片页面
    name: 'film',
    component: Film
  },
  {
    path: '/cinema',//影院页面
    name: 'cinema',
    component: Cinema
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    meta:{
      flag:true//导航条不可见
    }
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
