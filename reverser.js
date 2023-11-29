const reverse = (arr) => {
  if (Array.isArray(arr)) {
    let returnArray = [];
    for (let index = arr.length - 1; index >= 0; index--) {
      returnArray.push(arr[index]);
    }
    return returnArray;
  }
  let returnArray = '';
  for (let index = arr.length - 1; index >= 0; index--) {
    returnArray += arr[index];
  }
  return returnArray;
};

// console.log(reverse('abcdefghij'));
// console.log(reverse(['a', 'b', 'c', 'd', 'e']));
