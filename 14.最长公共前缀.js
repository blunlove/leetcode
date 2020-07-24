/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let first = strs[0];
  while (first.length > 0) {
    if (strs.every(s => s.startsWith(first))) {
      return first;
    } else {
      first = first.slice(0, first.length - 1);
    }
  }
  return '';
};
// @lc code=end

