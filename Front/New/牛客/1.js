function getUrlParam(sUrl, sKey) {
    let paramsArr = sUrl.split('?')[1].split('#')[0].split('&')
    let params = []

    for (let i=0; i<paramsArr.length;i++){
        let pair = paramsArr[i].split('=');
        if (sKey == null){
            if(!isNaN(Number(pair[1]))){
                params.push(Number(pair[1]))
            } else {
                params.push(pair[1]) 
             }
        } else if (sKey==pair[0]){
            if(!isNaN(Number(pair[1]))){
                params.push(Number(pair[1]))
            } else {
                params.push(pair[1]) 
             }
        } 
    }
    return params
}





console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=ss&test=aa#hehe','key'))

