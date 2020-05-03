<template>
  <div>商品的列表
      <ul>
          <li v-for="item in goods" :key='item.id'>{{item.mz}}</li>
      </ul>

  </div>
</template>

<script>
export default {
    created(){
        //调用仓库里的actions里的getList方法
        this.$store.dispatch('getList')
    },
    computed:{
        goods(){
            return this.$store.state.goods
        }
    }
}
</script>

<style>

</style>