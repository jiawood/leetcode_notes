/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  let m = matrix.length
  if (m === 0) return
  let n = matrix[0].length
  let preSum = Array.from(new Array(m+1), () => new Array(n+1).fill(0))
  for(let i = 1; i < m + 1; i++){
      for(let j = 1; j < n + 1; j++){
          preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] - preSum[i-1][j-1] + matrix[i-1][j-1]
      }
  }
  this.preSum = preSum
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.preSum[row2+1][col2+1] + this.preSum[row1][col1] - this.preSum[row1][col2+1] - this.preSum[row2+1][col1]
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/