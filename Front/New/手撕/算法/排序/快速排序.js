//A为待排序数组
//l为最左边的下标索引
//r为最右边的下标索引
//q是标杆的最终下标索引
function fast(ary,l,r){
    if(l<r){
        let q = fn(ary,l,r);
        fast(ary,l,q-1);
        fast(ary,q+1,r)
    }
    return ary;
}

function fn(ary,l,r){
    let x = ary[r]; //x是标杆，用于分割操作
    let i = l-1;
    for(let j=l;j<r;j++){ //i是一个初始位置，保证ary[i]的值始终比标杆小，ary[i+1]的位置比标杆大
        if(ary[j]<x){
            i=i+1;
            [ary[i],ary[j]]=[ary[j],ary[i]]
        }
    }
    [ary[i+1],ary[r]] = [ary[r],ary[i+1]]
    return i+1
}


let A = [5,2,4,6,1,3]
console.log(fast(A,0,A.length-1))

//方法2：容易理解但是占用空间
function quick(ary){
    if(ary.length<=1){
        return ary
    }
    let midIndex = Math.floor(ary.length/2);
    let midValue = ary.splice(midIndex,1)[0];

    let aryLeft = [];
    let aryRight = [];
    ary.forEach(item=>{
        item<midValue ? aryLeft.push(item) : aryRight.push(item);
    })
    return quick(aryLeft).concat(midValue,quick(aryRight))
}


let B = [5,2,4,6,1,3]
console.log(quick(B))

//时间复杂度Nlog(N)