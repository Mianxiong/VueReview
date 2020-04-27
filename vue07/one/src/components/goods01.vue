<template>
    <ul>
        <li v-for="item in list" :key='item.id'>{{item.mz}}</li>
    </ul>
</template>
<script>
    import {getData} from '@/api'
    export default{
        data(){
            return{
                list:[]//保存请求回来的列表
            }
        },
        created(){
            getDate('goods')//把axios请求的过程，放在getData方法里了
            .then(res=>{
                if(res.data.code === 200){
                    this.list = res.data.data.list;
                }
            })
        }
    }
</script>
<style>
</style>