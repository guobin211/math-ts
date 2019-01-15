/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === undefined || head === null) {
      return null
    }
    
    let originalHead = head;
    let reverseHead;

    function reverse(head) {
      if (head.next === null) {
        reverseHead = head;
        return head;
      } else {
        let node = reverse(head.next);
        node.next = head;
        if (originalHead === head) {
          head.next = null;
          return reverseHead;
        } else {
          return head;
        }
      }
    }

    return reverse(head);
};