// 自己写个二分都费劲，还一直超时，心态崩了
/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
  let l = 0
  let r = s.length 
  let ans = ''
  while(l < r){
      const mid = l + (r - l) / 2 | 0 // 右中位数
      if(check(mid, s)){
          ans = check(mid, s)
          l = mid + 1
      }else {
          r = mid 
      }
  }
  return ans 
};

function check(j, s) { 
  let set = new Set()
  let i = 0;
  while(i + j <= s.length){
      if(set.has(s.slice(i,i+j))){
          return s.slice(i,i+j)
      }else{
          set.add(s.slice(i,i+j))
      }
      i++
  }
  return ''
}

// 抄了一个写法，过了，有点滑动窗口的意思
var longestDupSubstring = function(s) {
  let curStr = ''
  let maxStr = ''
  for(let i = 0, j = 0; i < s.length; i++) {
      curStr = curStr.replace(s[i-1],'') // 删掉第一个值
      while(curStr.length <= maxStr.length && j < s.length){
          curStr += s[j]
          if(s.lastIndexOf(curStr) !== i && curStr.length > maxStr.length){
              maxStr = curStr
          }
          j++
      }
  }
  return maxStr
};

// 草，还有另外一个更暴力的
var longestDupSubstring = function(s) {
  let ans = ''
  for(let i = 0; i < s.length; i++){
      while(s.slice(i + 1).includes(s.slice(i,i + ans.length + 1))){
          ans = s.slice(i,i + ans.length + 1)
      }
  }
  return ans 
};