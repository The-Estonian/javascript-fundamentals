const deepCopy = (obj) => {
  if (Array.isArray(obj)) {
    let newArray = [];
    for (let i = 0; i < obj.length; i++) {
      if (Array.isArray(obj[i])) {
        deepCopy(deepCopy);
      }
      newArray.push(obj[i]);
    }
    return newArray;
  }
  let target = Array.isArray(obj) ? [] : {};
  for (let prop in obj) {
    let value = obj[prop];
    if (value && typeof value === 'object') {
      target[prop] = deepCopy(value);
    } else {
      target[prop] = value;
    }
  }
  return target;
};

// const copyAndCompare = (obj) => {
//   const copy = deepCopy(Object.freeze(obj));
//   console.log(copy);
//   console.log(obj);
//   return copy !== obj;
// };

// console.log(copyAndCompare([console.log, /hello/]));

// const r = Math.random();
// const obj = [r, Object.freeze([r, Object.freeze([r])])];
// const copy = deepCopy(obj);
// console.log(obj[1][1],copy[1][1]);
