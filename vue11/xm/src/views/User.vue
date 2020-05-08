<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <p v-for="item in list" :key="item">{{item}}</p>
    </van-list>
  </div>
</template>

<script>
import {List} from 'vant'
console.log(List)
export default {
  data() {
    return {
      list: [],
      loading: false, //不是正在加载，可以发请求
      finished: false //表示是否加载完成了
    };
  },
  methods: {
    onLoad() {
        this.loading = true;
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>

<style>
</style>