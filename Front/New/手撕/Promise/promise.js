// 1.先创建三个表示状态的常量
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
// 2.定义promise函数，参数是输入的函数
function MyPromise(fn){
  // 3.创建常量that，在异步执行时保证获取正确的this对象
  // 初始化state状态  ；初始化传入resolve和reject函数中的值
  // 初始化resolvedCallbacks和rejectedCallbacks数组，来保存then方法中的回调函数
  const that = this
  that.state = PENDING
  that.value = null //保存resolve或者reject中传入的值
  that.resolvedCallbacks = []  //保存then中的回调
  that.rejectedCallbacks = []
  
// 4.添加resolve和reject函数，改变状态，保存参数，遍历执行回调数组
  function resolve(value) {
    if(that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => cb(that.value))
    }
  }
  
  function reject(value) {
    if(that.state === PENDING){
      that.state = REJECTED
      that.value = value;
      that.rejectedCallbacks.map(cb => cb(that.value));
    }
  }
  // 4.执行输入promise的函数，把resolve和reject两个函数作为参数传递给它
  // 注意捕获异常，直接传参e并执行reject
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
// 5. 在定义的promise的原型链上实现then方法
// 接收两个参数，用户自定义的成功处理函数和错误处理函数（错误处理可不传）
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  // 判断参数是不是函数，不是函数将其转换为函数
  onFulfilled = 
    typeof onFulfilled === 'function' ? onFulfilled : v => v // onFulfilled = v => v
  onRejected = 
    typeof onRejected === 'function' ? onRejected : v => v

  // 判断状态的逻辑: 如果是等待态的话，就往回调函数中 push 函数
  //当状态不是等待态时，就去执行相对应的函数
  if(that.state === PENDING){
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected) 
  }
  else if(that.state === RESOLVED){
    onFulfilled(that.value)
  }  else {
    onRejected(that.value)
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功的回调数据')
  }, 1000)
}).then(value => {
  console.log('Promise.then:  ', value)
})