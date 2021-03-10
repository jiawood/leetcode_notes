/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  let n = s.length
  let dp = new Array(n).fill(n)
  dp[0] = 0
  for(let i = 0; i < n; i++){
      if(isP(s.slice(0,i+1))){
          dp[i] = 0
      }
          for(let j = 1; j <= i; j++){
              if(isP(s.slice(j,i+1))){
                  dp[i] = Math.min(dp[i],dp[j-1] + 1)
              }
          }   
  }
  return dp[n-1]
};

function isP(s){
  let l = 0
  let r = s.length - 1
  while(l < r){
      if(s[l] !== s[r]){
          return false 
      }
      l++
      r--
  }
  return true 
}