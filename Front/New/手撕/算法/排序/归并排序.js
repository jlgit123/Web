function mergeSort(ary){
    if(ary.length <= 1) return ary;
    let midIndex = Math.floor(ary.length/2);  //中间索引
    let left = ary.slice(0,midIndex);         //分割数组
    let right = ary.slice(midIndex);
    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftAry,rightAry){
    let res =[];
    while(leftAry.length && rightAry.length){  //循环执行，直到数组变空了
      if(leftAry[0]<rightAry[0]){
        res.push(leftAry.shift()); //把最小的最先取出，放到结果集中  
      } else {
        res.push(rightAry.shift())
      }
    }
    return res.concat(leftAry,rightAry)  //剩下的就是合并，这样就排好序了  
}

var arr = mergeSort([32,12,56,78,76,45,36]);
console.log(arr);   // [12, 32, 36, 45, 56, 76, 78]