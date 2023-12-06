const fold = (arr, func, acc) => {
  let baseValue = acc;
  for (let i = 0; i < arr.length; i++) {
    baseValue = func(baseValue, arr[i]);
  }
  return baseValue;
};


// const adder = (a, b) => a + b;
// console.log(fold([1, 2, 3], adder, 2));
