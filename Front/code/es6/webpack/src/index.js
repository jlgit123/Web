// import util1 from './util1.js'
// import { fn1, fn2 } from './util2.js'

// console.log(util1)
// fn1()
// fn2()

// // [1, 2, 3].map(item => item + 1)




// 1. Promise 回调地狱 calllback-hell
// function loadImg(src, callback, fail) {
//     var img = document.createElement('img')
//     img.onload = function () {
//         callback(img)
//     }
//     img.onerror = function () {
//         fail()
//     }
//     img.src = src
// }
// var src = 'https://www.imooc.com/static/img/index/logo_new.png'
// loadImg(src, function(img){
//     console.log(img.width)  //打印图片宽度
// },function(){
//     console.log('failed')
// })
// //如果我还想打印图片高度呢?

// 2. Promise 语法 
// function loadImg(src) {
//     var promise = new Promise(function (resolve, reject) {
//         var img = document.createElement('img')
//         img.onload = function () {
//             resolve(img)
//         }
//         img.onerror = function () {
//             reject('图片加载失败')
//         }
//         img.src = src
//     })
//     return promise
// }

// var src = 'https://www.imooc.com/static/img/index/logo_new.png'
// var result = loadImg(src)

// result.then(function(img){
//     console.log(img.width)
// },function(){
//     console.log('failed')
// })

// result.then(function(img){
//     console.log(img.height)  //继续打印
// })



// 4-25 async-await代码示例

import 'babel-polyfill'
function loadImg(src) {
    var promise = new Promise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

var src1 = 'https://www.imooc.com/static/img/index/logo_new.png'
var src2 = 'https://img1.mukewang.com/545862fe00017c2602200220-100-100.jpg'

const load = async function () {
    const result1 = await loadImg(src1)
    console.log(result1)
    const result2 = await loadImg(src2)
    console.log(result2)
}
load()

