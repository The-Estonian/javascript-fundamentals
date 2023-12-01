const sameAmount = (str, exp1, exp2) => {
  let regex1 = str.match(exp1);
  let regex2 = str.match(exp2);
  if (regex1 !== null && regex2 !== null) {
    regex1.length == regex2.length;
  }
  return false;
};

// console.log(sameAmount('hellow', /h/, /w/));○
// console.log(sameAmount('hello', /h/, /w/));
// console.log(sameAmount('q', /q /, /qqqqqqq/));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global
