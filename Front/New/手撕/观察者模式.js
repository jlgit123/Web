//Subject(小宝宝)
class Subject{
    constructor(name){
        this.name = name
        //小宝宝状态
        this.state = '开心'
        this.observers = [] //存放观察者
    }
    //需要将观察者放到自己身上
    attach(ther){
        this.observers.push(ther)
    }
    //更新观察者的状态
    setState(state){
        this.state = state
        //循环取出每个观察者
        this.observers.forEach(ther => {
            ther.update(this)
        })
    }
}

class Observer{
    constructor(name){
        this.name=name
    }
    //观察小宝宝的状态
    update(subject){
        console.log(this.name+':'+subject.name+'当前状态是:'+subject.state)
    }
}

let baby = new Subject('小宝宝')

let father = new Observer('爸爸')
let mother = new Observer('妈妈')

baby.attach(father)
baby.attach(mother)

baby.setState('不开心')
baby.setState('灰常开心')

