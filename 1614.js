/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let cur = 0
    let max = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            cur++
            max = Math.max(cur,max)
        }
        if(s[i] === ')'){
            cur--
        }
    }
    return max 
};