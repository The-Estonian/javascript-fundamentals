const adder = (data, leftover = 0) => {
  if (data.length == 0) {
    return 0;
  }
  return data.reduce((start, end) => start + end, leftover);
};

// console.log(adder([1, 2, 3, 4])); // 10
console.log(adder([9, 24, 7, 11, 3], 10)); // 64

const sumOrMul = (data) => {
  return data.reduce((hold, run) => {
    if (run % 2 == 0) {
      return hold * run;
    } else {
      return hold + run;
    }
  });
};

// console.log(sumOrMul([29, 23, 3, 2, 25])); // 135

const funcExec = (data) => {
  return data.reduce((hold, run) => {
    return run(hold);
  });
};
