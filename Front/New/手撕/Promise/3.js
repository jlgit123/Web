let Promise = require('./promise_3.js')
//promise高级用法
/*
 1.如果then中返回一个结果是Promise 下个then会拿到它的执行结果
 2.如果在失败的函数中返回的是普通值或者是promise的成功值 也会走到外层then的成功中
 3.如果then成功中有失败或者抛出异常 会给下一个then的失败
 4.catch找最近的失败 内部其实也是then
 5.promise实现链式调用 主要是每次返回的都是新的promise
 */
let promise = new Promise((resolve,reject)=>{ //executor函数
    //resolve 成功 reject失败
    resolve('resolve')
    // reject('reject')
})

promise
    .then((data)=>{
        return new Promise((resolve,reject)=>{
            // resolve('return Promise')  //1.resolve-->下层成功

            setTimeout(() => {
                reject('return,reject,promise') //3.reject-->下层失败
            }, 1000);
        })
    },(err)=>{
        console.log('err:'+err)
    })
    .then(data =>{
        console.log(data)
    },err => {
        // console.log(err)
        // return 'hello'  //2.失败返回普通值-->下层成功
        return new Promise((resolve,reject)=>{
            resolve('word') //2.失败返回promise的成功值
        })
    })
    .then(data=>{
        throw new Error('你错了没')
    },err =>{
        console.log(err)
    })
    // .catch(err=>{           //4. catch和下面的then一样
    //     console.log(err)    //找最近的
    // })
    .then(data=>{},err=>{
        console.log(err)
    })

