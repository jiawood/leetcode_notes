/**
 * @param {number} n
 * @return {boolean}
 */

const check = (n) => {
  if(n && n[0] == 0){
      return false
  }
  n = Number(n)
  while(n >= 2 & n % 2 === 0 ){
      n /= 2
  }
  return n === 1 
}

var reorderedPowerOf2 = function(n) {
  const res = []

  const strN = String(n)
  const visited = new Array(strN.length).fill(false)
  const dfs = (tmp) => {
      if(tmp.length === strN.length){
          res.push(tmp.slice())
          return 
      }
      for(let i= 0; i < strN.length; i++){
          if(!visited[i]){
              
              visited[i] = true 
              dfs(tmp + strN[i])
              visited[i] = false 
          }
      }
  }

  dfs('')
  return res.map(i => check(i)).some(i => i === true)
};