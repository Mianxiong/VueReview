<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banners" :key="item.id">
            <img :src="item.imageUrl"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { getSwiperData } from "@/api";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      banners: [] //存储轮播图数据
    };
  },
  mouted() {
    getSwiperData().then(res => {
      if (res.data.code === 200) {
        this.banners = res.data.data.banners;
        console.log(res.data.data.banners);
        //nextTick 延迟执行回调函数，直到dom就绪
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            loop: true
          });
        });
      }
    });
  }
};
</script>
<style >
img {
  width: 100%;
}
</style>
