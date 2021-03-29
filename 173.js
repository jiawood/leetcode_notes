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
 */
let stack = []
let res 
var BSTIterator = function(root) {
    stack.push(root)
    while(root.left){
        root = root.left
        stack.push(root)
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let cur = stack.pop()
    res = cur.val 
    if(cur.right){
        stack.push(cur.right)
        cur = cur.right
        while(cur.left){
            stack.push(cur.left)
            cur = cur.left
        }
    }
    return res 

};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return stack.length 
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */