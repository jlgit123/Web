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

function depth(root){
    if(!root) return 0
    let L = depth(root.left);
    let R = depth(root.right);
    return Math.max(L,R)+1
}

function depth2(root){
    if(!root) return 0;
    let d = 1;
    let q = [];
    q.push(root);//每遍历一层存一个null
    q.push(0);
    while(q.length){
        let cur = q.shift();
        if(cur == 0 && q.length){
            d++;
            q.push(0)
        }else{
            if(cur.left){
                q.push(cur.left)
            }
            if(cur.right){
                q.push(cur.right)
            }
        }
    }
    return d
}
function depth3(root){
    if(!root) return 0;
    let d = 1;
    let queue =[];
    queue.push(root);
    queue.push('e');//每层用e来分割
    while(queue.length){
        let node = queue.shift();
        if(node == 'e' && queue.length){
            d++;
            queue.push('e');//重点
        }else{
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    return d
}
console.log(depth3(root))