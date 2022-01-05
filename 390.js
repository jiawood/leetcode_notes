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