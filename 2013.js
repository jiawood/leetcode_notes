//学了一个嵌套hash表的表示方式
var DetectSquares = function() {
  this.btns = new Map()
};

/** 
* @param {number[]} point
* @return {void}
*/
DetectSquares.prototype.add = function(point) {
  const [x,y] = point
  if(this.btns.has(x)){
      const m = this.btns.get(x)
      m.set(y,(m.get(y) || 0) + 1)
  }else{
      const m = new Map()
      m.set(y,1)
      this.btns.set(x,m)
  }
};

/** 
* @param {number[]} point
* @return {number}
*/
DetectSquares.prototype.count = function(point) {
  const [x,y] = point
  let ans = 0
  if(this.btns.has(x)){
      const m = this.btns.get(x)
      for(let ny of m.keys()){
          if(ny !== y){
              const len = ny - y 
              if(this.btns.has(x + len)){
                  const nm = this.btns.get(x + len)
                  if(nm.has(y + len) && nm.has(y)){
                      ans +=  m.get(y + len) * nm.get(y + len) * nm.get(y)
                  }
              }
              if(this.btns.has(x - len)){
                  const nm = this.btns.get(x - len)
                  if(nm.has(y + len) && nm.has(y)){
                      ans +=  m.get(y + len) * nm.get(y + len) * nm.get(y)
                  }
              }
          }
      }
  }
  return ans 
};