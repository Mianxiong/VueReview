<template>
  <div>
    <div class="nav">
      <ul>
        <li>
          <router-link to="/film/nowPlaying">正在热映</router-link>
        </li>
        <li>
          <router-link to="/film/comingSoon">即将上映</router-link>
        </li>
      </ul>
      <div class="navLine" :style="{transform:`translateX(${style})`}"></div>
    </div>
    <ul>
      <li v-for="item in films" :key="item.filmId">
        <img :src="item.poster" alt width="100" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getFilm } from "@/api";
export default {
  data() {
    return {
      films: [] //电影列表
    };
  },
  computed:{
      style(){
          return this.$route.path === '/film/nowPlaying'?"0":"260%";
      }
  },
  watch: {
    $route: {
      handler(n) {
        //n 相当于this.$route
        console.log("type", n.params);
        //type 1是正在上映的列表 type是 2即将上映的列表
        var type = n.params.type === "nowPlaying" ? 1 : 2;
        getFilm(type).then(res => {
          console.log(res);
          this.films = res.data.films;
        });
      },
      immediate: true
    }
  }
};
</script>

<style lang='scss'>
.nav {
  ul {
    display: flex;
    border-bottom:1px solid #ccc;
    li {
        flex:1;
        a{
            display: block;
            width:1.4rem;
            margin:auto;
            text-align: center;
        }
    }
  }
  .navLine{
      border-bottom:2px solid red;
      width:1.4rem;
      position:relative;
      left:1.2rem;
      transition:all 500ms
  }
  
}
</style>