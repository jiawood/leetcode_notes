/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const arr1 = new Array(10).fill(0)
  const arr2 = new Array(10).fill(0)
  const arr3 = new Array(10).fill(false)
  const n = secret.length
  let a = 0
  let b = 0
  for(let i = 0; i < n; i++){
      if(secret[i] === guess[i]){
          a++
      }else {
          arr1[secret[i]]++
          arr2[guess[i]]++
      }
  }

  for(let i = 0; i < n; i++){
      const g = guess[i]
      if(!arr3[g]){
          b += (Math.min(arr1[g],arr2[g]))
          arr3[g] = true 
      }
  }
  return `${a}A${b}B`
};