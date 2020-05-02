<template>
  <div>
      List组件
      <ul>
          <li v-for='item in list' :key='item.id'>{{item.mz}}</li>
      </ul>
  </div>
</template>

<script>
// import {getList} from '@/api'
export default {
    // created(){//只是加载时候可以拿到一次
    //     console.log(this.$route.params.type,111)
    // },
    data(){
        return{
            list:[]
        }
    },
    beforeRouteEnter(to,from,next){//路由组件切换之前调用
        // console.log(this.list)//拿不到数据
        next((vm)=>{
            //beforeRouteEnter执行比beforeCreate早，所以直接拿不到数据
            //next()方法的回调函数里，可以拿到组件的实例，可以通过实例拿到数据
            console.log(vm.list)
            console.log(to.params.type)
        })
    },
    beforeRouteUpdate(to,from,next){//监听路由的变化
        console.log(to.params.type)
        next()
    },
    beforeRouteLeave(to,from,next){//退出路由组件之前做一些事情
        var a = Math.ceil(Math.random()*10) //0-10
        var b = Math.ceil(Math.random()*10)
        if(prompt(`${a}*${b}=`)==a*b){
            next()
        }
        else{
            next(false)
        }
        
    },
    // watch:{//监听路由参数的变化 在组件没有卸载的情况下
    //     $route:{
    //         handler(n){//n相当于this.$route
    //         console.log(n.params)
    //         console.log(n.query)
    //             getList(n.params.type).then((res)=>{
    //                 if(res.data.code === 200){
    //                     this.list = res.data.data.list;
    //                 }
    //             })
    //             // console.log(n.params.type,222)
    //         },
    //         immediate:true

    //     },
         
        
       
    // }
}
</script>

<style>

</style>