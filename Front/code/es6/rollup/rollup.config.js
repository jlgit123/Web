import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
    entry: 'src/index.js', //入口文件
    format: 'umd',  //兼容的规范commonjs和AMD
    plugins: [
        resolve(),
        babel({  //ES6编译环境
            exclude: 'node_modules/**'  //排除
        })
    ],
    dest: 'build/bundle.js'
}