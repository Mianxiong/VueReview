<template>
    <div class="area">
        <div class="scroll_wrap">
            <!-- 热门城市 -->
            <div class="hot_wrap" >
                <div class="title">热门城市</div>
                <ul class="hot_city" v-if="cityInfo">
                    <li v-for="(item,index) in cityInfo.hotCities" :key="index">{{item.name}}</li>
                </ul>
            </div>
            <!-- 所有城市 -->
            <div class="city_wrap">
                <!-- 循环按字母排序的key -->
                <div class="city_content" v-for="(item,index) in keys" :key='index'>
                    <div class="title">{{item}}</div>
                    <!-- 根据字母key展示城市名 -->
                    <ul>
                        <li v-for="(city,index) in cityInfo[item]" :key="index">
                            {{city.name}}
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Alphabet",
    props:{
        cityInfo:Object,
        keys:Array
    },
}
</script>

<style scoped>
.area{
    margin-top:10px;
    box-sizing:border-box;
    padding:0 16px;
    background:#fff;
    height:calc(100%-65px);
    overflow:hidden
}
.scroll_wrap{
    background:#fff;
    overflow:auto;
}
.title{
    color:#aaa;
    padding:15px 0;
}
.hot_city{
    padding:0 16px;
    display:flex;
    flex-direction: row;
    /* 规定灵活的项目在必要的时候拆行或拆列 */
    flex-wrap:wrap;
}
.hot_city li{
    width:30%;
    background:#f1f1f1;
    margin:0 10px 10px 0;
    text-align: center;
    padding:10px;
    box-sizing: border-box;
}
.city_content li{
    padding:10px;
    border-bottom:1px solid #eee;
}
.area_keys{
    
}
</style>