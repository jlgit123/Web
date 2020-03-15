// let Promise = require('./promise_3.js')
function promiseAll(promises){
    return new Promise(function(resolve,reject){
        if(!isArray(promises)){
            return reject(new Error('Promises must be an array'))
        }
        var resolvedCount = 0; //真正成功执行的次数
        var promiseNum = promises.length; //需要执行的次数
        var resolveValue = [];  //存储每个promise的成功回调返回值
        for (let i=0; i<promiseNum ;i++){
            Promise.resolve(promises[i]).then((value) => {
                resolveValue[i] = value;
                resolvedCount ++ ;
                if (resolvedCount === promiseNum){
                    return resolveValue;
                }
            }, (reason) => {
                    return reject(reason);
            })
        }    
    })    
}

var p1 = Promise.resolve(1),
    p2 = Promise.reject(2),
    p3 = Promise.resolve(3);
promiseAll([p1, p2, p3]).then(function (results) {
    //then方法不会被执行
    console.log(results);
}).catch(function (e){
    //catch方法将会被执行，输出结果为：2
    console.log(2);
});