/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    let res = 0
    for(let i = 1; i <= n ; i++){
        if( i % 7 === 0){
            res += (6 + i / 7 | 0)
        }else{
            res += (i % 7 + i / 7 | 0 )
        }
    }
    return res 
};