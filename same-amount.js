const sameAmount = (str, exp1, exp2) => {
  let testCounter = 0;
  console.log(str);
  let regex1 = str.match(exp1);
  let regex2 = str.match(exp2);
  //   console.log(regex1[0].length);
  //   console.log(regex2[0].length);
  if (regex1 !== null && regex2 !== null) {
    console.log(testCounter);
    testCounter++;
    return regex1[0].length === regex2[0].length;
  }
  return false;
};

// console.log(sameAmount('hellow', /h/, /w/));○
// console.log(sameAmount('hello', /h/, /w/));
// console.log(sameAmount('q', /q /, /qqqqqqq/));
console.log(sameAmount('qqqq', /qqqq /, /qqqqqqq/));
// console.log(sameAmount('hello how are you', /l/, /e/));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global
