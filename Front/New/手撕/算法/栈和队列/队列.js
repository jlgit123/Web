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

let s = new Queue();
s.is_empty()
s.size()
s.enqueue(1)
s.enqueue(2)
s.dequeue()
s.dequeue()
s.is_empty()
s.size()