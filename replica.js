const replica = (target, ...sources) => {
  sources.forEach((e) => {
    for (const [key, value] of Object.entries(e)) {
      if (target.hasOwnProperty(key)) {
        target[key] = Object.assign(target[key], value);
      } else {
        target[key] = value;
      }
    }
  });
  return target;
};

//------------------------------------------------------------------------
// Object.prototype.hasOwnProperty();

// {
//   con: console.log,
//   reg: /hello/,
// }

// console.log(
//   replica(
//     {},
//     Object.freeze({ line: 'Replicants are like any other machine' }),
//     Object.freeze({ author: 'Rich' })
//   )
// );

// { line: 'Replicants are like any other machine', author: 'Rich' }

// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } })); // { a: { b: 1, c: 23 } }

// function replica(target, ...sources) {
//   if (sources.length > 1) {
//     let tempObj = {};
//     for (let i = 0; i < sources.length; i++) {
//       for (const [key, value] of Object.entries(sources[i])) {
//         tempObj[key] = value;
//       }
//     }
//     return tempObj;
//   }
//   if (!sources.length) return target;
//   const source = sources.shift();

//   if (
//     typeof source !== 'object' ||
//     source === null ||
//     source instanceof RegExp ||
//     typeof source === 'function'
//   ) {
//     return source;
//   }

//   if (source instanceof Array) {
//     return source.reduce((arr, item, i) => {
//       arr[i] = replica(null, item); // Use null as target for arrays
//       return arr;
//     }, []);
//   } else if (source instanceof Object) {
//     return Object.keys(source).reduce((newObj, key) => {
//       newObj[key] = replica(newObj[key], source[key]); // Use existing property as target for objects
//       return newObj;
//     }, target || {}); // Use target if provided, otherwise create a new object
//   }
// }

// ------------------------------------------------------------------------

// console.log(replica({ con: console.log }, { reg: /hello/ }));
// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));
// console.log(
//   replica(
//     {},
//     Object.freeze({ line: 'Replicants are like any other machine' }),
//     Object.freeze({ author: 'Rich' })
//   )
// );

// console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b); // 1
