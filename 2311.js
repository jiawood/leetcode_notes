var longestSubsequence = function(s, k) {
  let res = ''
  let sum = 0
  const n = s.length
  for(let i = n - 1; i >= 0; i--){
      if(s[i] === '1'){
          if(sum + Math.pow(2,n-1-i) <= k){
              sum += Math.pow(2,n-1-i)
              res = '1' + res 
          }
      }else{
          res = '0' + res 
      }
  }
  return res.length 
};