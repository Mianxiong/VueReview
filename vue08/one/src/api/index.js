import axios from 'axios'

export const getList = (type)=>{
    return axios.get("http://rap2.taobao.org:38080/app/mock/226329/api/"+type);
}