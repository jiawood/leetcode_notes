/**
 * @param {number[]} nums
 * @return {number}
 */
//就是一个简单的二分
var findMin = function(nums) {
  if(nums.length == 1) return nums[0]
  let left = 0
  let right = nums.length - 1
  let mid 
  while(left < right){
      mid = Math.floor((left + right + 1) / 2)
      if(nums[left] < nums[right]){
          return nums[left]
      }else{

          if(nums[left] <= nums[mid]){
              left = mid + 1
          }else{
              right = mid
          }
      }
  }
  return nums[mid]
};