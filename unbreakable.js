const split = (str, trigger) => {
  var returnArray = [];
  var trailingStr = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] == trigger) {
      returnArray.push(trailingStr);
      trailingStr = '';
      continue;
    }
    trailingStr += str[index];
  }
  returnArray.push(trailingStr);
  return returnArray;
};

const join = (arr, trigger) => {
  var returnString = '';
  for (let index = 0; index < arr.length; index++) {
    if (index != 0) {
      returnString += trigger;
    }
    returnString += arr[index];
  }
  return returnString;
};

// console.log(split('abxcdxefxgh', 'x'));
// console.log(join(['ab', 'cd', 'ef', 'gh'], ':'));
