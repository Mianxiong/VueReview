import Vue from 'vue'
import Vuex from 'vuex'
import {getData} from '@/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {//存放数据的对象
    //从本地存储取todos列表，如果取不到，就用空数组
    todos:JSON.parse(sessionStorage.getItem("todos"))||[],
    goods:[]//存储商品的列表
  },
  mutations: {//存放同步修改数据的方法
    add(state,payload){
      //添加项目
      state.todos.push({
        id:Date.now(),
        task:payload,
        finish:false
      })
      //对象不能直接存储到本地，得把它变成字符串，把对象转为字符串的方法JSON.stringigy
      sessionStorage.setItem('todos',JSON.stringify(state.todos)) //存储到本地
    },
    remove(state,index){
      state.todos.splice(index,1);
      sessionStorage.setItem('todos',JSON.stringify(state.todos))//存储到本地
    },
    change(state,index){
      state.todos[index].finish = !state.todos[index].finish
      sessionStorage.setItem('todos',JSON.stringify(state.todos))//存储到本地
    },
    changeAll(state,flag){
      state.todos.forEach(item => {
          item.finish = flag;
          
      });
      sessionStorage.setItem('todos',JSON.stringify(state.todos))//存储到本地
    },
    changeGoodsList(state,list){
      //list请求回来的数据列表
      state.goods = list
    }
  },
  actions: {//存放异步修改数据的方法
    getList({commit}){//context是个上下文对象

      getData().then((res)=>{//getData是个异步操作,所以含有这个异步操作的放法getList要放在actionscommit里
        if(res.data.code === 200){
          // console.log(res.data.data.list)
          //异步操作成功后，调用同步的方法改变状态
          commit("changeGoodsList",res.data.data.list)
        }
      })
    }
  },
  getters:{//仓库里的计算属性
    finishCount(state){//统计完成的个数
      return state.todos.filter((item)=>item.finish).length
    },
    getTodosFinish(state){
      return state.todos.every((item)=>item.finish)
    }
  },
  modules: {//分模块
  }
})
