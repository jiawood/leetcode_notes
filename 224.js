
// 自己写的bug版本，没有写出来，主要问题在于（）前面的符号没办法判断
// 还是有问题的版本，草
/**
 * @param {string} s
 * @return {number}
 */
function isSymbol(a){
  return a === '+' || a === '-' || a === '('
}

function isNumber(a){
  return Number(a) || a === '0'
}

var calculate = function(s) {
  s =s.split(' ').join('')
  s = '(' +s +  ')'
  let stack = []
  let res = 0
  for(let i = 0; i < s.length; i++){
      let cur = s[i]
      if(isSymbol(cur)){
          stack.push(cur)
      }else if(isNumber(cur)){
          let start = i 
          while(isNumber(s[i])){
              i++
          }

          stack.push(s.slice(start,i))
          i--
      }else{
          let last = 0
          let tep = 0
          while(cur !== '(' && stack.length > 1){
              let num = stack.pop()
              last = Number(num) 
              cur = stack.pop()
              if(cur === '+'){
                  tep += Number(num)
              }else if(cur === '-'){
                  tep -= Number(num)
              }
          }
          tep += last
          if(isSymbol(stack[stack.length - 1]) && stack[stack.length - 1] !== '('){
            let sy = stack.pop()
            if(sy === '-'){
              res -= tep 
            }else{
              res += tep 
            }

          }else{
            res += tep
          }
      }
  }
  return res 
};

// 参考之后的
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let res = 0
  let num = 0
  let sign = 1 
  let stack = []
  for(let i = 0; i < s.length; i++){
      let cur = s[i]
      if(Number(cur) || cur === '0'){
          num = num * 10 + Number(cur)
      }else if(cur === '+' || cur === '-'){
          res += num * sign
          num = 0 
          cur === '+' ? sign = 1 : sign = -1
      }else if(cur === '('){
          stack.push(res)
          stack.push(sign)
          res = 0 
          sign = 1
      }else if(cur === ')'){
          res += sign * num
          num = 0
          res *= stack.pop()
          res += stack.pop()
      }
  }
  res += sign * num 
  return res 
};

