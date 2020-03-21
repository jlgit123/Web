function extendClass(Child,Parent){
    Child.prototype = Object.create(Parent.prototype);  //创建一个原型对象是父类原型对象的中间对象
    Child.prototype.constructor = Child;  //在子类的原型对象上添加constructor属性，指向子类
    return Child;
}


function parent1(){
    this.type = "parent";
}
parent1.prototype.say = function (){
    console.log('message')
}

function child1(){
    parent1.apply(this);
    this.ary = [1,2,3,4];
}
extendClass(child1,parent1)
var c = new child1()  //必须实例化呀

console.log(c.type)  //parent
c.say()  //message