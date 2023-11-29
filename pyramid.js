const pyramid = (str, num) => {
  let returnString = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      returnString += ' ';
    }
    for (let x = 0; x <= i * 2; x++) {
      returnString += str;
    }
    if (i != num - 1) {
      returnString += '\n';
    }
  }
  return returnString;
};

// console.log(pyramid('*', 20));
