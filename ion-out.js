const ionOut = (str) => {
  const returnArray = [];
  let regex = /tion/g;
  const inputArray = str.split(' ');
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].match(regex)) {
    //   console.log('REGEX OK');
      returnArray.push(inputArray[i].slice(0, -3));
    }
  }
  return returnArray;
};
// console.log(ionOut('This ption is pretty dtion right?'));
