1.





2.为了不再各个组件里重复引入axios
    可以在入口文件 main.js
    import axios from 'axios'
    Vue.prototype.$axios=axios
    在组件里就可以使用this.$axios....发请求了

3.把请求的所有方法，都封装起来，需要请求时调用

4.异步的数据的传值
热更行不会让mounted重新执行，一定要保证数据回来了


v-if就是在等异步数据请求

父组件请求数据 然后把数据传给子组件 子组件拿到数据以后把图片放到子组件里 然后父组件渲染子组件放到页面上 这样的完毕再使用这个组件


5.$nextTick
this.$nextTick(callback)
nextTick 延迟执行回调函数，直到dom就绪

6.请求中的跨越问题

后端 cors
设置cors跨域
res.setHeader('Access-Control-Allow-Origin','*')

前端 正向代理

7.vues.config.js

作业：cui'zi
### 下载速盘X版，9块钱250G的下载量

