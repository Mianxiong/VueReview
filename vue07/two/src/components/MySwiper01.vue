<template>
  <div>
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in banners" :key='item.id'>
                  {{item.imageUrl}}
                  <img :src="item.imageUrl">
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
    props:['banners'],
    mounted(){
        new Swiper(".swiper-container",{loop:true})
    }
};
</script>
<style>
    img{
        width:100%
    }
</style>
