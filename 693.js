/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    let pre = null 
    while(n > 0){
        let cur = n % 2
        if(pre !== null){
            if(pre === cur){
                return false 
            }
        }
        pre = cur 
        n = n / 2 | 0
    }
    return true 
};