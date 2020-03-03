var path = require('path')  //获取包
var webpack = require('webpack')  //获取安装的webpack

module.exports = {
    //__dirname表示当前目录
    context: path.resolve(__dirname,'./src'), //在webpack目录下找到src目录[自行新建]
    entry:{  //入口
        app: './app.js'  //在src里面的--入口文件名[自行新建]
    },
    output:{ //输出
        path: path.resolve(__dirname,'./dist'), //输出目录[无需自行新建]
        filename:'bundle.js'//输出文件[无需自行新建]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin()  //压缩JS的插件
    ]
}