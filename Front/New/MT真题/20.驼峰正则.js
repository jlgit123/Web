function fn(str){
    return str.replace(/(?!^)\-(\w)(\w+)/g,(a,b,c)=>{
        return b.toUpperCase()+c.toLowerCase();
    })
}

console.log(fn('use-xbox-serios-one'))


function fn2(str){
    let ary = str.split('_');
    let newAry = [];
    ary.forEach((v,i)=>{
        if(i!==0){
            let nv = v[0].toUpperCase()+v.slice(1);
            newAry.push(nv)
        } else {
            newAry.push(v)
        }
    })
    return newAry.join('')
}

console.log(fn2('use_xbox_serios_one'))