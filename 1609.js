// 自己ac的第一种做法，写的真丑，其实不需要维护一个数组的，一个变量就够了，还有其他可以优化的地方
// dfs 
var isEvenOddTree = function(root) {
    const res = []
    const dfs = (root,level) => {
        if(!root ){
            return true 
        }
        if(!res[level]){
            res[level] = [root.val]
            if(level % 2 === root.val % 2 ){
                return false 
            }
        }else{
            if(level % 2 === 0){
                if(res[level][res[level].length - 1] >= root.val || root.val % 2 === 0){
                    return false 
                }else{
                    res[level].push(root.val)
                }
            }else{
                if(res[level][res[level].length - 1] <= root.val || root.val % 2 !== 0){
                    return false 
                }else{
                    res[level].push(root.val)
                }
            }
        }
        return dfs(root.left,level+1) && dfs(root.right,level+1)
    }
    return dfs(root,0)
};

//dfs 
var isEvenOddTree = function(root) {
    let nums = []
    const dfs = (root,level) => {
        if(!root){
            return true 
        }
        if(root.val % 2 === level % 2){
            return false 
        }
        if(level % 2 !== 0 && nums[level] <= root.val  ) return false 
        if(level % 2 === 0 && nums[level] >= root.val) return false
        nums[level] = root.val
        return dfs(root.left,level +1) && dfs(root.right,level +1)
    }
    return dfs(root,0)
};