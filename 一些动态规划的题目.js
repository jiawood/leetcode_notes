//动态规划LeetCode刷题记录
// 70.爬楼梯
//使用一个状态量db来记录所有状态的值，可以避免重复计算。
var climbStairs = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};

//121.买卖股票的最佳时机
//第一种方法：非动态规划的解法
/* 使用一个变量记录遍历过的最小值，然后用当前值减去最小值与之前记录的最大值做对*/
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let res = 0;
  let minValue = prices[0];
  for (let i = 1; i < prices.length; i++) {
    res = Math.max(res, prices[i] - minValue);
    minValue = Math.min(minValue, prices[i]);
  }
  return res;

};
// 使用动态规划求解。一般解法：
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  } else {
    let dp = Array.from(new Array(prices.length), () => new Array(2));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < prices.length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], - prices[i]);
    }
    return dp[prices.length - 1][0];
  }
};
//二维数组中有很多地方并没有用到，这个程序可以优化
//优化后的程序如下：
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  } else {
    let db = Array.from(new Array(prices.length), () => new Array(2));
    db_i_0 = 0;
    db_i_1 = -prices[0];
    for (let i = 1; i < prices.length; i++) {
      db_i_0 = Math.max(db_i_0, db_i_1 + prices[i]);
      db_i_1 = Math.max(db_i_1, - prices[i]);
    }
    return db_i_0;
  }
};
//只用两个变量即可，节省空间，但是代码变得不好理解。话说，对于动态规划，知道了套路，具体的原理还是不清楚。妈的

//122.买卖股票的最佳时机二
//这个是不限交易次数的股票问题，这个简单的解法很简单
//只要后一天的股票价格高于前一天的，那么就将这利润加上去
//一般的做法如下：
var maxProfit = function (prices) {
  total = 0;
  for (let i = 1; i < prices.length; i++) {
    tep = prices[i] - prices[i - 1];
    if (tep > 0) {
      total = total + tep;
    }
  }
  return total;
};

//下面使用动态规划求解
//动态规划不会  嘤嘤嘤


//198.打家劫舍
//对于动态规划问题，主要有三点：状态，转移方程，边界
//状态就是：当小偷偷到第n间房的时候，身上的金额。
//转移方程：dp(n) = max(dp(n-1),dp(n-2)+nums(n))  也就是 在第n家的时候的最大金额，等于第n-1家的时候的金额或者等于第n-2家时的金额+第n家时候的金额中的最大值。
//边界：第一家 nums[1]  第二家nums[2]与nums[1]中的较大值  第三家：第二家与第一家加第三家之间的最大值  第四天：第二家+第四家或者是第三家
//我去，某一家的状态需要记住两种状态  之前理解错了，不需要记录两种状态，只需要记录它
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};


//746.使用最小花费爬楼梯
//我是菜鸡，最简单的动态规划我都不会，艹
var minCostClimbingStairs = function (cost) {
  let dp = [];
  dp[0] = cost[0];
  dp[1] = Math.min(cost[0], cost[1]);
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[cost.length - 1];
};
//主要是动态转移方程想不明白，再来一道简单题压压惊。

// 62.不同路径
var uniquePaths = function (m, n) {
  let dp = Array.from(new Array(m), () => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

      }
    }
  }
  return dp[m - 1][n - 1];
};

//63.不同路径二
var uniquePathsWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length;  //行
  let m = obstacleGrid[0].length;  //列
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0);
  }
  //在定义好状态矩阵之后，可以先判断初始值和特殊情况
  dp[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1;
  for (let y = 1; y < n; y++) {
    if (obstacleGrid[y][0] != 1) {
      dp[y][0] = dp[y - 1][0];
    }
  }
  for (let x = 1; x < m; x++) {
    if (obstacleGrid[0][x] != 1) {
      dp[0][x] = dp[0][x - 1];
    }
  }
  for (let y = 1; y < n; y++) {
    for (let x = 1; x < m; x++) {
      if (obstacleGrid[y][x] != 1) {
        dp[y][x] = dp[y - 1][x] + dp[y][x - 1];
      }
    }
  }
  return dp[n - 1][m - 1];
};


//64.最小路径和
var minPathSum = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let dp = Array.from(new Array(n), () => new Array(m));
  dp[0][0] = grid[0][0];
  // dp[0][1] = dp[0][0] + grid[0][1];
  // dp[1][0] = dp[0][0] + grid[1][0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 && j != 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      }
      if (j == 0 && i != 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      }
      if (i > 0 && j > 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }
  return dp[n - 1][m - 1];
};

//746.使用最小花费爬楼梯
var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      dp[i] = cost[i];
    } else {
      dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];

    }
  }
  return Math.min(dp[n - 1], dp[n - 2]);
};
//这题主要是动态转移方程不好理解，以及最后的结束条件难以理解。

//91.解码方式
//1到26分别对应a-z的解码，给定一串数字，然后问有几种解码方式。这题的思路还是很简单的，但是存在很多特殊情况。
//100  解码方式为0   //227  解码为2  //220 解码为2  101  解码为1
//主要是特殊情况不好分析
//用文字把动态规划的过程理解一下。当s[i] == 0 时，如果前面一个数为0或者大于2，则返回0；否则，返回dp[n-2]
//当s[i] != 0时，如果最近两个数大于0小于26.则 返回 dp[n-1]+dp[n-2];


//我哭了  这道题在看了别人解答之后，错了11次，我真尼玛是菜鸡。

var numDecodings = function (s) {
  let n = s.length;
  let dp = new Array(n);
  if (n == 0 || s[0] == 0) {
    return 0;
  }
  dp[0] = 1;
  if (s[1] == 0) {
    if (Number(s.slice(0, 2)) > 26) {
      return 0;
    } else {
      dp[1] = dp[0];
    }
  } else if (Number(s.slice(0, 2)) > 26 || Number(s.slice(0, 2) < 10)) {
    dp[1] = dp[0];
  } else {
    dp[1] = 2;
  }
  for (let i = 2; i < n; i++) {
    if (s[i] == 0) {
      if (Number(s.slice(i - 1, i + 1)) > 26 || s[i - 1] == 0) {
        return 0;
      } else {
        dp[i] = dp[i - 2];
      }
    } else if (Number(s.slice(i - 1, i + 1)) > 26 || Number(s.slice(i - 1, i + 1) < 10)) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }
  return dp[n - 1];
};

