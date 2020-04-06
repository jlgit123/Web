/* 
                 * JavaScript实现版本号比较
                 * 传入两个字符串，当前版本号：curV；比较版本号：reqV 
                 * 调用方法举例：Version('5.12.3','5.12.2')，将返回true
                 */
                
Version('v5.12.2a','v5.12.2b')

function Version(curV,reqV){

    var str1 = curV.match(/[A-Za-z]/g);//字符串数组
    var str2 = reqV.match(/[A-Za-z]/g);
    
    var arr1 = curV.match(/[\d]/g);  //数字数组
    var arr2 = reqV.match(/[\d]/g);

    let minL = Math.min(arr1.length,arr2.length);//最小长度
    let i = 0,diff = 0;
    while(i<minL){  //逐个比较每一位，如果相等则继续比较下一位
        diff = parseInt(arr1[i])-parseInt(arr2[i]);
        if(diff!=0) break;
        i ++;
    }

    
    if (diff>0) {
        console.log('新版本')
    }else if (diff<0) {
        console.log('旧版本')
    }else{ //不一定相等，比较字母
        let minS = Math.min(str1.length,str2.length);
        let j = 0,diffS = 0;
        while (j<minS){
            diffS = str1[j].charCodeAt() - str2[j].charCodeAt();
            if (diffS!=0) break;
            j ++
        }
        if(diffS>0) {console.log('新版本');}
        else if(diffS<0) {console.log('旧版本')}
        else {console.log('版本相同')} 
    }
}