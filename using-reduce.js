const adder = (data, leftover = 0) => {
  return data.reduce((hold, run) => hold + run, leftover);
};

// console.log(adder([1, 2, 3, 4])); // 10
// console.log(adder([9, 24, 7, 11, 3], 10)); // 64
// console.log(adder([]), 0); // 0

const sumOrMul = (data, leftover = 0) => {
  return data.reduce((hold, run) => {
    if (run % 2 == 0) {
      return hold * run;
    } else {
      return hold + run;
    }
  }, leftover);
};

// console.log(sumOrMul([29, 23, 3, 2, 25])); // 135
console.log(sumOrMul([18, 17, 7, 13, 25], 12)); // 278

const funcExec = (data) => {
  return data.reduce((hold, run) => {
    return run(hold);
  });
};
