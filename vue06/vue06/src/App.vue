<template>
<!-- 必须是单根结构 -->
  <div id="app">
      hello{{n}}<span :class="{'active':n<=10}">{{info}}</span>
      <button @click="inc">+</button>
      <!-- 父组件给子组件进行传值 -->
      <HelloWorld msg='1232344'></HelloWorld>
      <One/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld'//在App 引入HelloWorld组件
import One  from './components/One'

export default {
  data(){
    return{//保证数据是独立的
      n:1
    }
  },
  components:{//HelloWorld注册才能使用
    HelloWorld,
    One
  },
  computed:{
    info(){
      return this.n>10?":)":"积分不足充值吧"
    }
  },
  methods:{
    inc(){
      this.n++
    }
  }
}
</script>
<style  scoped>
  .active{
    color:red;
  }
</style>
