/**
 * @param {number[]} nums
 * @return {boolean}
 */
//单调栈
var find132pattern = function(nums) {
  let n = nums.length
  let leftMin = new Array(n).fill(Infinity)
  let left = Infinity
  for(let i = 1; i < n; i++){
      if(nums[i-1] < left){
          left = nums[i-1]
      }
      leftMin[i] = left
  }
  let stack = []  //单调递减券
  let secondLarge = -Infinity
  for(let i = n -1 ; i > 0; i--){
      while(stack.length && stack[stack.length - 1] < nums[i]){
          let secondLarge = stack.pop()
          if(secondLarge > leftMin[i]){
              return true
          }
      }
      stack.push(nums[i])
  }
  return false 
};