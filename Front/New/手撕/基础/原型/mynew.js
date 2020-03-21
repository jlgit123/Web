function mynew(fn,...args){
    let o = Object.create(fn.prototype);//创建一个指向构造函数原型对象的空对象
    let k = fn.apply(o,args); //用这个对象在构造函数中跑一遍，并且传入参数
    if (k instanceof Object){
        return k
    } else {
        return o
    }
}

function f1(){
    this.name = "iamf1"
}
f1.prototype.say = function(){
    console.log('message')
}

var o1 = mynew (f1);
console.log(o1.name);  //iamf1
o1.say();  //message
console.log(o1.__proto__ === f1.prototype)  //true
console.log(o1.__proto__.constructor === f1)  //true
console.log(o1 instanceof f1)  //true
console.log(o1 instanceof Object)  //true