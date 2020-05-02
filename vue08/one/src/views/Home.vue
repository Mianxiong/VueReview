<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "Home",
  mounted() {
    new Swiper(".swiper-container", { loop: true });
  },
  components: {}
};
</script>
