var canvas, pen;
//获取canvas
canvas = document.getElementById('myCanvas');
//获取绘图上下文，将来就是用这个上下文在画板上绘制图形
pen = canvas.getContext('2d');
//设置画笔宽度和颜色
pen.lineWidth = 1;
pen.strokeStyle = "blue";
//声明变量，表示鼠标的按下状态,false表示未按下，true表示按下
var mousePress = false;
var last = null;


// 当前事件触发时取得点的坐标
function pos(event) {
    var ex,ey; 
    ex = event.clientX;
    ey = event.clientY;
    return {
        x: ex,
        y: ey
    };
}

function start(event) {
    mousePress = true;
}

function draw(event) {
    // 未按下鼠标不做任何操作
    if (!mousePress) return;
    // 否则为按下鼠标并移动的状态，取得点的坐标
    var xy = pos(event);
    // last不为空，表示有开始点和结束点，要进行绘图
    if (last != null) {
        // 准备好画笔
        pen.beginPath();
        // 得到起始点，即上次绘图的终止点
        pen.moveTo(last.x, last.y);
        // 绘制小的线段
        pen.lineTo(xy.x, xy.y);
        pen.stroke();
    }
    // 当前小线段结束的位置存储到last里
    last = xy;
}

function finish(event) {
    // 抬起鼠标，终止点为null
    mousePress = false;
    last = null;
}

//按下鼠标，绘图开始
canvas.onmousedown = start;
//移动鼠标，绘图
canvas.onmousemove = draw;
//抬起鼠标，绘图结束
canvas.onmouseup = finish;
