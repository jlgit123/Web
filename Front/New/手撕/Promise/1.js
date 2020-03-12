let Promise = require('./promise_1.js')
//promise基本用法
let promise = new Promise((resolve,reject)=>{ //executor函数
    //resolve 成功 reject失败
    resolve('resolve')
    // reject('reject')
})

promise.then((data)=>{
    console.log('res:'+data)
},(err)=>{
    console.log('err:'+err)
})