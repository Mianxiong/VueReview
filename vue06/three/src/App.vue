<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Tab :title="['aa','bb','cc']" :content="['aa的内容','bb的内容','cc的内容']"></Tab> -->
    
    <!-- <Demo @msg="receive">
      <template #default>
        <span>用户名</span>
      </template>
      <template v-slot:btn="{str}">
        <button @click="add(str)">add</button>
      </template>
    </Demo>
    {{list}} -->
  {{goodsList}}{{usersList}}
    <Hw :title="['用户','商品']" :goods="goodsList" :users="usersList"></Hw>
    <!-- {{goodsList}}
    {{usersList}} -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Tab from './components/Tab.vue'
// import Demo from './components/Demo.vue'
import Hw from './components/Hw.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // Tab
    // Demo
    Hw
  },
  methods:{
    // receive(s){
    //   this.list.push(s)
    // },
    add(s){
      //插槽中的按钮事件处理
      this.receive(s)
    }
  },
  
  data(){
    return {
      goodsList:[],
      usersList:[]
    }
  },
  created(){
    
      axios.get("http://rap2.taobao.org:38080/app/mock/226329/api/goods").then((res)=>{
      // console.log(res.data.data.list)
      this.goodsList = res.data.data.list
    })
    axios.get("http://rap2.taobao.org:38080/app/mock/226329/api/users").then((res1)=>{
      this.usersList = res1.data.data.list
      // console.log(res1.data.data.list)
    })
   
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
