var shortestToChar = function(s, c) {
  const n = s.length
  const res = new Array(n).fill(n)
  let last = -n  
  for(let i = 0; i < n; i++){
      if(s[i] === c){
          for(let j = last > 0 ? last : 0; j <= i; j++){
              res[j] = Math.min(res[j],i - j,j - last)
          }
          last = i 
      }else{
          res[i] = Math.min(res[i],i - last)
      }
  }
  return res 
};

// 左右两次遍历，然后去最小
var shortestToChar = function(s, c) {
  const n = s.length 
  const left = new Array(n).fill(n)
  const right = new Array(n).fill(n)
  const res = new Array(n) 
  let last = -n 
  for(let i = 0; i < n; i++){
      if(s[i] === c){
          last = i 
      }
      left[i] = Math.min(left[i], i - last)
  }
  last = 2 * n
  for(let i = n - 1 ; i >= 0; i--){
      if(s[i] === c){
          last = i 
      }
      right[i] = Math.min(right[i], last - i)
  }
  for(let i = 0 ; i < n; i++){
      res[i] = Math.min(left[i],right[i])
  }
  return res 
};