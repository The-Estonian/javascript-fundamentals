const sameAmount = (str, exp1, exp2) => {
  try {
    return str.match(exp1).length == str.match(exp2).length;
  } catch {
    return false;
  }
};

// console.log(sameAmount('hellow', /h/, /w/));
// console.log(sameAmount('hello', /h/, /w/));
