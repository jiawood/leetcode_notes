/**
 * @param {number[][]} mat
 * @return {number}
 */
 var numSpecial = function(mat) {
    const m = mat.length 
    const n = mat[0].length 
    let res = 0
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(mat[i][j] === 1){
                let x = 0
                while(x < m){
                    if(mat[x][j] === 1 && x != i){
                        break 
                    }
                    x++
                }
                let y = 0
                while(y < n){
                    if(mat[i][y] === 1 && y != j){
                        break 
                    }
                    y++
                }
                if(x === m  && y === n ){
                    res++
                }
            }
        }
    }
    return res 
};