
function dispatchCookies(children,cookies){
  if(cookies == null||cookies.length == 0)
    return 0
  cookies.sort((a,b)=>a-b); //饼干数量和孩子的胃口都排序
  children.sort((a,b)=>a-b);
   
  var count = 0
  for(var i = 0,j=0; i< cookies.length;i++){  //i表示饼干数量
    if(cookies[i] >= children[j]){  
      count++;j++
    }
  }
  return count
}

console.log(dispatchCookies([1,1],[1,2,3]))