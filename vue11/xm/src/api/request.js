import axios from 'axios';
import {Toast} from 'vant'
let services = axios.create({
    baseURL: '/mz', //所有请求都会带上axios
    timeout: 1000, //设置超时的时间
    headers:{
        //把每一次请求都要带的请求头，设置一下
        "content-type":"application/json",
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15887703552924872728914","bc":"440100"}`,
    }
})

//请求拦截器 这个拦截器会在发请求时自动执行
var toast = null 
services.interceptors.request.use((config)=>{
    toast = Toast.loading({
        duration:0,//显示的时间 0 持续显示
        message: '加载中...',
        forbidClick: false,
      });
    // console.log(config)
    // console.log("请求被拦截了")
    return config
})

//响应拦截器 这个拦截器会在返回数据时候执行 
services.interceptors.response.use((res)=>{
    toast.clear()
    return res.data
})
export default services;