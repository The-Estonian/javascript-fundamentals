const forEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
};

// let arr = [1, 2, 3, 4, 5, Math.random(), 7, 10, -10, 20, -95];
// let result = [];
// let move = (item) => {
//   result.push(item);
// };

// let one = forEach(arr, move);
// console.log([one, result]);
