const filterValues = (obj, func) => {
  let returnObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (func(value)) {
      returnObj[key] = value;
    }
  }
  return returnObj;
};

const mapValues = (obj, func) => {
  let returnObj = {};
  for (const [key, value] of Object.entries(obj)) {
    returnObj[key] = func(value);
  }
  return returnObj;
};

const reduceValues = (obj, func, i = 0) => {
  let returnObj = [];
  for (const [key, value] of Object.entries(obj)) {
    returnObj.push(value);
  }
  return returnObj.reduce(func, i);
};

//Object.entries(obj);
//Object.keys(obj);
//Object.values(obj);

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
// // output: { carbohydrates: 12, fat: 5 }

// console.log(mapValues(nutrients, (v) => v + 1));
// // output: { carbohydrates: 13, protein: 21, fat: 6 }

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr));
// // output: 37

// console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3));
