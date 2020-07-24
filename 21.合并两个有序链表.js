/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2, root = null) {
  if (!l1 || !l2) {
    if (root) {
      return root.next = l1 || l2;
    } else {
      return l1 || l2;
    }
  }
  let small = l1.val <= l2.val ? l1 : l2;
  let big = l1.val <= l2.val ? l2 : l1;
  if (!root) {
    root = small;
  } else {
    root.next = small;
  }
  mergeTwoLists(small.next, big, small);
  return root;
};
// @lc code=end
