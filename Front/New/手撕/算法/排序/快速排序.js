function quick(ary){
    if(ary.length<=1){
        return ary
    }
    let midIndex = Math.floor(ary.length/2);
    let midValue = ary.splice(midIndex,1)[0];

    let aryLeft = [];
    let aryRight = [];
    for (let i=0; i<ary.length;i++){
        let item = ary[i]
        item < midValue?aryLeft.push(item):aryRight.push(item);
    }
    return quick(aryLeft).concat(midValue,quick(aryRight))
}


let A = [5,2,4,6,1,3]
console.log(quick(A))


//时间复杂度Nlog(N)