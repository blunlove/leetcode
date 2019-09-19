function deepTraversal(object) {
  let temp = Object.prototype.toString.call({}) === '[object Object]' ? {} : [];
  for(let key in object) {
    if (typeof object[key] == 'object') {
      temp[key] = deepTraversal(object[key]);
    } else {
      temp[key] = object[key];
    }
  }
  return temp;
}