/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a,b) => Number(String(b) + a) - Number(String(a) + b ) )
  if(nums[0] === 0){
      return '0'
  }
  return nums.join("")
 };