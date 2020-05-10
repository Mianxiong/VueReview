<template>
  <div class="tabbar">
      <router-link class="tab-item" v-for="(item,index) in data" :key="index" :to="item.path" active-class="is-selected">
      <div class="tab-item-icon">
            <i :class="'fa fa-'+item.icon"></i>  
        </div>  
        <div class="tab-item-label">{{item.title}}
            </div>  
      </router-link>
  </div>
</template>

<script>
export default {
    name:'tabbar',
    props:{
        data:Array,

    }
}
</script>

<style scoped>
.tabbar{
    height:45px;
    box-sizing:border-box;
    width: 100%;
    position:fixed;
    bottom:50px;
    background-image:linear-gradient(
        1800deg,
        #d9d9d9,
        #d9d9d9 50%,
        transparent 0
    )
    
}
</style>