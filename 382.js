/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
    this.ary = []
    while(head){
        this.ary.push(head.val)
        head = head.next
    }
    return null 
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    const ary = this.ary 
    const index = Math.random() * ary.length | 0 
    return ary[index]
};