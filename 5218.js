var minimumNumbers = function(num, k) {
  if(num === 0){
      return 0 
  }
  let res = 1 
  while(res <= 10){
      if( res * k % 10 === num % 10 && res * k <= num){
          return res 
      }
      res++
  }
  return res === 11 ? -1 : res 
};