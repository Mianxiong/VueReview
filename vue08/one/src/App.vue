<template>
  <div id="app">
    <!-- <router-link to='/list/users'>users</router-link>
      <router-link to='/list/goods'>goods</router-link> -->
    <button @click="changeList('users')">users</button>
    <button @click="changeList('goods')">goods</button>
    <transition mode="out-in" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
    <router-view/>
    </transition>
    <!-- <router-view name='demo'></router-view> -->
    <ul class="footer" v-show='visible'>
      <li>
        <router-link to='/Home' >首页</router-link>
      </li>
      <li>
        <router-link to='/category'>分类</router-link>
      </li>
      <li>
        <router-link to='/shopping'>购物车</router-link>
      </li>
      <li>
        <router-link to='/user'>个人中心</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        visible:true
      }
    },
    created(){

      //任何一个 路由切换的时候都会执行这个函数
      this.changeTitle(this.$route.path) //刷新时重新渲染组件，执行created
      this.$router.beforeEach((to,from,next)=>{
        console.log(to,from,next)
        this.changeTitle(to.path)
        next()
      })
    },
    watch:{
      $route:{//监听当前路由的变化
        handler(n){//n 相当于this.$route
          // console.log(n.meta.flag);
          this.visible = !n.meta.flag//flag是true的时候，导航不可见 undefined(false) 可见
        },
        immediate:true//立即监控
      }
    },
    methods:{
      changeList(type){
        //编程式导航  //this.$router this.route
        console.log(this.$router)
        // this.$router.push('/list/'+type)//改变url /list/users /list/goods
        this.$router.push({"name":"list",params:{type},query:{k:Date.now()}})//这种方式
        //路由跳转到 name叫 list的路由对象,params 参数传递过去，方便传多个值 
        //对应的路由的path /list
        //push({name:xxx,params:{...}}) 不能用path 替换name
      },
       //根据切换到的路由(to.path)改变标题栏中的标题
      changeTitle(path){
        // console.log(path)
        switch(path){
          case '/Home':document.title='首页';break;
          case '/category/phone':
          case '/category/tool':document.title='分类';break;
          case '/shopping':document.title='购物车';break;
          case '/user':document.title='用户';break;
          default:
        }
      }
    }
  }
</script>
<style lang='scss'>
@import '~@/assets/css/reset.css';
$bgcolor:#fff;
@mixin radius($r:5px){
  border-radius:$r;
}
.set1{
  display:flex;
  width:100%;
}
.footer{
  position:fixed;
  height:1.2rem;
  line-height: 1.2rem;
  bottom:0;
  @extend .set1;
  background:$bgcolor;
  @include radius(15px);
  li{
    flex:1;
    text-align: center;
  }
}


// ul.footer{
//   display: flex;
//   width:100%;
// }

// ul.footer li{
//   flex:1;
//   /* justify-content: content; */
//   /* text-align: center; */
//   text-align: center;
//   background:$bgcolor;
// }

.router-link-active{
  background:red;
  // color:red
}

// .v-enter{
//   transform: translateX(-100%);
// }
// .v-enter-active,v-leave-active{
//   transition:all 300ms;
// }
// .v-enter-to{
//   transform:translateX(0%)
// }
// .v-leave-to{
//   transform:translateX(100%)
// }
</style>
