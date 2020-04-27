<template>
  <div id="app">
      <button @click="getTypeList('user')">
          users
      </button>
      <button @click="getTypeList('goods')">
          goods
      </button>

      <List01 :list="list" v-if='list.length'/>
      <MySwiper01 :banners="banners" v-if='banners.length'></MySwiper01>
  </div>
</template>
<script>
import List01 from '@/components/List01'
import MySwiper01 from './components/MySwiper01'
import {getData,getSwiperList} from '@/api'
export default {
    name:'App',
    components:{
        List01,MySwiper01
    },
    data(){
        return {
            list:[],
            banners:[]
        }
    },
    created(){
        this.getTypeList('users');
        getSwiperList().then((res)=>{
            this.banners = res.data.data.banners;
        })
    },
    methods:{
        getTypeList(type){
            getData(type).then((res)=>{
                if(res.data.code === 200){
                    this.list = res.data.data.list
                }
            })
        }
    }
};
</script>
<style>
</style>
