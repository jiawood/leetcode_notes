/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let n = nums.length
  let res = new Array(n).fill(-1)
  let stack = []
  for(let i = 0; i < 2 * n; i++){
      while(stack.length && nums[stack[stack.length - 1]] < nums[i % n]){
          res[stack.pop()] = nums[i % n]
      }
      stack.push(i % n)
  }
  return res 
};