const filterKeys = (obj, func) => {
  let returnObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (func(key)) {
      returnObj[key] = value;
    }
  }
  return returnObj;
};

const mapKeys = (obj, func) => {
  let returnObj = {};
  for (const [key, value] of Object.entries(obj)) {
    returnObj[func(key)] = value;
  }
  return returnObj;
};

const reduceKeys = (obj, func, i="") => {
  let newArray = [];
  for (const [key, value] of Object.entries(obj)) {
    newArray.push(key);
  }
//   console.log(newArray);
  return newArray.reduce(func);
};

// const nutrients = {
//   vinegar: 80,
//   sugar: 100,
//   oil: 50,
//   onion: 200,
//   garlic: 22,
//   paprika: 4,
// };

// // console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // // output: { protein: 20 }

// // console.log(mapKeys(nutrients, (k) => `-${k}`))
// // // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) => `${acc}${cr}:`, ':'));
// output: carbohydrates, protein, fat;

// console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)));

// // // eq(
// //     reduceKeys(ctx.cart, (acc, cr) => `${acc}${cr}:`, ':'),
// //     ':vinegar:sugar:oil:onion:garlic:paprika:',
// //   )

// //   AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
// // + actual - expected

// // + 'vinegarsugar:oil:onion:garlic:paprika:'
// // - ':vinegar:sugar:oil:onion:garlic:paprika:'

// if (typeof res !== "number") {
//     if (res.slice(0, 2) === ", ") res = res.slice(2);
//     if (undef && res[0] === ":") res = res.slice(1);
// }

//Object.entries(obj);
//Object.keys(obj);
//Object.values(obj);
