var sellingWood = function(m, n, prices) {
  const p = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
  for(const [i,j,price] of prices){
      if(p[i][j] < price){
          p[i][j] = price 
      }
  }
  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
  for(let i = 1; i <= m; i++){
      for(let j = 1; j <= n; j++){
          dp[i][j] = p[i][j]
          for(let k = 1; k <=j; k++){
              dp[i][j] = Math.max(dp[i][j],dp[i][k] + dp[i][j-k])
          }
          for(let k = 1; k <=i; k++){
              dp[i][j] = Math.max(dp[i][j],dp[k][j] + dp[i-k][j])
          }
      }
  }
  return dp[m][n]
};