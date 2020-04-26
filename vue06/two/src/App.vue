<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test/>
    <Demo/>
     -->
     <Tab :title="['aa','bb','cc']" :contents="['aa的内容','bb的内容','cc的内容']"/>
  </div>
</template>

<script>
// var Demo = {
//   template:'<div>demo</div>'
// }ab
// import HelloWorld from './componesnts/HelloWorld.vue'
// import Test from '@/components/Test'//导入组件
import Tab from '@/components/Tab'  //导入组件
export default {
  name: 'App',//组件做递归渲染一个数组，
  components: {
    // HelloWorld
    Tab
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
