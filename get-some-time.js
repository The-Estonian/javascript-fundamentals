const firstDayWeek = (week, year) => {
  //   console.log(week);
  //   console.log(year);
  let day = 1;
  const month = Math.floor(week / 4.3);

  const firstDayOfYear = new Date(year, 0, 1);

  const daysToAdd = (week - 1) * 7;

  const firstDayOfWeek = new Date(firstDayOfYear);
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() + daysToAdd);
  day = firstDayOfWeek.getDate() - 2;

  return (
    (day < 10 ? '0' + String(day) : String(day)) +
    '-' +
    (month < 10 ? '0' + String(month) : String(month)) +
    '-' +
    year
  );
};

// console.log(firstDayWeek(1, '1000')); // '01-01-1000'
console.log(firstDayWeek(52, '1000')); // '22-12-1000'
