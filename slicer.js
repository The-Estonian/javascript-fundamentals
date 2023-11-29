const slice = (arr, startIndx, endIndx = arr.length) => {
  var returnSlice = [];
  for (let index = startIndx; index < endIndx; index++) {
    returnSlice.push(arr[index])
  }
  return returnSlice;
};


console.log(slice([1, 2, 3, 4, 5], 2));