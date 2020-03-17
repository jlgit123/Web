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

let s = new stack();
// s.push(1)
// s.push(2)
// s.peak()
// s.pop()
// s.pop()
// s.is_empty()
// s.size()
