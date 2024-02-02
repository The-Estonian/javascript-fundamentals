const cutFirst = (str) => {
  return str.slice(2);
};

const cutLast = (str) => {
  return str.slice(0, -2);
};

const cutFirstLast = (str) => {
  return str.slice(2, -2);
};

const keepFirst = (str) => {
  return str.slice(0, 2);
};

const keepLast = (str) => {
  return str.slice(-2);
};

const keepFirstLast = (str) => {
  if (str.length < 4) {
    return str;
  }
  return keepFirst(str) + keepLast(str);
};

console.log(cutFirst('abcdefghij'));
console.log(cutLast('abcdefghij'));
console.log(cutFirstLast('abcdefghij'));
console.log(keepFirst('abcdefghij'));
console.log(keepLast('abcdefghij'));
console.log(keepFirstLast('abcdefghij'));
console.log(keepFirstLast('af'));
