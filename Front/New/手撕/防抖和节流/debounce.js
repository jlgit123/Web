    // 频繁触发时，清楚对应的定时器，然后再开一个定时器，delay秒后执行
    function debounce(fn, delay){
        delay = delay || 300; //或运算符给delay一个默认值
        var timer = null;
        return function(){
            var that = this; //存储上下文this
            var _args = arguments; //存储参数
            clearTimeout(timer)
            timer = setTimeout(function(){
                fn.apply(that, _args)
            }, delay)
        }
    }
    //以下步骤为了说明为什么要暂存上下文和参数，以及防抖的真正效果
    // 不希望被频繁触发的函数
    function add(counterName){
        console.log(counterName+"："+ this.index++)
    }
    // 需要的上下文对象    
    let counter = {
        index :0
    }
    // 防抖的自增函数，绑定上下文counter
    let db_add = debounce(add, 10).bind(counter)
    // 每隔500ms频繁调用三次自增函数，但因为防抖的存在，这3次内只调用一次
    setInterval(function() {
      db_add("someCounter1");
      db_add("someCounter2");
      db_add("someCounter3");
    }, 500)  // 只有someCounter3 后面1，2，3，……
    /**
     * 预期效果：
     * 
     * 每隔500ms，输出一个自增的数
     * 即打印：
        someCounter3:  0
        someCounter3:  1
        someCounter3:  2
        someCounter3:  3
     */