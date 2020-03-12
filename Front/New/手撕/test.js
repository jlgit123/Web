function f1(a){
    let _args = [...arguments].slice(1) 
    // console.log(_args)
    return function f2(args){
        console.log(_args.concat(args))
    }
}

f1(3,(4))