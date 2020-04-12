//['1a', '3b', '1c', '2a', '7b', '2a']这样一个由数字和字母构成的数组
//求出现最多次字母的前系数和，例如：a出现了三次，最多，输出1+2+2=5
function fn(ary){
    //1.数字和字母分别构成新的数组
    let num = [];
    let str = [];
    for(let i=0;i<ary.length;i++){
        num.push(ary[i].match(/[\d]/)[0]);
        str.push(ary[i].match(/[A-Za-z]/)[0]);
    }
    //2.存出现次数
    let obj = {};
    let res = 0;
    str.forEach((item)=>{
        obj[item] = obj[item]?obj[item]+1:1;
    })
    //3.获取出现最多的字母
    let max = 0,s='';
    for(item in obj){
        if(obj[item]>max){
            max = obj[item];
            s = item;
        }
    }

    //4.系数和
    str.forEach((item,index)=>{
        if(item===s){
            res += parseInt(num[index])
        }
    })
    return res

}

console.log(fn(['1a', '3b', '1c', '2a', '7b', '2a']))//5