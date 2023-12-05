function leaper(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const dayOfTheYear = (date) => {
  const startOfYear = new Date(2000, 0, 1);

  date.setFullYear(2000);
  const timeD = date - startOfYear;

  const days = Math.floor(timeD / (24 * 60 * 60 * 1000)) + 1;

  return days;
};
console.log(dayOfTheYear(new Date('0005-01-01'))); // 1
console.log(dayOfTheYear(new Date('1664-08-09'))); // 222
console.log(dayOfTheYear(new Date('1600-12-31'))); // 366
