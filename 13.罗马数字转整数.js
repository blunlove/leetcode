/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let normal = [
    {label: 'I', value: 1},
    {label: 'V', value: 5},
    {label: 'X', value: 10},
    {label: 'L', value: 50},
    {label: 'C', value: 100},
    {label: 'D', value: 500},
    {label: 'M', value: 1000},
  ]
  let special = [
    {label: 'IV', value: 4},
    {label: 'IX', value: 9},
    {label: 'XL', value: 40},
    {label: 'XC', value: 90},
    {label: 'CD', value: 400},
    {label: 'CM', value: 900},
  ]
  let sum = 0;
  special.forEach(sp => {
    s = s.replace(new RegExp(sp.label, 'g'), () => {
      sum += sp.value;
      return '';
    })
  })
  normal.forEach(no => {
    s = s.replace(new RegExp(no.label, 'g'), () => {
      sum += no.value;
      return '';
    })
  })
  return sum;
};
// @lc code=end
console.log(romanToInt('III'));

