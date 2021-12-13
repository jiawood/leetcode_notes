var rotateRight = function(head, k) {
  if(!head) return head 
  let n = 1
  let first_head = head 
  while(head.next){
      n++
      head = head.next
  }
  head.next = first_head
  k  = n - (k % n)
  while(k > 1){
      first_head = first_head.next 
      k--
  }
  res = first_head.next 
  first_head.next = null 
  return res 
};