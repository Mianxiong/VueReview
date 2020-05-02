import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Login from '../components/Login'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component:About,
    meta:{
      auth:true//登录后才能看到About组件内容，没登录查看About内容，跳到登陆组件
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.matched)//to.matched 当前的url的path匹配的路由对象所形成的数组
  //some 有一个为true 就为true 都为false 才是false
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!sessionStorage.getItem('user')) {//如果用户没有登陆
      next({
        path: '/login',

        query: { redirect: to.fullPath }//to.fullPath 要进入的路由的全路径
      })
    } else {
      next()//登陆了就直接跳转
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
