const sameAmount = (str, exp1, exp2) => {
  return str.match(exp1).length == str.match(exp2).length;
};
