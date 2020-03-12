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
 */
const PENDING = 'PENDING'  //等待
const RESOLVE = 'RESOLVE'  //成功
const REJECT = 'REJECT'  //失败

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
         //onfulfilles 传进来的成功  onrejected 传进来的失败
         if(this.status === RESOLVE){
             onfulfilled(this.value)
         }
         if(this.status === REJECT){
             onrejected(this.reason)
         }
         if(this.status === PENDING){  //2-这时肯定有异步操作
            this.onResolvedCallbacks.push(()=>{
                onfulfilled(this.value)
            })
            this.onRejectedCallbacks.push(()=>{
                onrejected(this.reason)
            })

             
         }
     }
 }
 module.exports = Promise
