const multiply = (a, b) => {
  var returnSum = 0
  for (let index = 0; index < b; index++) {
    returnSum += a;
  }
  return returnSum;
};

const divide = (a, b) => {
  var returnSum = a
  for (let index = 0; index < a; index++) {
    if (returnSum >= b) {
      returnSum -= b;
    } else {
      return index;
    }
  }
};

const modulo = (a, b) => {
  var returnSum = a;
  for (let index = 0; index < a; index++) {
    if (returnSum >= b) {
      returnSum -= b;
    } else {
      return returnSum;
    }
  }
};

console.log(modulo(100, 6));
