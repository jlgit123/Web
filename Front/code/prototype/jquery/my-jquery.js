(function (window) {
 
    //和my-zepto.js中的$是一回事
    var jQuery = function (selector) {
        //注意new 关键字，第一步就找到了构造函数
        //（1）执行new 实例化
        return new jQuery.fn.init(selector)
    }

    //一个对象，拥有html和css两个方法
    jQuery.fn = {
        css: function (key, value) {
            alert('css')
        },
        html: function (value) {
            return 'html'
        },
        // getNodeName: function(){
        //     //....
        // }
    
    }

    //构造函数（2）
    var init = jQuery.fn.init = function (selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        //把选择器对应的元素构造成数组，和zepto类似

        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i] //把数组的元素都变成实例的属性
        }
        this.length = len
        this.selector = selector || '' 
    }

    //定义原型 为一个对象
    //这是使得传入选择器拥有css和html方法的根本

    init.prototype = jQuery.fn

    window.$ = jQuery

})(window)