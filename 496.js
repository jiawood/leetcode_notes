// 单调栈  
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = new Map()
  const stack = new Array()
  for(let i = nums2.length; i >= 0; i--){
      const cur = nums2[i]
      while(stack.length && cur > stack[stack.length - 1]){
          stack.pop()
      }
      if(stack.length){
          map.set(cur,stack[stack.length - 1])
      }
      stack.push(cur)
  }
  const res = []
  for(let i = 0; i < nums1.length; i++){
      if(map.get(nums1[i])){
          res.push(map.get(nums1[i]))
      }else{
          res.push(-1)
      }
  }
  return res 
};