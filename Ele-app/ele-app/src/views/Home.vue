<template>
  <div class="home">
    <div class="header">
      <div class="address_map">
        <i class="fa fa-map-marker"></i>
        <span>{{address}}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
      <div class="shop_search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'home',
    computed:{
      address(){
        return this.$store.getters.address;
      }
    }
}
</script>

<style scoped>
.home{
  width:100%;
  height:100%;
  overflow:auto;
  box-sizing:border-box;
}
.header{
  background-color:#009eef;
  padding:16px;
}
.header .address_map{
  color:#fff;
  font-weight:bold
}
.address_map i{
  margin: 0 3px;
  font-size:18px;
}
.address_map span{
  display:inline-block;
  width:80%;
  /* overflow 属性规定当内容溢出元素框时发生的事情。  如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 */
  overflow:hidden;
  /* 文本不进行换行 */
  white-space:nowrap;
  /* text-overflow 属性规定当文本溢出包含元素时发生的事情。 显示省略符号来代表被修剪的文本。 */
  text-overflow:ellipsis
}
.header .shop_search{
  margin-top:10px;
  background-color:#fff;
  padding:10px 0;
  border-radius:4px;
  text-align:center;
  color:#aaa;
}
</style>