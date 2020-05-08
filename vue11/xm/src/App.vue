<template>
  <div id="app">
      
      <router-view></router-view>
      <ul class="tabbar" v-show="visible">
          <li>
              <router-link to='/film'>影片</router-link>
          </li>
          <li>
              <router-link to='/cinema'>影院</router-link>
          </li>
          <li>
              <router-link to='/news'>咨询</router-link>
          </li>
          <li>
              <router-link to='/user'>用户</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            visible:true//控制tabbar 是否可见
        }
    },
    watch:{
        $route:{//监控路由的变化
            handler(n){
                this.visible = !n.meta.flag
            }
        }
    }
}
</script>

<style lang="scss">
@import "~@/assets/css/reset.css";
    .tabbar{
        position: fixed;
        bottom: 0;
        display: flex;
        width: 100%;
        li{
            flex:1;
            text-align: center;
            
        }
    }
</style>