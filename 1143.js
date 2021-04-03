/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length
  let n = text2.length
  let dp = Array.from(new Array(m+1), () => new Array(n + 1).fill(0))
  for(let i = 0; i < m; i++){
      for(let j = 0; j < n; j++){
          dp[i+1][j+1] = Math.max(dp[i][j+1],dp[i+1][j])
          if(text1[i] === text2[j]){
              dp[i+1][j+1] = Math.max(dp[i][j] + 1,dp[i+1][j+1])
          }
      }
  }
  return dp[m][n]
};