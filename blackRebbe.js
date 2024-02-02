const isFriday = (date) => {
  var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return dayNames[date.getDay()] == 'Friday' ? true : false;
};

const isWeekend = (date) => {
  return date.getDay() == 6 || date.getDay() == 0 ? true : false;
};

function leaper(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const isLeapYear = (date) => {
  return leaper(date.getFullYear());
};

const isLastDayOfMonth = (date) => {
  let year = new Date(date).getFullYear();
  let month = new Date(date).getMonth();

  let lastDay = new Date(year, month + 1, 0);

  return lastDay.getDate() === date.getDate();
};

// console.log(isFriday(new Date('December 2, 2023')));
// console.log(isWeekend(new Date('December 3, 2023')));
// console.log(isLeapYear(new Date('December 3, 2024')));
// console.log(isLastDayOfMonth(new Date('December 30, 2023')));
console.log(isLastDayOfMonth(new Date('December 31, 2023')));
