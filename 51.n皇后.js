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
  let result = startGame(array, safes);
};

function startGame(array, safes, pieces = [], result = []) {
  // let safes = findSafe(array, undefined, true);
  if (safes.length === 0) return pieces;
  for (let i = 0; i < safes.length; i++) {
    let tempArray = JSON.parse(JSON.stringify(array));
    let tempPieces = JSON.parse(JSON.stringify(pieces));
    check(safes[i], tempArray);
    tempPieces.push(safes[i]);
    let tempSafes = findSafe(tempArray, safes);
    let res = startGame(tempArray, tempSafes, tempPieces);
    if (res.length == array.length) {
      result.push(res);
    }
  }
  return result;
}

function findSafe(array, points = [], first = false) {
  if (first) {
    for (let x = 0; x < array.length; x++) {
      for (let y = 0; y < array.length; y++) {
        if (array[x][y].safe) {
          points.push({x, y});
        }
      }
    }
    return points;
  } else {
    return points.filter(item => array[item.x][item.y].safe);
  }
}

function check(point) {
  console.log(point);
}

solveNQueens(2);


