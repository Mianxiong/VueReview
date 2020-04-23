1.用mouseover的话子元素会响应，mouseenter不会
*** 2.动态绑定class
:class="{'active':curIndex>=n}"


1.父组件给子组件传值
没有用v:bind jd='80' 传的是字符串 
1)<组件 属性="传给子组件的值"></组件>
    如果 v-bind:属性='识别数据类型和变量' 不用v-bind 传递的都是字符串
2)子组件通过props选项 props:['属性']
props:{
    属性:类型
}
props:{
    属性:{
        type:类型,
        required:true 必须传递这个属性
        default:值 设置默认值 
        validator(值){
            return 布尔表达式
        }
    }
}
3)父组件传给子组件的值不能更改，单向数据流
可以把这个值赋值给子组件data里的变量，可以更改子组件里data里的那个变量

2.props验证



