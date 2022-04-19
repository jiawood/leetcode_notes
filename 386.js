// dfs 我发现我对于dfs还是不会写，妈的
// 深度优先搜索
var lexicalOrder = function (n) {
  const res = [];
  const dfs = (i, limit) => {
    if (i > limit) {
      return;
    }
    res.push(i);
    for (let j = 0; j < 10; j++) {
      dfs(i * 10 + j, n);
    }
  };
  for (let i = 1; i < 10; i++) {
    dfs(i, n);
  }
  return res;
};

// 迭代
var lexicalOrder = function(n) {
  let cur = 1 
  let res = []
  for(let i = 0; i < n; i++){
      res.push(cur)
      if(cur * 10 <= n){
          cur *= 10 
      }else{
          while(cur % 10 === 9 || cur >= n){
              cur = Math.floor(cur / 10)
          }
          cur++
      }
  }
  return res 
};
