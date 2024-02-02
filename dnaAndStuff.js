const nasa = (n) => {
  let returnString = '';
  for (let index = 1; index <= n; index++) {
    if (index != 1) {
      returnString += ' ';
    }
    if (index % 3 === 0 && index % 5 === 0) {
      returnString += 'NASA';
    } else if (index % 3 === 0) {
      returnString += 'NA';
    } else if (index % 5 === 0) {
      returnString += 'SA';
    } else {
      returnString += index;
    }
  }
  return returnString;
};

console.log(nasa(15));
