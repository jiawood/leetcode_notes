var maxIncreaseKeepingSkyline = function(grid) {
    const m = grid.length
    const n = grid[0].length
    const rows = new Array(m).fill(0)
    const cols = new Array(n).fill(0)
    for(let i = 0; i < m ; i ++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] > rows[i]){
                rows[i] = grid[i][j]
            }
            if(grid[i][j] > cols[j]){
                cols[j] = grid[i][j]
            }
        }
    }
    let res = 0 
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            res += (Math.min(rows[i],cols[j]) - grid[i][j])
        }
    }
    return res  
};