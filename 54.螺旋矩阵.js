/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//首先是4个方向，可以用数组表示，然后index++来更改
//怎样判断该转弯了，解决了



var spiralOrder = function(matrix) {
  let directions = [[0,1],[1,0],[0,-1],[-1,0]]
  let m = matrix.length
  let n = matrix[0].length
  let visited = Array.from(new Array(m),() => new Array(n).fill(true))
  function isTrue(x,y){
      if(x < 0 || x >= m || y < 0 || y >= n){
          return false 
      }
      return visited[x][j]
  }
  let i = 0
  let j = 0 
  let res = []
  let index = 0
  while(isTrue(i,j)){
      res.push(matrix[i][j])
      visited[i][j] = false 
      let deriction = directions[index]
      i = i + deriction[0]
      j = j + deriction[1]
      if(!isTrue(i,j)){
          index++
          index %= 4
          i = i - deriction[0] + directions[index][0]
          j = j - deriction[1] + directions[index][1]
      }
  }
  return res 
};