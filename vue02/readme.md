1.v-model的修饰符

2.计算属性的双向绑定
    常用的语法
        computed:{
            属性(){
                return 表达式或值
            }
            等价于
            属性:{
                get(){
                    return 表达式或值
                }
            }
        }
         