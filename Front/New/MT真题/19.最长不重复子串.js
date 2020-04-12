function longeststr(s){
    let str='';//当前最长字串
    let lens=0;
    for(let i=0;i<s.length;i++){
        if(str.indexOf(s[i])===-1){ //没出现过
            str+=s[i];
            lens = Math.max(lens,str.length);
        }
        else{
            str=str.substr(i+1)+s[i]//子串后挪一位
        }
    }
    return lens;
}
console.log(longeststr('abcabcbb'))//3
console.log(longeststr('bbb'))//1
console.log(longeststr('pwwkew'))//3