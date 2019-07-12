/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let minus = x >= 0 ? '' : '-';
  let number = minus + String(Math.abs(x)).split('').reverse().join('');
  number = Number(number);
  return number < -Math.pow(2, 31) || number > Math.pow(2, 31) - 1 ? 0 : number;
};

