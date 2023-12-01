const ionOut = (str) => {
  const returnArray = [];
  let regex = /tion/g;
  const inputArray = str.split(' ');
//   console.log(inputArray[0].slice(0, -4));
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].match(regex)) {
    //   console.log('REGEX OK');
      returnArray.push(inputArray[i].replace(/,/g, '').slice(0, -3));
    }
  }
  return returnArray;
};
// console.log(ionOut('This ption is pretty dtion right?'));
// console.log(ionOut('attention, direction'));
