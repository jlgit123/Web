function find(ary,target){
    let total = 0;
    let res = [];//存放结果
    for (let i=0;i<ary.length;i++){
        for(let j=i;j<ary.length;j++){
            total+=ary[j];
            if(total>=target){
                res.push(total);
            }
        }
        total = 0;
    }   
    return res
}

console.log(find([1,2,3,4],5))