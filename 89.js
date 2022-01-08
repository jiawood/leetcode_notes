/**
 * @param {number} n
 * @return {number[]}
 */
 // 思路很简单，但是自己就是转不过弯来
 var grayCode = function(n) {
    let res = [0,1]
    let delta = 2 
    for(let i = 1; i < n; i++){
        for(let j = delta - 1; j >= 0; j--){
            res.push(res[j]+delta)
        }
        delta *= 2 
    }
    return res 
};