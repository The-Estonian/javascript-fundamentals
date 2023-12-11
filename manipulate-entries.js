const filterEntries = (obj, func) => {
  let returnObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (func([key, value])) {
      returnObj[key] = value;
    }
  }
  return returnObj;
};

const mapEntries = (obj, func) => {
  let returnObj = {};
  for (const [key, value] of Object.entries(obj)) {
    let [newKey, newValue] = func([key, value]);
    returnObj[newKey] = newValue;
  }
  return returnObj;
};

const reduceEntries = (obj, func, i) => {
  let returnObj = [];
  for (const [key, value] of Object.entries(obj)) {
    returnObj.push([key, value]);
  }
  return returnObj.reduce(func, i);
};

const totalCalories = (objEntry) => {
  let caloriesCounter = 0;
  for (const [key, value] of Object.entries(objEntry)) {
    if (nutritionDB.hasOwnProperty(key)) {
      caloriesCounter += (nutritionDB[key].calories * value) / 100;
    }
  }
  //   return Math.round(caloriesCounter * 100) / 100;
  return caloriesCounter.toFixed(1);
};

const lowCarbs = (objEntry) => {
  for (const [key, value] of Object.entries(objEntry)) {
    if (nutritionDB.hasOwnProperty(key)) {
      if ((nutritionDB[key].carbs * value) / 100 > 50) {
        delete objEntry[key];
      }
    }
  }
  return objEntry;
};
const cartTotal = (objEntry) => {
  let returnCart = {};
  for (const [key, value] of Object.entries(objEntry)) {
    if (nutritionDB.hasOwnProperty(key)) {
      let tempObj = {};
      for (const [innerKey, innerValue] of Object.entries(nutritionDB[key])) {
        tempObj[innerKey] = (innerValue * value) / 100;
      }
      returnCart[key] = tempObj;
    }
  }
  return returnCart;
};

//Object.entries(obj);
//Object.keys(obj);
//Object.values(obj);

const nutritionDB = {
  tomato: {
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    sugar: 2.6,
    fiber: 1.2,
    fat: 0.2,
  },
  vinegar: {
    calories: 20,
    protein: 0.04,
    carbs: 0.6,
    sugar: 0.4,
    fiber: 0,
    fat: 0,
  },
  oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
  onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
  garlic: {
    calories: 149,
    protein: 6.4,
    carbs: 33,
    sugar: 1,
    fiber: 2.1,
    fat: 0.5,
  },
  paprika: {
    calories: 282,
    protein: 14.14,
    carbs: 53.99,
    sugar: 1,
    fiber: 0,
    fat: 12.89,
  },
  sugar: {
    calories: 387,
    protein: 0,
    carbs: 100,
    sugar: 100,
    fiber: 0,
    fat: 0,
  },
  orange: {
    calories: 49,
    protein: 0.9,
    carbs: 13,
    sugar: 9,
    fiber: 0.2,
    fat: 0.1,
  },
};

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 };
const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 };

// console.log(filterEntries(groceriesCart1, ([, v]) => v < 300)); // { onion: 230, garlic: 220 }

// console.log(
//   mapEntries(groceriesCart1, ([k, v]) => [
//     v > 250 ? `✔️${k}` : `❌${k}`,
//     v - 250,
//   ])
// );

// {
// '✔️oil': 250,
// '❌onion': -20,
// '❌garlic': -30,
// '✔️paprika': 230,
//   }

// console.log(reduceEntries(groceriesCart1, (acc, [k, v]) => acc + k + v, '')); //'oil500onion230garlic220paprika480'

console.log('Total calories:');
console.log(totalCalories(groceriesCart1));
// console.log('Items with low carbs:');
// console.log(lowCarbs(groceriesCart1));
// console.log('Total cart nutritional facts:');
// console.log(cartTotal(groceriesCart));
