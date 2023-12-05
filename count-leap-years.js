function leaper(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const countLeapYears = (date) => {
  let counter = 0;
  for (let i = 0; i < date.getFullYear(); i++) {
    counter += leaper(i) ? 1 : 0;
  }
  return counter;
};

