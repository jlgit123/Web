/**
 * Promise类中需要传入一个executor函数，默认立即执行
 * Promise类内部会提供两个方法 resolve(成功)、reject(失败)
 * 可以更改Promise的3个状态：(等待、成功、失败)
 1. 执行executor函数 传入成功和失败
 2. 判断resolve、reject状态，只有状态是等待的时候，才能更改状态
 3. try executor函数如果出现错误 catch接受错误信息调用reject(err)
  
 1.Promise函数里面有异步操作，then函数里判断状态为pending肯定有异步操作
 2.把then里面函数存到数组(onResolvedCallbacks、onRejectedCallbacks) 异步结束再调用(发布订阅者)
 3.在resolve、reject分别获取数组(onResolvedCallbacks、onRejectedCallbacks) 中的函数循环执行
 
 1.每次调用then方法都返回一个新的promise
 2.执行then方法中的成功和失败的返回值，都走下一个then方法的成功
 3.执行then方法中只要报错就走下一个then的reject
 4.执行then方法中可能返回一个普通值或者是promise，要判断x的类型是不是promise
    如果是promise就是执行拿到它的状态，作为promise成功或者失败
 
    //####
 1.判断返回值是不是promise递归调用
 2.防止同时调用resolve和reject
 3.给then添加默认函数
 
 */
const PENDING = 'PENDING'  //等待
const RESOLVE = 'RESOLVE'  //成功
const REJECT = 'REJECT'  //失败

function resolvePromise(promise2,x,resolve,reject){
    //不能引用同一个对象，有可能造成死循环
    if(promise2 === x){
        return reject(new TypeError('不能引用同一个对象'))
    }
    let called; //####
    //判断x的类型  x如果是对象或者函数 说明是一个promise
    if(typeof x === 'object' && x !== null || typeof x ==='function'){
        try{
            let then = x.then  //只调用一次  用变量存一下，因为defineproperty
            if(typeof then ==='function'){  //肯定是promise
                then.call(x,y=>{   //指向重新指一下，否则是全局的啦
                    if(called) return  //####
                    called = true
                    resolvePromise(promise2,y,resolve,reject)
                },r=>{
                    if(called) return //####s
                    called = true
                    reject(r)
                })
            } else{
                resolve(x) //普通值
            }
        }catch(e){
            if (called) return
            called = true
            reject(e)
        }
    }
     else{
        //不是promise对象 就是普通值
        resolve(x)
    }
}

 class Promise{
     constructor(executor){
         this.status = PENDING  //默认是等待状态
         this.value = undefined
         this.reason = undefined

         this.onResolvedCallbacks = [] //2-专门存放成功的回调函数
         this.onRejectedCallbacks = [] //2-专门存放失败的回调函数

         let resolve = (value) =>{ //成功
            if(this.status === PENDING){
                this.value = value
                this.status = RESOLVE
                //2 -异步完成后依次执行
                this.onResolvedCallbacks.forEach(fn => fn())
            }
         }
         let reject = (reason) =>{  //失败
            if(this.status === PENDING){
                this.reason = reason
                this.status = REJECT
                //2 -异步完成后依次执行
                this.onRejectedCallbacks.forEach(fn => fn())
            }
         }
         try {
            executor(resolve,reject) //默认立即执行
         } catch(e){
             //如果出现了错误 手动调用下reject向下传递
             reject(e)
         }
     }
     then(onfulfilled,onrejected){
        //then的默认值
        //对传入的两个参数做判断，如果不是函数将其转为函数
        onfulfilled = typeof onfulfilled=== 'function'?onfulfilled:v=>v;
        onrejected = typeof onrejected ==='function'?onrejected:err=>{
            throw err
        }

        let promise2 = new Promise((resolve,reject)=>{
            //onfulfilles 传进来的成功  onrejected 传进来的失败
            if(this.status === RESOLVE){
                setTimeout(() => {
                    try{
                        let x =  onfulfilled(this.value)
                        // resolvePromise方法就是判断返回值是不是Promise
                        resolvePromise(promise2,x,resolve,reject)
                    } catch(e){
                        reject(e)
                    }     
                }, 0); //异步任务，为了拿到外面的promise2
            }
            if(this.status === REJECT){
                setTimeout(() => {
                    try{
                        let x =  onrejected(this.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch(e){
                        reject(e)
                    }  
                }, 0);
            }
            if(this.status === PENDING){  //2-这时肯定有异步操作
            this.onResolvedCallbacks.push(()=>{
                setTimeout(() => {
                    try{
                        let x =  onfulfilled(this.value)
                        // resolvePromise方法就是判断返回值是不是Promise
                        resolvePromise(promise2,x,resolve,reject)
                    } catch(e){
                        reject(e)
                    }     
                }, 0); //异步任务，为了拿到外面的promise2
            })
            this.onRejectedCallbacks.push(()=>{
                setTimeout(() => {
                    try{
                        let x =  onrejected(this.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch(e){
                        reject(e)
                    }  
                }, 0);
            }) 
            }
        })
        return promise2
     }

     catch(errCallback){
         return this.then(null,errCallback)
     }
 }

 Promise.defer = function() {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
 module.exports = Promise
