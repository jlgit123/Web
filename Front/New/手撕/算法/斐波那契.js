
//100个台阶 需要f(100) = f(99)+f(98)

//斐波那契数列：
//f(n) = f(n-1)+f(n-2)

// 时间复杂度：大O表示法,粗略的估计
// N个数，F(N)
// 赋值：let a=1 ; O(1)
// return 1;       O(1)
// n === 2;        O(1)
// O(1)相对于O(N)可以忽略
// O(N)相对于O(N^2)可以忽略
// O(N^2)相对于O(N^3)可以忽略
// 2 * O(N) 约等于O(N) 
// 3 * O(N) 约等于O(N) 

let d=new Date()
t0=d.getTime()

/**方法一：递归 */
//限制： f(5)=f(4)+f(3)=f(3)+f(2)+f(2)+f(1) = f(1) + ... f(1) 重复很多次同样的计算
// 假设f(n)的时间复杂度是F(n)
// 所以时间复杂度: F(n) = F(n-1)+F(n-2) ==>指数级别
function f(n){
    if(!typeof n ==="number"){
        throw "n is not a number!";
    }

    if ( n===0 || n===1 ){  //O(1)
        return 1   //O(1)
    } else {
        return f(n-1) + f(n-2)  //F(n-1)+F(n-2)
    }
}
console.log(f(40)) //89
t1 = d.getTime()
console.log('方法一',t1-t0)


/**优化之方法二：数组存结果 */
// O(1+1+n-2+1)=O(n+1)=O(n) 又叫线性时间复杂度
function f2(n){
    let ary = new Array(n)
    ary[0] = 1;  //O(1)
    ary[1] = 1;  //O(1)
    for (let i=2;i<n+1;i++){   //O(n-2)
        ary[i]=ary[i-1]+ary[i-2]  //O(1)
    }  
    return ary[n];
}

console.log(f2(100)) //89
t2 = d.getTime()
console.log('方法二',t2-t1)



function Fib(n) {
    let a =1 ,b =1;
    let arr = [a,b]
    while (arr.length < n+1) {
        [a,b] = [b,a+b]; //es6的解构
        arr.push(b);
    }
    return arr[n];
}

console.log(Fib(100)) //89
t22 = d.getTime()
console.log('方法二',t22-t2)


/**优化之方法三：递归 对象保存结果 */
/**也是线性时间复杂度 */
// f3(4) = _fib(4) = f(3)+f(2) =_fib(3)+_fib(2)=fib(2)+fib(1)+2
var cache = {};
function f3(n){
    if(!(n in cache)){
        cache[n] = _fib(n)
    }   
    return cache[n]
}
    
function _fib(n){
    if(n===0||n===1){
        return 1
    } else {
        return f3(n-1)+f3(n-2)
    }
}

console.log(f3(100))
t3 = d.getTime()
console.log('方法三',t3-t22)