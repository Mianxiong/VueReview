<template>
  <ul>
      <li v-for='item in list' :key='item.id'>{{item.mz}}</li>
  </ul>
</template>
<script>
// import axios from 'axios'
import {getData} from '@/api'
export default {
  data() {
    return {
      list: [] //保存请求回来的列表
    };
  },
  created() {
    getData('users')
      .then(res => {
        if (res.data.code === 200) {
          this.list = res.data.data.list;
        }
      });
  }
};
</script>
<style>
</style>