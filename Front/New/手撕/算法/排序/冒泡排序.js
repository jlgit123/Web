function bubble(ary){
    let len = ary.length;
    for(let i=0;i<len-1;i++){        //外层控制比较的轮次
        for(let j=0;j<len-1-i;j++){  //内层控制每一轮比较的次数
            if (ary[j]>ary[j+1]){
                [ary[j],ary[j+1]] = [ary[j+1],ary[j]]
                // let temp = ary[j];
                // ary[j] = ary[j+1];
                // ary[j+1] = temp;
            }
        }
    }
    return ary
}


console.log(bubble([1,4,3,2]))