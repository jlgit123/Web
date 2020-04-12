function fn(ary){
    let newAry = [];
    let len = ary.length;
    for (let i=0;i<len;i++){
        let idx = Math.floor(Math.random()*ary.length);
        newAry.push(ary[idx]);
        ary.splice(idx,1)
    }
    return newAry
}

console.log(fn([1,2,3,4]))