// 计数脚本
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);//通过postMessag将结果传回主线程
  setTimeout("timedCount()", 500);
}

timedCount();
