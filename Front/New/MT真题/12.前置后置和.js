function fn(ary){
    let L=0,R=ary.length-1;
    let sumL=ary[L],sumR=ary[R];
    let count = 0;
    while(L<R){
        if(sumL === sumR) {
            count++;
            L++;
            sumL+=ary[L];
        } else if(sumL<sumR){
            L++;
            sumL+=ary[L];
        } else if(sumL>sumR){
            R--;
            sumR+=ary[R];
        }
    }
    return count
}


console.log(fn([1,3,2,5,3,2,1]))
console.log(fn([1, 2, 5, 1, 8, 9, 7, 1]))

