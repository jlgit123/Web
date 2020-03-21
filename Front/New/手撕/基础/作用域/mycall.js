//fn.call(context,arg1,arg2……)
Function.prototype.mycall = function(context){
    context = context || window; //context为空，上下文指向window
    context.fn = this ; //this是fn
    let args = [...arguments].slice(1);  //取参数
    let res = context.fn(...args);  //执行
    delete context.fn   //删除临时键
    return res
}

let obj = {name:'jack'}
function foo(a,b){
    console.log(this.name)
    console.log(a,b)
}

foo.mycall(obj,'hello','bye')