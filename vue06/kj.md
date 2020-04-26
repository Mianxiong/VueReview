1.@vue/cli vue-V
    cnpm i @vue/cli -g vue -V
    vue create 项目的名字
    babel es6-->es5
    eslint 语法格式检查工具

    cd 项目的名字
    npm run serve

2.脚手架基本的目录结构
依赖是装在node_modules目录下
public 静态资源目录
src 源码目录
.gitignore 上传git仓库时忽略的文件
babel.config.js babel的配置文件
readme 项目的说明文件
package.json 包的管理文件
main.js 入口文件 

3.单文件组件(.vue) vue-loader 把单文件组件解析为标准的vue组件
    <template></template>
    <script></script>
    <style></style>
4.es6模块化 
    导入 import 变量名 from '组件的路径'
    导出 export default 
5.脚手架有一个“热更新”能力 (webpack-dev-server 8080)也就是改完东西后会自动刷新
6.style scoped 属性，加上后，样式只对当前组件生效
原理：不同的组件的每个元素加了不同的哈希值，
7.vetur 插件 
8.改项目的配置文件
在项目根目录下建立一个Vue.config.js文件
写配置，如：
     module.exports = {
        devServer: {
            overlay: { //让我们的浏览器关闭掉遮盖层的错误代码提示
                warnings: false,
                errors: false
            }
    },
    lintOnSave: false //直接关闭eslint检查
}

保存后，重新启动项目

9.vueloader 解析单文件组件(.vue)
    babel-loader es6-->es5
    eslint

10.脚手架 @ 代表 "src" alias 别名

11.组件
    定义和使用 
    传值
    生命周期的钩子函数
    动态组件
    插槽
    
    https://blog.csdn.net/wxl1555/article/details/83187647

12.以前 局部组件的组件的声明
var Demo = {
    template:'<div>demo</div>'
}
解决方案
    配置项目 在项目的根目录下建立一个vue.config.js
    
