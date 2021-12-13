// dfs 超时
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  const memo = Array.from(new Array(n), () => new Array(n).fill(0))
  const res = dfs(src,dst,k+1)
  return res === Number.MAX_SAFE_INTEGER ? -1 : res 

  // 从s到d走k步的最小距离
  function dfs(s:number,d:number,k:number){
      if(k < 0){
          return Number.MAX_SAFE_INTEGER
      }
      if(s === d){
          return 0
      }
      if(memo[s][d] !== 0){
          return memo[s][d]
      }
      let min = Number.MAX_SAFE_INTEGER 
      for(let i = 0; i < flights.length; i++){
          const flight = flights[i] 
          if(s === flight[0]){
              min = Math.min(min, dfs(flight[1],d,k-1) + flight[2])
          }
      }
      return min 
  }
};

