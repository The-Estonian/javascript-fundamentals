const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

// const replica = (target, ...sources) => {
//   console.log([...sources]);
//   if ([...sources][0] == /hello/) {
//     console.log('MATCH');
//     return Object.assign(target, ...sources);
//   }
//   if (!sources.length) return target;
//   const source = sources.shift();

//   if (isObject(target) && isObject(source)) {
//     for (const key in source) {
//       if (isObject(source[key])) {
//         if (!target[key]) Object.assign(target, { [key]: {} });
//         replica(target[key], source[key]);
//       } else {
//         Object.assign(target, { [key]: source[key] });
//       }
//     }
//   }

//   return replica(target, ...sources);
// };

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

// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));

// { a: { b: 1, c: 23 } }
function replica(target, ...sources) {
  if (sources.length > 1) {
    let tempObj = {};
    for (let i = 0; i < sources.length; i++) {
      for (const [key, value] of Object.entries(sources[i])) {
        tempObj[key] = value;
      }
    }
    return tempObj;
  }
  if (!sources.length) return target;
  const source = sources.shift();

  if (
    typeof source !== 'object' ||
    source === null ||
    source instanceof RegExp ||
    typeof source === 'function'
  ) {
    return source;
  }

  if (source instanceof Array) {
    return source.reduce((arr, item, i) => {
      arr[i] = replica(null, item); // Use null as target for arrays
      return arr;
    }, []);
  } else if (source instanceof Object) {
    return Object.keys(source).reduce((newObj, key) => {
      newObj[key] = replica(newObj[key], source[key]); // Use existing property as target for objects
      return newObj;
    }, target || {}); // Use target if provided, otherwise create a new object
  }
}

// console.log(replica({ con: console.log }, { reg: /hello/ }));
// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));
// console.log(
//   replica(
//     {},
//     Object.freeze({ line: 'Replicants are like any other machine' }),
//     Object.freeze({ author: 'Rich' })
//   )
// );
