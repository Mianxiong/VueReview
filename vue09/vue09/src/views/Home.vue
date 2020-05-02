<template>
  <div class="home">
    {{n}}  {{m}}
    <button @click="change">+</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
   
  },
  computed:{
    n(){
      console.log(this.$store)
      return this.$store.state.n//取store里的state的n变量的值
    },
    m(){
      return this.$store.getters.money//取store里的getters的money计算属性
    }
  },
  methods:{
    change(){
      //让store里的state里的n值+1
      this.$store.commit("changeN",5)//调用store里的mutations里的changeN方法
    }
  }
}
</script>
