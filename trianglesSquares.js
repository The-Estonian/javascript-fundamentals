const triangle = (str, num) => {
  let returnString = '';
  for (let index = 0; index < num; index++) {
    let strVal = ""
    for (let j = 0; j <= index; j++) {
       strVal += str
    }
    returnString += strVal;
    if (index != num - 1) {
      returnString += '\n';
    }
  }
  return returnString;
};

// console.log(triangle('*', 5));
