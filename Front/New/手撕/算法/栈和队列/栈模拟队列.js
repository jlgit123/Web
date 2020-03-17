class stack{
    constructor(){
        this.stack = []; 
    }

    size(){
        return this.stack.length
    }

    is_empty(){
        return this.size()===0
    }

    //弹出栈顶元素
    pop(){
        if(this.is_empty()){
            return null;
        } else {
            return this.stack.pop();
        }
    }

    //返回栈顶元素，但是不弹出
    peak(){
        if(this.is_empty()){
            return null
        } else {
            return this.stack[this.size()-1]
        }
    }

    push(val){
        return this.stack.push(val)
    }
}


class QueueByTwoStacks{
    constructor(){
        this.stack1 = new stack();
        this.stack2 = new stack();
    }
    enqueue(val){
        this.stack1.push(val);
    }
    dequeue(){
        if(this.stack1.size()===1){    //额外的场景！！
            return this.stack1.pop();
        }
        for (let i=0;i<=this.stack1.size()-1;i++){
            let value = this.stack1.pop();
            this.stack2.push(value);
        }
        let res = this.stack1.pop();
        for (let j=0;j<=this.stack2.size();j++){  
            let value = this.stack2.pop();;
            this.stack1.push(value);
        }
        return res;
    }

}

let q = new QueueByTwoStacks();
//先进先出，后进后出
q.enqueue(1)
console.log(q.stack1)  //stack { stack: [ 1 ] }
q.enqueue(2)
console.log(q.stack1)  //stack { stack: [ 1, 2 ] }
q.enqueue(3)
console.log(q.stack1)  //stack { stack: [ 1, 2 ] }
q.dequeue()
console.log(q.stack1)  //stack { stack: [ 2 ] }
q.dequeue()
console.log(q.stack1)  //stack { stack: [] }
q.dequeue()
console.log(q.stack1)  //stack { stack: [] }
q.dequeue()
console.log(q.stack1)  //stack { stack: [] }
 



