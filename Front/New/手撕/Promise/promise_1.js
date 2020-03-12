/**
 * Promise类中需要传入一个executor函数，默认立即执行
 * Promise类内部会提供两个方法 resolve(成功)、reject(失败)
 * 可以更改Promise的3个状态：(等待、成功、失败)
 * 1. 执行executor函数 传入成功和失败
 * 2. 判断resolve、reject状态，只有状态是等待的时候，才能更改状态
 * 3. try executor函数如果出现错误 catch接受错误信息调用reject(err)
 */
const PENDING = 'PENDING'  //等待
const RESOLVE = 'RESOLVE'  //成功
const REJECT = 'REJECT'  //失败

 class Promise{
     constructor(executor){
         this.status = PENDING  //默认是等待状态
         this.value = undefined
         this.reason = undefined
         let resolve = (value) =>{ //成功
            if(this.status === PENDING){
                this.value = value
                this.status = RESOLVE
            }
         }
         let reject = (reason) =>{  //失败
            if(this.status === PENDING){
                this.reason = reason
                this.status = REJECT
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
     }
 }
 module.exports = Promise
