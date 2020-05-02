<template>
  <div>
      <input type="text" v-model="username">
      <input type="password" v-model="password">
      <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },


    methods:{
        login(){
            if(this.username === "admin" && this.password === '123'){//登陆成功
                sessionStorage.setItem('user',this.username)//认为已经登陆了
                //？ redirect=/about
                var page = this.$route.query.redirect;//取得查询字符串参数
                if(page){
                    this.$router.push(page)//跳转到登陆前要进入的路由对应的组件
                }
                 else{//如果直接进去登陆页面
                     this.$router.push('/')//+
                 }
            }
        }
    }

     
}
</script>

<style>

</style>