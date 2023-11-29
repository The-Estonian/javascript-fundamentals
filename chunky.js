const chunky = (arr, size) => {
  var returnArray = [];
  for (let index = 0; index < arr.length; ) {
    var returnSlice = arr.slice(index, index + size);
    returnArray.push(returnSlice);
    index += size;
  }
  return returnArray;
};

console.log(chunky('abcdefghij', 2));
