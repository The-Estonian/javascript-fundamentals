const map = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i], i, arr));
  }
  return newArr;
};

const flatMap = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let middleman = func(arr[i]);
    if (Array.isArray(middleman)) {
      for (let j = 0; j < middleman.length; j++) {
        newArr.push(middleman[j]);
      }
    } else {
      newArr.push(middleman);
    }
  }
  return newArr;
};

// const testFunc = (n) => [n, n];
// const add1 = (el) => el + 1;

// console.log(map([11, -9, 21, -94, 87, 103, 36, 90, 111], add1));
// console.log(flatMap([1, 2, 3], testFunc));
// console.log(flatMap(['101', -9, 21, -94, 87, '1021', '35,891', 111], add1));
