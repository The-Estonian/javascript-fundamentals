const matchCron = (str, date) => {
  let minute = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let stringSplitter = str.split(' ');
  let check1 = false;
  let check2 = false;
  let check3 = false;
  let check4 = false;
  let check5 = false;
  if (stringSplitter[0] == '*' || stringSplitter[0] == minute) {
    check1 = true;
  }
  if (stringSplitter[1] == '*' || stringSplitter[1] == hour) {
    check2 = true;
  }
  if (stringSplitter[2] == '*' || stringSplitter[2] == day) {
    check3 = true;
  }
  if (stringSplitter[3] == '*' || stringSplitter[3] == month) {
    check4 = true;
  }
  if (stringSplitter[4] == '*' || stringSplitter[4] == year) {
    check5 = true;
  }

  if (check1 && check2 && check3 && check4 && check5) {
    return true;
  }
  return false;
};

console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))); // -> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // -> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // -> false
