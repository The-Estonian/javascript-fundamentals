const firstDayWeek = (week, year) => {
  console.log(week);
  console.log(year);
  return '01-' + (week < 10 ? '0' + String(week) : String(week)) + '-' + year;
};

// console.log(firstDayWeek(1, '1000')); // '01-01-1000'
