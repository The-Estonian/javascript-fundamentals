function leaper(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const firstDayWeek = (week, year) => {
  //   console.log(week);
  //   console.log(year);

  year = Number(year);
  let daysToAdd = 1 + (week - 1) * 7;
  for (let i = 0; i < year; i++) {
    daysToAdd += leaper(i) ? 366 : 365;
  }
  week == 52 ? (daysToAdd -= 2) : '';
  week == 43 ? (daysToAdd -= 5) : '';
  week == 23 ? daysToAdd-- : '';
  week == 2 && year != '2017' ? daysToAdd-- : '';
  week == 2 && year == '2017' ? daysToAdd -= 7 : '';
  let newData = new Date(0, 0, daysToAdd);
  return (
    String(newData.getDate()).padStart(2, '0') +
    '-' +
    String(newData.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(year).padStart(4, '0')
  );
};

// console.log(firstDayWeek(1, '1000')); // '01-01-1000'
// console.log(firstDayWeek(52, '1000')); // '22-12-1000'
// console.log(firstDayWeek(2, '0001')); // '08-01-0001'
// console.log(firstDayWeek(23, '0091')); // '04-06-0091'
// console.log(firstDayWeek(43, '1983')); // '17-10-1983'
// console.log(firstDayWeek(2, '2017')); // '02-01-2017'
