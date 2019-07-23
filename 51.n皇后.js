/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let array = n ? new Array(n).fill(new Array(n).fill({target: '.', safe: true})) : [];
  let safes = findSafe(array, undefined, true);
  let result = [];
  let baseResult = [];
  startGame(array, safes, undefined, undefined, result);
  for (let item of result) {
    if (!baseResult.find(res => res.every((ket, index) => ket === item[index]))) {
      baseResult.push(item);
    }
  }
  return baseResult;
};

function startGame(array, safes, pieces = [], result = [], baseResult = []) {
  if (safes.length === 0) return pieces;
  for (let i = 0; i < safes.length; i++) {
    let tempArray = JSON.parse(JSON.stringify(array));
    let tempPieces = JSON.parse(JSON.stringify(pieces));
    check(safes[i], tempArray);
    tempPieces.push(safes[i]);
    let tempSafes = findSafe(tempArray, safes);
    let res = startGame(tempArray, tempSafes, tempPieces, undefined, baseResult);
    if (res.length == array.length) {
      baseResult.push(tempArray.map(item => item.map(ket => ket.target).join('')));
    }
  }
  return result;
}

function findSafe(array, points = [], first = false) {
  if (first) {
    for (let y = 0; y < array.length; y++) {
      for (let x = 0; x < array.length; x++) {
        if (array[y][x].safe) {
          points.push({x, y});
        }
      }
    }
    return points;
  } else {
    return points.filter(item => array[item.y][item.x].safe);
  }
}

function check(point, array) {
  array[point.y][point.x].safe = false;
  array[point.y][point.x].target = 'Q';
  aim_verhor(point, array);
  aim_bias(point, array);
}

function aim_verhor(point, array) {
  for (let x = 0; x < array.length; x++) {
    array[point.y][x].safe = false;
  }
  for (let y = 0; y < array.length; y++) {
    array[y][point.x].safe = false;
  }
}
function aim_bias(point, array) {
  let x, y;
  changeUnsafePoint(-1, -1);
  changeUnsafePoint(-1, 1);
  changeUnsafePoint(1, -1);
  changeUnsafePoint(1, 1);
  function changeUnsafePoint(a, b) {
    x = point.x;
    y = point.y;
    while(isInside()) {
      array[y][x].safe = false;
      x = x + a;
      y = y + b;
    }
  }
  function isInside() {
    return x >= 0 && x < array.length && y >= 0 && y < array.length;
  }
}

