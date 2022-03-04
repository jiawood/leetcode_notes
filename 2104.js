// 是一个不算难的题目，我想复杂了，一直没思路
var subArrayRanges = function(nums) {
  let ans = 0
  const n = nums.length
  for(let i = 0; i < n; i++){
      let min = nums[i]
      let max = nums[i]
      for(let j = i + 1; j < n; j++){
          min = Math.min(min,nums[j])
          max = Math.max(max,nums[j])
          ans += max - min 
      }
  }
  return ans
};