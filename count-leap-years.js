function leaper(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const countLeapYears = (date) => {
  let counter = 0;
  for (let i = 1; i < date.getFullYear(); i++) {
    counter += leaper(i) ? 1 : 0;
  }
  return counter;
};

console.log(countLeapYears(new Date('0001-12-01'))); // 0
console.log(countLeapYears(new Date('1664-08-09'))); // 403
