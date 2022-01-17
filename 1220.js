// 对于dfs还是理解的不到位
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  let map = new Map()
  let MOD = 10 ** 9 + 7
  let ary = ['a','e','i','o','u']
  function dfs(pre,j){
      if(j == n){
          return 1
      }
      if(map.get(pre + ' ' + j)){
          return map.get(pre + ' ' + j)
      }
      let num = 0 
      for(let i = 0; i < 5; i++){
          if(pre === 'a' && ary[i] === 'e'){
              num += dfs(ary[i],j+1)
          }
          if(pre === 'e' && (ary[i] === 'a' || ary[i] === 'i')){
              num += dfs(ary[i],j+1)
          }
          if(pre === 'i' && ary[i] !== 'i'){
              num += dfs(ary[i],j+1)
          }
          if(pre === 'o' && (ary[i] === 'i' || ary[i] === 'u')){
              num += dfs(ary[i],j+1)
          }
          if(pre === 'u' && ary[i] === 'a'){
              num += dfs(ary[i],j+1)
          }
      }
      num = num % MOD
      map.set(pre + ' ' + j,num)
      return num 
  }
  let res = 0
  for(let i = 0; i < 5; i++){
      res = (res + dfs(ary[i],1)) % MOD 
  }
  return res

};