/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if(nums.length === 1){
      return 0
  }
  let a = -1 
  let b = 0 // 最大值
  for(let i = 1; i < nums.length; i++){
      if(nums[i] > nums[b]){
          a = b 
          b = i 
      }else if(a == -1 || nums[i] > nums[a]){
          a = i 
      }
  }
  return nums[b] >= nums[a] * 2 ? b : -1
};