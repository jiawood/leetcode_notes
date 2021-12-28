/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  let ans = []
  words = words.sort((a,b) => a.length - b.length)
  let wordSet = new Set()
  for(let word of words){
      if(exits(word,wordSet)){
          ans.push(word)
      }
      wordSet.add(word)
  }
  return ans
};

// word 是否存在wordSet里面
// 动态规划的逻辑
function exits(word,wordSet) {
  const dp = new Array(word.length).fill(false)
  for(let i = 0; i < dp.length; i++){
      if(wordSet.has(word.slice(0,i+1))){
          dp[i] = true 
          continue
      }
      for(let j = 0;j < i; j++ ){
          if(dp[j] && wordSet.has(word.slice(j+1,i+1))){
              dp[i] = true
              break  
          }
      }
  }
  return dp[dp.length - 1]
}


// dfs 
// 虽然超过时间限制，但是dfs思路很清晰
var findAllConcatenatedWordsInADict = function(words) {
  const wordSet = new Set(words)

  // word 是不是 连接词，num是连接词的个数
  function dfs(word,num){
      if(!word){
          return num > 1
      }
      for(let i = 0; i < word.length; i++){
          if(wordSet.has(word.slice(0,i+1))){
              if(dfs(word.slice(i+1), num + 1)){
                  return true 
              }
          }
      }
      return false 
  }

  const ans = []
  for(let word of words){
      if(dfs(word,0)){
          ans.push(word)
      }
  }
  return ans 
};