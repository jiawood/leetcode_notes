// 虽然是简单题，但是有巧妙的写法
// 可以将时间复杂度降到O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
    let n = nums.length
    let ans = 0
    let map = {}
    for(let b = n -3; b > 0; b--){
        let c = b + 1 
        for(let d = c +1; d < n; d++){
            let total = nums[d] - nums[c]
            if(map[total]){
                map[total]++
            }else{
                map[total] = 1
            }
        }
        for(let a = 0; a < b; a++){
            if(map[nums[a] + nums[b]]){
            ans += map[nums[a]+ nums[b]]
            }
        }
    }
    return ans 
};