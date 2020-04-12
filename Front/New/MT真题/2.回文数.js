function fn(num){
    num=''+num;
    return num.split('').reverse().join('') === num
}

console.log(fn(1))