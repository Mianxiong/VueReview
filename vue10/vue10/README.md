1.异步方法(actions)
    异步方法(context,payload){
        异步成功的回调里
        context.commit('mutations里的同步方法',传参)
    }
    this.$store.dispatch('actions里的异步方法','参数')

异步方法-->调用同步方法改变状态

异步的方法放到actions里面，同步的方法放到mutations里面