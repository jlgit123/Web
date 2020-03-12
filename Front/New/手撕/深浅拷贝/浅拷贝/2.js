// assign实现浅拷贝
let target = {}
let obj = {
    a:{
        b:1
    },
    sym:Symbol(1)
}
Object.defineProperty(obj,'aaa',{
    value:'不可遍历',
    enumerable:true
})
Object.assign(target,obj)
console.log(target)

obj.a.b = 2
console.log(obj)
console.log(target)

