class Queue{
    constructor(){
        this.queue = [];
    }

    size(){
        return this.queue.length;
    }

    is_empty(){
        return this.size() === 0;
    }
    //入队列操作
    enqueue(val){
        return this.queue.unshift(val)
    }

    //出队列操作
    dequeue(){
        if(this.is_empty()){
            return null;
        } else {
            return this.queue.pop()
        }
    }
}


class StackByOneQueue{
    constructor(){
        this.queue = new Queue();
    }
    push(val){
        return this.queue.enqueue(val);
    }
    pop(){
        for(let i=0; i<this.queue.size()-1;i++){
            let val =this.queue.dequeue();
            this.queue.enqueue(val);
        }
        return this.queue.dequeue();
    }
}

let s = new StackByOneQueue()
//后进先出，先进后出
s.push(3)
console.log(s.queue)  //Queue { queue: [ 3 ] }
s.push(4)
console.log(s.queue)  //Queue { queue: [ 4, 3 ] }
s.pop()
console.log(s.queue)  //Queue { queue: [ 3 ] }
s.pop()
console.log(s.queue)  //Queue { queue: [] }
