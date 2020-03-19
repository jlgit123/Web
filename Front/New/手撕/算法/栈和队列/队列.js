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

let q = new Queue();
q.is_empty()
q.size()
q.enqueue(1)
q.enqueue(2)
q.dequeue()
q.dequeue()
q.is_empty()
q.size()