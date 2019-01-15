/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let len = 0;
  let temp = head;
  while (temp) {
    len++;
    temp = temp.next
  }
  n = len - n;
  it = head;
  if (n === 0) {
     return head.next;
  } else {
    while (n > 1) {
      it = it.next;
      n--;
    }
    it.next = it.next.next;
  }

  return head;

};


