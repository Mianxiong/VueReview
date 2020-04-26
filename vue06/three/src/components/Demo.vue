<template>
    <div>
        <slot></slot>
        <input type="text" v-model="str" @keyup.enter="add">
        <slot name="btn" :str="str"></slot>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                str:''//文本框的内容
            }
        },
        methods:{
            add(){
                this.$emit("msg",this.str)
            }
        }
    }
</script>
<style>

</style>