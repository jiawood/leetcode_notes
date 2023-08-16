/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var circularGameLosers = function(n, k) {
    const set = new Set()
    let player = 1
    let i = 1
    while(!set.has(player)){
        set.add(player)
        player = (player + k * i) % n === 0 ? n : (player + k * i) % n
        i++
    }
    const ans = []
    for(let i = 1; i< n +1; i++){
        if(!set.has(i)){
            ans.push(i)
        }
    }
    return ans
};