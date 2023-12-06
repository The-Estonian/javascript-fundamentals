const map = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
};

const flatMap = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let middleman = func(arr[i]);
    for (let j = 0; j < middleman.length; j++) {
      newArr.push(middleman[j]);
    }
  }
  return newArr;
};

// const testFunc = (n) => [n, n];
// const add1 = (el) => el + 1;

// console.log(map([11, -9, 21, -94, 87, 103, 36, 90, 111], add1));
// console.log(flatMap([1, 2, 3], testFunc));
