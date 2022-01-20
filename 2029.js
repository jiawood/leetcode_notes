// 博弈题，代码很简单，但是理解起来很复杂
var stoneGameIX = function(stones) {
  let map = {}
  map[0] = 0 
  map[1] = 0
  map[2] = 0
  for(let i = 0; i < stones.length; i++){
      let s = stones[i] % 3 
          map[s] = map[s] + 1
  }
  if(map[0] % 2 === 0){
      return map[1] >= 1 && map[2] >= 1
  }else{
      return Math.abs(map[1] - map[2]) > 2
  }
};