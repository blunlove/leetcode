var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function loopArray(array) {
  if (typeof array !== 'object') return array;
  return array.reduce((sum, item) => {
    return sum.concat(loopArray(item));
  }, []);
}

let result = loopArray(arr).sort((a, b) => a - b).reduce((sum, item) => {
  if (sum[sum.length - 1] != item) {
    sum.push(item);
  }
  return sum;
}, []);

console.log(result);
