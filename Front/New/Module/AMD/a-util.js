define(['./util.js'], function(util){
    var aUtil = {
        aGetFormatDate: function (date) {
            return util.getFormatDate(date, 2)
        }
    }
    return aUtil
})

//异步加载的好处：不依赖不加载
// define(function(){
//     return{
//         aGetFormatDate: function () {
//             return '不再依赖于util.js'
//         }
//     }
// })