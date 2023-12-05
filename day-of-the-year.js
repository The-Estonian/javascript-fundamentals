const dayOfTheYear = (date) => {
  return (date.getTime() + 62135596800000) / 1000 / 60 / 60 / 24 + 1;
};

// console.log(dayOfTheYear(new Date('0005-01-01')));
