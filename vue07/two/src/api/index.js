import axios from 'axios'
export const getData=(type)=>{
    //根据不同的type返回不同的列表
    return axios.get(`http://rap2.taobao.org:38080/app/mock/226329/api/${type}`)
    //返回promise
}
//获取熊猫优选这个网站的轮播图数据
export const getSwiperList=()=>{
    return axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0")
}