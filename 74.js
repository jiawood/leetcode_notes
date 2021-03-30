/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length
  let n = matrix[0].length
  let i = 0
  while(i < m){
      if(matrix[i][0] > target){
          break 
      }
      i++
  }
  if(i <= m && i > 0){
      i--
  }
  let j = 0
  while(j < n){
      if(matrix[i][j] === target){
          return true
      }
      j++
  }
  return false 
};