const fold = (arr, func, acc) => {
  let baseValue = acc;
  for (let i = 0; i < arr.length; i++) {
    baseValue = func(baseValue, arr[i]);
  }
  return baseValue;
};

const foldRight = (arr, func, acc) => {
  let baseValue = acc;
  for (let i = arr.length - 1; i >= 0; i--) {
    baseValue = func(baseValue, arr[i]);
  }
  return baseValue;
};

const reduce = (arr, func) => {
  if (arr.length === 0) {
    throw new Error('Arr < 0');
  }
  let baseValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    baseValue = func(baseValue, arr[i]);
  }
  return baseValue;
};

const reduceRight = (arr, func) => {
  if (arr.length === 0) {
    throw new Error('Arr < 0');
  }
  let baseValue = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    baseValue = func(baseValue, arr[i]);
  }
  return baseValue;
};

// const adder = (a, b) => a + b;
// const concatenate = (a = '', b) => a.concat(b);
// console.log(fold([1, 2, 3], adder, 2));
// console.log(foldRight([3, 10, 26, 0], adder, 0));
// console.log(reduce([3, 10, 26, 0], adder, 0));
// console.log(reduceRight([3, 10, 26, 0], adder, 0));
// console.log(
//   reduceRight(['This ', 'is ', 'a ', 'simple ', 'example'], concatenate, 0)
// );
