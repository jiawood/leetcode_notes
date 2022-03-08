/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
// 先有一个前缀数组，方便计算
// lefts 离它最近的最左边的一个数字
// rights 离它最近的最右边的一个数字
var platesBetweenCandles = function(s, queries) {
    const n = s.length
    const preSum = new Array(n)
    const lefts = new Array(n)
    const rights = new Array(n)
    let sum = 0
    for(let i = 0,l = -1,r = -1,j = n - 1; i < n; i++,j--){
        if(s[i] == '*'){
            sum++
        }else{
            l = i
        }
        lefts[i] = l 
        if(s[j] == '|'){
            r = j 
        }
        rights[j] = r 
        preSum[i] = sum 
    }
    const res = []
    for(let q of queries){
        const [left,right] = q 
        const l = rights[left]
        const r = lefts[right]
        if(l == -1 || r == -1){
            res.push(0)
        }else{
            res.push(preSum[r] - preSum[l] <= 0 ? 0 : preSum[r] - preSum[l])
        }
    }
    return res 
};