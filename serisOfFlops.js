const series = async (arr) => {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    returnArr.push(await arr[i]());
  }
  console.log(returnArr);
  return returnArr;
};

// let ctx = Math.random;

// console.log(series([])); //[]
// console.log(series([() => 1, () => true])); //[1, true]
// console.log(series([() => Promise.resolve(1), () => Promise.resolve(true)])); //[1, true]
// console.log(series([() => Promise.resolve(1), () => true])); // [1, true]
