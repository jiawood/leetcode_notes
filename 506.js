var findRelativeRanks = function(score) {
  const sortScore = score.slice().sort((a,b) => b - a)
  const res = new Array(score.length)
  for(let i = 0; i < res.length; i++){
      let cur = score[i]
      const index = sortScore.indexOf(cur)
      if(index === 0){
          res[i] = 'Gold Medal'
      }else if(index === 1){
          res[i] = 'Silver Medal'
      }else if(index === 2){
          res[i] = 'Bronze Medal'
      }else{
          res[i] = String(index + 1)
      }
  }
  return res 
};