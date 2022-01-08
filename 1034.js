const DIRS = [[0,1],[0,-1],[1,0],[-1,0]]
var colorBorder = function(grid, row, col, color) {
    let m = grid.length
    let n = grid[0].length
    // dfs 定义的是坐标为(r,c)的点是不是边界点，然后需不需要被着色,如果需要然后给它着色
    const explored = new Set()  // 将访问过的点保存起来
    const dfs = (r,c) => {
        if(r < 0 || c < 0 || r === m || c === n){
            return true // 是边框边界点
        }
        const p = r * n + c 
        if(explored.has(p)){
            return false 
        }
        if(grid[r][c] !== grid[row][col]){
            return true 
        }
        explored.add(p)
        let cur = false
        for(let dir of DIRS){
            if(dfs(r+dir[0],c+dir[1])){
                cur = true
            }
        }
        if(cur){
            grid[r][c] = color 
        } 
        return false 
    }
    dfs(row,col)
    return grid 
};