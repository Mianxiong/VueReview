<template>
  <div id="app">
    <van-button type="primary" @click="fun">test</van-button>
    <van-button type='primary' @click="close">close</van-button>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import { getFilm } from "@/api";
import { Toast } from 'vant';
export default {
  data() {
    return {
      path: require("./assets/logo.png")
    };
  },
  created() {
    getFilm(2).then(res => {
      console.log(res);
    });
  },
  methods: {
    fun() {
      this.toast = Toast.loading({
        duration:0,//显示的时间 0 持续显示
        message: "加载中...",
        forbidClick: false//禁止点击
      });
    },
    close(){//关闭Toast
      this.toast.clear()
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
