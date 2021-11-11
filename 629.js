// 这道题是动态规划，主要是一个思考过程
// 定义状态dp[i][k] 表示前i个数形成k个逆数对的时候可以的方案数

// 现在假设dp[4][k]存在 dp[5][k]为多少？
// dp[4][k] = dp[5][k]   dp[5][k+1]
// dp[5][k] = dp[4][k] + dp[4][k-1] + dp[4][k-2] + dp[4][k-3] + dp[4][k-4]

// dp[n,k] = dp[n][k-1] + dp[n-1][k] - dp[n-1][k-n]

var kInversePairs = function(n, k) {
    const MOD = 1000000007
    let f = new Array(n + 1).fill(0).map(r => new Array(k + 1).fill(0))
    // 不用任何数字可以构成一个空数组，它包含 0 个逆序对
    f[0][0] = 1
    // i的取值范围是1-n
    for(let i = 1; i <= n; i++){
        // j控制可能的逆序对个数，可能是0个，也可能是k个
        for(let j = 0; j <= k; j++){
            // 当f[i][j]中的j<0时，逆序对数不可能小于0，所以为0
            f[i][j] = (j - 1 >= 0 ? f[i][j - 1] : 0) - (j - i >= 0 ? f[i - 1][j - i] : 0) + f[i - 1][j]
            // 数值处理
            if(f[i][j] >= MOD){
                f[i][j] -= MOD
            }else if(f[i][j] < 0){
                f[i][j] += MOD
            }
        }
    }
    return f[n][k]
};