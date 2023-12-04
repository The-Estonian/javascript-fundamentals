const isValid = (date) => {
  return new Date(date) != 'Invalid Date';
};

const isAfter = (date1, date2) => {
  if (date1.getTime() > date2.getTime()) {
    return true;
  }
  return false;
};

const isBefore = (date1, date2) => {
  return !isAfter(date1, date2);
};

const isFuture = (date) => {
  var currentDate = new Date();
  if (isValid(date) && isAfter(date, currentDate)) {
    return true;
  }
  return false;
};

const isPast = (date) => {
  return !isFuture(date);
};

// var date1 = new Date('2025-08-11');
// var date2 = new Date('2025-08-12');
// console.log(isAfter(date2, date1));
// console.log(isBefore(date1, date2));
// console.log(isFuture(date1));
