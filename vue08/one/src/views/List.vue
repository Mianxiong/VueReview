<template>
  <div>
      <ul>
          <li v-for='item in list' :key='item.id'>{{item.mz}}</li>
      </ul>
  </div>
</template>

<script>
import {getList} from '@/api'
export default {
    // created(){//只是加载时候可以拿到一次
    //     console.log(this.$route.params.type,111)
    // },
    data(){
        return{
            list:[]
        }
    },
    watch:{//监听路由参数的变化 在组件没有卸载的情况下
        $route:{
            handler(n){//n相当于this.$route
            console.log(n.params)
            console.log(n.query)
                getList(n.params.type).then((res)=>{
                    if(res.data.code === 200){
                        this.list = res.data.data.list;
                    }
                })
                // console.log(n.params.type,222)
            },
            immediate:true

        },
         
        
       
    }
}
</script>

<style>

</style>