function sumThree(ary,target){
    let res = [];
    let len = ary.length;
    if (!ary || len<3) return res; //返回空
    ary.sort((a,b)=>a-b)
    for (let i=0;i<len;i++){
        if (ary[i]>target) break; //增序，如果第一个都比t大，后面更不要说啦
        if (i>0 && ary[i]==ary[i-1]) continue; //如果和上一个数相等，跳过这个数
        let L = i+1;
        let R = ary.length-1;
        while(L<R){
            let total = ary[i]+ary[L]+ary[R];
            if (total==target){
                res.push([ary[i],ary[L],ary[R]]);
                while (L<R && ary[L]==ary[L+1]) L++;  //去重
                while (L<R && ary[R]==ary[R+1]) R++;  //去重
                L++;  //继续找
                R--;  //继续找
            }
            else if(total<target) L++;
            else if(total>target) R--;
        }
    }
    return res
}

console.log(sumThree([1,2,3,4,5,6,5,4,3,2],7))