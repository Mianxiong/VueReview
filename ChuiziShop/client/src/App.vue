<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      
        
          <router-link to="/" class="nav-item"><i class='iconfont icon-icon icon'></i><span>首页</span></router-link>
       
       
          <router-link to='/type' class="nav-item"><i class="iconfont icon-fenlei icon"></i><span>分类</span></router-link>
        
       
           <router-link to='/car' class="nav-item"><i class="iconfont icon-gouwuche icon"></i><span>购物车</span></router-link>
        
        
         <router-link to='/person' class="nav-item"><i class="iconfont icon-gerenzhongxin icon"></i><span>个人中心</span></router-link>
        
     
      
      <!-- <router-link to="/about">About</router-link> -->
      
     
      
    </div>
    
  </div>
</template>

<style>
#nav{
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  z-index:99;
  display:flex;
  width:100%;
  height: 2.7rem;
  padding:0 1.7rem;
  box-sizing: border-box;
  background:#fff;
  box-shadow:0 -11px 32px rgba(0,0,0,.08);
}

#nav .nav-item{
  position:relative;
  flex:1;
  text-align:center;
  cursor:pointer
}

.icon{
  color:#9a9a9a;
  display: block;
  margin:.3rem auto .2rem;
  width:27px;
  height: 27px;
}

.nav-item span{
  color:#9a9a9a;
  display: block;
  font-size:34px;
  font-weight: 700;
  position: relative;
  width: 300%;
  left:-100%;
  transform-origin: 50% 0;
  line-height: .266667rem;
  transform: scale(.33333);
}



</style>
