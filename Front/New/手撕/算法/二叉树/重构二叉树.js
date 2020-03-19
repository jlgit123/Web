//需掌握
class TreeNode{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


let preorder = "ABCDEFG";
let inorder = "CDBAEGF";
function buildTree(preorder,inorder){
    if(preorder.length === 0){ //长度是0
        return null;
    } 
    if(preorder.length === 1){ //长度是1
        return new TreeNode(preorder[0]);
    } 
    let root = new TreeNode(preorder[0])  //必须实例化
    let idx = inorder.indexOf(root.val) //找到根节点在中序遍历中对应的索引(这个值也就是左子树长度)
    root.left = buildTree(preorder.slice(1,idx+1),
                          inorder.slice(0,idx))
    root.right = buildTree(preorder.slice(idx+1,preorder.length),
                           inorder.slice(idx+1,inorder.length))
    return root
}
    
let root1 = buildTree(preorder,inorder)
preOrder(root1)
inOrder(root1)




//前序遍历 1.遍历根节点 2.前序遍历左子树 3.前序遍历右子树
function preOrder(root){
    if(root){
        console.log(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
}
// preOrder(root)

//中序遍历 1.中序遍历左子树 2.遍历根节点 3.中序遍历右子树
function inOrder(root){
    if(root){
        inOrder(root.left);
        console.log(root.val);
        inOrder(root.right);
    }
}
// inOrder(root)

//后序遍历 1.后序遍历左子树 2.后序遍历右子树 3.遍历根节点
function postOrder(root){
    if(root){
        postOrder(root.left)
        postOrder(root.right)
        console.log(root.val)
    }
}
postOrder(root)