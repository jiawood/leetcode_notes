### [50\. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)

Difficulty: **中等**


实现  ，即计算 x 的 n 次幂函数。

**示例 1:**

```
输入: 2.00000, 10
输出: 1024.00000
```

**示例 2:**

```
输入: 2.10000, 3
输出: 9.26100
```

**示例 3:**

```
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
```

**说明:**

*   -100.0 < _x_ < 100.0
*   _n_ 是 32 位有符号整数，其数值范围是 [−2<sup>31</sup>, 2<sup>31 </sup>− 1] 。


#### Solution

Language: **JavaScript** 幂

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x === 0.0 || x === 1) return x
    if(n < 0){
        x = 1/x
        n = -n
    }
    let res = 1
    while(n){
        if(n & 1){
            res *= x
        }

        x= x * x
        n >>>= 1
    }
    return res

};
​
```

#### 方法二 递归
```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x == 0 || x == 1) return x
    if(n == 0) return 1
    if(n == 1) return x
    if(n < 0) {
        n = -n
        x = 1/x
    }
    if(n & 1){
        return myPow(x*x,n>>>1) * x
    }
    return myPow(x*x,n>>>1)
};
```
