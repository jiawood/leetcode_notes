var generateParenthesis = function (n) {
  var res = [];
  function generate(left, right, temp) {
    if (left == n && right == n) {
      res.push(temp);
      return;
    }
    if (left < n) {
      generate(left + 1, right, temp + "(");
    }
    if (left < n && right < left) {
      generate(left, right + 1, temp + ")");
    }
  }
  generate(0, 0, "");
  return res;
};
