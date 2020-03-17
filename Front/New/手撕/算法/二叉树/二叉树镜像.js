class TreeNode{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

//核心代码
function Mirror(root){
    if(root){
        tmp = root.left
        root.left = root.right
        root.right = tmp
        Mirror(root.left)
        Mirror(root.right)
    }
    // return root  
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


function preOrder(root){
    if(root){
        console.log(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
}

preOrder(root)
preOrder(Mirror(root))