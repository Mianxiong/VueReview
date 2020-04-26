<template>
    <div>
        <div class="title">
        <span v-for="(item,index) in title" :key="index" @click="curIndex=index" :class="{'active':index===curIndex}">
            {{item}}
        </span>
        </div>
        <component :is="coms[curIndex]" class="box"></component>
    </div>
    
</template>
<script>
    export default{
        props:["title","content"],
        data(){
            return{
                coms:[],
                curIndex:0
            }
        },
        created(){
            //aa的内容 {template:"<div>aa的内容</div>"}
            //bb的内容 {template:"<div>bb的内容</div>"}
            this.coms = this.content.map((item)=>{
                return {
                    template:`<div>${item}</div>`
                }
            })
            console.log(this.content,this.coms)
        }
    }
</script>
<style >
    .title{
        width:300px;
        height: 30px;
        line-height: 30px;
    }
    .title span{
        /* width: 30px; */
        /* height: 150px; */
        border:1px solid #ccc;
        text-align: center;
    }
    .active{
        background:red
    }
    .box{
        width: 300px;
        height: 100px;
        border:1px solid #ccc;
    }
</style>