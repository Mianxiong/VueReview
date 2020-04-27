<template>
<div>
    <button @click="name='List'">list</button>
    <button @click="name='Goods'">Goods</button>
    <component :is='name'></component>
</div>
</template>
<script>
import List from '@/components/List'
import Goods from '@/components/goods'
export default {
    components:{
        List,Goods
    },
    data(){
        return {
            name:'List'
        }
    }
}
</script>
<style >

</style>
