var imageSmoother = function(img) {
  let m = img.length
  let n = img[0].length
  let ders = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]]
  let res = Array.from(new Array(m), () => new Array(n))
  for(let i = 0; i < m; i++){
      for(let j = 0; j < n; j++){
          let sum = 0
          let count = 0
          for ([x,y] of ders){
              let io = i + x 
              let jo = j + y 
              if(io >= 0 && io < m && jo >= 0 && jo < n){
                  count ++ 
                  sum += img[io][jo]
              }
          }
          res[i][j] = (sum / count) | 0
      }
  }
  return res 
};