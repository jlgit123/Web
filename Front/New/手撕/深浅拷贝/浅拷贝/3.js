//扩展运算符
let obj = {
    a: 1,
    b:{
        c:1
    }
}
let obj2 = {
    ...obj
}
obj.a = 2
console.log(obj)
console.log(obj2)
obj.b.c = 2
console.log(obj)
console.log(obj2)