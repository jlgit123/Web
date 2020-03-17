function insert(ary){
    for (let j=1;j<ary.length;j++){   //手里有一张
        let key = ary[j];             //抓到的牌
        i = j-1;                      //手里最后(最大)的那张
        while(i>=0 && ary[i]>key){    //当前的牌比抓到的牌大，需要往后挪挪
            ary[i+1] = ary[i]         //往后挪一位
            i = i-1                   //继续往前找，看看是不是还比抓到的牌大
        }
        ary[i+1]=key;                 //前面的牌都比抓到的牌小了，就把抓到的牌放在这了
    }
    return ary
}

let A = [5,2,4,6,1,3]
console.log(insert(A))
//最坏时间复杂度 1+2+3+4+5
//1+2+…+(N-1) = N(N-1)/2 ≈ O(N^2)