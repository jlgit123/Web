// ES6 其他常用功能
//(1) const和let
// let i = 10;
// i = 100 ;
// const j = 20;
// //j = 200;

//(2) 多行字符串/模板变量
//  var name = "zhangsan" ,age = 20, html ='';
//  html += '<div>';
//  html += '  <p>'+name+'</p>';
//  html += '  <p>'+age+'</p>';
//  html += '<div>';

 const name = "zhangsan" ,age = 20;
 const html = `   
            <div>
                <p>${name}</p>
                <p>${age}</p>
            </div>
        `;   //注意必须使用反引号

//(3) 解构赋值
// var obj = {a:100, b:200}
// var a = obj.a
// var b = obj.b
// var arr = ['xxx','yyy','zzz']
// var x = arr[0]
// var z = arr[2]

const obj = {a:100,b:200} //从对象obj中把a和b两个属性解构出来
const{a,b} = obj  //，再赋值给a和b两个变量
const arr = ['xxx','yyy','zzz']
const [x,y,z] = arr


//(4) 块级作用域
// var obj = {a:100, b:200}
// for (var item in obj){
//     console.log(item)
// }
// console.log(item) //'b'

var obj = {a:100, b:200}
for (let item in obj){
    console.log(item)
}
console.log(item)  //undefined


//（5） 函数默认参数
// function fn(a,b){
//     if(b==null){
//         b=0
//     }
// }
function fn(a,b=0){

}


//（6） 箭头函数基本用法
// var arr = [1, 2, 3];
// arr.map(function (item) {
//     return item + 1;
// })

const arr = [1, 2, 3];
arr.map(item => item + 1);   //如果只有一个参数，一行ok，不用return
arr.map((item, index) => {  //如果大于一个参数，必须多行啦
    console.log(item); 
    return item + 1;
});