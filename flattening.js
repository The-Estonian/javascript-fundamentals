const flat = (arr, depth = 1) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      newArray = newArray.concat(flat(arr[i], depth - 1));
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

let items = [0, 1, [2, [3, [4, 5]]]];

// console.log(flat([0, 1, [2, [3, [4, 5]]]], Infinity));
