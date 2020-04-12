function num(){
    let n = 0;
    return function(){
        console.log(n++)
    }
}
var count = num();
count();//0
count();//1
count();//2
