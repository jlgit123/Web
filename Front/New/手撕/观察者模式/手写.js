class EventEmiter{
    constructor(){
        this.eventPool={
            //type1:[func1, func2, func3……]
            //type2:[func5,func6……]
        }
    }
    //
    on (type,func){
        var that = this;
        if(!(type in that.eventPool)) {
            that.eventPool[type] = []; //没有这个事件类型，创建一个
        }
        that.eventPool[type].push(func); //将触发函数保存在数组里
        return this;
    }
    emit(type,func){
        var that = this;
        try{
            if (arguments.length===1){
                //不传func,全部触发
                let target = that.eventPool[type];
                let count = target.length;
                for (var i=0;i<target.length;i++){
                    target[i]();
                }
            } else {
                let target = that.eventPool[type];
                let index = target.indexOf(func); //找到触发函数对应的索引
                if (index===-1) throw error;    
                func();
            }
            return true;
        } catch(e){
            console.error('你要触发的我这没有哦')
            return false;
        }
    };
    off(type,func){
        var that = this;
        try{
            if (arguments.length===1){
                //不传func,全部删除
                delete that.eventPool[type];
            } else {
                let target = that.eventPool[type];
                let index = target.indexOf(func); //找到触发函数对应的索引
                if (index===-1) throw error;    
                target.splice(index,1); //删除这一个
            }
            return true;
        } catch(e){
            console.error('你要删除的我这没有哦')
            return false;
        }
    };
    once(type,func){
        this.emit(type,func) ? this.off(type,func) : null;
        //三元运算符实现触发一次函数后删除（慎用）
    }
}

var pubsub = new EventEmiter();
var callback1 = function(){
    console.log('我是一个触发函数A');
};

var callback2 = function(){
    console.log('我是一个触发函数B');
}
//订阅点击事件
pubsub.on('click',callback1);
//订阅鼠标抬起事件
pubsub.on('mouseup', callback1);

pubsub.on('click', callback2);
pubsub.on('mouseup', callback2);

//触发事件click
pubsub.emit('click', callback1);  //A
pubsub.emit('mouseup', callback2);  //B
pubsub.emit('mouseup'); //AB 
//删除事件mouseup的触发函数callback
// pubsub.off('mouseup'); 
pubsub.off('mouseup', callback2); 
// pubsub.once('mouseup', callback2); 
pubsub.emit('mouseup'); //A

console.log('看下handlers:\n',pubsub.eventPool)