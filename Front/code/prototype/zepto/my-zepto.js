(function (window) {

    var zepto = {}

    //这里就是构造函数
    function Z(dom, selector) {
        var i, len = dom ? dom.length : 0 //有dom就赋值长度
        for (i = 0; i < len; i++) {
            this[i] = dom[i] 
        }
        this.length = len
        this.selector = selector || ''
    }
    $.fn = {
        css: function (key, value) {
            alert('css')
        },
        html: function (value) {
            return '这是一个模拟的 html 函数'
            // alert('html') //会存在undefined
        }
    }
    Z.prototype = $.fn  //构造函数的原型，包含css和html两个函数


    zepto.Z = function (dom, selector) {
        return new Z(dom, selector)  //出现了构造函数！
    }

    zepto.init = function (selector) {
        //源码中，这里的情况比较复杂，只针对原型，弱化
        var slice = Array.prototype.slice  //数组形式
        var dom = slice.call(document.querySelectorAll(selector))//选择器转换为节点
        return zepto.Z(dom, selector) //传入dom数组和selector
    }

    // 即使用zepto时的$
    var $ = function (selector) {
        return zepto.init(selector)
    }
    window.$ = $

})(window)