let Promise = require('./promise_2.js')
//promise含异步用法
let promise = new Promise((resolve,reject)=>{ //executor函数
    //resolve 成功 reject失败
    // resolve('resolve')
    // reject('reject')
    setTimeout(() => {
        resolve('resolve')
    }, 1000);
})

promise.then((data)=>{
    console.log('res:'+data)
},(err)=>{
    console.log('err:'+err)
})