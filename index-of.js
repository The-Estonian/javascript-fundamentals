const indexOf = (arr, value, index = 0) => {
  for (index; index < arr.length; index++) {
    if (arr[index] == value) {
      return index;
    }
  }
  return -1;
};

const lastIndexOf = (arr, value, index = 0) => {
  var lastIndex = 0;
  for (index; index < arr.length; index++) {
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
