// 先写一个暴力解法
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let arr = new Array(n).fill(0).map((v,i) => i+1)
  let times = 0
  while(arr.length > 1){
      let newArr = []
      if(times % 2 === 0){
          for(let i = 1;i < arr.length; i = i+2){
              newArr.push(arr[i])
          }
      }else{
          for(let i = arr.length - 2; i >= 0; i = i - 2){
              newArr.unshift(arr[i])
          }
      }
          times++
          arr = newArr
  }
  return arr[0]
};

// 看了别人的规律，一个式子写的就是看不懂，直接模拟删除的过程很好理解
/**
 * @param {number} n
 * @return {number}
 */
// 不断模拟
// 如果从左往右删，first = first + step
// 如果从右往左，cnt 为奇数 first = first + step
var lastRemaining = function(n) {
    let first = 1 
    let step = 1 
    let cnt = n 
    let flag = 1
    while(cnt > 1){
        if(flag){
            first += step
        }else{
            if(cnt % 2 === 1){
                first += step
            }
        }
        step *= 2 
        cnt = cnt / 2 | 0
        flag ^= 1
    }
    return first
};