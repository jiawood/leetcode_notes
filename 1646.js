/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) {
    return 0;
  }
  let max = 1;
  const arr = new Array(n + 1);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i / 2];
      max = Math.max(max, arr[i]);
    } else {
      arr[i] = arr[(i - 1) / 2] + arr[(i + 1) / 2];
      max = Math.max(max, arr[i]);
    }
  }
  return max;
};
