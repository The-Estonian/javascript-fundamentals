//return every letter that is followed by space
//and is followed by single digit number
//and number not followed by any letter

const letterSpaceNumber = (str) => {
  let returnArr = [];
  const reg = /[a-z] [0-9](?![a-z0-9])/gi;
  let middleman;

  while ((middleman = reg.exec(str)) !== null) {
    returnArr.push(middleman[0]);
  }
  return returnArr;
};

// console.log(letterSpaceNumber('example 1, example 20, example 3'));
