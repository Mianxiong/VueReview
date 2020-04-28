### 1.异步组件
component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

### 2.配置sass
npm i node-sass sass-loader --save-dev
<style lang='scss'>

嵌套，混合 ，继承

3.路由的重定向 redirect
4.命名路由 name
5.别名:alias path:'/home' alias:'/h'
6.命名视图
<router-view name='xxx'>

{
    path:xxx,
    components:{
        default:组件
        router-view的名字:渲染组件
    }
}

7.当前路由样式
router-link-exact-active 
router-link-active(用子路由样式，如果父路由的样式也存在这个类)

8.404页面



