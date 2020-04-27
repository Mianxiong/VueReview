import axios from 'axios'
//获取轮播图数据
export const getSwiperData=()=>{
    //拿到数据，那个网站服务器设置了cors跨域
    return axios.get('http://www.xiongmaoyouxuan.com/api/tab/1?start=0')
}

export const getlist=()=>{
    return axios.get('http://localhost:3000')
}