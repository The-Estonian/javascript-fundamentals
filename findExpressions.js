const findExpression = (n) => {
  let expression = [];
  let testN = 1;
  if (n % 2 == 1) {
    return undefined;
  }
  while (testN != n) {
    if (n > 1) {
      if ((n / 2) % 2 == 1 && n != 2) {
        n -= 4;
        expression.unshift(add4);
      } else {
        n /= 2;
        expression.unshift(mul2);
      }
    } else {
      n++;
    }
    if (testN === n) {
      break;
    }
    expression.unshift(' ');
  }
  expression.unshift('1 ');
  return expression.join('');
};

// const add4 = '+4';
// const mul2 = '*2';

// console.log(findExpression(100).split(' '));
