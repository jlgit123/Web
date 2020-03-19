class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


//路径和，路径数
function sumTree(root ,sum=0){
    if(!root){
        return 0
    }
    sum += root.val
    if(!root.left && !root.right){
        return sum
    }
    return sumTree(root.left, sum) + sumTree(root.right, sum)
}


//是否有某条路径 节点和为sum
function hasPathSum(root,sum){
    if(!root){   //首先判断是不是有根节点
        return false
    }
    if(!root.left && !root.right){  //没有子节点的话
        return root.val === sum //直接判断该节点的值是不是sum
    }
    return hasPathSum(root.left,sum-root.val)||hasPathSum(root.right,sum-root.val)
}

let root = new TreeNode(2);
root.left = new TreeNode(7);
root.right = new TreeNode(5);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(5);
root.left.right.right = new TreeNode(11);

root.right.left = new TreeNode(9);
root.right.left.left = new TreeNode(4);

console.log(sumTree(root))  //77
console.log(hasPathSum(root,11))  //true
