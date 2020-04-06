Array.prototype.mmap = function(cb){
    const ary = this;
    return ary.reduce((acc,cur,index)=>{
        acc.push(cb(cur,index,ary));
        return acc;
    },[])
}

console.log([1,2,3].mmap(v=>v+1)) //[ 2, 3, 4 ]