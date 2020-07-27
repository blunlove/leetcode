/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      // nums.splice(i, 1);
      for (let j = i; j < nums.length - 1; j++) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
      nums.length--;
      i--;
    }
  }
};
// @lc code=end

