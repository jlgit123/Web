Function.prototype.myapply = function(context) {
    context = context || window;
    context.fn = this;
    let res = null;
    if (arguments[1]){
        res = context.fn(...arguments[1])
    } else {
        res = context.fn()
    }
    delete context.fn  //删除临时键，返回结果
    return res
}
//测试
var obj = {name:'jack'}
function foo(a,b,c){
   //Funciton类的实例
    console.log(this.name)
    console.log(a,b,c)
}
// foo.myapply(obj,['q','w','e'])

Function.prototype.mybind = function(context){
    let that = this;  //保存this
    let _args = [...arguments].slice(1)
    //柯里化.
    return function F(args){
        // return that.apply(context,_args.concat(args))
        context = context || window;
        _args = _args.concat(args)
        context.fn = that
        let res = null;
        if (_args){
            res = context.fn(..._args)
        } else {1
            res = context.fn()
        }
        delete context.fn
        return res
    }
        // that.apply(context,_args.concat(args))
}
//测试
var obj = {name:'jack'}
function foo(a,b,c){
   //Funciton类的实例
    console.log(this.name)
    console.log(a,b,c)
}
// //常规测试
// test1 = foo.mybind(obj,'q','w','ee')
// test1()
//柯里化测试
function test2 (){ return foo.mybind(obj,'q','w')('ee');} 
test2()