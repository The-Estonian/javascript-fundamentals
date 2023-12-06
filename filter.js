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

const partition = () => {
  let winners = [];
  let outcast = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      winners.push(arr[i]);
    } else {
      outcast.push(arr[i]);
    }
  }
  return [winners, outcast];
};

// const check1 = (el) => el % 2 === 0;

// console.log(filter([10, -10, 20, 86, 3, 32, 450, 950, 66, 150], check1));
