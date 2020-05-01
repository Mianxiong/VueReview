<template>
  <div id="app">
    <!-- <router-link to='/list/users'>users</router-link>
      <router-link to='/list/goods'>goods</router-link> -->
    <button @click="changeList('users')">users</button>
    <button @click="changeList('goods')">goods</button>
    <router-view/>
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
</style>
