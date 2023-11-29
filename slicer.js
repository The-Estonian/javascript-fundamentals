const slice = (arr, startIndx, endIndx = arr.length) => {
  if (startIndx < 0) {
    startIndx = endIndx + startIndx;
  }
  if (endIndx < 0) {
    endIndx = arr.length + endIndx;
  }
  if (Array.isArray(arr)) {
    var returnSlice = [];
    for (let index = startIndx; index < endIndx; index++) {
      returnSlice.push(arr[index]);
    }
    return returnSlice;
  }
  var returnSlice = '';
  for (let index = startIndx; index < endIndx; index++) {
    returnSlice += arr[index];
  }
  return returnSlice;
};

console.log(slice([1, 2, 3, 4, 5], 2));
console.log(slice('abcdef', 2));
console.log(slice('abcdef', -2));
console.log(slice('abcdef', 0, -2));
