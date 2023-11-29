const pyramid = (str, num) => {
  let returnString = '';
  // num amount of rows
  for (let i = 0; i < num; i++) {
    // fill spaces before str icons
    for (let j = 0; j < num - i - 1; j++) {
      let filler = '';
      for (let y = 0; y < str.length; y++) {
        filler += ' ';
      }
      returnString += filler;
    }
    // fill str icons
    for (let x = 0; x <= i * 2; x++) {
      returnString += str;
    }
    // new line after each iteration
    if (i != num - 1) {
      returnString += '\n';
    }
  }
  return returnString;
};

console.log(pyramid('{}', 12));
