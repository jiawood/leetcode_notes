var RandomizedSet = function() {
  this.nums = new Array()
  this.map = new Map()
  this.idx = -1
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if(!this.map.has(val)){
      this.map.set(val, this.idx + 1)
      this.nums.push(val)
      this.idx = this.idx + 1
      return true
  }
  return false 
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if(this.map.has(val)){
      const curIdx = this.map.get(val)
      this.map.set(this.nums[this.idx],curIdx)
      this.map.delete(val);
      const nums = this.nums; 
      [nums[this.idx],nums[curIdx]] = [nums[curIdx],nums[this.idx]]
      this.nums = nums 
      this.nums.pop()
      this.idx = this.idx - 1
      return true 
  }
  return false 
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const random = Math.random() * (this.idx + 1) | 0
  return this.nums[random] 
};