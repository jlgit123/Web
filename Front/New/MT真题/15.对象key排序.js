function fn(obj){
    //1.value值排序存到数组
    let ary =[];
    let newObj = {};
    for(key in obj){
        ary.push(obj[key]);
        newObj[obj[key]]=key;
    }
    ary.sort((a,b)=>b-a)
    //2.遍历存入
    let res =[];
    ary.forEach(item=>{
        res.push(newObj[item])
    })
    return res
}

console.log(fn({bill:500, sam:480, roark:501}))