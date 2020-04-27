import axios from 'axios'
export const getSwiperList = ()=>{
   return axios.get("https://shopapi.smartisan.com/mobile/home")
}