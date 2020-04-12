function fn(ary){
    //1.先拷贝，排序
    let tmp = [...ary];
    tmp.sort((a,b)=>a-b);

    //2.平均值
    let total = tmp.reduce(((acc,cur)=>acc+cur),0);
    let avg = total/2;

    let sum = 0,min=avg-sum;
    // let L =[],R=[];
    let idx = 0;
    for(let i=0;i<tmp.length;i++){
        sum+=tmp[i];
        if(sum>avg){
            idx = i;
            break
        }
    }
    let L = tmp.splice(0,idx);
    let R = tmp;
    return L
}
//1,2,3,4,5
console.log(fn([1,2,3,4,5]))