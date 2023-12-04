const addWeek = (obj) => {
  var dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'secondMonday',
    'secondTuesday',
    'secondWednesday',
    'secondThursday',
    'secondFriday',
    'secondSaturday',
    'secondSunday',
  ];

  currentDate = new Date(obj);
  startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  if (Math.ceil(days / 7) % 2 == 0) {
    return dayNames[currentDate.getDay() + 6];
  }
  return dayNames[currentDate.getDay() - 1];
};

const timeTravel = (obj) => {
  var modDate = new Date(obj.date);
  modDate.setHours(obj.hour, obj.minute, obj.second);
  return modDate;
};

// console.log(
//   timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString()
// );

//Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)

// console.log(addWeek(new Date('0001-01-01')));
// console.log(addWeek(new Date('0001-01-02')));
// console.log(addWeek(new Date('0001-01-07')));
// console.log(addWeek(new Date('0001-01-08')));
// console.log(addWeek(new Date('0001-01-09')));
// console.log(addWeek(new Date('2025-08-11')));
