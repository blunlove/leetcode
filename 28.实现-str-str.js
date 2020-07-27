/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  for (let point_1 = 0, point_2 = 0; point_1 < haystack.length; point_1++) {
    if (haystack[point_1] == needle[point_2]) {
      point_2++;
    } else {
      point_1 = point_1 - point_2;
      point_2 = 0;
    }
    if (point_2 == needle.length) {
      return point_1 - point_2 + 1;
    }
  }
  return -1;
};
// @lc code=end
strStr('mississippi', 'issip')
