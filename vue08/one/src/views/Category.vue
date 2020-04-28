<template>
  <div id="category">
      <div class="nav">
          <ul>
              <li><router-link to='/category/phone'>手机数码</router-link></li>
              <li><router-link to='/category/tool'>官网配件</router-link></li>
              
          </ul>
      </div>
      <div class="categoryList">
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
    .category{
        display: flex;
        position:fixed;
        top:0;
        right: 0;
        left:0;
        bottom:0;
        .nav{
            width:2rem;
        }
        .categoryList{
            flex:1;
            background:#eee
        }
    }
</style>
