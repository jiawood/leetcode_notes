var cherryPickup = function(grid) {
  const n = grid.length 

  const dp = new Array(2 * n + 1).fill(0).map((_) => new Array(n + 1).fill(0).map((_) => new Array(n + 1).fill(Number.MIN_SAFE_INTEGER)))

  dp[2][1][1] = grid[0][0]
  for(let k = 3; k <= 2 * n; k++){
      for(let i1  = 1; i1 <= n; i1++){
          for(let i2 = 1; i2 <= n; i2++){
              const j1 = k - i1 
              const j2 = k - i2 
              if(j1 <= 0 || j1 > n || j2 <= 0 || j2 > n){
                  continue
              }
              const A = grid[i1-1][j1-1]
              const B = grid[i2-1][j2-1]
              if(A === -1 || B === -1){
                  continue
              }
              let a = dp[k-1][i1][i2]
              let b = dp[k-1][i1][i2-1]
              let c = dp[k-1][i1-1][i2-1]
              let d = dp[k-1][i1-1][i2]
              let t = Math.max(a,b,c,d) + A
              if(i1 !== i2){
                  t+= B 
              }
              dp[k][i1][i2] = t 
          }
      }
  }
  return dp[2 * n][n][n] <= 0 ? 0 : dp[2 * n][n][n]

};