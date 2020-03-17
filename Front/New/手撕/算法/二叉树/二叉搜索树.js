// 二叉查找树/二叉搜索树
/*
1. 左子树的所有节点的值小于根节点
2. 右子树的所有节点的值大于根节点
3. 左子树和右子树都是二叉查找树 */
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(6);
root.left = new TreeNode(5);
root.left.left = new TreeNode(4);
root.right = new TreeNode(7);
root.right.right = new TreeNode(8);

//核心代码
function BinarySearchTreeFind(root,t){
    if(root){
        if(root.val === t ){
            return true
        } else if (root.val < t ){
            return BinarySearchTreeFind(root.right,t)
        } else {
            return BinarySearchTreeFind(root.left,t)
        }
    }
    return false;
}

console.log(BinarySearchTreeFind(root,9))

function inOrder(root){
    if(root){
        inOrder(root.left)
        console.log(root.val)
        inOrder(root.right)
    }
}

inOrder(root)