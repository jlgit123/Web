module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,   //所有的js都通过babel来编译
            exclude: /(node_modules)/,  //除了node_modules下面的文件
            loader: 'babel-loader'
        }]
    }
}