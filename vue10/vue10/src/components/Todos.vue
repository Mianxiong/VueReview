<template>
  <div>
    <input type="checkbox"  v-model='finish'>
    <input type="text" v-model="task" @keyup.enter="add" />
    <ul>
      <li v-for="(item,index) in todos" :key="item.id">
        <input type="checkbox" @change="change(index)" :checked='item.finish'/>
        {{item.task}}
        <button @click="remove(index)">删除</button>
      </li>
    </ul>
    已经完成{{count}}项
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
     
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    count() {
      return this.$store.getters.finishCount;
    },
    finish:{
        get(){
            return this.$store.getters.getTodosFinish;
        },
        set(v){
            this.changeAll(v)
        }
        
    }
  },
  methods: {
    add() {
      //调用仓库里的add方法
      if (this.task === "") return;
      this.$store.commit("add", this.task);
      this.task = ""; //清空文本框
    },
    remove(index) {
      //调用仓库里的remove方法
      this.$store.commit("remove", index);
    },
    change(index) {
        console.log(index)
      //调用仓库里的change方法 目的保存finish的值
      this.$store.commit("change", index);
    },
    changeAll(flag){
        console.log(flag)
        this.$store.commit('changeAll',flag);
    }
  }
};
</script>

<style>
</style>