//输出list的所有维度组合
var list = [['热', '冷', '冰'], ['大', '中', '小'], ['重辣', '微辣'], ['重麻', '微麻']];
function compose(list){
    var res = list.reduce((result,property)=>{
        return property.reduce((acc,cur)=>{
            return acc.concat(result.map(v=>[].concat(v,cur)));
        },[]);
    });
    return res.map(arr=>arr.join('+'))
}
console.log(compose(list));