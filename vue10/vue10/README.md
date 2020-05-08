1.异步方法(actions)
    异步方法(context,payload){
        异步成功的回调里
        context.commit('mutations里的同步方法',传参)
    }
    this.$store.dispatch('actions里的异步方法','参数')

异步方法-->调用同步方法改变状态

异步的方法放到actions里面，同步的方法放到mutations里面

2.vue-router
    全局守卫 beforeEach afterEach
    路由独享的守卫 beforeEnter
    组件内的守卫 beforeRouteEnter
                beforeRouteUpdate
                beforeRouteLeave
3.vuex当中有几个对象 5 
state getters mutations actions modules  
    