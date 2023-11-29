const RNA = (str) => {
  let returnString = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] == 'G') {
      returnString += 'C';
    } else if (str[index] == 'C') {
      returnString += 'G';
    } else if (str[index] == 'T') {
      returnString += 'A';
    } else if (str[index] == 'A') {
      returnString += 'U';
    }
  }
  return returnString;
};

const DNA = (str) => {
  let returnString = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] == 'C') {
      returnString += 'G';
    } else if (str[index] == 'G') {
      returnString += 'C';
    } else if (str[index] == 'A') {
      returnString += 'T';
    } else if (str[index] == 'U') {
      returnString += 'A';
    }
  }
  return returnString;
};

console.log(RNA(''));
