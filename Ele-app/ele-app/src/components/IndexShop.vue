<template>
  <section class="index-container">
      <div class="index-shopInfo">
          <!-- 左侧图片 -->
            <div class="log_container">
                <img :src="restaurant.image_path" alt="">
            </div>
          <!-- 右侧内容 -->
          <div class="index_main">
              <!-- 第一行 品牌 -->

              <!-- 第二行 星级 -->

              <!-- 第三行 配送 -->
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name:"IndexShop",
    props:{
        restaurant:Object
    }
}
</script>

<style>

</style>