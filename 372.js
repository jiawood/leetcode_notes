// 二次幂的题目，也可以不用二次幂
// 因为所给的值会非常大，需要对所给的b数组进行分解，拆分，并不断mod
const MOD = 1337

function superPow(a, b) {
    if(b.length === 1){
        return pow(a,b[0]) % MOD 
    }
    const f = b.pop()
    return pow(superPow(a,b),10) * pow(a,f) % MOD 
};

function pow(a,b) {
    if(b === 0){
        return 1
    }
    if(b === 1){
        return a 
    }
    a %= 1337
    if(b % 2 === 1){
        return pow(a * a % 1337, b / 2 | 0) * a 
    }else {
        return pow(a * a % 1337, b / 2)
    }
}

// 很离谱，使用Math.pow 当数值很大的时候，会不准确
// 超出数据范围

// 有一个巧妙的方式，使用bigInt，使数据不超出
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
 var superPow = function(a, b) {
    let s = 1n
    a = BigInt(a)
    for(let i of b){
        s = s ** 10n
        s = s * a ** BigInt(i)
        s = s % 1337n
    }
    return s 
};