const addWeek = (obj) => {
  let dayNames = [
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

  let currentDate = new Date(obj);
  let epochToZero = currentDate.getTime() + 62135596800000;
  let getMSinDay = 24 * 60 * 60 * 1000;
  let getDaysFromZeroEpoch = epochToZero / getMSinDay;
  //   console.log(getDaysFromZeroEpoch%7);
  return dayNames[getDaysFromZeroEpoch % 14];
};

const timeTravel = (obj) => {
  let modDate = new Date(obj.date);
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

// console.log(addWeek(new Date('0001-01-01'))); // monday
// console.log(addWeek(new Date('0001-01-02'))); // tuesday
// console.log(addWeek(new Date('0001-01-03'))); // wednesday
// console.log(addWeek(new Date('0001-01-07'))); // sunday
// console.log(addWeek(new Date('0001-01-08'))); // secondMonday
// console.log(addWeek(new Date('0001-01-09'))); // secondTuesday
// console.log(addWeek(new Date('2025-08-11'))); // secondSunday
