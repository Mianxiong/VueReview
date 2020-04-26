<template>
    <div>
        <div class="title">
            <span v-for="(item,index) in title" :key="index">{{item}}</span>
        </div>
        <!-- {{content}} -->
        <component :is="coms[curIndex]" class="box"></component>
    </div>
    
</template>
<script>
    export default{
        props:['title','goods','users'],
        data(){
            return{
                coms:[],
                curIndex:0,
                content:[this.goods,this.users]
            }
        },
        
        created(){
            console.log(this.title)
            console.log(this.goods)
            console.log(this.users)
            this.coms = this.content.map((item)=>{
                return {template:`<div>${item}</div>`}
            })
        }
    }
</script>
<style>
    .title{
        /* width: 300px; */
        height: 30px;
    }
    .title span{

        line-height: 30px;
        border:1px solid #ccc;
    }

</style>