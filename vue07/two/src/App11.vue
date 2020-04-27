<template>
    <div id="app">
        <button @click="getTypeList('user')">users</button>
        <button @click="getTypeList('goods')">goods</button>
        <!-- v-if数据回来了，才渲染组件，没写v-if 先渲染一次空数组，等数据回来了，再次更新视图，又渲染了一次组件 -->
        <List :list="list" v-if='list.length'/>
        <MySwiper :banners="banners" v-if="banners.length"/>
    </div>
</template>

<script>

import List from '@/components/List'
import MySwiper from './components/MySwiper'
import {getData,getSwiperList} from '@/api'
export default {
    name:'App',
    components:{
        List,MySwiper
    },
    data(){
      return {
        list:[],//存储请求列表
        banners:[]
      }
    },
    created(){//发了一次请求，组件渲染了两次，刚一加载渲染一次，数据回来了，又渲染一次，用v-if后，只渲染一次
      this.getTypeList('users');//坑！异步组件传值的问题，因为刚加载不会等待数据回来后，在进行传值
      getSwiperList().then((res)=>{
        // console.log(res)
        this.banners = res.data.data.banners;
      })
    },
    methods:{
      getTypeList(type){//调用 getData获取列表存储在当前组件的list数组中
        getData(type).then((res)=>{
          if(res.data.code === 200){
            this.list = res.data.data.list
          }
        })
      }
    }
}
</script>

<style>

</style>