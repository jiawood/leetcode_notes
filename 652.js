/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
    const res = [] 
    const map = new Map()

    const dfs = (root) => {
        if(!root){
            return '|'
        }
        const key = root.val + '|' + dfs(root.left) + '|' + dfs(root.right)
        if(map.has(key)){
            map.set(key, map.get(key) + 1)
        }else{
            map.set(key, 1)
        }
        if(map.get(key) === 2){
            res.push(root)
        }
        return key 
    }

    dfs(root) 
    return res 
};