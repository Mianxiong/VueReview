<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Tab :title="['aa','bb','cc']" :content="['aa的内容','bb的内容','cc的内容']"></Tab> -->
    <Demo @msg="receive">
      <template #default><!--匿名插槽名字-->
        <span>用户名</span>
      </template>
      <template v-slot:btn="{str}">
        <button @click="add(str)">add</button>
      </template>
    </Demo>
    {{list}}
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Tab from './components/Tab.vue'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // Tab
    Demo
  },
  methods:{
    receive(s){
      this.list.push(s)
    },
    add(s){
      //插槽中的按钮事件处理
      this.receive(s)
    }
  },
  data(){
    return {
      list:[]
    }
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
