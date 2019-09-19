function widthTraversal(object) {
  let tack = [];
  tack.push(object);
  while(tack.length > 0) {
    let item = tack.shift();
    item = copy(item, tack);
  }
  return object;
}
let a = {a: 1};
function copy(item, tack) {
  let temp = Object.prototype.toString.call({}) === '[object Object]' ? {} : [];
  for(let key in item) {
    temp[key] = item[key];
    if (typeof temp[key] === 'object') {
      tack.push(temp[key]);
    }
  }
  return temp;
}
console.log(widthTraversal(a) === a);
