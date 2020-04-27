<template>
  <div>
      {{list.length}}
      <ul>
          <li v-for="item in list" :key="item.id">{{item.mz}}</li>
      </ul>
  </div>
</template>
<script>
export default {
    props:['list']
};
</script>
<style >
</style>
