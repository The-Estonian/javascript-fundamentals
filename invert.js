const invert = (obj) => {
  let returnObj = {};
  for (const [key, value] of Object.entries(obj)) {
    returnObj[value] = key;
  }
  return returnObj;
};

// console.log(
//   invert({
//     a: 'somestring',
//     b: 42,
//   })
// );
