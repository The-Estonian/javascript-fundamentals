const sunnySunday = (obj) => {
  var dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  var currentDate = new Date(obj);
  var epochToZero = currentDate.getTime() + 62135596800000;
  var getMSinDay = 24 * 60 * 60 * 1000;
  var getDaysFromZeroEpoch = epochToZero / getMSinDay;
  //   console.log(getDaysFromZeroEpoch%7);
  return dayNames[getDaysFromZeroEpoch % 6];
};

console.log(sunnySunday(new Date('0001-01-01')));
