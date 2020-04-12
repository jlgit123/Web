function fn(ary,x){
    ary.sort((a,b)=>a-b);
    let L=0,R=ary.length-1;
    let res =[];
    while(L<R){
        if(ary[L]+ary[R]<x){
            L++
        }else if(ary[L]+ary[R]>x){
            R--
        }else{
            res.push([L,R]);
            L++;R--;
        }
    }
    return res
}

console.log(fn([1,2,3,4,5],6))