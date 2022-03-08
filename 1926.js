var slowestKey = function(releaseTimes, keysPressed) {
    let max = 0 
    let last = 0
    let res = ''
    for(let i = 0; i < releaseTimes.length; i++){
        let cur = releaseTimes[i]
        if(cur - last > max){
            max = cur-last 
            res = keysPressed[i]
        }
        if(cur - last === max){
            if( res < keysPressed[i]){
                res = keysPressed[i]
            }
        }
        last = cur 
    }
    return res 
};