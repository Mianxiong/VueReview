<template>
    <div>
        <div class="title">
            <span v-for='(item,index) in title' :key='index' @click='curIndex=index' :class="{'active':index===curIndex}">{{item}}
                
            </span>
        </div>
        <component :is='coms[curIndex]' class = 'box'></component>
    </div>
</template>
<script>
    export default{
        props:["title","contents"],
        created(){
            this.coms = this.contents.map((item)=>{
                return {
                    template:`<div>${item}</div>`
                }
            })
        },
        data(){
            return {
                coms:[],//存储内容的组件数组
                curIndex:0
            }
        }
    }
</script>
<style >
    .box{
        border:1px solid #ccc;
        width:300px;
        height:150px;
    }
    .title{
        width:300px;
        height:30px;
    }
    .title span{
        display:inline-block;
        width:80px;
    }
    .active{
        background:#ccc;
        color:blue
    }
</style>