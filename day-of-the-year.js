const dayOfTheYear = (date) => {
  let months = date.getMonth();
  let counter = 0;
  for (let i = 0; i < months; i++) {
    counter += new Date(date.getFullYear(), i, 0).getDate();
    // console.log(counter);
  }
  return counter + date.getDate();
};

// console.log(dayOfTheYear(new Date('0005-01-01')));
console.log(dayOfTheYear(new Date('1664-08-09'))); // 222
