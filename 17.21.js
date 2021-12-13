// solution 1
var trap = function (height) {
  function getMax(i, j) {
    return Math.max(...height.slice(i, j));
  }
  let res = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let l = getMax(0, i);
    let r = getMax(i + 1, height.length);
    let t = Math.min(l, r) - height[i];
    if (t < 0) t = 0;
    res += t;
  }
  return res;
};


//solution 2 跟方法1类似，就是把求左边和右边最大值用数组保存起来

//solution 3 双指针
