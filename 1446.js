var maxPower = function(s) {
    let max = 1 
    let count = 1
    let pre = s[0]
    for(let i = 1; i < s.length; i++){
        let cur = s[i]
        if(cur === pre){
            count++
            max = Math.max(max,count)
        }else{
            count = 1 
            pre = s[i]
        }
    }
    return max 
};