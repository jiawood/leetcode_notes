var findMinMoves = function(machines) {
  let sum = machines.reduce((a,b) => a+b)
  let n = machines.length
  if(sum % n != 0) {
      return -1
  }
  let avg = sum / n 
  let res = 0 
  let prev = 0 
  for(let i = 0; i < n; i++){
      res = Math.max(res, Math.max(machines[i] - avg, Math.abs(avg * i - prev)))
      prev += machines[i]
  }
  return res 
};