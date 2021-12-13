// 模拟游戏，需要判断什么时候会赢，什么时候会输

/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  const arr = Array.from(new Array(3), () => new Array(3))
  let x = 0, o = 0
  for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
          arr[i][j] = board[i][j]
          if(board[i][j] === 'X'){
              x++
          }
          if(board[i][j] === 'O'){
              o++
          }
      }
  }
  let a = check(arr,'X')
  let b = check(arr,'O')
  if(x < o || x - o > 1) return false 
  if(a && x - o !== 1 ) return false 
  if(b && x !== o) return false 
  if(a && b) return false 
  return true
};

function check(board,c){
  let l = true 
  let r = true
  for(let i = 0; i < 3; i ++){
      for(let j = 0; j < 3; j++){
          if(board[i][0] === c && board[i][1] === c && board[i][2] === c){
              return true 
          }
          if(board[0][j] === c && board[1][j] === c && board[2][j] === c){
              return true 
          }
          if(i === j){
              l = l & board[i][j] === c 
          }
          if(i + j === 2){
              r = r & board[i][j] === c 
          }
      }
  }
  return l || r  
}