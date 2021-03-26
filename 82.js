var deleteDuplicates = function(head) {
  if(!head || !head.next){
      return head 
  }
  let dummry = new ListNode(0)
  dummry.next = head 
  pre = dummry
  cur = head 
  while(cur){
      while(cur.next && cur.next.val === cur.val){
          cur = cur.next 
      }
      if(pre.next === cur){
          pre = pre.next 
      }else{
          pre.next = cur.next 
      }
      cur = cur.next 
  }
  return dummry.next 
};


//solution 2  递归

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head || !head.next){
      return head 
  }
  if(head.val !== head.next.val){
      head.next = deleteDuplicates(head.next)
  }else{
      let move = head 
      while(move && move.val === head.val){
          move = move.next 
      }
      return deleteDuplicates(move)
  }
  return head 
};