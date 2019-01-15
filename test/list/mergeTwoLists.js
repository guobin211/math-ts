/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 创建一个新连表
    const newNode = new ListNode(-1);
    // c3变量
    let c3 = newNode;
    while (l1 !== null && l2 !==null) {
      if (l1.val <= l2.val) {
        c3.next = l1;
        l1 = l1.next;
      } else {
        c3.next = l2;
        l2 = l2.next;
      }
      c3 = c3.next;
    }

    c3.next = (l1 === null) ? l2: l1;

    return newNode.next;
   
};

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4



