/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let res = duration
  let last = timeSeries[0]
  for(let i = 1; i < timeSeries.length; i ++){
      const t = timeSeries[i]
      res += duration
      if(t - last < duration){
          res = res + t - last - duration 
      }
      last = t 
  }
  return res 
};