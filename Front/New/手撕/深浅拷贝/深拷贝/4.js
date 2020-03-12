const _ =require('lodash')
const obj = {
    a:1
}
obj.aaa=obj
const obj1 = _.cloneDeep(obj)
console.log(obj1 === obj)
console.log(obj1,obj)
