<template>
    <div>One<span>{{n}}</span>
    <button @click='change'>+</button>
    <button @click='kill'>kill</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                n:666
            }
        },
        beforeCreate(){//访问不到数据
            console.log('beforeCreate')
        },
        created(){//能发请求，也能拿到数据
            console.log('created',this.n)
        },
        beforemount(){//有虚拟dom，但是没有节点
            console.log('beforeMount',this.n)
        },
        mounted(){//有节点有数据
            console.log('mounted',this.n)
        },
        beforeUpdate(){
            console.log('beforeUpdate')
        },
        updated(){
            console.log('updated')
        },
        beforeDestroy(){
            console.log('beforeDestroy')
        },
        destroyed(){
            console.log('destroyed')
        },
        methods:{
            change(){
                this.n++
            },
            kill(){
                this.$destroy()
            }
        }
    }
</script>

<style scoped>
    span{
        background:#ccc;
    }
</style>
