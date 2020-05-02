1.安装sass node-sass
2.权限路由


--------------------------------------------

vuex 是一个状态管理工具 
store （仓库是唯一的）
1.存数据
2.取数据
3.改数据

npm i vuex --save
1)import Vuex from 'vuex'
2)Vue.use(Vuex)
3)实例化
new Vuex.Store({
    state:{
        n:666
    },
    mutations:{
        Xxx(state,payload){
            state.n+=payload
        }
    }
})

4.new Vue({
    ...
    store,
    ...
})
取数据
    computed:{
        属性(){
            return this.$store.state.变量
        }
    }


同步改变数据：
this.$store.commit("mutation里的方法名",参数)
getters:{
        //相当于仓库里的计算属性
        money(state){
            return state.n>1000?"资金充足":"请充值";
        }
        //属性(state){
        //return 计算属性的值
        //}
    },

vuex版的todolist


