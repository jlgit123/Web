let stack1 = [];
let stack2 = [];
function enqueue(){
    stack1.push();
}
function dequeue(){
    if(stack1.length==1){
        return stack1.pop();
    }
    for(let i=0;i<stack1.length;i++){
        stack2.push(stack1.pop())
    }
    let res = stack1.pop();
    for(let i=0;i<=stack2.length;i++){
        stack1.push(stack2.pop())
    }
    return res
}