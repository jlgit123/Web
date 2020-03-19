
// 二分查找

// O(N)
function f(array,t){
    for(let i=0; i<array.length;i++){
        if (array[i]===t){  //O(1)
            return true;
        }
    } return false;
}

let ary = new Array(100000000).fill(0)
for (let i=0;i<ary.length;i++){
    ary[i] = i;
}
// console.log(f(ary,100000000))    // 9.418s
//巧用数组API 
// console.log(ary.includes(10000000))



//二分查找[每次砍一半]
function BinarySearch(array, t){
    var left = 0;
    var right = array.length-1; 
    while(left<=right){    
        var mid = parseInt((left+right) /2)
        if(array[mid]<t){
            left = mid + 1
        } else if(array[mid]>t){
            right = mid -1
        } else {
            return true
        }
    }
    return false
}
// console.log(BinarySearch(ary,100000000))  //8.755

//时间复杂度 f(n) = f(n/2)+O(1)
//假设 n = 2^m  f(2^m) = f(2^(m-1)) + O(1) =f(2^(m-2)) + O(1)+ O(1)
// =... = f(2^(m-m)) + m * O(1) = f(1) + m*O(1) = O(1) + m*O(1) = O(m)
// 因为m = logn
// ☆☆所以时间复杂度f(n)=O(logn)  
function RecursiveBinarySearch(array,t,left,right){
    if(left<=right){   //O(1)
        let mid = parseInt((left+right) /2)  // O(1)  parseInt防止出现小数直接true
        if (array[mid]<t){
            return RecursiveBinarySearch(array,t,mid+1,right) //f(n/2)
        } else if (array[mid]>t){
            return RecursiveBinarySearch(array,t,left,m-1)
        } else {
            return true
        }
    }
    return false
}
console.log(RecursiveBinarySearch(ary,99999999,0,ary.length-1))



// 进阶（了解）
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
    ];
function searchMatrix(matrix,t){
    let m = matrix.length;   //行
    let n = matrix[0].length; //列
    let i = 0, j = n-1;  //每行最后一列开始找
    while (i < m && j>=0){
        if (matrix[i][j]<t){
            i+=1;
        } else if (matrix[i][j]>t){
            j-=1;
        } else {
            return true
        }
    }
    return false
}
console.log(searchMatrix(matrix,33))
