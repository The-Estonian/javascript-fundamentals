const fusion = (obj1, obj2) => {
  let output = {};
  for (const [key, iterator] of Object.entries(obj1)) {
    output[key] = iterator;
  }
  //  console.log(typeof(a) == typeof(b));

  for (const [key, iterator] of Object.entries(obj2)) {
    if (typeof iterator === 'string' && typeof output[key] === 'string') {
      if (output[key] !== undefined) {
        output[key] = output[key] + ' ' + iterator;
      } else {
        output[key] = iterator;
      }
    } else if (
      typeof iterator === 'number' &&
      typeof output[key] === 'number'
    ) {
      if (output[key] !== undefined) {
        output[key] = output[key] + iterator;
      } else {
        output[key] = iterator;
      }
    } else if (
      typeof output[key] === 'object' &&
      !Array.isArray(output[key]) &&
      output[key] !== null &&
      typeof iterator === 'object' &&
      !Array.isArray(iterator) &&
      iterator !== null
    ) {
      if (output[key] !== undefined) {
        output[key] = fusion(output[key], iterator);
      } else {
        output[key] = iterator;
      }
    } else if (Array.isArray(output[key]) && Array.isArray(iterator)) {
      if (output[key] !== undefined) {
        output[key] = output[key].concat(iterator);
      } else {
        output[key] = iterator;
      }
    } else {
      output[key] = iterator;
    }
  }
  return output;
};

//Object.entries(obj);
//Object.keys(obj);
//Object.values(obj);

// const fusion2 = (obj1, obj2) => {
//     let output = {};
//     for(let key in obj1) {
//         if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
//             output[key] = obj1[key].concat(obj2[key]);
//         } else if ((typeof obj1[key] === 'string' || obj1[key] instanceof String) && (typeof obj2[key] === 'string' || obj2[key] instanceof String))
//     }
// }

// console.log(fusion({ arr: [1, '2'] }, { arr: [2] })); //{ arr: [ 1, '2', 2 ] });
// console.log(
//   fusion(
//     { arr: [], arr1: [5] },
//     { arr: [10, 3], arr1: [15, 3], arr2: ['7', '1'] }
//   )
// ); //{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

// console.log(fusion({ str: 'salem' }, { str: 'alem' })); // -> { str: 'salem alem' }
// console.log(fusion({ str: 'salem' }, { str: '' })); // -> { str: 'salem ' }

// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })); // -> { a: 20, b: 10, c: 1 }

// console.log(fusion({ b: { c: { d: 'Salem' } } }, { b: { c: { d: 'alem' } } })); // -> { a: 11, x: [], b: { c: 'Salem alem' } }

// console.log(
//   fusion(
//     { a: { b: [3, 2], c: { d: 8 } } },
//     { a: { b: [0, 3, 1], c: { d: 3 } } }
//   )
// ); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }

// console.log(fusion({ a: 'hello', b: [] }, { a: 4 })); // -> { a: 4, b: [] }
