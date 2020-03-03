define(function(){
    var util = {
        getFormatDate: function(date,type){
            if(!date){   //参数不存在，重新获取（演示效果，保证不报错）
                date = new Data()
            }
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var date = date.getDate()
            if (month<10){
                //强制类型转换
                month='0'+month
            }
            if (date<10){
                //强制类型转换
                date='0'+date
            }
            //强制类型转换
            if(type === 1){
                return year + '-' + month + '-' + date
            }
            if(type === 2){
                return year + '年' + month + '月' + date + '日'
            }
        }
    }
    return util   //返回一个对象，这个对象是一个函数

    //直接return也可以
    // return{ 
    //     getFormatDate: function(date,type){
    //         if(!date){   //参数不存在，重新获取（演示效果，保证不报错）
    //             date = new Data()
    //         }
    //         var year = date.getFullYear();
    //         var month = date.getMonth()+1;
    //         var date = date.getDate()
    //         if (month<10){
    //             //强制类型转换
    //             month='0'+month
    //         }
    //         if (date<10){
    //             //强制类型转换
    //             date='0'+date
    //         }
    //         //强制类型转换
    //         if(type === 1){
    //             return year + '-' + month + '-' + date
    //         }
    //         if(type === 2){
    //             return year + '年' + month + '月' + date + '日'
    //         }
    //     }
    // }
})