/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let config = [
    {left: '(', right: ')'},
    {left: '[', right: ']'},
    {left: '{', right: '}'},
  ];
  let stack = [];
  let temp = s.split('');
  for (let i = 0; i < temp.length; i++) {
    let left = config.find(c => c.left == temp[i]);
    let right = config.find(c => c.right == temp[i]);
    if (left) {
      stack.push(left.right);
    }
    if (right) {
      if (stack.length == 0) return false;
      if (stack[stack.length -1] != right.right) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length == 0;
};
// @lc code=end
console.log(isValid('()[]{}'));
