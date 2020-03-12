// assign实现浅拷贝
let target = {}
let obj = {
    a:{
        b:1
    }
}
Object.assign(target,obj)
console.log(target)

obj.a.b = 2
console.log(obj)
console.log(target)

