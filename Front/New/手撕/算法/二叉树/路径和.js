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