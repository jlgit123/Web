//main.js是入口，不需要再被引用，直接require即可
require(['a.js'],function(a){
    var date = new Date()
    a.printDate(date)
})