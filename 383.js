var canConstruct = function(ransomNote, magazine) {
  const arr1 = new Array(26).fill(0)
  const arr2 = new Array(26).fill(0)
  for(let i = 0;i < ransomNote.length; i++){
      const index = ransomNote[i].charCodeAt(0) - 97
      arr1[index] = arr1[index] + 1 
  }
  for(let i = 0;i < magazine.length; i++){
      const index = magazine[i].charCodeAt(0) - 97
      arr2[index] = arr2[index] + 1
  }
  let j = 0 
  while(j < 26){
      if(arr1[j] > arr2[j]){
          return false 
      }
      j++
  }
  return true 
};