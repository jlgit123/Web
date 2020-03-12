function PubSub() {
    this.handlers = {};
   }
   PubSub.prototype = {
     // 订阅事件
     on: function(eventType, handler){
       var self = this;
       if(!(eventType in self.handlers)) {
         self.handlers[eventType] = [];
       }
       self.handlers[eventType].push(handler);//将订阅方法保存在数组里
       return this;
     },
      // 触发事件(发布事件)
     emit: function(eventType){
       var self = this;
       var handlerArgs = Array.prototype.slice.call(arguments,1);
       for(var i = 0; i < self.handlers[eventType].length; i++) {
        self.handlers[eventType][i].apply(self,handlerArgs);
       }
       return self;
     },
     // 删除订阅事件
     off: function(eventType, handler){
       var currentEvent = this.handlers[eventType];
       var len = 0;
       if (currentEvent) {
         len = currentEvent.length;
         //遍历找到订阅方法，删除该方法
         for (var i = len - 1; i >= 0; i--){
           if (currentEvent[i] === handler){
             currentEvent.splice(i, 1);
           }
         }
       }
       return this;
     }
   };

   var pubsub = new PubSub();
   var callback = function(data){
     console.log('一个callback触发函数：'+data);
   };
   //订阅点击事件
   pubsub.on('click', function(data){
     console.log('单击的第一个触发函数：' + data);
   });
   //订阅鼠标抬起事件
   pubsub.on('mouseup', function(data){
     console.log('抬起的第一个触发函数：' + data);
   });

   pubsub.on('click', callback);
   pubsub.on('mouseup', callback);

   //触发事件click
   pubsub.emit('click', '用户单击了一下');
   pubsub.emit('mouseup', '用户鼠标抬起');
   //删除事件mouseup的触发函数callback
   pubsub.off('mouseup', callback); //看看是不是取消了这个callback的触发事件呀
   pubsub.emit('mouseup', '用户鼠标又抬起来了');

   console.log('看下handlers:\n',pubsub.handlers)