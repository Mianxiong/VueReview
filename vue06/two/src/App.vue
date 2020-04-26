<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test/>
    <Demo/>
     -->
     <!-- <Tab :title="['aa','bb','cc']" :contents="['aa的内容','bb的内容','cc的内容']"/> -->
     <Demo @msg = 'receive'>
        <!-- <p>123</p>
        <input type="text"> -->
        <!-- <span slot='left'>用户名</span><button slot="right">add</button> -->
        <!-- #default 匿名插槽的名字       v-slot:(#) -->
        <template #left> 
          <span>用户名</span>
        </template>
        <template v-slot:right="{str}"><!--str 子组件中文本框的内容  :right="c" c.str--> 
          <button @click="add(str)">add</button>
        </template>
     </Demo>
    {{list}}
  </div>
</template>

<script>
// var Demo = {
//   template:'<div>demo</div>'
// }ab
// import HelloWorld from './componesnts/HelloWorld.vue'
// import Test from '@/components/Test'//导入组件
// import Tab from '@/components/Tab01'  //导入组件
import Demo from './components/Demo'
import axios from 'axios'
export default {
  name: 'App',//组件做递归渲染一个数组，
  components: {
    // HelloWorld
    // Tab
    Demo
  },
  data(){
    return {
      list:[]
    }
  },
  methods:{
    receive(s){
      this.list.push(s)//文本框按回车键 添加文本框的内容到父组件的列表中
    },
    add(s){//插槽中的事件处理
      this.list.push(s)
    }
  },
  created(){
    axios.get('http://rap2.taobao.org:38080/app/mock/226329/api/users').then((res)=>{
      console.log(res);
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
