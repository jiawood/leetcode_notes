// 自己思路有了，但是没有想到，从一个值最大开始一直往下除以2，一直这样进行下去，如果中间不满足，则直接返回false
// 因为对于最大值，只能除2
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canReorderDoubled = function(arr) {
  const map = {}
  for(let i = 0; i < arr.length; i++){
      const cur = arr[i]
      if(map[cur]){
          map[cur]++
      }else{
          map[cur] = 1
      }
  }
  const keys = Object.keys(map)
  keys.sort((a,b) => a -b) 
  for(let i = 0; i < keys.length; i++){
      const key = keys[i]
      if(key > 0 && map[key]){
          if(map[key * 2] >= map[key]){
              map[key * 2] = map[key * 2] - map[key]
          }else{
              return false 
          }
      }
      if(key === 0){
          if(map[key] % 2 !== 0){
              return false 
          }
      }
      if(key < 0 && map[key]){
          if(map[key / 2] >= map[key]){
              map[key / 2] = map[key / 2] - map[key]
          }else{
              return false 
          }
      }
  }
  return true 
};