const filter = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const reject = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// const check1 = (el) => el % 2 === 0;

// console.log(filter([10, -10, 20, 86, 3, 32, 450, 950, 66, 150], check1));
