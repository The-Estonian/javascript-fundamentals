const filter = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const reject = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const partition = (arr, func) => {
  let winners = [];
  let outcast = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      winners.push(arr[i]);
    } else {
      outcast.push(arr[i]);
    }
  }
  let returnArr = [];
  returnArr.push(winners);
  returnArr.push(outcast);
  return returnArr;
};

// const check1 = (el) => el % 2 === 0;

// console.log(
//   partition(
//     [10, -10, 20, 86, 2, 32, 450, 950, 66, 150, -95, 15, 3, 5, 33, 45],
//     check1
//   )
// );
