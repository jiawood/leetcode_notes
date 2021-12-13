/**
 * @param {number} N
 * @return {number}
 */
//栈  遇到 * / 先算  遇到 +  -  直接入栈
var clumsy = function(N) {
  let stack = [N]
  let op = 0
  for(let i = N - 1; i > 0; i--){
      if(op === 0) stack.push(stack.pop() * i)
      if(op === 1) stack.push(stack.pop() / i | 0)
      if(op === 2) stack.push(i)
      if(op === 3) stack.push(-i)
      op++
      op %= 4
  }
  return stack.reduce((a,b) => a + b)
};