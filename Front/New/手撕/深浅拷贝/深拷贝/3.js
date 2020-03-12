//序列化和反序列化实现深度克隆
function deepClone(obj){
    let _obj = JSON.stringify(obj)
    objClone = JSON.parse(_obj)
    return objClone
}

let obj1 = {
    a: {
        b:1
    }
}

Object.defineProperty(obj1,'hhah',{
    value:'不能遍历',
    enumerable:true
})

let obj2 = deepClone(obj1)
obj1.a.b = 2
console.log(obj1)
console.log(obj2)