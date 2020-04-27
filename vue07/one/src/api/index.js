// import axios from 'axios'
// //根据类型返回不同的列表 users 就返回人员列表 
// export const getData = (type) => {
//     //返回promise
//     return axios.get("http://rap2.taobao.org:38080/app/mock/226329/api/"+type)
//         // .then(res => {
//         //     if (res.data.code === 200) {
//         //         this.list = res.data.data.list;
//         //     }
//         // });
// }
import axios from 'axios'
//根据类型返回不同的列表 users就返回人员列表
export const getData=(type)=>{
    //返回promise
    return axios.get("http://rap2.taobao.org:38080/app/mock/226329/api/"+type);
}