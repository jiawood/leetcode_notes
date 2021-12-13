// 17.电话号码的排列组合
const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  if (digits.length == 0) {
    return [];
  }
  const res = [];
  function helper(index, tmp) {
    if (index === digits.length) {
      res.push(tmp.join(""));
      return;
    }
    const d = Number(digits[index]);
    for (let i = 0; i < map[d].length; i++) {
      const item = map[d][i];
      helper(index + 1, tmp.concat(item));
    }
  }
  helper(0, []);
  return res;
};

// 93.复原ip地址
var restoreIpAddresses = function (s) {
  const res = [];

  // index 当前遍历到第几位  len  目前的长度  tmp 目前的ip
  function dfs(index, len, tmp) {
    if (index === s.length && len === 4) {
      res.push(tmp.slice(1));
    }
    if (index === s.length || len === 4) {
      return;
    }

    dfs(index + 1, len + 1, tmp + "." + s.slice(index, index + 1));
    if (s[index] !== "0") {
      dfs(index + 2, len + 1, tmp + "." + s.slice(index, index + 2));
    }
    if (s[index] !== "0" && Number(s.slice(index, index + 3)) < 256) {
      dfs(index + 3, len + 1, tmp + "." + s.slice(index, index + 3));
    }
  }

  dfs(0, 0, "");

  return res;
};

// 46.全排列
var permute = function (nums) {
  const res = [];
  const n = nums.length;
  const visible = new Array(n).fill(false);

  function dfs(tmp) {
    if (tmp.length === n) {
      res.push(tmp.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!visible[i]) {
        tmp.push(nums[i]);
        visible[i] = true;
        dfs(tmp);
        visible[i] = false;
        tmp.pop();
      }
    }
  }
  dfs([]);
  return res;
};
