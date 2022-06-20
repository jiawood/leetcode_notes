var greatestLetter = function(s) {
  s = s.split('').sort()
  let res = ''
  for(let i = 0; i< s.length; i++){
      const c = s[i]
      if(c.charCodeAt() < 97){
          if(s.indexOf(String.fromCharCode(c.charCodeAt() + 32)) > -1){
              res = c 
          }
      }else{
          break 
      }
  }
  return res 
};