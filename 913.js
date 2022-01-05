// 这题说是动态规划，反正抄着写出来了，自己写写不出来，也不知道是什么意思
/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function(graph) {
  const n = graph.length
  const dp = new Array(n * 2).fill(0).map(_ => new Array(n).fill(0).map(_ => new Array(n).fill(-1)))
  const res = dfs(0,1,2)
  return res 
  
  function dfs(k,m,c){
      if(k >= 2 * n){
          return 0
      }
      let ans = dp[k][m][c]
      if(m === 0){
          return 1
      }
      if(m === c){
          return 2
      }
      if(ans === -1){
          if(k % 2 === 0){
              let win = false, draw = false 
              for(let i of graph[m]){
                  let t = dfs(k+1,i,c)
                  if(t === 1) win = true 
                  else if(t === 0) draw = true 
                  if(win) break 
              }
              if(win){
                  ans = 1 
              }else if(draw){
                  ans =  0
              }else{
                  ans = 2
              }
          }else {
              let win = false, draw = false 
              for(let i of graph[c]){
                  if(i === 0) continue 
                  let t = dfs(k+1,m,i)
                  if(t === 2) win = true 
                  else if(t === 0) draw = true 
                  if(win) break 
              }
              if(win){
                  ans = 2 
              }else if(draw){
                  ans =  0
              }else{
                  ans = 1
              } 
          }

      }
      dp[k][m][c] = ans 
      return ans
  }
};