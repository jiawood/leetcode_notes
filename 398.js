// 这个蓄水池理论还挺有意思的，怎样在不遍历所有的数据的情况下，随机取到想要的值
/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  this.nums = nums 
};

/** 
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  let n = 0 // 有几个target
  let index = 0 // 结果
  for(let i = 0; i < this.nums.length; i++){
      if(this.nums[i] === target){
          n++ 
          if(Math.random() < (1 / n)){
              index = i 
          }
      }
  }
  return index 
};