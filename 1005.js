var largestSumAfterKNegations = function(nums,k) {
  nums.sort((a,b) => a - b)
  let nCount = 0
  let mAbs = Number.MAX_SAFE_INTEGER
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < 0){
      nCount++
    }
    mAbs = Math.min(mAbs, Math.abs(nums[i]))
  }
  let res = 0
  if( nCount < k){
    let diff = k - nCount 
    res = nums.reduce((a,b)=> a + Math.abs(b),0)
    if(diff % 2 != 0){
      res -= mAbs * 2
    }
  }else {
    for(let i = 0; i < nums.length; i++){
      if(nums[i] < 0 && k > 0){
        res += Math.abs(nums[i])
        k--
      }else {
        res += nums[i]
      }
    }
  }
  return res 
}