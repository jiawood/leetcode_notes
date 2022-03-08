/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let n = timePoints.length
  if(n > 1440){
      return 0
  }
  for(let i = 0; i < timePoints.length; i++){
      const t = timePoints[i]
      let [m,s] = t.split(':')
      m = +m 
      s = +s 
      timePoints[i] = m * 60 + s 
  }
  timePoints.sort((a,b) => a - b)
  let res = timePoints[0] + 1440 - timePoints[n-1]
  for(let i = 0; i < n - 1; i++){
      if(timePoints[i+1]-timePoints[i] < res){
          res = timePoints[i+1]-timePoints[i]
      }
  }
  return res 
};