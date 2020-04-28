<template>
  <div id="app">
    <router-view/>
    <router-view name='demo'></router-view>
    <ul class="footer">
      <li>
        <router-link to='/'>首页</router-link>
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

<style>
@import '~@/assets/css/reset.css';
.footer{
  position:fixed;
  bottom:0;
}


ul.footer{
  display: flex;
  width:100%;
}

ul.footer li{
  flex:1;
  /* justify-content: content; */
  text-align: center;
  
}

.router-link-exact-acitve{
  background:#ccc;
  color:red
}
</style>
