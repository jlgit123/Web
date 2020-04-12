function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);


function bfs(root){
    if(!root) return [];
    let res =[];
    let queue = [];
    queue.push(root);
    while(queue.length){
        let node = queue.shift();
        res.push(node.val);
        if (node.left){
            queue.push(node.left)
        } 
        if(node.right){
            queue.push(node.right)
        }
    }
    return res
}


console.log(dfs(root))


function dfs(root){
    if(!root) return [];
    let res = [];
    let stack = [];
    stack.push(root);
    while(stack.length){
        let node=stack.pop();
        res.push(node.val);
        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }
    }
    return res
}