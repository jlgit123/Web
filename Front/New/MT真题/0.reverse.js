Array.prototype.myreverse = function(ary){
    let newAry=[];
    for(let i=ary.length-1;i>=0;i--){
        newAry.push(ary[i])
    }
    return newAry;
}

console.log(Array.prototype.myreverse([1,2,3]))