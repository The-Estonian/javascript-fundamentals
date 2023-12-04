const isValid = (date) => {
  console.log(date);
  let newDate = new Date(date);
  if (newDate.toString() == 'Invalid Date') {
    return false;
  }
  //   console.log(date);
  if (typeof date !== 'number' && !(date instanceof Date)) {
    return false;
  }
  return true;
};

const isAfter = (date1, date2) => {
  if (date1 > date2) {
    return true;
  }
  return false;
};

const isBefore = (date1, date2) => {
  if (date1 < date2) {
    return true;
  }
  return false;
};

const isFuture = (date) => {
  let currentDate = new Date();
  if (isValid(date) && isAfter(date, currentDate)) {
    return true;
  }
  return false;
};

const isPast = (date) => {
  return !isFuture(date);
};

// var date1 = new Date('');
// var date2 = new Date('2025-08-12');
// console.log(isAfter(date2, date1));
// console.log(isBefore(date1, date2));
// console.log(isFuture(date1));
// console.log(isValid(date1));
// console.log(isValid(Date.now()));
// console.log(isValid('2013 - 01 - 01'));
console.log(isBefore(new Date('')));
