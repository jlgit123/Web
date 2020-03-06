//on是订阅  emit是发布

//邮局
let e = {
    //存订阅者
    _callback:[],
    on(callback){
        this._callback.push(callback)
    },
    //发布者
    emit(value){
        this._callback.forEach(method =>{
            method(value)
        })
    }
}
//订阅
e.on(function(value){
    console.log('张三订阅:'+value)
})
e.on(function(value){
    console.log('李四订阅:'+value)
})
e.on(function(value){
    console.log('王五订阅:'+value)
})

//发布
e.emit('中央日报')