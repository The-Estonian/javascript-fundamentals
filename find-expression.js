const findExpression = (n) => {
  let expression = '1';
  let testN = 1;
  if (n % 2 == 1) {
    return undefined;
  }
  while (testN < n) {
    expression += ' ';
    if (testN * 2 < n) {
      expression += mul2;
      testN *= 2;
    } else {
      expression += add4;
      testN += 4;
    }
  }
  return expression;
};

// const add4 = '+4';
// const mul2 = '*2';

// console.log(findExpression(100));
