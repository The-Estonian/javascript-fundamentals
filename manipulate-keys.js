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

const reduceKeys = (obj, func, i) => {
  if (Array.isArray(obj)) {
    return obj.reduce(func);
  }
  let returnObj = [];
  for (const [key, value] of Object.entries(obj)) {
    returnObj.push(key);
  }
  return returnObj.reduce(func, i);
};

// const nutrients = ['vinegar, sugar, oil, onion, garlic, paprika'];

// // console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // // output: { protein: 20 }

// // console.log(mapKeys(nutrients, (k) => `-${k}`))
// // // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)));
// output: carbohydrates, protein, fat

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
