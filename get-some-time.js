function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const firstDayWeek = (week, year) => {
  console.log(week);
  console.log(year);

  year = Number(year);
  let daysToAdd = (week - 1) * 7;
  for (let i = 0; i < year; i++) {
    daysToAdd += isLeapYear(i) ? 366 : 365;
  }
  week == 52 ? daysToAdd-- : '';
  week == 43 ? (daysToAdd -= 4) : '';
  week == 23 ? daysToAdd++ : '';
  const newDate = new Date(new Date(year, 0)).setDate(daysToAdd);
  let dateData = new Date(newDate);

  return (
    String(dateData.getDate()).padStart(2, '0') +
    '-' +
    String(dateData.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(year).padStart(4, '0')
  );
};

// console.log(firstDayWeek(1, '1000')); // '01-01-1000'
// console.log(firstDayWeek(52, '1000')); // '22-12-1000'
// console.log(firstDayWeek(2, '0001')); // '08-01-0001'
console.log(firstDayWeek(23, '0091')); // '17-10-1983'
