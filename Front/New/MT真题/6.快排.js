function quick(ary){
    if(ary.length<=1){
        return ary
    }

    let midIndex = Math.floor(ary.length/2);
    let midValue = ary.splice(midIndex,1)[0];
    let L =[];
    let R =[];
    for(let i=0;i<ary.length;i++){
        if (ary[i]<midValue){
            L.push(ary[i]);
        } else {
            R.push(ary[i])
        }
    }
    return quick(L).concat(midValue,quick(R))
}



function fast(ary,l,r){
    if (l<r){
        let q = fn(ary,l,r);//标杆位置
        fast(ary,l,q-1);
        fast(ary,q+1,r);
    }
    return ary;
}


function fn(ary,l,r){
    let x=ary[r];
    let i =l-1;
    for(let j=l;j<r;j++){
        if(ary[j]<x){
            i=i+1;
            [ary[i],ary[j]]=[ary[j],ary[i]];
        }
    }
    [ary[i+1],ary[r]]=[ary[r],ary[i+1]];
    return i+1
}

console.log(fast([1,5,3,2,4],0,4))

