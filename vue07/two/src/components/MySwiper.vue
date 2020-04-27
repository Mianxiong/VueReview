<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='item in banners' :key='item.id'>{{item.imageUrl}}<img :src="item.imageUrl"></div>
        
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  props: ["banners"],
  mounted() {
    //有节点 数据回来时，加载已经结束了，所以 Swiper实例化就有问题，用户感觉轮播图划不动
    //v-if 可以保证 mounted的时候，数据回来了
    new Swiper(".swiper-container",{loop:true});
  }
};
</script>
<style >
    img{
        width:100%
    }
</style>
