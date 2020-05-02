import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var store = new Vuex.Store({
    state:{
        n:666
    },
    getters:{
        //相当于仓库里的计算属性
        money(state){
            return state.n>1000?"资金充足":"请充值";
        }

    },
    mutations:{
        //存同步的方法，改state
        changeN(state,payLoad){
            //state 就是store里的state payLoad 参数
            state.n+=payLoad;
        }
    }
})
export default store;