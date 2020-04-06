//用当前项跟他后面每一项进行对比，如果有小的，就交换位置
function select(ary){
    for(let i=0;i<ary.length;i++){
        let minIndex = i;
        for(let j=i;j<ary.length;j++){
            if(ary[minIndex]>ary[j]){
                minIndex = j;
            }
        }
        if( minIndex !== i){ //后面有更小的了
            [ary[minIndex],ary[i]]=[ary[i],ary[minIndex]];
        }
    }
    return ary
}

console.log(select([1,4,3,2]))