/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let a = 0; a < nums.length - 1; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      if (nums[a] + nums[b] == target) {
        return [a, b];
      }
    }
  }
};

