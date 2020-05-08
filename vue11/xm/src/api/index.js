import services from './request'
//这个axios是设置过请求超时时间和baseURL的axios
//我们把改造过的axios叫做axios的二次封装
export const getFilm = (type)=>{
    // return axios.get("https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=1214317" )
    return services.get("/gateway",{
    // return axios.get("https://m.maizuo.com/gateway",{
        params:{
            cityId:440100,
            pageNum:1,
            pageSize:10,
            type:type,
            k:Date.now()
        },
        headers:{
            
            "X-Host": "mall.film-ticket.film.list"
        }
    })
}