// 初步判定为最小堆
class PriorityQueue1 {
    constructor(initial = [], compare = (a,b) => a < b) {
      this.ary = initial.slice() || [];
      this.compare = compare
      this._heapfiy()
    }

    get size() {
      return this.ary.length;
    }

    add(num) {
      this.ary.push(num);
      let n = this.ary.length - 1;

      this._shiftUp(n)
      return this;
    }

    _heapfiy(){
        const last = Math.floor((this.ary.length - 1) / 2 )
        for(let i = last; i >= 0; i --){
            this._shifDown(i)
        }
        console.log(this.ary)
        return this.ary 
    }

    _shiftUp(idx) {
        if(idx === 0){
            return 
        }
        let parent = Math.floor((idx - 1) / 2)
        if(this.compare(this.ary[parent], this.ary[idx])){
            this._swap(parent,idx)
        }
        this._shiftUp(parent) 
    }

    _shifDown(idx) {
        if(idx > Math.floor((this.ary.length) / 2)){
            return 
        }
        let left = idx * 2 + 1 
        let right = idx * 2 + 2 
        let maxId = idx
        if(this.compare(this.ary[maxId], this.ary[left])){
            maxId = left 
        }
        if(this.compare(this.ary[maxId] , this.ary[right])){
            maxId = right 
        }
        if(maxId !== idx){
            this._swap(maxId,idx)
            this._shifDown(maxId)
        }
    }

    _swap(i, j) {
      const tmp = this.ary[i];
      this.ary[i] = this.ary[j];
      this.ary[j] = tmp;
    }

    peek() {
        return this.size === 0 ? null : this.ary[0]
    }

    // 弹出第一个
    poll() {
    if(this.size === 1){
        return this.ary.pop();
      }
      const res = this.ary[0];
      this.ary[0] = this.ary.pop();
      this._shifDown(0)
      return res;
    }
  }
var asteroidsDestroyed = function(mass, asteroids) {
let queue = new PriorityQueue1([], (a,b) => b < a)
for(let i = 0; i < asteroids.length; i++){
    if(asteroids[i] <= mass){
        mass += asteroids[i]
    }else{
        queue.add(asteroids[i])
    }
}
while(queue.size > 0){
    let cur = queue.poll()
    if(mass >= cur){
        mass += cur 
    }else{
        return false
    }
}
return true 
};

// 我是智障，要用最大堆来写
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids =  asteroids.sort((a,b) => a - b)
    for(let i = 0;i < asteroids.length; i++){
        if(mass >= asteroids[i]){
            mass += asteroids[i]
        }else{
            return false 
        }
    }
    return true 
};