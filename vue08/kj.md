### 1.异步组件
component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

### 2.配置sass
npm i node-sass sass-loader --save-dev
<style lang='scss'>

嵌套，混合 ，继承


font-size:13.33333333vw;
    /* 1rem = 100px     ?/100=100vw/750*/
    ui提供(*2/100)

3.路由的重定向 redirect
4.命名路由 name
5.别名:alias path:'/home' alias:'/h'
6.命名视图
<router-view name='xxx'>

{
    path:xxx,
    components:{
        default:组件,
        router-view的名字:渲染组件
    }
}

7.当前路由样式
router-link-exact-active 
router-link-active(用子路由样式，如果父路由的样式也存在用这个类)
子路由在router-link里面路径要写全称 
redirect写在components外面
8.404页面
写在最下边
{
    path:'**',
    component:NotFound
  }

9.路由的元数据（meta）
路由的数据放在meta里
{
    path:'**',
    component:NotFound,
    meta:{//路由的元数据
      flag:true
    }
  }
  监控路由数据的变化
watch:{
      $route:{//监听当前路由的变化
        handler(n){
          console.log(n.meta.flag);
          this.visible = !n.meta.flag//flag是true的时候，导航不可见
        },
        immediate:true
      }
    }

11.路由传参 id
    <router-link to='/list/:实际参数'>xxx</router-link>

    路由对象
    {
        path:'list/:type',
        component:Xxx
    }

    this.$route 当前的路由对象
    this.$route.params.变量 就可以拿到路由传过来的参数

4.监听路由参数的变化，随时可以拿到路由的参数
    watch:{
        //监听路由参数的变化在组件没有卸载的情况下
        $route:{
            //n相当于this.$route
            handler(n){
                console.log(n.params.type,222)
            },
            immediate:true
        }
    }

    挂载阶段和创建阶段的四个钩子函数要重新执行的话需要组件卸载后切换回来重新执行

    watch:{//监听路由参数的变化 在组件没有卸载的情况下
        $route:{
            handler(n){//n相当于this.$route
                getList(n.params.type).then((res)=>{
                    if(res.data.code === 200){
                        this.list = res.data.data.list;
                    }
                })
                // console.log(n.params.type,222)
            },
            immediate:true

        },  
    }

5.$router,$route
this.$router VueRouter的实例对象 编程式导航
this.$route 当前的路由对象 

6.编程式导航
this.$router.push('url') 它能够改变地址栏上的url，从而改变渲染的组件
this.$router.push({name:route对象的name,params:{key:value...}}) 对应同一个路由path /list 重复点击会报警告 

 methods:{
      changeList(type){
        //编程式导航  //this.$router this.route
        console.log(this.$router)
        // this.$router.push('/list/'+type)//改变url /list/users /list/goods
        this.$router.push({"name":"list",params:{type},query:{k:Date.now()}})//这种方式
        //路由跳转到 name叫 list的路由对象,params 参数传递过去，方便传多个值 
        //对应的路由的path /list
      }
    }

7.拿到query 传的值
this.$route.query.变量

