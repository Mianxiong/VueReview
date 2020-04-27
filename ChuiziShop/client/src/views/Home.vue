<template>
  <div>
    <header>
      <figure class="logo">
        <img src="favicon.ico" alt />
      </figure>
    </header>
    <section class="poss search-bar-wrap">
      <section class="search-bar">
        <aside class="iconfont icon-search search-icon"></aside>
        <aside class="search-val">请输入搜索关键字</aside>
      </section>
    </section>
    <section >
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for='(item,index) in banners' :key='index' class="swiper-slide">
            <img :src="item.image" alt="">
          </div>
        
        </div>
      </div>
    </section>
      
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import "swiper/css/swiper.css";
// @ is an alias to /src
import Swiper from 'swiper';
import {getSwiperList} from '@/api'
export default {
  name: "Home",
  data(){
    return{
      banners:[]
    }
  },
  components: {

  },
  mounted(){
    getSwiperList().then((res)=>{
      console.log(res)
      if(res.data.code == 0){
        console.log('22332')
        console.log(res.data.data[0].list)
        this.banners = res.data.data[0].list;
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{loop:true})
        })
      }
    }).catch(()=>{
      console.log('111')
    })
    
  }
};
</script>
<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1.7rem;
  box-sizing: border-box;
}
header .logo img {
  width: 0.9rem;
  height: 0.9rem;
}
.search-bar-wrap.poss {
  position: sticky;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 6;
  padding: 0.4rem;
}

.search-bar-wrap {
  width: 100%;
  max-height: 2.4rem;
  background: #fff;
  cursor: pointer;
  transition: position 0.3s;
}

.search-bar-wrap .search-bar {
  padding: 6px 10px;
  min-height: 1.5rem;
  background: #f5f5f5;
  border: 1px solid #e9e9e9;
  border-radius: 1.55rem;
  display: flex;
  align-items: center;
}

.search-bar-wrap .search-icon {
  flex-shrink: 0;
  /* width:.75rem;
  height: .75rem;
  margin-top:1px; */
  font-size: 0.75rem;
  color: #9a9a9a;
}

.search-bar-wrap .search-val {
  color: #b3b3b3;
  font-size: 0.6rem;
  margin-left: 0.4rem;
}
</style>
