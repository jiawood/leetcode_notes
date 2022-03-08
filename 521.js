// 除了题目读不懂，其实很简单的
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var findLUSlength = function(a, b) {
    if(a === b){
        return -1
    }else{
        return Math.max(a.length,b.length)
    }
};