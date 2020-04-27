module.exports = {
    devServer:{
        //开发服务器的设置
        proxy:{
            //代理
            "/hd":{
                "target":'http://localhost:3000',
                'changeOrigin':true,
                'pathRewrite':{
                    '^/hd':''
                }
            }
        }
    }
}