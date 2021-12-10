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