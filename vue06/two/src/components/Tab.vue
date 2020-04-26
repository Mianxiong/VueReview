<template>
  <div>
    <div class="title">
      <span v-for="(item,index) in title" :key="index" @click="curIndex=index" :class="{'active':index===curIndex}">{{item}}</span>
    </div>
    <component :is="coms[curIndex]" class="box"></component>
  </div>
</template>
<script>
export default {
  props: ["title", "contents"], //接收父组件传过来的值
  //把content数组里的每一项转为一个组件
  created(){
      //aa的内容 {template:"<div>aa的内容</div>"}
      //bb的内容 {template:"<div>bb</div>"}
    //   this.coms = this.contents.map((item)=>{//item aa的内容 bb的内容
    //     return{//返回值已经是一个组件构成的数组了
    //         template:`<div>${item}</div>`
    //     }
    //   })
      for(var i=0;i<this.contents.length;i++){
          this.coms.push({
              template:`<div>${this.contents[i]}</div>`
          })
      }
      console.log(this.content,this.coms)
  },
  data(){
      return {
          coms:[],//存储内容的组件数组
          curIndex:0//当前项目的索引
      }
  }
};
</script>
<style >
    .box{
        border:1px solid #ccc;
        width:300px;
        height: 150px;
    }
    .title{
        width:300px;
        height:30px;
    }
    .title span{
        display: inline-block;
        width: 80px;
    }
    .active{
        background:#ccc;
        color:blue
    }
</style>
