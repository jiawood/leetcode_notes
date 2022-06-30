/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var maximumsSplicedArray = function(nums1, nums2) {
  const n = nums1.length
  let sum1 = 0 
  let sum2 = 0
  const arr1 = new Array(n)
  const arr2 = new Array(n)
  for(let i = 0 ;i < n; i++){
      arr1[i] = nums1[i] - nums2[i]
      arr2[i] = nums2[i] - nums1[i]
      sum1 += nums1[i]
      sum2 += nums2[i]
  }
  let max1 = arr2[0]
  let max2 = arr1[0]
  let tmp1 = arr2[0]
  let tmp2 = arr1[0]
  for(let i = 1; i < n; i++){

      if(tmp1 < 0){
          tmp1 = arr2[i]
      }else{
          tmp1 += arr2[i]
      }
      if(tmp1 > max1){
          max1 = tmp1
      }
      if(tmp2 < 0){
          tmp2 = arr1[i]
      }else{
          tmp2 += arr1[i]
      }
      if(tmp2 > max2){
          max2 = tmp2
      }
  }
  return Math.max(sum1 + max1,sum2 + max2)
};