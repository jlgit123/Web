function curry(func) {
    // 存储已传入参数
    let _args = []

    // 做一个闭包
    return function _curry(...args) {
        // 把参数合并
        _args = _args.concat(args)

        // 如果参数够了就执行
        if (_args.length >= func.length) {
            const result = func(..._args)
            _args = []
            return result;
        }
        // 继续返回此函数 
        else {
            return _curry
        }
    }

}


function add1(a, b, c) {
    return a + b + c
}
let testAdd = curry(add1)
console.log(testAdd(1)(2)(3))  //6
console.log(testAdd(1, 2)(3))  //6
console.log(testAdd(1)(2, 3))  //6 