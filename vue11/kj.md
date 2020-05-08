  1.vant (element-ui)
  2.v-if v-show 动态组件 路由 支持transition动画效果
  3.v-model
  <input type='text' v-model='str'>
  双向绑定计算属性
  <input type='checkbox' v-model='cp'/> get set
  双向绑定数组
  <input type='checkbox' :value='v' v-model='arr'/>
  <com v-model='str'/> 双向绑定组件
  v-html  <div v-html='d'></div>

  4.选项 model mixins

  mixins 可以实例公共的数据和方法抽离出来，需要时混入到实例中

  5.组件的传值几种方式
  1)父子组件，通过公用的父组件
  2)vuebus $on $emit ？？
  3)通过router可以进行传值 ？？兄弟组件不是
  4)vuex
  5)本地存储

  6.父传子
    属性 props 不能改的
    验证
      type required validator default ???
    子传父
      this.$emit("事件","数据")
  
  7.生命周期的钩子函数

      初始化阶段
      beforeCreate 运行的最早的，不能拿到数据
      created 能拿到数据，常用来发请求

      beforeMount
      mounted 能够找到节点 ref console.dir(this.$refs.wbk)

      监控到组件里所有数据的变化
      beforeUpdate 
      updated
 
      监控特定数据变化：watch 深度监控用deep 立即监控用immediate

      beforeDestroy
      destroyed

      activated
      deactivated 动态组件相关的 keep-alive

   8.动态组件???
    <component :is="组件名的变量">   keep-alive用于动态组件的缓存

    9.插槽 ???
    <Com>
      插槽里的内容<template v-slot:插槽的名字="通过插槽传过来的变量"></template>
    </Com>

    10.脚手架
      图片
        src a.jpg
        <img src="./a.jpg"/>
        path = "./a.jpg"


        <img :src="path">
        data(){
          return{
            path:require('./assets/logo.png')
          }
        }


 const instance = axios.create({
   baseURL:"https://some-domain.com/api/',
   timeout:1000,
   headers:{'X-Custom-Header':'footer'}
 })  

11.通过开发服务器实现正向代理
 module.exports = {
    devServer:{
        proxy:{
            "/mz":{
                "target":"https://m.maizuo.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/mz":"/"
                }
            }
        }    
    }
}     

12.编程式导航
this.$router({name:'xxx',params:{},query:{}})

13.axios的二次封装
let services = axios.create({
    baseURL: '/mz', //所有请求都会带上axios
    timeout: 1000, //设置超时的时间
    headers:{
        //把每一次请求都要带的请求头，设置一下
        "content-type":"application/json",
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15887703552924872728914","bc":"440100"}`,
    }
})

14.axios的拦截器 interceptors
  request 请求的拦截器
  response 响应的拦截器

15.
//拦截器
services.interceptors.request.use((config)=>{
    console.log(config)
    console.log("请求被拦截了")
    return config
})

16.请求时显示loading，数据回来时关掉loading

17.vant ui安装和按需加载的使用

18.开发阶段 真机测试
手机和电脑是同一个网络，在手机的浏览器上输入npm run serve后显示的这个地址
-Network:http://192.168.0.150:8080/

发布
npm run build dist 传到服务器上

5.项目流程
1)需求分析，产品根据需求出需求文档
2)根据需求文档出原型图，
3)ui根据原型图出设计稿
4)交给开发团队进行开发
  a.根据需求，划分模块
  b.项目估期,各个模块时间总和
  c.根据模块划分责任人
  d.确认接口，后端出接口文档，前端验收接口文档
  e.建立代码仓库，上传项目到代码仓库(svn,git)
  下载项目到本地进行开发，后端一般比前端慢，前端mock数据
  f.后端开发完，前后端联调
 5)交给测试团队，进行测试
 6)交给安全团队
 7)交给运维，上线 

 watch监控路由变化


 1.vant axios的二次封装
 2.上拉加载数据 vant-list




