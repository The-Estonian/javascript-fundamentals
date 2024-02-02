const chunk = (arr, size) => {
  let returnArray = [];
  for (let index = 0; index < arr.length; ) {
    var returnSlice = arr.slice(index, index + size);
    returnArray.push(returnSlice);
    index += size;
  }
  return returnArray;
};

// console.log(chunk('abcdefghij', 2));
// console.log(chunk(['a', 'b', 'c', 'd'], 2));
