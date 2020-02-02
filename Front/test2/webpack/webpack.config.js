var path = require('path')  //获取包
var webpack = require('webpack')  //获取安装的webpack

module.exports = {
    //__dirname表示当前目录
    context: path.resolve(__dirname,'./src'), //在webpack目录下找到src目录
    entry:{  //入口
        app: './app.js'  //在src里面的--入口文件名
    },
    output:{ //输出
        path: path.resolve(__dirname,'./dist'), //输出目录
        filename:'bundle.js'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin()  //压缩JS的插件
    ]
}