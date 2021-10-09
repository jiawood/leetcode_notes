/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const map = {}
  const n = s.length 
  const res = []
  for(let i = 0; i < n; i++){
      if(i + 10 > n){
          break 
      }
      const tmp = s.slice(i,i+10)
      if(!map[tmp]){
          map[tmp] = 1
      }else {
          map[tmp] += 1
      }
  }
  Object.keys(map).forEach(i => {
      if(map[i] > 1){
          res.push(i)
      }
  })
  return res 
  
};