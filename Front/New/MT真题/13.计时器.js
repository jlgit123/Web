function start(){
    var dt = new Date();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    check(h);
    check(m);
    check(s);
    console.log(h+':'+m+':'+s)
    setInterval(()=>{
        start()
    },60*1000)

}

function check(t){
    if(t<10){
        t = "0"+t
    }
    return t
}

start()