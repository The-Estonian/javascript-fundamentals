const multiply = (a, b) => {
  var trigger = false;
  if (a < 0) {
    a = 0 - a;
    trigger = !trigger;
  }
  if (b < 0) {
    b = 0 - b;
    trigger = !trigger;
  }
  var returnSum = 0;
  for (let index = 0; index < b; index++) {
    returnSum += a;
  }
  if (trigger) {
    returnSum = returnSum - returnSum - returnSum;
  }
  return returnSum;
};

const divide = (a, b) => {
  var trigger = false;
  if (a < 0) {
    a = 0 - a;
    trigger = !trigger;
  }
  if (b < 0) {
    b = 0 - b;
    trigger = !trigger;
  }
  var returnSum = a;
  for (let index = 0; index < a; index++) {
    if (returnSum >= b) {
      returnSum -= b;
    } else {
      if (trigger) {
        return index - index - index;
      } else {
        return index;
      }
    }
  }
};

const modulo = (a, b) => {
  var trigger = false;
  if (a < 0) {
    a = 0 - a;
    trigger = !trigger;
  }
  if (b < 0) {
    b = 0 - b;
    // trigger = !trigger;
  }
  var returnSum = a;
  for (let index = 0; index < a; index++) {
    if (returnSum >= b) {
      returnSum -= b;
    } else {
      if (trigger) {
        return returnSum - returnSum - returnSum;
      }
      return returnSum;
    }
  }
};

console.log(modulo(-123, 22));
