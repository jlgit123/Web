/**
 * bubble:实现冒泡排序
 *  @params
 *      ary[ARRAY]需要排序的数组
 *  @return
 *      [ARRAY]排序后的新数组
 * by jin on 2020/3/6
 */

 function bubble(ary){
     //外层循环i控制比较的轮次
     for(let i=0;i<ary.length-1;i++){
         //里层循环控制每一轮比较的次数
         for(let j=0;j<ary.length-1-i;j++){
             if(ary[j]>ary[j+1]){
                 //当前项大于后一项
                 let temp = ary[j];
                 ary[j] = ary[j+1];
                 ary[j+1] = temp;
             }
         } 
     }
     return ary;
 }

 let ary = [12,8,34,16,1];
 ary=bubble(ary);
 console.log(ary);



 /**
 * insert:实现插入排序
 *  @params
 *      ary[ARRAY]需要排序的数组
 *  @return
 *      [ARRAY]排序后的新数组
 * by jin on 2020/3/6
 */
function insert(ary){
    //1.准备一个新数组，用来存储抓到手里的牌，开始先抓一张牌进来
    let handle = [];
    handle.push(ary[0]);

    //2.从第二项开始依次抓牌，一直到把台面上的牌抓光
    for(let i=1;i<ary.length;i++){
        //A是新抓的牌
        let A=ary[i];
        //和HANDLE手里的牌依次比较（从后向前比）
        for(let j=handle.length-1;j>=0;j--){
            //每次要比较的手里的牌
            let B =handle[j];
            //如果当前新牌A比要比较的牌B大了，把A放到B后面
            if(A>B){
                handle.splice(j+1,0,A); 
                break;
            }
            //已经比到第一项，我们把新牌放到手中最前面即可
            if(j===0){
                handle.unshift(A);  //数组开头新增一个元素
            }
        }
    }
    return handle;
}
let ary = [17,28,24,16,13];
ary=insert(ary);
console.log(ary);



/**
 * quick:实现快速排序
 *  @params
 *      ary[ARRAY]需要排序的数组
 *  @return
 *      [ARRAY]排序后的新数组
 * by jin on 2020/3/6
 */
function quick(ary){
    //4.结束递归（当ARY中小于等于一项，则不用处理）
    if(ary.length<=1){
        return ary;
    }

    //1.找到数组的中间项，在原有的数组中把它移除
    let middleIndex=Math.floor(ary.length/2);
    let middelValue=ary.splice(middleIndex,1)[0];

    //2.准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组中，反之放到右边数组
    let aryLeft=[],
        aryRight=[];
    for (let i=0;i<ary.length;i++){
        let item=ary[i];
        item<middelValue?aryLeft.push(item):aryRight.push(item);
    }
    //3.递归方式让左右两边数组持续这样的处理，一直到左右两边都排好序为止
    //最后让左边+中间+右边拼接成最后的结果
    return quick(aryLeft).concat(middelValue,quick(aryRight));
}

let ary = [12,8,15,16,1,24];
ary=quick(ary);
console.log(ary)

 

/** 递归原理 */ 
//递归：函数执行的时候自己调用自己
function fn(){
    fn(); //这种死递归会导致栈溢出
}
fn();  //报错：VM1061:1 Uncaught RangeError: Maximum call stack size exceeded

function fn(){
    setTimeout(fn,0); //这种看似死递归，并不会导致栈溢出
}
fn(); //不会报错




/** 实现1+2+3+……+10 */ 
//for循环
for(let i=1;i<=10;i++){
    total+=i;
}
console.log(total);
//递归方法
function sum(n){
    if(n>10){
        return 0
    }
    return n+sum(n+1);
    //return 1+sum(2)
    //return 1+2+sum(3)
    //……
    //return 1+2+3+……+8+9+10+sum(11)
}
let total =sum(1)
console.log(total)