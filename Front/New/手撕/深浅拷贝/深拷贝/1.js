//循环+递归
function isObject(obj){
    return(typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

function deepClone(obj){
    //判断是不是对象
    if(!isObject(obj)){
        throw new Error('一边去')
    }
    // object array
    let isArray = Array.isArray(obj)
    let cloneObj = isArray?[]:{}
    //如果属性值是对象 拷贝
    for (let key in obj){
        //是对象，继续往下找；不是直接存储
        cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    }
    return cloneObj
}

let sym = Symbol('haha')
let obj1 = {
    a: {
        b : 1
    }
}
obj1[sym]=111

let obj2 = deepClone(obj1)
obj1.a.b = 2
console.log(obj1)
console.log(obj2)