const indexOf = (arr, value, index = 0) => {
  for (index; index < arr.length; index++) {
    if (arr[index] == value) {
      return index;
    }
  }
  return -1;
};

const lastIndexOf = (arr, value, ind = arr.length) => {
  var lastIndex = -1;
  for (let index = 0; index <= ind; index++) {
    if (arr[index] == value) {
      lastIndex = index;
    }
  }
  return lastIndex;
};

const includes = (arr, value) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == value) {
      return true;
    }
    return false;
  }
};
// console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2));
// console.log(lastIndexOf([0, 0, 't', 't'], 't', 3));
// console.log(lastIndexOf('bigArray', {}));
