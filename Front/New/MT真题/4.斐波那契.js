function fib(n){
    if(!typeof n === "number"){
        return new Error('n must be a number')
    }

    if(n===0||n===1){
        return 1
    } else {
        return fib(n-1)+fib(n-2)
    }
}

console.log(fib(20))

//时间复杂度从2^n变成n，但是空间复杂度从1变成n
function fib1(n){
    if(!typeof n === "number"){
        return new Error('n must be a number')
    }
    var ary =[1,1]
    for (let i=2;i<=n;i++){
        ary[i] = ary[i-1]+ary[i-2]
    }
    return ary[n]
}
console.log(fib1(20))