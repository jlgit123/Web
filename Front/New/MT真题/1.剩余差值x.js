//长为n的数组ary，剩余元素最大最小差值要不超过x
//至少要删除k个元素呢，求k？

function fn(n,ary,x){
    ary.sort((a,b)=>a-b); //1.排序

    let max = Math.max(...ary);
    let min = Math.min(...ary);
    let diff = max-min;
    let count = 0;
    while (diff > x){  
        let a = ary.length-ary.indexOf(ary[ary.length-1]) //后面重复的数字
        let b = ary.lastIndexOf(ary[ary.length-1]) //前面重复的数字
        if (a>b){  //2.后面重复的数字更多，从前面弹出
            ary.shift();
            count ++
        } else {
            ary.pop();
            count ++
        }
        diff = Math.max(...ary)-Math.min(...ary);
    }
    console.log(ary)

    return count
}

let len = 5,x=2;
let ary =[2,1,1,1,1,1,1,4,3,3,2,5,5,5];
console.log(fn(len,ary,x))